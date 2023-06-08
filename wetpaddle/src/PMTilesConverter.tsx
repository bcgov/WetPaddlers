import {useEffect, useState} from 'react'
import { FileUploader } from 'react-drag-drop-files'
import namingPrompt from './namingPrompt'
import NamingPrompt from './namingPrompt'


const PMTilesConverter = () => {
  const [file, setFile] = useState<File | null>(null)
  const [url, setUrl] = useState<string>("")
  const [isUrlSet, setIsUrlSet] = useState(false)
  const handleChange = (file: File) => {
    setFile(file)
  }

  useEffect(() => {
    if (file !== null) {
      processFile(file)
    }
  }, [file]) // eslint-disable-line react-hooks/exhaustive-deps

  const processFile = async (file: File) => {
    const contents = await file.text()
    const response = await fetch('http://127.0.0.1:8000/geo', {
      body: contents,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json()
    if (result && result.url) {
      setUrl(result.url)
      
      console.log(url)
  
    }
    setIsUrlSet(true)
  }
  return (<>
    {isUrlSet && <NamingPrompt />}
    <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={["GEOJSON"]}
      />
      {
        url && (
          <div style={{paddingTop: '2em', color: 'black', fontWeight: 'bold'}}>
            URL to your pmtiles file: <a href={url}>{url}</a>
          </div>
        )
      }
    </div>
   
   </>
  )
}

export default PMTilesConverter
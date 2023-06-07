import './App.css'

import { ReactMap } from './Map'
import { OpenLayersMap } from './openlayers/OpenLayersMap'

function App() {

  return (
    <div className="app">
    <ReactMap/>
    {/*<OpenLayersMap />  <-- TODO, openlayers map component*/}
    </div>
  )
}

export default App

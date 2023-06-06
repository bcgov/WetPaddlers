import * as ol from 'ol'
import Tile from 'ol/layer/Tile'
import { useEffect, useRef, useState } from 'react'
import { CENTER_OF_BC, MapContext, baseMapSource } from './constants'
import { fromLonLat } from 'ol/proj'


export const OpenLayersMap = () => {
  const [map, setMap] = useState<ol.Map | null>(null)
  const mapRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    // The React ref is used to attach to the div rendered in our
    // return statement of which this map's target is set to.
    // The ref is a div of type  HTMLDivElement.

    // Pattern copied from web/src/features/map/Map.tsx
    if (!mapRef.current) return

    // Create the map with the options above and set the target
    // To the ref above so that it is rendered in that div
    const mapObject = new ol.Map({
      view: new ol.View({
        zoom: 6,
        center: fromLonLat(CENTER_OF_BC)
      }),
      layers: [
        new Tile({
          source: baseMapSource
        })
      ],
      overlays: [],
      controls: []
    })
    mapObject.setTarget(mapRef.current)

    setMap(mapObject)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps



  return (
      <MapContext.Provider value={map}>
        <div ref={mapRef} style={{width: 1920, height: 1200}}></div>
      </MapContext.Provider>
  )
}

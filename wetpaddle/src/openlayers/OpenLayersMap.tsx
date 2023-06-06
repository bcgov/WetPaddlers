import * as ol from 'ol'
import Tile from 'ol/layer/Tile'
import VectorTile from "ol/layer/VectorTile";
import { Style, Stroke, Fill } from 'ol/style';
import * as pmtiles from 'pmtiles';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as olpmtiles from 'ol-pmtiles';
import { useGeographic } from 'ol/proj';
import { useEffect, useRef, useState } from 'react'
import { CENTER_OF_BC, MapContext, baseMapSource } from './constants'
import { fromLonLat } from 'ol/proj'

pmtiles.PMTiles

export const OpenLayersMap = () => {
  const [map, setMap] = useState<ol.Map | null>(null)
  const mapRef = useRef<HTMLDivElement | null>(null)
  const source = new olpmtiles.PMTilesVectorSource({
    url: "https://r2-public.protomaps.com/protomaps-sample-datasets/nz-buildings-v3.pmtiles",
    attributions: ["© Land Information New Zealand"],
  })

  const vectorLayer = new VectorTile({
    declutter: true,
    source,
    style: new Style({
      stroke: new Stroke({
        color: "gray",
        width: 1,
      }),
      fill: new Fill({
        color: "rgba(20,20,20,0.9)",
      }),
    }),
  });

  useGeographic();


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
        center: [172.606201,-43.556510],
        zoom: 7,
      }),
      layers: [
        vectorLayer
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

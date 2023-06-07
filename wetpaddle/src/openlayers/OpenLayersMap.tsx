import * as ol from 'ol'
import VectorTile from "ol/layer/VectorTile";
import XYZ from 'ol/source/XYZ'
import Tile from 'ol/layer/Tile'
import { Style, Stroke, Fill } from 'ol/style';
import * as pmtiles from 'pmtiles';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as olpmtiles from 'ol-pmtiles';
import { useGeographic } from 'ol/proj';
import { useEffect, useRef, useState } from 'react'
import { MapContext } from './constants'

pmtiles.PMTiles

export const OpenLayersMap = () => {
  const [map, setMap] = useState<ol.Map | null>(null)
  const mapRef = useRef<HTMLDivElement | null>(null)

  const CENTER_OF_BC = [-123.3656, 51.4484]

  const vectorLayer = new VectorTile({
    declutter: true,
    source: new olpmtiles.PMTilesVectorSource({
      url: "https://r2-public.protomaps.com/protomaps-sample-datasets/nz-buildings-v3.pmtiles",
      attributions: ["© Land Information New Zealand"],
    }),
    style: new Style({
      stroke: new Stroke({
        color: "purple",
        width: 1,
      }),
      fill: new Fill({
        color: "rgba(20,20,20,0.9)",
      }),
    }),
  });

  const BC_ROAD_BASE_MAP_SERVER_URL = 'https://maps.gov.bc.ca/arcgis/rest/services/province/roads_wm/MapServer'

  // Static source is allocated since our tile source does not change and
  // a new source is not allocated every time WeatherMap is re-rendered,
  // which causes the TileLayer to re-render.
  const source = new XYZ({
    url: `${BC_ROAD_BASE_MAP_SERVER_URL}/tile/{z}/{y}/{x}`,
    // Normally we would get attribution text from `${BC_ROAD_BASE_MAP_SERVER_URL}?f=pjson`
    // however this endpoint only allows the origin of http://localhost:3000, so the text has been just copied from that link
    attributions: 'Government of British Columbia, DataBC, GeoBC'
  })

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
        center: CENTER_OF_BC,
        zoom: 6,
      }),
      layers: [
        new Tile({
          source
        }),
        vectorLayer
      ]
    })
    mapObject.setTarget(mapRef.current)

    setMap(mapObject)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps



  return (
      <MapContext.Provider value={map}>
        <div ref={mapRef} style={{width: '100vw', height: '100vh'}}></div>
      </MapContext.Provider>
  )
}

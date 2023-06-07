import { TileLayer, Popup, LayersControl, LayerGroup, FeatureGroup } from "react-leaflet"
import { MapContainer } from "react-leaflet/MapContainer"
import { PMTileLayer } from "./PMTileLayer";
import { TemplateLayer } from "./TemplateLayer";
import * as protomaps from 'protomaps';

export const ReactMap = (props: any) => {
const position = [51.505, -0.09]
const center: [number, number] = [51.1664, -120.906];
const PMTileSymbolizer = new protomaps.PolygonLabelSymbolizer({
  label_props: ['code_name'],
  fill: 'white',
  font: '500 16px serif'
})
return (
    <>
  <MapContainer 
  center={center} 
  zoom={15} minZoom={0} id="mapid"
   >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LayersControl position="topright">
            <LayersControl.Overlay name="Custom Layer"><PMTileLayer/></LayersControl.Overlay>
            <LayersControl.Overlay name="Template Layer"><TemplateLayer path={"https://nrs.objectstore.gov.bc.ca/uphjps/riso.pmtiles"} symbolizer={PMTileSymbolizer}/></LayersControl.Overlay>
        </LayersControl>
  </MapContainer>
  </>
  )
}
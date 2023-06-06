import { TileLayer, Marker, Popup } from "react-leaflet"
import { MapContainer } from "react-leaflet/MapContainer"

export const ReactMap = (props: any) => {
const position = [51.505, -0.09]
const center: [number, number] = [51.1664, -120.906];

return (
    <>
  <MapContainer 
  center={center} 
  zoom={15} minZoom={0} id="mapid"
 //center={position}
 //zoom={props.zoom ? props.zoom : 5 /* was mapZoom */}
// zoom={5}
   >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
  </>
  )
}
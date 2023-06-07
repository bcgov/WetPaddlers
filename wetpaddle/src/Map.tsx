import {
  TileLayer,
  Popup,
  LayersControl,
  LayerGroup,
  FeatureGroup,
} from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { RISOLayer } from "./reactLayers/RISOLayer";

export const ReactMap = (props: any) => {
  const position = [51.505, -0.09];
  const center: [number, number] = [51.1664, -120.906];

  return (
    <>
      <MapContainer center={center} zoom={15} minZoom={0} id="mapid">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LayersControl position="topright">
          <LayersControl.Overlay name="RISO Layer">
            <RISOLayer />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
};

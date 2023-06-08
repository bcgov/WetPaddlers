import {
  TileLayer,
  Popup,
  LayersControl,
  LayerGroup,
  FeatureGroup,
} from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { LABEL_RULES, PAINT_RULES, RISOLayer } from "./reactLayers/RISOLayer";
import { useSelector } from "react-redux";
import { PMTileLayer } from "./reactLayers/PMTileLayer";

export const ReactMap = (props: any) => {

  const center: [number, number] = [51.1664, -120.906];
  const layerAndURLState = useSelector((state: any) => state.layerAndURLState);

  return (
    <>
      <MapContainer center={center} zoom={15} minZoom={0} id="mapid">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LayersControl position="topright">
          {layerAndURLState.layers?.map((layer: any) => {
            return (
              <LayersControl.Overlay key={layer.name} name={layer.name}>
                <PMTileLayer
                  URL={layer.s3_url}
                  paintRules={PAINT_RULES}
                  labelRules={LABEL_RULES}
                />
              </LayersControl.Overlay>
            );
          })}
          {/*<LayersControl.Overlay name="RISO Layer">
            <RISOLayer />
        </LayersControl.Overlay>*/}
        </LayersControl>
      </MapContainer>
    </>
  );
};

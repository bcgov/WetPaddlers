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
import * as protomaps from 'protomaps';

export const ReactMap = (props: any) => {

  const center: [number, number] = [51.1664, -120.906];
  const layerAndURLState = useSelector((state: any) => state.layerAndURLState);

  const getPaintRules = (colourName: string) => {
    return  [
      {
        dataLayer: 'tippecanoe_input',
        symbolizer: new protomaps.PolygonSymbolizer({
          per_feature: true,
          fill: (z: number, p: any) => {
            return colourName;
          },
          opacity: 0.5,
          stroke: 'black',
          width: 1
        })
      }
    ]
  }

  const getLabelRules = (propertyName: string) => {
    return [
      {
        dataLayer: 'tippecanoe_input',
        symbolizer: new protomaps.PolygonLabelSymbolizer({
          label_props: [`${propertyName}`],
          fill: 'white',
          font: '500 16px serif'
        })
      }
    ]
  }

  return (
    <>
      <MapContainer bounds={[[61, -114.03],[48.3, -139.06]]} id="mapid">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LayersControl position="topright">
          {layerAndURLState.layers && layerAndURLState.layers.map((layer: any) => {
            return (
              <LayersControl.Overlay key={layer.name} name={layer.name} checked={true}>
                <PMTileLayer
                  URL={layer.s3_url}
                  paintRules={getPaintRules(layer.color)}
                  labelRules={getLabelRules(layer.label_property)}
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

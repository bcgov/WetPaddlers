import * as protomaps from 'protomaps';
import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core';

export const TemplateLayer = (props: {path: string, symbolizer: protomaps.PolygonSymbolizer, symbolizerLabel: protomaps.PolygonLabelSymbolizer }) => {
  const map = useMap();
  const [layer, setLayer] = React.useState(null);
  const context = useLeafletContext();
  const container = context.layerContainer || context.map;

  const onFirstRender = useEffect(() => {
    const PAINT_RULES = [
      {
        dataLayer: 'tippecanoe_input',
        symbolizer: props.symbolizer
      }
    ];

    const LABEL_RULES = [
      {
        dataLayer: 'tippecanoe_input',
        symbolizer: props.symbolizerLabel
      }
    ];

    const layer = protomaps.leafletLayer({
      url: props.path,
      paint_rules: PAINT_RULES,
      label_rules: LABEL_RULES
    });

    layer.options.zIndex = 3005;

    if (!map.hasLayer(layer)) {
      container.addLayer(layer);
    }

    return () => {
      container.removeLayer(layer);
    };
  });

  return null;
};

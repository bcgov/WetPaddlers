import * as protomaps from 'protomaps';
import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core';

export const PMTileLayer = (props: any) => {
  const map = useMap();
  const context = useLeafletContext();
  const container = context.layerContainer || context.map;

  const onFirstRender = useEffect(() => {
    var layer = protomaps.leafletLayer({
      url: props.URL,
      paint_rules: props.paintRules,
      label_rules: props.labelRules
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

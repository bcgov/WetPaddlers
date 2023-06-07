import * as protomaps from 'protomaps';
import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core';
import { PMTileLayer } from './PMTileLayer';



export const RISOLayer = (props: any) => {



  const PAINT_RULES =  [
    {
      dataLayer: 'tippecanoe_input',
      symbolizer: new protomaps.PolygonSymbolizer({
        per_feature: true,
        fill: (z: number, p: any) => {
          switch (p.props.code_name) {
            default:
              return 'hsl(100,50%,50%)';
          }
          //if (z > 16) return 'hsl(100,50%,50%)';
        },
        opacity: 0.5,
        stroke: 'black',
        width: 1
      })
    }
  ];
  const LABEL_RULES = [
    {
      dataLayer: 'tippecanoe_input',
      symbolizer: new protomaps.PolygonLabelSymbolizer({
        label_props: ['code_name'],
        fill: 'white',
        font: '500 16px serif'
      })
    }
  ];


  return <PMTileLayer 
  URL="https://nrs.objectstore.gov.bc.ca/uphjps/riso.pmtiles"
  paintRules={PAINT_RULES}
  labelRules={LABEL_RULES}
  />    

}

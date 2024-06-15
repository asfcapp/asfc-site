/**
 * MultipleLayer sample
 */

import * as React from 'react';
import {
  MapsComponent,
  Inject,
  ILoadedEventArgs,
  LayersDirective,
  LayerDirective,
  Marker,
  Zoom,
  DataLabel,
  MapsTooltip,
  BubblesDirective,
  BubbleDirective,
  Bubble,
} from '@syncfusion/ej2-react-maps';
import { registerLicense } from '@syncfusion/ej2-base';
import morrocco from './map-data/morrocco.json';
import data from './map-data/bubble-datasource.json';
let datasource: any = data as any;

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NAaF1cVGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjX35dcXJRRGFVV0ZyWw=='
);
const MultilayerMaps = () => {
  const load = (args: ILoadedEventArgs): void => {};
  return (
    <MapsComponent id="maps" load={load}>
      <Inject services={[Marker, Zoom, DataLabel, Bubble, Marker, MapsTooltip]} />
      <LayersDirective>
        <LayerDirective
          shapeData={morrocco}
          shapePropertyPath="region"
          shapeDataPath="region"
          shapeSettings={{ fill: '#E5E5E5', border: { color: 'black', width: 0.1 } }}
          dataLabelSettings={{
            visible: true,
            smartLabelMode: 'Hide',
            textStyle: { color: 'black' },
          }}
        >
          <BubblesDirective>
            <BubbleDirective
              visible={true}
              dataSource={datasource}
              valuePath="value"
              colorValuePath="color"
              minRadius={3}
              maxRadius={20}
              opacity={0.8}
              tooltipSettings={{
                visible: true,
                valuePath: 'value',
              }}
            />
          </BubblesDirective>
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
  );
};
export default MultilayerMaps;

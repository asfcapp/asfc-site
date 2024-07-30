/**
 * ColorMapping sample
 */

import * as React from 'react';
import { useRef } from 'react';
import { registerLicense } from '@syncfusion/ej2-base';
import { ColorMappingSettingsModel } from '@syncfusion/ej2-maps';
import {
  Zoom,
  Inject,
  Legend,
  Marker,
  MapsTooltip,
  MapsComponent,
  LayerDirective,
  LayersDirective,
  MarkerDirective,
  ILoadedEventArgs,
  MarkersDirective,
} from '@syncfusion/ej2-react-maps';

import * as morrocco from './map-data/morrocco.json';
import * as data from './map-data/color-mapping.json';
import pin from '../../../../public/assets/logo/pin.png';

const datasource: any = data as any;

// Add coordinates to the data source
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NAaF1cVGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjX35dcXJRRGFVV0ZyWw=='
);
/* eslint-disable no-unused-vars */

type Props = {
  id: string;
  open: boolean;
};

const ColorMap = ({ id, open }: Props) => {
  const mapInstance = useRef<MapsComponent>(null);

  const colorMappingData: ColorMappingSettingsModel[] = [
    { from: 0.1, to: 2, color: '#03A6A6', label: '0 - 2' },
    { from: 2, to: 4, color: '#13B3C2', label: '2 - 4' },
    { from: 4, to: 6, color: '#2E8D8D', label: '4 - 6' },
  ];

  const load = (args: ILoadedEventArgs): void => {};
  const loaded = (args: ILoadedEventArgs): void => {
    // Access and manipulate the rect elements
    const rects = document.querySelectorAll(open ? '#map_MapAreaBorder' : '#maps_MapAreaBorder'); // Update the selector as needed
    const borderRects = document.querySelectorAll(open ? '#map_MapBorder' : '#maps_MapBorder'); // Update the selector as needed
    rects.forEach((rect) => {
      if (rect.tagName === 'rect') {
        rect.setAttribute('fill', 'none'); // Example of manipulation
      }
    });
    borderRects.forEach((rect) => {
      if (rect.tagName === 'rect') {
        rect.setAttribute('fill', 'none'); // Example of manipulation
      }
    });
  };

  return (
    <MapsComponent
      id={`${id}`}
      load={load}
      loaded={loaded} // Add the loaded event
      ref={mapInstance}
      zoomSettings={{
        enable: open,
        pinchZooming: true,
        doubleClickZoom: true,
        enablePanning: true,
        
      }}
      height='100%'
    >
      <Inject services={[Legend, MapsTooltip, Marker, Zoom]} />
      <LayersDirective>
        <LayerDirective
          dataSource={datasource.color}
          shapeDataPath="region"
          shapeData={morrocco}
          shapePropertyPath="region"
          shapeSettings={{
            colorValuePath: 'inches',
            fill: '#333',
            colorMapping: colorMappingData,
          }}
          tooltipSettings={{ visible: false, valuePath: 'inches' }}
        >
          <MarkersDirective>
            <MarkerDirective
              visible
              animationDuration={0}
              shape="Image"
              imageUrl={pin.src}
              height={20}
              width={20}
              border={{ color: '#fff', width: 2 }}
              dataSource={datasource.locals}
              tooltipSettings={{
                visible: true,
                valuePath: 'latitude',
              }}
            />
          </MarkersDirective>
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
  );
};
/* eslint-enable */

export default ColorMap;

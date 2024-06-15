/**
 * ColorMapping sample
 */

import * as React from 'react';
import { useRef } from 'react';
import { ColorMappingSettingsModel } from '@syncfusion/ej2-maps';

import {
  MapsComponent,
  Inject,
  ILoadedEventArgs,
  LayersDirective,
  LayerDirective,
  Legend,
  MapsTooltip,
  MarkersDirective,
  MarkerDirective,
  Marker,
} from '@syncfusion/ej2-react-maps';
import * as data from './map-data/color-mapping.json';
import * as morrocco from './map-data/morrocco.json';
import { registerLicense } from '@syncfusion/ej2-base';
let datasource: any = data as any;

// Add coordinates to the data source
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NAaF1cVGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjX35dcXJRRGFVV0ZyWw=='
);

const ColorMap = () => {
  let mapInstance = useRef<MapsComponent>(null);

  let colorMappingData: ColorMappingSettingsModel[] = [
    { from: 0.1, to: 2, color: '#03A6A6', label: '0 - 2' },
    { from: 2, to: 4, color: '#0396A6', label: '2 - 4' },
    { from: 4, to: 6, color: '#F28705', label: '4 - 6' },
  ];

  let template: string =
    '<div id="markertooltiptemplate" style="width: 170px;opacity: 90%;background: rgba(53, 63, 76, 0.90);box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);padding:10px;border: 1px #abb9c6;border-radius: 4px;">' +
    '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${latitude}</center></div>' +
    '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">' +
    '<div><span style="font-size:13px;color:#cccccc">Population  : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${latitude}</span></div>';

  const load = (args: ILoadedEventArgs): void => {};
  const loaded = (args: ILoadedEventArgs): void => {
    // Access and manipulate the rect elements
    const rects = document.querySelectorAll('#maps_MapAreaBorder'); // Update the selector as needed
    const borderRects = document.querySelectorAll('#maps_MapBorder'); // Update the selector as needed
    rects.forEach((rect) => {
      if (rect.tagName === 'rect') {
        rect.setAttribute('fill', '#F4F6F8'); // Example of manipulation
      }
    });
    borderRects.forEach((rect) => {
      if (rect.tagName === 'rect') {
        rect.setAttribute('fill', '#F4F6F8'); // Example of manipulation
      }
    });
  };
  return (
    <MapsComponent
      id="maps"
      load={load}
      loaded={loaded} // Add the loaded event
      ref={mapInstance}
      zoomSettings={{ enable: false }}
    >
      <Inject services={[Legend, MapsTooltip, Marker]} />
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
              visible={true}
              animationDuration={0}
              shape="Circle"
              fill="white"
              width={10}
              border={{ color: '#285255', width: 2 }}
              dataSource={datasource.locals}
              tooltipSettings={{ template: template, visible: true, valuePath: 'latitude' }}
            />
          </MarkersDirective>
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
  );
};
export default ColorMap;

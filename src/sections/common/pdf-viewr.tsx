import * as React from 'react';
import { registerLicense } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import {
  Print,
  Inject,
  Toolbar,
  Navigation,
  TextSearch,
  Annotation,
  FormFields,
  BookmarkView,
  FormDesigner,
  Magnification,
  ThumbnailView,
  TextSelection,
  LinkAnnotation,
  PdfViewerComponent,
} from '@syncfusion/ej2-react-pdfviewer';

import { Link, Stack, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import './index.css';

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NAaF1cVGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjX35dcXJRRGFVV0ZyWw=='
);

const gridData = [
  {
    FileName: 'PDF Succinctly.pdf',
    Url: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    Author: 'Ryan Hodson',
  },
  {
    FileName: 'Hive Succinctly.pdf',
    Url: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf',
    Author: 'Elton Stoneman',
  },
  {
    FileName: 'GIS Succinctly.pdf',
    Url: 'https://cdn.syncfusion.com/content/pdf/gis-succinctly.pdf',
    Author: 'Peter Shaw',
  },
  {
    FileName: 'JavaScript Succinctly.pdf',
    Url: 'https://cdn.syncfusion.com/content/pdf/Javascript-succinctly.pdf',
    Author: 'Cody Lindley',
  },
  {
    FileName: 'HTTP Succinctly.pdf',
    Url: 'https://cdn.syncfusion.com/content/pdf/http-succinctly.pdf',
    Author: 'Scott Allen',
  },
];

const dialogStyle = {
  minHeight: '90%',
  width: '90%',
  height: '90%',
};

const pdfViewerStyle = {
  height: '735px',
};

const FileItem: React.FC<{ fileData: typeof gridData[0]; onClick: (url: string) => void }> = ({ fileData, onClick }) => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      minWidth: 720,
      borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
    }}
  >
    <Stack direction="row" alignItems="center" flexGrow={1}>
      <Stack spacing={0.5} sx={{ p: 2 }}>
        <Link color="inherit" href={fileData.Url} target="_blank">
          {fileData.FileName}
        </Link>
      </Stack>
    </Stack>
    <IconButton onClick={() => onClick(fileData.Url)}>
      <Iconify icon="mdi:eye-outline" />
    </IconButton>
  </Stack>
);

const PDFViewer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [currentFileUrl, setCurrentFileUrl] = React.useState<string | null>(null);

  const handleOpen = React.useCallback((url: string) => {
    setCurrentFileUrl(url);
    setOpen(true);
  }, []);

  const handleClose = React.useCallback(() => setOpen(false), []);

  return (
    <>
      <div className="control-pane pdfviewer-document-list">
        <div
          id="targetElement"
          className="control-section col-lg-12 defaultDialogComponent dialog-target"
        >
          <DialogComponent
            id="defaultDialog"
            showCloseIcon
            visible={open}
            style={dialogStyle}
            isModal
            close={handleClose}
          >
            <div className="control-section">
              {currentFileUrl && (
                <PdfViewerComponent
                  style={pdfViewerStyle}
                  id="container"
                  resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib"
                  documentPath={currentFileUrl}
                >
                  <Inject
                    services={[
                      Toolbar,
                      Magnification,
                      Navigation,
                      LinkAnnotation,
                      BookmarkView,
                      ThumbnailView,
                      Print,
                      TextSelection,
                      TextSearch,
                      Annotation,
                      FormFields,
                      FormDesigner,
                    ]}
                  />
                </PdfViewerComponent>
              )}
            </div>
          </DialogComponent>
        </div>
      </div>
      <Scrollbar>
        {gridData.map((data, i) => (
          <FileItem key={i} fileData={data} onClick={handleOpen} />
        ))}
      </Scrollbar>
    </>
  );
};

export default PDFViewer;

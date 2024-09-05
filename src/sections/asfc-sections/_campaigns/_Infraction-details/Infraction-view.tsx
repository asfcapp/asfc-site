'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import urlFor from 'src/lib/sanity';
import { paths } from 'src/routes/paths';

import { _caseStudies, _testimonials } from 'src/_mock';

import Image from 'src/components/image';
import RichText from 'src/components/rich-text/rich-text';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import InfractionData from './Infraction-gallery';
import InfractionPublication from './Infraction-publication';

// ----------------------------------------------------------------------

const _mockCaseStudy = _caseStudies[0];
type Props = {
  infraction: any;
};
export default function InfractionView({ infraction }: Props) {
  const contentFields = [
    infraction.lawArticle,
    infraction.explanation,
    infraction.moroccanData,
    infraction.observation,
  ];

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 10, md: 15 },
      }}
    >
      <Image
        src={
          infraction?.infractionImage.image.asset
            ? (urlFor(infraction.infractionImage.image.asset)?.url() ?? '')
            : ''
        }
        ratio="16/9"
        sx={{ borderRadius: 2 }}
      />

      <CustomBreadcrumbs
        sx={{ my: 5 }}
        links={[
          { name: 'Home', href: '/' },
          { name: 'Campaign', href: paths.marketing.caseStudies },
          { name: infraction },
        ]}
      />

      <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
        <Grid xs={12} md={4}>
          {/* <InfractionPublication publication={_caseStudies[0]} /> */}
        </Grid>

        <Grid xs={12} md={8}>
          {contentFields.map((content: any, index) => (
            <RichText key={index} content={content} />
          ))}
          {/* <InfractionData images={_mockCaseStudy.galleryImgs} /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

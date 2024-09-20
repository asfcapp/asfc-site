'use client';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import urlFor from 'src/lib/sanity';
import { _caseStudies } from 'src/_mock';

import Image from 'src/components/image';
import RichText from 'src/components/rich-text/rich-text';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import InfractionPublication from 'src/sections/asfc-sections/_campaigns/_Infraction-details/Infraction-publication';

// ----------------------------------------------------------------------

// const _mockCaseStudy = _caseStudies[0];
type Props = {
  infraction: any;
};
export default function InfractionView({ infraction }: Props) {
  const contentFields = [
    { key: 'Article de loi', value: infraction.lawArticle },
    { key: 'Explication', value: infraction.explanation },
    { key: 'Données marocaines', value: infraction.moroccanData },
    { key: 'Observation', value: infraction.observation },
  ];

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        mt: 10,
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
          { name: 'Home', href: paths.asfc.root },
          { name: 'Campaign', href: paths.asfc.campaign },
          { name: infraction.infractionName },
        ]}
      />

      <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
        <Grid xs={12} md={4}>
          <InfractionPublication publication={_caseStudies[0]} />
        </Grid>

        <Grid xs={12} md={8}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Brève description
          </Typography>
          <Typography variant="body1" sx={{ mb: 5 }}>
            {infraction.briefDescription}
          </Typography>
          {contentFields.map((content: any, index) => (
            <>
              {content.value && (
                <Typography variant="h4" sx={{ mb: 2, mt: 5 }}>
                  {content.key}
                </Typography>
              )}
              {/* show the title of the field only if the field exist  */}
              <RichText key={index} content={content.value} />
            </>
          ))}
          {/* <InfractionData images={_mockCaseStudy.galleryImgs} /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

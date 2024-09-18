import RojFaqs from 'src/sections/asfc-sections/_roj/faqs';
import AboutUs from 'src/sections/asfc-sections/_roj/about-us';

type props = {
  roj: any;
};
export default function RojView({ roj }: props) {
  return (
    <>
      <AboutUs roj={roj} />
      <RojFaqs roj={roj} />
    </>
  );
}

import Hero from '../components/home/Hero';
import Overview from '../components/home/Overview';
import Toppers from '../components/home/Toppers';
import CoursesPreview from '../components/home/CoursesPreview';
import Faculty from '../components/home/Faculty';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import AdmissionCTA from '../components/home/AdmissionCTA';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Toppers />
      <CoursesPreview />
      <Faculty />
      <Testimonials />
      <Gallery />
      <AdmissionCTA />
      <Contact />
    </>
  );
}

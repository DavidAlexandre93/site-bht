import "./lib/i18n";

import Navbar from "./components/Navbar";
import FloatingButtonNewsletter from "./components/FloatingButtonNewsletter";
import Begin from "./app/Begin";
import OurStory from "./app/OurStory";
import ImportantAnnouncements from "./app/ImportantAnnouncements";
import Store from "./app/Store";
import Lineup from "./app/Lineup";
import Staff from "./app/Staff";
import Newsletter from "./app/Newsletter";
// import Blog from "./app/Blog";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <FloatingButtonNewsletter />
      <Begin />
      <OurStory />
      <ImportantAnnouncements />
      <Store />
      <Lineup />
      <Staff />
      <Newsletter />
      {/* <Blog /> */}
      <Footer />
    </>
  );
};

export default Home;

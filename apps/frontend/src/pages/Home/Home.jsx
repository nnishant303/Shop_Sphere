import TopBar from "../../components/Home/TopBar/TopBar.jsx";
import Header from "../../components/Home/Header/Header.jsx";

import CategoryNavigation from "../../components/Home/CategoryNavigation/CategoryNavigation.jsx";
import HeroSection from "../../components/Home/HeroSection/HeroSection.jsx";
import ExploreCategories from "../../components/Home/ExploreCategories/ExploreCategories.jsx";
import DealsOfTheDay from "../../components/Home/DealsOfTheDay/DealsOfTheDay.jsx";
import TrustFeatures from "../../components/Home/TrustFeatures/TrustFeatures.jsx";
import Footer from "../../components/Home/Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <CategoryNavigation />
      <HeroSection />
      <ExploreCategories />
      <DealsOfTheDay />
      <TrustFeatures />

      <Footer />
    </div>
  );
};

export default Home;

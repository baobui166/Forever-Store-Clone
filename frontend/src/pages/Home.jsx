import BesrSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewSletterBox from "../components/NewSletterBox";
import OurPolicy from "../components/OurPolicy";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection />
      <BesrSeller />
      <OurPolicy />
      <NewSletterBox />
    </div>
  );
}

export default Home;

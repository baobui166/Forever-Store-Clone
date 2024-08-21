import BesrSeller from "../components/BesrSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection />
      <BesrSeller />
      <OurPolicy />
    </div>
  );
}

export default Home;

import HomeHero from "./../../components/HomeHero";
import HomeCoreFeature from "./../../components/HomeCoreFeature";
import HomeCateogry from "./../../components/HomeCateogry";
import HomeTestimonials from "./../../components/HomeTestimonials";
import Footer from "./../../components/Footer";
import HomePrice from "./../../components/HomePrice";
import HomeContact from "./../../components/HomeContact";
import Navbar from "./../../components/Navbar";
const HomePage = () => {
  return (
    <div>
      <div className=" md:w-[1800px] mx-auto">
    
        <Navbar></Navbar>
        <HomeHero></HomeHero>
        <HomeCoreFeature></HomeCoreFeature>
        <HomeCateogry></HomeCateogry>
        <HomeTestimonials></HomeTestimonials>
        <HomePrice></HomePrice>
        <HomeContact></HomeContact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;

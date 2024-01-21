import HomeHero from "./../../components/HomeHero";
import HomeCoreFeature from "./../../components/HomeCoreFeature";
import HomeCateogry from "./../../components/HomeCateogry";
import HomeTestimonials from "./../../components/HomeTestimonials";
import Footer from "./../../components/Footer";
import HomePrice from './../../components/HomePrice';
const HomePage = () => {
  return (
    <div>
      <div className=" md:w-[1800px] mx-auto">
        <HomeHero></HomeHero>
        <HomeCoreFeature></HomeCoreFeature>
        <HomeCateogry></HomeCateogry>
        <HomeTestimonials></HomeTestimonials>
        <HomePrice></HomePrice>
      </div>
         <Footer></Footer>
    </div>
  );
};

export default HomePage;

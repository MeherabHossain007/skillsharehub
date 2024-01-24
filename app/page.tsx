import Footer from "@/components/Footer";
import HomeCateogry from "@/components/HomeCateogry";
import HomeContact from "@/components/HomeContact";
import HomeCoreFeature from "@/components/HomeCoreFeature";
import HomeHero from "@/components/HomeHero";
import HomePrice from "@/components/HomePrice";
import HomeTestimonials from "@/components/HomeTestimonials";
import Navbar from "@/components/Navbar";

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

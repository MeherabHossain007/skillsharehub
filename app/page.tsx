import Footer from "@/components/layout/Footer";
import HomeCateogry from "@/components/Home/HomeCateogry";
import HomeContact from "@/components/Home/HomeContact";
import HomeCoreFeature from "@/components/Home/HomeCoreFeature";
import HomeHero from "@/components/Home/HomeHero";
import HomePrice from "@/components/Home/HomePrice";
import HomeTestimonials from "@/components/Home/HomeTestimonials";
import Navbar from "@/components/layout/Navbar";

const HomePage = () => {
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto">
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

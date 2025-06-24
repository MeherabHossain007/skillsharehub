import HomeCateogry from "@/components/Home/HomeCateogry";
import HomeContact from "@/components/Home/HomeContact";
import HomeCoreFeature from "@/components/Home/HomeCoreFeature";
import HomeHero from "@/components/Home/HomeHero";
import HomePrice from "@/components/Home/HomePrice";
import HomeTestimonials from "@/components/Home/HomeTestimonials";

const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <HomeHero></HomeHero>
        <HomeCoreFeature></HomeCoreFeature>
        <HomeCateogry></HomeCateogry>
        <HomeTestimonials></HomeTestimonials>
      </div>
      <HomePrice></HomePrice>
      <HomeContact></HomeContact>
    </div>
  );
};

export default HomePage;

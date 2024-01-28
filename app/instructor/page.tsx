import InstructorHero from "../../components/InstructorHero";
import InstructorFilter from '../../components/InstructorFilter';
import Navbar from "@/components/Navbar";
import NavbarSadab from "../components/NavbarSadab";

const InstructorPage = () => {
  return (
    <div className=" md:w-[1800px] mx-auto">
      <NavbarSadab></NavbarSadab>
      <InstructorHero></InstructorHero>
      <InstructorFilter></InstructorFilter>
    </div>
  );
};

export default InstructorPage;

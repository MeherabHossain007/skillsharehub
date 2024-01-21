import InstructorHero from "./../../components/InstructorHero";
import InstructorFilter from './../../components/InstructorFilter';

const InstructorPage = () => {
  return (
    <div className=" md:w-[1800px] mx-auto">
      <InstructorHero></InstructorHero>
      <InstructorFilter></InstructorFilter>
    </div>
  );
};

export default InstructorPage;

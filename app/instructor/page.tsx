"use client";
import InstructorHero from "../../components/InstructorHero";
import InstructorFilter from "../../components/InstructorFilter";
import Navbar from "@/components/layout/Navbar";
import NavbarSadab from "../components/NavbarSadab";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";

const InstructorPage = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    const InstructorData = async () => {
      let { data: author, error } = await supabase.from("author").select("*");
      if (author) {
        setAuthor(author);
        console.log(author);
      } else {
        console.log(error);
      }
    };
    InstructorData();
  }, []);

  return (
    <div className=" md:w-[1800px] mx-auto">
      <NavbarSadab></NavbarSadab>
      <InstructorHero></InstructorHero>
      <InstructorFilter data={author}></InstructorFilter>
    </div>
  );
};

export default InstructorPage;

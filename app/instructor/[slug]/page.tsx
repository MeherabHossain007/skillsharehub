"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/NavbarSadab";
import Footer from "../../../components/FooterSadab";
import Instructor from "../../../components/Instructor";
import { supabase } from "@/utils/supabase/client";

function Page({ params }: { params: { slug: any } }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const CourseData = async () => {
      let { data, error } = await supabase
        .from("author")
        .select("*")
        .eq("id", params.slug);

      if (data) {
        setData(data);
        console.log(data);
      } else {
        console.log(error);
      }
    };
    CourseData();
  }, [params.slug]);
  return (
    <>
      <Navbar />
      {data.map((data) => (
        <Instructor key={data.id} data={data} />
      ))}
      <Footer />
    </>
  );
}

export default Page;

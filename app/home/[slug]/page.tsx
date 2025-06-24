import React from "react";
import Navbar from "../../../components/NavbarSadab";
import Footer from "../../../components/FooterSadab";
import Course from "../../../components/CourseSadab";
import { useRouter } from "next/router";

function Page({ params }: { params: { slug: any } }) {
  return (
    <>
      <Navbar />
      <Course id={params.slug} />
      <Footer />
    </>
  );
}

export default Page;

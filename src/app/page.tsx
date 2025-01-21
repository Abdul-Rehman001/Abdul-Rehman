import React from "react";

import Hero from "./components/Hero";
import WorkPage from "./components/Work";
import About from "./components/About";
import ExperiencePage from "./experience/page";
import ContactPage from "./contact/page";

export default function page() {
  return (
    <>
      <Hero />
      <WorkPage />
      <About />
      <ExperiencePage />
      <ContactPage />
    </>
  );
}

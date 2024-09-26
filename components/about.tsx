"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-5 max-[640px]:text-justify">
        I am a qualified software engineer with one year of professional experience in the software industry.
        My main specialization is .NET and ASP.NET. I have worked with the full cycle of application development,
        from gathering requirements and designing relational and non-relational databases to deploying applications in cloud solutions such as AWS,
        followed by monitoring and support. In addition, I have solid experience in working with microservices and event-driven architectures.
        I am an open and sociable person and ready to participate in team software development processes.</p>

    </motion.section>
  );
}

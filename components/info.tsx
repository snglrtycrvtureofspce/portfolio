"use client";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { TbBrandGithubFilled, TbBrandGitlab } from "react-icons/tb";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const portraitUrl = "https://639a5c86-aea6-414e-8505-51b2938ab53c.s3.eu-north-1.amazonaws.com/639a5c86-aea6-414e-8505-51b2938ab53c/portrait.jpg";

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portraitUrl}
              alt="portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="w-[192px] h-[192px] rounded-full object-cover shadow-xl border-[0.35rem] border-white mx-auto"
            />
          </motion.div>

          <motion.span
            className="absolute text-4xl bottom-1 right-1  cursor-pointer"
            initial={{ scale: 0, opacity: 0, rotateY: 2 }}
            animate={{ scale: 1, opacity: 1, rotateY: 360 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 1,
            }}
          >

          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Aleksandr Zenevich{" "}
        <br />
        .NET Software Engineer.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 max-[640px]:w-full flex items-center justify-center gap-2  opacity-80 hover:opacity-100 rounded-full outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105 dark:bg-white  dark:text-gray-950"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition" />
        </Link>

        {<a
          href="/resume.pdf"
          download
          className="group bg-white px-7 py-3 max-[640px]:w-full flex items-center justify-center gap-2  opacity-80 hover:opacity-100 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/70 dark:border-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>}

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/snglrtycrvtureofspce/"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center opacity-80 hover:opacity-100  text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white/70 dark:border-white/10
            "
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/snglrtycrvtureofspce"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center opacity-80 hover:opacity-100  text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white/70 dark:border-white/10
            "
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://github.com/snglrtycrvtureofspce"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center opacity-80 hover:opacity-100 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white/70 dark:border-white/10"
          >
            <TbBrandGithubFilled />
          </a>
          <a
            href="https://gitlab.com/snglrtycrvtureofspce"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center opacity-80 hover:opacity-100 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white/70 dark:border-white/10"
          >
            <TbBrandGitlab />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

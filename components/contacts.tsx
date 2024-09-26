"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="font-bold" href="mailto:asp1rantzenevich@gmail.com">
          asp1rantzenevich@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error)
            return
          }

          toast.success("The email was successfully sent!")
        }}
      >
        <input
          className="h-14 p-4 rounded-lg borderBlack  outline-none dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Mail"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4  outline-none dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all d"
          placeholder="Message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

import React from "react";
import {  RiReactjsLine } from "react-icons/ri";
import { FaBeer, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { motion } from "motion/react";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="mt-40 mb-10 border-2 rounded-xl py-2 border-gray-600 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className=" border-4 rounded-2xl border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className=" border-4 rounded-2xl border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-white" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ delay: 1, duration: 0.5 }}
          className=" border-4 rounded-2xl border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className=" border-4 rounded-2xl border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-red-400" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ delay: 2, duration: 0.5 }}
          className=" border-4 rounded-2xl border-neutral-800 p-4"
        >
          <AiFillHtml5 className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className=" border-4 rounded-2xl border-neutral-800 p-4"
        >
          <DiCss3 className="text-7xl text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;

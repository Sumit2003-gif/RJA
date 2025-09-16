import React from "react";
import { motion } from "framer-motion";

const HomeBlog = () => {
  return (
    <section className="bg-white text-slate-800 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://carajput.com/common-assets/images/home-blog-banner.webp"
            alt="Blog Visual"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4">
            Read Our Blog
          </h2>
          <p className="text-lg md:text-xl font-semibold text-slate-700 mb-6 leading-relaxed">
            TO KNOW OUR LATEST AND UPDATED INFORMATION, JUST FOLLOW OUR BLOG
          </p>
          <button className="bg-[#D9534F] text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide hover:bg-slate-700 transition mb-6">
            View Our Blog
          </button>
          <p className="text-gray-600 text-base max-w-md mx-auto md:mx-0">
            Experience Our One Stop and All Client Centric Services
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBlog;

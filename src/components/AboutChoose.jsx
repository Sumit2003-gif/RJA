import React from "react";
import { motion } from "framer-motion";
import { FaTags, FaGavel, FaHandsHelping, FaUserTie } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Great Discount",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply.",
      icon: <FaTags className="text-[#2B7FFF] w-8 h-8 mb-4" />,
    },
    {
      title: "Get Legal Advice",
      desc: "Latin professor at Hampden-Sydney College in Virginia.",
      icon: <FaGavel className="text-[#2B7FFF] w-8 h-8 mb-4" />,
    },
    {
      title: "Community Service",
      desc: "There are many variations of passages of Lorem.",
      icon: <FaHandsHelping className="text-[#2B7FFF] w-8 h-8 mb-4" />,
    },
    {
      title: "Expert Lawyers",
      desc: "It is a long established fact that a reader will be distracted.",
      icon: <FaUserTie className="text-[#2B7FFF] w-8 h-8 mb-4" />,
    },
  ];

  return (
    <section className="relative bg-gray-100 text-[#1E293B] py-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20 px-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Why{" "}
          <span className="text-[#2B7FFF]">
            Choose Us
          </span>
        </h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Scaffid & Associates was founded in 1985 on the simple yet vital principle that everyone, regardless of circumstance.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.25 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 15px 25px rgba(43, 127, 255, 0.3)",
            }}
            className="bg-[#1E293B] p-8 rounded-3xl shadow-md border-t-4 border-[#2B7FFF] cursor-pointer transition-all duration-300"
          >
            {item.icon}
            <h3 className="font-semibold text-2xl mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

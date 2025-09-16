import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";

const branches = [
  {
    title: "Corporate Office",
    phone: "+91-9811322785, 011-43520194",
    address:
      "P-6/90 Connaught Circus, Connaught Place, New Delhi - 110001, India",
  },
  {
    title: "Noida Branch",
    phone: "+91-9811322785",
    address: "D 301 Omex Royal residency, Sector 44 Noida, India",
  },
  {
    title: "Mumbai Branch",
    phone: "+91-9811322785",
    address:
      "303-Jolly Bhawn-2, New Marine Lines, Churchgate, Mumbai-400020, India",
  },
  {
    title: "Varanasi Branch",
    phone: "+91-9811322785",
    address:
      "Bhakti Nagar Gate No 2, Lane No 7B, H No S3/160 R5, Pandeypur, Varanasi - 221002, India",
  },
  {
    title: "Faridkot Branch",
    phone: "+91-9811322785",
    address:
      "B-12/74, Near Guruswara, Old Harindra Nagar, Faridkot-151203, India",
  },
  {
    title: "Hyderabad Branch",
    phone: "+91-9811322785",
    address:
      "D No-8-3-224/11/4, Flat No 101, G-134, Madhura Nagar, Hyderabad-500038, India",
  },
];

const BranchesAffiliates = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-gray-800 uppercase"
        >
          Branches & Affiliates
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md text-left hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {branch.title}
            </h3>
            <div className="flex items-start gap-2 mb-3 text-gray-700">
              <FiPhoneCall className="mt-1" />
              <span>{branch.phone}</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <FiMapPin className="mt-1" />
              <span>{branch.address}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BranchesAffiliates;

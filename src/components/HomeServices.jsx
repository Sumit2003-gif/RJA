import React from "react";
import { motion } from "framer-motion";

// Service Data
const services = [
  {
    icon: "https://carajput.com/common-assets/images/start-my-business.png",
    title: "START MY BUSINESS",
    desc: "Start with ease: LLP, Pvt Ltd, NGO, Liaison Office & more.",
  },
  {
    icon: "https://carajput.com/common-assets/images/start-my-business.png",
    title: "GST COMPLIANCES",
    desc: "GST Registration, Returns, Payments, Refunds & Support.",
  },
  {
    icon: "https://carajput.com/common-assets/images/maintain-my-business.png",
    title: "MAINTAIN MY BUSINESS",
    desc: "Licenses, IEC Code, Tax Registrations, Trademark & IP.",
  },
  {
    icon: "https://carajput.com/common-assets/images/maintain-my-business.png",
    title: "CFO SERVICES",
    desc: "Virtual, Interim, Full-Time CFO Solutions for Businesses.",
  },
  {
    icon: "https://carajput.com/common-assets/images/my-regulatory-filing.png",
    title: "TAX ADVISORY",
    desc: "Expert guidance on Direct, Indirect & International Tax.",
  },
  {
    icon: "https://carajput.com/common-assets/images/my-regulatory-filing.png",
    title: "CORPORATE COMPLIANCES",
    desc: "ROC Filing, Restructuring, LLP Compliance, XBRL, etc.",
  },
  {
    icon: "https://carajput.com/common-assets/images/start-my-business.png",
    title: "AUDIT & ASSURANCE",
    desc: "Statutory Audit, Internal Audit, Due Diligence Services.",
  },
  {
    icon: "https://carajput.com/common-assets/images/maintain-my-business.png",
    title: "BUSINESS VALUATION",
    desc: "Valuation for M&A, Startups, Fundraising & Taxation.",
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        >
          Services We Provide
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-gray-600 mb-14 max-w-2xl mx-auto text-base md:text-lg"
        >
          Partner with us for legal, financial, compliance, and tax excellence.
        </motion.p>

        {/* Top Grid (First 3 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14 justify-items-center">
          {services.slice(0, 3).map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>

        {/* Middle Row (2 Cards + Image Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14 items-center justify-items-center">
          <ServiceCard service={services[3]} index={3} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center rounded-xl border border-gray-200 shadow-md hover:shadow-lg bg-white w-[320px] h-[320px]"
          >
            <img
              src="https://webstrot.com/attonio/wp-content/uploads/2021/07/banner-right-home2.png"
              alt="Service Illustration"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </motion.div>

          <ServiceCard service={services[4]} index={4} />
        </div>

        {/* Bottom Grid (Last 3 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {services.slice(5, 8).map((service, idx) => (
            <ServiceCard key={idx + 5} service={service} index={idx + 5} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Card Component
const ServiceCard = ({ service, index }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUp}
    custom={index}
    className="group flex flex-col p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-[320px] h-[320px] text-left"
  >
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5 transition-colors duration-300">
      <img
        src={service.icon}
        alt={service.title}
        className="w-10 h-10 object-contain"
      />
    </div>
    <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
      {service.desc}
    </p>
  </motion.div>
);

export default Services;

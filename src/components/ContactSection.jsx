import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

const contactOptions = [
  {
    title: "Contact By Email",
    description: (
      <>
        Look forward to your mail at{" "}
        <strong>singh@carajput.com</strong>. Expect us to respond within 24 hours.
      </>
    ),
    icon: <FiMail size={28} className="text-white" />,
  },
  {
    title: "Contact By Phone",
    description: (
      <>
        Dial <strong>+91 9555-555-480</strong> to reach us instantly. <br />
        We are waiting to hear from you!
      </>
    ),
    icon: <FiPhoneCall size={28} className="text-white" />,
  },
  {
    title: "Come To See Us",
    description: (
      <>
        We are well connected through metro. <br />
        The nearest metro station is{" "}
        <strong>Rajiv Chowk (Connaught Place, New Delhi)</strong>. <br />
        Look forward to see you!
      </>
    ),
    icon: <FiMapPin size={28} className="text-white" />,
  },
];

const ContactSection = () => {
  return (
    <section
      className="py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://carajput.com/services/images/contact-top-bg.jpg")',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {contactOptions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white rounded-xl p-8 pt-12 shadow-xl text-center"
          >
            {/* Icon container */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 w-12 h-12 flex items-center justify-center rounded-md shadow-md">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mt-4 mb-4 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;

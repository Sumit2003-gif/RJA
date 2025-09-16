import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Icon URLs
const statsData = [
  {
    icon: "https://carajput.com/common-assets/images/coiunter-icon-1.png",
    label: "Entrepreneurs Served",
    number: 2056,
  },
  {
    icon: "https://carajput.com/common-assets/images/coiunter-icon-1.png",
    label: "Professionals Network",
    number: 302,
  },
  {
    icon: "https://carajput.com/common-assets/images/coiunter-icon-3.png",
    label: "Cities Present",
    number: 17,
  },
  {
    icon: "https://carajput.com/common-assets/images/coiunter-icon-4.png",
    label: "Team Strength",
    number: 26,
  },
];

// CountUp with trigger animation
const CountUp = ({ end, shouldStart }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [end, shouldStart]);

  return <span>{count}</span>;
};

const HomeLocal = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-white py-16 px-6">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-10">
        {/* Left Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://carajput.com/common-assets/images/data-image.webp"
            alt="Performance"
            className="rounded-3xl w-full object-cover max-h-[400px] shadow-md"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-gray-800">
            Online Ease, Local Reach
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            We utilise a mix of technology and human touch to deliver quality business services at scale across India. With a network of over 300 professionals in 17+ cities, we ensure accessibility and local expertise wherever you are.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto md:mx-0">
            {statsData.map(({ icon, label, number }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center md:items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
              >
                <img src={icon} alt={label} className="w-12 h-12 mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  <CountUp end={number} shouldStart={inView} />
                </div>
                <div className="text-blue-600 text-sm font-medium mt-1 text-center md:text-left">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeLocal;

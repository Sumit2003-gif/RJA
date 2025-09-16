import React from "react";
import AboutChoose from "../components/AboutChoose";
import AboutTeam from "../components/AboutTeam";

import { Link } from "react-router-dom";
import AboutForm from "../components/AboutForm";
const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Top Banner */}
          <section
      className="relative pt-50  text-white py-20"
      style={{
        backgroundImage:
          "url('https://carajput.com/common-assets/images/slider-images/about-us-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-7xl font-bold mb-2">About RJA</h1>
        <p className="mt-5 text-gray-50">
          <Link to="/" className="hover:text-blue-600 hover:underline">
            Home
          </Link>{" "}
          / About 
        </p>
      </div>
    </section>
 <section className=" text-gray-800 bg-gray-50 py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-center mb-4">
          About Rajput Jain & Associates
        </h1>
        <hr className="border-gray-300 w-24 mx-auto mb-10" />

        {/* Content + Image Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Text Content */}
          <div className="space-y-6 text-justify leading-relaxed">
            <p>
              Rajput Jain & Associates is a Chartered Accountants firm, with its headquarters situated at New Delhi (the capital of India). The firm has been set up by a group of young, enthusiastic, highly skilled and motivated professionals who have taken experience from top consulting firms and are extensively experienced in their chosen fields, providing a wide array of Accounting, Auditing, Taxation, Assurance, and Business advisory services to various clients and their stakeholders.
            </p>
            <p>
              Focused on providing tailor-made solutions to challenging problems of our clients, we perform with high quality and timely service.
            </p>
            <p>
              Rajput Jain & Associates, a professional firm, offers its clients a full range of services. To serve better and to bring a bucket of services under one roof, the firm has merged with various Chartered Accountancy firms pioneering in diversified fields.
            </p>
            <p>
              Our main office is located at Delhi. Incidentally, Delhi is the Capital of India. Our other offices are in Mankapur & Moradabad (U.P.). We have associates all over India in big cities. All our offices are well equipped with the latest technological support and updated reference materials.
            </p>
            <p>
              We have a large team of professionals, including Core Team members, to meet the requirements of prospective and existing clients. Our team continues to grow with professionals having strong backgrounds and industry exposure. To meet the growing demands of a fiercely competitive market, we continuously seek skilled associates to serve our ever-expanding clientele.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://carajput.com/common-assets/images/business-ideas.png"
              alt="Business Ideas"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
      
      <AboutChoose/>

      {/* About Law & Attorney */}
      <section className="max-w-6xl mx-auto bg-gray-200 rounded-2xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://img.freepik.com/free-photo/lawyer-court_1098-18394.jpg"
            alt="Lawyer"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://img.freepik.com/free-photo/group-lawyers_1098-18389.jpg"
            alt="Lawyers"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://img.freepik.com/free-photo/judge-courtroom_1098-18390.jpg"
            alt="Judge"
            className="rounded-lg shadow-md col-span-2"
          />
        </div>
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Law & Attorney</h2>
          <p className="text-gray-700 mb-4">
            Lawzon began in 1990, when Tom Lincoln and Randy Gustafson left
            their former firm to start their own partnership. LGC was then known
            as Lincoln & Gustafson, working primarily in insurance defense cases
            for several insurers. As the firm’s reputation for superior work
            grew, so did the firm’s caseload, which led to the firm hiring
            several associates. One of those associates was Tad Caceros, who was
            hired in April of 1997.
          </p>
          <p className="text-gray-700 mb-4">
            Tad proved to be an outstanding associate, and an even better
            partner. Ultimately, the firm became Lincoln, Gustafson & Caceros in
            April of 1998.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Warning of updated legal risks for customers</li>
            <li>Work professionally and quickly</li>
            <li>If you don’t win, we don’t take money.</li>
          </ul>
        </div>

        
      </section>
      <AboutTeam/>
      {/* Why Choose Us */}
    

    </div>
  );
};

export default AboutUs;

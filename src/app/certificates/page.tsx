"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "Python for Data Science",
    issuer: "IBM / Coursera",
    year: 2025,
    link: "https://www.coursera.org/account/accomplishments/certificate/EXAMPLE1"
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    year: 2024,
    link: "https://www.freecodecamp.org/certification/anjanasivadas/fullstack"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM / Coursera",
    year: 2025,
    link: "https://www.coursera.org/account/accomplishments/certificate/EXAMPLE2"
  },
  // Add more certificates here
];

export default function CertificatesPage() {
  return (
    <motion.main
      className="px-10 py-20 bg-gray-100 text-gray-900 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center">My Certificates</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="bg-white rounded-lg shadow hover:scale-105 transition-transform p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-500 mb-1">{cert.issuer}</p>
            <p className="text-gray-500 mb-3">Year: {cert.year}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
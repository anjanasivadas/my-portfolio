import { motion } from "framer-motion";

const projects = [
  {
    title: "WeatherApp247",
    description:
      "A live weather app built with React and OpenWeatherMap API. Shows temperature, humidity, wind speed, and dynamic backgrounds.",
    github: "https://github.com/anjanasivadas/weather-app",
    live: "https://weather-app-9yv2.vercel.app/"
  },
  {
    title: "Todo App",
    description:
      "A simple and responsive Todo app built with React. Allows adding, deleting, and marking tasks as completed.",
    github: "https://github.com/anjanasivadas/TOdoApp",
    live: "https://t-odo-app-five.vercel.app/"
  }
];


export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-10 py-20 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            className="bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-3">{proj.description}</p>

            <div className="flex gap-4 mt-4">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              )}

              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>

          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

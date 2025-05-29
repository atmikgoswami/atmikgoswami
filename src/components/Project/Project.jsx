import { motion } from "framer-motion";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

export default function Project({ theme }) {
  const projects = [
    {
      title: "Bloom: A mental wellness and support Android app",
      description:
        "Developed a mental wellness and support Android app using Jetpack Compose, Dagger-Hilt, Retrofit, Firestore and Gemini Pro to provide comprehensive mental support to users. Includes daily journal entry functionality, anonymous chat rooms, personalised chat bot, and connection with professional doctors.",
      github: "https://github.com/atmikgoswami/Bloom",
      live: "",
      tech: [
        "Jetpack Compose",
        "Dagger-Hilt",
        "Retrofit",
        "Firebase Firestore",
      ],
    },
    {
      title: "CropDoc: AI-Powered Crop Disease Detection App",
      description:
        "Developed an user-friendly application built for the farming industry. Includes a disease prediction feature where users can simply upload an image of a diseased leaf/crop and receive the predicted disease and its remedies. Includes a crop recommendation feature to recommend suitable crops that can be grown, based on weather and soil conditions. Provides a section where users can read the latest agriculture related news of India to stay updated.",
      github: "https://github.com/atmikgoswami/CropDoc",
      live: "",
      tech: ["Jetpack Compose", "Dagger-Hilt", "Retrofit", "Room Database"],
    },
    {
      title: "MediaForge: Professional tools for all file manipulation needs",
      description:
        "MediaForge is a full-stack web application that provides powerful and intuitive tools for image and file manipulation. It enables users to compress, convert, and resize images, as well as compress, merge, and extract pages from PDFs. Designed with performance and ease-of-use in mind, MediaForge simplifies everyday file handling tasks through a clean and responsive interface.",
      github: "https://github.com/atmikgoswami/mediaforge",
      live: "https://mediaforge.netlify.app/",
      tech: ["React", "Flask API", "Image Processing", "File Processing", "Python"],
    },  
    {
      title:
        "Srijan-2025: Annual Techno-Management Fest of Jadavpur University",
      description:
        "Developed the authentication system for Srijan 2025- The Annual Techno-management fest of Jadavpur University, handling approximately 5k users.",
      github: "",
      live: "https://srijanju.in/login",
      tech: ["NodeJS", "ExpressJS", "MongoDB", "PassportJS"],
    },
    {
      title:
        "Kora AI: AI powered mental health support system",
      description:
        "Kora AI is a full-stack web application designed to provide students with emotional support through intelligent AI-supported journaling, and emotional support. It encourages daily reflections and utilizes AI to enhance mental well-being, making it a digital companion for self-growth.",
      github: "https://github.com/atmikgoswami/kora-frontend",
      live: "https://kora25.netlify.app/",
      tech: ["React", "NodeJS", "ExpressJS", "MongoDB", "Mistral LLM"],
    },
  ];

  const bgColor = theme === "light" ? "bg-gray-100" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-700";
  const techBgColor = theme === "light" ? "bg-gray-300 text-gray-900" : "bg-gray-700 text-gray-300";

  return (
    <section id="project" className="py-16 px-20">
      <h2 className={`text-3xl font-bold text-center mb-10 ${textColor}`}>My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg border hover:bg-pink-500 transition-colors duration-300 ${bgColor} ${borderColor}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-4">
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Live Demo" className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{project.title}</h3>
            <p className={`text-sm mb-4 ${textColor}`}>{project.description}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, techIndex) => (
                <li
                  key={techIndex}
                  className={`text-xs px-3 py-1 rounded ${techBgColor}`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

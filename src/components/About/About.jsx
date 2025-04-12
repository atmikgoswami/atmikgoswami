import { motion } from "framer-motion";
import AtmikGoswami from "../../assets/atmikgoswami.webp";
import cppIcon from "../../assets/cpp.svg";
import javaIcon from "../../assets/java.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import composeIcon from "../../assets/jetpack-compose.svg";

export default function About() {
  return (
    <section id="about" className="py-16 px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Content */}
      <motion.div
        className="flex flex-col justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-green-500">About Me</h2>

        <p className="text-lg mt-6">
          Hi there! I'm Atmik, a third-year Information Technology engineering undergraduate at Jadavpur University with a passion for software development, AI, and computer science.
        </p>
        <p className="text-lg mt-6">
          I have experience in web development in MERN, delivering efficient and scalable web applications across many projects. I'm also proficient in Android app development with Jetpack Compose. My work spans from building scalable applications to integrating AI-based solutions.
        </p>
        <p className="text-lg mt-6">
          Beyond development, I actively engage in research, recently working on a hybrid deep learning approach for Music Emotion Recognition. My work has been recognized at international conferences, and I strive to bridge the gap between theory and real-world applications.
        </p>
        <p className="text-lg mt-6">
          Whether it's building intuitive user experiences, optimizing backend performance, or applying AI in innovative ways, I’m always eager to collaborate and create impactful solutions. Let’s connect and build something great together!
        </p>

        <h3 className="text-2xl font-semibold text-green-500 mt-8">Here are my main skills:</h3>

        <div className="flex flex-wrap gap-3 mt-4">
          {[cppIcon, javaIcon, reactIcon, nodeIcon, htmlIcon, cssIcon, jsIcon, composeIcon].map((icon, index) => (
            <div key={index} className="w-14 flex justify-center">
              <img src={icon} alt="Skill Icon" className="w-6 h-6" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Content (Profile Image) */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={AtmikGoswami}
          alt="Atmik Goswami"
          className="md:w-120 md:h-120 object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
}

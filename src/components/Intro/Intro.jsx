import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import Illustration from "../../assets/illustration.png";

export default function Hero() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <motion.section
      className="w-full flex flex-col md:flex-row justify-between px-20 md:pr-65 lg:pr-65 py-30"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div className="space-y-4">
        <motion.p className="text-lg">
          Hello <img src={Hello} alt="Hello" width="20px" className="inline" />, I'm
        </motion.p>
        <motion.h1 className="text-6xl font-bold">Atmik Goswami</motion.h1>
        <motion.h3 className="text-2xl">IT Engineering Undergraduate</motion.h3>
        <motion.p className="text-lg">Skilled in AI, Web and App Development</motion.p>

        <motion.button
          onClick={() => navigate("/contact")}
          className="mt-4 bg-green-500 px-12 py-3 rounded-4xl text-white uppercase"
          whileHover={{ scale: 1.1 }}
        >
          Contact
        </motion.button>

        <motion.div className="flex space-x-4 mt-4">
          {[linkedin, githubIcon, whatsapp, telegram].map((icon, index) => (
            <motion.a
              key={index}
              href={index === 0 ? "https://www.linkedin.com/in/atmikgoswami" : 
                    index === 1 ? "https://github.com/atmikgoswami/" : 
                    index === 2 ? "https://api.whatsapp.com/send/?phone=%2B918910425255&text=Hello+Atmik" :
                    "https://t.me/atmikgoswami"}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <img src={icon} alt="Icon" className="w-8 transition" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
        <img src={Illustration} alt="Illustration" className="w-60 md:w-90 hidden md:block lg:block" />
      </motion.div>
    </motion.section>
  );
}
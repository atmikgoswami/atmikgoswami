import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 text-white md:px-30 py-6 flex flex-col md:flex-row justify-between items-center space-y-4">
      {/* Logo */}
      <a
        href=""
        className="text-3xl font-bold text-center"
      >
        <span>atmikgoswami</span>
        <span className="text-green-500">.netlify.app</span>
      </a>

      {/* React Made Text */}
      <p className="flex items-center text-lg space-x-2 md:mt-2 lg:mt-2">
        <span>This website was made with</span>
        <img
          src={reactIcon}
          alt="React"
          className="w-8 h-8 animate-spin-slow"
        />
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/atmikgoswami"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="w-8 hover:scale-110 transition" />
        </a>
        <a
          href="https://github.com/atmikgoswami/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="w-8 hover:scale-110 transition" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B918910425255&text=Hello+Vinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" className="w-8 hover:scale-110 transition" />
        </a>
        <a
          href="https://t.me/atmikgoswami"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="Telegram" className="w-8 hover:scale-110 transition" />
        </a>
        <a
          href="https://www.instagram.com/atmikgoswami"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="w-8 hover:scale-110 transition" />
        </a>
      </div>
    </footer>
  );
}

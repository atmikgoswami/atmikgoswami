import { motion } from "framer-motion";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export default function Contact({theme}) {
  return (
    <section id="contact" className="px-20 py-10 md:px-12 ">
      <header className="text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-green-500 font-medium mt-2">
          Ready to share your ideas?
        </p>
        <p className="text-green-500 font-medium">
          Let us connect.
        </p>
      </header>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center w-full max-w-sm gap-4 bg-green-500 rounded-xl p-6 transition-colors hover:bg-pink-500"
        >
          <a href="mailto:contact@atmikgoswami.me">
            <img src={emailIcon} alt="Email" className="w-12" />
          </a>
          <a
            href="mailto:contact@atmikgoswami.me"
            className="text-black font-medium transition-colors hover:text-white"
          >
            contact@atmikgoswami.me
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center w-full max-w-sm gap-4 bg-green-500 rounded-xl p-6 transition-colors hover:bg-pink-500"
        >
          <a href="tel:+918910425255">
            <img src={phoneIcon} alt="Phone No" className="w-12" />
          </a>
          <a
            href="tel:+918910425255"
            className="text-black font-medium transition-colors hover:text-white"
          >
            (+91) 8910425255
          </a>
        </motion.div>
      </motion.div>

      <Form theme={theme}/>
    </section>
  );
}

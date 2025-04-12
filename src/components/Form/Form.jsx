import { useForm, ValidationError } from "@formspree/react";
import { toast } from 'react-hot-toast';
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";
import { motion } from "framer-motion";

export function Form({ theme }) {
  const [state, handleSubmit] = useForm("myzeoedq"); // Replace with your own Formspree ID
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email) {
    setValidEmail(validator.isEmail(email));
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Your message has been successfully sent.");
    } else if (state.errors && state.errors.length > 0) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [state.succeeded, state.errors]);

  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const borderColor = theme === "light" ? "border-gray-900" : "border-white";
  const placeholderColor =
    theme === "light" ? "placeholder-gray-700" : "placeholder-white";

  if (state.succeeded) {
    return (
      <div className="mt-40 text-center">
        <h3 className="text-2xl font-bold">Thanks for getting in touch!</h3>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-pink-500 transition"
        >
          Back to the top
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="mt-12 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-3xl font-bold text-center mb-6 ${textColor}`}>
        Get in touch using the form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-2xl"
      >
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
          className={`w-full px-4 py-3 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${borderColor} ${textColor} ${placeholderColor}`}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full px-4 py-3 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-40 ${borderColor} ${textColor} ${placeholderColor}`}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <ReCAPTCHA
          sitekey="6Le1oBUrAAAAAOR_ECOsCK4HfhMGASvt2Rj9tJH-" // Use your own key here
          onChange={() => setIsHuman(true)}
          className="self-center"
        />

        <motion.button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
          whileHover={{ scale: 1.05 }}
          className="px-1 py-3 uppercase font-semibold rounded-lg transition bg-green-500 text-white hover:bg-pink-500 disabled:opacity-50"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Form;

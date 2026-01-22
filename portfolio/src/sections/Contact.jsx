import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import SecTagLine from "../components/SecTagLine";
import SecHeading from "../components/SecHeading";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={
        `w-full py-20 px-6 flex flex-col items-center gap-14 ` +
        (isDark ? "bg-black text-white" : "bg-white text-black")
      }
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-3">
        <SecHeading >Contact Me</SecHeading>
        <SecTagLine>
          Feel free to reach out for collaborations, project inquiries, or just to say hello.
        </SecTagLine>
      </div>

      {/* Main Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left — Contact Info */}
        <div
          className={`
            p-8 rounded-2xl shadow-xl border flex flex-col gap-6
            ${isDark ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-300"}
          `}
        >
          <h3 className="text-2xl font-semibold">Get in Touch</h3>

          <div
            className={
              `flex items-center gap-4 p-3 rounded-xl ` +
              (isDark ? "bg-zinc-800" : "bg-zinc-100")
            }
          >
            <FaEnvelope className="text-2xl" />
            <p className="opacity-90">sarwatmustafa03@gmail.com</p>
          </div>

          <div
            className={
              `flex items-center gap-4 p-3 rounded-xl ` +
              (isDark ? "bg-zinc-800" : "bg-zinc-100")
            }
          >
            <FaPhoneAlt className="text-2xl" />
            <p className="opacity-90">+92 3041459879</p>
          </div>

          <h4 className="text-lg font-semibold mt-4">Follow Me</h4>

          <div className="flex items-center gap-6 text-3xl">
            <a
              href="https://github.com/sarwatmustafa-03"
              className="hover:scale-125 transition-transform"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sarwat-mustafa-bb0549321/"
              className="hover:scale-125 transition-transform"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            
          </div>
        </div>

        {/* Right — Contact Form */}
        <form
          className={`
            p-8 rounded-2xl shadow-xl border flex flex-col gap-5
            ${isDark ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-300"}
          `}
        >
          <input
            type="text"
            placeholder="Your Name"
            className={`
              p-3 rounded-xl border outline-none
              ${isDark ? "bg-zinc-800 border-zinc-700 text-white" : "bg-white border-zinc-300"}
            `}
          />

          <input
            type="email"
            placeholder="Your Email"
            className={`
              p-3 rounded-xl border outline-none
              ${isDark ? "bg-zinc-800 border-zinc-700 text-white" : "bg-white border-zinc-300"}
            `}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className={`
              p-3 rounded-xl border outline-none resize-none
              ${isDark ? "bg-zinc-800 border-zinc-700 text-white" : "bg-white border-zinc-300"}
            `}
          ></textarea>

          <button
            type="submit"
            className="
              mt-2 py-3 rounded-xl font-semibold transition
              bg-blue-600 text-white hover:bg-blue-500
            "
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;

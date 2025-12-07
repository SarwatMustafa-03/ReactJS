    import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <footer
      className={
        `w-full py-8 flex flex-col items-center gap-4 ` +
        (isDark ? "bg-black text-white" : "bg-white text-black")
      }
    >

      {/* Footer Text */}
      <p className="text-sm opacity-70 text-center">
        © {new Date().getFullYear()} Your Name — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

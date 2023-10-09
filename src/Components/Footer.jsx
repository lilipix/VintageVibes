import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <p className="text-slate-50 ">Réalisé par Aurélie Demure</p>
      <div className="flex justify-center gap-8 ">
        <a
          className="text-slate-50 text-lg cursor-pointer"
          href="https://www.linkedin.com/in/aurelie-demure/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="text-slate-50 text-lg cursor-pointer"
          href="https://github.com/lilipix"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="text-slate-50 text-lg cursor-pointer"
          href="mailto:aurelie.demure.ad@gmail.com"
        >
          <LuMail />
        </a>
      </div>
    </div>
  );
};

export default Footer;

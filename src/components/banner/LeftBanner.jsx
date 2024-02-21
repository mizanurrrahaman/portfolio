import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full stack Developer.",
      "UI Designer.",
      "Hook!",
    ],
    loop: true,
    onLoopDone: () => console.log(`loop completed after alike runs.`),
  });

  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg pt-24 font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white	">
          hi, I'm{" "}
          <span className="text-red-500 capitalize">
            Murad Hossain Chowdhury
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a{" "}
          <span>
            {text}
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor=" #ff014f"
            />
          </span>
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            {" "}
            social media
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            My Professional skills
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <TbBrandFigma />
            </span>
            <span className="bannerIcon">
                <DiJavascript1 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;

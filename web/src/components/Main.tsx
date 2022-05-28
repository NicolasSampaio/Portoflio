import { EnvelopeSimple } from "phosphor-react";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <>
      <div className="flex flex-col gap-10 mt-40 ml-64">
        <h1 className="text-7xl leading-[130%] font-bold lincoliGradient">
          Hi, I'm Nicolas Sampaio,
          <br />
          I'm a fullstack developer
        </h1>

        <p className="text-3xl text-white">
          I code beautifully simple things, and I love what I do.
        </p>

        <div className="text-2.1xl text-white">
          <Link to="/portfolio">
            <button
              className="relative border rounded-xl border-white py-7 px-16 
          after:absolute after:content-[url('./assets/ArrowRight.svg')] after:h-12 after:w-20 after:top-5 after:-right-20"
            >
              My Recent Work
            </button>
          </Link>
        </div>
      </div>

      <EnvelopeSimple
        size={52}
        color="#F04848"
        className="absolute bottom-11 left-8"
      />
      {/* <span className="absolute border border-lincoliRed rounded-2xl  w-36 h-36 -bottom-5 -left-5 rotateSquare"></span> */}
    </>
  );
}

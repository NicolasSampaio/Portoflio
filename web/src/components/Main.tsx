import arrowRightImg from "../assets/ArrowRight.svg";

export function Main() {
  return (
    <div className="flex flex-col gap-10 mt-52 ml-64">
      {/* <h1 className="text-lincoliColorfulGradient"> */}
      <h1 className="text-7xl text-lincoliRed">
        Hi, I'm Nicolas Sampaio,
        <br />
        I'm a fullstack developer
      </h1>

      <p className="text-3xl text-white">
        I code beautifully simple things, and I love what I do.
      </p>

      <div className="text-2.1xl text-white">
        <button
          className="relative border rounded-xl border-white py-7 px-16 
          after:absolute after:content-[url('./assets/ArrowRight.svg')] after:h-12 after:w-20 after:top-5 after:-right-20"
        >
          My Recent Work
        </button>
      </div>
    </div>
  );
}

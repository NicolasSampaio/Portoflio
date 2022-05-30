import { Link } from "react-router-dom";
import { MyRecentWorkButton } from "./MyRecentWorkButton";

export function Homepage() {
  return (
    <main className="flex flex-col gap-10 ml-64">
      <h1 className="text-7xl leading-[130%] font-bold lincoliGradient">
        Hi, I'm Nicolas Sampaio,
        <br />
        I'm a fullstack developer
      </h1>

      <p className="text-3xl text-white">
        I code beautifully simple things, and I love what I do.
      </p>

      <MyRecentWorkButton />
    </main>
  );
}

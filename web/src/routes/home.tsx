import { MyRecentWorkButton } from "../components/MyRecentWorkButton";

export function Home() {
  return (
    <main className="flex flex-1 justify-center flex-col gap-10 sm:ml-64 mt-10 sm:mt-10 ml-7 mr-7">
      <h1 className="sm:text-7xl text-4xl leading-[130%] font-bold text-center sm:text-left lincoliGradient">
        Hi, I'm Nicolas Sampaio,
        <br />
        I'm a fullstack developer
      </h1>

      <p className="sm:text-3xl text-xl sm:text-left text-center text-white">
        I code beautifully simple things, and I love what I do.
      </p>

      <MyRecentWorkButton />
    </main>
  );
}

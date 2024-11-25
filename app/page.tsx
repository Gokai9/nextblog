import Link from "next/link";
import Me from "./componets/Me";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function Home() {
  // const genAI = new GoogleGenerativeAI('AIzaSyAov3fYWHNz3FijPiSEDo52rkLYAYk1hAs');
  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // const prompt = "Write a story about a magic backpack.";

  // const result = await model.generateContent(prompt);
  // console.log(result.response.text());
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mt-10">
        <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Welcome to My Blog & Portfolio</h1>
        <p className="text-xl mb-8">
          I'm a passionate developer, writer, and designer sharing my journey and projects with the world.
        </p>
        <Link
          href="/about"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Learn More About Me
        </Link>
      </section>

        <Me />
    </main>
  );
}
import Link from "next/link";
import Me from "./componets/Me";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className=" lg:w-full">
          <p className="mb-6 text-3xl font-semibold leading-normal text-white">
          Hello everyone, Welcome to my website i like to build a new stuf and learn new thing
          </p>
          <Link href="/about" className="text-white font-medium text-smpy-2.5">know more about me</Link>
        </div>
        <div className="lg:w-full">
          <p className="mb-6">
            I recently started to writing about programming stuf because it make me understand more what i doing,
            i hope that i can be better at writing and explain new thing.
          </p>
          <Link href="/blog" className="text-white font-medium text-sm px-5 py-2.5 border hover:bg-gray-700">Read my blog</Link>
        </div>
        <Me />
    </main>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="block pb-6 bg-black-800">
          <p className="mb-6 text-3xl font-semibold leading-normal text-white">
          Hello everyone, Welcome to my website i like to build a new stuf and learn new thing
          </p>
          <Link href={"/about"} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">know more about me</Link>
        </div>
        <div className="block pb-6">
          <p className="mb-6">
            I recently started to writing about programming stuf because it make me understand more what i doing,
            i hope that i can be better at writing and explain new thing.
          </p>
          <Link href={"/blogs"} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read my blog</Link>
        </div>
      </div>
    </main>
  );
}

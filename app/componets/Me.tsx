import Image from "next/image"
import Link from "next/link"

const Me = () => {
    return (
        <div className="bg-gray-600 m-8 p-8 rounded w-full flex lg:flex-row flex-col justify-around">
            <div className="lg:w-2/4 pb-4">
            <h1 className="text-xl">About ME</h1>
            <h3>I'm a Fullstack Developer, polyglot, and Writer.</h3>
            <p>I am a self taught person, i like to teach myself something that i dont understand.
                <span> I publish my writing on <Link href="/blog" className="border-b hover:bg-sky-700">this Blog</Link></span>
            </p>
            </div>
            <Image
                className="rounded-full aspect-square object-cover"
                src="/beta.jpg"
                width={350}
                height={350}
                alt="Picture of the author"
                />
        </div>
    )
}

export default Me
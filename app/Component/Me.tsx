import Image from "next/image"

const Me = () => {
    return (
        <div className="bg-gray-600 m-8 p-8 rounded flex lg:flex-row flex-col">
            <div className="w-2/4">
            <h1 className="text-xl">About ME</h1>
            <h3>I'm a Fullstack Developer and Writer</h3>
            <p>After learn About web development, i start to created
                this website with i have been learning. I also like writing
                and try to improve it.
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
import Me from "../componets/Me"
import meta from "../componets/helper/metadata";

export const metadata = meta("About", "Do you want to know about me")

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center ">
                <h2 className="text-xl bold">Hey there!</h2>
                <p>Hello, you can call me sim. Im a software engineer, polyglot, and writer.
                    After learn english and japanese, i try to learn french and add it to my polyglot
                    stack. Also i am something writing about my learning journey.
                </p>
                <Me />
        </main>
        
    )
}
import Me from "../componets/Me"
import meta from "../componets/helper/metadata";

export const metadata = meta("About", "Do you want to know about me")

// pages/about.js
export default function About() {
    return (
      <div className="min-h-screen bg-black text-white">
        <main className="container mx-auto px-6 py-10">
          <h1 className="text-4xl font-semibold text-center text-blue-400 mb-8">About Me</h1>
          
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-400">Hello, I'm Sim</h2>
            <p className="mt-4 text-lg">
              I am a passionate Software Engineer with a deep interest in Web Development and Machine Learning. 
              Over the years, I've gained experience in Programming.
            </p>
            <p className="mt-4 text-lg">
              When I'm free, I enjoy Learn language and read a book. This website serves as a place to share my journey, 
              thoughts, and projects with others.
            </p>
          </section>
  
          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-blue-400">My Skills</h3>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-lg">
              <li>React.js</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>Golang</li>
            </ul>
          </section>
  
        </main>
        <Me />
        <footer className="text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Sim. All rights reserved.</p>
        </footer>
      </div>
    )
  }
  
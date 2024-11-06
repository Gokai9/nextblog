'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches) {
            setMatches(true);
        }
    
        const listener = (event: any) => setMatches(event.matches);
        media.addEventListener('change', listener);
    
        return () => media.removeEventListener('change', listener);
    }, [query]);
    
    return matches;
    
    };

export default function Nav() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [open, isOpen] = useState(false)
    const hamburger =(
        <div className="grid justify-items-center gap-1.5" onClick={() => isOpen(!open)}>
        <span className="h-1 w-8 rounded-full bg-black"></span>
        <span className="h-1 w-8 rounded-full bg-black"></span>
        <span className="h-1 w-8 rounded-full bg-black"></span>
    </div>)
    const closed = ( <>
	<div className="grid justify-items-center gap-1.5" onClick={() => isOpen(!open)}>
    <span className="h-1 w-8 rounded-full bg-black transition rotate-45 translate-y-2.5"></span>
    <span className="h-1 w-8 rounded-full bg-black scale-x-0 transition"></span>
    <span className="h-1 w-8 rounded-full bg-black -rotate-45 -translate-y-2.5"></span>
  </div>
  </>
    )
    const menu = (
        <div className="block w-full md:block md:w-auto mt-12">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
          </li>
          <li>
            <a href="/projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
          </li>
          <li>
            <a href="about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
          </li>
        </ul>
      </div>
    )
    const a = open ? closed : hamburger
    console.log(open)
    return (<div>
        <header className="dark:bg-gray-900 fixed w-full m-auto z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="w-full lg:w-[1025px] flex flex-wrap items-center justify-between mx-auto p-4">
            <h1>Sim</h1>
            <nav className="">
                { mobile ? a :
                <div className="flex space-x-4 lg:block hidden">
                <Link href={"/"} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                <Link href={"/blog"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                <Link href={"/projects"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</Link>
                <Link href={"/about"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
                </div>}
            </nav>
            </div>
        </header>
        {open ? menu : null}
        </div>
    )
}
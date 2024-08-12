'use client'

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [open, isOpen] = useState(false)
    return (
        <header className="flex justify-between items-center">
            <h1>Sim</h1>
            <nav>
                <div className="flex space-x-4">
                <Link href={"/"} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                <Link href={"/blog"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                <Link href={"/projects"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</Link>
                <Link href={"/about"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
                </div>
            </nav>
        </header>
    )
}
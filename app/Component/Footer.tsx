import Link from "next/link"

const Footer = () => {
    return (
<footer className="p-4 bg-gray border-t border-gray-200 md:flex md:items-center md:justify-between md:p-6">
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href={"https://exercism.org/profiles/Gokai9"} className="hover:underline me-4 md:me-6">Exercism</Link>
        </li>
        <li>
            <Link href={"https://github.com/Gokai9"} className="hover:underline me-4 md:me-6">Github</Link>
        </li>
        <li>
            <Link href={"https://leetcode.com/u/Gokai9/"} className="hover:underline me-4 md:me-6">LeetCode</Link>
        </li>
        <li>
            <Link href={"https://www.codewars.com/users/Gokai9"} className="hover:underline">Codewars</Link>
        </li>
    </ul>
</footer>

    )
}

export default Footer
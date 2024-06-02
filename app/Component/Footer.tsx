import Link from "next/link"

const Footer = () => {
    return (
<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href={"#"} className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link href={"#"} className="hover:underline me-4 md:me-6">Github</Link>
        </li>
        <li>
            <Link href={"#"} className="hover:underline me-4 md:me-6">LeetCode</Link>
        </li>
        <li>
            <Link href={"#"} className="hover:underline">Contact</Link>
        </li>
    </ul>
</footer>

    )
}

export default Footer
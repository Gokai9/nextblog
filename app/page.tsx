import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="block pb-6 bg-black-800">
          <p className="mb-6 text-3xl font-semibold leading-normal text-white">
          Beberapa orang mengatakan aku bisu, beberapa orang mengatakan aku bodoh. 
          Tapi apapun yang mereka katakan aku ingin menjadi orang yang menggunakan otakku. 
          </p>
          <Link href={"/about"} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click this if you want to know more about me</Link>
        </div>
        <div className="block pb-6">
          <p className="mb-6">
            Walau telah belajar menulis sejak umur 6 tahun, tapi baru pertama kali ini mulai membuat karya tulis. 
          </p>
          <Link href={"/blogs"} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read my blog</Link>
        </div>
      </div>
    </main>
  );
}

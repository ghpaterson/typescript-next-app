import Link from "next/link"

export default function Home() {
  return (
    <main className="py-8 px-48">
     <Link 
      className=" bg-red-300 py-2 px-4 rounded-md text-2xl"
      href={"/dashboard"}>Go to the dashboard
     </Link>
    </main>
  )
}

import Link from "next/link"
export default function Header() {
  return (
    <header className="flex justify-between px-12 bg-blue-800 text-white text-xl  h-16 items-center">
        <div className="font-bold">LOGO</div>
    <div>
     <ul className="flex gap-10">
        <Link href="/"><li className="hover:text-blue-200">Home</li></Link>
        <Link href="/about"><li className="hover:text-blue-200">About</li></Link> 
        <Link href="/our-service"><li className="hover:text-blue-200">Our-Service</li></Link>
        <Link href="/contact-us"><li className="hover:text-blue-200">Contact-Us</li></Link>
     </ul> 
    </div>
    </header>
  )
}

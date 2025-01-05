import Link from "next/link";

export default function page() {
  return (
    <div>
      <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/"><li>About</li></Link>
        <Link href="/"><li>Our-Serices</li></Link>
        <Link href="/"><li>Contact-Us</li></Link>

      </ul>
    </div>
  )
}

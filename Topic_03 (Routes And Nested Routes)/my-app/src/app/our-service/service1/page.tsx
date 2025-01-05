import ServiceList from "@/app/Component/service"
import Link from "next/link"
export default function Service1() {
  return (
    <div>
      <h1>Service1</h1>
      <ServiceList/>
      <Link href="/our-service" className="text-blue-950 text-xl font-semibold hover:text-blue-800">GoBack</Link>
     
    </div>
  )
}

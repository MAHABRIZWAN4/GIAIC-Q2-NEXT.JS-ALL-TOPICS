import Link from "next/link"
export default function ServiceList() {
  return (
    <div>
    <ul className="gap-10 font-bold text-blue-600 underline">
        <Link href="/our-service/service1"><li className="hover:text-blue-800">Service1</li></Link>
        <Link href="/our-service/service2"><li className="hover:text-blue-800">Service2</li></Link> 
        <Link href="/our-service//service3"><li className="hover:text-blue-800">Service3</li></Link>
     </ul> 
   
   </div>
  )
}
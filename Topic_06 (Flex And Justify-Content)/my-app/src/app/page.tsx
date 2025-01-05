import Image from "next/image";

export default function Home() {
  return (
   <main>
    <div className="h-24 bg-slate-600 text-white flex justify-center items-center font-semibold text-3xl">Header</div>



    <div className="flex h-72 items-center mt-20 px-12">
      <div className="bg-red-700 text-white flex-1 h-64">Content 1</div>
      <div className="bg-green-700 text-white flex-1 h-64">Content 2</div>
    </div>
   

   </main>
  );
}

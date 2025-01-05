//  export default function page() {
//    return (
//      <main>

//        <div className='grid grid-rows-[110px_280px_170px_110px] grid-cols-4 gap-1 '>
//        <div className='bg-teal-900 text-white  text-2xl font-semibold col-span-5 flex justify-center items-center '>Navbar</div>
//        <div className='bg-blue-800 text-white text-2xl font-semibold row-span-2 flex justify-center    '>Sidebar</div>
//        <div className='bg-yellow-600 text-white text-2xl font-semibold col-span-4 flex justify-center'>Main</div>
//        <div className='bg-fuchsia-700 text-white text-2xl font-semibold flex justify-center'>Content1</div>
//        <div className='bg-orange-600 text-white text-2xl font-semibold flex justify-center'>Content2</div>
//        <div className='bg-emerald-600 text-white text-2xl font-semibold flex justify-center'>Content3</div>
//        <div className='bg-pink-600 text-white text-2xl font-semibold col-span-5 flex justify-center'>Footer</div>
//        </div>


//      </main>
//    )
//  }


//  SAME CODE WITH RESPONSIVENESS
 export default function page() {
   return (
     <main>

       <div className='grid grid-rows-[100px_100px_370px_200px_200px_200px_100px]   md:grid-rows-[150px_150px_580px_350px_120px] lg:grid-rows-[150px_30px_580px_350px_120px]  md:grid-cols-3 grid-cols-4 gap-1 '>
       <div className='bg-teal-900 text-white  text-2xl font-semibold col-span-5 flex justify-center items-center'>Navbar</div>
       <div className='bg-blue-800 text-white text-2xl font-semibold md:row-span-1 flex justify-center col-span-5 items-center lg:col-span-1 lg:row-span-2'>Sidebar</div>
       <div className='bg-yellow-600 text-white text-2xl font-semibold md:col-span-5 flex justify-center col-span-5 lg:col-span-4 lg:row-span-2'>Main</div>
       <div className='bg-fuchsia-700 text-white text-2xl font-semibold flex justify-center col-span-5 md:col-span-1'>Content1</div>
       <div className='bg-orange-600 text-white text-2xl font-semibold flex justify-center col-span-5 md:col-span-1'>Content2</div>
       <div className='bg-emerald-600 text-white text-2xl font-semibold flex justify-center col-span-5 md:col-span-1'>Content3</div>
       <div className='bg-pink-600 text-white text-2xl font-semibold col-span-5 flex justify-center  items-center'>Footer</div>
       </div>


     </main>
   )
 }


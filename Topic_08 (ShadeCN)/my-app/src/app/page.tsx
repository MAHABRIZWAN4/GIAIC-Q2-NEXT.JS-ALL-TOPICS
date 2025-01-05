import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import Link from "next/link"
export default function Home() {
  return (
  <main>
<h1>ShadeCN</h1>
<p>A library (like ShadeCN) to manage and apply consistent class names in components.</p>
<h1 className="font-extrabold">1.Use Button Component</h1>
<Button className="ml-2" variant="destructive">CONTACT-US</Button>




<h1 className="font-extrabold">2.Use Sheet Component</h1>









<div className="flex justify-between bg-red-700 text-white font-extrabold h-20 items-center pl-8 text-xl">
  <div>LOGO</div>
  <div>
    <ul className="gap-5 pr-9 hidden md:flex">
      <Link href="/"><li>Home</li></Link>
      <Link href="/"><li>About</li></Link>
      <Link href="/"><li>Our Service</li></Link>
      <Link href="/"><li>Contact-Us</li></Link>
    </ul>


<Sheet >
<SheetTrigger className="md:hidden pr-9">
  
<Menu/>

</SheetTrigger>



<SheetContent>
<ul className="gap-5  flex flex-col">
      <Link href="/"><li>Home</li></Link>
      <Link href="/"><li>About</li></Link>
      <Link href="/"><li>Our Service</li></Link>
      <Link href="/"><li>Contact-Us</li></Link>
    </ul>
</SheetContent>
</Sheet>

</div>
</div>






<h1 className="font-extrabold">3.Use Accordion Component</h1>

<div className="w-96">
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>




<h1 className="font-extrabold">4.Use AlertDialog Component</h1>

<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>





<h1 className="font-extrabold">5.Use Avatar Component</h1>

<Avatar>
  <AvatarImage src="./Egg.JPG" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>



  </main>
   
  )}






  

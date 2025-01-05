import Image from "next/image";
import image from "../../public/image.png"
export default function Home() {
  return (
    <div>
    <div className="text-white bg-black  h-16 text-2xl font-extralight  flex items-center justify-center ">Topic_05</div>
<div>Images</div>

1.Set up a Next.js project following the official documentation.<br/>
2. Prepare the image file you want to add and place it in a directory within your project, such as "public/images".<br/>
3. Import the `Image` component by adding `import Image from 'next/image'` to the file where you want to display the image.<br/>
4. Use the `Image` component in your JSX code with the `src` prop pointing to the image file's path relative to the "public" directory. Specify the `alt` text, `width`, and `height` attributes.<br/>
5. Start the Next.js development server using `npm run dev`.<br/>
6. Open your web browser and visit the provided development server URL (usually `http://localhost:3000`) to see the image displayed. By following these steps, you'll be able to add an image to your Next.js 14 project using the built-in `Image` component.<br/> 

<Image src={image} alt="Image" width={500} height={500}/>
    </div>
  );
}

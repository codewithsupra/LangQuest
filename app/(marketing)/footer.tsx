import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2 bg-gradient-to-r from-teal-500 to-blue-500">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button
          size="lg"
          variant="ghost"
          className="w-full text-white hover:bg-teal-600 focus:outline-none transition duration-300"
        >
          <Image 
            src="/hr.svg" 
            alt="Croatian" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-full text-white hover:bg-teal-600 focus:outline-none transition duration-300"
        >
          <Image 
            src="/es.svg" 
            alt="Spanish" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-full text-white hover:bg-teal-600 focus:outline-none transition duration-300"
        >
          <Image 
            src="/fr.svg" 
            alt="French" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-full text-white hover:bg-teal-600 focus:outline-none transition duration-300"
        >
          <Image 
            src="/it.svg" 
            alt="Italian" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-full text-white hover:bg-teal-600 focus:outline-none transition duration-300"
        >
          <Image 
            src="/jp.svg" 
            alt="Japanese" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};

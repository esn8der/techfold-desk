import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-center ${inter.className}`}
    >
      <div className="flex flex-row px-48 gap-36">
        <div className="basis-2/3 py-16 space-y-5">
          <h1 className="font-bold text-6xl">TechFold Desk</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            laborum qui incidunt, assumenda unde velit corporis quidem, dicta
            voluptatibus et nam asperiores aliquid autem eius fugiat vitae
            explicabo error accusantium dolorem veritatis ullam provident,
            repudiandae nostrum! Minima libero assumenda repellendus? Veniam
            cupiditate officiis officia in quas nobis enim quibusdam incidunt!
          </p>
        </div>
        <Image
          src="/img/hero2BG.png"
          alt="Logo"
          width={600}
          height={500}
          className="animated-element place-self-end justify-self-end items-end star"
        />
      </div>
      <span className="text-5xl font-bold px-48">About</span>
    </main>
  );
}

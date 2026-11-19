import type { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ime Isaac",
  description: "The portfolio of Ime Isaac",
  icons: {
    icon: [
      {
        url: "/favicon.png"
      }
    ],
    apple: "/favicon.png"
  }
};

export default function Home() {
  return (
    <main className='px-6 py-12'>
      <div className=''>
        <h1 className='font-[Geist] text-4xl font-semibold'>Isaac Ime</h1>
        <h2 className='font-[Geist] mt-3 font-medium tracking-tight text-xl text-[#CCCCCC]'>Full-Stack Web developer</h2>
        <p className='font-[Geist] font-normal text-md mt-3 text-[#8A8A8A]'>I build high quality web apps and web interfaces.</p>
      </div>
      {/*<div className='flex flex-row gap-1 font-[Geist] mt-6'>
        <Link href="#about" className='underline font-medium'>About</Link> &bull;
        <Link href="#experience" className='underline'>Experience</Link> &bull;
        <Link href="#projects" className='underline'>Projects</Link>
      </div>*/}
      
      <section id="about" className='mt-12 font-[Geist]'>
        <h2 className='font-medium text-lg underline font-[Geist]'>ABOUT ME</h2>
        <p className='mt-2'>Hi there! I'm Isaac, and i love building, designing and understanding web interfaces</p>
      </section>
    </main>
  );
}

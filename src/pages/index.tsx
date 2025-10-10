import { Link } from 'waku';

import { Counter } from '../components/counter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Projects } from '@/components/ProjectCarousel';
import { Templates } from '@/components/templates'

export default async function HomePage() {

  let logo = "/images/favicon.png";

  return (
    <div>
      <title>Charles Canata</title>
      {false && <Header></Header>}
      <div id="body" className='bg-slate-100 w-full h-full group'>
        <div id="Hero_Section" className='p-4'> 
          <h1 className='text-3xl font-bold p-4'>Welcome to my website!</h1>
          <p className='pl-8 pb-4'>Hi, I'm Charles, a freelance developer and avid whitewater kayaker. I build custom tech solutions for a varitey of your buisnesses needs. On this site you'll find past projects, examples of services I offer, photos and stories from my kayaking adventures, and other random features.</p>
          <div className='pl-8'>
            <button className='outline-1 border-grey rounded-lg bg-slate-100 hover:bg-slate-200 hover:outline-2'>
              <a className="w-full h-full p-1" href="http://localhost:3000/project/Personal%20Website">To learn more about this site click here!</a>
            </button>
          </div>
        </div>
        <div id="Projects_Section">
          <div className='flex space-x-4 p-5 bg-green-100'>
            <h1 className='text-3xl font-bold p-4'>Projects</h1> 
          </div>
          <div className='flex center justify-center text-center'><Projects></Projects></div>
        </div>
        <div id="Templates_Section">
          <div className='flex space-x-4 p-5 bg-green-100'>
            <h1 className='text-3xl font-bold p-4 mt-10 text-center'>Example Websites</h1>
          </div>
          <div className='flex center justify-center text-center'><Templates></Templates></div>
        </div>
        <div>
          <p>This is a div so that I can see the Example Website section better</p>
          <p>I am doing it this way currently cause I am a bad web developer</p>
          <p>But I am learning so I will figure out a better way</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};

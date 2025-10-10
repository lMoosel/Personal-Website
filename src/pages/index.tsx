import { Link } from 'waku';

import { Counter } from '../components/counter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Projects } from '@/components/ProjectCarousel';


export default async function HomePage() {

  let logo = "/images/favicon.png";

  return (
    <div>
      <title>Charles Canata</title>
      <Header></Header>

      <div>

      </div>
      <div id="Projects Section">
        <div className='flex space-x-4 p-5 center justify-center'>
          <h1 className='text-3xl font-bold p-4 text-center'>Projects</h1>
        </div>
        <div className='flex center justify-center text-center'><Projects></Projects></div>
      </div>
      <div id="Templates Section">
        <h1 className='text-3xl font-bold p-4 mt-10 text-center'>Example Websites</h1>
          
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

import { Link } from 'waku';

import { Counter } from '../components/counter';
import { Project } from '../components/project';

import type { ProjectObj } from '../types';

export default async function HomePage() {

  let logo = "/images/favicon.png";

  let projectArr:Array<ProjectObj> = [
    {
      name: "American Whitewater Volunteer",
      img: "/images/AW_Logo.png",
      description: "Working on the American Whitewater as a volunteer, More details about my involvement to come.",
      website: "https://www.americanwhitewater.org/"
    },
    {
      name: "Personal Website",
      img: logo,
      description: "That's this website! I built this website to show off my projects and skills. It Utilizes Waku and ShadCN components for a clean look and simple codebase.",
      website: "https://charlesecanata.com",
    },
    {
      name: "Spotifind",
      img: "/images/Spotifind_Temp.png",
      description: "This was a school project that utilized the Spotify API to give users more stats about their music and listening habits as well as see what friends were listening to",
      github: "https://github.com/lMoosel/WebDevIIFinalProject"
    }
  ]

  return (
    <div>
      <title>Charles Canata</title>

      <h1 className='text-3xl font-bold p-4 text-center'>Projects</h1>
      <div className='flex space-x-4 p-10'>
        {
          projectArr.map((proj) => 
            <div className='flex-1' key={proj.name}>
              <Project {...proj}/>
            </div>
          )
        }
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};

import { Project } from '../components/project';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import type { ProjectObj } from '../types';

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
    },
    {
      name: "SnapCart",
      img: logo,
      description: "TODO",
      github: "https://charlesecanata.com"
    },
    {
      name: "Whitewater Desktop Tracker",
      img: logo,
      description: "Yeah I haven't even made this yet but I want to!"
    }
  ]

export function Projects() {
    return (
        <Carousel className='bg-red-100 flex w-3/4 h-1/4'>
            <CarouselContent>
                {
                    projectArr.map((proj) =>
                        <CarouselItem className='basis-1/3' key={proj.name}>
                            <div className='flex-1'>
                                <Project {...proj} />
                            </div>
                        </CarouselItem>
                    )
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
'use client';

import type { ProjectObj } from '../types';

function redirect(url:string) {
  window.location.href = url;
}

export function Project(project:ProjectObj) {

  let domain = "http://localhost:3000";

  return (
    <div className='border-2 border-black p-4 rounded-xl h-full w-full'>
        <h1 className="max-w-full w-full text-center text-lg font-semibold">{project.name}</h1>
        <img className="max-w-full w-full center" src={project.img}/>
        <p className="max-w-full w-full center text-wrap">{project.description}</p>
        <div id='button-div' className='flex w-full justify-center space-x-4 mt-2'>
          {project.github && <button className='outline-1 border-grey rounded-lg p-2 bg-slate-100 hover:bg-slate-200 hover:outline-2' onClick={() => redirect(project.github!)}>Github</button>}
          {project.website && <button className='outline-1 border-grey rounded-lg p-2 bg-slate-100 hover:bg-slate-200 hover:outline-2' onClick={() => redirect(project.website!)}>View Site</button>}
          <button className='outline-1 border-grey rounded-lg p-2 bg-slate-100 hover:bg-slate-200 hover:outline-2' onClick={() => redirect(domain + "/project/" + project.name)}>More Info</button>
        </div>
    </div>
  );
};


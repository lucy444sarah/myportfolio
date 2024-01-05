import React from 'react'
import ProjectItem from './ProjectItem'
import project from '../img/project.png';
import project1 from '../img/project1.png';
import project3 from '../img/project3.png';
import project2 from '../img/project2.png';


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
<h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projekte</h1>
<p className='text-center py-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur ipsa reprehenderit quas molestiae perspiciatis quod id, consequuntur vero modi architecto fugiat. 
Mollitia repellat quam, eos cupiditate ipsum corporis dolorum?
</p>
<div className='grid sm:grid-cols-2 gap-12'>
  <ProjectItem img={project} title='Abschlussprojekt des Bootcamps' />
  <ProjectItem img={project3} title='SpaceWars Python-Minispiel' />
  <ProjectItem img={project1} title='Mein funktionaler Online-Shop' />
  <ProjectItem img={project2} title='Demnächst...' />
</div>
    </div>
  )
}

export default Projects
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
<p className='text-center py-8 '>Willkommen im Projektbereich meines Portfolios, wo Innovation auf Technologie trifft! Ich hatte das Vergnügen, an einer Vielzahl von Projekten zu arbeiten, die meine Kompetenz im Umgang mit Spitzentechnologien unter Beweis stellen.

ReactJS- und NodeJS-Anwendungen:
Tauchen Sie durch meine ReactJS- und NodeJS-Projekte in die dynamische Welt der Webentwicklung ein. Ich habe reaktionsfähige und benutzerfreundliche Anwendungen erstellt, die die Leistungsfähigkeit der komponentenbasierten Architektur von React und NodeJS für eine effiziente serverseitige Entwicklung nutzen. Diese Projekte spiegeln mein Engagement für die Schaffung nahtloser und interaktiver Web-Erlebnisse wider.
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
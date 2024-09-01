'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: 'Modern Next.js Portfolio Website',
    description:
      'Developed a responsive and dynamic personal portfolio website using Next.js. Implemented modern design principles, including animations with Framer Motion and SVG image integration.',
    image: '/images/projects/myportfolio.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Sakshi-Jagtap1804/TaskTrackr/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'WeatherSphere-LIVE',
    description:
      'Developed a dynamic weather application using React.js, leveraging the OpenWeatherMap API for real-time data retrieval and display',
    image: '/images/projects/LIVEWeatherApp.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Sakshi-Jagtap1804/WeatherSphere-LIVE',
    previewUrl: 'https://weather-sphere-live.vercel.app/',
  },
  {
    id: 3,
    title: 'TaskTrackr Application',
    description:
      'Developed a task management application using React.js, enabling efficient task tracking and organization',
    image: '/images/projects/TaskTrackr.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Sakshi-Jagtap1804/TaskTrackr/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Finance Management Advisor',
    description:
      'Developed a Finance Management Advisor website offering free investment planning resources across various financial fields, utilizing HTML, CSS, and JavaScript, Node.js, Express and MongoDB',
    image: '/images/projects/FinanceAdvisor.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Sakshi-Jagtap1804/FINANCE-MANAGEMENT-ADVISOR/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Interactive Online Sales Dashboard using Power BI',
    description:
      'Created an interactive online sales dashboard using Microsoft Power BI to visualize and analyze sales data',
    image: '/images/projects/PowerBIproject.png',
    tag: ['All', 'Others'],
    gitUrl: '/',
    previewUrl: '/',
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === 'Others'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection

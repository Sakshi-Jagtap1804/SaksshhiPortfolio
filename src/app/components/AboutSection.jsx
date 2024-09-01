'use client'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Object Oriented Programming (OOPs)</li>
        <li>Database Management Systems (DBMS)</li>
        <li>Operating Systems (OS)</li>
        <li>Compuer Networks (CN)</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.E. : Pune Institute of Computer Technology (PICT-2024 Passout),
          Pune, India
        </li>
        <br></br>
        <li>HSC : N.M.V. Girls J.R. College (2020), Pune, India</li>
        <br></br>
        <li>SSC : B.V.B. (2018) Bhigwan, Pune, India</li>
        <br></br>
        <li>Fullstack Academy of Code</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://drive.google.com/file/d/1TDLOMhrP4_XRSU5Efo8hakvvRsGvwOWA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skill Nation CERTIFICATE OF COMPLETION
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1HwE4Q8mW4xOALkf2-HAOJ8YJ3YtxLbyt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Structures and Object Oriented Programming with C++
          </a>
        </li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MongoDB, SQL,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

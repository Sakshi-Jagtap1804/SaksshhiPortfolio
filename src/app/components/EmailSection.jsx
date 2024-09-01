'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import TwitterIcon from '../../../public/twitter-icon.svg'

const EmailSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xrbzdzkb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        form.reset()
      } else {
        setStatus('Failed to send message.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('An error occurred sending the message.')
    }
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {' '}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Sakshi-Jagtap1804/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/saksshhi-jagtap-70650920b/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://x.com/Saksshhi_Jagtap/">
            <Image src={TwitterIcon} alt="Twitter Icon" />
          </Link>
        </div>
        <br />
        <div className="socials flex flex-row gap-2">
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">
              <span>Email: </span>
              sakshijagtap222@gmail.com
            </span>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">
              <span>Contact No.: </span>
              +91 9373212107
            </span>
          </p>
        </div>
      </div>
      <div>
        <h2>Contack Form</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="email"
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Saksshhi Jagtap"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="sakshijagtap222@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  )
}

export default EmailSection

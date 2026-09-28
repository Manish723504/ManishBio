import "./App.css";
import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code2,
  GraduationCap,
  Briefcase,
  ArrowDown,
} from "lucide-react";
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
  "Java",
  "C / C++",
  "AWS",
];

const projects = [
  {
    title: "AgroFresh",
    category: "MERN Stack",
    description:
      "A platform that connects farmers directly with customers. Farmers can list products while customers can browse products and contact farmers.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
  },
  {
    title: "Sales & Invoice Management",
    category: "React Application",
    description:
      "A sales management application with product management, customer management, sales orders, invoices, payment tracking and local storage.",
    tech: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    github: "#",
  },
  {
    title: "Real-Time Chat Application",
    category: "Full Stack",
    description:
      "A real-time messaging application with authentication, online users and instant message communication using Socket.io.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
  },
];

const journey = [
  {
    year: "On Going",
    title: "Started Web Development Journey",
    description:
      "Focused on HTML, CSS, JavaScript, React.js and modern responsive web development.",
    icon: Code2,
  },

  {
    year: "2026",
    title: "B.Tech in Computer Science",
    description:
      "Completed B.Tech in Computer Science and continued building projects and preparing for software development opportunities.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Full Stack Projects",
    description:
      "Worked on practical projects using React, Node.js, Express, MongoDB and REST APIs.",
    icon: Briefcase,
  },
  {
    year: "2023",
    title: "Diploma in Computer Science",
    description:
      "Completed Diploma in Computer Science from Shri Ram Swaroop Memorial University, Lucknow.",
    icon: GraduationCap,
  },
  {
    year: "2019",
    title: "Class 12th  Senior Secondary",
    description:
      "Completed Class 12th  Senior Secondary from Ram Kumar Vikram Singh Inter College, Basti.",
    icon: GraduationCap,
  },
  {
    year: "2017",
    title: "Class 10th High School",
    description:
      "Completed Class 10th  Senior Secondary from Ram Kumar Vikram Singh Inter College, Basti.",
    icon: GraduationCap,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold">
            Manish<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a
              href="#about"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              About
            </a>
            <a
              href="#journey"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              Journey
            </a>
            <a
              href="#skills"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden px-6 pt-20"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/man.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        {/* Cyan Glow */}
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Welcome to my website
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Hi, I'm
              <span className="block text-cyan-400">Manish Mishra</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              B.Tech Computer Science graduate and aspiring Software Developer
              passionate about creating modern, responsive and user-friendly web
              applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/30 bg-black/20 px-7 py-3 font-semibold backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex gap-5">
              <a
                href="mailto:officalmanish0032@gmail.com"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-5 rounded-3xl bg-cyan-400/20 blur-2xl" />

              <div className="relative w-72 rounded-3xl border border-white/20 bg-black/30 p-8 shadow-2xl backdrop-blur-md sm:w-80">
                {/* Profile Image */}
                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/20">
                  <img
                    src="/manish.jpeg"
                    alt="Manish Mishra"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-7 text-center">
                  <h2 className="text-2xl font-bold">Software Developer</h2>

                  <p className="mt-2 text-slate-300">
                    React • JavaScript • Node.js
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-center gap-2 text-sm text-slate-300">
                  <MapPin size={16} className="text-cyan-400" />
                  Lucknow, Uttar Pradesh
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-300 transition hover:text-cyan-400"
        >
          <ArrowDown className="animate-bounce" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <div className="mt-5 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">
                Building my career through{" "}
                <span className="text-cyan-400">technology.</span>
              </h2>
            </div>

            <div className="space-y-5 text-slate-300 leading-8">
              <p>
                I am a Computer Science graduate interested in software and web
                development. I enjoy turning ideas into functional and
                responsive applications.
              </p>

              <p>
                My primary focus is frontend development with React.js, while I
                also have experience working with Node.js, Express.js, MongoDB
                and REST APIs.
              </p>

              <p>
                I am continuously learning new technologies and looking for
                opportunities where I can contribute, learn and grow as a
                software developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="bg-slate-900/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              My History
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              My <span className="text-cyan-400">Journey</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              A timeline of my education, learning and development journey.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-5 top-0 h-full w-px bg-cyan-400/20 md:left-1/2" />

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  className={`relative mb-12 flex ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="ml-14 w-full md:ml-0 md:w-[45%]">
                    <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-cyan-400/40">
                      <span className="text-sm font-bold text-cyan-400">
                        {item.year}
                      </span>

                      <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 text-cyan-400 md:left-1/2 md:-translate-x-1/2">
                    <Icon size={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technologies
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              My <span className="text-cyan-400">Skills</span>
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-900/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              My Work
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-cyan-400">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  </div>

                  <a
                    href={project.github}
                    className="text-slate-500 transition hover:text-cyan-400"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-10 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm text-cyan-400">MY RESUME</p>
            <h2 className="mt-2 text-3xl font-bold">
              Interested in my professional profile?
            </h2>
            <p className="mt-2 text-slate-400">
              Download my latest resume to know more about me.
            </p>
          </div>

          <a
            href="/Resumemanish.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            I'm open to software development opportunities, internships and
            projects. Feel free to get in touch.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 text-slate-300 sm:flex-row">
            <a
              href="mailto:yourmail@example.com"
              className="flex items-center gap-2 transition hover:text-cyan-400"
            >
              <Mail size={19} />
              officalmanish0032@gmail.com
            </a>

            <a
              href="tel:+917235040032"
              className="flex items-center gap-2 transition hover:text-cyan-400"
            >
              <Phone size={19} />
              +91 7235040032
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Manish Mishra. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

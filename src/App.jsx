import React from "react";
import emailjs from "emailjs-com";
import {
  FaBars,
  FaTimes,
  FaGlobe,
  FaBriefcase,
  FaLaptopCode,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";
import { useState } from "react";
import profile from "./assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
export default function App() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill all fields ❗");
      return;
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => alert("Message Sent 🎉"))
      .catch(() => alert("Failed ❌"));

    setContactForm({
      name: "",
      email: "",
      message: "",
    });
  };
  const projects = [
    {
      title: "Personal Portfolio Website",
      icon: <FaGlobe className="text-6xl text-cyan-400" />,
      desc: "Responsive developer portfolio showcasing skills, projects and contact system.",
      github: "https://github.com/Navya-Potula/FUTURE_FS_01",
      live: "https://future-fs-01-amber.vercel.app/"
    },
    {
      title: "MultiViewer UI Project",
      icon: <FaBriefcase className="text-6xl text-cyan-400" />,
      desc: "Full-stack CRM system with login, orders, bookings and customer management.",
      github: "https://github.com/saikeerthanabramhadandi/frontendUIdemo.git",
      live: "https://frontenduidemo.vercel.app/?view=kanban"
    },
    {
      title: "Deloitte Task",
      icon: <FaLaptopCode className="text-6xl text-cyan-400" />,
      desc: "Professional website for real business with booking and customer interaction features.",
      github: "https://github.com/saikeerthanabramhadandi/Deloitte-task.git",
      live: ""
    }
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Express.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Git",
    "GitHub",
    "Responsive Design",
    "Java",
    "Python",
    "C",
    "DSA",
    "MySQL",
  ];

  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 bg-[#050816]/90 backdrop-blur-md z-50 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">Saikeerthana Brahmadandi</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer text-cyan-400">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-[#0b1220] flex flex-col items-center gap-6 py-6 text-lg border-b border-gray-800 z-40">

          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>
      )}

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 relative pt-20">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500 blur-[150px] opacity-20 rounded-full top-10"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I'm <span className="text-cyan-400">Saikeerthana</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Frontend Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-cyan-400 font-semibold mt-6 block"
        />

        <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-3xl leading-relaxed">
          Passionate about creating responsive, modern and user-friendly web applications with clean UI and interactive experiences.
        </p>
        <div className="flex gap-5 mt-10 flex-wrap justify-center relative z-10">
          <a href="#projects"
            className="bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition duration-300">
            View Projects
          </a>
          <a
            href="sai Resume.pdf"
            download
            className="border border-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50"
          >
            Download Resume
          </a>
        </div>
        <img
          src={profile}
          alt="profile"
          className="w-52 h-52 rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40 mt-10 object-cover hover:scale-105 transition duration-500"
        />

        <div className="mt-20 animate-bounce text-cyan-400 text-3xl">
          ↓
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            I am a passionate Full Stack Web Developer who enjoys creating
            responsive, user-friendly and visually appealing web applications.
            I love learning modern technologies and building real-world projects
            that improve problem-solving and development skills.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            Skilled in React, JavaScript, MongoDB and modern web technologies,
            with a strong focus on clean design and interactive user experiences.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px] rounded-3xl shadow-2xl shadow-cyan-500/20">
          <div className="bg-[#0b1220] rounded-3xl p-10 h-full">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">2+</h3>
                <p className="text-gray-400 mt-2">Years Learning</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">8+</h3>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
                <p className="text-gray-400 mt-2">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* JOURNEY */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          My Journey
        </h2>

        <div className="relative border-l-4 border-cyan-400 pl-10 space-y-14">

          {/* Item 1 */}
          <div className="relative group">
            <div className="absolute -left-[52px] top-1 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 group-hover:scale-125 transition duration-300"></div>

            <h3 className="text-2xl font-bold">
              2023 — Started Web Development
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Began learning HTML, CSS and JavaScript fundamentals while exploring responsive web design concepts.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative group">
            <div className="absolute -left-[52px] top-1 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 group-hover:scale-125 transition duration-300"></div>

            <h3 className="text-2xl font-bold">
              2024 — Frontend & React Development,Focusing on DSA
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Built interactive frontend applications using React, Tailwind CSS and modern UI development practices.
              Practicing DSA problems on coding platforms
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative group">
            <div className="absolute -left-[52px] top-1 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 group-hover:scale-125 transition duration-300"></div>

            <h3 className="text-2xl font-bold">
              2025 — Full Stack Projects
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Developed full stack projects with authentication, database integration and responsive dashboards.
            </p>
          </div>

          {/* Item 4 */}
          <div className="relative group">
            <div className="absolute -left-[52px] top-1 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 group-hover:scale-125 transition duration-300"></div>

            <h3 className="text-2xl font-bold">
              2026 — Exploring Advanced Development
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Currently improving problem-solving, backend architecture and advanced full stack development skills.
            </p>
          </div>

        </div>
      </section>
      {/* EDUCATION */}
      <section className="py-20 px-6 bg-[#0b1220]">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Education
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* BTech */}
          <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-500">

            <h3 className="text-2xl font-bold text-cyan-400">
              B.Tech
            </h3>

            <p className="text-xl mt-4 font-semibold">
              Computer Science Engineering — SREE CHAITANYA INSTITUTE OF TECHOLOGICAL SCIENCES     </p>

            <p className="text-gray-400 mt-3 leading-7">
              Currently pursuing B.Tech  with strong interest in Full Stack Development and modern web technologies.
              CURRENT CGPA: 8.39
            </p>

            <div className="mt-5 inline-block bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm">
              2023 - 2027
            </div>
          </div>

          {/* intermediate */}
          <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-500">

            <h3 className="text-2xl font-bold text-cyan-400">
              INTERMEDIATE
            </h3>

            <p className="text-xl mt-4 font-semibold">
              +2 in MPC(Mathematics,Physics,Chemistry) — SAHAKARA JUNIOR COLLEGE
            </p>

            <p className="text-gray-400 mt-3 leading-7">
              Successfully completed +2 with 93%
            </p>

            <div className="mt-5 inline-block bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm">
              Completed
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 bg-[#0b1220]">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Skills
        </h2>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-8 py-4 rounded-2xl bg-[#111827] border border-cyan-400/20 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-xl transition duration-300 shadow-lg"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center">
        <a
          href="certificates.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="mt-6 bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 flex items-center gap-2">

            View Certificate

            <FaArrowRight className="text-sm" />

          </button>
        </a>
      </div>

      {/* CODING PROFILES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Coding Profiles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/keerthanaaa__36/"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="bg-[#111827] border border-gray-700 rounded-3xl p-10 text-center hover:border-yellow-400 hover:-translate-y-3 hover:shadow-yellow-500/30 hover:shadow-2xl transition duration-500">

              <SiLeetcode className="text-6xl mx-auto text-yellow-400 group-hover:scale-110 transition duration-300" />

              <h3 className="text-2xl font-bold mt-6">
                LeetCode
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Solving DSA and problem-solving challenges regularly to improve logical thinking and coding skills.
              </p>
            </div>
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/profile/saikeerthana590"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="bg-[#111827] border border-gray-700 rounded-3xl p-10 text-center hover:border-green-400 hover:-translate-y-3 hover:shadow-green-500/30 hover:shadow-2xl transition duration-500">

              <SiHackerrank className="text-6xl mx-auto text-green-400 group-hover:scale-110 transition duration-300" />

              <h3 className="text-2xl font-bold mt-6">
                HackerRank
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Practicing coding challenges and strengthening programming fundamentals across multiple domains.
              </p>
            </div>
          </a>

          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/nifty_hyena_20"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="bg-[#111827] border border-gray-700 rounded-3xl p-10 text-center hover:border-orange-400 hover:-translate-y-3 hover:shadow-orange-500/30 hover:shadow-2xl transition duration-500">

              <SiCodechef className="text-6xl mx-auto text-orange-400 group-hover:scale-110 transition duration-300" />

              <h3 className="text-2xl font-bold mt-6">
                CodeChef
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Participating in coding contests and improving competitive programming and problem-solving abilities.
              </p>
            </div>
          </a>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-700 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-500 shadow-xl"
            >
              <div className="h-52 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                {project.icon}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-7">{project.desc}</p>

                <div className="flex gap-3 mt-6">

                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button className="bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition">
                      Code
                    </button>
                  </a>

                  <a href={project.live} target="_blank" rel="noreferrer">
                    <button className="border border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition">
                      Live
                    </button>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-[#0b1220]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Contact Me
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Let's work together and create something amazing.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">

            {/* Email Card */}
            <a
              href="#contact-form"
              className="group"
            >
              <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-500">

                <FaEnvelope className="text-5xl text-cyan-400 mx-auto group-hover:scale-110 transition duration-300" />

                <h3 className="text-2xl font-bold mt-5">
                  Email
                </h3>

                <p className="text-gray-400 mt-3 break-all">
                  saikeerthana590@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/saikeerthanabramhadandi"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-500">

                <FaGithub className="text-5xl text-cyan-400 mx-auto group-hover:scale-110 transition duration-300" />

                <h3 className="text-2xl font-bold mt-5">
                  GitHub
                </h3>

                <p className="text-gray-400 mt-3">
                  View My Projects
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/sai-keerthana-brahmadandi-976477356/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-500">

                <FaLinkedin className="text-5xl text-cyan-400 mx-auto group-hover:scale-110 transition duration-300" />

                <h3 className="text-2xl font-bold mt-5">
                  LinkedIn
                </h3>

                <p className="text-gray-400 mt-3">
                  Connect With Me
                </p>
              </div>
            </a>

          </div>

          <form
            id="contact-form"
            className="grid gap-6"
            onSubmit={handleContactSubmit}
          >
            <input
              type="text"
              name="name"
              required
              value={contactForm.name}
              onChange={handleContactChange}
              placeholder="Your Name"
              className="bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
            />

            <input
              type="email"
              name="email"
              required
              value={contactForm.email}
              onChange={handleContactChange}
              placeholder="Your Email"
              className="bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
            />
            <textarea
              rows="6"
              name="message"
              required
              value={contactForm.message}
              onChange={handleContactChange}
              placeholder="Your Message"
              className="bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300 resize-none"
            />

            <button
              type="submit"
              className="bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        Built with React & Tailwind CSS • © 2026 saikeerthana Portfolio
      </footer>
    </div>
  );
}

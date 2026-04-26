"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Experiences ordered from oldest to newest (will be reversed for display)
const experiences = [
  {
    id: 1,
    startDate: "Jan 2019",
    endDate: "Present",
    company: "Opportunities Sharing Website",
    position: "Full‑Stack Developer",
    type: "Personal Project",
    location: "Remote",
    description:
      "Developed a comprehensive web application for sharing and discovering opportunities (internships, scholarships, events). Built backend with Laravel, frontend with Bootstrap/CSS/React, and managed MySQL database. Created wireframes in Figma, deployed on a web server, and used Git for version control.",
    skills: ["Laravel", "Bootstrap", "CSS", "JavaScript", "React.js", "TypeScript", "Tailwind CSS", "Figma", "MySQL", "Git", "CI/CD"],
  },
  {
    id: 2,
    startDate: "Dec 2023",
    endDate: "Nov 2024",
    company: "Seshar Innovation",
    position: "Full‑Stack Developer",
    type: "Full‑time",
    location: "Nepal",
    description:
      "Enhanced the CIMS system (CodeIgniter) by fixing bugs and adding features: email notifications, case referral system, reminders, password recovery. Developed an order management system for Magnus Pharma (Laravel) with quarterly target reports, daily call reports, and product modules. Also built a Learning Management System using Bootstrap, React (Axios), and Zustand for state management.",
    skills: ["CodeIgniter", "Laravel", "PHP", "MySQL", "Bootstrap", "React.js", "Axios", "Zustand", "JavaScript"],
  },
  {
    id: 3,
    startDate: "Feb 2025",
    endDate: "Present",
    company: "Midas Health Services",
    position: "Full‑Stack Developer",
    type: "Full‑time",
    location: "Nepal",
    description:
      "Debugged and resolved issues in the hospital management system to improve performance and stability. Optimized database queries and views for faster load times. Developed new client features using Laravel and CodeIgniter.",
    skills: ["Laravel", "CodeIgniter", "PHP", "MySQL", "Debugging", "Performance Optimization"],
  },
  {
    id: 4,
    startDate: "Apr 2025",       // adjust if you have a specific start month
    endDate: "Present",
    company: "Changunarayan Foundation",
    position: "IT Officer",
    type: "Full‑time",
    location: "Nepal",
    description:
      "Overseeing IT infrastructure, managing systems, and providing technical support. (Add your specific responsibilities here.)",
    skills: ["IT Management", "Technical Support", "Network Administration", "System Maintenance"],
  },
];

// No need to manually reverse – the component below will do it for display
// The original code used experiences.reverse() so we keep that behaviour.

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr variant="long" />
        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          Professional Experience
        </motion.h1>
      </div>
    </div>
  );
}

function TimelineCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`flex ps-10 md:ps-0 ${
        isEven
          ? "md:justify-center md:translate-x-68"
          : "md:justify-center md:-translate-x-68"
      } justify-center mb-4`}
    >
      <div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-sm font-bold">{experience.startDate}</div>
            <div className="text-xs text-gray-300">Start</div>
          </div>
          <div className="w-px h-8 bg-gray-500"></div>
          <div className="text-center">
            <div className="text-sm font-bold">{experience.endDate}</div>
            <div className="text-xs text-gray-300">End</div>
          </div>
          <div className="w-px h-8 bg-gray-500"></div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400">{experience.location}</div>
            <div className="text-xs text-gray-300">Location</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative group ${
        isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
      } md:w-1/2`}
    >
      <div
        className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg 
        hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0`}
      >
        <div className="mb-4">
          <h3 className="font-bold text-xl text-black mb-1">{experience.company}</h3>
          <h4 className="font-medium text-lg text-gray-700">
            {experience.position}
            <span className="text-sm font-normal text-gray-500 ml-2">• {experience.type}</span>
          </h4>
        </div>
        <p className="text-gray-600 text-justify leading-relaxed mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="mx-auto container px-6 py-10">
      <div className="flex justify-center items-center flex-col">{children}</div>
    </div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  // Reverse to show newest first
  const reversedExperiences = [...experiences].reverse();
  const displayedExperiences = showAll ? reversedExperiences : reversedExperiences.slice(0, 3);

  return (
    <>
      <Title />
      <Wrapper>
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>

          <div className="space-y-12 md:space-y-16 relative">
            <AnimatePresence>
              {displayedExperiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  <TimelineCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />
                  <div
                    className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
                    md:left-1/2 md:-translate-x-1/2 md:top-4
                    left-0 -translate-x-1/2 top-5`}
                  />
                  <ExperienceCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Expand/Collapse button */}
          {reversedExperiences.length > 3 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    Show Less
                    <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                ) : (
                  <>
                    View More Experience
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </motion.div>
          )}

          {/* Gradient fade effect */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
          )}
        </div>
      </Wrapper>
    </>
  );
}
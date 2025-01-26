import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "The Coding School",
      period: "Sep 2024 - Present",
      positions: [
        {
          title: "Teacher Assistant - Part Time",
          description: [
            "I lead weekly 1-hour quantum computing labs for 30+ students in the year-long Qubit by Qubit course, where I guide students in understanding Python and Cirq to build and analyze quantum circuits and algorithms.",
          ],
        },
      ],
    },
    {
      company: "European Organization for Nuclear Research (CERN)",
      period: "Jun 2024 - Jan 2025",
      positions: [
        {
          title: "Undergraduate Researcher",
          description: [
            "I participated at the CERN OpenLab summer program in a project under the supervision of Carla Rieger and Dr. Michele Grossi.",
            "During this progam, I researched simulations for quantum circuits using the Intel Quantum Simulator in collaboration with Intel Labs under the supervision of Dr. Gian Giacomo Guerreschi.",
            "I worked on benchmarking two different version of the simulator in terms of computational time performance.",
          ],
        },
      ],
    },
    {
      company: "The American University in Cairo",
      period: "Jan 2021 - Dec 2024",
      positions: [
        {
          title: "Undergraduate Student and Researcher",
          description: [
            "I just graduated with a double major in computer science and mathematics, with highest honors 'summa cum laude'.",
            "I have conducted 2 thesis projects for my computer science and mathematics majors, where the computer science project being about optimizing LLMs for speech interaction and the mathematics project being about the Hidden Subgroup Problem and the quantum background for it.",
            "During university, I attended 2 graduate-level courses where I learned more about how to conduct research and worked on different research projects.",
            "Regarding research, I worked with Dr. Nouri Sakr on 2 projects working on building combinatorial optimization algorithms.",
            "I also worked as a teaching assistant and peer tutor for the computer science courses, conducting 150+ hours of sessions with students over the span of 2 years.",
          ],
        },
      ],
    },
    {
      company: "Siemens EDA",
      period: "Feb 2024 - May 2024",
      positions: [
        {
          title: "Software Engineer Intern",
          description: [
            "I designed React and Tailwind-based frontend tools, while implementing websocket communication with the C++ backend.",
            "I also analysed the scalability of this tool and the potential for future development.",
          ],
        },
      ],
    },
    {
      company: "École polytechnique fédérale de Lausanne (EPFL)",
      period: "Jun 2023 - Aug 2023",
      positions: [
        {
          title: "Undergraduate Researcher",
          description: [
            "I participated at the Summer@EPFL research program where I researched Compressed Quantum Permutation Oracles under the supervision of Dr. Ritam Baumik.",
            "The project required reading some research papers about post-quantum cryptography, specifically compressed random oracles.",
            "At the end of the program, I presented our research project and documented the work and proofs conducted.",
          ],
        },
      ],
    },
    {
      company: "Dell Technologies",
      period: "Mar 2022 - Nov 2023",
      positions: [
        {
          title: "Software Engineer Intern",
          description: [
            "I worked on multiple projects and engaged with different web technologies like React, TypeScript, and GoLang.",
            "In one of the project, I developed and enhanced custom data visualization charts in React with the VisX library that is built over D3.",
            "Also, I built and deployed serverless cloud functions using Openshift, Knative, and some bash Automation.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/profile_pic.png",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[2fr,0fr,4fr] gap-6 py-12 first:pt-0 last:pb-0"
              >
                <div>
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div key={`${experience.company}-${index}`} className="space-y-4">
                      <h4 className="text-lg font-semibold">{position.title}</h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-[calc(28%_-_1rem)] top-0 h-full">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

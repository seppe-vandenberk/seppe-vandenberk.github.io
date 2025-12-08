import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function Education() {
  return (
    <DefaultLayout>
      <section
        aria-labelledby="education-title"
        className="flex flex-col items-center justify-center gap-8 py-8 md:py-10"
      >
        {/* Page title */}
        <header className="max-w-2xl text-center">
          <h1 id="education-title" className={title()}>
            Education
          </h1>
        </header>

        {/* Content */}
        <div className="max-w-3xl w-full flex flex-col gap-8">
          {/* Master */}
          <article className="bg-content1 rounded-2xl p-6 shadow-medium">
            <h2 className="text-xl font-semibold text-default-900">
              Master of Science in Software Systems Engineering Technology
            </h2>
            <p className="text-default-600">
              Hasselt University & KU Leuven — Joint Programme
            </p>
            <p className="text-default-500 mt-1">Sep 2024 – Sep 2025</p>
            <p className="text-default-700 mt-4 text-justify">
              A one-year master’s programme jointly organized by Hasselt University
              and KU Leuven. The programme consisted of two semesters: one semester
              I spent abroad at Tampere University (Finland), during the second semester I focused on the
              completion of my master’s thesis, alongside coursework in functional
              programming and systems thinking. The latter emphasized understanding
              the full lifecycle of software systems, from initial concept and design
              to implementation and real-world deployment.
            </p>
          </article>

          {/* Erasmus */}
          <article className="bg-content1 rounded-2xl p-6 shadow-medium">
            <h2 className="text-xl font-semibold text-default-900">
              Erasmus Exchange Programme – Software Engineering Technology
            </h2>
            <p className="text-default-600">Tampere University, Finland</p>
            <p className="text-default-500 mt-1">Aug 2024 – Dec 2024</p>
            <p className="text-default-700 mt-4 text-justify">
              One-semester exchange as part of the master's programme, continuing
              coursework while gaining international experience. Alongside
              academic studies, I actively contributed to the student community
              by serving as an INTO Exchange Student Officer, strengthening my
              communication and teamwork skills.
            </p>
          </article>

          {/* Summer School */}
          <article className="bg-content1 rounded-2xl p-6 shadow-medium">
            <h2 className="text-xl font-semibold text-default-900">
              Summer School: Enabling Technologies for Industrial Internet of Things
            </h2>
            <p className="text-default-600">Università di Pisa, Italy</p>
            <p className="text-default-500 mt-1">Jul 2024</p>
            <p className="text-default-700 mt-4 text-justify">
              An intensive summer school focused on how modern IoT technologies can be implemented for
              various industrial applications, including embedded systems, communication
              technologies, hardware-software integration, and industrial
              applications. The programme
              concluded with a written paper exploring how IoT technologies can be
              integrated within a concrete use case, where I examined the use of IoT
              for real-time vehicle location tracking and telemetry transmission
              during a rally event. 
            </p>
          </article>

          {/* Bachelor */}
          <article className="bg-content1 rounded-2xl p-6 shadow-medium">
            <h2 className="text-xl font-semibold text-default-900">
              Bachelor of Engineering in Computer Engineering
            </h2>
            <p className="text-default-600">
              Hasselt University & KU Leuven — Joint Programme
            </p>
            <p className="text-default-500 mt-1">Sep 2021 – Sep 2024</p>
            <p className="text-default-700 mt-4 text-justify">
              A jointly delivered bachelor’s programme structured over three years.
              The first one and a half years provided a broad engineering foundation,
              covering diverse disciplines such as chemical, mechanical, and
              electrical engineering. The latter half of the programme focused
              primarily on software engineering, complemented by elements of
              electrical engineering, enabling a gradual
              specialization while maintaining a strong multidisciplinary mindset.
            </p>
          </article>

          
        </div>
      </section>
    </DefaultLayout>
  );
}

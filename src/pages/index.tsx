import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

export default function IndexPage() {
  // Define your previews here (short blurbs)
  const sections = [
    {
      title: "Education",
      description:
        "Explore my academic background, degrees, and research training.",
      path: "/education",
    },
    {
      title: "Teaching",
      description:
        "A look at the courses I teach and the learning experiences I offer.",
      path: "/teaching",
    },
    // {
    //   title: "Portfolio",
    //   description:
    //     "A collection of creative, technical, and research projects I’ve worked on.",
    //   path: "/portfolio",
    // },
    {
      title: "Publications",
      description:
        "Peer-reviewed papers, articles, and conference proceedings.",
      path: "/publications",
    },
    {
      title: "Thesis Advising",
      description:
        "Guidance and mentorship provided to graduate and undergraduate theses.",
      path: "/thesis-advising",
    },
    {
      title: "Presentations",
      description:
        "Talks, invited lectures, and conference presentations.",
      path: "/presentations",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-10">
        <section
          id="about-me"
          className="max-w-3xl mx-auto p-6 rounded-2xl bg-content1 shadow-medium"
        >
          <div className="flex items-start gap-6">
            <img
              src="./headshot.jpg"
              alt="Seppe Vandenberk"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                Seppe Vandenberk
                <a href="mailto:seppe.vandenberk@uhasselt.be" title="Email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                <a href={siteConfig.links.linkedIn} title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="text-default-500" />
                </a>
                <a href={siteConfig.links.github} title="GitHub" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="text-default-500" />
                </a>
              </h2>
  
              <p className="text-default-600 font-medium mb-2">PhD Student</p>
              <p className="text-default-700 mb-2">
                <a href="https://www.uhasselt.be/en/instituten-en/expertise-centre-for-digital-media/research/intelligible-interactive-systems">
                  Intelligible Interactive Systems
                </a>{" "}
                |{" "}
                <a href="https://www.uhasselt.be/en/instituten-en/digitalfuturelab">
                  Digital Future Lab
                </a>{" "}
                |{" "}
                <a href="https://www.uhasselt.be/en/research">Hasselt University</a>
              </p>
              <p className="text-default-700 mb-2">
                I am a PhD student in Software Engineering Technology, researching how artificial intelligence can be combined with digital twins to meaningfully integrate technology mediated innovations into education. My work focuses particularly on engineering laboratories, aligning with Education 4.0 principles such as personalized learning, hands-on experiences, and data-driven feedback. By bridging AI and digital twins, I aim to make learning environments more adaptive, interactive, and closely connected to real-world engineering practice.
              </p>
              <p className="text-default-700">
                When I’m not working behind my computer, you’ll likely find me around rally cars or at a the car slalom, where I myself compete. If I am not there, I am probably somewhere abroad exploring new places and meeting new people. Whether it’s engineering systems or cars, I enjoy understanding how things work by experiencing them firsthand.
              </p>
              <div className="mt-4 flex gap-4 text-gray-600">
                
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {sections.map((section) => (
            <Card key={section.path} className="p-4 shadow-md rounded-2xl">
              <CardHeader>
                <h2 className="text-lg font-semibold">{section.title}</h2>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-600">{section.description}</p>
              </CardBody>
              <CardFooter className="pt-2">
                <Link
                  to={section.path}
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    color: "primary",
                  })}
                >
                  More →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );

}

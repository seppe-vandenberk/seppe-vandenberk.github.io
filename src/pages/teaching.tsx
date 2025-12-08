import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function Teaching() {
  return (
        <DefaultLayout>
          <section
            aria-labelledby="teaching-title"
            className="flex flex-col items-center justify-center gap-8 py-8 md:py-10"
          >
            {/* Page title */}
            <header className="max-w-2xl text-center">
              <h1 id="teaching-title" className={title()}>
                Teaching
              </h1>
            </header>
    
            {/* Content */}
            <div className="max-w-3xl w-full flex flex-col gap-8">
              {/* ALDA */}
              <article className="bg-content1 rounded-2xl p-6 shadow-medium">
                <h2 className="text-xl font-semibold text-default-900">
                  Algorithms and Data Structures (Algoritmen en datastructuren - 4900)
                </h2>
                <p className="text-default-600">
                  Hasselt University & KU Leuven — Bachelor of Science in Software Systems Engineering Technology
                </p>
                <p className="text-default-500 mt-1">Sep 2025 – Present</p>
                <p className="text-default-700 mt-4 text-justify">
                  This course covers algorithms and data structures in the context of software system development. It builds on the knowledge and skills already acquired in problem-solving, computational thinking, and coding solutions. Thanks to the framework further expanded in this course, students can independently analyze, use, and implement new algorithms and data structures.
                </p>
              </article>
    
              {/* OOP */}
              <article className="bg-content1 rounded-2xl p-6 shadow-medium">
                <h2 className="text-xl font-semibold text-default-900">
                  Object Oriented Programming (Objectgeoriënteerd programmeren - 4488)
                </h2>
                <p className="text-default-600">Hasselt University & KU Leuven — Bachelor of Science in Software Systems Engineering Technology</p>
                <p className="text-default-500 mt-1">Sep 2024 – Present</p>
                <p className="text-default-700 mt-4 text-justify">
                  This course covers a range of concepts and (programming) skills in the context of object-oriented programming and the C++ programming language. It builds on the knowledge and skills already acquired in problem-solving, computational thinking, and coding solutions, specifically the Java and C programming languages. Thanks to the reference framework further expanded and deepened in this course, students can independently learn new object-oriented programming languages ​​and frameworks.
                </p>
              </article>
    
          
    
              
            </div>
          </section>
        </DefaultLayout>
  );
}
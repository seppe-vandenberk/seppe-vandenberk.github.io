import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ThesisAdvising() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Thesis Advising</h1>
          <p className="mt-4 text-default-600 text-justify">
            I am currently involved in supervising bachelor’s and master’s
            thesis projects. As these projects are ongoing, no completed
            theses are available at this time. Updates will be added as
            students complete their work.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
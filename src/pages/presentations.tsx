import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function Presentations() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Presentations</h1>
          <p className="mt-4 text-default-600 text-justify">
            No presentations are available at this time. Updates will be added as new work is presented.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
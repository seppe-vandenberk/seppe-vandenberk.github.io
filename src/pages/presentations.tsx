import { title } from "@/components/primitives";
import { PresentationCard } from "@/components/presentation";
import DefaultLayout from "@/layouts/default";

export default function Presentations() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <h1 className={title()}>Presentations</h1>
          <div className="mt-6">
            <PresentationCard
              abstract=" The overall objective is to identify (based on experience reported by participants) methods, techniques, and tools to support the use and inclusion of AI technologies throughout the engineering lifecycle for interactive systems. A specific focus is on guaranteeing that user-relevant properties such as usability and user experience are accounted for. Contributions are also expected to address system-related properties, such as resilience, dependability, reliability, safety, security or performance. Another focus is on the identification and definition of software architectures supporting this integration in a generic way, ensuring properties such as maintainability and reusability."
              date="30-06-2026"
              event="Fourth Workshop on Engineering Interactive Systems Embedding AI Technologies"
              eventUrl="https://sites.google.com/view/eiseait2026/"
              location="Patras, Greece"
              presenters={["Seppe Vandenberk"]}
              slidesUrl="/pdfs/Reclaiming-Knowledge-Structuring-from-Automation.pdf"
              title="Reclaiming Knowledge Structuring from Automation: Human-AI Co-Engineering of KC Models"
              type="Workshop Presentation"
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

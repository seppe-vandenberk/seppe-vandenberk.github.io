import { title } from "@/components/primitives";
import { ThesisCard } from "@/components/thesis";
import DefaultLayout from "@/layouts/default";

export default function ThesisAdvising() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <h1 className={title()}>Thesis Advising</h1>
          <div className="mt-6 flex flex-col gap-4">
            <ThesisCard
              academicYear="2025-2026"
              coPromoters={["Gustavo Rovelo Ruiz"]}
              faculty="Faculty of Software Systems Engineering Technology"
              promoter="Davy Vanacken"
              status="Completed"
              studentAuthor="Arne Kunnen"
              supervisors={["Jarne Thys", "Seppe Vandenberk"]}
              title="Interactive AR Support Systems"
              type="Bachelor thesis"
            />
            <ThesisCard
              academicYear="2025-2026"
              faculty="Faculty of Software Systems Engineering Technology"
              promoter="Davy Vanacken"
              coPromoters={[ "Eva Geurts", "Gustavo Rovelo Ruiz" ]}
              status="Completed"
              studentAuthor="Thibo De Belie"
              supervisors={["Jarne Thys", "Seppe Vandenberk"]}
              title="AI-Driven Personalization for Context-Aware Interventions in Digital Learning"
              type="Master thesis"
              documentServerUrl="https://documentserver.uhasselt.be"
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

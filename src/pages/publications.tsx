import { title } from "@/components/primitives";
import { PublicationCard } from "@/components/publication";
import DefaultLayout from "@/layouts/default";

export default function Publications() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <h1 className={title()}>Publications</h1>
          <div className="mt-6">
            <PublicationCard
              authors={["Seppe Vandenberk", "Gilles Eerlings", "Gustavo Rovelo Ruiz", "Davy Vanacken"]}
              citationBib={`@inproceedings{
	ReclaimingAutomationVandenberk2026,
	Author = {Seppe VANDENBERK and Gilles EERLINGS and Gustavo ROVELO RUIZ and Davy VANACKEN}, 
	Title = {Reclaiming Knowledge Structuring from Automation: Human-AI Co-Engineering of KC Models},
	Year = {2026},
	month = { July},
	day = {30},
	Abstract = {Adaptive learning environments use knowledge tracing models to estimate learners' acquisition of different skills and concepts. These models rely on mappings between problem items and their associated Knowledge Components (KCs), which are often encoded in a Q-matrix. Consequently, the Q-matrix strongly influences the effectiveness of these learning environments. Existing Q-matrix construction approaches span expert-driven, automated, and human-in-the-loop methods, but typically treat development as a one-directional process. We identified key limitations in static representations and limited traceability in tightly coupled pipelines. As these limitations hinder validation and iterative refinement, we propose a framework for interactive human-AI co-engineering of Q-matrices. This framework enables continuous collaboration between human experts and AI systems, supporting both initial construction and ongoing refinement. It is based on a dynamic graph representation, explicit roles for human and AI contributors, and considers both the KCs and mappings as evolving data. Interactors can rely on probes for inspection, explanation, and simulation for iterative refinement. We argue that this approach enables more consistent, transparent, and controllable Q-matrix engineering.},
	Booktitle = {Engineering Interactive Computing Systems: Workshop on Engineering Interactive Systems Embedding AI Technologies},
	Language = {en},
	Keywords = {Structured Knowledge Modeling; Knowledge Tracing; Human-AI Interaction; Software Engineering; },
}`}
              citationTxt={
                "VANDENBERK, Seppe; EERLINGS, Gilles; ROVELO RUIZ, Gustavo & VANACKEN, Davy (2026) Reclaiming Knowledge Structuring from Automation: Human-AI Co-Engineering of KC Models. In: Engineering Interactive Computing Systems: Workshop on Engineering Interactive Systems Embedding AI Technologies, Patras, Greece, 2026, June 30."
              }
              date="30-06-2026"
              uhasseltUrl="https://documentserver.uhasselt.be/handle/1942/49489"
              title="Reclaiming Knowledge Structuring from Automation: Human-AI Co-Engineering of KC Models"
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

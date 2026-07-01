import { Button } from "@heroui/button";

export type ThesisType = "Bachelor thesis" | "Master thesis";

export type ThesisCardProps = {
  title: string;
  studentAuthor: string;
  type: ThesisType;
  academicYear: string;
  promoter: string;
  coPromoters?: string[] | string;
  supervisors?: string[] | string;
  faculty?: string;
  program?: string;
  status?: string;
  documentServerUrl?: string;
  pdfUrl?: string;
};

function peopleLabel(people?: string[] | string) {
  if (!people) {
    return undefined;
  }

  return Array.isArray(people) ? people.join(", ") : people;
}

function Detail({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <p className="text-sm text-default-600">
      <span className="font-medium text-foreground">{label}:</span> {value}
    </p>
  );
}

export function ThesisCard({
  title,
  studentAuthor,
  type,
  academicYear,
  promoter,
  coPromoters,
  supervisors,
  faculty,
  program,
  status,
  documentServerUrl,
  pdfUrl,
}: ThesisCardProps) {
  const links = [
    { label: "Document Server", href: documentServerUrl },
    { label: "PDF", href: pdfUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="w-full rounded-lg border border-default-200 bg-content1 p-5 text-left shadow-sm">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-default-100 px-2 py-1 text-xs font-medium text-default-600">
            {type}
          </span>
          <p className="text-sm font-medium text-default-500">
            {academicYear}
          </p>
          {status ? (
            <span className="rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary">
              {status}
            </span>
          ) : null}
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold leading-snug text-foreground">
            {title}
          </h2>
          <Detail label="Student author" value={studentAuthor} />
          <Detail label="Promoter" value={promoter} />
          <Detail label="Co-promoter" value={peopleLabel(coPromoters)} />
          <Detail label="Supervisor" value={peopleLabel(supervisors)} />
          <Detail label="Faculty" value={faculty} />
        </div>
      </div>

      {links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {links.map((link) => (
            <Button
              key={link.label}
              as="a"
              href={link.href}
              rel="noreferrer"
              size="sm"
              target={link.href.startsWith("/") ? undefined : "_blank"}
              variant="flat"
            >
              {link.label}
            </Button>
          ))}
        </div>
      ) : null}
    </article>
  );
}

import { Button } from "@heroui/button";

export type PresentationCardProps = {
  title: string;
  presenters: string[] | string;
  date: string;
  event: string;
  type?: string;
  location?: string;
  abstract?: string;
  slidesUrl?: string;
  pdfUrl?: string;
  recordingUrl?: string;
  eventUrl?: string;
};

function peopleLabel(people: string[] | string) {
  return Array.isArray(people) ? people.join(", ") : people;
}

export function PresentationCard({
  title,
  presenters,
  date,
  event,
  type,
  location,
  abstract,
  slidesUrl,
  pdfUrl,
  recordingUrl,
  eventUrl,
}: PresentationCardProps) {
  const links = [
    { label: "Slides", href: slidesUrl },
    { label: "PDF", href: pdfUrl },
    { label: "Recording", href: recordingUrl },
    { label: "Event", href: eventUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="w-full rounded-lg border border-default-200 bg-content1 p-5 text-left shadow-sm">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          {type ? (
            <span className="rounded-md bg-default-100 px-2 py-1 text-xs font-medium text-default-600">
              {type}
            </span>
          ) : null}
          <p className="text-sm font-medium text-default-500">{date}</p>
        </div>

        <h2 className="text-xl font-semibold leading-snug text-foreground">
          {title}
        </h2>
        <p className="text-sm text-default-600">{peopleLabel(presenters)}</p>
        <p className="text-sm text-default-600">
          {event}
          {location ? `, ${location}` : ""}
        </p>
        {abstract ? (
          <p className="pt-2 text-sm leading-6 text-default-600">{abstract}</p>
        ) : null}
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

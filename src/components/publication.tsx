import { Button } from "@heroui/button";

import { peopleWithEmphasizedPersonalName } from "./emphasize-name";

export type PublicationCardProps = {
  title: string;
  authors: string[] | string;
  date: string;
  citationTxt?: string;
  citationBib?: string;
  pdfUrl?: string;
  scholarUrl?: string;
  arxivUrl?: string;
  uhasseltUrl?: string;
};

function authorsLabel(authors: PublicationCardProps["authors"]) {
  return peopleWithEmphasizedPersonalName(authors);
}

function filenameFromTitle(title: string, extension: "bib" | "txt") {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${slug || "publication"}.${extension}`;
}

function citationHref(citation: string) {
  return `data:text/plain;charset=utf-8,${encodeURIComponent(citation)}`;
}

export function PublicationCard({
  title,
  authors,
  date,
  citationTxt,
  citationBib,
  pdfUrl,
  scholarUrl,
  arxivUrl,
  uhasseltUrl,
}: PublicationCardProps) {
  const sourceLinks = [
    { label: "Google Scholar", href: scholarUrl },
    { label: "arXiv", href: arxivUrl },
    { label: "UHasselt", href: uhasseltUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="w-full rounded-lg border border-default-200 bg-content1 p-5 text-left shadow-sm">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold leading-snug text-foreground">
          {title}
        </h2>
        <p className="text-sm text-default-600">{authorsLabel(authors)}</p>
        <p className="text-sm font-medium text-default-500">{date}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">

        {sourceLinks.map((link) => (
          <Button
            key={link.label}
            as="a"
            href={link.href}
            rel="noreferrer"
            size="sm"
            target="_blank"
            variant="flat"
          >
            {link.label}
          </Button>
        ))}

        {citationTxt ? (
          <Button
            as="a"
            download={filenameFromTitle(title, "txt")}
            href={citationHref(citationTxt)}
            size="sm"
            variant="flat"
          >
            Citation TXT
          </Button>
        ) : null}

        {citationBib ? (
          <Button
            as="a"
            download={filenameFromTitle(title, "bib")}
            href={citationHref(citationBib)}
            size="sm"
            variant="flat"
          >
            Citation BibTeX
          </Button>
        ) : null}

        {pdfUrl ? (
          <Button as="a" href={pdfUrl} size="sm" variant="flat">
            PDF
          </Button>
        ) : null}

        
      </div>
    </article>
  );
}

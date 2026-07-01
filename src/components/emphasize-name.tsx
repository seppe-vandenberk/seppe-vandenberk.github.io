import { Fragment, type ReactNode } from "react";

import { peopleLinks } from "@/config/people-links";

const personalName = "Seppe Vandenberk";

function linkedName(name: string): ReactNode {
  const href = peopleLinks[name];
  const className = name === personalName
    ? "font-semibold text-foreground underline decoration-default-400 underline-offset-2 hover:text-primary"
    : "font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary";

  if (!href) {
    return name === personalName ? (
      <strong className="font-semibold text-foreground">{name}</strong>
    ) : (
      name
    );
  }

  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {name}
    </a>
  );
}

export function linkedKnownNames(text: string): ReactNode {
  const names = Array.from(
    new Set([...Object.keys(peopleLinks), personalName]),
  ).sort((first, second) => second.length - first.length);

  if (names.length === 0) {
    return text;
  }

  const pattern = new RegExp(`(${names.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);

  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>{names.includes(part) ? linkedName(part) : part}</Fragment>
  ));
}

export function peopleWithEmphasizedPersonalName(people: string[] | string): ReactNode {
  const peopleList = Array.isArray(people) ? people : [people];

  return peopleList.map((person, index) => (
    <Fragment key={`${person}-${index}`}>
      {index > 0 ? ", " : null}
      {linkedKnownNames(person)}
    </Fragment>
  ));
}

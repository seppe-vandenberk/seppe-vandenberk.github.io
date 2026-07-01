import { Fragment, type ReactNode } from "react";

const personalName = "Seppe Vandenberk";

export function emphasizePersonalName(text: string): ReactNode {
  const parts = text.split(personalName);

  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? (
        <strong className="font-semibold text-foreground">{personalName}</strong>
      ) : null}
    </Fragment>
  ));
}

export function peopleWithEmphasizedPersonalName(people: string[] | string): ReactNode {
  const peopleList = Array.isArray(people) ? people : [people];

  return peopleList.map((person, index) => (
    <Fragment key={`${person}-${index}`}>
      {index > 0 ? ", " : null}
      {emphasizePersonalName(person)}
    </Fragment>
  ));
}

type Mods = Record<string, boolean | number>;

export function classNames(mainClass: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(' ');
}

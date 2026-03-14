const checkRelated = (first: (string | string[])[], second: string[]) => {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length - 1; i += 1) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
};

const splitPath = (path: string) => {
  return path.split('.');
};

const combineRelated = (first: (string | string[])[], second: string[]) => {
  const lastIndex = first.length - 1;
  const lastOfFirst = first[lastIndex];
  const lastOfSecond = second[lastIndex];

  if (Array.isArray(lastOfFirst)) {
    lastOfFirst.push(lastOfSecond);
  } else {
    first[lastIndex] = [lastOfFirst, lastOfSecond];
  }
};

const optimizePaths = (paths: string[]): (string | string[])[][] => {
  const sorted = [...paths].sort();
  const [first] = sorted;
  const firstSegments = splitPath(first);
  const result: (string | string[])[][] = [firstSegments];
  let cursor = 0;

  for (let i = 1; i < sorted.length; i += 1) {
    const candidate = sorted[i];

    if (candidate.startsWith(sorted[cursor])) {
      continue;
    }

    cursor = i;

    const last = result[result.length - 1];
    const next = splitPath(candidate);

    if (checkRelated(last, next)) {
      combineRelated(last, next);
    } else {
      result.push(next);
    }
  }

  // return sorted.filter((item, index) => {
  //   if (index === 0 || !item.startsWith(sorted[candidate])) {
  //     candidate = index;
  //     return true;
  //   }
  //
  //   return false;
  // });

  return result;
};

export default optimizePaths;

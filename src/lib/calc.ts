export const timeFormat = (seconds: number): string => {
  const min = Math.floor(seconds / 60);
  const sec = (seconds % 60).toString();
  const secFormat = sec.padStart(2, '0');

  return `${min}:${secFormat}`;
};

export const calcAccuracy = (typed: string, text: string): number => {
  let correct = 0;

  for (let i = 0; i < text.length; i++) {
    if (typed.length == 0) {
      return 100;
    }
    if (typed[i] === text[i]) {
      correct += 1;
    }
  }
  return Math.round((correct / typed.length) * 100);
};

export const calcWpm = (
  typed: string,
  text: string,
  minutes: number
): number => {
  let correct = 0;
  if (minutes <= 0) return 0;
  for (let i = 0; i < text.length; i++) {
    if (typed.length == 0) {
      return 0;
    }
    if (typed[i] === text[i]) {
      correct += 1;
    }
  }

  return Math.round(correct / 5 / minutes);
};

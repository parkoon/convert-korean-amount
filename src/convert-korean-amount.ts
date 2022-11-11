const SPLIT_UNIT = 10000;
const UNIT_WORDS = ["", "만", "억", "조", "경"];

export type Options = {
  wordSpacing?: boolean;
  withWonSuffix?: boolean;
};
const convertKoreanAmount = (
  value: number,
  { wordSpacing = true, withWonSuffix = true }: Options = {}
) => {
  let result = UNIT_WORDS.reduce((prev, curr, i) => {
    let v = Math.floor(
      (value % Math.pow(SPLIT_UNIT, i + 1)) / Math.pow(SPLIT_UNIT, i)
    );

    if (v === 0) return prev;

    return `${v.toLocaleString()}${curr}` + (wordSpacing ? " " : "") + prev;
  }, "");

  const lastSpaceIndex = result.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    result = result.substring(0, lastSpaceIndex);
  }

  if (withWonSuffix) {
    result = result + "원";
  }

  return result;
};

export default convertKoreanAmount;

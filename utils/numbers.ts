export const transformToMetric = (value: number, args: number) => {
  const suffixes = ["K", "M", "B"];

  if (!value) return 0;

  if (Number.isNaN(value)) return null;

  if (value < 1000) return value;

  const exp = Math.floor(Math.log(value) / Math.log(1000));

  const returnValue =
    (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];

  return returnValue;
};

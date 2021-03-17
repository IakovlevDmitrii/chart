const getData = (data, lineName) => {
  const average = data.reduce((sum, elem) => sum + elem[lineName], 0) / data.length;

  const dispersion = data.reduce((sum, elem) => sum + (elem[lineName] - average) ** 2, 0) / data.length;

  const standardDeviation = Math.sqrt(dispersion);

  const lineValues = data.map((elem) => elem[lineName]);
  const maxValue = Math.max.apply(null, lineValues);
  const mimValue = Math.min.apply(null, lineValues);
  const lineHeight = maxValue - mimValue;
  const middleLine = maxValue - average;

  return {
    topLimit: ((middleLine - standardDeviation) / lineHeight) * 100,
    lowerLimit: ((middleLine + standardDeviation) / lineHeight) * 100,
  };
};

export default getData;

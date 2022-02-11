const getData = (data, lineName) => {
  // Сумма элементов data
  const dataElementsSum = data.reduce((sum, elem) => sum + elem[lineName], 0);

  // Среднее значение элементов data
  const average = dataElementsSum / data.length;

  // Вычислим сумму квадратов отклонений элементов data
  const squaredDeviationsSum = data.reduce((sum, elem) => sum + (elem[lineName] - average) ** 2, 0);

  // Среднее арифметическое этих значений называется дисперсией
  const dispersion = squaredDeviationsSum / data.length;

  // Стандартное отклонение равно квадратному корню дисперсии
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

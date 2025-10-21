export const calculateQPIChange = (totalSeconds, remainingSeconds) => {
  const totalMinutes = totalSeconds / 60;
  const remainingMinutes = remainingSeconds / 60;
  const completedMinutes = totalMinutes - remainingMinutes;

  // +0.1 for every minute done, -0.1 for every minute missed
  const gain = completedMinutes * 0.1;
  const loss = remainingMinutes * 0.1;
  const netChange = gain - loss;

  return parseFloat(netChange.toFixed(2));
};
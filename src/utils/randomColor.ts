export const randomBorderColor = () => {
  const colors = [
    "border-blue",
    "border-green",
    "border-orange",
    "border-pink",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const randomTextColor = () => {
  const colors = [
    "text-blue",
    "text-green",
    "text-orange",
    "text-pink",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const randomBgColor = () => {
  const colors = [
    "bg-blue",
    "bg-green",
    "bg-orange",
    "bg-pink",
    "bg-yellow",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

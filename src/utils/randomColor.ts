export const randomBorderColor = () => {
  const colors = [
    "border-blue-700",
    "border-green-600",
    "border-orange-600",
    "border-pink-600",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const randomTextColor = () => {
  const colors = [
    "text-blue-700",
    "text-green-600",
    "text-orange-600",
    "text-pink-600",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const randomBgColor = () => {
  const colors = [
    "bg-blue-700",
    "bg-green-600",
    "bg-orange-600",
    "bg-pink-600",
    "bg-yellow-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

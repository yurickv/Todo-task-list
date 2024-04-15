export const getBgColor = (variant) => {
  switch (variant) {
    case "Done":
      return "#6FCF97";
    case "InProgress":
      return "#F2994A";
    case "Planned":
      return "#EB5757";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

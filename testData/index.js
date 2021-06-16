export const categories = (items) => {
  return Array(items)
    .fill(2)
    .map((_, i) => ({ categoryId: i + 1, categoryName: `Category ${i + 1}` }));
};

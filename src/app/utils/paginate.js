// метод для разбияения на страницы
export const paginate = (users, currentPage, pageSize) => {
  // Получаем индекс с которого будем отрезать массив
  const startIndex = (currentPage - 1) * pageSize;
  // 1. Копируем массив 2. в метод splice передаём старовый индекс и сколько отрезать после него
  return [...users].splice(startIndex, pageSize);
};

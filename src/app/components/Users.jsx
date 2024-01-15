import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./User";
import SearchStatus from "./SearchStatus";
import Pagination from "./Pagination";
import { paginate } from "./../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ handleDelete, users, handleChangeBookmark }) => {
  // По умолчанию всегда отображается первая страница
  const [currentPage, setCurrentPage] = useState(1);

  const count = users.length;
  const pageSize = 4;

  const handlePageChange = (pageIndex) => {
    // Устанаваливам в useState текущую (нажатую) страницу
    setCurrentPage(pageIndex);
  };

  const renderPhrase = (number) => {
    if (number > 4 && number < 15) return "Человек тусанёт";
    const lastNum = Number(number.toString().slice(-1));
    if ([2, 3, 4].includes(lastNum)) return "Человека тусанут";

    return "Человек тусанёт";
  };

  // В этот массив попадёт необходимый список пользователей с обрезанным начало и обрезанным концом
  // users - массив
  // currentPage - текущая страница
  // pageSize - склолько отображать
  // формула (currentPage (3) - 1) * 4 = 8 это стартовый индекс + 4 (pageSize) до какого отрезать
  const userCrop = paginate(users, currentPage, pageSize);

  return (
    <>
      {<SearchStatus users={users} renderPhrase={renderPhrase} />}

      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Закладка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User
                key={user._id}
                user={user}
                handleDelete={handleDelete}
                handleChangeBookmark={handleChangeBookmark}
              />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCounter={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      {/* itemsCounter общее кол-во пользователей - 12 */}
      {/* pageSize количество пользователей на странице - 4 */}
      {/* onPageChange - этот метод отслеживает клик на какую страницу перейти */}
      {/* currentPage - текущая страница */}
    </>
  );
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChangeBookmark: PropTypes.func.isRequired
};
export default Users;

import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance-backend.herokuapp.com/api';

// добавляет транзакции для расходов и доходов
//    {
//       category: "ЗП",
//       operation: "income" или "expense",
//       description: "Моя ЗП"; "Продукты" итп ,
//       value: 250,
//       date:
//   }

export async function addOperation(operation) {
  const { data } = await axios.post(`/transactions/add`, operation);
  return data;
}

// удаляет транзакции для расходов и доходов
export async function deleteOperation(id) {
  const { data } = await axios.delete(`/transactions/${id}`);
  return data;
}

// для компонента сводка прилетает что то в этом стиле:
// [
//   {
//     month: 10,
//     sum: 3550,
//   },
//   {
//     month: 11,
//     sum: -13252.78,
//   },
// ];
//localhost:3001/api/transactions/2021

export async function getSummaryByYear(year) {
  const { data } = await axios.get(`/transactions/${year}`);
  return data;
}

//запасной вариант. прилетает обьект за месяц, отфильтрованный по расход/доход и с суммой елементов:
// [
//   {
//     operation: 'income',
//     sum: 5310,
//     list: [{ item1 }, { item1 }],
//   },
// ];
// [
//   {
//     operation: 'expense',
//     sum: 7530,
//     list: [{ itemNr1 }, { itemNr2 }],
//   },
// ];
//localhost:3001/api/transactions/2021/11

export async function getAllOperationByMonth(year, month) {
  const { data } = await axios.get(`/transactions/${year}/${month}`);
  return data;
}

// БОЕВАЯ ЕДИНИЦА: прилетает обьект за месяц, отфильтрованный по категориям и с суммой елементов
// [
//   {
//     "category": "Продукты",
//     sum: 5310,
//     list: [{ item1 }, { item1 }],
//   },
// ];
// [
//   {
//     category: 'Развлечение',
//     sum: 7530,
//     list: [{ itemNr1 }, { itemNr2 }],
//   },
// ];
//localhost:3001/api/transactions/expense/2021/11
export async function getCategoriesByMonth(operationType, year, month) {
  const { data } = await axios.get(
    `/transactions/${operationType}/${year}/${month}`,
  );
  return data;
}

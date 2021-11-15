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

// фильтрация по расходам или доходам
//    {
//       operation: "income" или "expense",
//   }
export async function operationByType(operation) {
  const { data } = await axios.get(`/transactions/${operation}`);
  return data;
}

// фильтрация по расходам или доходам за указанный год
export async function operationTypeByYear(operationType, year) {
  const { data } = await axios.get(`/${operationType}/${year}`);
  return data;
}

// фильтрация по расходам или доходам за указанный месяц года
export async function operationTypeByMonth(operationType, year, month) {
  const { data } = await axios.get(`/${operationType}/${year}/${month}`);
  return data;
}

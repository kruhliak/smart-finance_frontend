import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance-backend.herokuapp.com/api';

// добавляет транзакции для расходов и доходов
//    {
//       category: "ЗП",
//       operation: "income" или "expense",
//       description: "Моя ЗП"; "Продукты" итп ,
//       value: 250
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
export async function operationType(operation) {
  const { data } = await axios.get(`/transactions/${operation}`);
  return data;
}

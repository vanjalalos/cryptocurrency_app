

import { useQuery } from 'react-query';
import axios from 'axios';


const fetchPrice = async (id: string) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&precision=2`);
  return data;
}

const usePrice = (id: string) => useQuery('getById', () => fetchPrice(id), { retry: 1 });
export default usePrice;
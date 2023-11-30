import { useQuery } from 'react-query';
import axios from 'axios';


const fetchCryptocurrencyById = async (id: string) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return data;
}

//const useCryptocurrencyById = (id: string) => useQuery('getById', () => fetchCryptocurrencyById(id));

const fetchTradingVolume = async (id: string) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=daily&precision=2`);
  return data;
}

// const fetchPrice =async (id:string) => {
//   const {data} = await axios.get (`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&precision=2`);
//   return data;
// }
//const useTradingVolume = (id: string) => useQuery('getById', () => fetchTradingVolume(id));
///xport default useCryptocurrencyById;

const useCryptocurrencyDetail = (id: string) => {
  return useQuery(['cryptocurrencyDetail', id], async () => {
    const [cryptocurrencyData, tradingVolumeData] = await Promise.all([
      fetchCryptocurrencyById(id),
      fetchTradingVolume(id),

    ]);

    return { cryptocurrencyData, tradingVolumeData };
  });
};


export default useCryptocurrencyDetail;
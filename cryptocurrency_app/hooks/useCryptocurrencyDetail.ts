import { useQuery } from 'react-query';
import axios from 'axios';
import { ICryptocurrencyData, ITradingVolumeData } from '../types/types';




const fetchCryptocurrencyById = async (id: string) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return data as ICryptocurrencyData;
}


const fetchTradingVolume = async (id: string) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=daily&precision=2`);
  return data as ITradingVolumeData;
}


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
import axios from 'axios';
import { ICryptocurrencyItem } from '../types/types';

const fetchCryptocurrency = async ({ pageParam = 1 }) => {

    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageParam}&sparkline=false&price_change_percentage=24h%2C7d&locale=en`);
    return data as ICryptocurrencyItem[]
};
export default fetchCryptocurrency;



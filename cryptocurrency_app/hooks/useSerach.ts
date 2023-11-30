import { useQuery } from 'react-query';
import axios from 'axios';


const fetchData = async (searchParam: string) => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/search?query=${searchParam}`);
    return data;
}

const useSearch = (searchParam: string) => useQuery('getById', () => fetchData(searchParam));
export default useSearch;
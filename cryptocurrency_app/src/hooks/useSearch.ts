import axios from 'axios';


const fetchSearchData = async (searchParam: string) => {
    if (searchParam !== "") {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/search?query=${searchParam}`);
        return data;
    }
}

export default fetchSearchData;
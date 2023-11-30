import axios from 'axios';
import { useQuery } from 'react-query';

import { ICryptocurrencyItem } from '../types/types';




  const fetchCryptocurrency = async (page:number) => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h%2C7d&locale=en`);
    return data as ICryptocurrencyItem[];
};

// const useCryptocurrency = (page:number) => useQuery('fetchData', () => fetchCryptocurrency(page));

// const {
//   isLoading,
//   isError,
//   error,
//   data,
//   isFetching,
// } = useQuery(['fetchData', page], () => fetchCryptocurrency(page), { keepPreviousData: true });

//   const fetchCryptocurrencyData = async ({ pageParam = 1 }) => {

//     try {

//         console.log("param", pageParam)
//       const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageParam}&sparkline=false&price_change_percentage=24h%2C7d&locale=en`);

//       return response.data;
//     } catch (error) {
       
//       throw new Error('Failed to fetch cryptocurrency data');
//     }
//   };
//   const computeTotalPages = () => {
//     const itemsPerPage = 10; // Adjust as per your setup
//     return Math.ceil(250 / itemsPerPage);
//   };
//   const {data,
//         fetchNextPage,
//         isLoading,
//         isError,
//         hasNextPage,
//         isFetchingNextPage} = useInfiniteQuery(
//     'cryptos',
//     fetchCryptocurrencyData,
    
//     {
//       getNextPageParam: ( allPages) => {
//           const totalPages = computeTotalPages(); 
//           const nextPage = allPages.length/10 + 1;
//           console.log(allPages.length,'next', nextPage )
//         return nextPage <= totalPages ? nextPage : undefined;
//       },
      
//     },  
//   );


// //   const {
// //     data,
// //     fetchNextPage,
// //     isLoading,
// //     isError,
// //     hasNextPage,
// //     isFetchingNextPage,
// //   } = useInfiniteQuery('cryptocurrencyData', ({ pageParam = 1 }) => fetchCryptocurrencyData(pageParam), {
// //     getNextPageParam: ( allPages) => {
       
// //        return {
// //         pageParam: allPages.length +1
// //     }},
// //   });

//   return {
//     data,
//     fetchNextPage,
//      isLoading,
//    isError,
//     hasNextPage,
//     isFetchingNextPage,
//   };


export default fetchCryptocurrency;

// // import { useQuery } from 'react-query';
// // import axios from 'axios';
// // import { ICryptocurrencyItem } from '../types/types';

// // const fetchCryptocurrency = async (page:number) => {
// //     const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h%2C7d&locale=en`);
// //     return data as ICryptocurrencyItem[];
// // };


// // const useCryptocurrency = (page:number) => useQuery('allData', ()=> fetchCryptocurrency(page));

// // export default useCryptocurrency;

// import axios from 'axios';
// import { useInfiniteQuery } from 'react-query';
// import { ICryptocurrencyItem } from '../types/types';

// const PAGE_SIZE = 10; // Define the number of items per page

// const useCryptocurrency = () => {
// const fetchCryptocurrency = async (page:number) => {
//     const { data } = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h%2C7d&locale=en`);
//     return data ;
// };


//   const {
//     data,
//     fetchNextPage,
//     isLoading,
//     isError,
//     hasNextPage,
//     isFetchingNextPage,
//   } = useInfiniteQuery('cryptocurrencyData', fetchCryptocurrency(), {
//     getNextPageParam: (lastPage) => {
      
//       return lastPage.hasMore ? lastPage.nextPage : undefined;
//     },
//   });

//   const concatenatedData = data ? data.pages.flatMap((page) => page.items) : [];

//   return {
//     data: concatenatedData,
//     fetchNextPage,
//     isLoading,
//     isError,
//     hasNextPage,
//     isFetchingNextPage,
//   };
// };

// export default useCryptocurrency;

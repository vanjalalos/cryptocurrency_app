import convertTimestampToDate from "./convertTimestampToDate";

const transformDataForChart = (originalData) => {
    const formattedData = originalData.prices.map((entry) => ({
      value: entry[1], 
      label: convertTimestampToDate(entry[0]), 
    }));
  
    return formattedData;
  };
  

 export default transformDataForChart;
import { IChartData, ITradingVolumeData } from "../types/types";
import convertTimestampToDate from "./convertTimestampToDate";

const transformDataForChart = (originalData: ITradingVolumeData) => {
  const formattedData = originalData.prices?.map((entry) => ({
    value: entry[1],
    label: convertTimestampToDate(entry[0]),
  }));

  return formattedData as IChartData[];
};


export default transformDataForChart;
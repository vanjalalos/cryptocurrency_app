export interface ICryptocurrencyItem {
  "id": string,
  "symbol": string,
  "name": string,
  "image": string,
  "current_price": number,
  "market_cap": number,
  "market_cap_rank": number,
  "fully_diluted_valuation": number,
  "total_volume": number,
  "high_24h": number,
  "low_24h": number,
  "price_change_24h": number,
  "price_change_percentage_24h": number,
  "market_cap_change_24h": number,
  "market_cap_change_percentage_24h": number,
  "circulating_supply": number,
  "total_supply": number,
  "max_supply": number,
  "ath": number,
  "ath_change_percentage": number,
  "ath_date": Date,
  "atl": number,
  "atl_change_percentage": number,
  "atl_date": Date,
  "roi": {
    "times": number,
    "currency": string,
    "percentage": number
  },
  "last_updated": Date,
  "price_change_percentage_24h_in_currency": number,
  "price_change_percentage_7d_in_currency": number
};

export interface ISearchComponent {
  onSearch: (query: string) => void
  onClear: () => void
}

export interface ISearchScreen {
  api_symbol: string;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
}
export interface ITradingVolumeData {

  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];

};

export interface ICryptocurrencyData {

  name: string;
  image: { thumb: string; small: string; large: string };

  market_data: {
    current_price: {
      usd: number;
      eur: number;
      gbp: number;
    };
    circulating_supply: number;
    market_cap: {
      usd: number;
      eur: number;
      gbp: number;
    };
    ath: { usd: number; eur: number; gbp: number };
    atl: { usd: number; eur: number; gbp: number };
  };

};
export interface IChartData {
  label: string;
  value: number;
}
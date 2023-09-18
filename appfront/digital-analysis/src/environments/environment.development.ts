export const baseUrl: string = `https://localhost:7115`;

export const environment = {
  getNetflixSubscriptionFeeURL: `${baseUrl}/get-netflix-subscription-fee`,
  getCountryNetflixSubscriptionFeeURL: `${baseUrl}/get-netflix-subscription-fee/by-name/`,
  getNetflixStockPricesForYearURL: `${baseUrl}/get-netflix-stock-prices/for-year/`,
  getAllNetflixRevenueQuarterURL: `${baseUrl}/get-netflix-revenue-quarter/all`,
  getAllNetflixRevenueQuarterFormYearURL: `${baseUrl}/get-netflix-revenue-quarter/year`,
  getAllNetflixGlobalRevenueURL: `${baseUrl}/get-all-global-revenue-and-dates`,
  getANetflixTitlesURL: `${baseUrl}/get-netflix-titles`,
};

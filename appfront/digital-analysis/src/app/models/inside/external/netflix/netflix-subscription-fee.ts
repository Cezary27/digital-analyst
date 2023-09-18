export interface NetflixSubscriptionFee {
  id: number;
  countryCode: string;
  country: string;
  totalLibrarySize: number;
  numberOfTVShows: number;
  numberOfMovies: number;
  costPerMonthBasic: number;
  costPerMonthDtandard: number;
  costPerMonthPremium: number;
}

export interface Table {
  pageSize: number;
  page: number;
  lengthOfDataTable?: number;

  sortBy: string;
  sortDirection: string;
}

import { TitleNetflix } from '../table/titles-netflix';

export interface ResponseFromDb {
  items: dataFromDbType[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

export type dataFromDbType = TitleNetflix;

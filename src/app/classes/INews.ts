import { IArticle } from "./IArticle";

export interface INews {
  count: number;
  next: string | null;
  previous: string | null;
  results: IArticle[];
}
export type TimeRange = '24h' | '7d' | '30d' | '90d' | '1y';

export interface DataPoint {
  date: string;
  value: number;
}

export interface NameValuePair {
  name: string;
  value: number;
}
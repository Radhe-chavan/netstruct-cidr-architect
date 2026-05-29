
export type Currency = 'USD' | 'INR';

// General type for displaying results in a list
export interface ResultItem {
  label: string;
  value: string | number;
  isEmphasized?: boolean;
  currencyCode?: Currency;
}

export interface NetworkConfig {
  ipAddress: string;
  cidrPrefix: number;
}

export interface SubnetResult {
  label: string;
  value: string;
  isEmphasized?: boolean;
}

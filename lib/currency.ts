// Fixed USD conversion table for pricing localization.
// Rates are approximate and should be reviewed periodically — not a live feed.
export interface CurrencyInfo {
  code: string;
  locale: string;
  rateFromUsd: number;
}

const CURRENCIES: Record<string, CurrencyInfo> = {
  USD: { code: 'USD', locale: 'en-US', rateFromUsd: 1 },
  INR: { code: 'INR', locale: 'en-IN', rateFromUsd: 83 },
  GBP: { code: 'GBP', locale: 'en-GB', rateFromUsd: 0.79 },
  EUR: { code: 'EUR', locale: 'de-DE', rateFromUsd: 0.92 },
  AED: { code: 'AED', locale: 'en-AE', rateFromUsd: 3.67 },
};

// Countries mapped to a supported currency. Everything else falls back to USD.
const COUNTRY_TO_CURRENCY: Record<string, string> = {
  IN: 'INR',
  GB: 'GBP',
  AE: 'AED',
  // Eurozone
  DE: 'EUR', FR: 'EUR', IT: 'EUR', ES: 'EUR', NL: 'EUR', BE: 'EUR',
  AT: 'EUR', IE: 'EUR', PT: 'EUR', FI: 'EUR', GR: 'EUR', LU: 'EUR',
  SK: 'EUR', SI: 'EUR', CY: 'EUR', MT: 'EUR', EE: 'EUR', LV: 'EUR', LT: 'EUR', HR: 'EUR',
};

export const getCurrencyForCountry = (countryCode?: string | null): CurrencyInfo => {
  const key = countryCode ? COUNTRY_TO_CURRENCY[countryCode.toUpperCase()] : undefined;
  return CURRENCIES[key ?? 'USD'];
};

export const formatPriceInCurrency = (usdAmount: number, currency: CurrencyInfo): string => {
  const converted = usdAmount * currency.rateFromUsd;
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    maximumFractionDigits: 0,
  }).format(converted);
};

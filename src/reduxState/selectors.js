export const selectBaseCurrency = state => state.currency.baseCurrency;

export const selectExchangeInfo = state => state.currency.exchangeInfo;

export const selectLoading = state => state.currency.isLoading;

export const selectError = state => state.currency.isError;

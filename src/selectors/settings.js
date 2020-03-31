export const getResultsPerPage = store =>
  getSettingsStore(store).resultsPerPage;

export const getSettingsStore = store => store.settings;

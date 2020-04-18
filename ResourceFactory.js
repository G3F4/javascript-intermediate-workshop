export default function ResourceFactory() {
  let error = null;
  let data = null;
  let loading = false;


  return {
    startLoading() {
      error = null;
      loading = true;
    },

    isLoading() {
      return loading;
    },

    getData() {
      return data;
    },

    getError() {
      return error;
    },

    stopLoading(loadedData) {
      data = loadedData;
      loading = false;
    },

    handleError(loadingError) {
      loading = false;
      error = loadingError;
    },
  }
}

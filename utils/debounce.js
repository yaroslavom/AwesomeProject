let timeoutId;

export const debounce = (func, delay) => {
  return (...args) => {
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

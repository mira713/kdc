export const getLocal = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    }
    catch (e) {
        return null;
    }
}

export const setLocal = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const setRemove = (key) => {
  return localStorage.removeItem(key);
};
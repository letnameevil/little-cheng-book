/**
 * 本地存储
 **/
const Storage = {
  setItem(key, value) {
    value = JSON.stringify(value);
    window.localStorage.setItem(key, value);
  },
  getItem(key) {
    const dataString = localStorage.getItem(key);
    return JSON.parse(dataString);
  },
  removeItem() {},
  removeAll() {},
};

export default Storage;

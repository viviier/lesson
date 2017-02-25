export const getLocal = (key) => localStorage.getItem('_local' + key)

export const setLocal = (key, value) =>  localStorage.setItem('_local' + key, value)
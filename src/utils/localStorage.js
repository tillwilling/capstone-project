function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key) {
  const jsonString = localStorage.getItem(key)
  return JSON.parse(jsonString)
}

export { setLocalStorage, getLocalStorage }

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key) {
  const jsonString = localStorage.getItem(key)
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.log(error)
  }
}

export { setLocalStorage, getLocalStorage }

const AUTH_TOKEN_KEY = 'AUTH_TOKEN'
const AUTH_DATA_KEY = 'AUTH_DATA'

export function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function saveToken(token) {
  return localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthData() {
  let data
  try {
    data = JSON.parse(localStorage.getItem(AUTH_DATA_KEY))
  } catch (e) {
    // do nothing
    data = null
  }
  return data
}

export function setAuthData(data) {
  return localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(data))
}
export function updateAuthData(key, value) {
  if (!isLoggedIn()) {
    return false
  }
  let data = getAuthData()
  if (data) {
    data = { ...data, [key]: value }
    setAuthData(data)
  }
}

export function clear() {
  localStorage.removeItem(AUTH_DATA_KEY)
  localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function isLoggedIn() {
  const token = getToken()
  const data = getAuthData()
  return Boolean(token) && Boolean(data)
}

export default {
  getToken,
  saveToken,
  getAuthData,
  setAuthData,
  updateAuthData,
  clear,
  isLoggedIn
}

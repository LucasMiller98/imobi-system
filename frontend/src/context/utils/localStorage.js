export const saveUserOnLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}
export const getLocalStorage = () => {
  const json = localStorage.getItem('user')

  if(!json) {
    return null
  }

  const user = JSON.parse(json)

  return user ?? null

}
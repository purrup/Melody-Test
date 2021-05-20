import Axios from 'axios'

// const options = {
  // baseURL: 'https://hn.algolia.com/api/v1/search?query=',
  // headers: {
  //   'Content-Type': 'application/json'
  // },
  // withCredentials: true
// }
const instance = Axios.create()
export default instance

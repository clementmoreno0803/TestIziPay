import axios from "axios";

const apiCall = (query) => {
  return axios.get('https://www.omdbapi.com/?'+query+'&apikey=1914aeda')
  .then(res => {
    return res.data
  })
}
const firebaseUrl = () =>{
  return 'https://izipay-3f2a9-default-rtdb.firebaseio.com/comment.json'
}
  const search = (query) => {
   return apiCall('s='+ query)
 }
 const getByTitle = (Title) => {
   return apiCall('t='+ Title)
 }
export  {firebaseUrl, search, getByTitle}

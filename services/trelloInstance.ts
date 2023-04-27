import axios from "axios";

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')
  }
}

const instance =  axios.create({
  baseURL: 'https://api.trello.com/1/',
  headers: {
    'Accept': 'application/json',
    'Authorization':
      `OAuth oauth_consumer_key=\"${process.env.NEXT_PUBLIC_TRELLO_KEY}\", oauth_token=\"${getToken()}\"`
  },
});

export default instance;
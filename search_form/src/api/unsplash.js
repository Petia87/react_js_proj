import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID UrlaNJsUbWVNhO9xIhxFBtKy3FTK2gJbv28_zLN2uO4',
  },
});

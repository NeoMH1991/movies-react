import http from './httpService';


export function getGenres() {
  return http.get('http://localhost3900/api/genres');
}
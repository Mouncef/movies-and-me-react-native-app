/**
 * Created by Mouncef on 07/12/2019.
 */

const API_TOKEN = "2f183f7e7eab892728a7e286fc5bfb8f";


export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
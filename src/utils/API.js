
import API_KEY from '../config'
export function getGifs(query="hello", cb) {
        if(query === "") query = "hello"
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}g&api_key=${API_KEY}&limit=10`)
            .then( res => res.json())
            .then( data => cb(data))
    }
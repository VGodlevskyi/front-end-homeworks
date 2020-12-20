export const API = 'https://jsonplaceholder.typicode.com/';

export function getData(endpoint) {
    return fetch(`${API}${endpoint}`, {
        mode: "cors",
        headers: {
            'content-type': 'application/json'
        }
    })
}


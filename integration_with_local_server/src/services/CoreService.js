export const SERVER_URL = 'http://localhost:3032/api/v1/';

export default class CoreService {
    request(url, params) {
        return fetch(`${SERVER_URL}${url}`, params)
            .then(response => response.json());
    }

    getRequest(url) {
        return this.request(url);
    }

    buildSystemHeaders() {
        const headers = {};
        const token = localStorage.getItem('token');

        if (token) {
            headers['Authorization'] = `Token ${token}`;
        }

        return headers;
    }

    postRequest(url, data, headers = {}) {
        return this.request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...this.buildSystemHeaders(),
                ...headers
            },
            body: JSON.stringify(data)
        });
    }

    putRequest(url, data, headers = {}) {
        return this.request(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...this.buildSystemHeaders(),
                ...headers
            },
            body: JSON.stringify(data)
        });
    }
}

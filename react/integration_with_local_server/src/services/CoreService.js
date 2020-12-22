export const SERVER_URL = 'http://localhost:3008/api/v1/';

export default class CoreService {
    request(url, params) {
        console.log('DEBUG --> ', `${SERVER_URL}${url}`, params);
        return fetch(`${SERVER_URL}${url}`, params)
            .then(response => response.json());
    }

    getRequest(url) {
        return this.request(url);
    }

    postRequest(url, data) {
        return this.request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    }
}

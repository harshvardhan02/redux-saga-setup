const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const apiLoginUrl = 'https://reqres.in/api/login'

export function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            return res.json()
        })
        .then(payload => {
            return payload
        });
}

export function postApi(credentials) {
    return fetch(apiLoginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(res => {
            return res.json()
        })
        .then(payload => {
            return payload
        });
}
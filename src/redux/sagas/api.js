const apiUrl = 'https://jsonplaceholder.typicode.com/users';

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
            console.log(payload)
            return payload
        });
}
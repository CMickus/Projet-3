export async function get(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return await response.json();
        }
        return -1;
    } catch (exception) {
        return -1;
    }
}

export async function post(url, content) {
    console.log(JSON.stringify(content))
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(content),
        })
        if (response.status === 200) {
            return await response.json();
        }
        return -1;
    } catch (exception) {
        console.log(exception);
        return -1;
    }
}

export async function del(url,token) {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`  
            },
        })
        if (response.status === 204) {
            return alert('Item deleted');
        }
        console.log(response.status)
        return -1;
    } catch (exception) {
        console.log(exception);
        return -1;
    }

}

export function sendData(data) {
    console.log('Sending data');

    const XHR = new XMLHttpRequest();

    const urlEncodedDataPairs = [];

    for (const [name, value] of Object.entries(data)) {
        urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
    }
    XHR.addEventListener('load', (event) => {
        alert('Success. Loading');
    });
    XHR.addEventListener('error', (event) => {
        alert('Error');
    });

    XHR.open('POST', 'https://example.com/cors.php');

    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    XHR.send(urlEncodedData);
}

export default {
    get,
    post,
    del,
}
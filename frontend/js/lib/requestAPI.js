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

export async function adminPost(url, content, token){
    console.log(JSON.stringify(content))
    try{
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "accept": "application/json",
                'authorization': `Bearer ${token}`  
            },
            body: content,
        })
        if (response.status === 200) {
            return alert ('Item added');
        }
        console.log(response.status)
        return -1;
    } catch(exception) {
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

export default {
    get,
    post,
    del,
    adminPost,
}
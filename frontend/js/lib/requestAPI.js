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

export async function post(url, content){
    console.log(JSON.stringify(content))
    try{
        const response = await fetch(url,{
			method: "POST",
			headers: {
                "accept": "application/json", 
				"Content-Type": "application/json",
			},
			body: JSON.stringify(content),
		})
        if (response.status === 200){
            return await response.json();
        }
        return -1;
    } catch (exception) {
        console.log(exception);
        return -1;
    }
}

export async function del(url, /*content*/){
    try{
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'accept': `*/*`,
            },
            //body: JSON.stringify(content),
        })
        if (response.status === 200){
            return await response.json();
        }
        return -1;
    } catch (exception){
        console.log(exception);
        return -1;
    }

}

export default{
    get,
    post,
    del,
}
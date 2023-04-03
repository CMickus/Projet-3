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
    try{
        const response = await fetch(url,{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(content),
		})
        if (response.status === 200){
            return await response.json();
        }
        return -1;
    } catch (exception) {
        return -1;
    }
}

export default{
    get
}
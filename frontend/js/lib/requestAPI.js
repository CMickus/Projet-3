export async function get(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return await response.json();
            /*return sort complètement de la fonction*/
        }
        return -1;
    } catch (exception) {
        return -1;
    }
}

export default{
    get
}
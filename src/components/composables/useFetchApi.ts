import { reactive } from "vue";


export async function useFetchApi(url: string, method: string = 'get'){
    let data = reactive([]);
    try {
        const fetchApi = await fetch(url, {
            method
        });
        data = await fetchApi.json();
    } catch (error) {
        console.log(error)
    }

    return data;
}
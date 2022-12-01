export const API_ROOT = import.meta.env.VITE_API_ROOT;
//export const API_ROOT = 'https://dummyjson.com/';

export default function myFetch<T>(url: string, data: any = null, method?: string ): Promise<T> {
    const options: RequestInit = {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    };
    return fetch(API_ROOT + url, options).then( x=>x.json() );
}

import myFetch from "@/services/myFetch";
const OPEN_AI_KEY=import.meta.env.VITE_OPEN_AI_KEY;
export function gptApi(url:string, data?:any, method?:string, headers?:HeadersInit){
    headers = {
        "Authorization": "Bearer" +OPEN_AI_KEY,
    }
    return myFetch<GPTResponse>(url, data, method, headers)
}
export async function createDescription(title: String){
    const result = await gptApi("https://api.openapi.com/v1/completions", {
        "model": "text-davinvi-003",
        "prompt": `Create description for "${title}" to be used on an ecommerce site` ,
        "max_tokens": 45,
        "temperature": 0.18
    })
    return result?.choices[0].text?.trim();
}

interface GPTResponse {
    id: string
    object: string
    created: number
    model: string
    choices: {
        text: string
        index: number
        logprobs: any
        finish_reason: string
    }[]
    usage: {
        prompt_tokens: number
        completion_tokens: number
        total_tokens: number
    }
}
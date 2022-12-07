import axios from "axios";

export const ApiGet = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
}

export const ApiPost = async (url: string, data: any) => {
    const response = await axios.post(url, data);
    return response.data;
}

export const ApiPut = async (url: string, data: any) => {
    const response = await axios.put(url, data);
    return response.data;
}

export const ApiDelete = async (url: string) => {
    const response = await axios.delete(url);
    return response.data;
}

// Path: client/src/common/interface.ts
export interface IApi {
    _id: string;
    content: string;
    completed: boolean;
}

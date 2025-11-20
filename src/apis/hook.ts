// Tanstack Query를 이용한 커스텀 훅
import { useQuery } from '@tanstack/react-query';
import axiosInstance from "./axios.ts";
import type {ResponseType} from "./axios.ts"

// GET 호출 훅 제작
export const useGethook = <T>(path: string) => {

    const fetcher = async () : Promise<T> => {
        const res = await axiosInstance.get<ResponseType<T>>(path);
        return res.data.data;
    };

    return useQuery({
        queryKey: ["api", path],
        queryFn: fetcher,
    });
}
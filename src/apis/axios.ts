// 서버 데이터 불러오기
import axios from 'axios';

// [서버 공통 응답 타입]
export interface ResponseType<T> {
    status: number;
    message: string;
    data: T;
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    headers: {
    }
})

export default axiosInstance;
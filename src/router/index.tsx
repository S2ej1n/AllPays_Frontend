// 라우터 기본 설정
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App"

const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    // 하위 페이지 추가 작성
                }
            ]

        }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;
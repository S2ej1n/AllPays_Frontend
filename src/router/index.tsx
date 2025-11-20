// 라우터 기본 설정
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App"
import Dashboard from "../pages/Dashboard";
import Merchants from "../pages/Merchants";

const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Dashboard />
                },
                {
                    path: "merchats",
                    element: <Merchants />
                }
            ]

        }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;
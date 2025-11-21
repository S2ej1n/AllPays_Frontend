// 라우터 기본 설정
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App"
import Dashboard from "../pages/DashBoard/Dashboard";
import Merchants from "../pages/Merchants";
import PayList from "../pages/PayList";

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
                    path: "paylist",
                    element: <PayList />
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
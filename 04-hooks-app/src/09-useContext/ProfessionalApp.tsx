import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";


export const ProfessionalApp = () => {
    return (
        <div className="bg-linear">
            <RouterProvider router={appRouter} />
        </div>
    );
};
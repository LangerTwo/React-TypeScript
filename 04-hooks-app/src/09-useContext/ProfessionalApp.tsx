import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";


export const ProfessionalApp = () => {
    return (
        <div className="bg-linear w-full">
            <RouterProvider router={appRouter} />
        </div>
    );
};
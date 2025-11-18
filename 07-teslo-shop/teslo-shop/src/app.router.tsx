import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/page/home/HomePage";
import { ProductPage } from "./shop/page/product/ProductPage";
import { GenderPage } from "./shop/page/gender/GenderPage";
// import { AuthLayout } from './auth/layouts/AuthLayout';
import { LoginPage } from './auth/pages/login/LoginPage';
import { RegisterPage } from './auth/pages/register/RegisterPage';
// import { AdminLayout } from './admin/layouts/AdminLayout';
import { DashboardPage } from './admin/pages/dashboard/DashboardPage';
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { AdminProductsPage } from './admin/pages/products/AdminProductsPage';

const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));

export const appRouter = createBrowserRouter([
    // Main Routes
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />,
            },
        ]
    },

    // Auth Routes
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/auth/login' />
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ]
    },

    // Admin Routes
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: 'products',
                element: <AdminProductsPage />,
            },
            {
                path: 'products/:id',
                element: <AdminProductPage />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to='/' />
    },
]);
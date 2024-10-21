import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { LandingPage, MagazinePage, AuthorsPage, PodcastPage } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/magazine",
        element: <MagazinePage />,
    },
    {
        path: "/authors",
        element: <AuthorsPage />,
    },
    {
        path: "/podcast",
        element: <PodcastPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
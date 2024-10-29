import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { LandingPage, MagazinePage, AuthorsPage, PodcastPage, AuthorDetailsPage, PodcastDetailsPage, MagazineDetailsPage } from "@/pages";

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
        path: "/magazine/:id",
        element: <MagazineDetailsPage />,
    },
    {
        path: "/authors",
        element: <AuthorsPage />,
    },
    {
        path: "/authors/:id",
        element: <AuthorDetailsPage />,
    },
    {
        path: "/podcast",
        element: <PodcastPage />,
    },
    {
        path: "/podcast/:id",
        element: <PodcastDetailsPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
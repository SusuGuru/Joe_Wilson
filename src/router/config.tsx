import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Login from "../pages/login/page";
import Signup from "../pages/signup/page";
import MusicPage from "../pages/music/page";
import AlbumDetailPage from "../pages/music/AlbumDetailPage";
import AboutPage from "../pages/about/page";
import MasterclassPage from "../pages/masterclass/page";
import MediaPage from "../pages/media/page";
import MediaDetailPage from "../pages/media/MediaDetailPage";
import ServicesPage from "../pages/services/page";
import ContactPage from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/music",
    element: <MusicPage />,
  },
  {
    path: "/music/:albumId",
    element: <AlbumDetailPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/masterclass",
    element: <MasterclassPage />,
  },
  {
    path: "/media",
    element: <MediaPage />,
  },
  {
    path: "/media/:mediaId",
    element: <MediaDetailPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;

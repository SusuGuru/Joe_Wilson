import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ForgotPassword from "../pages/auth/forgot-password";
import MusicPage from "../pages/music/page";
import AlbumDetailPage from "../pages/music/AlbumDetailPage";
import AboutPage from "../pages/about/page";
import MasterclassPage from "../pages/masterclass/page";
import MediaPage from "../pages/media/page";
import MediaDetailPage from "../pages/media/MediaDetailPage";
import ServicesPage from "../pages/services/page";
import LivePerformancePage from "../pages/services/LivePerformancePage";
import StudioSessionBassPage from "../pages/services/StudioSessionBassPage";
import MusicProductionPage from "../pages/services/MusicProductionPage";
import MusicDirectionPage from "../pages/services/MusicDirectionPage";
import ContactPage from "../pages/contact/page";
import MembersPage from "../pages/members/page";
import MasterclassDetailPage from "../pages/members/MasterclassDetailPage";
import AccountPage from "../pages/members/account/page";

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
    path: "/forgot-password",
    element: <ForgotPassword />,
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
    path: "/members",
    element: <MembersPage />,
  },
  {
    path: "/members/account",
    element: <AccountPage />,
  },
  {
    path: "/members/:cohortId",
    element: <MasterclassDetailPage />,
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
    path: "/services/live-performance",
    element: <LivePerformancePage />,
  },
  {
    path: "/services/studio-session-bass",
    element: <StudioSessionBassPage />,
  },
  {
    path: "/services/music-production",
    element: <MusicProductionPage />,
  },
  {
    path: "/services/music-direction",
    element: <MusicDirectionPage />,
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

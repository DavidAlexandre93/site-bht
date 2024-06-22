import { createBrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import GeneralCommunity from "./app/GeneralCommunity.tsx";
import ContactCasualRecruitment from "./app/ContactCasualRecruitment.tsx";
import ContactCompetitiveRecruitment from "./app/ContactCompetitiveRecruitment.tsx";
import ErrorPage from "./ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/comunidade-geral",
    element: <GeneralCommunity />,
  },
  {
    path: "/contato-recrutamento-casual",
    element: <ContactCasualRecruitment />,
  },
  {
    path: "/contato-recrutamento-competitivo",
    element: <ContactCompetitiveRecruitment />,
  },
]);

export default router;

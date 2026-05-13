import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ChatAI from "./pages/ChatAI";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import Receive from "./pages/Receive";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "chat", Component: ChatAI },
      { path: "transactions", Component: Transactions },
      { path: "analytics", Component: Analytics },
      { path: "profile", Component: Profile },
      { path: "payment", Component: Payment },
      { path: "receive", Component: Receive },
    ],
  },
]);

import { Outlet, NavLink } from "react-router";
import { Home, CreditCard, TrendingUp, Receipt, MessageCircle, User } from "lucide-react";

export default function Layout() {
  const navItems = [
    { to: "/", icon: Home, label: "Início" },
    { to: "/chat", icon: MessageCircle, label: "IA" },
    { to: "/transactions", icon: Receipt, label: "Gastos" },
    { to: "/analytics", icon: TrendingUp, label: "Análises" },
    { to: "/profile", icon: User, label: "Perfil" },
  ];

  return (
    <div className="flex flex-col h-screen bg-white max-w-[430px] mx-auto">
      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <Outlet />
      </main>

      {/* Bottom Navigation - Mobile */}
      <nav className="bg-white border-t border-gray-200 px-2 py-2 safe-area-bottom">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all min-w-[60px] ${
                  isActive
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-500"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

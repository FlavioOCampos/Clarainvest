import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, Eye, EyeOff, Sparkles, Bell } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();

  const balance = 8500.75;
  const monthIncome = 7850;
  const monthExpense = 4125.30;
  const creditUsed = 4250;
  const creditLimit = 15000;

  const recentTransactions = [
    { id: 1, name: "Supermercado Extra", amount: -125.50, category: "Alimentação", date: "Hoje", type: "expense", icon: "🛒" },
    { id: 2, name: "Salário", amount: 5000, category: "Renda", date: "Hoje", type: "income", icon: "💰" },
    { id: 3, name: "iFood", amount: -62.40, category: "Alimentação", date: "Ontem", type: "expense", icon: "🍔" },
    { id: 4, name: "Uber", amount: -28.50, category: "Transporte", date: "Ontem", type: "expense", icon: "🚗" },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-teal-600 to-teal-800 pb-20">
      {/* Header */}
      <div className="p-4 pt-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-teal-200 text-sm">Olá,</p>
            <h1 className="text-2xl font-bold">Maria Silva 👋</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
        </div>

        {/* Balance Card */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-teal-100">Saldo disponível</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            <h2 className="text-4xl font-bold mb-1">
              {showBalance ? `R$ ${balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : "R$ ••••••"}
            </h2>

            <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/20">
              <div>
                <p className="text-xs text-teal-200">Receitas</p>
                <p className="text-lg font-bold text-green-300">
                  +R$ {monthIncome.toLocaleString('pt-BR')}
                </p>
              </div>
              <div>
                <p className="text-xs text-teal-200">Despesas</p>
                <p className="text-lg font-bold text-red-300">
                  -R$ {monthExpense.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Assistant Alert */}
      <div className="px-4 pb-4">
        <Card
          className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-200 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate('/chat')}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">Alerta da IA</h3>
                  <Badge className="bg-orange-500 text-white text-xs">Urgente</Badge>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Você está gastando <span className="font-bold">82.5%</span> da sua renda.
                  Toque aqui para ver como economizar <span className="font-bold text-green-600">R$ 850/mês</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 rounded-t-3xl min-h-[500px] p-4 space-y-4">
        {/* Credit Card */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-gray-500">Cartão de Crédito</p>
                <p className="text-sm font-semibold text-gray-900">•••• 4321</p>
              </div>
              <Badge variant="outline" className="text-xs">Mastercard</Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Fatura atual</span>
                <span className="font-semibold text-gray-900">
                  R$ {creditUsed.toLocaleString('pt-BR')} / R$ {creditLimit.toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-700 h-2 rounded-full transition-all"
                  style={{ width: `${(creditUsed / creditLimit) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs pt-1">
                <span className="text-gray-500">Vencimento: 15/06</span>
                <span className="font-semibold text-teal-600">{((creditUsed / creditLimit) * 100).toFixed(0)}% usado</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-2 bg-white"
            onClick={() => navigate('/payment')}
          >
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-teal-600" />
            </div>
            <span className="text-xs font-medium">Transferir</span>
          </Button>

          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-2 bg-white"
            onClick={() => navigate('/receive')}
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <ArrowDownLeft className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-xs font-medium">Receber</span>
          </Button>

          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-2 bg-white"
            onClick={() => navigate('/payment')}
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xl">💳</span>
            </div>
            <span className="text-xs font-medium">Pagar</span>
          </Button>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Transações Recentes</h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-teal-600 text-xs"
              onClick={() => navigate('/transactions')}
            >
              Ver todas
            </Button>
          </div>

          <Card>
            <CardContent className="p-0 divide-y divide-gray-100">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                      {transaction.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{transaction.name}</p>
                      <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <p
                    className={`font-bold text-sm ${
                      transaction.type === "income" ? "text-green-600" : "text-gray-900"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}R$ {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

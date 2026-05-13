import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Search, Filter, Calendar } from "lucide-react";
import { useState } from "react";

type Transaction = {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
  time: string;
  type: "income" | "expense";
  icon: string;
};

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const transactions: Transaction[] = [
    { id: 1, name: "Salário", amount: 5000, category: "Renda", date: "12/05", time: "14:30", type: "income", icon: "💰" },
    { id: 2, name: "Supermercado Extra", amount: -125.50, category: "Alimentação", date: "12/05", time: "10:15", type: "expense", icon: "🛒" },
    { id: 3, name: "iFood", amount: -62.40, category: "Alimentação", date: "12/05", time: "20:30", type: "expense", icon: "🍔" },
    { id: 4, name: "Starbucks", amount: -28.90, category: "Alimentação", date: "11/05", time: "16:45", type: "expense", icon: "☕" },
    { id: 5, name: "Netflix", amount: -49.90, category: "Entretenimento", date: "10/05", time: "08:00", type: "expense", icon: "🎬" },
    { id: 6, name: "Uber", amount: -28.50, category: "Transporte", date: "10/05", time: "18:20", type: "expense", icon: "🚗" },
    { id: 7, name: "Uber", amount: -35.80, category: "Transporte", date: "09/05", time: "08:15", type: "expense", icon: "🚗" },
    { id: 8, name: "Freelance Design", amount: 2850, category: "Renda", date: "08/05", time: "11:30", type: "income", icon: "💼" },
    { id: 9, name: "Farmácia", amount: -85.30, category: "Saúde", date: "07/05", time: "15:10", type: "expense", icon: "💊" },
    { id: 10, name: "Conta de Luz", amount: -215.80, category: "Utilidades", date: "06/05", time: "12:00", type: "expense", icon: "⚡" },
    { id: 11, name: "Amazon", amount: -359.90, category: "Compras", date: "05/05", time: "20:35", type: "expense", icon: "📦" },
    { id: 12, name: "Academia", amount: -89.90, category: "Saúde", date: "04/05", time: "07:00", type: "expense", icon: "💪" },
    { id: 13, name: "McDonald's", amount: -42.30, category: "Alimentação", date: "03/05", time: "19:45", type: "expense", icon: "🍟" },
    { id: 14, name: "Spotify", amount: -21.90, category: "Entretenimento", date: "02/05", time: "10:00", type: "expense", icon: "🎵" },
    { id: 15, name: "Uber", amount: -22.40, category: "Transporte", date: "01/05", time: "07:30", type: "expense", icon: "🚗" },
  ];

  const filters = [
    { id: "all", label: "Todas", count: transactions.length },
    { id: "expense", label: "Despesas", count: transactions.filter(t => t.type === "expense").length },
    { id: "income", label: "Receitas", count: transactions.filter(t => t.type === "income").length },
  ];

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || t.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const totalExpense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const totalIncome = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Transações</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-3">
              <p className="text-xs text-green-700 mb-1">Receitas</p>
              <p className="text-lg font-bold text-green-600">
                R$ {totalIncome.toLocaleString('pt-BR')}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardContent className="p-3">
              <p className="text-xs text-red-700 mb-1">Despesas</p>
              <p className="text-lg font-bold text-red-600">
                R$ {totalExpense.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Buscar transações..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-50"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex-shrink-0 ${
                selectedFilter === filter.id
                  ? "bg-teal-600 hover:bg-teal-700"
                  : ""
              }`}
            >
              {filter.label}
              <Badge
                variant="secondary"
                className={`ml-2 ${
                  selectedFilter === filter.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100"
                }`}
              >
                {filter.count}
              </Badge>
            </Button>
          ))}
          <Button variant="outline" size="sm" className="flex-shrink-0">
            <Calendar className="w-4 h-4 mr-1" />
            Período
          </Button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="p-4 space-y-3">
        {filteredTransactions.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">Nenhuma transação encontrada</p>
            </CardContent>
          </Card>
        ) : (
          filteredTransactions.map((transaction) => (
            <Card key={transaction.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {transaction.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{transaction.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-gray-500">{transaction.date} • {transaction.time}</p>
                        <Badge variant="secondary" className="text-xs">
                          {transaction.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-3">
                    <p
                      className={`text-lg font-bold ${
                        transaction.type === "income" ? "text-green-600" : "text-gray-900"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}R$ {Math.abs(transaction.amount).toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

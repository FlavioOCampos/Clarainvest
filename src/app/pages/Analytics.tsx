import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Calendar, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router";

export default function Analytics() {
  const navigate = useNavigate();

  const categoryData = [
    { name: "Alimentação", value: 1250, color: "#0d9488", percentage: 28 },
    { name: "Transporte", value: 680, color: "#06b6d4", percentage: 15 },
    { name: "Moradia", value: 1500, color: "#f59e0b", percentage: 34 },
    { name: "Entretenimento", value: 420, color: "#ec4899", percentage: 10 },
    { name: "Saúde", value: 350, color: "#10b981", percentage: 8 },
    { name: "Outros", value: 225, color: "#14b8a6", percentage: 5 },
  ];

  const monthlyData = [
    { month: "Jan", receitas: 6500, despesas: 4200 },
    { month: "Fev", receitas: 7200, despesas: 4800 },
    { month: "Mar", receitas: 6800, despesas: 5200 },
    { month: "Abr", receitas: 7500, despesas: 4500 },
    { month: "Mai", receitas: 7850, despesas: 4125 },
  ];

  const weeklyTrend = [
    { day: "Seg", gasto: 120 },
    { day: "Ter", gasto: 250 },
    { day: "Qua", gasto: 180 },
    { day: "Qui", gasto: 320 },
    { day: "Sex", gasto: 290 },
    { day: "Sáb", gasto: 450 },
    { day: "Dom", gasto: 380 },
  ];

  const totalExpenses = categoryData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Análises</h1>
            <p className="text-sm text-gray-600">Maio 2026</p>
          </div>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Período
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-2">
          <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
            <CardContent className="p-3">
              <p className="text-xs text-teal-700 mb-1">Gastos</p>
              <p className="text-base font-bold text-teal-600">R$ {totalExpenses}</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-xs text-green-600">+15%</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-3">
              <p className="text-xs text-green-700 mb-1">Economia</p>
              <p className="text-base font-bold text-green-600">R$ 3.724</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-xs text-green-600">+12%</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-3">
              <p className="text-xs text-blue-700 mb-1">Média/dia</p>
              <p className="text-base font-bold text-blue-600">R$ 137</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingDown className="w-3 h-3 text-red-600" />
                <span className="text-xs text-red-600">-8%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Alert */}
      <div className="p-4">
        <Card
          className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-200 cursor-pointer"
          onClick={() => navigate('/chat')}
        >
          <CardContent className="p-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">⚠️ Alerta de Gastos</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Você está gastando <span className="font-bold">28%</span> da sua renda só com alimentação.
                  A IA pode te ajudar a economizar <span className="font-bold text-green-600">R$ 400/mês</span>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="categories" className="text-xs">Categorias</TabsTrigger>
            <TabsTrigger value="monthly" className="text-xs">Mensal</TabsTrigger>
            <TabsTrigger value="weekly" className="text-xs">Semanal</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-4">
            {/* Pie Chart */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Gastos por Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={false}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {categoryData.map((category, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: category.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700 truncate">{category.name}</p>
                        <p className="text-xs text-gray-500">{category.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category List */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Detalhamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categoryData.map((category, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-900">R$ {category.value}</p>
                        <p className="text-xs text-gray-500">{category.percentage}%</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all"
                        style={{
                          width: `${category.percentage}%`,
                          backgroundColor: category.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Receitas vs Despesas</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="receitas" fill="#10b981" name="Receitas" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="despesas" fill="#ef4444" name="Despesas" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Tendência Semanal</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={weeklyTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="gasto"
                      stroke="#0d9488"
                      strokeWidth={3}
                      name="Gasto Diário"
                      dot={{ fill: "#0d9488", r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Insights */}
        <Card className="mt-4 bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-teal-900 flex items-center gap-2">
              💡 Insights da IA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2 p-3 bg-white rounded-lg">
              <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Alimentação:</span> Você gastou 15% a mais este mês.
                A IA recomenda planejar refeições.
              </p>
            </div>
            <div className="flex items-start gap-2 p-3 bg-white rounded-lg">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Parabéns!</span> Você economizou R$ 3.724 este mês,
                superando sua meta em 12%.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

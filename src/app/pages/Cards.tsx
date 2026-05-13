import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Progress } from "../components/ui/progress";
import {
  CreditCard,
  Lock,
  Unlock,
  Plus,
  Settings,
  Eye,
  EyeOff,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

type CardType = {
  id: number;
  name: string;
  number: string;
  type: "credit" | "debit" | "virtual";
  brand: string;
  limit?: number;
  used?: number;
  balance?: number;
  color: string;
  active: boolean;
  expiryDate: string;
  cvv: string;
};

export default function Cards() {
  const [showDetails, setShowDetails] = useState<Record<number, boolean>>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const cards: CardType[] = [
    {
      id: 1,
      name: "Clara Mastercard Black",
      number: "5412 7534 8932 4321",
      type: "credit",
      brand: "Mastercard",
      limit: 15000,
      used: 4250,
      color: "from-gray-800 to-gray-900",
      active: true,
      expiryDate: "12/28",
      cvv: "321",
    },
    {
      id: 2,
      name: "Clara Débito",
      number: "4532 1234 5678 9012",
      type: "debit",
      brand: "Visa",
      balance: 8500.75,
      color: "from-purple-600 to-purple-800",
      active: true,
      expiryDate: "06/27",
      cvv: "456",
    },
    {
      id: 3,
      name: "Cartão Virtual",
      number: "5123 4567 8901 2345",
      type: "virtual",
      brand: "Mastercard",
      limit: 5000,
      used: 1250,
      color: "from-blue-500 to-blue-700",
      active: true,
      expiryDate: "03/27",
      cvv: "789",
    },
  ];

  const toggleDetails = (cardId: number) => {
    setShowDetails((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatCardNumber = (number: string, show: boolean) => {
    if (show) return number;
    const parts = number.split(" ");
    return `${parts[0]} •••• •••• ${parts[3]}`;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meus Cartões</h1>
          <p className="text-gray-600 mt-1">Gerencie seus cartões e limites</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Novo Cartão Virtual
        </Button>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="space-y-4">
            {/* Card Visual */}
            <div
              className={`relative h-52 rounded-2xl bg-gradient-to-br ${card.color} p-6 text-white shadow-xl`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-xs opacity-80 mb-1">
                    {card.type === "credit"
                      ? "Crédito"
                      : card.type === "debit"
                      ? "Débito"
                      : "Virtual"}
                  </p>
                  <p className="text-sm font-semibold">{card.name}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleDetails(card.id)}
                    className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    {showDetails[card.id] ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xl font-mono tracking-wider">
                    {formatCardNumber(card.number, showDetails[card.id] || false)}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-80">Validade</p>
                    <p className="font-semibold">
                      {showDetails[card.id] ? card.expiryDate : "••/••"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80">CVV</p>
                    <p className="font-semibold">
                      {showDetails[card.id] ? card.cvv : "•••"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{card.brand}</p>
                  </div>
                </div>
              </div>

              {card.type === "virtual" && (
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    Virtual
                  </Badge>
                </div>
              )}
            </div>

            {/* Card Details */}
            <Card>
              <CardContent className="p-4 space-y-4">
                {(card.type === "credit" || card.type === "virtual") && card.limit && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Limite Utilizado</span>
                      <span className="font-semibold">
                        R$ {card.used?.toLocaleString()} / R$ {card.limit.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(card.used! / card.limit) * 100} className="h-2" />
                  </div>
                )}

                {card.type === "debit" && card.balance !== undefined && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Saldo Disponível</span>
                    <span className="text-lg font-bold text-green-600">
                      R$ {card.balance.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    {card.active ? (
                      <Unlock className="w-4 h-4 text-green-600" />
                    ) : (
                      <Lock className="w-4 h-4 text-red-600" />
                    )}
                    <span className="text-sm text-gray-700">
                      {card.active ? "Ativo" : "Bloqueado"}
                    </span>
                  </div>
                  <Switch checked={card.active} />
                </div>

                {showDetails[card.id] && (
                  <div className="space-y-2 pt-2 border-t border-gray-200">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => copyToClipboard(card.number.replace(/\s/g, ""), `card-${card.id}`)}
                    >
                      {copiedField === `card-${card.id}` ? (
                        <Check className="w-4 h-4 mr-2 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2" />
                      )}
                      Copiar número do cartão
                    </Button>
                  </div>
                )}

                <Button variant="outline" size="sm" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <CreditCard className="w-6 h-6 text-purple-600" />
              <span>Solicitar Aumento de Limite</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Lock className="w-6 h-6 text-red-600" />
              <span>Bloquear Cartão</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Settings className="w-6 h-6 text-blue-600" />
              <span>Configurar Limites</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

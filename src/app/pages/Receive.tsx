import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import {
  ArrowLeft,
  Copy,
  Share2,
  Check,
  QrCode,
  Mail,
  Phone,
  CreditCard,
  DollarSign,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Receive() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedKey, setSelectedKey] = useState<string>("cpf");

  const pixKeys = [
    { type: "cpf", value: "123.456.789-00", icon: CreditCard, label: "CPF" },
    { type: "email", value: "maria.silva@email.com", icon: Mail, label: "E-mail" },
    { type: "phone", value: "+55 11 98765-4321", icon: Phone, label: "Telefone" },
    { type: "random", value: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", icon: QrCode, label: "Chave Aleatória" },
  ];

  const handleCopy = (value: string, type: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(type);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const generateQRCode = () => {
    // Simula QR Code - em produção seria gerado dinamicamente
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='10' y='10' width='30' height='30' fill='black'/%3E%3Crect x='50' y='10' width='10' height='10' fill='black'/%3E%3Crect x='70' y='10' width='10' height='10' fill='black'/%3E%3Crect x='90' y='10' width='10' height='10' fill='black'/%3E%3Crect x='110' y='10' width='10' height='10' fill='black'/%3E%3Crect x='130' y='10' width='10' height='10' fill='black'/%3E%3Crect x='160' y='10' width='30' height='30' fill='black'/%3E%3Crect x='10' y='50' width='10' height='10' fill='black'/%3E%3Crect x='30' y='50' width='10' height='10' fill='black'/%3E%3Crect x='50' y='50' width='10' height='10' fill='black'/%3E%3Crect x='70' y='50' width='10' height='10' fill='black'/%3E%3Crect x='90' y='50' width='30' height='10' fill='black'/%3E%3Crect x='130' y='50' width='10' height='10' fill='black'/%3E%3Crect x='160' y='50' width='10' height='10' fill='black'/%3E%3Crect x='180' y='50' width='10' height='10' fill='black'/%3E%3Crect x='10' y='70' width='10' height='10' fill='black'/%3E%3Crect x='30' y='70' width='10' height='10' fill='black'/%3E%3Crect x='60' y='70' width='20' height='10' fill='black'/%3E%3Crect x='90' y='70' width='10' height='10' fill='black'/%3E%3Crect x='110' y='70' width='20' height='10' fill='black'/%3E%3Crect x='160' y='70' width='10' height='10' fill='black'/%3E%3Crect x='180' y='70' width='10' height='10' fill='black'/%3E%3Crect x='10' y='90' width='10' height='10' fill='black'/%3E%3Crect x='30' y='90' width='10' height='10' fill='black'/%3E%3Crect x='50' y='90' width='30' height='10' fill='black'/%3E%3Crect x='110' y='90' width='10' height='10' fill='black'/%3E%3Crect x='130' y='90' width='20' height='10' fill='black'/%3E%3Crect x='160' y='90' width='10' height='10' fill='black'/%3E%3Crect x='180' y='90' width='10' height='10' fill='black'/%3E%3Crect x='10' y='110' width='10' height='10' fill='black'/%3E%3Crect x='30' y='110' width='10' height='10' fill='black'/%3E%3Crect x='50' y='110' width='10' height='10' fill='black'/%3E%3Crect x='70' y='110' width='40' height='10' fill='black'/%3E%3Crect x='130' y='110' width='10' height='10' fill='black'/%3E%3Crect x='160' y='110' width='10' height='10' fill='black'/%3E%3Crect x='180' y='110' width='10' height='10' fill='black'/%3E%3Crect x='10' y='130' width='30' height='10' fill='black'/%3E%3Crect x='50' y='130' width='10' height='10' fill='black'/%3E%3Crect x='90' y='130' width='20' height='10' fill='black'/%3E%3Crect x='130' y='130' width='10' height='10' fill='black'/%3E%3Crect x='150' y='130' width='10' height='10' fill='black'/%3E%3Crect x='180' y='130' width='10' height='10' fill='black'/%3E%3Crect x='10' y='160' width='30' height='30' fill='black'/%3E%3Crect x='50' y='160' width='10' height='10' fill='black'/%3E%3Crect x='70' y='160' width='20' height='10' fill='black'/%3E%3Crect x='110' y='160' width='10' height='10' fill='black'/%3E%3Crect x='130' y='160' width='10' height='10' fill='black'/%3E%3Crect x='160' y='160' width='30' height='30' fill='black'/%3E%3C/svg%3E";
  };

  const selectedKeyData = pixKeys.find(k => k.type === selectedKey);

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white p-6 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/")}
            className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Receber</h1>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-teal-100 mb-2">Receba pagamentos via PIX</p>
            <p className="text-lg font-semibold">Rápido, fácil e seguro</p>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 space-y-4 -mt-4">
        {/* Amount (Optional) */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Valor (opcional)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="amount">Informe o valor para gerar QR Code específico</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="amount"
                  type="number"
                  placeholder="0,00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-10 text-lg font-semibold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description-receive">Descrição (opcional)</Label>
              <Input
                id="description-receive"
                placeholder="Ex: Venda de produto"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* QR Code */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <QrCode className="w-5 h-5 text-teal-600" />
              QR Code PIX
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center">
                <img
                  src={generateQRCode()}
                  alt="QR Code PIX"
                  className="w-full h-full"
                />
              </div>
            </div>

            {amount && parseFloat(amount) > 0 && (
              <div className="text-center p-3 bg-teal-50 rounded-lg">
                <p className="text-sm text-teal-700 mb-1">Valor do QR Code</p>
                <p className="text-2xl font-bold text-teal-600">
                  R$ {parseFloat(amount).toFixed(2)}
                </p>
                {description && (
                  <p className="text-xs text-teal-600 mt-1">{description}</p>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Copy className="w-4 h-4" />
                Salvar QR Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* PIX Keys */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Minhas Chaves PIX</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pixKeys.map((key) => {
              const Icon = key.icon;
              const isCopied = copiedKey === key.type;

              return (
                <div
                  key={key.type}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedKey === key.type
                      ? "border-teal-600 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedKey === key.type ? "bg-teal-600" : "bg-gray-100"
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          selectedKey === key.type ? "text-white" : "text-gray-600"
                        }`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{key.label}</p>
                        <p className="text-xs text-gray-500 truncate max-w-[200px]">
                          {key.value}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(key.value, key.type)}
                      className="flex-shrink-0"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          <span className="text-xs">Copiar</span>
                        </>
                      )}
                    </Button>
                  </div>

                  <button
                    onClick={() => setSelectedKey(key.type)}
                    className="w-full text-left"
                  >
                    <Badge
                      variant={selectedKey === key.type ? "default" : "outline"}
                      className={`text-xs ${
                        selectedKey === key.type
                          ? "bg-teal-600 hover:bg-teal-700"
                          : ""
                      }`}
                    >
                      {selectedKey === key.type ? "Selecionada" : "Selecionar para QR Code"}
                    </Badge>
                  </button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-blue-900 mb-1">Como funciona?</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Mostre o QR Code para quem vai pagar</li>
                  <li>• Ou compartilhe sua chave PIX</li>
                  <li>• O valor cai na hora na sua conta</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <Button
          variant="outline"
          className="w-full h-12"
          onClick={() => navigate("/")}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}

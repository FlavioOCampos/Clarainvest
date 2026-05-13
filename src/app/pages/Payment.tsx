import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  ArrowLeft,
  User,
  DollarSign,
  Calendar,
  CreditCard,
  QrCode,
  FileText,
  Check,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "transfer" | "boleto">("pix");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [description, setDescription] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const balance = 8500.75;

  const contacts = [
    { name: "João Silva", pix: "joao@email.com", avatar: "JS" },
    { name: "Ana Costa", pix: "11987654321", avatar: "AC" },
    { name: "Pedro Santos", pix: "pedro.santos@email.com", avatar: "PS" },
  ];

  const handlePayment = () => {
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-full bg-gray-50 pb-20">
        {/* Success Screen */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white p-6 pb-8">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => navigate("/")}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold">Pagamento Realizado</h1>
          </div>
        </div>

        <div className="p-4 space-y-4 -mt-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Enviado!</h2>
              <p className="text-gray-600 mb-6">Sua transação foi processada com sucesso</p>

              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Valor pago</p>
                <p className="text-3xl font-bold text-gray-900">
                  R$ {parseFloat(amount || "0").toFixed(2)}
                </p>
              </div>

              <div className="space-y-3 text-left mb-6">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Para</span>
                  <span className="text-sm font-semibold text-gray-900">{recipient}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Método</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {paymentMethod === "pix" ? "PIX" : paymentMethod === "transfer" ? "Transferência" : "Boleto"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Data</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {new Date().toLocaleDateString("pt-BR")} às {new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                {description && (
                  <div className="flex justify-between py-2">
                    <span className="text-sm text-gray-600">Descrição</span>
                    <span className="text-sm font-semibold text-gray-900">{description}</span>
                  </div>
                )}
              </div>

              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 mb-3"
                onClick={() => navigate("/")}
              >
                Voltar ao Início
              </Button>
              <Button variant="outline" className="w-full">
                Compartilhar Comprovante
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
          <h1 className="text-xl font-bold">Pagar</h1>
        </div>

        {/* Balance */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
          <CardContent className="p-4">
            <p className="text-sm text-teal-100 mb-1">Saldo disponível</p>
            <p className="text-2xl font-bold">R$ {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 space-y-4 -mt-4">
        {/* Payment Method */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Método de Pagamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <button
              onClick={() => setPaymentMethod("pix")}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "pix"
                  ? "border-teal-600 bg-teal-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                paymentMethod === "pix" ? "bg-teal-600" : "bg-gray-100"
              }`}>
                <QrCode className={`w-5 h-5 ${paymentMethod === "pix" ? "text-white" : "text-gray-600"}`} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-900">PIX</p>
                <p className="text-xs text-gray-500">Transferência instantânea</p>
              </div>
              {paymentMethod === "pix" && (
                <Check className="w-5 h-5 text-teal-600" />
              )}
            </button>

            <button
              onClick={() => setPaymentMethod("transfer")}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "transfer"
                  ? "border-teal-600 bg-teal-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                paymentMethod === "transfer" ? "bg-teal-600" : "bg-gray-100"
              }`}>
                <CreditCard className={`w-5 h-5 ${paymentMethod === "transfer" ? "text-white" : "text-gray-600"}`} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-900">TED/DOC</p>
                <p className="text-xs text-gray-500">Transferência bancária</p>
              </div>
              {paymentMethod === "transfer" && (
                <Check className="w-5 h-5 text-teal-600" />
              )}
            </button>

            <button
              onClick={() => setPaymentMethod("boleto")}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "boleto"
                  ? "border-teal-600 bg-teal-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                paymentMethod === "boleto" ? "bg-teal-600" : "bg-gray-100"
              }`}>
                <FileText className={`w-5 h-5 ${paymentMethod === "boleto" ? "text-white" : "text-gray-600"}`} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-900">Boleto</p>
                <p className="text-xs text-gray-500">Código de barras</p>
              </div>
              {paymentMethod === "boleto" && (
                <Check className="w-5 h-5 text-teal-600" />
              )}
            </button>
          </CardContent>
        </Card>

        {/* Quick Contacts */}
        {paymentMethod === "pix" && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 px-1">Contatos Frequentes</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {contacts.map((contact, idx) => (
                <button
                  key={idx}
                  onClick={() => setRecipient(contact.pix)}
                  className="flex-shrink-0 flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-teal-600 hover:bg-teal-50 transition-all min-w-[90px]"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-teal-700">{contact.avatar}</span>
                  </div>
                  <p className="text-xs font-medium text-gray-900 text-center leading-tight">
                    {contact.name.split(" ")[0]}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Payment Form */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Dados do Pagamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">
                {paymentMethod === "pix" ? "Chave PIX" : paymentMethod === "transfer" ? "Conta Destino" : "Código de Barras"}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="recipient"
                  placeholder={
                    paymentMethod === "pix"
                      ? "CPF, e-mail, telefone ou chave"
                      : paymentMethod === "transfer"
                      ? "Banco, agência e conta"
                      : "Cole o código de barras"
                  }
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Valor</Label>
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
              {parseFloat(amount) > balance && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <p className="text-xs">Saldo insuficiente</p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição (opcional)</Label>
              <Input
                id="description"
                placeholder="Ex: Pagamento de aluguel"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {paymentMethod === "transfer" && (
              <div className="space-y-2">
                <Label htmlFor="date">Data do Agendamento</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="date"
                    type="date"
                    className="pl-10"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Summary */}
        {amount && parseFloat(amount) > 0 && (
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                <p className="text-sm font-semibold text-blue-900">Resumo</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-700">Valor a pagar</span>
                  <span className="font-bold text-blue-900">R$ {parseFloat(amount).toFixed(2)}</span>
                </div>
                {paymentMethod !== "pix" && (
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Taxa</span>
                    <span className="font-bold text-blue-900">R$ 0,00</span>
                  </div>
                )}
                <Separator className="bg-blue-300" />
                <div className="flex justify-between text-sm">
                  <span className="text-blue-700">Total</span>
                  <span className="font-bold text-blue-900 text-base">R$ {parseFloat(amount).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Button
            className="w-full bg-teal-600 hover:bg-teal-700 h-12"
            disabled={!recipient || !amount || parseFloat(amount) <= 0 || parseFloat(amount) > balance}
            onClick={handlePayment}
          >
            Confirmar Pagamento
          </Button>
          <Button
            variant="outline"
            className="w-full h-12"
            onClick={() => navigate("/")}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}

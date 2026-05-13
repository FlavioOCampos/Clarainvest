import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Switch } from "../components/ui/switch";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import {
  User,
  Mail,
  Phone,
  Shield,
  Bell,
  Palette,
  ChevronRight,
  LogOut,
  Lock,
  CreditCard,
  Settings,
  Eye,
  EyeOff,
  Camera,
  MapPin,
  FileText,
} from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const menuSections = [
    { id: "personal", icon: User, label: "Informações Pessoais", color: "bg-blue-100 text-blue-600" },
    { id: "cards", icon: CreditCard, label: "Meus Cartões", color: "bg-teal-100 text-teal-600" },
    { id: "security", icon: Shield, label: "Segurança", color: "bg-red-100 text-red-600" },
    { id: "notifications", icon: Bell, label: "Notificações", color: "bg-orange-100 text-orange-600" },
    { id: "appearance", icon: Palette, label: "Aparência", color: "bg-purple-100 text-purple-600" },
    { id: "settings", icon: Settings, label: "Configurações", color: "bg-gray-100 text-gray-600" },
  ];

  const cards = [
    { name: "Clara Mastercard", number: "•••• 4321", type: "Crédito", color: "from-gray-800 to-gray-900" },
    { name: "Clara Débito", number: "•••• 9012", type: "Débito", color: "from-teal-600 to-teal-800" },
    { name: "Cartão Virtual", number: "•••• 2345", type: "Virtual", color: "from-blue-500 to-blue-700" },
  ];

  const notifications = [
    { id: 1, label: "Transações acima de R$ 500", enabled: true },
    { id: 2, label: "Lembretes de vencimento", enabled: true },
    { id: 3, label: "Ofertas e promoções", enabled: false },
    { id: 4, label: "Atualizações de saldo diário", enabled: true },
    { id: 5, label: "Relatórios mensais", enabled: true },
  ];

  const securitySettings = [
    { id: 1, label: "Autenticação de dois fatores", enabled: true },
    { id: 2, label: "Verificação biométrica", enabled: true },
    { id: 3, label: "Alertas de login", enabled: true },
  ];

  const renderContent = () => {
    if (!activeSection) {
      return (
        <div className="p-4 space-y-3">
          {menuSections.map((section) => (
            <Card
              key={section.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setActiveSection(section.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 ${section.color} rounded-xl flex items-center justify-center`}>
                      <section.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-900">{section.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }

    switch (activeSection) {
      case "personal":
        return (
          <div className="p-4 space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="name" defaultValue="Maria Silva" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="email" type="email" defaultValue="maria.silva@email.com" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="phone" defaultValue="+55 11 98765-4321" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="cpf" defaultValue="123.456.789-00" className="pl-10" disabled />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="address" defaultValue="São Paulo, SP" className="pl-10" />
                </div>
              </div>
            </div>

            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              Salvar Alterações
            </Button>
          </div>
        );

      case "cards":
        return (
          <div className="p-4 space-y-4">
            {cards.map((card, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  <div className={`h-32 bg-gradient-to-br ${card.color} rounded-xl p-4 text-white mb-3`}>
                    <p className="text-xs opacity-80 mb-2">{card.type}</p>
                    <p className="text-sm font-semibold mb-6">{card.name}</p>
                    <p className="text-lg font-mono tracking-wider">
                      {showCardDetails ? card.number.replace('••••', '5412 7534 8932') : card.number}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status: Ativo</span>
                    <Button variant="outline" size="sm">
                      Gerenciar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowCardDetails(!showCardDetails)}
            >
              {showCardDetails ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              {showCardDetails ? "Ocultar" : "Mostrar"} Detalhes
            </Button>
          </div>
        );

      case "security":
        return (
          <div className="p-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  Configurações de Segurança
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {securitySettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-700">{setting.label}</span>
                    <Switch checked={setting.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Lock className="w-5 h-5 text-teal-600" />
                  Alterar Senha
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Atualizar Senha
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "notifications":
        return (
          <div className="p-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Bell className="w-5 h-5 text-teal-600" />
                  Preferências de Notificação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-sm text-gray-700">{notification.label}</span>
                    <Switch checked={notification.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <p className="text-sm text-blue-800">
                  💡 <span className="font-semibold">Dica:</span> Mantenha as notificações ativadas para
                  receber alertas importantes sobre suas transações e limites de gastos.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case "appearance":
        return (
          <div className="p-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Palette className="w-5 h-5 text-teal-600" />
                  Personalização
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-gray-900">Tema Escuro</p>
                    <p className="text-xs text-gray-500">Ativar modo escuro</p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <select
                    id="language"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option>Português (Brasil)</option>
                    <option>English (US)</option>
                    <option>Español</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Moeda</Label>
                  <select
                    id="currency"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option>BRL (R$)</option>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Cor do Tema</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { color: "bg-teal-600", name: "Teal" },
                      { color: "bg-blue-600", name: "Azul" },
                      { color: "bg-purple-600", name: "Roxo" },
                      { color: "bg-pink-600", name: "Rosa" },
                      { color: "bg-orange-600", name: "Laranja" },
                    ].map((theme, idx) => (
                      <button
                        key={idx}
                        className={`w-full h-12 rounded-lg ${theme.color} ${idx === 0 ? 'ring-2 ring-offset-2 ring-teal-600' : ''}`}
                        aria-label={theme.name}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "settings":
        return (
          <div className="p-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Settings className="w-5 h-5 text-teal-600" />
                  Configurações Gerais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-sm text-gray-700">Backup de Dados</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-sm text-gray-700">Exportar Relatórios</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-sm text-gray-700">Privacidade</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-sm text-gray-700">Termos de Uso</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-base text-red-900">Zona de Perigo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-red-700">
                  Ações irreversíveis que afetam permanentemente sua conta.
                </p>
                <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-100">
                  Desativar Conta
                </Button>
                <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-100">
                  Excluir Conta
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white p-4 pb-6">
        <div className="flex items-center gap-3 mb-4">
          {activeSection && (
            <button
              onClick={() => setActiveSection(null)}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
          )}
          <h1 className="text-xl font-bold">
            {activeSection
              ? menuSections.find(s => s.id === activeSection)?.label
              : "Perfil"}
          </h1>
        </div>

        {!activeSection && (
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="w-16 h-16 border-2 border-white/30">
                    <AvatarFallback className="bg-gradient-to-br from-teal-400 to-teal-600 text-white text-xl">
                      MS
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-lg">
                    <Camera className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold">Maria Silva</h2>
                  <p className="text-sm text-teal-100">maria.silva@email.com</p>
                  <p className="text-xs text-teal-200 mt-1">Membro desde Jan 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Content */}
      {renderContent()}

      {/* Logout Button */}
      {!activeSection && (
        <div className="p-4">
          <Button
            variant="outline"
            className="w-full text-red-600 border-red-200 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair da Conta
          </Button>
        </div>
      )}
    </div>
  );
}

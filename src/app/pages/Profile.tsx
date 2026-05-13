import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Switch } from "../components/ui/switch";
import { Badge } from "../components/ui/badge";
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
  HelpCircle,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";

export default function Profile() {
  const menuItems = [
    {
      section: "Conta",
      items: [
        { icon: User, label: "Informações Pessoais", badge: null },
        { icon: CreditCard, label: "Meus Cartões", badge: "3" },
        { icon: Shield, label: "Segurança", badge: null },
      ],
    },
    {
      section: "Preferências",
      items: [
        { icon: Bell, label: "Notificações", badge: null },
        { icon: Palette, label: "Aparência", badge: null },
        { icon: Settings, label: "Configurações", badge: null },
      ],
    },
    {
      section: "Suporte",
      items: [
        { icon: HelpCircle, label: "Central de Ajuda", badge: null },
        { icon: FileText, label: "Termos de Uso", badge: null },
        { icon: FileText, label: "Política de Privacidade", badge: null },
      ],
    },
  ];

  const quickSettings = [
    { id: 1, label: "Notificações Push", enabled: true, icon: Bell },
    { id: 2, label: "Autenticação Biométrica", enabled: true, icon: Shield },
    { id: 3, label: "Tema Escuro", enabled: false, icon: Palette },
  ];

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 pb-8">
        <h1 className="text-xl font-bold mb-6">Perfil</h1>

        {/* Profile Card */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-white/30">
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-white text-xl">
                  MS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-lg font-bold">Maria Silva</h2>
                <p className="text-sm text-purple-100">maria.silva@email.com</p>
                <Badge className="mt-2 bg-white/20 text-white border-0 text-xs">
                  Membro desde Jan 2024
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 space-y-4 -mt-4">
        {/* Quick Settings */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Configurações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickSettings.map((setting) => (
              <div
                key={setting.id}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center">
                    <setting.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {setting.label}
                  </span>
                </div>
                <Switch checked={setting.enabled} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-purple-600">156</p>
              <p className="text-xs text-gray-600 mt-1">Transações</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-green-600">R$ 2.5k</p>
              <p className="text-xs text-gray-600 mt-1">Economizado</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-blue-600">3</p>
              <p className="text-xs text-gray-600 mt-1">Cartões</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu Sections */}
        {menuItems.map((section, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-gray-500 uppercase">
                {section.section}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {section.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-t first:border-t-0 border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* Account Info */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-gray-500 uppercase">
              Informações da Conta
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-4 h-4 text-gray-500" />
              <div className="flex-1">
                <p className="text-xs text-gray-500">E-mail</p>
                <p className="text-sm font-medium text-gray-900">maria.silva@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-4 h-4 text-gray-500" />
              <div className="flex-1">
                <p className="text-xs text-gray-500">Telefone</p>
                <p className="text-sm font-medium text-gray-900">+55 11 98765-4321</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Lock className="w-4 h-4 text-gray-500" />
              <div className="flex-1">
                <p className="text-xs text-gray-500">CPF</p>
                <p className="text-sm font-medium text-gray-900">•••.•••.•••-00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Version */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-500 mb-2">Clara Finance v2.5.0</p>
          <Button
            variant="outline"
            size="sm"
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair da Conta
          </Button>
        </div>
      </div>
    </div>
  );
}

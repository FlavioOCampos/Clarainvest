import { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Send, Sparkles, TrendingDown, AlertCircle, Lightbulb, Target } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  suggestions?: string[];
  insights?: {
    type: "warning" | "tip" | "goal";
    title: string;
    description: string;
    amount?: number;
  }[];
};

export default function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! 👋 Sou a Clara, sua assistente financeira com IA. Percebi que você está gastando mais do que ganha este mês. Posso te ajudar a melhorar sua situação financeira?",
      sender: "ai",
      timestamp: new Date(),
      suggestions: ["Sim, preciso de ajuda!", "Mostre minha análise", "Como economizar?"],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aiResponses: Record<string, Message> = {
    "Sim, preciso de ajuda!": {
      id: 0,
      text: "Entendo! Vamos analisar sua situação juntos. Vi que você gastou R$ 4.125,30 este mês, mas sua receita foi de R$ 5.000. Você está no limite. Vou te mostrar onde você pode economizar:",
      sender: "ai",
      timestamp: new Date(),
      insights: [
        {
          type: "warning",
          title: "Gastos com Alimentação",
          description: "Você gastou R$ 1.250 em alimentação. Isso representa 25% da sua renda.",
          amount: 1250,
        },
        {
          type: "tip",
          title: "Oportunidade de Economia",
          description: "Se reduzir deliveries e fazer compras no mercado, pode economizar até R$ 400/mês",
          amount: 400,
        },
        {
          type: "goal",
          title: "Meta Sugerida",
          description: "Limite de R$ 850 para alimentação (17% da renda)",
          amount: 850,
        },
      ],
      suggestions: ["Como reduzir alimentação?", "Ver outros gastos", "Criar plano de economia"],
    },
    "Mostre minha análise": {
      id: 0,
      text: "Aqui está um resumo da sua situação financeira atual:",
      sender: "ai",
      timestamp: new Date(),
      insights: [
        {
          type: "warning",
          title: "Despesas altas",
          description: "Você está gastando 82.5% da sua renda mensal",
          amount: 4125.30,
        },
        {
          type: "warning",
          title: "Cartão de crédito",
          description: "28% do limite utilizado - fatura de R$ 4.250",
          amount: 4250,
        },
        {
          type: "tip",
          title: "Economia possível",
          description: "Identifiquei R$ 850/mês em gastos que podem ser reduzidos",
          amount: 850,
        },
      ],
      suggestions: ["Como economizar R$ 850?", "Ver gastos desnecessários", "Criar orçamento"],
    },
    "Como economizar?": {
      id: 0,
      text: "Analisando seus gastos dos últimos 30 dias, encontrei várias oportunidades de economia:",
      sender: "ai",
      timestamp: new Date(),
      insights: [
        {
          type: "tip",
          title: "Deliveries e Restaurantes",
          description: "Você pediu delivery 18 vezes (R$ 420). Reduza para 8x/mês = economize R$ 210",
          amount: 210,
        },
        {
          type: "tip",
          title: "Transporte",
          description: "Gastos com Uber: R$ 380. Use transporte público 3x/semana = economize R$ 180",
          amount: 180,
        },
        {
          type: "tip",
          title: "Assinaturas",
          description: "3 streamings ativos (R$ 120). Cancele 1 que você não usa = economize R$ 40",
          amount: 40,
        },
        {
          type: "goal",
          title: "Total de Economia",
          description: "Aplicando essas mudanças, você economiza R$ 430/mês",
          amount: 430,
        },
      ],
      suggestions: ["Aceitar sugestões", "Ver plano detalhado", "Quero mais dicas"],
    },
    "Como reduzir alimentação?": {
      id: 0,
      text: "Ótima pergunta! Aqui está um plano prático para reduzir seus gastos com alimentação:",
      sender: "ai",
      timestamp: new Date(),
      insights: [
        {
          type: "tip",
          title: "Planeje suas refeições",
          description: "Faça um cardápio semanal e compre apenas o necessário. Economia: R$ 150/mês",
          amount: 150,
        },
        {
          type: "tip",
          title: "Reduza deliveries",
          description: "De 18 para 8 pedidos por mês. Economia: R$ 210/mês",
          amount: 210,
        },
        {
          type: "tip",
          title: "Leve marmita",
          description: "3x por semana para o trabalho. Economia: R$ 160/mês",
          amount: 160,
        },
        {
          type: "goal",
          title: "Nova meta: R$ 850/mês",
          description: "Com essas mudanças, você economiza R$ 400 em alimentação",
          amount: 400,
        },
      ],
      suggestions: ["Ativar alertas de gastos", "Criar lista de compras", "Ver receitas econômicas"],
    },
    "Ver outros gastos": {
      id: 0,
      text: "Vou analisar todas as suas categorias de gastos:",
      sender: "ai",
      timestamp: new Date(),
      insights: [
        {
          type: "warning",
          title: "Entretenimento - R$ 420",
          description: "Netflix, Prime, Spotify, Disney+. Você usa todos? Economia potencial: R$ 80",
          amount: 420,
        },
        {
          type: "warning",
          title: "Transporte - R$ 680",
          description: "Muito alto! Considere usar metrô/ônibus. Economia: R$ 250",
          amount: 680,
        },
        {
          type: "tip",
          title: "Compras - R$ 450",
          description: "Compras por impulso? Espere 24h antes de comprar. Economia: R$ 120",
          amount: 450,
        },
      ],
      suggestions: ["Criar orçamento", "Ver plano completo", "Configurar alertas"],
    },
    "Criar plano de economia": {
      id: 0,
      text: "Perfeito! Vou criar um plano personalizado de economia para você. Com base na sua situação, podemos economizar R$ 850/mês:",
      sender: "ai",
      timestamp: new Date(),
      insights: [
        {
          type: "goal",
          title: "Meta Mês 1",
          description: "Reduzir alimentação e deliveries - Economia: R$ 400",
          amount: 400,
        },
        {
          type: "goal",
          title: "Meta Mês 1",
          description: "Otimizar transporte - Economia: R$ 250",
          amount: 250,
        },
        {
          type: "goal",
          title: "Meta Mês 1",
          description: "Cancelar assinaturas não usadas - Economia: R$ 80",
          amount: 80,
        },
        {
          type: "goal",
          title: "Meta Mês 1",
          description: "Reduzir compras por impulso - Economia: R$ 120",
          amount: 120,
        },
      ],
      suggestions: ["Ativar plano agora", "Configurar lembretes", "Ver metas semanais"],
    },
    "Aceitar sugestões": {
      id: 0,
      text: "Excelente decisão! 🎉 Ativei seu plano de economia personalizado. Vou te enviar alertas quando você estiver perto dos limites. Com essas mudanças, em 6 meses você terá economizado R$ 2.580!",
      sender: "ai",
      timestamp: new Date(),
      insights: [
        {
          type: "goal",
          title: "Plano Ativado",
          description: "Economia mensal: R$ 430",
          amount: 430,
        },
        {
          type: "goal",
          title: "Economia em 6 meses",
          description: "Total acumulado: R$ 2.580",
          amount: 2580,
        },
        {
          type: "tip",
          title: "Próximos passos",
          description: "Vou monitorar seus gastos diariamente e te avisar sobre oportunidades de economia",
        },
      ],
      suggestions: ["Ver minha evolução", "Ajustar metas", "Começar desafio"],
    },
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: suggestion,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI typing
    setTimeout(() => {
      const aiResponse = aiResponses[suggestion] || {
        id: messages.length + 2,
        text: "Entendo! Deixe me pensar na melhor forma de te ajudar com isso...",
        sender: "ai" as const,
        timestamp: new Date(),
        suggestions: ["Ver análise completa", "Criar orçamento", "Voltar ao início"],
      };

      aiResponse.id = messages.length + 2;
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: "Obrigada por compartilhar! Estou analisando sua situação e vou te dar sugestões personalizadas em instantes...",
        sender: "ai",
        timestamp: new Date(),
        suggestions: ["Ver análise", "Preciso de ajuda urgente", "Mostrar economia"],
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertCircle className="w-4 h-4" />;
      case "tip":
        return <Lightbulb className="w-4 h-4" />;
      case "goal":
        return <Target className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-red-50 border-red-200 text-red-700";
      case "tip":
        return "bg-blue-50 border-blue-200 text-blue-700";
      case "goal":
        return "bg-green-50 border-green-200 text-green-700";
      default:
        return "bg-purple-50 border-purple-200 text-purple-700";
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Clara IA</h1>
            <p className="text-xs text-purple-100">Assistente Financeira</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            {message.sender === "ai" && (
              <Avatar className="w-8 h-8 mt-1 flex-shrink-0">
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-800 text-white text-xs">
                  <Sparkles className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            )}

            <div className={`flex-1 ${message.sender === "user" ? "flex justify-end" : ""}`}>
              <div
                className={`inline-block max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-white border border-gray-200 text-gray-900"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>

              {/* Insights */}
              {message.insights && (
                <div className="mt-3 space-y-2">
                  {message.insights.map((insight, idx) => (
                    <Card
                      key={idx}
                      className={`p-3 border ${getInsightColor(insight.type)}`}
                    >
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5">{getInsightIcon(insight.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-semibold text-sm">{insight.title}</p>
                            {insight.amount && (
                              <Badge
                                variant="secondary"
                                className={`text-xs ${
                                  insight.type === "warning"
                                    ? "bg-red-100 text-red-700"
                                    : insight.type === "tip"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-green-100 text-green-700"
                                }`}
                              >
                                R$ {insight.amount.toFixed(2)}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs mt-1 opacity-90">{insight.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Suggestions */}
              {message.suggestions && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {message.suggestions.map((suggestion, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="bg-white border-purple-200 text-purple-700 hover:bg-purple-50 text-xs"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}

              <p className="text-xs text-gray-400 mt-1 px-1">
                {message.timestamp.toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            {message.sender === "user" && (
              <Avatar className="w-8 h-8 mt-1 flex-shrink-0">
                <AvatarFallback className="bg-purple-100 text-purple-700 text-xs">
                  MS
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-800 text-white text-xs">
                <Sparkles className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="bg-purple-600 hover:bg-purple-700 flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

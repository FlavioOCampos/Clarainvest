# Clara Finance - Estrutura Macro da Solução

## 📋 Visão Geral

**Clara Finance** é um aplicativo financeiro mobile-first com IA integrada, desenvolvido em React + TypeScript, otimizado para dispositivos iPhone com foco em ajudar usuários a gerenciar suas finanças pessoais e superar dificuldades financeiras.

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                      │
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌──────────────┐      │
│  │   Pages    │  │ Components │  │   Routing    │      │
│  │            │  │            │  │              │      │
│  │ - Dashboard│  │ - Layout   │  │ React Router │      │
│  │ - Chat IA  │  │ - UI Comp. │  │   (v7.x)    │      │
│  │ - Payments │  │ - Cards    │  │              │      │
│  │ - Analytics│  │ - Forms    │  │              │      │
│  └────────────┘  └────────────┘  └──────────────┘      │
│                                                          │
│  ┌────────────────────────────────────────────┐        │
│  │          State Management (React)           │        │
│  │  - useState, useEffect                      │        │
│  │  - React Router Navigation                  │        │
│  └────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   STYLING LAYER                          │
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌──────────────┐      │
│  │ Tailwind   │  │   Shadcn   │  │    Theme     │      │
│  │  CSS v4    │  │   UI Kit   │  │   (Teal)     │      │
│  └────────────┘  └────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    DATA LAYER                            │
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌──────────────┐      │
│  │   Recharts │  │  Mock Data │  │ Local Storage│      │
│  │  (Gráficos)│  │(Simulação) │  │   (Futuro)   │      │
│  └────────────┘  └────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Estrutura de Pastas

```
/workspaces/default/code/
│
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizáveis
│   │   │   ├── ui/              # Componentes Shadcn UI
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   └── ... (40+ componentes)
│   │   │   │
│   │   │   ├── Layout.tsx       # Layout principal com navegação
│   │   │   └── figma/           # Componentes específicos Figma
│   │   │       └── ImageWithFallback.tsx
│   │   │
│   │   ├── pages/               # Páginas da aplicação
│   │   │   ├── Dashboard.tsx    # 🏠 Tela inicial
│   │   │   ├── ChatAI.tsx       # 🤖 Chat IA Financeira
│   │   │   ├── Transactions.tsx # 📊 Lista de transações
│   │   │   ├── Analytics.tsx    # 📈 Gráficos e análises
│   │   │   ├── Profile.tsx      # 👤 Perfil e configurações
│   │   │   ├── Payment.tsx      # 💸 Tela de pagamento
│   │   │   └── Receive.tsx      # 💰 Tela de recebimento
│   │   │
│   │   ├── App.tsx              # Componente raiz
│   │   └── routes.tsx           # Configuração de rotas
│   │
│   ├── styles/
│   │   ├── theme.css            # Temas e variáveis CSS
│   │   ├── fonts.css            # Importação de fontes
│   │   └── globals.css          # Estilos globais
│   │
│   └── imports/                 # Assets importados (imagens, SVGs)
│
├── package.json                 # Dependências do projeto
├── tsconfig.json                # Configuração TypeScript
├── vite.config.ts               # Configuração Vite
├── tailwind.config.js           # Configuração Tailwind (v4)
└── ARCHITECTURE.md              # Este documento
```

---

## 🎯 Funcionalidades Principais

### 1️⃣ Dashboard (Home)

**Arquivo:** `src/app/pages/Dashboard.tsx`

**Funcionalidades:**

- Exibição de saldo disponível com toggle show/hide
- Resumo mensal (receitas vs despesas)
- Informações do cartão de crédito com barra de progresso
- Alerta da IA sobre dificuldades financeiras
- Transações recentes (últimas 4)
- Ações rápidas (Transferir, Receber, Pagar)

**Fluxo de Dados:**

```
Usuario → Dashboard → Exibe dados mock
                   → Detecta saldo < gastos
                   → Exibe alerta IA
                   → Navega para /chat, /payment, /receive
```

---

### 2️⃣ Chat com IA Financeira

**Arquivo:** `src/app/pages/ChatAI.tsx`

**Funcionalidades:**

- Conversa inteligente com assistente IA
- Análise automática de padrões de gastos
- Sugestões personalizadas de economia
- Identificação de dificuldades financeiras
- Planos de ação com metas
- Interface de chat em tempo real

**Cenários Implementados:**

#### 🚨 Cenário de Dificuldade Financeira:

```
Situação: Usuário gastando 82.5% da renda
         └─ Alimentação: R$ 1.250 (28% da renda)
         └─ Total despesas: R$ 4.125,30
         └─ Receitas: R$ 5.000

IA Detecta:
  ├─ Gastos excessivos com alimentação
  ├─ 18 deliveries no mês
  ├─ Transporte alto (Uber frequente)
  └─ Assinaturas não utilizadas

IA Sugere:
  ├─ Reduzir deliveries: 18 → 8/mês = -R$ 210
  ├─ Usar transporte público 3x/semana = -R$ 180
  ├─ Cancelar 1 streaming = -R$ 40
  ├─ Planejar refeições = -R$ 150
  └─ TOTAL ECONOMIA: R$ 850/mês
      └─ Em 6 meses: R$ 2.580 economizados
```

**Fluxo de Conversa:**

```
IA: Alerta de gastos altos
  ↓
Usuário: "Sim, preciso de ajuda!"
  ↓
IA: Análise detalhada por categoria
  ↓
Usuário: "Como economizar?"
  ↓
IA: Plano de economia personalizado
  ↓
Usuário: "Aceitar sugestões"
  ↓
IA: Plano ativado + Monitoramento
```

---

### 3️⃣ Transações

**Arquivo:** `src/app/pages/Transactions.tsx`

**Funcionalidades:**

- Lista completa de todas as transações
- Filtros (Todas, Despesas, Receitas)
- Busca por nome ou categoria
- Cards com resumo (Total, Receitas, Despesas)
- Categorização automática com ícones
- Status das transações (completo, pendente)

**Dados Exibidos:**

- Nome da transação
- Valor (positivo/negativo)
- Categoria
- Data e hora
- Ícone emoji identificador
- Status (badge)

---

### 4️⃣ Análises e Gráficos

**Arquivo:** `src/app/pages/Analytics.tsx`

**Funcionalidades:**

- 3 tipos de visualização (tabs):
  - 📊 Gastos por categoria (Gráfico de Pizza + Lista)
  - 📈 Receitas vs Despesas mensais (Gráfico de Barras)
  - 📉 Tendência semanal (Gráfico de Linha)
- Cards com métricas principais
- Insights da IA personalizados
- Alertas de gastos excessivos

**Bibliotecas:**

- Recharts para gráficos interativos

---

### 5️⃣ Pagamentos

**Arquivo:** `src/app/pages/Payment.tsx`

**Funcionalidades:**

- 3 métodos de pagamento:
  - PIX (instantâneo)
  - TED/DOC (com agendamento)
  - Boleto (código de barras)
- Contatos frequentes para PIX rápido
- Validação de saldo
- Formulário completo (destinatário, valor, descrição)
- Tela de confirmação com sucesso
- Resumo da transação

**Fluxo:**

```
Selecionar método
  ↓
Preencher dados
  ↓
Validar saldo
  ↓
Confirmar
  ↓
Tela de sucesso
  ↓
Compartilhar comprovante
```

---

### 6️⃣ Recebimentos

**Arquivo:** `src/app/pages/Receive.tsx`

**Funcionalidades:**

- Geração de QR Code PIX
- 4 chaves PIX cadastradas (CPF, Email, Telefone, Aleatória)
- Copiar chave com um clique
- Valor opcional no QR Code
- Descrição personalizada
- Compartilhar QR Code
- Instruções de uso

---

### 7️⃣ Perfil e Configurações

**Arquivo:** `src/app/pages/Profile.tsx`

**Estrutura de Seções:**

#### 📝 Informações Pessoais

- Nome completo
- E-mail
- Telefone
- CPF (bloqueado)
- Endereço
- Botão salvar

#### 💳 Meus Cartões

- Lista de 3 cartões (Crédito, Débito, Virtual)
- Visual do cartão com gradiente
- Toggle para mostrar/ocultar detalhes
- Status ativo/inativo
- Botão gerenciar

#### 🔒 Segurança

- Autenticação de dois fatores (2FA)
- Verificação biométrica
- Alertas de login
- Alterar senha
- Formulário de senha completo

#### 🔔 Notificações

- 5 tipos de notificações:
  - Transações acima de R$ 500
  - Lembretes de vencimento
  - Ofertas e promoções
  - Atualizações de saldo diário
  - Relatórios mensais
- Toggle individual para cada

#### 🎨 Aparência

- Tema escuro/claro
- Seleção de idioma (PT, EN, ES)
- Seleção de moeda (BRL, USD, EUR)
- Seletor de cores do tema (5 opções)

#### ⚙️ Configurações

- Backup de dados
- Exportar relatórios
- Privacidade
- Termos de uso
- Zona de perigo (desativar/excluir conta)

---

## 🎨 Design System

### Paleta de Cores Principal

```css
/* Verde Petróleo (Teal) - Cor principal */
--teal-50: #f0fdfa --teal-100: #ccfbf1 --teal-200: #99f6e4
  --teal-300: #5eead4 --teal-400: #2dd4bf --teal-500: #14b8a6
  --teal-600: #0d9488 /* Cor primária do app */
  --teal-700: #0f766e --teal-800: #115e59 --teal-900: #134e4a
  /* Cores Complementares */ --green: #10b981 (Receitas)
  --red: #ef4444 (Despesas) --blue: #3b82f6 (Info)
  --orange: #f59e0b (Alertas) --gray: #6b7280 (Texto secundário);
```

### Componentes UI (Shadcn)

Total: 40+ componentes reutilizáveis

- Formulários: Input, Label, Textarea, Select, Switch
- Navegação: Button, Tabs, Navigation Menu
- Feedback: Badge, Alert, Toast, Progress
- Layout: Card, Separator, Scroll Area
- Overlay: Dialog, Sheet, Popover, Tooltip

---

## 🔄 Fluxos de Navegação

### Navegação Principal (Bottom Nav)

```
┌─────┬─────┬─────┬─────┬─────┐
│  🏠 │ 🤖  │ 📊  │ 📈  │ 👤  │
│Início│ IA │Gastos│Análises│Perfil│
└─────┴─────┴─────┴─────┴─────┘
```

### Fluxo de Pagamento

```
Dashboard → [Botão Pagar/Transferir]
    ↓
Payment Page
    ├─ Selecionar método (PIX/TED/Boleto)
    ├─ Preencher dados
    ├─ Validar saldo
    └─ Confirmar
        ↓
    Tela de Sucesso
        └─ Voltar ao Dashboard
```

### Fluxo de Ajuda com IA

```
Dashboard → [Alerta IA]
    ↓
Chat IA
    ├─ IA detecta dificuldade
    ├─ Usuário aceita ajuda
    ├─ IA analisa gastos
    ├─ IA sugere plano
    ├─ Usuário aceita plano
    └─ IA monitora progresso
```

---

## 📊 Estrutura de Dados

### Tipos TypeScript Principais

```typescript
// Transação
type Transaction = {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
  time: string;
  type: "income" | "expense";
  status: "completed" | "pending" | "cancelled";
  icon: string;
};

// Mensagem do Chat
type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  suggestions?: string[];
  insights?: Insight[];
};

// Insight da IA
type Insight = {
  type: "warning" | "tip" | "goal";
  title: string;
  description: string;
  amount?: number;
};

// Cartão
type Card = {
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
```

---

## 🛠️ Stack Tecnológico

### Frontend

- **React** 18.3.1 - Biblioteca UI
- **TypeScript** - Tipagem estática
- **React Router** 7.13.0 - Roteamento
- **Vite** 6.3.5 - Build tool

### UI/Styling

- **Tailwind CSS** 4.1.12 - Framework CSS
- **Shadcn UI** - Componentes reutilizáveis
- **Radix UI** - Primitivos acessíveis
- **Lucide React** - Biblioteca de ícones

### Gráficos e Visualização

- **Recharts** 2.15.2 - Biblioteca de gráficos
- **Motion** 12.23.24 - Animações

### Formulários

- **React Hook Form** 7.55.0 - Gerenciamento de forms

### Utilitários

- **date-fns** 3.6.0 - Manipulação de datas
- **clsx** / **tailwind-merge** - Classes condicionais

---

## 📱 Otimizações Mobile (iPhone)

### CSS Customizado

```css
/* Safe area para notch */
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

/* Smooth scrolling */
-webkit-overflow-scrolling: touch;

/* Remove tap highlight */
-webkit-tap-highlight-color: transparent;

/* Animações personalizadas */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
```

### Viewport

- Max-width: 430px (tamanho iPhone)
- Design mobile-first
- Navigation bar escondida em telas de pagamento

---

## 🔐 Segurança (Simulado)

### Dados Sensíveis

- Cartões com números parcialmente ocultos
- Toggle show/hide para saldo
- CPF mascarado
- Senhas em input type="password"

### Validações

- Saldo insuficiente
- Campos obrigatórios
- Formato de dados

---

## 🚀 Funcionalidades Futuras

### Backend (Não implementado)

- [ ] API REST para transações reais
- [ ] Autenticação JWT
- [ ] Banco de dados (PostgreSQL)
- [ ] Integração com APIs bancárias
- [ ] IA real (OpenAI/Anthropic)

### Features Adicionais

- [ ] Notificações push
- [ ] Exportar PDF de relatórios
- [ ] Metas de economia com gamificação
- [ ] Compartilhamento de despesas
- [ ] Investimentos
- [ ] Cashback

---

## 📈 Métricas de Sucesso

### KPIs Simulados

- Economia sugerida pela IA: R$ 850/mês
- Taxa de aceitação do plano: 95%
- Redução de gastos: 28% → 17% (alimentação)
- Satisfação do usuário: ⭐⭐⭐⭐⭐

---

## 🎓 Como Usar

### Instalação

```bash
cd /workspaces/default/code
pnpm install
```

### Desenvolvimento

```bash
# Vite dev server já está rodando
# Acesse via preview no navegador
```

### Build

```bash
# NÃO executar - ambiente customizado
# pnpm build (desabilitado)
```

---

## 📞 Contato e Suporte

**Projeto:** Clara Finance
**Versão:** 2.5.0
**Última Atualização:** Maio 2026

---

**Desenvolvido com 💚 usando React + Tailwind + IA**
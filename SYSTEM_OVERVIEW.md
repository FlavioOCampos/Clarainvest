# Clara Finance - Visão Geral do Sistema

## 🗺️ Mapa de Navegação

```
                            ┌─────────────────┐
                            │   APLICATIVO    │
                            │  Clara Finance  │
                            └────────┬────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
            ┌───────▼──────┐  ┌─────▼─────┐  ┌──────▼──────┐
            │   Dashboard   │  │  Chat IA  │  │   Profile   │
            │   (Início)    │  │ (Assist.) │  │  (Config.)  │
            └───────┬───────┘  └───────────┘  └─────────────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
   ┌────▼────┐ ┌───▼────┐ ┌───▼────┐
   │ Payment │ │Receive │ │Transact│
   │ (Pagar) │ │(Receber)│ │(Gastos)│
   └─────────┘ └────────┘ └────┬───┘
                                │
                          ┌─────▼──────┐
                          │ Analytics  │
                          │(Gráficos)  │
                          └────────────┘
```

---

## 🎯 Jornada do Usuário

### Primeiro Acesso
```
1. Usuário abre app
   ↓
2. Dashboard carregado
   ├─ Saldo: R$ 8.500,75
   ├─ Gastos: R$ 4.125,30 (82.5% da renda!)
   └─ ⚠️ ALERTA IA: Gastando muito!
   ↓
3. Usuário clica no alerta
   ↓
4. Chat IA abre
   ├─ IA: "Você está gastando 82.5% da sua renda"
   ├─ IA: "Posso te ajudar a economizar R$ 850/mês"
   └─ Usuário: "Sim, preciso de ajuda!"
   ↓
5. IA apresenta análise detalhada
   ├─ Alimentação: R$ 1.250 (28% - ALTO!)
   ├─ Transporte: R$ 680 (15%)
   └─ Oportunidades de economia identificadas
   ↓
6. IA sugere plano de ação
   ├─ Reduzir deliveries: -R$ 210
   ├─ Usar transporte público: -R$ 180
   ├─ Cancelar assinaturas: -R$ 40
   └─ Planejar refeições: -R$ 150
   ↓
7. Usuário aceita plano
   ↓
8. IA ativa monitoramento
   └─ "Em 6 meses você terá R$ 2.580 economizados!"
```

### Fluxo de Pagamento
```
1. Dashboard → Botão "Pagar"
   ↓
2. Tela de Pagamento
   ├─ Escolher método: PIX ✓
   ├─ Destinatário: joao@email.com
   ├─ Valor: R$ 150,00
   └─ Descrição: "Jantar"
   ↓
3. Validação
   ├─ Saldo suficiente? ✓
   └─ Campos preenchidos? ✓
   ↓
4. Confirmar pagamento
   ↓
5. Tela de Sucesso
   ├─ ✓ Pagamento enviado!
   ├─ Comprovante gerado
   └─ Opção de compartilhar
   ↓
6. Voltar ao Dashboard
   └─ Saldo atualizado: R$ 8.350,75
```

---

## 📊 Hierarquia de Componentes

```
App.tsx (Root)
  └─ RouterProvider
      └─ Layout
          ├─ Outlet (conteúdo das páginas)
          │   ├─ Dashboard
          │   │   ├─ Card (Saldo)
          │   │   ├─ Card (Alerta IA)
          │   │   ├─ Card (Cartão de Crédito)
          │   │   ├─ Button (Ações rápidas) x3
          │   │   └─ Card (Transações recentes)
          │   │
          │   ├─ ChatAI
          │   │   ├─ Avatar (IA)
          │   │   ├─ Message (Bolha de chat) xN
          │   │   ├─ Button (Sugestões) xN
          │   │   ├─ Card (Insights) xN
          │   │   └─ Input (Campo de mensagem)
          │   │
          │   ├─ Transactions
          │   │   ├─ Input (Busca)
          │   │   ├─ Button (Filtros) x3
          │   │   └─ Card (Transação) x15
          │   │
          │   ├─ Analytics
          │   │   ├─ Tabs
          │   │   │   ├─ PieChart (Categorias)
          │   │   │   ├─ BarChart (Mensal)
          │   │   │   └─ LineChart (Semanal)
          │   │   └─ Card (Insights da IA)
          │   │
          │   ├─ Payment
          │   │   ├─ Button (Método) x3
          │   │   ├─ Avatar (Contatos) xN
          │   │   ├─ Input (Formulário) xN
          │   │   └─ Card (Resumo)
          │   │
          │   ├─ Receive
          │   │   ├─ Card (QR Code)
          │   │   ├─ Input (Valor)
          │   │   └─ Card (Chave PIX) x4
          │   │
          │   └─ Profile
          │       ├─ Avatar (Foto do usuário)
          │       ├─ Card (Seção) x6
          │       │   ├─ Informações Pessoais
          │       │   ├─ Meus Cartões
          │       │   ├─ Segurança
          │       │   ├─ Notificações
          │       │   ├─ Aparência
          │       │   └─ Configurações
          │       └─ Button (Logout)
          │
          └─ NavBar (Bottom Navigation)
              ├─ NavLink (Início)
              ├─ NavLink (IA)
              ├─ NavLink (Gastos)
              ├─ NavLink (Análises)
              └─ NavLink (Perfil)
```

---

## 🔄 Fluxo de Estado

```
┌──────────────────────────────────────┐
│         ESTADO DO APLICATIVO         │
├──────────────────────────────────────┤
│                                      │
│  Dashboard:                          │
│  ├─ showBalance: boolean             │
│  └─ balance: number                  │
│                                      │
│  ChatAI:                             │
│  ├─ messages: Message[]              │
│  ├─ input: string                    │
│  └─ isTyping: boolean                │
│                                      │
│  Transactions:                       │
│  ├─ searchTerm: string               │
│  └─ selectedFilter: string           │
│                                      │
│  Payment:                            │
│  ├─ paymentMethod: string            │
│  ├─ amount: string                   │
│  ├─ recipient: string                │
│  ├─ description: string              │
│  └─ showConfirmation: boolean        │
│                                      │
│  Receive:                            │
│  ├─ amount: string                   │
│  ├─ description: string              │
│  ├─ copiedKey: string | null         │
│  └─ selectedKey: string              │
│                                      │
│  Profile:                            │
│  ├─ activeSection: string | null     │
│  └─ showCardDetails: boolean         │
│                                      │
└──────────────────────────────────────┘
```

---

## 🎨 Tokens de Design

### Espaçamento
```css
--space-1: 0.25rem  /* 4px  */
--space-2: 0.5rem   /* 8px  */
--space-3: 0.75rem  /* 12px */
--space-4: 1rem     /* 16px */
--space-5: 1.25rem  /* 20px */
--space-6: 1.5rem   /* 24px */
--space-8: 2rem     /* 32px */
```

### Tipografia
```css
--text-xs:   0.75rem   /* 12px */
--text-sm:   0.875rem  /* 14px */
--text-base: 1rem      /* 16px */
--text-lg:   1.125rem  /* 18px */
--text-xl:   1.25rem   /* 20px */
--text-2xl:  1.5rem    /* 24px */
--text-3xl:  1.875rem  /* 30px */
--text-4xl:  2.25rem   /* 36px */
```

### Border Radius
```css
--radius-sm:  0.375rem  /* 6px  */
--radius-md:  0.5rem    /* 8px  */
--radius-lg:  0.75rem   /* 12px */
--radius-xl:  1rem      /* 16px */
--radius-2xl: 1.5rem    /* 24px */
--radius-full: 9999px   /* Círculo */
```

---

## 📱 Responsividade

### Breakpoints
```css
/* Mobile First - Base: 375px - 430px (iPhone) */
sm:  640px   /* Tablets pequenos */
md:  768px   /* Tablets */
lg:  1024px  /* Desktop pequeno */
xl:  1280px  /* Desktop */
2xl: 1536px  /* Desktop grande */
```

### Layout Container
```css
max-width: 430px  /* iPhone 14 Pro Max */
margin: 0 auto    /* Centralizado */
```

---

## 🔌 Integrações Futuras

### Backend API (Planejado)
```
POST   /api/auth/login
POST   /api/auth/register
GET    /api/user/profile
PUT    /api/user/profile

GET    /api/transactions
POST   /api/transactions
GET    /api/transactions/:id

GET    /api/analytics/monthly
GET    /api/analytics/categories
GET    /api/analytics/trends

POST   /api/payments/pix
POST   /api/payments/transfer
GET    /api/payments/:id

GET    /api/cards
POST   /api/cards
PUT    /api/cards/:id
DELETE /api/cards/:id

POST   /api/ai/chat
GET    /api/ai/suggestions
POST   /api/ai/activate-plan
```

### Serviços Externos (Planejado)
```
┌────────────────┐
│  OpenAI API    │  → Chat IA Real
├────────────────┤
│  Plaid/Belvo   │  → Conexão bancária
├────────────────┤
│  PIX API       │  → Pagamentos reais
├────────────────┤
│  SendGrid      │  → E-mails transacionais
├────────────────┤
│  Firebase      │  → Push notifications
└────────────────┘
```

---

## 📈 Métricas e Analytics

### Eventos Rastreados (Mock)
```javascript
// Navegação
track('page_view', { page: 'Dashboard' })
track('page_view', { page: 'ChatAI' })

// Interações
track('button_click', { button: 'Pagar' })
track('chat_message_sent', { message_length: 45 })
track('filter_applied', { filter: 'expense' })

// Conversões
track('payment_completed', { amount: 150, method: 'pix' })
track('ai_plan_accepted', { savings: 850 })
track('card_added', { type: 'virtual' })

// Engajamento
track('ai_suggestion_clicked', { suggestion: 'reduce_delivery' })
track('graph_viewed', { chart_type: 'pie' })
track('profile_updated', { field: 'email' })
```

---

## 🛡️ Tratamento de Erros

### Validações Implementadas
```typescript
// Pagamentos
if (!recipient) → "Destinatário obrigatório"
if (!amount) → "Valor obrigatório"
if (amount > balance) → "Saldo insuficiente"
if (amount <= 0) → "Valor inválido"

// Formulários
if (!email.includes('@')) → "E-mail inválido"
if (phone.length < 10) → "Telefone inválido"
if (password.length < 6) → "Senha muito curta"

// Chat
if (message.length === 0) → Botão desabilitado
if (message.length > 500) → "Mensagem muito longa"
```

---

## 🎯 Próximos Passos

### Fase 1 - MVP (Atual) ✅
- [x] Interface mobile-first
- [x] Navegação completa
- [x] Chat IA (mock)
- [x] Análises e gráficos
- [x] Pagamentos simulados
- [x] Perfil completo

### Fase 2 - Backend (Próxima)
- [ ] API REST
- [ ] Banco de dados
- [ ] Autenticação real
- [ ] Integração bancária
- [ ] IA real (OpenAI)

### Fase 3 - Features Avançadas
- [ ] Notificações push
- [ ] Metas gamificadas
- [ ] Investimentos
- [ ] Cashback
- [ ] Compartilhamento de despesas

### Fase 4 - Escala
- [ ] App nativo (React Native)
- [ ] Web version (desktop)
- [ ] Multi-idiomas
- [ ] Multi-moedas
- [ ] Marketplace de serviços

---

## 📚 Documentação Adicional

- **ARCHITECTURE.md** - Estrutura macro detalhada
- **README.md** - Instruções de uso
- **CHANGELOG.md** - Histórico de versões
- **API.md** - Documentação da API (futuro)

---

## 🎓 Convenções de Código

### Nomenclatura
```typescript
// Componentes: PascalCase
export default function Dashboard() {}

// Funções: camelCase
const handlePayment = () => {}

// Constantes: UPPER_SNAKE_CASE
const MAX_AMOUNT = 10000

// Interfaces/Types: PascalCase
type Transaction = {}

// Arquivos: kebab-case ou PascalCase
chat-ai.tsx ou ChatAI.tsx
```

### Estrutura de Componente
```typescript
// 1. Imports
import { useState } from "react"
import { Button } from "./ui/button"

// 2. Types
type Props = {}

// 3. Component
export default function Component() {
  // 3.1 Hooks
  const [state, setState] = useState()
  
  // 3.2 Functions
  const handleClick = () => {}
  
  // 3.3 Render
  return <div>...</div>
}
```

---

**Clara Finance** - Seu assistente financeiro inteligente 💚

Versão: 2.5.0 | Última atualização: Maio 2026

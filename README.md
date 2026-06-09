# 💚 Clara Finance - Assistente Financeiro com IA

> *Seu mentor financeiro pessoal no bolso*

![Version](https://img.shields.io/badge/version-2.5.0-teal)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.12-cyan)
![Status](https://img.shields.io/badge/status-MVP%20Completo-success)

---

## 📋 Sobre o Projeto

**Clara Finance** é um aplicativo financeiro mobile-first com Inteligência Artificial integrada, desenvolvido para ajudar brasileiros a superarem dificuldades financeiras, controlarem seus gastos e alcançarem metas de economia.

### ✨ Diferenciais

- 🤖 **IA Conversacional** - Assistente financeiro que entende e ajuda proativamente
- 🎯 **Detecção Automática** - Identifica problemas financeiros em tempo real
- 💡 **Planos Personalizados** - Sugestões práticas baseadas no seu perfil
- 📱 **Mobile-First** - Otimizado para iPhone com design moderno
- 📊 **Análises Visuais** - Gráficos interativos para entender seus gastos

---

Protótipo Navegável

Acesse o protótipo pelo link abaixo:

🔗 https://www.figma.com/make/H0coufTNUNYbstWJ30ViNt/clarainvest?p=f&t=1dkJSxjS0i8iSdKV-0

Repositório do Projeto

🔗 https://github.com/FlavioOCampos/Clarainvest

---

## 🚀 Funcionalidades Principais

### 1. 🏠 Dashboard Inteligente
- Visualização completa do saldo e gastos
- Alerta automático da IA sobre dificuldades financeiras
- Cartões de crédito/débito com limites
- Transações recentes
- Ações rápidas (PIX, transferências)

### 2. 🤖 Chat com IA Financeira
**Cenário de Uso:**
```
Usuário gastando 82.5% da renda
↓
IA detecta: R$ 1.250/mês em alimentação (28% - muito alto!)
↓
IA analisa: 18 deliveries, transporte caro, assinaturas não usadas
↓
IA sugere: Plano para economizar R$ 850/mês
↓
Em 6 meses: R$ 2.580 economizados!
```

### 3. 📊 Gestão de Transações
- Lista completa e categorizada
- Filtros inteligentes (Todas, Despesas, Receitas)
- Busca por nome ou categoria
- Cards com resumo financeiro

### 4. 📈 Análises e Gráficos
- **Gráfico de Pizza** - Gastos por categoria
- **Gráfico de Barras** - Receitas vs Despesas mensais
- **Gráfico de Linha** - Tendência semanal
- Insights personalizados da IA

### 5. 💸 Pagamentos
- **PIX** - Transferência instantânea
- **TED/DOC** - Com agendamento
- **Boleto** - Código de barras
- Contatos frequentes
- Validação de saldo

### 6. 💰 Recebimentos
- Geração de QR Code PIX
- 4 chaves cadastradas (CPF, Email, Telefone, Aleatória)
- Copiar e compartilhar facilmente
- Valor opcional no QR Code

### 7. 👤 Perfil Completo
6 seções organizadas:
- 📝 Informações Pessoais
- 💳 Meus Cartões (3 cartões)
- 🔒 Segurança (2FA, biometria, senha)
- 🔔 Notificações (5 tipos configuráveis)
- 🎨 Aparência (tema, idioma, cores)
- ⚙️ Configurações gerais

---

## 🏗️ Arquitetura

```
Clara Finance
├── Frontend (React + TypeScript)
│   ├── 7 Páginas principais
│   ├── 40+ Componentes UI (Shadcn)
│   ├── React Router v7
│   └── Tailwind CSS v4
│
├── Design System
│   ├── Cor principal: Verde Petróleo (Teal)
│   ├── Componentes reutilizáveis
│   └── Mobile-first (430px)
│
└── Dados (Mock)
    ├── Transações simuladas
    ├── IA conversacional
    └── Gráficos com Recharts
```

---

## 📁 Estrutura de Arquivos

```
/src/app/
├── pages/              # 7 páginas principais
│   ├── Dashboard.tsx
│   ├── ChatAI.tsx
│   ├── Transactions.tsx
│   ├── Analytics.tsx
│   ├── Profile.tsx
│   ├── Payment.tsx
│   └── Receive.tsx
│
├── components/
│   ├── Layout.tsx      # Layout com navegação
│   └── ui/             # 40+ componentes Shadcn
│
├── App.tsx             # Root component
└── routes.tsx          # Configuração de rotas
```

---

## 🛠️ Stack Tecnológico

### Core
- **React** 18.3.1
- **TypeScript** 5.x
- **React Router** 7.13.0
- **Vite** 6.3.5

### UI/Styling
- **Tailwind CSS** 4.1.12
- **Shadcn UI** - Componentes
- **Radix UI** - Primitivos
- **Lucide React** - Ícones

### Visualização
- **Recharts** 2.15.2 - Gráficos
- **Motion** 12.23.24 - Animações

### Formulários
- **React Hook Form** 7.55.0

---

## 📱 Design Mobile-First

### Otimizações iPhone
- ✅ Max-width: 430px (iPhone 14 Pro Max)
- ✅ Safe area para notch
- ✅ Bottom navigation sempre visível
- ✅ Touch-friendly (botões grandes)
- ✅ Smooth scrolling
- ✅ Animações suaves

### Paleta de Cores
```css
Cor Principal: Verde Petróleo (Teal)
├─ teal-600: #0d9488  /* Principal */
├─ teal-700: #0f766e  /* Hover */
└─ teal-800: #115e59  /* Active */

Complementares:
├─ green-600: #10b981  /* Receitas */
├─ red-600: #ef4444    /* Despesas */
└─ blue-600: #3b82f6   /* Info */
```

---

## 🎯 Navegação

### Bottom Navigation (5 abas)
```
┌─────┬─────┬─────┬─────┬─────┐
│  🏠 │ 🤖  │ 📊  │ 📈  │ 👤  │
│     │     │     │     │     │
│Início│ IA │Gastos│Análises│Perfil│
└─────┴─────┴─────┴─────┴─────┘
```

### Rotas
- `/` - Dashboard
- `/chat` - Chat IA
- `/transactions` - Transações
- `/analytics` - Análises
- `/profile` - Perfil
- `/payment` - Pagamento
- `/receive` - Recebimento

---

## 💡 Como Funciona a IA

### Análise Automática
1. **Detecção de Padrões**
   - Analisa gastos vs receitas
   - Identifica categorias excessivas
   - Detecta comportamentos de risco

2. **Sugestões Personalizadas**
   - Planos baseados no seu perfil
   - Metas realistas e atingíveis
   - Acompanhamento contínuo

3. **Cenários Implementados**
   - Dificuldade financeira (82.5% da renda gasta)
   - Alimentação excessiva (28%)
   - Deliveries frequentes (18x/mês)
   - Transporte alto (Uber diário)

### Economia Gerada
```
Plano da IA:
├─ Reduzir deliveries: -R$ 210/mês
├─ Transporte público: -R$ 180/mês
├─ Cancelar streamings: -R$ 80/mês
└─ Planejar refeições: -R$ 150/mês

Total: R$ 850/mês = R$ 10.200/ano
```

---

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| Páginas | 7 |
| Componentes UI | 40+ |
| Rotas | 7 |
| Linhas de Código | ~5.000 |
| Funcionalidades | 25+ |
| Dependências | 60+ |

---

## 📚 Documentação

Este projeto inclui documentação completa:

1. **[ARCHITECTURE.md](./ARCHITECTURE.md)** 
   - Estrutura macro detalhada
   - Arquitetura do sistema
   - Stack tecnológico
   - Tipos TypeScript

2. **[SYSTEM_OVERVIEW.md](./SYSTEM_OVERVIEW.md)**
   - Mapa de navegação
   - Jornada do usuário
   - Hierarquia de componentes
   - Fluxo de estado

3. **[EXECUTIVE_SUMMARY.md](./EXECUTIVE_SUMMARY.md)**
   - Resumo executivo
   - Proposta de valor
   - Modelo de negócio
   - Roadmap

4. **[PROJECT_STRUCTURE.txt](./PROJECT_STRUCTURE.txt)**
   - Árvore de arquivos
   - Estatísticas
   - Recursos principais

---

## 🚦 Como Usar

### Instalação
```bash
cd /workspaces/default/code
pnpm install
```

### Desenvolvimento
O servidor Vite já está rodando automaticamente.
Acesse via preview no navegador.

---

## 🎨 Componentes Disponíveis

### Formulários
- Button, Input, Label, Textarea
- Select, Checkbox, Radio, Switch
- Slider, Calendar

### Layout
- Card, Separator, Scroll Area
- Tabs, Accordion, Collapsible
- Sheet, Dialog, Drawer

### Feedback
- Badge, Alert, Toast
- Progress, Skeleton
- Tooltip, Popover

### Navegação
- Navigation Menu, Breadcrumb
- Pagination, Command Menu

---

## 📈 Roadmap

### ✅ Fase 1 - MVP (Atual)
- [x] Interface mobile completa
- [x] 7 telas funcionais
- [x] Chat IA (mock)
- [x] Gráficos interativos
- [x] Pagamentos simulados

### 🔄 Fase 2 - Backend
- [ ] API REST (Node.js)
- [ ] PostgreSQL
- [ ] Autenticação JWT
- [ ] IA real (OpenAI)
- [ ] Integração bancária

### 🎯 Fase 3 - Features
- [ ] Notificações push
- [ ] Exportar PDF
- [ ] Metas gamificadas
- [ ] Investimentos
- [ ] Cashback

### 🚀 Fase 4 - Escala
- [ ] React Native
- [ ] Web desktop
- [ ] Multi-idiomas
- [ ] Marketplace

---

## 🤝 Contribuindo

Este é um projeto de demonstração/protótipo.
Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é um protótipo educacional/demonstrativo.

---

## 👥 Equipe Recomendada

Para evolução do projeto:
- 1 Product Manager
- 2 Desenvolvedores Full-Stack
- 1 Designer UI/UX
- 1 Data Scientist (IA)

---

## 📞 Suporte

Para dúvidas ou sugestões sobre este protótipo:
- Abra uma issue no repositório
- Consulte a documentação em `/docs`

---

## 🎓 Aprendizados

### Tecnologias Demonstradas
- ✅ React + TypeScript moderno
- ✅ React Router v7 (Data mode)
- ✅ Tailwind CSS v4
- ✅ Shadcn UI + Radix primitives
- ✅ Recharts para visualizações
- ✅ React Hook Form
- ✅ Mobile-first design

### Padrões Aplicados
- ✅ Component composition
- ✅ Custom hooks
- ✅ Type safety
- ✅ Responsive design
- ✅ Clean code
- ✅ Reusable components

---

## 🌟 Destaques

### Interface
- 🎨 Design moderno e limpo
- 📱 Otimizado para mobile
- ♿ Acessível (Radix UI)
- 🎭 Animações suaves

### Funcionalidades
- 🤖 IA conversacional
- 📊 Gráficos interativos
- 💳 Múltiplos métodos de pagamento
- 🔒 Configurações completas

### Experiência
- ⚡ Navegação fluida
- 🎯 Intuitivo
- 💚 Visual agradável
- 🚀 Performance

---

## 📖 Citação

> *"Clara não é apenas um app financeiro, é um mentor que te ajuda a alcançar suas metas."*

---

**Clara Finance** - Desenvolvido com 💚 usando React + Tailwind + IA

Versão: **2.5.0 MVP**  
Status: **✅ Protótipo Funcional Completo**  
Última Atualização: **Maio 2026**

---

## 🔗 Links Úteis

- [Documentação Completa](./ARCHITECTURE.md)
- [Visão Geral do Sistema](./SYSTEM_OVERVIEW.md)
- [Resumo Executivo](./EXECUTIVE_SUMMARY.md)
- [Estrutura do Projeto](./PROJECT_STRUCTURE.txt)

---

*Transformando vidas financeiras, um usuário por vez* 💚

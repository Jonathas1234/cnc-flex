# 🎨 PROMPT ULTRA DETALHADO - FIGMA DESIGN CNC FLEX

---

## 📋 BRIEFING EXECUTIVO

**Projeto**: Redesign completo do site CNC Flex  
**Objetivo**: Modernizar site industrial B2B com design premium inspirado em fintechs  
**Referência visual**: Banco Inter (clean, gradientes suaves, minimalista, espaços em branco)  
**Público-alvo**: Empresas de joalheria, bijuterias, protipagem industrial  
**Tom**: Profissional, tecnológico, confiável, moderno, premium

---

## 🎨 IDENTIDADE VISUAL & PALETA DE CORES

### Cores Primárias:
```
Azul Escuro Principal: #0A1628 (hero, footer, CTA)
Azul Médio: #1E3A5F (títulos, destaques)
Laranja Vibrante: #FF6B35 (CTA, botões, destaques) - manter identidade CNC
Laranja Suave: #FF8C42 (hover states, gradientes)
```

### Cores Secundárias:
```
Cinza Escuro: #2C3E50 (textos principais)
Cinza Médio: #7F8C8D (textos secundários)
Cinza Claro: #F8F9FA (backgrounds alternados)
Branco Puro: #FFFFFF (backgrounds principais)
Verde Sucesso: #27AE60 (badges, indicadores)
```

### Gradientes (inspiração Inter):
```
Gradient 1 (Hero): linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)
Gradient 2 (CTAs): linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)
Gradient 3 (Cards): linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)
Gradient 4 (Overlay): linear-gradient(90deg, rgba(10,22,40,0.95) 0%, rgba(30,58,95,0.85) 100%)
```

---

## 🔤 TIPOGRAFIA

### Fonte Principal:
**Inter** (mesma do Banco Inter - limpa, moderna, legível)

### Hierarquia:
```
H1 (Hero): Inter Bold, 72px, line-height 1.1, letter-spacing -2px
H2 (Seções): Inter Bold, 48px, line-height 1.2, letter-spacing -1px
H3 (Cards): Inter SemiBold, 32px, line-height 1.3
H4 (Subtítulos): Inter SemiBold, 24px, line-height 1.4
Body Large: Inter Regular, 18px, line-height 1.6
Body Regular: Inter Regular, 16px, line-height 1.6
Body Small: Inter Regular, 14px, line-height 1.5
Caption: Inter Medium, 12px, line-height 1.4, letter-spacing 0.5px, uppercase
```

---

## 📐 ESTRUTURA DO SITE - 12 SEÇÕES

---

## 1️⃣ HEADER FIXO (sempre visível)

### Layout:
- **Altura**: 80px
- **Background**: Branco com sombra suave (0px 2px 20px rgba(0,0,0,0.05))
- **Efeito**: Backdrop blur ao scrollar + sombra aumenta

### Elementos da Esquerda:
- **Logo CNC Flex**: 180px largura, posição: 40px da esquerda
- Logo deve ter versão colorida e versão branca (para overlay)

### Menu Central (navegação horizontal):
```
Distância entre itens: 40px
Fonte: Inter Medium, 15px
Cor: #2C3E50
Hover: #FF6B35 com transição 0.3s
Underline animado: 2px, laranja, aparecer da esquerda
```

Links:
- Início
- Produtos (dropdown com categorias)
- Serviços
- Diferenciais
- Vídeos
- Sobre Nós
- Contato

### Elementos da Direita:
- **Busca**: Ícone de lupa, ao clicar expande input
- **Botão CTA**: "Solicitar Orçamento"
  - Padding: 16px 32px
  - Border-radius: 12px
  - Background: Gradient laranja
  - Fonte: Inter SemiBold, 15px
  - Sombra: 0px 8px 20px rgba(255,107,53,0.3)
  - Hover: Lift effect (translateY -2px) + sombra aumenta

---

## 2️⃣ HERO SECTION (primeira dobra)

### Estrutura: 2 colunas (60% conteúdo / 40% imagem)

### Background:
- Gradient escuro (#0A1628 → #1E3A5F)
- Padrão de grid sutil (linhas cinzas 5% opacity)
- Elementos geométricos flutuantes (círculos desfocados laranja/azul, opacity 10%)

### Coluna Esquerda (Conteúdo):
**Badge superior**:
- "Há mais de 20 anos no mercado"
- Background: rgba(255,255,255,0.1)
- Border: 1px solid rgba(255,255,255,0.2)
- Padding: 8px 16px
- Border-radius: 20px
- Ícone: Award (lucide-react)

**Título principal**:
```
"Máquinas CNC de Alta Precisão para Joalheria"
Cor: #FFFFFF
Fonte: Inter Bold, 72px
Line-height: 1.1
Margin-bottom: 24px
Animação: Fade in up ao carregar
```

**Subtítulo**:
```
"Equipamentos 100% nacionais com tecnologia de 5 eixos simultâneos. 
Do protótipo 3D à produção final com precisão milimétrica."
Cor: rgba(255,255,255,0.8)
Fonte: Inter Regular, 20px
Line-height: 1.6
Margin-bottom: 40px
Max-width: 600px
```

**CTAs (2 botões lado a lado)**:
1. **Botão Primário**: "Conhecer Equipamentos"
   - Background: Gradient laranja
   - Padding: 18px 36px
   - Border-radius: 14px
   - Sombra: 0px 12px 24px rgba(255,107,53,0.4)

2. **Botão Secundário**: "Ver Demonstração"
   - Background: transparente
   - Border: 2px solid rgba(255,255,255,0.3)
   - Padding: 18px 36px
   - Border-radius: 14px
   - Hover: Background rgba(255,255,255,0.1)

**Cards de estatísticas (3 cards inline)**:
Posição: Parte inferior da seção, margin-top: 80px

```
[Card 1]
Ícone: Clock (laranja)
Número: "20+"
Texto: "Anos de Experiência"

[Card 2]
Ícone: Award (laranja)
Número: "5 Eixos"
Texto: "Precisão Simultânea"

[Card 3]
Ícone: Users (laranja)
Número: "1000+"
Texto: "Clientes Atendidos"
```

Estilo dos cards:
- Background: rgba(255,255,255,0.08)
- Backdrop-filter: blur(10px)
- Border: 1px solid rgba(255,255,255,0.1)
- Padding: 32px
- Border-radius: 20px
- Width: ~280px cada
- Gap: 24px entre eles

### Coluna Direita (Visual):
- **Imagem principal**: Máquina CNC em alta resolução
- Mockup em perspectiva 3D (leve inclinação)
- Sombra dramática: 0px 40px 80px rgba(0,0,0,0.3)
- Borda sutil: 1px rgba(255,255,255,0.1)
- Background circle blur laranja atrás (efeito glow)

**Elementos flutuantes ao redor da imagem**:
- Badge "100% Nacional" (canto superior direito)
- Badge "Garantia 2 anos" (lado esquerdo)
- Badge "Suporte 24/7" (canto inferior)

Estilo badges flutuantes:
- Background branco
- Sombra: 0px 8px 24px rgba(0,0,0,0.15)
- Padding: 12px 20px
- Border-radius: 12px
- Ícone pequeno + texto
- Animação: Float suave (translateY -10px ↔ +10px, 3s ease)

---

## 3️⃣ NOSSOS DIFERENCIAIS

### Background: Branco puro

### Header da seção:
```
Badge superior: "POR QUE ESCOLHER A CNC FLEX"
Título: "Tecnologia Nacional com Padrão Internacional"
Subtítulo: "Soluções completas em usinagem de precisão com suporte especializado"
```

### Layout: Grid 2x2 (4 cards grandes)

**Card 1: Usinagem com CNC**
- Ícone: Settings (laranja, 48px)
- Título: "Usinagem com CNC"
- Descrição: "Soluções, Equipamentos e Serviços ideais para Confecções de Alianças e Jóias. Equipamento 100% nacional."
- Link: "Saiba mais →"

**Card 2: Financiamento**
- Ícone: CreditCard (laranja, 48px)
- Título: "Financiamento Facilitado"
- Descrição: "Através do Cartão do BNDES. Garantia e qualidade asseguradas com condições especiais."
- Link: "Consultar →"

**Card 3: Treinamentos**
- Ícone: GraduationCap (laranja, 48px)
- Título: "Treinamentos e Assistência Técnica"
- Descrição: "Garantia de ter peças de reposição, assistência técnica e atendimento pós-venda especializado."
- Link: "Ver cursos →"

**Card 4: Qualidade e Tecnologia**
- Ícone: Zap (laranja, 48px)
- Título: "Qualidade e Tecnologia"
- Descrição: "Desenvolvimento de equipamentos de fresagem de alta precisão para produtores de joias, bijuterias e acessórios."
- Link: "Nossa história →"

### Estilo dos Cards:
```
Background: #F8F9FA (cinza clarinho)
Border: 1px solid #E8EAED
Border-radius: 24px
Padding: 48px
Hover: 
  - Lift effect (translateY -8px)
  - Sombra: 0px 20px 40px rgba(0,0,0,0.1)
  - Border color: #FF6B35
Transição: 0.3s ease all

Ícone:
  - Background circle: rgba(255,107,53,0.1)
  - Padding: 20px
  - Border-radius: 50%
  
Link "Saiba mais":
  - Cor: #FF6B35
  - Hover: Underline
  - Ícone arrow animado (→)
```

---

## 4️⃣ EQUIPAMENTOS (Catálogo de Produtos)

### Background: Gradient suave (#F8F9FA → #FFFFFF)

### Header:
```
Badge: "NOSSOS PRODUTOS"
Título: "Máquinas de Alta Precisão"
Subtítulo: "Equipamentos para todas as necessidades de usinagem"
```

### Filtros (acima dos produtos):
```
Pills clicáveis:
- "Todos" (ativo por padrão)
- "Joalheria"
- "Dental"
- "Industrial"
- "Prototipagem"

Estilo:
- Background: Branco
- Border: 1px #E8EAED
- Padding: 12px 24px
- Border-radius: 24px
- Ativo: Background gradient laranja, texto branco
```

### Layout: Grid 3 colunas (cards de produtos)

**Estrutura de cada Card de Produto**:

```
┌─────────────────────────────────┐
│                                 │
│     [IMAGEM DO EQUIPAMENTO]     │
│       (aspect ratio 4:3)        │
│                                 │
├─────────────────────────────────┤
│  Badge: "NOVO" ou "DESTAQUE"    │
│                                 │
│  ALLIANCE                       │
│  Máquina 5 Eixos Profissional   │
│                                 │
│  ⚡ 5 eixos simultâneos          │
│  📏 Precisão 0.01mm             │
│  ⚙️ Software incluso             │
│                                 │
│  [Ver Detalhes]  [Solicitar]    │
└─────────────────────────────────┘
```

**Especificações do Card**:
```
Background: Branco
Border-radius: 20px
Padding: 0 (imagem ocupa topo)
Sombra: 0px 4px 20px rgba(0,0,0,0.08)

Imagem:
- Border-radius: 20px 20px 0 0
- Hover: Zoom suave 1.05x
- Overlay gradient no hover: rgba(10,22,40,0.6)
- Botão "Quick View" aparece no centro

Badge:
- Position: absolute, top 16px, right 16px
- Background: #27AE60 ou #FF6B35
- Cor: Branco
- Padding: 6px 12px
- Border-radius: 8px
- Font: Inter Bold, 11px, uppercase

Título do produto:
- Fonte: Inter Bold, 24px
- Cor: #0A1628
- Margin: 24px 0 8px

Descrição:
- Fonte: Inter Regular, 14px
- Cor: #7F8C8D

Especificações (ícone + texto):
- Grid 1 coluna
- Gap: 12px
- Ícone: 16px, cor #FF6B35
- Texto: Inter Regular, 14px

Botões:
1. "Ver Detalhes" - Outline laranja
2. "Solicitar Orçamento" - Solid laranja gradient
- Padding: 14px 24px
- Border-radius: 12px
- Width: 50% cada
- Gap: 12px
```

### Produtos (baseado no site atual):
1. **ALLIANCE** - Máquina premium 5 eixos
2. **ARTIST 3D** - Prototipagem 3D
3. **JOALHEIRO 4º e 5º EIXO** - Usinagem interna de anéis
4. **MODELO 5D PRÓ** - Fresadora CNC dental
5. **COMPACTA** - Versão compacta para pequenos espaços
6. **INDUSTRIAL** - Modelo para produção em escala

---

## 5️⃣ TECNOLOGIA E PRECISÃO (seção destacada)

### Background: Gradient escuro (#0A1628 → #1E3A5F) + padrão de circuitos

### Layout: 2 colunas (50/50)

### Coluna Esquerda (Conteúdo):
```
Badge: "NOSSA TECNOLOGIA"
Título: "Do Protótipo 3D à Peça Final"
Descrição longa: "Nossos equipamentos possuem até cinco eixos simultâneos 
de fresagem e sexto eixo para usinagem interna de anéis. Permite trabalho 
preciso mesmo em peças de pequeno porte, com visualização digital do 
produto em 3D sem necessidade de criação do protótipo físico."

Lista de features (com checkmarks):
✓ Visualização 3D antes da produção
✓ Precisão de 0.01mm
✓ 5 eixos simultâneos
✓ Software CAD/CAM incluído
✓ Biblioteca de designs pré-programados
✓ Suporte técnico especializado
```

### Coluna Direita (Visual):
- Vídeo em loop (ou GIF) mostrando máquina em funcionamento
- Frame arredondado (border-radius 24px)
- Sombra dramática
- Overlay com botão play no centro
- Ao clicar: Abre modal com vídeo completo

---

## 6️⃣ CASES DE SUCESSO / APLICAÇÕES

### Background: Branco

### Header:
```
Badge: "APLICAÇÕES"
Título: "Indústrias que Confiam na CNC Flex"
```

### Layout: Grid 4 colunas (ícone + categoria)

**Categorias**:
1. 💍 Joalheria e Alianças
2. 💎 Bijuterias Finas
3. 🦷 Próteses Dentais
4. 👜 Acessórios de Luxo
5. 🏆 Troféus e Medalhas
6. 🎁 Brindes Corporativos
7. 👗 Etiquetas de Roupas
8. 🔧 Peças Industriais

**Estilo dos Cards**:
```
Background: Gradient suave (#F8F9FA → #FFFFFF)
Padding: 40px
Border-radius: 20px
Text-align: center
Hover: Background muda para laranja, ícone e texto ficam brancos

Ícone: 64px, cor #FF6B35
Título: Inter SemiBold, 18px
```

---

## 7️⃣ VÍDEOS (Galeria)

### Background: #F8F9FA

### Header:
```
Badge: "VEJA EM AÇÃO"
Título: "Nossas Máquinas em Funcionamento"
Subtítulo: "Assista demonstrações e casos reais de uso"
```

### Layout: Grid 3 colunas (cards de vídeo)

**Card de Vídeo**:
```
┌────────────────────────┐
│                        │
│   [THUMBNAIL VÍDEO]    │
│   (16:9 aspect ratio)  │
│     [▶ Play Button]    │
│                        │
├────────────────────────┤
│ Máquina Alliance      │
│ 2:34 min              │
└────────────────────────┘
```

**Estilo**:
```
Thumbnail: Border-radius 16px
Overlay escuro: rgba(0,0,0,0.3)
Play button: 
  - Centro absoluto
  - Círculo branco 80px
  - Ícone play laranja
  - Hover: Scale 1.1
Título: Inter SemiBold, 16px
Duração: Inter Regular, 14px, cor #7F8C8D
```

**Vídeos sugeridos** (baseado no site atual):
1. "Máquina Alliance - Demonstração Completa"
2. "Artist 3D - Prototipagem Rápida"
3. "Usinagem de Alianças - Processo Completo"
4. "Software CAD/CAM - Tutorial"
5. "Manutenção Preventiva"
6. "Cases de Clientes"

---

## 8️⃣ DEPOIMENTOS / SOCIAL PROOF

### Background: Branco

### Header:
```
Badge: "DEPOIMENTOS"
Título: "O Que Nossos Clientes Dizem"
```

### Layout: Carrossel (3 cards visíveis, scroll horizontal)

**Card de Depoimento**:
```
Background: Gradient (#F8F9FA → #FFF)
Border-left: 4px solid #FF6B35
Padding: 40px
Border-radius: 16px

Elementos:
- 5 estrelas (⭐⭐⭐⭐⭐)
- Texto do depoimento (aspas estilizadas)
- Foto do cliente (círculo, 60px)
- Nome do cliente (Inter SemiBold, 16px)
- Empresa e cidade (Inter Regular, 14px, #7F8C8D)
```

**Depoimentos fictícios**:
1. "A Alliance revolucionou nossa produção de alianças. Precisão impecável!" - João Silva, Joalheria Premium SP
2. "Suporte técnico excepcional e máquinas de qualidade incomparável." - Maria Santos, Bijoux Design RJ
3. "Investimento que se pagou em 6 meses. Produtividade triplicou!" - Carlos Mendes, Acessórios Finos MG

---

## 9️⃣ SOBRE NÓS

### Background: Gradient escuro (#1E3A5F → #0A1628)

### Layout: 2 colunas (40% imagem / 60% conteúdo)

### Coluna Esquerda:
- Foto da equipe ou da fábrica
- Múltiplas fotos em grid (mosaic style)
- Border-radius: 24px
- Sobreposição de badges: "20+ anos", "100% nacional", "ISO 9001"

### Coluna Direita:
```
Badge: "NOSSA HISTÓRIA"
Título: "Há mais de 20 anos no mercado"
Texto: "A CNC Flex foi criada para modernizar e trazer soluções 
inovadoras para o mercado de usinagem brasileiro. Desenvolvemos 
equipamentos de fresagem de alta precisão com tecnologia nacional 
e padrão internacional."

Stats em grid 2x2:
┌──────────────┬──────────────┐
│ 20+          │ 1000+        │
│ Anos         │ Clientes     │
├──────────────┼──────────────┤
│ 100%         │ 24/7         │
│ Nacional     │ Suporte      │
└──────────────┴──────────────┘

Botão CTA: "Conheça Nossa História Completa"
```

---

## 🔟 LOCALIZAÇÃO / CONTATO

### Background: Branco

### Layout: 2 colunas (60% mapa / 40% informações)

### Coluna Esquerda:
- Google Maps embed
- Border-radius: 20px
- Sombra: 0px 8px 24px rgba(0,0,0,0.1)
- Pin customizado com logo CNC Flex

### Coluna Direita:
```
Título: "Visite Nosso Showroom"

Cards de informação:
┌────────────────────────────┐
│ 📍 Endereço                │
│ Av. Casa Verde, 3434-C     │
│ Bairro do Limão            │
│ São Paulo - SP             │
├────────────────────────────┤
│ 📞 Telefones               │
│ (11) 3951-0270             │
│ (11) 93802-3558            │
├────────────────────────────┤
│ ✉️ E-mail                  │
│ cncflex@cncflex.com.br     │
├────────────────────────────┤
│ 🕒 Horário                 │
│ Seg-Sex: 8h às 18h         │
│ Sáb: 8h às 13h             │
└────────────────────────────┘

Botão WhatsApp: "Falar com Especialista"
- Background: #25D366 (verde WhatsApp)
- Ícone WhatsApp
- Efeito pulse
```

---

## 1️⃣1️⃣ NEWSLETTER / BLOG

### Background: Gradient laranja (#FF6B35 → #FF8C42)

### Layout: Centralizado

```
Título: "Fique Por Dentro das Novidades"
Subtítulo: "Receba dicas, tutoriais e lançamentos diretamente no seu e-mail"

Input de e-mail:
- Background: Branco
- Padding: 20px 24px
- Border-radius: 14px
- Placeholder: "Seu melhor e-mail"
- Botão inline: "Cadastrar" (background escuro)
- Width: 600px max
- Sombra: 0px 12px 32px rgba(0,0,0,0.15)

Texto legal: "Sem spam. Cancele quando quiser."
```

---

## 1️⃣2️⃣ FOOTER

### Background: #0A1628 (azul escuro)

### Layout: 4 colunas + Rodapé final

**Coluna 1: Logo + Descrição**
```
Logo CNC Flex (versão branca)
Texto: "Há mais de 20 anos desenvolvendo 
soluções em usinagem de precisão."

Redes sociais (ícones):
- Facebook
- Instagram  
- YouTube
- LinkedIn
Ícones: 40px, hover: laranja
```

**Coluna 2: Links Rápidos**
```
Título: "Navegação"
- Início
- Produtos
- Serviços
- Sobre Nós
- Contato
- Blog
- Feiras e Eventos
```

**Coluna 3: Produtos**
```
Título: "Equipamentos"
- Alliance
- Artist 3D
- Joalheiro 4/5 Eixos
- Modelo 5D Pro
- Ver Todos
```

**Coluna 4: Contato**
```
Título: "Fale Conosco"
📍 Av. Casa Verde, 3434-C
   São Paulo - SP
📞 (11) 3951-0270
📱 (11) 93802-3558
✉️ cncflex@cncflex.com.br
```

**Rodapé Final (full width)**:
```
Background: #000814 (ainda mais escuro)
Padding: 24px 0
Text-align: center

"© 2026 CNC Flex - Todos os direitos reservados"
Links: Política de Privacidade | Termos de Uso
```

---

## 📱 RESPONSIVIDADE (Mobile)

### Breakpoints:
```
Mobile: 320px - 768px
Tablet: 769px - 1024px
Desktop: 1025px+
```

### Ajustes Mobile:
```
Header:
- Menu hamburger (3 linhas)
- Logo menor (120px)
- Botão CTA oculto, aparece no menu

Hero:
- 1 coluna (conteúdo acima, imagem abaixo)
- Título: 36px
- Cards stats: 1 coluna, stack vertical

Produtos:
- Grid 1 coluna (cards full width)

Footer:
- 1 coluna, sections empilhadas
```

---

## 🎭 ANIMAÇÕES & MICROINTERAÇÕES

### Scroll Animations (usar AOS ou Framer Motion):
```
Fade In Up: Títulos e textos
Fade In: Imagens
Stagger: Cards (aparecem em sequência)
Parallax: Backgrounds
Scale: Hover em cards
```

### Hover States:
```
Botões: Lift (-2px) + sombra aumenta
Cards: Lift (-8px) + borda laranja
Imagens: Zoom 1.05x
Links: Underline animado da esquerda
```

### Loading States:
```
Skeleton screens para produtos
Lazy loading para imagens
Blur-up effect (LQIP)
```

---

## 🛠️ COMPONENTES ESPECIAIS

### 1. Modal de Produto:
```
Overlay escuro: rgba(0,0,0,0.8)
Modal: 1200px max-width
Layout: 2 colunas (galeria / informações)
Galeria: Thumbnails + imagem grande
Botão close: X no canto superior direito
Scroll dentro do modal
```

### 2. Botão WhatsApp Flutuante:
```
Position: fixed, bottom-right
Background: #25D366
Ícone WhatsApp branco
Border-radius: 50%
Size: 64px
Sombra: 0px 8px 24px rgba(37,211,102,0.4)
Efeito pulse contínuo
Tooltip: "Fale Conosco"
```

### 3. Filtro de Produtos:
```
Sticky ao scrollar
Background blur
Pills animadas (click = expand)
Contador de produtos filtrados
```

---

## 📊 ESPECIFICAÇÕES TÉCNICAS FIGMA

### Artboards:
```
Desktop: 1920px (design em 1440px centered)
Tablet: 768px
Mobile: 375px
```

### Grid System:
```
Colunas: 12
Gutter: 24px
Margin: 80px (desktop) / 20px (mobile)
```

### Espaçamento (Sistema 8px):
```
8px   - gaps pequenos
16px  - gaps médios
24px  - gaps entre elementos
40px  - gaps entre grupos
80px  - padding de seções
120px - padding entre seções grandes
```

### Sombras (Sistema de elevação):
```
Nível 1: 0px 2px 8px rgba(0,0,0,0.08)
Nível 2: 0px 4px 16px rgba(0,0,0,0.1)
Nível 3: 0px 8px 24px rgba(0,0,0,0.12)
Nível 4: 0px 16px 48px rgba(0,0,0,0.15)
Nível 5: 0px 24px 64px rgba(0,0,0,0.2)
```

### Border Radius (Sistema consistente):
```
Pequeno: 8px (badges, tags)
Médio: 12px (botões)
Grande: 16px (inputs)
Extra Grande: 20px (cards)
Mega: 24px (seções destacadas)
```

---

## 🎯 CHECKLIST FINAL

Antes de entregar o design:

✅ Todas as 12 seções criadas  
✅ Versões Desktop + Tablet + Mobile  
✅ Componentes reutilizáveis criados  
✅ Paleta de cores aplicada consistentemente  
✅ Tipografia seguindo hierarquia  
✅ Espaçamentos usando sistema 8px  
✅ Estados hover/active documentados  
✅ Ícones todos do mesmo pack (Lucide)  
✅ Imagens de alta qualidade (Unsplash se necessário)  
✅ Protótipo interativo linkando páginas  
✅ Auto-layout aplicado em todos os componentes  
✅ Constraints configuradas para responsividade  

---

## 🚀 ENTREGA ESPERADA

**Arquivos Figma**:
1. Design System (cores, tipografia, componentes)
2. Homepage Desktop (1440px)
3. Homepage Tablet (768px)
4. Homepage Mobile (375px)
5. Página de Produto (modal/detalhes)
6. Protótipo interativo

**Extras**:
- Guia de estilo exportado (PDF)
- Assets exportados (logos, ícones)
- Paleta de cores (hex codes)

---

**🎨 RESULTADO ESPERADO**: Site moderno, clean, premium, que transmita tecnologia e confiança, mantendo a identidade CNC Flex mas com visual digno de fintech. Inspiração: Banco Inter + Apple + Tesla (minimalismo premium).
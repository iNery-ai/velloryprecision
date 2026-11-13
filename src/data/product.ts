/**
 * Configuração central da página de produto.
 * - Desacoplado: O produto não carrega o nome da marca nos textos.
 * - Valores: De R$ 103,39 por R$ 89,90 no PIX (13% OFF) ou 12x de R$ 9,33.
 * - Oferta única: Sem combo de 2 unidades.
 * - Cores sortidas: Pequena informação discreta, sem destaque.
 * - Pagamento: Apenas PIX e Cartão de Crédito. Sem WhatsApp ou Boleto.
 * - Garantia: 7 dias de garantia incondicional.
 * - Estoque: Em estoque, pronto para envio!
 * - Campanha: Especial Black Friday.
 */

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const media = {
  logo: {
    src: "/images/logo-vellory-precision.png",
    alt: "Logotipo Vellory Precision",
    width: 600,
    height: 150,
  },
  canetaComTampa: {
    src: "/images/caneta-com-tampa.png",
    alt: "Caneta depiladora facial elétrica com tampa protetora destacada, acabamento branco acetinado e detalhes em rosé gold",
    width: 1080,
    height: 1080,
  },
  canetaNaMao: {
    src: "/images/caneta-na-mao.png",
    alt: "Caneta depiladora facial sendo segurada na mão, demonstrando formato anatômico e tamanho compacto de um batom",
    width: 1080,
    height: 1080,
  },
  colagemCloses: {
    src: "/images/colagem-closes.png",
    alt: "Quatro ângulos em close da caneta depiladora facial: ponta de precisão 360°, corpo ergonômico, base USB e detalhes em rosé",
    width: 1080,
    height: 1080,
  },
  kitCompleto: {
    src: "/images/kit-completo.png",
    alt: "Kit completo da caneta depiladora facial: aparelho, tampa protetora, cabo de carregamento USB e escovinha higiênica",
    width: 1080,
    height: 1080,
  },
  olhosLuna: {
    src: "/images/olhos-luna.png",
    alt: "Close editorial demonstrando o contorno preciso de sobrancelhas com a caneta depiladora facial em primeiro plano",
    width: 1080,
    height: 1080,
  },
  videoLuna: {
    src: "",
    poster: "/images/olhos-luna.png",
    alt: "Demonstração prática do uso da caneta depiladora facial no rosto",
  },
} as const;

export const galleryImages: ProductImage[] = [
  media.canetaComTampa,
  media.canetaNaMao,
  media.colagemCloses,
  media.kitCompleto,
  media.olhosLuna,
];

export const product = {
  name: "Caneta Depiladora Facial Elétrica Recarregável USB Bivolt",
  shortName: "Caneta Depiladora Facial",
  category: "Depilador Facial Portátil",
  headline: "Caneta Depiladora Facial Elétrica Recarregável USB Bivolt",
  subheadline:
    "Retoques precisos no contorno da sobrancelha, buço e rosto, com ponta compacta e luz LED integrada para enxergar até os fios mais finos.",
  rating: 4.9,
  reviewsCount: 1482,

  campaign: {
    name: "Black Friday",
    badge: "BLACK FRIDAY",
    discountBadge: "13% OFF",
  },

  highlights: [
    "Ponta de Alta Precisão 360°",
    "Luz LED Integrada",
    "Recarregável USB Bivolt",
    "100% Indolor & Hipoalergênica",
  ],

  pricing: {
    original: 103.39,
    pixPrice: 89.9,
    discountPercent: 13,
    installments: {
      count: 12,
      value: 9.33,
    },
  },

  checkout: {
    url: "https://pay.kaiross.com.br/QZUkl73hYloT",
    isReady: true,
  },

  stock: {
    inStock: true,
    remainingUnits: 14,
    statusText: "Em estoque, pronto para envio!",
  },

  variant: {
    note: "Envio em cores sortidas conforme disponibilidade do lote.",
  },

  trustInfo: {
    payment: {
      title: "Pagamento seguro",
      desc: "Usamos pagamento 100% seguro com criptografia SSL para uma experiência simples e protegida.",
    },
    guarantee: {
      title: "7 dias de garantia",
      desc: "Não ficou satisfeito? Devolução total em até 7 dias após o recebimento.",
    },
    delivery: {
      title: "Entrega em todo o Brasil",
      desc: "Informe o CEP para ver o prazo da sua região.",
    },
  },

  shipping: {
    isFree: true,
    text: "Frete Grátis para todo o Brasil",
    statusText: "Em estoque, pronto para envio!",
    estimatedDays: "5 a 12 dias úteis",
  },

  urgency: {
    batchReservedPercent: 87,
    batchLabel: "Lote Promocional de Black Friday: 87% das unidades já reservadas",
    timerNotice: "Preço promocional garantido enquanto durarem os estoques do lote.",
  },
} as const;

export const offerStack = [
  { item: "1× Caneta Depiladora Facial Elétrica Bivolt", originalValue: "R$ 79,90", isBonus: false },
  { item: "1× Cabo de Carregamento USB Rápido", originalValue: "R$ 19,90", isBonus: false },
  { item: "1× Escovinha Higiênica de Limpeza", originalValue: "R$ 9,90", isBonus: false },
  { item: "1× Tampa Protetora Anatômica de Bolsa", originalValue: "R$ 14,90", isBonus: false },
  { item: "BÔNUS BLACK FRIDAY: Guia Digital do Contorno Perfeito", originalValue: "R$ 29,90", isBonus: true },
  { item: "Frete Grátis com Seguro para todo o Brasil", originalValue: "R$ 24,90", isBonus: true },
] as const;

export const annualSavings = {
  salonCostAnnual: "R$ 1.200,00",
  salonCostMonthly: "R$ 100,00 / mês (design + buço a cada 15 dias)",
  ourCostOnce: "R$ 89,90",
  totalSaved: "Economia de mais de R$ 1.100 no 1º ano",
} as const;

export const objectionBusters = [
  { icon: "✨", title: "Não engrossa os pelos", desc: "Corte na superfície que preserva a textura natural dos fios" },
  { icon: "🛡️", title: "100% Indolor & Hipoalergênica", desc: "Sem dor de pinça, sem queimaduras de cera, sem foliculite" },
  { icon: "💡", title: "Micro-LED Frontal", desc: "Visibilidade cirúrgica para os pelos mais claros e finos" },
  { icon: "⚡", title: "Bateria Recarregável USB", desc: "Autonomia para semanas de uso sem gastar com pilhas" },
] as const;

export const comparisonData = [
  {
    feature: "Dor durante o uso",
    thisProduct: "100% Indolor (sem puxões)",
    tweezers: "Doloroso fio por fio",
    wax: "Muita dor e ardência",
    razor: "Cortes e arranhões",
  },
  {
    feature: "Vermelhidão e irritação",
    thisProduct: "Nenhuma (hipoalergênica)",
    tweezers: "Foliculite e inchaço",
    wax: "Pele vermelha e sensível",
    razor: "Bolhas e pelos encravados",
  },
  {
    feature: "Tempo para retocar",
    thisProduct: "Menos de 2 minutos",
    tweezers: "15 a 30 minutos",
    wax: "Agendamento em salão",
    razor: "Requer espuma e banho",
  },
  {
    feature: "Luz guia para fios finos",
    thisProduct: "Sim, Micro-LED integrado",
    tweezers: "Não",
    wax: "Não",
    razor: "Não",
  },
  {
    feature: "Efeito a longo prazo",
    thisProduct: "Pele lisa sem flacidez",
    tweezers: "Pode machucar a raiz",
    wax: "Causa flacidez na pálpebra",
    razor: "Ponta reta aparenta engrossar",
  },
  {
    feature: "Custo anual estimado",
    thisProduct: "Apenas R$ 89,90 (investimento único)",
    tweezers: "Horas perdidas toda semana",
    wax: "R$ 840 a R$ 1.400 / ano no salão",
    razor: "Gasto contínuo com lâminas descartáveis",
  },
];

export const benefitsList = [
  {
    id: "blade",
    title: "Micro-Lâminas Hipoalergênicas 360°",
    description:
      "A cabeça com corte rotativo apara os fios suavemente na superfície da pele sem puxar a raiz, eliminando qualquer risco de foliculite ou vermelhidão.",
    tag: "Corte Preciso",
  },
  {
    id: "led",
    title: "Micro-Luz LED Integrada",
    description:
      "Ilumina diretamente a área de aplicação. Você consegue enxergar com total nitidez até os pelinhos mais claros e finos que passariam despercebidos.",
    tag: "Máxima Visibilidade",
  },
  {
    id: "usb",
    title: "100% Recarregável USB Bivolt",
    description:
      "Diga adeus à compra de pilhas descartáveis. Uma carga completa oferece autonomia para semanas de retoques regulares.",
    tag: "USB Bivolt",
  },
  {
    id: "design",
    title: "Design Portátil Estilo Batom",
    description:
      "Compacto, leve e ultrafino. Com tampa protetora elegante, você pode levar na bolsa, mala de viagem ou nécessaire para retocar onde e quando quiser.",
    tag: "Ultra Discreto",
  },
];

export const howToUseSteps = [
  {
    step: "01",
    title: "Remova a tampa protetora",
    desc: "Certifique-se de que a pele do rosto esteja limpa e seca, sem óleos ou maquiagem densa.",
  },
  {
    step: "02",
    title: "Acione o botão ON",
    desc: "A luz LED se acenderá automaticamente, iluminando a região exata que você deseja desenhar.",
  },
  {
    step: "03",
    title: "Movimentos circulares suaves",
    desc: "Encoste a ponta suavemente na pele e faça pequenos movimentos circulares ao redor da sobrancelha, buço ou queixo.",
  },
  {
    step: "04",
    title: "Limpeza rápida em segundos",
    desc: "Gire a ponta para abrir o compartimento e use a escovinha inclusa para retirar os fios aparados.",
  },
];

export const kitItems = [
  { name: "1× Caneta Depiladora Facial Elétrica", desc: "Corpo anatômico em ABS e ponta hipoalergênica" },
  { name: "1× Tampa Protetora", desc: "Proteção higiênica contra poeira e impactos" },
  { name: "1× Cabo de Carregamento USB", desc: "Compatível com qualquer carregador de celular ou computador" },
  { name: "1× Escovinha de Limpeza Cerdas Macias", desc: "Para higienização rápida após o uso" },
  { name: "1× Manual de Instruções em Português", desc: "Guia ilustrado de uso e cuidados" },
];

export const technicalSpecs = [
  { label: "Produto", value: "Caneta Depiladora Facial Elétrica Portátil" },
  { label: "Alimentação", value: "Bateria de Lítio Recarregável (Bivolt 110V/220V)" },
  { label: "Tempo de Carregamento", value: "Aprox. 2 horas (via cabo USB incluso)" },
  { label: "Autonomia da Bateria", value: "Até 60 minutos de uso contínuo" },
  { label: "Iluminação", value: "LED branco de alto brilho integrado na ponta" },
  { label: "Material do Corpo", value: "Polímero ABS" },
  { label: "Material da Ponta", value: "Aço cirúrgico hipoalergênico" },
  { label: "Dimensões", value: "13,0 cm × 2,0 cm (formato caneta portátil)" },
  { label: "Peso Líquido", value: "Apenas 32 gramas" },
  { label: "Cores", value: "Cores sortidas conforme disponibilidade do lote" },
];

export interface ReviewPhoto {
  src: string;
  alt: string;
}

export interface CustomerReview {
  id: number;
  name: string;
  city: string;
  verified: boolean;
  rating: number;
  date: string;
  variantReceived?: string;
  title: string;
  comment: string;
  photos: ReviewPhoto[];
}

export const customerReviews: CustomerReview[] = [
  {
    id: 1,
    name: "Camila Guimarães",
    city: "São Paulo, SP",
    verified: true,
    rating: 5,
    date: "Há 3 dias",
    variantReceived: "Variante Rosa Suave",
    title: "Simplesmente perfeita! Amei a cor rosa que veio e adeus dor de pinça.",
    comment:
      "Eu tinha muito problema com pelos no buço e ao redor da sobrancelha porque minha pele é extremamente sensível e ficava toda vermelha com cera. A caneta depiladora não dói nada, a luzinha de LED ajuda demais a ver os pelinhos fininhos. Chegou super rápido aqui em SP, caixa lacrada e a cor rosinha é linda demais, super delicada!",
    photos: [
      {
        src: "/images/depoimentos/dep1-1.webp",
        alt: "Caneta depiladora rosa segurada na mão pela cliente Camila",
      },
      {
        src: "/images/depoimentos/dep1-2.webp",
        alt: "Caneta depiladora rosa aberta mostrando a ponta de precisão",
      },
      {
        src: "/images/depoimentos/dep1-3.jpg",
        alt: "Embalagem original da caneta depiladora rosa recebida",
      },
      {
        src: "/images/depoimentos/dep1-4.webp",
        alt: "Close da caneta depiladora rosa com acabamento acetinado",
      },
    ],
  },
  {
    id: 2,
    name: "Mariana Albuquerque",
    city: "Belo Horizonte, MG",
    verified: true,
    rating: 5,
    date: "Há 5 dias",
    variantReceived: "Variante Preto Fosco & Gold",
    title: "Super chique na cor preta e prática para retocar na correria.",
    comment:
      "Fica na minha bolsa de trabalho o tempo todo! O tamanho é igualzinho a um batom sofisticado. Fiquei impressionada com o acabamento preto fosco com detalhe dourado, parece um item de luxo. A bateria dura muito, já usei várias vezes no intervalo do trabalho e ainda não precisei recarregar. Recomendo de olhos fechados!",
    photos: [
      {
        src: "/images/depoimentos/dep2-1.webp",
        alt: "Caneta depiladora na cor preta com dourado segurada na mão",
      },
      {
        src: "/images/depoimentos/dep2-2.webp",
        alt: "Detalhe do acabamento fosco e design portátil",
      },
      {
        src: "/images/depoimentos/dep2-3.webp",
        alt: "Ponta de precisão 360 graus da caneta preta",
      },
      {
        src: "/images/depoimentos/dep2-4.webp",
        alt: "Ângulo lateral mostrando a tampa e formato compacto",
      },
    ],
  },
  {
    id: 3,
    name: "Juliana Mendes",
    city: "Rio de Janeiro, RJ",
    verified: true,
    rating: 5,
    date: "Há 1 semana",
    variantReceived: "Variante Branco & Rosé com LED",
    title: "O LED faz toda a diferença do mundo! Muito preciso.",
    comment:
      "A luz integrada ilumina exatamente onde a ponta tá passando (tirei foto pra vocês verem a luz acesa, é bem forte!). Dá pra desenhar a sobrancelha com uma precisão cirúrgica sem tirar pelo a mais por engano. Não belisca a pele nem puxa o fio. Maravilhosa!",
    photos: [
      {
        src: "/images/depoimentos/dep3-1.webp",
        alt: "Luz LED acesa iluminando a ponta da caneta depiladora em close",
      },
      {
        src: "/images/depoimentos/dep3-2.webp",
        alt: "Caneta depiladora branca com detalhes rosé fotografada pela cliente",
      },
    ],
  },
  {
    id: 4,
    name: "Renata Vasconcellos",
    city: "Curitiba, PR",
    verified: true,
    rating: 5,
    date: "Há 2 semanas",
    variantReceived: "Kit Completo no Blister",
    title: "Kit completinho e os pelos NÃO engrossam! Podem comprar sem medo.",
    comment:
      "Chegou super bem embalado com o cabinho USB e a escovinha de limpeza como na foto. Eu tinha muito receio de que os pelos nascessem grossos igual gilete, mas não tem nada a ver! Já tem mais de um mês que uso direto, os pelos continuam finos e claros normais. Melhor compra que fiz no ano, economizo salão todo mês.",
    photos: [
      {
        src: "/images/depoimentos/dep4-1.webp",
        alt: "Unboxing do kit completo com caneta, cabo USB e escovinha no blister",
      },
      {
        src: "/images/depoimentos/dep4-2.webp",
        alt: "Acessórios e caneta depiladora conferidos pela cliente",
      },
      {
        src: "/images/depoimentos/dep4-3.webp",
        alt: "Caneta depiladora na mão demonstrando leveza e manuseio",
      },
      {
        src: "/images/depoimentos/dep4-4.webp",
        alt: "Ponta de precisão e cabo de recarga USB",
      },
    ],
  },
];

export const carouselPhotos = [
  { src: "/images/depoimentos/dep1-1.webp", alt: "Cliente usando caneta depiladora" },
  { src: "/images/depoimentos/dep1-2.webp", alt: "Caneta depiladora ponta e acabamento" },
  { src: "/images/depoimentos/dep1-3.jpg", alt: "Embalagem recebida lacrada" },
  { src: "/images/depoimentos/dep1-4.webp", alt: "Caneta depiladora portátil" },
  { src: "/images/depoimentos/dep2-1.webp", alt: "Caneta depiladora preta e gold" },
  { src: "/images/depoimentos/dep2-2.webp", alt: "Design elegante estilo batom" },
  { src: "/images/depoimentos/dep2-3.webp", alt: "Ponta de precisão 360 graus" },
  { src: "/images/depoimentos/dep2-4.webp", alt: "Tampa protetora e corpo portátil" },
  { src: "/images/depoimentos/dep3-1.webp", alt: "Micro LED integrado aceso" },
  { src: "/images/depoimentos/dep3-2.webp", alt: "Acabamento de luxo e precisão" },
  { src: "/images/depoimentos/dep4-1.webp", alt: "Kit completo unboxing" },
  { src: "/images/depoimentos/dep4-2.webp", alt: "Cabo USB e escovinha de limpeza" },
  { src: "/images/depoimentos/dep4-3.webp", alt: "Leveza e facilidade no manuseio" },
  { src: "/images/depoimentos/dep4-4.webp", alt: "Detalhes do carregamento USB" },
];

export const faqList = [
  {
    q: "A depilação com a caneta depiladora dói?",
    a: "Não, é 100% indolor! Ao contrário da pinça que arranca o pelo pela raiz ou da cera que puxa e queima a pele, este aparelho possui micro-lâminas internas que aparam o pelo suavemente e de forma rente à superfície, sem encostar a lâmina diretamente na derme.",
  },
  {
    q: "Os pelos voltam a crescer mais grossos ou escuros?",
    a: "Não, isso é um mito dermatológico comum. O corte do pelo pela superfície não altera a estrutura genética nem a espessura do folículo capilar. Seus pelos continuarão crescendo com a mesma textura, velocidade e espessura natural.",
  },
  {
    q: "Posso utilizar em quais áreas do rosto?",
    a: "Ela foi projetada especialmente para áreas delicadas do rosto: sobrancelhas (acima, abaixo e entre elas), buço, queixo, costeletas, bochechas e testa. Não é recomendada para áreas corporais extensas como pernas ou axilas.",
  },
  {
    q: "Ela é recarregável ou precisa de pilhas?",
    a: "É 100% recarregável via cabo USB (incluso no kit) e bivolt (110V/220V). Você pode carregar na tomada do celular, na porta USB do computador ou até no carro. Não requer compra de pilhas descartáveis.",
  },
  {
    q: "Quais são as formas de pagamento aceitas?",
    a: "Aceitamos pagamento no PIX (com desconto de Black Friday por R$ 89,90) ou Cartão de Crédito em até 12x de R$ 9,33. O ambiente de checkout é 100% seguro com criptografia SSL.",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Não ficou satisfeito? Devolução total em até 7 dias após o recebimento. Você tem 7 dias para testar o aparelho e, se não amar os resultados, basta nos enviar um e-mail para receber o reembolso integral.",
  },
  {
    q: "Qual o prazo de entrega e como rastreio meu pedido?",
    a: "O produto está em estoque e pronto para envio imediato! Todos os envios possuem seguro contra extravio e código de rastreamento enviado por e-mail em até 48 horas após a confirmação.",
  },
  {
    q: "Como funciona o envio das cores sortidas?",
    a: "Para viabilizar este lote com preço especial de Black Friday, o envio é realizado em cores sortidas conforme a disponibilidade (variando entre tons elegantes como Rosa Suave, Preto Fosco & Gold ou Branco Perolado). Independentemente da cor externa, todos os aparelhos contam rigorosamente com a mesma tecnologia de corte 360°, lâmina hipoalergênica, Micro-LED guia, bateria USB bivolt e os mesmos acessórios inclusos.",
  },
  {
    q: "Como recebo o Guia Digital de Sobrancelha (Bônus Black Friday)?",
    a: "Assim que o seu pedido for confirmado, o e-book ilustrado em PDF 'Guia Prático do Contorno Perfeito em Casa' será enviado diretamente para o seu e-mail de compra para você já começar a aprender as melhores técnicas de visagismo.",
  },
  {
    q: "Quais são as especificações técnicas da caneta?",
    a: "Bateria de Lítio recarregável USB Bivolt (110V/220V) com autonomia de até 60 minutos. Corpo em polímero ABS com ponta em aço cirúrgico hipoalergênico. LED branco de alto brilho integrado. Dimensões: 13,0 cm × 2,0 cm. Peso: apenas 32 gramas. Cores sortidas conforme disponibilidade do lote.",
  },
];

export const companyLinks = {
  checkout: product.checkout.url,
  email: "lunnavellory@gmail.com",
  instagram: "https://instagram.com/velloryprecision",
  terms: "#termos",
  privacy: "#privacidade",
  returns: "#trocas",
};

export interface Product {
  id: string
  name: string
  nameHindi?: string
  price: number
  inPackage1?: boolean
  inPackage2?: boolean
  inPackage3?: boolean
  category: string
  description?: string
  image?: string
  available?: boolean
}

export const products: Product[] = [

  {
    id: "1",
    name: "Sutli",
    nameHindi: "सुतली",
    price: 30,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "essential",
    image: "/products/Rassi.jpg",
  },

  {
    id: "2",
    name: "Nada",
    nameHindi: "नाडा",
    price: 40,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "essential",
    image: "/products/Nada.jpg",
  },

  {
    id: "3",
    name: "Rassi",
    nameHindi: "रस्सी",
    price: 30,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "essential",
    image: "/products/Rassi.jpg",
  },

  {
    id: "4",
    name: "Abir-Gulal-Ashtgandh",
    nameHindi: "अबीर-गुलाल-अष्टगंध",
    price: 80,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Abir-Gulal-Ashtgandh.jpg",
  },

  {
    id: "5",
    name: "Singade-Koni-Makhane",
    nameHindi: "सिंगाडे कोणी मखाने",
    price: 50,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "6",
    name: "Jav-Tilli",
    nameHindi: "जव-तिल्ली",
    price: 40,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Jal Tilpatti.jpg",
  },

  {
    id: "7",
    name: "Muthiya",
    nameHindi: "मुठिया",
    price: 70,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "ritual",
  },

  {
    id: "8",
    name: "Itr",
    nameHindi: "इत्र",
    price: 60,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "9",
    name: "Nariyal",
    nameHindi: "नारियल",
    price: 90,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Jal Kalash.jpg",
  },

  {
    id: "10",
    name: "Kapur",
    nameHindi: "कपुर",
    price: 35,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Kapur.png",
  },

  {
    id: "11",
    name: "Agarbatti",
    nameHindi: "अगरबत्ती",
    price: 45,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Omkari.jpg",
  },

  {
    id: "12",
    name: "Munga-Moti",
    nameHindi: "मुंगा मोती",
    price: 55,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Mung Moti.jpg",
  },

  {
    id: "13",
    name: "Panchratna",
    nameHindi: "पंचरत्न",
    price: 65,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Panchratna.jpg",
  },

  {
    id: "14",
    name: "Matka-Matki",
    nameHindi: "मटका-मटकी",
    price: 60,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Matka.jpg",
  },

  {
    id: "15",
    name: "Kimdi",
    nameHindi: "किमड़ी",
    price: 40,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "16",
    name: "Ghaas",
    nameHindi: "घास",
    price: 30,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "17",
    name: "Baas",
    nameHindi: "बास",
    price: 25,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "18",
    name: "Kafan",
    nameHindi: "कफन",
    price: 150,
    inPackage1: true,
    inPackage2: true,
    inPackage3: true,
    category: "essential",
    image: "/products/Kafan.jpg",
  },

  {
    id: "19",
    name: "Shaal",
    nameHindi: "शाल",
    price: 100,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "20",
    name: "Kapde-Kurta-Pajama",
    nameHindi: "कपड़े-कुर्ता-पजामा",
    price: 120,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "21",
    name: "Kapde-Kurta-Dhoti",
    nameHindi: "कपड़े-कुर्ता धोती",
    price: 100,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "22",
    name: "Lattha-Dhoti",
    nameHindi: "लटठा धोती",
    price: 80,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "23",
    name: "Matki-Ka-Sten",
    nameHindi: "मटकी का स्टेन",
    price: 60,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "24",
    name: "Thali-Lota",
    nameHindi: "थाली-लोटा",
    price: 45,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
    image: "/products/Mati-Lota.jpg",
  },

  {
    id: "25",
    name: "Aata",
    nameHindi: "आटा",
    price: 50,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
    image: "/products/Aata.jpg",
  },

  {
    id: "26",
    name: "Paay",
    nameHindi: "पाए",
    price: 40,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "27",
    name: "Gopi-Janeu",
    nameHindi: "गोपी-जनेऊ",
    price: 35,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "28",
    name: "Maal",
    nameHindi: "माल",
    price: 30,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "29",
    name: "Chatai",
    nameHindi: "चटाई",
    price: 80,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "essential",
    image: "/products/Chatai.jpg",
  },

  {
    id: "30",
    name: "Dhoop",
    nameHindi: "धूप",
    price: 70,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "31",
    name: "Chandan-Chura",
    nameHindi: "चंदन चुरा",
    price: 90,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "32",
    name: "Topi-Safa-Pagdi",
    nameHindi: "टोपी-साफा-पगड़ी",
    price: 150,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "33",
    name: "Ral",
    nameHindi: "राल",
    price: 300,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "essential",
    image: "/products/Ral.jpg",
  },

  {
    id: "34",
    name: "Ghee",
    nameHindi: "घी",
    price: 480,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "essential",
    image: "/products/Ghee.jpg",
  },

  {
    id: "35",
    name: "Swargiya-Sone-Ki-Seedi",
    nameHindi: "स्वर्गीय सोने की सीढ़ी",
    price: 120,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "36",
    name: "Swargiya-Chaudi-Ki-CD",
    nameHindi: "स्वर्गीय चौदी की सीडी",
    price: 100,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "37",
    name: "Chandi-Ke-Phool",
    nameHindi: "चाँदी के फूल",
    price: 80,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "38",
    name: "Suhag-Ka-Saman",
    nameHindi: "सुहाग का सामान",
    price: 150,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "39",
    name: "Vati-Ka-Saman-Bichhdi",
    nameHindi: "वटी का सामान बिछड़ी",
    price: 200,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "40",
    name: "Maharashtrian-Saree",
    nameHindi: "महाराष्ट्रीयन साड़ी",
    price: 180,
    inPackage1: false,
    inPackage2: false,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "41",
    name: "Petticoat-Blouse",
    nameHindi: "पेटीकोट-ब्लाउज",
    price: 150,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "42",
    name: "Lugda",
    nameHindi: "लुगड़ा",
    price: 300,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "43",
    name: "Gadi-Takiya",
    nameHindi: "गादी-तकीया",
    price: 300,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "essential",
  },

  {
    id: "44",
    name: "Chaddi-Banian",
    nameHindi: "चड्डी-बनियान",
    price: 100,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "45",
    name: "Towel-Pancha",
    nameHindi: "टॉवेल-पंछा",
    price: 150,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "clothing",
  },

  {
    id: "46",
    name: "Shola",
    nameHindi: "शोला",
    price: 300,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "special",
  },

  {
    id: "47",
    name: "Haldi-Kaku",
    nameHindi: "हल्दी-ककू",
    price: 50,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "48",
    name: "Khopra-Ka-Gola",
    nameHindi: "खोपरा का गोला",
    price: 70,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

  {
    id: "49",
    name: "Barak-Kharak",
    nameHindi: "बरक-खारक",
    price: 50,
    inPackage1: false,
    inPackage2: true,
    inPackage3: true,
    category: "puja",
  },

]

export const packagePricing = {
  package1: {
    name: "Basic Package",
    nameHindi: "मूलभूत पैकेज",
    basePrice: 1200,
    items: products.filter((p) => p.inPackage1),
  },
  package2: {
    name: "Standard Package",
    nameHindi: "मानक पैकेज",
    basePrice: 2800,
    items: products.filter((p) => p.inPackage2),
  },
  package3: {
    name: "Premium Package",
    nameHindi: "प्रीमियम पैकेज",
    basePrice: 5100,
    items: products.filter((p) => p.inPackage3),
  },
}

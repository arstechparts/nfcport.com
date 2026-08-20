export interface MenuItem {
  name: string;
  desc: string;
  price: string;
  img: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'baslangic',
    name: 'Başlangıçlar',
    emoji: '🥑',
    items: [
      {
        name: 'Guacamole',
        desc: 'Taze avokado, mısır cipsi, limon, kişniş',
        price: '₺180',
        img: 'https://images.pexels.com/photos/10651357/pexels-photo-10651357.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
      {
        name: 'Nachos Supremo',
        desc: 'Eriyen peynir, jalapeño, salsa, ekşi krema',
        price: '₺165',
        img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
      {
        name: 'Tostada de Mariscos',
        desc: 'Deniz mahsullü, avokadolu çıtır tostada',
        price: '₺210',
        img: 'https://images.pexels.com/photos/14469396/pexels-photo-14469396.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
    ],
  },
  {
    id: 'taco',
    name: 'Tacolar',
    emoji: '🌮',
    items: [
      {
        name: 'Taco Al Pastor',
        desc: 'Marine domuz eti, ananas, kişniş, soğan',
        price: '₺95',
        img: 'https://images.pexels.com/photos/9258712/pexels-photo-9258712.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
      {
        name: 'Taco Vegano',
        desc: 'Mantar, fasulye, guacamole, pico de gallo',
        price: '₺85',
        img: 'https://images.pexels.com/photos/8448320/pexels-photo-8448320.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
      {
        name: 'Taco Mixto (4\'lü)',
        desc: 'Dört çeşit taco tabağı, limon ve salsa ile',
        price: '₺320',
        img: 'https://images.pexels.com/photos/28959271/pexels-photo-28959271.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
    ],
  },
  {
    id: 'ana',
    name: 'Ana Yemekler',
    emoji: '🍽️',
    items: [
      {
        name: 'Mole Poblano',
        desc: 'Geleneksel mole soslu tavuk, pilav ile',
        price: '₺340',
        img: 'https://images.pexels.com/photos/29530030/pexels-photo-29530030.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
      {
        name: 'Pulpo a la Mexicana',
        desc: 'Izgara ahtapot, molcajete sunum, salsa verde',
        price: '₺480',
        img: 'https://images.pexels.com/photos/37215012/pexels-photo-37215012.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
    ],
  },
  {
    id: 'icecek',
    name: 'İçecekler',
    emoji: '🍹',
    items: [
      {
        name: 'Margarita Clásica',
        desc: 'Tekila, triple sec, misket limonu, tuz kenarı',
        price: '₺160',
        img: 'https://images.pexels.com/photos/25585184/pexels-photo-25585184.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
      {
        name: 'Mezcal & Naranja',
        desc: 'Mezcal, turunçgil dilimleri, tuz solucanı',
        price: '₺190',
        img: 'https://images.pexels.com/photos/25585181/pexels-photo-25585181.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
    ],
  },
  {
    id: 'tatli',
    name: 'Tatlılar',
    emoji: '🍮',
    items: [
      {
        name: 'Flan de Caramelo',
        desc: 'Geleneksel karamel flan, krema ile',
        price: '₺120',
        img: 'https://images.pexels.com/photos/9884561/pexels-photo-9884561.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
      {
        name: 'Pastel de Frutas',
        desc: 'Mevsim meyveli kek, pudra şekeri, nane',
        price: '₺135',
        img: 'https://images.pexels.com/photos/25585181/pexels-photo-25585181.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop',
      },
    ],
  },
];

export const restaurant = {
  name: 'Menü',
  tagline: 'Lezzetleriniz artık daha erişilebilir',
  heroImg:
    'https://images.pexels.com/photos/27365280/pexels-photo-27365280.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400&fit=crop',
};

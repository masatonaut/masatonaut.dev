export type ProductStatus = 'live' | 'coming-soon' | 'planned';

export interface Product {
  name: string;
  japaneseName: string;
  tagline: string;
  description: string;
  accent: string;
  status: ProductStatus;
  url?: string;
  github?: string;
}

export const products: Product[] = [
  {
    name: 'KASHITE',
    japaneseName: 'カシテ',
    tagline: 'Lend it. Track it. Get it back.',
    description: '貸し借り記録',
    accent: '#E85D3A',
    status: 'live',
    url: 'https://kashite.app',
    github: 'https://github.com/masatonaut/kashite',
  },
  {
    name: 'DOCCHI',
    japaneseName: 'ドッチ',
    tagline: 'Two choices. One tap. Done.',
    description: '2択ルーレット',
    accent: '#5B8DEF',
    status: 'coming-soon',
    github: 'https://github.com/masatonaut/docchi',
  },
  {
    name: 'MATSU',
    japaneseName: 'マツ',
    tagline: 'Share the countdown.',
    description: 'カウントダウン共有',
    accent: '#D4A853',
    status: 'planned',
  },
  {
    name: 'KURIKAN',
    japaneseName: 'クリカン',
    tagline: 'Track recurring costs.',
    description: '定期出費メモ',
    accent: '#4CAF82',
    status: 'planned',
  },
  {
    name: 'FKURO',
    japaneseName: 'フクロ',
    tagline: 'Your visual closet.',
    description: 'マイクローゼット',
    accent: '#2D2D2D',
    status: 'planned',
  },
];

// 今後30+に拡大予定。この配列に追加するだけでサイトに反映される。

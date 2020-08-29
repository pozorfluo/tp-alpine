export default {
  versions: [
    { name: 'pure', desc: 'Pure', price: 54700 },
    { name: 'legende', desc: 'Legende', price: 58500 },
  ],
  colors: {
    all: [
      { name: 'bleu', desc: 'Teinte spéciale Bleu Alpine', price: 1800 },
      { name: 'noir', desc: 'Teinte métallisée Noir Profond', price: 840 },
      { name: 'blanc', desc: 'Peinture opaque Blanc Glacier', price: 0 },
    ],
  },
  rims: {
    all: [
      { name: 'standard', desc: 'Standard', price: 0 },
      { name: 'serac', desc: 'Serac', price: 1000 },
    ],
    legende: [{ name: 'legende', desc: 'Legende', price: 0 }],
  },
  upholsteries: {
    all: [],
    pure: [
      {
        name: 'cuir-noir-dinamica',
        desc: 'Sièges baquets en cuir noir et Dinamica',
        price: 0,
      },
      {
        name: 'cuir-noir-perfore',
        desc: 'Sièges Confort en cuir noir perforé',
        price: 800,
      },
    ],
    legende: [
      { name: 'cuir-noir', desc: 'Sièges Confort en cuir noir', price: 0 },
      { name: 'cuir-brun', desc: 'Sièges Confort en cuir brun', price: 800 },
    ],
  },
  equipments: [
    {
      category: 'design',
      desc: 'Design',
      items: {
        all: [
          { name: 'pack-heritage', desc: 'Pack héritage', price: 180 },
          {
            name: 'repose-pied-alu',
            desc: 'Repose-pieds passager en aluminium',
            price: 96,
          },
        ],
      },
    },
    {
      category: 'media-nav',
      desc: 'Media et navigation',
      items: {
        all: [
          { name: 'alpine-metrics', desc: 'Alpine Télémétrics', price: 204 },
          { name: 'audio-focal', desc: 'Système Audio Focal', price: 600 },
          {
            name: 'audio-premium',
            desc: 'Système Audio Focal Premium',
            price: 1200,
          },
          { name: 'audio-standard', desc: 'Système Audio standard', price: 0 },
        ],
      },
    },
    {
      category: 'confort',
      desc: 'Confort',
      items: {
        all: [
          {
            name: 'retro-int-electrochrome',
            desc: 'Retroviseur intérieur électrochrome',
            price: 0,
          },
          {
            name: 'retro-ext-chauffant',
            desc: 'Rétroviseurs ext. chauf. rabattables élec.',
            price: 504,
          },
          { name: 'pack-rangement', desc: 'Pack de rangement', price: 504 },
          {
            name: 'regul-limit-vitesse',
            desc: 'Régulateur / limiteur de vitesse',
            price: 0,
          },
        ],
      },
    },
  ],
  accessories: [
    {
      category: 'transport-nav',
      desc: 'Transport et protection',
      items: {
        all: [
          {
            name: 'extincteur',
            desc: 'Extincteur 1kg avec manomètre',
            price: 22,
          },
          {
            name: 'chaine-neige',
            desc: 'Chaine à neige Premium Grip',
            price: 336,
          },

          { name: 'alarme', desc: 'Alarme', price: 543 },
          { name: 'protection-obd', desc: 'Protection Prise OBD', price: 99 },
          { name: 'kit-securite', desc: 'Kit de sécurité', price: 20 },
          {
            name: 'fixation-extincteur',
            desc: 'Fixation extincteur',
            price: 72,
          },
        ],
      },
    },
    {
      category: 'multimedia',
      desc: 'Multimédia',
      items: {
        all: [
          { name: 'support-camera', desc: 'Support caméra sport', price: 89 },
          {
            name: 'support-smartphone',
            desc:
              'Support smartphone magnétique - Fixation sur tableau de bord',
            price: 21,
          },
        ],
      },
    },
    {
      category: 'interieur',
      desc: 'Intérieur',
      items: {
        all: [
          { name: 'tapis-coffre', desc: 'Tapis de coffre', price: 83 },
          {
            name: 'filet-rangement',
            desc: 'Filet de rangement-Horizontal',
            price: 59,
          },
        ],
      },
    },
    {
      category: 'garage-equipment',
      desc: 'Matériel de garage',
      items: {
        all: [
          { name: 'chargeur-batterie', desc: 'Chargeur batterie', price: 240 },
          { name: 'kit-outils', desc: 'Kit Outils Alpine', price: 398 },
        ],
      },
    },
    {
      category: 'exterieur',
      desc: 'Extérieur',
      items: {
        all: [
          {
            name: 'cabochons-metal',
            desc: 'Cabochons Alpine - Métalisés',
            price: 24,
          },
          { name: 'housse', desc: 'Housse de protection Alpine', price: 216 },
          {
            name: 'antivol-jantes',
            desc: 'Antivols pour jante - Noirs',
            price: 51,
          },
        ],
      },
    },
  ],
};

// { category : '', desc: '', items : {
//     all : [
//        { name: '', desc: '', price: },
//     ]
//   }
// }

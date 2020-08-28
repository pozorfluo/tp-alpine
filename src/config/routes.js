import {
  Version,
  Color,
  Rims,
  Upholstery,
  Equipment,
  Accessories,
  Summary,
} from '../components/Placeholders';

export default [
  {
    path: '/version',
    event: 'reset',
    name: 'Version',
    Component: Version,
  },
  { path: '/color', event: 'nav', name: 'Couleur', Component: Color },
  { path: '/rims', event: 'nav', name: 'Jantes', Component: Rims },
  {
    path: '/upholstery',
    event: 'nav',
    name: 'Sellerie',
    Component: Upholstery,
  },
  {
    path: '/equipment',
    event: 'nav',
    name: 'Equipements',
    Component: Equipment,
  },
  {
    path: '/accessories',
    event: 'nav',
    name: 'Accessoires',
    Component: Accessories,
  },
  {
    path: '/summary',
    event: 'nav',
    name: 'Récapitulatif',
    Component: Summary,
  },
];

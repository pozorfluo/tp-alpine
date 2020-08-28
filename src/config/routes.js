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
    name: 'Version',
    Component: Version,
  },
  { path: '/color', name: 'Couleur', Component: Color },
  { path: '/rims', name: 'Jantes', Component: Rims },
  {
    path: '/upholstery',
    name: 'Sellerie',
    Component: Upholstery,
  },
  {
    path: '/equipment',
    name: 'Equipements',
    Component: Equipment,
  },
  {
    path: '/accessories',
    name: 'Accessoires',
    Component: Accessories,
  },
  {
    path: '/summary',
    name: 'Récapitulatif',
    Component: Summary,
  },
];

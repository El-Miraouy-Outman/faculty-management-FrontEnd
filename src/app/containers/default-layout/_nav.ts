import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name : 'Navigation',
    title : true
  },
  {
    name: 'Home',
    url: '',
    iconComponent: { name: 'cil-home' },
  },
  {
    name: 'A propos de la Faculty',
    iconComponent: { name: 'cil-info' },
    children: [
      {
        name: 'Mot Du Doyen',
        url: '/mot',
      },
      {
        name: 'Faculty En Chiffres',
        url: '/chiffres'
      },
      {
        name: 'Deparetement',
        url: '/deparetement'
      },
    ]
  },
  {
    name: 'Gestion des Etudiant',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Liste des etudiants',
        url: '/etudiants'
      },
      {
        name: 'La liste des filieres',
        url: '/filieres'
      },
      {
        name: 'La liste des modules',
        url: '/modules'
      },
    ]
  },
  {
    name: 'Gestion Des Inscriptions',
    iconComponent: { name: 'cil-pen' },
    children: [
      {
        name: 'Liste Inscriptions',
        url: '/listeinscription',
      },
      {
        name: 'Liste Inscriptions Etudiant',
        url: '/inscription-students'
      },
    ]
  },  {
    name: 'Gestion Des Notes',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Liste Des Notes',
        url: '/notes',
      },
      {
        name: 'Liste Notes Etudiant',
        url: '/notesEtd'
      },
    ]
  },
];

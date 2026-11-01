export type Categorie = 'web' | 'mobile' | 'backend' | 'full-stack';

export interface LienCode {
	label: string;
	url: string;
}

export interface Projet {
	nom: string;
	meta: string;
	description: string;
	technos: string[];
	imgMobile?: boolean
	categories: Categorie[];
	image: string;
	etudeDeCas: string | null;
	code: LienCode[];
}

export const projets: Projet[] = [
	{
		nom: 'Garneau-Support',
		meta: 'Projet de fin de DEC - 2026',
		description: "Application web de gestion d'incidents avec trois rôles (client, technicien, administrateur), authentification JWT et pièces jointes.",
		technos: ['Vue 3', 'Pinia', 'Node.js', 'Express', 'MySQL', 'JWT'],
		categories: ['web', 'backend'],
		image: 'images/garneau-support.png',
		etudeDeCas: '/projets/garneau-support',
		code: [{ label: 'Code source', url: 'https://github.com/Broskie67/garneau-support.git' }],
	},
	{
		nom: 'Carte-Vidéoludique',
		meta: 'Projet intégrateur - Client LUDOV · 2025',
		description: 'Projet livré à un client réel : API REST, base de données MongoDB Atlas et déploiement continu sur Vercel.',
		technos: ['Node.js', 'API REST', 'MongoDB Atlas', 'Vercel', 'Wordpress', 'CI/CD'],
		categories: ['web', 'backend'],
		image: 'images/carte-videoludique.png',
		etudeDeCas: null,
		code: [
			{ label: 'Code source', url: 'https://github.com/LUDOV-Garneau/Carte-Videoludique.git' },
			{label: 'Page du Ludov', url:'https://www.ludov.ca/fr/documentation/le-jeu-video-au-quebec/#participer'},
		],
	},
	{
		nom: 'API de données publiques',
		meta: 'Stage - CAPP, Université Laval - 2026',
		description: "Back-end d'un outil d'API qui donne accès à des données publiques, hébergé sur AWS.",
		technos: ['TypeScript', 'AWS', 'API REST'],
		categories: ['web','backend'],
		image: 'images/vitrine-democratique.png',
		etudeDeCas: null,
		code: [],
	},
  {
    nom: 'GymApp',
    meta: 'Projet personnel - en développement',
    description: "Application de suivi d'entraînement où l'utilisateur crée ses propres listes d'exercices et note les charges soulevées à chaque séance.",
    technos: ['React Expo', 'TypeScript', 'TSQL'],
		imgMobile: true,
    categories: ['mobile', 'full-stack'],
    image: 'images/gym-app.jpg',
    etudeDeCas: null,
    code: [
	    { label: 'Code API', url: 'https://github.com/Broskie67/gymapp-api' },
	    { label: 'Code mobile', url: 'https://github.com/Broskie67/gymapp-mobile' },
    ],
  }
];
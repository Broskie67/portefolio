import { useState } from "react";
import type { Categorie, Projet } from '../data/projets';

type Filtre = Categorie | 'tous'

interface Props {
  projets: Projet[]
}

const filtres: { id: Filtre; label: string }[] = [
  { id: 'tous', label: 'Tous' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Back-end'}
];

export default function GrilleProjets({ projets }: Props) {
  const [ filtre, setFiltre] = useState<Filtre>('tous')

  const filtresUtiles = filtres.filter(
		(f) => f.id === 'tous' || projets.some((p) => p.categories.includes(f.id as Categorie))
	);

  const visibles =
		filtre === 'tous' ? projets : projets.filter((p) => p.categories.includes(filtre));
  
  return (
		<>
			<div className="filtres" role="group" aria-label="Filtrer les projets">
				{filtresUtiles.map((f) => (
					<button
						key={f.id}
						type="button"
						className="filtre"
						aria-pressed={filtre === f.id}
						onClick={() => setFiltre(f.id)}
					>
						{f.label}
					</button>
				))}
			</div>

			<div className="grille">
				{visibles.map((p) => (
					<article key={p.nom} className="carte">
						<img src={p.image} alt={`Capture d'écran de ${p.nom}`} loading="lazy" className={p.imgMobile ? "mobile" : undefined}/>
						<div className="carte-contenu">
							<span className="carte-meta">{p.meta}</span>
							<h3>{p.nom}</h3>
							<p>{p.description}</p>
							<ul className="technos">
								{p.technos.map((t) => (
									<li key={t}>{t}</li>
								))}
							</ul>
							<div className="carte-liens">
								{p.etudeDeCas && (
									<a href={p.etudeDeCas} className="lien-principal">Étude de cas →</a>
								)}
								{p.code.map((lien) => (
		              <a key={lien.url} href={lien.url} target="_blank" rel="noopener">
			              {lien.label} ↗
		              </a>
	              ))}
							</div>
						</div>
					</article>
				))}
			</div>
		</>
	);
}
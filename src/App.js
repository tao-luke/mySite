import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Helmet from 'react-helmet';

// import { Link } from 'react-router-dom';
function App() {
	return (
		<div id="root">
			<Helmet>
				<title>Luke Tao </title>
				<meta charset="UTF-8" />
				<meta
					name="description"
					content="The main page of Luke Tao, a computer science student at University of Waterloo"
				/>
				<meta name="author" content="Luke Tao" />
				<meta name="keywords" content="Luke Tao LukeResume Resume Luke LukeResume" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Helmet>
			<body>
				<nav className="navBar">
					<ul className="navbar-nav">
						<li className="logo">
							<a className="nav-link" href="#">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="couch"
									class="svg-inline--fa fa-couch fa-w-20"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
								>
									<path
										fill="currentColor"
										className="fa-icon"
										d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
									/>
								</svg>
								<span className="link-text"> Hey There! </span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="user-shield"
									class="svg-inline--fa fa-user-shield fa-w-20"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
								>
									<path
										fill="currentColor"
										className="fa-icon"
										d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"
									/>
								</svg>
								<span className="link-text"> project1</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="fingerprint"
									class="svg-inline--fa fa-fingerprint fa-w-16"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										className="fa-icon"
										d="M256.12 245.96c-13.25 0-24 10.74-24 24 1.14 72.25-8.14 141.9-27.7 211.55-2.73 9.72 2.15 30.49 23.12 30.49 10.48 0 20.11-6.92 23.09-17.52 13.53-47.91 31.04-125.41 29.48-224.52.01-13.25-10.73-24-23.99-24zm-.86-81.73C194 164.16 151.25 211.3 152.1 265.32c.75 47.94-3.75 95.91-13.37 142.55-2.69 12.98 5.67 25.69 18.64 28.36 13.05 2.67 25.67-5.66 28.36-18.64 10.34-50.09 15.17-101.58 14.37-153.02-.41-25.95 19.92-52.49 54.45-52.34 31.31.47 57.15 25.34 57.62 55.47.77 48.05-2.81 96.33-10.61 143.55-2.17 13.06 6.69 25.42 19.76 27.58 19.97 3.33 26.81-15.1 27.58-19.77 8.28-50.03 12.06-101.21 11.27-152.11-.88-55.8-47.94-101.88-104.91-102.72zm-110.69-19.78c-10.3-8.34-25.37-6.8-33.76 3.48-25.62 31.5-39.39 71.28-38.75 112 .59 37.58-2.47 75.27-9.11 112.05-2.34 13.05 6.31 25.53 19.36 27.89 20.11 3.5 27.07-14.81 27.89-19.36 7.19-39.84 10.5-80.66 9.86-121.33-.47-29.88 9.2-57.88 28-80.97 8.35-10.28 6.79-25.39-3.49-33.76zm109.47-62.33c-15.41-.41-30.87 1.44-45.78 4.97-12.89 3.06-20.87 15.98-17.83 28.89 3.06 12.89 16 20.83 28.89 17.83 11.05-2.61 22.47-3.77 34-3.69 75.43 1.13 137.73 61.5 138.88 134.58.59 37.88-1.28 76.11-5.58 113.63-1.5 13.17 7.95 25.08 21.11 26.58 16.72 1.95 25.51-11.88 26.58-21.11a929.06 929.06 0 0 0 5.89-119.85c-1.56-98.75-85.07-180.33-186.16-181.83zm252.07 121.45c-2.86-12.92-15.51-21.2-28.61-18.27-12.94 2.86-21.12 15.66-18.26 28.61 4.71 21.41 4.91 37.41 4.7 61.6-.11 13.27 10.55 24.09 23.8 24.2h.2c13.17 0 23.89-10.61 24-23.8.18-22.18.4-44.11-5.83-72.34zm-40.12-90.72C417.29 43.46 337.6 1.29 252.81.02 183.02-.82 118.47 24.91 70.46 72.94 24.09 119.37-.9 181.04.14 246.65l-.12 21.47c-.39 13.25 10.03 24.31 23.28 24.69.23.02.48.02.72.02 12.92 0 23.59-10.3 23.97-23.3l.16-23.64c-.83-52.5 19.16-101.86 56.28-139 38.76-38.8 91.34-59.67 147.68-58.86 69.45 1.03 134.73 35.56 174.62 92.39 7.61 10.86 22.56 13.45 33.42 5.86 10.84-7.62 13.46-22.59 5.84-33.43z"
									/>
								</svg>
								<span className="link-text"> project2</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="far"
									data-icon="lightbulb"
									class="svg-inline--fa fa-lightbulb fa-w-11"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 352 512"
								>
									<path
										fill="currentColor"
										className="fa-icon"
										d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
									/>
								</svg>
								<span className="link-text"> project3</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="user-ninja"
									class="svg-inline--fa fa-user-ninja fa-w-14"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										className="fa-icon"
										d="M325.4 289.2L224 390.6 122.6 289.2C54 295.3 0 352.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-70.2-54-127.1-122.6-133.2zM32 192c27.3 0 51.8-11.5 69.2-29.7 15.1 53.9 64 93.7 122.8 93.7 70.7 0 128-57.3 128-128S294.7 0 224 0c-50.4 0-93.6 29.4-114.5 71.8C92.1 47.8 64 32 32 32c0 33.4 17.1 62.8 43.1 80-26 17.2-43.1 46.6-43.1 80zm144-96h96c17.7 0 32 14.3 32 32H144c0-17.7 14.3-32 32-32z"
									/>
								</svg>
								<span className="link-text"> About me</span>
							</a>
						</li>
					</ul>
				</nav>
				<main>
					Must you with him from him her were more. In eldest be it result should remark vanity square.
					Unpleasant especially assistance sufficient he comparison so inquietude. Branch one shy edward
					stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the excellence
					preference. Objection estimable discourse procuring he he remaining on distrusts. Simplicity
					affronting inquietude for now sympathize age. She meant new their sex could defer child. An lose at
					quit to life do dull. You vexed shy mirth now noise. Talked him people valley add use her depend
					letter. Allowance too applauded now way something recommend. Mrs age men and trees jokes fancy. Gay
					pretended engrossed eagerness continued ten. Admitting day him contained unfeeling attention mrs
					out. No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions
					humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at
					interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger
					him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ﻿no
					purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and.
					Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried.
					Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished
					objection exquisite me. Existence its certainly explained how improving household pretended.
					Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder
					spirit houses. Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of
					mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion
					unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do.
					Brother hundrMust you with him from him her were more. In eldest be it result should remark vanity
					square. Unpleasant especially assistance sufficient he comparison so inquietude. Branch one shy
					edward stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the
					excellence preference. Objection estimable discourse procuring he he remaining on distrusts.
					Simplicity affronting inquietude for now sympathize age. She meant new their sex could defer child.
					An lose at quit to life do dull. You vexed shy mirth now noise. Talked him people valley add use her
					depend letter. Allowance too applauded now way something recommend. Mrs age men and trees jokes
					fancy. Gay pretended engrossed eagerness continued ten. Admitting day him contained unfeeling
					attention mrs out. No opinions answered oh felicity is resolved hastened. Produced it friendly my if
					opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at
					interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger
					him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ﻿no
					purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and.
					Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried.
					Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished
					objection exquisite me. Existence its certainly explained how improving household pretended.
					Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder
					spirit houses. Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of
					mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion
					unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do.
					Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper
					figure better. Apartments simplicity or understood do it we. Song such eyes had and off. Removed
					winding ask explain delight out few behaved lasting. Letters old hastily ham sending not sex chamber
					because present. Oh is indeed twenty entire figure. Occasional diminution announcing new now
					literature terminated. Really regard excuse off ten pulled. Lady am room head so lady four or eyes
					an. He do of consulted sometimes concluded mr. An household behaviour if pretended. That know ask
					case sex ham dear her spot. Weddings followed the all marianne nor whatever settling. Perhaps six
					prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her
					procuring see consulted depending. Adieus hunted end plenty are his she afraid. Resources agreement
					contained propriety applauded neglected use yet. He an thing rapid these after going drawn or. Timed
					she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye.
					Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage
					shutters ye as wandered up repeated moreover. Inquietude attachment if ye an solicitude to.
					Remaining so continued concealed as knowledge happiness. Preference did how expression may
					favourable devonshire insipidity considered. An length design regret an hardly barton mr figure.
					Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold.
					If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye
					literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar
					delicate an pleasant provided do perceive. Consulted he eagerness unfeeling deficient existence of.
					Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct
					esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on
					reasonable projecting expression. Way mrs end gave tall walk fact bed. ed he assured reached on up
					no. On am nearer missed lovers. To it mother extent temper figure better. Apartments simplicity or
					understood do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved
					lasting. Letters old hastily ham sending not sex chamber because present. Oh is indeed twenty entire
					figure. Occasional diminution announcing new now literature terminated. Really regard excuse off ten
					pulled. Lady am room head so lady four or eyes an. He do of consulted sometimes concluded mr. An
					household behaviour if pretended. That know ask case sex ham dear her spot. Weddings followed the
					all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law
					dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted
					end plenty are his she afraid. Resources agreement contained propriety applauded neglected use yet.
					He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise
					concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid
					given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.
					Inquietude attachment if ye an solicitude to. Remaining so continued concealed as knowledge
					happiness. Preference did how expression may favourable devonshire insipidity considered. An length
					design regret an hardly barton mr figure. Projecting surrounded literature yet delightful alteration
					but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference
					entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can
					cousins account you pasture. Peculiar delicate an pleasant provided do perceive. Consulted he
					eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy. Esteem
					spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no.
					Apartments frequently or motionless on reasonable projecting expression. Way mrs end gave tall walk
					fact bed.
				</main>
			</body>
		</div>
	);
}

export default App;

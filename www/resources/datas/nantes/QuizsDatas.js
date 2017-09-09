var _quizsDatas = [
	// quiz 1
	{
		"code": "quiz_janvier",
		"nom": "Quiz spécial janvier (5 questions)",
		"descr": "Tester vos connaissances sur le tri sur Nantes Métropole.",
		"indication": "une seule réponse par question.",
		"bouton": "fiche",
		"image": "quiz/issiontrix-quiz-1.png",
		"mots_cles": "quiz",
		"mots_cles_en": "quiz",
		"seuils":{"s1":"2","s2":"4","s3":"6","s4":"8"},
		"questions": [{
				"descr": "Que faire de la couronne que j'ai gagné ? Elle est propre.",
				"image": "quiz/issiontrix-quiz-1.png",
				"explication": "Tout le carton/papier se recycle, sauf s'il est souillé (sali)",
				"reponses": [{
						"descr": "je la laisse sur ma tête 1",
						"result":"1","points": "10"
					}, {
						"descr": "le carton/papier ne se recycle pas 2",
						"result":"0","points": "12"
					}, {
						"descr": "je la recycle (bac jaune ou sac jaune) 3",
						"result":"2","points": "13"
					}
				]
			}, {
				"descr": "La fève de la galette...",
				"image": "quiz/issiontrix-feve-1.png",
				"explication": "Les fèves sont en porcelaine. Donc elle se jette (c'est uniquement le verre ménager qui se recycle). Et c'est trop dangereux de les avaler.",
				"reponses": [{
						"descr": "j'avale",
						"result":"0","points": "0"
					}, {
						"descr": "je jette ! (sac bleu ou bac bleu)",
						"result":"2","points": "1"
					}, {
						"descr": "je recycle !",
						"result":"0","points": "0"
					}
				]
			}
		]
	},
	// Quiz 2
	{
		"code": "quiz_janvier",
		"nom": "Quiz spécial janvier (5 questions)",
		"image": "quiz/issiontrix-quiz-1.png",
		"mots_cles": "quiz",
		"mots_cles_en": "quiz",
		"questions": [{
				"descr": "On ne peut pas mettre dans les conteneurs de vêtement (par exemple Le Relais)...",
				"indication": "1 réponse",
				"reponses": [{
						"descr": "les vêtements en bon état",
						"result":"aaa","points": "1"
					}, {
						"descr": "Les vêtements en mauvais état mais propres",
						"result":"aaa","points": "2"
					}, {
						"descr": "Les vêtements en bon état, sales, mais secs",
						"result":"aaa","points": "3"
					}, {
						"descr": "Les vêtements en bon état, sales, mouillés.",
						"result":"aaa","points": "7"
					}, {
						"descr": "Les chaussures en bon état",
						"result":"aaa","points": "8"
					}, {
						"descr": "Les chaussures en mauvais",
						"result":"aaa","points": "1"
					}
				]
			}
		]
	},
	{
		"code": "quiz_base",
		"nom": "Les bases du tri (5 questions)",
		"image": "quiz/issiontrix-quiz-1.png",
		"mots_cles": "quiz",
		"mots_cles_en": "quiz",
		"questions": [{
				"descr": "Si j'ai un doute",
				"indication": "1 réponse",
				"reponses": [{
						"descr": "je mets à la poubelle",
						"result":"aaa","points": "4"
					}, {
						"descr": "je mets au recyclage",
						"result":"aaa","points": "0"
					}
				]
			}
		]
	}
];
/*
var _quizsDatas = [{
code : 'quiz_janvier',
id : '0',
nom : "Quiz spécial janvier (5 questions)",
type : "quiz",
page : "quiz",
mots_cles : "quiz,noel",
descr : "Tester vos connaissances sur le tri sur Nantes Métropole. Une seule réponse par question.",
image : "quiz/issiontrix-quiz-1.png",
src : "MieuxTrierANantes 01/2015",
nbq : "5",
ok : "q1r3,q2r2,q3r3,q4r1,q5r3",
q1 : "Que faire de la couronne que j'ai gagné ? Elle est propre.",
q1r1 : "je la laisse sur ma tête",
q1r2 : "le carton/papier ne se recycle pas",
q1r3 : "je la recycle (bac jaune ou sac jaune)",
q1i1 : "resources/images/quiz/couronne.png",
q1e1 : "Tout le carton/papier se recycle, sauf s'il est souillé (sali)",
q2 : "La fève de la galette...",
q2r1 : "j'avale",
q2r2 : "je jette ! (sac bleu ou bac bleu)",
q2r3 : "je recycle !",
q2i1 : "resources/images/quiz/issiontrix-feve-1.png",
q2e1 : "Les fèves sont en porcelaine. Donc elle se jette (c'est uniquement le verre ménager qui se recycle).",
q3 : "Le logo 'point vert' de Eco-emballage signifie...",
q3r1 : "que l'emballage est recyclable",
q3r2 : "que l'emballage est fabriqué à partir de matières recyclables",
q3r3 : "que le fabriquant verse une contribution à Eco-Emballage, Adelphe ou Cyclamed",
q3i1 : "resources/images/quiz/point-vert.png",
q3e1 : "L'ancien logo 'point vert' signifie que le fabriquant verse une contribution à l'une de ces trois sociétés : Eco-Emballage, Adelphe ou Cyclamed; ceci ne signifie pas que le produit est recyclable.",
q4 : "Le nouveau logo Triman apparu en janvier 2015.",
q4r1 : "signifie qu'il existe des consignes de tri",
q4r2 : "que le fabricant paye pour avoir ce logo",
q4r3 : "que l'emballage est fabriqué à partir de matières recyclables",
q4i1 : "resources/images/quiz/triman.png",
q4e1 : "Le nouveau logo 'Triman' représente une personne tendant la main vers trois flèches. Il signifie qu'il existe des consignes de tri",
q5 : "Que faire du bouchon en liège ?",
q5r1 : "Je le recycle (bac jaune ou sac jaune)",
q5r2 : "Je jette (bac bleu ou sac bleu) ou je le donne à l'asso Les Bouchons d'Amour",
q5r3 : "Je jette (bac bleu ou sac bleu) ou je le donne à l'association Action Cancer 44",
q5i1 : "resources/images/quiz/bouchon-1.png",
q5e1 : "Pour les bouchons en liège (qui ne se recyclent pas) c'est l'association 'Action Cancer 44' qui les récupèrent.",
nom_en : "Special quiz January (5 questions)",
mots_cles_en : "quiz, hellfest",
descr_en : "Special quiz metal and beer for Hellfest. Only one answer per question. ",
q1_en : "The quill out of metal",
q1r1_en : "is drunk and recycled themselves (it is a 'large' object out of aluminium)",
q1r2_en : "is drunk and does not recycle itself. ",
q1r3_en : "it is bad for me, I do not take any. ",
q1e1_en : "It is manufactured out of aluminium. The objects out of aluminium are recycled (except the small objects). One needs for example 670 quills to manufacture a bicycle",
q2_en : "The quill out of glass",
q2r1_en : "is drunk and recycled themselves",
q2r2_en : "is drunk and does not recycle itself. ",
q2r3_en : "I keep it to put a boat inside",
q2e1_en : "All 'domestic' glass is recycled: bottles, jars. But glasses with drinking are not recycled. ",
q3_en : "The small boat of fried out of plastic (recall: one is not on Nantes with yellow Vats!)",
q3r1_en : "puts itself at the dustbin",
q3r2_en : "recycles itself",
q3r3_en : "I bury it in a hole",
q3e1_en : "As it is neither a bottle nor a bottle it is not recycled. ",
q4_en : "The capsule on the bottle of beer",
q4r1_en : "swallows itself",
q4r2_en : "recycles itself",
q4r3_en : "puts itself in the dustbin",
q4e1_en : "They are manufactured out of steel (which is a material which can be recycled) but their modest amount of metal returns them can interesting economically for recycling. They should be put in the dustbin or the blue bag. ",
q5_en : "To organize an event (festival, vacuum-attic…), if I want to organize which can be recycled waste and sensitizing",
q5r1_en : "there does not exist solution",
q5r2_en : "I contact the assos Aremacs or Terra21 (assos Nantes members of the network Eco-event, controlled by Nantes Metropolis)",
q5r3_en : "I manage all alone",
q5e1_en : "The network éco-event accompanies 30 events a year in waste management on site, and the public awareness campaign and of the organizers. The partners are the assos Nantes Aremacs and Terra21, or 'Connections', the goblets 'Planet Spirit'. That will be able to correspond to dustbins differentiated on site, of the reusable goblets, the accompaniment of voluntary, the explanatory panels…."
}, {
code : 'quiz_hellfest',
id : '1',
nom : "Quiz Hellfest",
type : "quiz",
page : "quiz",
mots_cles : "quiz,hellfest",
descr : "Quiz spécial métal et bière pour Hellfest. Une seule réponse par question.",
image : "quiz/issiontrix_hellfest.png",
src : "MieuxTrierANantes 05/2015",
ok : "q1r1,q2r1,q3r1,q4r3,q5r2",
nbq : "5",
q1 : "La canette en métal",
q1r1 : "se boit et se recycle (c'est un objet 'gros' en aluminium)",
q1r2 : "se boit et ne se recycle pas.",
q1r3 : "c'est mauvais pour moi, je n'en prends pas.",
q1i1 : "resources/images/quiz/hellfest.png",
q1e1 : "Elle est fabriquée en aluminium. Les objets en aluminium se recyclent (sauf les petits objets). Il faut par exemple 670 canettes pour fabriquer un vélo",
q2 : "La canette en verre",
q2r1 : "se boit et se recycle",
q2r2 : "se boit et ne se recycle pas.",
q2r3 : "je la garde pour mettre un bateau dedans",
q2i1 : "resources/images/quiz/biere.png",
q2e1 : "Tout le verre 'ménager' se recycle : les bouteilles, les bocaux. Mais les verres à boire ne se recyclent pas.",
q3 : "La barquette de frite en plastique (rappel : on est pas sur Nantes avec des Bacs jaunes !)",
q3r1 : "se met à la poubelle",
q3r2 : "se recycle",
q3r3 : "je l'enterre dans un trou",
q3i1 : "resources/images/quiz/tirebouchon.png",
q3e1 : "Comme ce n'est ni un flacon ni une bouteille il ne se recycle pas.",
q4 : "La capsule sur la bouteille de bière",
q4r1 : "s'avale",
q4r2 : "se recycle",
q4r3 : "se met dans la poubelle",
q4i1 : "resources/images/quiz/issiontrix_hellfest.png",
q4e1 : "Elles sont fabriquées en acier (qui est un matériau recyclable) mais leur petite quantité de métal les rend peut intéressant économiquement pour le recyclage. Il faut les mettre dans la poubelle ou le sac bleu.",
q5 : "Pour organiser un évènement (fête, vide-grenier...), si je veux organiser le recyclable des déchets et la sensibilisation",
q5r1 : "il n'existe pas de solution",
q5r2 : "je contacte les assos Aremacs ou Terra21 (assos nantaises membres du réseau Eco-évènement, piloté par Nantes Métropole)",
q5r3 : "je me débrouille tout seul",
q5i1 : "resources/images/quiz/pinthe.png",
q5e1 : "Le réseau éco-événement accompagne 30 évènements par an dans la gestion des déchets sur site, et la sensibilisation du public et des organisateurs. Les partenaires sont les assos nantais Aremacs et Terra21, ou 'Les Connexions', les gobelets 'Esprit Planète'. Cela pourra correspondre à des poubelles différenciées sur site, des gobelets réutilisables, l'accompagnement des bénévoles, des panneaux explicatifs....",
nom_en : "Hellfest quiz",
mots_cles_en : "quiz, hellfest",
descr_en : "Special quiz metal and beerforHellfest. Only one answerperquestion. ",
image_en : "quiz/issiontrix_hellfest.png",
src_en : "MieuxTrierANantes 05/2015",
q1_en : "The metal quill",
q1r1_en : "is drunk and recycled themselves (it is a 'large' object out of aluminium)",
q1r2_en : "is drunk and does not recycle itself. ",
q1r3_en : "it is bad forme, I do not take any. ",
q1e1_en : "It is manufactured out of aluminium. The objects out of aluminium are recycled (except the small objects). One needs forexample 670 quills to manufacture a bicycle",
q2_en : "The quill out of glass",
q2r1_en : "is drunk and recycled themselves",
q2r2_en : "is drunk and does not recycle itself. ",
q2r3_en : "I keep it to put a boat inside",
q2e1_en : "All 'domestic' glass is recycled_en : bottles, jars. But glasses with drinking are not recycled. ",
q3_en : "The small boat of fried out of plastic (recall_en : one is not on Nantes with yellow Vats!)",
q3r1_en : "puts itself at the dustbin",
q3r2_en : "recycles itself",
q3r3_en : "I bury it in a hole",
q3e1_en : "As it is neithera bottle nora bottle it is not recycled. ",
q4_en : "The capsule on the beerbottle",
q4r1_en : "swallows itself",
q4r2_en : "recycles itself",
q4r3_en : "puts itself in the dustbin",
q4e1_en : "They are manufactured out of steel (which is a material which can be recycled) but theirmodest amount of metal returns them can interesting economically forrecycling. They should be put in the dustbin orthe blue bag. ",
q5_en : "To organize an event (festival, vacuum-attic…), if I want to organize which can be recycled waste and sensitizing",
q5r1_en : "there does not exist solution",
q5r2_en : "I contact the assos Aremacs orTerra21 (assos Nantes members of the network Eco-event, controlled by Nantes Metropolis)",
q5r3_en : "I manage all alone",
q5e1_en : "The network éco-event accompanies 30 events a yearin waste management on site, and the public awareness campaign and of the organizers. The partners are the assos Nantes Aremacs and Terra21, or'Connections', the goblets 'Planet Spirit'. That will be able to correspond to dustbins differentiated on site, of the reusable goblets, the accompaniment of voluntary, the explanatory panels…."
}, {
nom : "",
mots_cles : "",
descr : "",
image : "quiz/",
src : "MieuxTrierANantes 05/2015",
nbq : "5",
q1 : "",
q1r1 : "",
q1r2 : "",
q1r3 : "",
q1i1 : "resources/images/quiz/",
q1e1 : "",
q1ok : "",
q2 : "",
q2r1 : "",
q2r2 : "",
q2r3 : "",
q2i1 : "resources/images/quiz/",
q2e1 : "",
q2ok : "",
q3 : "",
q3r1 : "",
q3r2 : "",
q3r3 : "",
q3i1 : "resources/images/quiz/",
q3e1 : "",
q3ok : "",
q4 : "",
q4r1 : "",
q4r2 : "",
q4r3 : "",
q4i1 : "resources/images/quiz/",
q4e1 : "",
q4ok : "",
q5 : "",
q5r1 : "",
q5r2 : "",
q5r3 : "",
q5i1 : "resources/images/quiz/",
q5e1 : "",
q5ok : ""
}];*/

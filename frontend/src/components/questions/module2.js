module.exports = {
	'0': {
		'situationText': 'Your assistant is about to prepare the skin with iodine antiseptic solution, however you remember that the client is allergic to iodine.  Instead, you tell your assistant to use:',
		'choices': [{
			'choiceText': 'A. Isopropyl alcohol',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Dilute the iodine solution with isopropyl alcohol in 1:2 ratio',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Chlorhexidine gluconate',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'D. None of the antiseptics are suitable.',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 1,
		'prevMove': null
	},
	'1': {
		'situationText': 'The client’s skin has now been prepped and properly draped.  You are ready to administer the anesthesia.  Your assistant hands you the needle and vial.  You…',
		'choices': [{
			'choiceText': 'A. Take the appropriate amount of anesthetic into the needle and inject at the site of the twin dorsal nerves',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Check the vial of anesthetic to ensure the correct agent at the correct concentration has been selected.',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Pause procedure.',
			'comment': 'Why? Incorrect aseptic technique',
			'correct': 'yes',
			'choices': [{
				'choiceText': 'Why? Incorrect aseptic technique',
				'correct': 'yes',
				'impact': 1,
				'bonus': 0
			}]
		}
		],
		'nextMove': 2,
		'prevMove': 0
	},
	'2': {
		'situationText': 'The penile nerve block with required anesthesia to be injected at two positions. Click on both appropriate areas in the diagram provided.',
		'choices': [{
			'choiceText': 'B. Pause procedure',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 3,
		'prevMove': 1
	},
	'3': {
		'situationText': 'Place each item in the correct colored bin',
		'choices': [{
			'choiceText':'Blue/black bin: gloves, disposable forceps, expired medication',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 1
		},
		{
			'choiceText': 'Red bin: blood, pathogenic waste',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 1
		},
		{
			'choiceText': 'Yellow bin: needles, sharps, broken ampules',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 1
		}
		],
		'nextMove': 4,
		'prevMove': 2
	},
	'4': {
		'situationText': 'Despite injecting the anesthetic, the patient continues to show signs of discomfort and pain. Review the actions below and select the box for best practice.       The patient weighs 40 kg. How much lidocaine at 2% anesthetic did you use?',
		'choices': [{
			'choiceText': 'A. 0.9 ml',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. 6 ml',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'C. 21 ml',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'D. 47 ml',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 5,
		'prevMove': 3
	},
	'5': {
		'situationText': 'How many minutes after injection do you wait before beginning the procedure?',
		'choices': [{
			'choiceText': 'A. 3-5 minutes',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'B. 6 minutes',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. 10 minutes',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. 25 minutes',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 6,
		'prevMove': 4
	},
	'6': {
		'situationText': 'The patient has been adequately anesthetized, the circumcision line has been correctly marked, and you are ready to retract the foreskin.  You ask your assistant for which instrument?',
		'choices': [{
			'choiceText': 'A. Artery forceps',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'B. Backhaus towel clamp',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Sponge-holding forceps',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 7,
		'prevMove': 5
	},
	'7': {
		'situationText': 'Click on the foreskin the two locations where you would place the artery forceps to provide sufficient tension on the inside and outside surfaces of the foreskin.',
		'choices': [{
			'choiceText': 'B. Pause procedure',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 8,
		'prevMove': 6
	},
	'8': {
		'situationText': 'Now that the foreskin is tight, where should the scalpel crush the skin?',
		'choices': [{
			'choiceText': 'B. Pause procedure',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		}
		],
		'nextMove': 9,
		'prevMove': 7
	},
	'9': {
		'situationText': 'You drop a tool and it lands on the ground, now what?',
		'choices': [{
			'choiceText': 'A. Ask assistant to pick up the tool and fetch a new one.',
			'comment': 'Incorrect. The assistant is part of the surgical procedure team and should always maintain sterility throughout the procedure.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Ask the runner to pick up the tool, place it in the bucket of soiled equipment to soak and ask your assistant for a clean tool.',
			'comment': 'Correct! Cleanliness is essential in avoiding infection.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'C. Leave the tool on the ground.',
			'comment': 'Incorrect. This could cause a tripping and biomedical hazard.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 10,
		'prevMove': 8
	},
	'10': {
		'situationText': 'The rest of the foreskin was cut free, leaving 5mm of skin proximal to the corona.  To clip any bleeding vessels, you ask your assistant for…',
		'choices': [{
			'choiceText': 'A. Sponge-holding forceps',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Artery forceps',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'C. Tissue forceps',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 11,
		'prevMove': 9
	},
	'11': {
		'situationText': 'You tie each bleeding vessel with chromic catgut 3-0 suture.  What kind of suture technique do you use for the frenulum (6 o’clock)?',
		'choices': [{
			'choiceText': 'A. Horizontal mattress suture',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'B. Simple interrupted suture',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Vertical mattress suture',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 12,
		'prevMove': 10
	},
	'12': {
		'situationText': 'When placing the frenulum suture, you take care to align the line of the frenulum with…',
		'choices': [{
			'choiceText': 'A. Glans',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Penile raphe',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Midline skin raphe',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		}
		],
		'nextMove': 13,
		'prevMove': 11
	},
	'13': {
		'situationText': 'Once all the sutures are done and the procedure is finished, you check for bleeding.  What kind of dressing do you place first?',
		'choices': [{
			'choiceText': 'A. Sterile dry gauze',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Petroleum jelly impregnated gauze',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'C. Sticking plaster',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 14,
		'prevMove': 12
	},
	'14': {
		'situationText': 'After the procedure is ended, blood-soiled linen should be… ',
		'choices': [{
			'choiceText': 'A. Cleaned to remove blood by using clean water before decontamination',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Cleaned with soap water to remove blood before decontamination using 0.5% Chlorine',
			'comment': '',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Decontaminated before cleaning',
			'comment': '',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		}
		],
		'nextMove': null,
		'prevMove': 13
	}
}

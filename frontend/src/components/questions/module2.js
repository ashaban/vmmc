module.exports = {
	'0': {
		'situationText': 'Your assistant is about to prepare the skin with iodine antiseptic solution, however you remember that the client is allergic to iodine. Instead, you tell your assistant to use:',
		'choices': [{
			'choiceText': 'A. Isopropyl alcohol',
			'comment': 'Sorry, incorrect.  For clients who are allergic to Iodine, chlorhexidine gluconate is recommended in skin preparation. ',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Dilute the iodine solution with isopropyl alcohol in 1:2 ratio',
			'comment': 'Sorry, incorrect.  For clients who are allergic to Iodine, chlorhexidine gluconate is recommended in skin preparation. The health care provider should inquire from the client or parent/guardian about the history of  allergic reactions iodine solution prior to the procedure.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Chlorhexidine gluconate',
			'comment': 'Correct!  Nice work!',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'D. None of the antiseptics are suitable.',
			'comment': 'Sorry, incorrect.  For clients who are allergic to Iodine, chlorhexidine gluconate is recommended in skin preparation.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 1,
		'prevMove': null
	},
	'1': {
		'situationText': 'The client’s skin has now been prepared and properly draped.You are ready to administer the anesthesia. Your assistant hands you the needle and vial. You…',
		'choices': [{
			'choiceText': "A. You take the appropriate amount of anesthetic into the needle and inject at the site of the twin dorsal nerves (1 o'clock and 11 o'clock positions).",
			'comment': 'Sorry, incorrect. The procedure of drawing the anesthetic agent should be aseptic. ',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. You check the vial of anesthetic to ensure the correct agent at the correct concentration has been selected.',
			'comment': 'Sorry, incorrect answer!  Though it is important before the health care provider administer Local anaesthesia  they must check the vial(s) of local anaesthetic to ensure that the correct agent and correct concentration has been selected, that the vial is free of contamination, and that the agent is not beyond the expiry date.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Pause procedure',
			'comment': 'Correct! To ensure aseptic technique is observed when drawing the local anaesthesia, the assistant should hold the vial while the surgeon is drawing the anaesthesia.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		}
		],
		'nextMove': 2,
		'prevMove': 0
	},
	'2': {
		'situationText': 'The penile nerve block with required anesthesia to be injected at two positions. Click on both appropriate areas in the diagram provided. ',
		'choices': [{
			'choiceText': 'B. Pause procedure',
			'comment': "Sorry, incorrect.  Using a small 23 to 27-gauge 3-4 cm long needle, give two injections at 11 o'clock and 1 o'clock positions on the dorsum of the penis in the subpubic angle. The needle should be directed at 45 degrees to the shaft , as this improves the success rate of the block and reduces the risk of injury to the underlying penile structures.",
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
			'comment': 'The Health care provider shall segregate waste to protect personnel from injury and infection by preventing hazardous waste entering inappropriate waste streams. Segregation of healthcare waste shall be done at generation point and is the responsibility of the person/institution that generate it.The segregation of healthcare waste shall consist of separating different waste materials based on the type, treatment and disposable/recyclable options. The waste categories: non infectious waste (BLUE/BLACK) and wastes to be disposed include paper, packaging materials, plastic bottles, food remains, boxes and cartons.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 1
		},
		{
			'choiceText': 'Red bin: blood, pathogenic waste',
			'comment': 'RED BIN: is for the disposal of highly infectious wastes anatomical waste, blood, body fluids, pathological waste, culture materials, waste from isolation wards',
			'correct': 'yes',
			'impact': 1,
			'bonus': 1
		},
		{
			'choiceText': 'Yellow bin: needles, sharps, broken ampules',
			'comment': 'Infectious waste, disposed in the YELLOW BIN: wastes to be disposed include used gloves, dressing materials, specimen containers, infusion packages, catheters and urinal bags.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 1
		}
		],
		'nextMove': 4,
		'prevMove': 2
	},
	'4': {
		'situationText': 'Despite injecting the anesthetic, the patient continues to show signs of discomfort and pain. Review the actions below and select the box for best practice. The patient weighs 40 kg. How much lidocaine at 2% anesthetic do you use?',
		'choices': [{
			'choiceText': 'A. 0.9 ml',
			'comment': 'Sorry, incorrect.  You use 6 ml. The starting dose of 2% Plain Lignocaine is 1.5 mg/kg with 0.3 mg/kg Bupivacaine 0.5%.The maximum safe dose is 2mg per kg body weight of Lignocaine 2% with 0.5mg per kg body weight of Bupivacaine 0.5%. ',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. 6 ml',
			'comment': 'Correct! The starting dose of 2% Plain Lignocaine is 1.5 mg/kg with 0.3 mg/kg Bupivacaine 0.5%.The maximum safe dose is 2mg per kg body weight of Lignocaine 2% with 0.5mg per kg body weight of Bupivacaine 0.5%. ',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'C. 21 ml',
			'comment': 'Sorry, incorrect. You use 6 ml. The starting dose of 2% Plain Lignocaine is 1.5 mg/kg with 0.3 mg/kg Bupivacaine 0.5%.The maximum safe dose is 2mg per kg body weight of Lignocaine 2% with 0.5mg per kg body weight of Bupivacaine 0.5%.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'D. 47 ml',
			'comment': 'Sorry, incorrect. You use 6 ml. The starting dose of 2% Plain Lignocaine is 1.5 mg/kg with 0.3 mg/kg Bupivacaine 0.5%.The maximum safe dose is 2mg per kg body weight of Lignocaine 2% with 0.5mg per kg body weight of Bupivacaine 0.5%.',
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
			'choiceText': 'A. 4 minutes',
			'comment': 'Correct! The range is 3-5 minutes.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'B. 10 minutes',
			'comment': 'Sorry, incorrect. The range is 3-5 minutes.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. 25 minutes',
			'comment': 'Sorry, incorrect. The range is 3-5 minutes.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 6,
		'prevMove': 4
	},
	'6': {
		'situationText': 'The patient has been adequately anesthetized, the circumcision line has been correctly marked, and you are ready to retract the foreskin. You ask your assistant for which instrument?',
		'choices': [{
			'choiceText': 'A. Artery forceps',
			'comment': 'Excellent.  The Artery forceps should be used to provide equal tensions between the inner and outer aspects of the foreskin.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'B. Backhaus towel clamp',
			'comment': 'Sorry, incorrect.  Using the Backhaus towel clamp can cause perforation of the tissues. The Artery forceps should be used to provide equal tensions between the inner and outer aspects of the foreskin.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Sponge-holding forceps',
			'comment': 'Sorry, incorrect. the sponge holding forceps is used for holding swabs and sponges in the medical procedures. They also enable the surgeon to move the tissues gently. To retract the foreskin the artery forceps should be used to provide equal tensions between the inner and outer aspects of the foreskin.',
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
			'comment': "Sorry, this is incorrect. The artery forceps are the instruments at 3 and 9 o'clock positions are used to provide equal tension to both inner and outer aspects of the foreskin.",
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 8,
		'prevMove': 6
	},
	'8': {
		'situationText': 'Now that the foreskin is tight, crush with the scalpel where the first incision should be.',
		'choices': [{
			'choiceText': 'B. Pause procedure',
			'comment': 'Excellent, as a health care provider you should always be keen to use appropriate instrument designed for a specific task. A scalpel is designed for cutting and not crushing. Using a scapel for crushing will results to more bleeding while crushing is meant to reduce bleeding when the dorsal slit is made at 12 o\'clock position. ',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		}
		],
		'nextMove': 9,
		'prevMove': 7
	},
	'9': {
		'situationText': 'You drop an instrument and it lands on the ground, now what?',
		'choices': [{
			'choiceText': 'A. Ask assistant to pick up the instrument and fetch a new one',
			'comment': 'Sorry, this is incorrect.  An assistant should observe all procautions and remain sterile throughout the procedure. Fetching the instrument will contaminate the assistant and make the procedure not sterile anymore which leads to infected surgical wound. The runner is responsible with picking the instrument and placing it at the appropriate area for decontamination and sterilization.',
			'correct': 'no',
			'impact': -1,
			'bonus': 0
		},
		{
			'choiceText': 'B. Ask the runner to pick up the instrument, place it in the bucket of soiled equipment to soak and ask your assistant for a sterile tool',
			'comment': 'Excellent.  A working environment should be made as much sterile as possible. Any contaminated instrument should be removed from thr procedure area and kept in separate bucket for decontamination and sterilization before being reused.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'C. Leave the instrument on the ground',
			'comment': 'Sorry, this is incorrect.  Leaving a dropped instrument unattended might lead to accident within the operating room. The runner is responsible with picking the instrument and placing it at the appropriate area for decontamination and sterilization.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 10,
		'prevMove': 8
	},
	'10': {
		'situationText': 'The rest of the foreskin was cut free, leaving 5mm of skin proximal to the corona. To clip any bleeding vessels, you ask your assistant for…',
		'choices': [{
			'choiceText': 'A. Sponge-holding forceps',
			'comment': 'Sorry, this is incorrect. Artery forceps are used to clip any bleeding vessels as accurately as possible taking care not to grab a big chunck of tissue.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Artery forceps',
			'comment': 'Excellent. Artery forceps are used to clip any bleeding vessels as accurately as possible taking care not to grab big chunck of tissue.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'C. Tissue forceps',
			'comment': 'Sorry, this is incorrect. Artery forceps are used to clip any bleeding vessels as accurately as possible taking care not to grab a big chunck of tissue.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		}
		],
		'nextMove': 11,
		'prevMove': 9
	},
	'11': {
		'situationText': "You tie each bleeding vessel with chromic catgut 3-0 suture. What kind of suture technique do you use for the frenulum (6 o'clock)?",
		'choices': [{
			'choiceText': 'A. Horizontal mattress suture',
			'comment': 'Excellent. The horizontal mattress suture is placed gently to avoid piercing the urethra which leads to Urethrocutaneous Fistula.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'B. Simple interrupted suture',
			'comment': 'Sorry, this is incorrect. Simple interrupted suture are placed in between vertical and horizontal mattress sutures.',
			'correct': 'no',
			'impact': -1,
			'bonus': 0
		},
		{
			'choiceText': 'C. Vertical mattress suture',
			'comment': "Sorry, this is incorrect. If you use the vertical mattress sutures, you are likely to injure the urethra.",
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
			'comment': "Sorry, this is incorrect. The frenulum is not stitched to the glans but rather aligned to the midline skin raphe to prevent misalignment. It might result into penile torsion that can lead to painful erection. A horizontal mattress suture is placed at 6 o'clock gently to avoid urethra injury.",
			'correct': 'no',
			'impact': -1,
			'bonus': 0
		},
		{
			'choiceText': 'B. Penile raphe',
			'comment': "Sorry, this is incorrect.  The frenulum is aligned with midline skin raphe to avoid misalignment and subsequent penile torsion. Torsion might lead to painful erection. A horizontal mattress suture is placedat 6 o'clock gently to avaoid urethral injury.",
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Midline skin raphe',
			'comment': "Excellent!  This helps to prevent misalignment which might subsequently result in penile torson and cause painful erection. A horizontal mattress suture is placedat 6 o'clock gently to avoid urethral injury.",
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		}
		],
		'nextMove': 13,
		'prevMove': 11
	},
	'13': {
		'situationText': 'Once all the sutures are done and the procedure is finished, you check for bleeding. What kind of dressing do you place first?',
		'choices': [{
			'choiceText': 'A. Sterile dry gauze',
			'comment': 'Sorry, this is incorrect. Sterile dry gauze is applied on top of petroleum jelly impregnated gauze. Petroleum jelly impregnated gauze is applied around the wound to prevent gauze from sticking to the wound, maintaining a moist wound surface which eases dressing removal.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'B. Petroleum jelly impregnated gauze',
			'comment': 'Excellent! Petroleum jelly impregnated gauze is applied around the wound to prevent gauze from sticking to the wound, maintaining a moist wound surface which eases dressing removal.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'C. Sticking plaster',
			'comment': 'Sorry, this is incorrect. Sticking plaster is applied after application of sterile dry gauze to keep the dressing inplace. Petroleum jelly impregnated gauze is applied around the wound to prevent gauze from sticking to the wound, maintaining a moist wound surface which eases dressing removal.',
			'correct': 'no',
			'impact': -2,
			'bonus': 0
		}
		],
		'nextMove': 14,
		'prevMove': 12
	},
	'14': {
		'situationText': 'After the procedure is ended, blood-soiled linen should be…',
		'choices': [{
			'choiceText': 'A. Rinse to remove blood by using clean water before decontamination',
			'comment': 'Excellent! As per National IPC Guideline, all soiled linen should be rinsed and then decontaminated with hospital approved disinfectant, before transporting to the laundry i.e. 0.05% of chlorine for 20 minutes.',
			'correct': 'yes',
			'impact': 1,
			'bonus': 0
		},
		{
			'choiceText': 'B. Cleaned with soap water to remove blood before decontamination using 0.05% Chlorine',
			'comment': 'Sorry, this is incorrect. As per National IPC Guideline, all soiled linen should be rinsed and then decontaminated with hospital approved disinfectant, before transporting to the laundry i.e. 0.05% of chlorine for 20 minutes.',
			'correct': 'no',
			'impact': 0,
			'bonus': 0
		},
		{
			'choiceText': 'C. Decontaminated before cleaning',
			'comment': 'Sorry, this is incorrect. As per National IPC Guideline, all soiled linen should be rinsed and then decontaminated with hospital approved disinfectant, before transporting to the laundry i.e. 0.05% of chlorine for 20 minutes.',
			'correct': 'no',
			'impact': -1,
			'bonus': 0
		}
		],
		'nextMove': null,
		'prevMove': 13
	}
}

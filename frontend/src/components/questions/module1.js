module.exports = {
  "clientA": {
    "0": {
      "situationText": "A 20-year-old male (Amani) from a neighboring village comes to the VMMC campaign.  He’s been waiting all day for his turn for individual counseling.  You greet the client respectively and with kindness.  You introduce yourself and ask for the name of the client.  What is your next step?",
      "choices": [{
        "choiceText": "A. Ask the client if his caretaker/parent would like to participate",
        "comment": "The client might be slightly offended to ask immediately if he'd like to participate. It is recommended that as the next step that you ask the client what he already knows and learn what is the client's level of understanding. Provide counseling and any vital information before you ask if he'd like to participate.",
        "impact": "-1"
      }, {
        "choiceText": "B. Begin talking about circumcision procedure.",
        "comment": "It is recommended that as the next step that you ask the client what he already knows to learn what the client's level of understanding  is before jumping to the procedure. Provide counseling and any vital information so there are no information gaps.",
        "impact": "-1"
      }, {
        "choiceText": "C. Ask the client to tell you what he already knows about male circumcision.",
        "comment": "That is excellent. It is recommended as the next step that you ask the client what he already knows and learn about the client's level of understanding. Provide counseling and any vital information so there are no information gaps.",
        "impact": "+1"
      }],
      "nextMove": 1,
      "prevMove": null
    },
    "1": {
      "situationText": "Amani interrupts your explanation of the circumcision procedure to ask you some questions.  He tells you he’s worried that MC will cause infertility.  You:",
      "choices": [{
        "choiceText": "A. Laugh a little and tell the client not to ask such silly questions before explaining the facts about MC.",
        "comment": "As a health care provider, you want to understand the client’s thinking about popular myths so that they can be addressed. The client does not know what is true or not. Your role is to provide respectful care to help the client understand the facts about the procedure and how it relates to sexual and reproductive health.",
        "impact": "-1"
      }, {
        "choiceText": "B. Ask the client more about why they think this way.",
        "comment": "Excellent. As a health care provider, you want to understand the client’s thinking around popular myths so that they can be addressed. The client does not know what is true or not. Your role is to provide respectful care to help the client understand the facts about the procedure and how it relates to sexual and reproductive health.",
        "impact": "+1"
      }, {
        "choiceText": "C. Respond that MC does not cause infertility before moving on.",
        "comment": "It is good that you corrected the misinformation yet it was a missed opportunity to talk about sexual and reproductive health. As a health provider, you want to understand the client’s thinking around popular myths so that they can be addressed. Your role is to provide respectful care to help the client understand the facts about the procedure and also how it relates to sexual and reproductive health.",
        "impact": "0"
      }],
      "nextMove": 2,
      "prevMove": 0
    },
    "2": {
      "situationText": "Amani tells you he is HIV positive.  How do you respond?",
      "choices": [{
        "choiceText": "A. Tell him sorry but you cannot risk you and the other health workers’ safety by performing surgery on an HIV+ client.",
        "comment": "A HIV+ client can have a MC.  There are safety protocols in performing MC on an HIV+ client.   First, according to the National HTS guidelines, if a client tests HIV positive,  the client should receive post-test counselling for HIV+ persons.  VMMC considerations become secondary. As a health provider, offer support for the new HIV diagnosis and link him to Care and Treatment clinics. Once enrolled and initial management has been done, the client will then attend VMMC clinic for male circumcision.<br><br>Explain to the client that in HIV positive persons MC will not offer 60% protection against HIV, but there are other benefits which he will get if he undergoes male circumcision. These benefits include reducing the risk of becoming infected with other STIs like chancroid and syphilis, lowering the risk of penile cancers, and reducing the HPV infection and chances of cervical cancer to his female sexual partners.",
        "impact": "-1"
      }, {
        "choiceText": "B. Try to find out more about his understanding of MC and why he is seeking services.",
        "comment": "Excellent. The role of the health care provider in HIV/AIDS interventions is  to reduce stigma and discrimination against HIV/AIDS services and  increase knowledge and awareness among the community members. It is good that you are gathering more information about his understanding of MC and HIV prevention.  This way you can explain any myths/misconceptions which exist in the community.",
        "impact": "+1"
      }, {
        "choiceText": "C. Tell him he’s not eligible since he’s already HIV positive.",
        "comment": "As a health care provider, you should provide clear and correct information. Although he is already HIV positive, MC will not offer protection against HIV, but there are other benefits which the client  will get if he undergoes male circumcision. These benefits include reducing the risk of becoming infected with other STIs like chancroid and Ssyphilis, lowering the risk of penile cancers, and reducing the cervical cancers rate and HPV infection to women.",
        "impact": "-1"
      }],
      "nextMove": 3,
      "prevMove": 1
    },
    "3": {
      "situationText": "You explain that MC does not protect partners from contracting HIV and then you ask if he is receiving treatment at the Care and Treatment Centre (CTC). What next?",
      "choices": [{
        "choiceText": "A. The client tells you he is receiving CTC services so you tell him you can perform the circumcision.",
        "comment": "This is an opportunity to provide additional information and counseling to the HIV positive clients. MC will not provide protective effect to partners of HIV positive clients, but circumcision will provide other benefits including protection against other STIs, risk of penile cancers, as well as reducing the rates of cervical cancers in women. It is also an opportunity to discuss ART adherence and routine monitoring of his health status in the Care and Treatment clinics.",
        "impact": "-1"
      }, {
        "choiceText": "B. The client tells you he is not receiving CTC services so you tell him you cannot perform the circumcision.",
        "comment": "During the ongoing counselling session, inform the client the importance of attending the Care and Treatment clinic for further management of his HIV status and initiation of ARVs.  The Male Circumcision becomes secondary.  Refer and link the client to the nearby CTC clinic.  To ensure enrollment, escort the client to the clinic.  After the client has been enrolled in CTC, provide an appointment for MC at a later date.",
        "impact": "-1"
      }, {
        "choiceText": "C. The client tells you he is receiving CTC and you ask him to bring documentation of his last CD4 count before the surgical procedure.",
        "comment": "The availability of the CTC card is not a mandatory before the surgical procedure, as long as the client has provided assurance that he is already enrolled at CTC and possesses a CTC card.  Continue to provide the VMMC services.  After providing the VMMC services, remind the client the importance of ART adherence and attending CTC and maintaining proper hygiene.",
        "impact": "0"
      }],
      "nextMove": 4,
      "prevMove": 2
    },
    "4": {
      "situationText": "Amani returns with his CTC card. What additional counseling do you need to provide before the procedure?",
      "choices": [{
        "choiceText": "Information on risks of surgery, discussion on partner risks and wound care.",
        "comment": "In a calm, informative tone before surgery, the health care provider should provide the client with all the necessary information about the procedure.  Provide accurate information on possible complications and post operative instructions.  Although complications are rare, bleeding, severe pain in the penis/genital area, inability to pass urine and increased swelling and discharge or pus from the surgical wound can occur.   If a problem develops, the client should return to the facility/site or seek emergency care.  Post operative instructions on wound care should emphasize maintaining proper hygiene, wearing clean underware to be changed daily, and taking a bath.  Educate the client on other HIV prevention strategies i.e  ABC apprroach, A-Abstinence, B-Being faithful, C- Consistent correct use of condoms.",
        "impact": "+1"
      }, {
        "choiceText": "Information on risks of surgery and wound care.",
        "comment": "The counseling information and post operation instructions provided to clients are the same regardless of the HIV status.  Information should HIV transimission education in addition to possible complications and wound care. Provide accurate information on possible complications and post operative instructions. Although rare, complications such as bleeding, severe pain in the penis/genital area, inability to pass urine and increased swelling and discharge or pus from the surgical wound can occur.  The clients should return to the facility/site or seek emergency care if a problem develops.  Post operative instructions on wound care should emphasize maintaining proper hygiene, wearing clean underware to be changed daily, and taking a bath.   Educate the client on other HIV prevention strategies i.e  ABC approach, A-Abstinence, B-Being faithful, C- Consistent correct use of condoms.",
        "impact": "-1"
      }, {
        "choiceText": "Information on wound care.",
        "comment": "The counseling information and post operation instructions provided to clients are the same regardless of the HIV status.  Information should include possible complications and HIV transimission education in addition to wound care. Post operative instructions on wound care should emphasize maintaining proper hygiene, wearing clean underware to be changed daily and taking a bath.  Although rare, provide accurate information on possible complications which can occur ,such as bleeding, severe pain in the penis/genital area, inability to pass urine and increased swelling and discharge or pus from the surgical wound.  The clients should return to the facility/site or seek emergency care if a problem develops.  Educate the client on other HIV prevention strategies i.e  ABC approach, A-Abstinence, B-Being faithful, C- Consistent correct use of condoms.",
        "impact": "-2"
      }],
      "nextMove": 5,
      "prevMove": 3
    },
    "5": {
      "situationText": "Amani is now on ARV; though he has been cleared for VMMC procedure, he is worried about delayed wound healing time due to his HIV status.",
      "choices": [{
        "choiceText": "You tell client that he will heal normally as other HIV negative clients; it will take up seven days for superficial wound healing and six weeks for complete wound healing.",
        "comment": "Excellent.  Resassure the HIV positive client that his HIV status will not interfere with the wound healing as long as he maintains proper nutrition, proper wound care and hygiene, and adherence on his ARV drugs. Superficial wound healing will take up to seven days, and complete wound healing is six weeks. ",
        "impact": "+1"
      }, {
        "choiceText": "You tell the client that there will be delays in wound healing due his HIV status.",
        "comment": "As a health care provider, this is your opportunity to provide further  supportive counseling to the client and reassure him that he should maintain good adherence to his ARV's and any other medications prescribed in the Care and Treatment clinic, maintain proper nutrition and wound care. There is no difference on healing because of his HIV status.  Superficial wound healing will take up to seven days, and complete wound healing is six weeks. <br><br>Inform the client to avoid sexual intercourse and masturbation for six (6)  weeks after the procedure to allow the wound to heal. Provide the client with condoms which he should to use for every act of sexual intercounse for at least six months, after the six weeks healing period to protect the client against STIs and prevent unwanted pregnancies.",
        "impact": "-1"
      }, {
        "choiceText": "You assure the client that there will be no delayed healing since ALL HIV positive clients are given prophylactic antibiotics.",
        "comment": "Prophylactic antibiotics are not recommended in VMMC services and given only when there is wound infection.  There is no difference on healing because of his HIV status.  Counsel the client that superficial wound healing will take up to seven days, and complete wound healing is six weeks.",
        "impact": "-2"
      }],
      "nextMove": "clientB",
      "prevMove": 4
    }
  },
  "clientB": {
    "0": {
      "situationText": "Zabron, aged 27 years old, HIV negative, married with two children, tells you that he needs MC services and he has got work permission for ten days only; he is afraid of losing a job as he might require two weeks for complete healing. You:",
      "choices": [{
        "choiceText": "Tell him that it’s true that he need two weeks and hence he might lose his job.",
        "comment": "That information is not true.  Advise the client that it takes up to seven days for superficial healing of the wound. After the seven days, he can return to job, but he needs to avoid strenous work or lifting heavy objects which might result to wound disruption.  It takes six weeks for complete wound healing.",
        "impact": "-1"
      }, {
        "choiceText": "You inform him that he only need 5-7 days for superficial healing process. So, ten days are enough, and he can have MC procedure.",
        "comment": "Excellent response. Encourage the client to proceed with the MC since he has enough time to achieve superficial healing before resuming work.  After the seven days, he can return to job, but he needs to avoid strenous work or lifting heavy objects which might result to wound disruption.  It takes six weeks for complete wound healing.",
        "impact": "+1"
      }, {
        "choiceText": "Tell him to return to work and ask for two weeks permission.",
        "comment": "As a  health care provider, provide the client with the correct information for him to make an informed decision and avoid discouraging eligible clients to undergo MC procedure.  Advise the client that it takes up to seven days for superficial healing of the wound. After the seven days, the healing will be advanced, and the client can resume his job and normal activities, but he will need to avoid strenous work or lifting heavy objects which might result to wound disruption.  It takes six weeks for complete wound healing.",
        "impact": "0"
      }],
      "nextMove": 1,
      "prevMove": "clientA"
    },
    "1": {
      "situationText": "Many clients use bicycles / motorcycles as the means of transport and source of income. Zabron is worried of his family income as he is doing business of bicycle taxi (bodaboda). As the counselor you advise him that he will return shortly to his business. You will tell your clients after circumcision that:",
      "choices": [{
        "choiceText": "He should not ride a bicycle for the first three days after operation",
        "comment": "Correct.  The client can ride his bicycle after 3 days. By then, he is expected to have returned to the facility/outreach site for his first follow-up visit, usually 48 hrs post-op. The wound would be assessed, and the bandage removed.  ",
        "impact": "+1"
      }, {
        "choiceText": "He can ride his bicycle after 24 hours after circumcision.",
        "comment": "This is incorrect. By increasing  pressure on a fresh wound, this might lead to untying of the suture and bleeding. The client can ride his bicycle after 3 days. By then, he should have attended the 48 hrs post-op for his first follow-up visit. The wound has been assessed, and the bandage removed. ",
        "impact": "0"
      }, {
        "choiceText": "He can ride his bicycle after ten days.",
        "comment": "The client can ride his bicycle after 3 days, not 10 days, as we expect he would have returned to the facility/outreach site for his first follow-up visit, usually 48 hrs post op. The wound  has been assessed, and the bandage removed.",
        "impact": "-1"
      }],
      "nextMove": 2,
      "prevMove": 0
    },
    "2": {
      "situationText": "Zabron is also worried about the risks of the procedure. He has never had surgery before and is concerned about complications. You will tell your client: ",
      "choices": [{
        "choiceText": "There are no risks associated with circumcision.",
        "comment": "As a  health care provider, provide the client with the correct information for him to make an informed decision. During the health education and individual counseling, clients should be informed that although rare but adverse events do occur.  The adverse events which might occur include pain (which increases in severity), bleeding, swelling of the penis and failure to pass urine. The health care provider should use this opportunity to explain to the client that if he experiences one of the adverse events he should return back to the facility/outreach site for further evaluations. The health provider should ensure the emergency contact number is filled in the client appointment card in case of an adverse event.",
        "impact": "-1"
      }, {
        "choiceText": "There are risks associated with circumcision, but the chances of these occurring are very rare.",
        "comment": "As a  health care provider, provide the client with the correct information for him to make an informed decision. Although the risks associated with circumcision, known as adverse events, rarely occur, clients should be informed that adverse events do occur.  Precautions should be taken.  During the health education and individual counseling, clients should be informed that adverse events which might occur include pain (which increases in severity), bleeding, swelling of the penis and failure to pass urine. The health care provider should use this opportunity to explain to the client that if he experiences one of the adverse events he should return back to the facility/outreach site for further evaluations.  ",
        "impact": "0"
      }, {
        "choiceText": "In addition to the many benefits of circumcision there are a few risks. These are unlikely but may include pain, infection or hematoma which is a blood clot under the skin.",
        "comment": "This is correct.  As a  health care provider, provide the client with the correct information for him to make an informed decision.  Although the risks associated with circumcision, known as adverse events, rarely occur, clients should be informed that adverse events do occur.  During the health education and individual counseling, clients should be informed that adverse events which might occur include pain (which increases in severity), bleeding, swelling of the penis and failure to pass urine.",
        "impact": "+1"
      }],
      "nextMove": 3,
      "prevMove": 1
    },
    "3": {
      "situationText": "Zabron asks if circumcision will also reduce his wife’s chances of getting HIV. You will tell your client:",
      "choices": [{
        "choiceText": "Women cannot be protected against HIV.",
        "comment": "The client should be educated on possible HIV protection and preventive measures, that is the ABC approach which is abstinence, being faithful, condoms, and avoiding sharps and needle sharing.   The client should be counseled on gender equality and promoting women to make informed choices on their health, including condom negotiation.  The client should also be educated on benefits of circumcision in reducing HPV transmission. This is an important benefit because acquiring HPV could lead to cervical cancer. ",
        "impact": "-1"
      }, {
        "choiceText": "The best way to reduce your wife’s chances of getting HIV is for both partners to follow the ABCs- Abstinence, being faithful, condoms. Circumcision reduces your chances of contracting HIV but if you do get it, you can still pass it along to your partner.",
        "comment": "Excellent. The client should be educated on possible HIV preventive measures, that is ABC approach, abstinence, being faithful, condoms, and avoiding sharps and needle sharing.   The client should be counseled on gender equality and promoting women on making informed choices on their health including condom negotiation. The client should also be educated on benefits of circumcision in reducing  HPV transmission.  ",
        "impact": "+1"
      }, {
        "choiceText": "Male circumcision does not protect women from HIV.",
        "comment": "Male circumcision does not have direct HIV prevention to women, but through MC men get protected by 60% which ultimately protects thier sexual female partners.  The client should be educated on other possible HIV preventive measures, that is ABC approach, abstinence, being faithful, condoms, and avoiding sharps and needle sharing.   The client should be counseled on gender equality and promoting women to make informed choices on their health, including condom negotiation.  The client should also be educated on benefits of circumcision on reducing HPV transmission as HPV leads to cervical cancer.",
        "impact": "0"
      }],
      "nextMove": 4,
      "prevMove": 2
    },
    "4": {
      "situationText": "Zabron says he has 2 sons (a 4-year-old and a 12-year-old) and he wants to know if he should bring them in for VMMC. You will tell your client: ",
      "choices": [{
        "choiceText": "The 12-year-old child should be brought in for circumcision.",
        "comment": "This is correct, the client should be told that the 12-year-old child can be brought to the clinic for circumcision because he is within the eligible age category for Voluntary Medical Male Circumcision. The recommended age for circumcision in the VMMC program is for boys 10 years and older because they have attained puberty and are at risk of contracting HIV infection through heterosexual intercourse.<br><br>Inform the client that the 4 year boy can still undergo circumcision through other routine service delivery procedure at a given health facility but not under VMMC program.",
        "impact": "+1"
      }, {
        "choiceText": "A 4-year-old child can be brought in for VMMC services.",
        "comment": "This is incorrect.  A 4 year boy cannot be brought in under the VMMC program.  No child under 10 can be circumcised under this project.  However, he still undergo circumcision through other routine service delivery procedure at a given health facility.  The recommended age for circumcision in the VMMC program is for boys 10 years and older because they have attained their puberty and are at risk of contracting HIV infection through heterosexual intercourse.",
        "impact": "0"
      }, {
        "choiceText": "All children are sexually active; therefore, they need to be offered VMMC",
        "comment": "Not all children are sexually active.  The recommended age for circumcision in the VMMC program is for boys 10 years and older because they have attained their puberty and are considered to be at risk of contracting HIV infection through heterosexual intercourse.",
        "impact": "-1"
      }],
      "nextMove": 5,
      "prevMove": 3
    },
    "5": {
      "situationText": "Zabron says he wants to have more children as soon as possible and would therefore like to resume sexual intercourse with his wife as soon as he returns from the circumcision procedure. You will tell your client:",
      "choices": [{
        "choiceText": "It takes 6 weeks for the circumcision wound to become strong enough to withstand gentle intercourse and recommends that he waits this period to avoid infection or other complications.",
        "comment": "Excellent. Healing takes about 6 weeks for adults and adolescents. The provider must emphasize to the client that he must abstain from sexual activity throughout the healing period. No sexual activity may occur for 6 weeks after surgery.  It is very important that clients understand the commitment to abstinence. Sexual activity within 6 weeks of surgery can damage the wound, extend the healing period, and may lead to serious complications such as bleeding and haematoma and increases the risk of HIV transmission and acquisition.<br><br>Remind the client that once he resumes sexual intercourse, he must use a condom appropriately and consistently for the first 6 months following MC. ",
        "impact": "+1"
      }, {
        "choiceText": "It is best to wait 3-4 months to resume intercourse.",
        "comment": "This is incorrect.  Healing takes about 6 weeks for adults and adolescents. The provider must emphasize to the client that he must abstain from sexual activity throughout the healing period. No sexual activity may occur for 6 weeks after surgery.  It is very important that clients understand the commitment to abstinence.Sexual activity within 6 weeks of surgery can damage the wound, extend the healing period, and may lead to serious complications such as bleeding and haematoma and increases the risk of HIV transmission and acquisition.<br><br>Remind the client that once he resumes sexual intercourse, he must use a condom appropriately and consistently for the first 6 month following MC.",
        "impact": "-1"
      }, {
        "choiceText": "It takes 4-6 weeks for the circumcision wound to be strong enough for intercourse so it’s best to masturbate in the meantime.",
        "comment": "This is incorrect, masturbation is not allowed for the first 6 weeks after MC. Healing takes about 6 weeks for adults and adolescents. The provider must emphasize to the client that he must abstain from sexual activity throughout the healing period. It is very important that clients understand the commitment to abstinence.  No sexual activity may occur for 6 weeks after surgery.  Sexual activity within 6 weeks of surgery can damage the wound, extend the healing period, and may lead to serious complications such as bleeding and haematoma and increases the risk of HIV transmission and acquisition.<br><br>Remind the client that once he resumes sexual intercourse, he must use a condom appropriately and consistently for the first 6 month following MC.",
        "impact": "0"
      }],
      "nextMove": 6,
      "prevMove": 4
    },
    "6": {
      "situationText": "Zabron asks whether after MC procedure he will be fully protected against HIV infection.",
      "choices": [{
        "choiceText": "You agree that MC provides full protection against HIV infection.",
        "comment": "This is incorrect. Inform clients that MC provides only 60% protection against HIV transmission through heterosexual intercourse. Client needs to employ other preventive measures so that he can be more protected. These include abstainence, being faithful, appropriate and consistent use of condom, and avoiding sharps and needle sharing.",
        "impact": "-1"
      }, {
        "choiceText": "You tell client that MC provides 60% protection against female to male sexual HIV transmission. Client B needs to adhere to other prevention measures such abstinence, being faithful to one uninfected partner, consistent and proper use of condoms (ABC).",
        "comment": "Excellent. As a provider emphasize that MC provides only 60% protection against HIV transmission through heterosexual intercourse. Client needs to employ other preventive measures so that he can be more protected. These include abstainence, being faithful, appropriate and consistent use of condom, and avoiding sharps and needle sharing. ",
        "impact": "+1"
      }, {
        "choiceText": "Provider tells the client that he will have some protection against HIV infection.",
        "comment": "As a provider, provide accurate information that MC provides only 60% protection against HIV transmission through heterosexual intercourse. Client needs to employ other preventive measures so that he can be more protected. These include abstainence, being faithful, appropriate and consistent use of condom, and avoiding sharps and needle sharing. ",
        "impact": "0"
      }],
      "nextMove": 7,
      "prevMove": 5
    },
    "7": {
      "situationText": "Zabron requests for his wife to be circumcised too so as both they can be protected against HIV.",
      "choices": [{
        "choiceText": "You inform him that female circumcision is not done at the hospital and instruct/refer him where he can get the service at the community.",
        "comment": "As a health care provider, use this opportunity to discuss with client about gender equality and discourage FGM. Point out clearly that there nothing like female circumcision but rather a Female Genital Mutilation (FGM).  FGM is a harmful practice and has no health benefits.  It doesn’t provide protection against HIV infections and accelerates HIV transmission when done in unsterile envronment.  FGM has a number of complications including excessive bleeding, infection and loss of significant amount of blood during delivery.  Women should be empowered to make informed decisions on their health choices.",
        "impact": "-1"
      }, {
        "choiceText": "You inform client that FGM does not protect women against HIV infection. ",
        "comment": "FGM is a harmful practice and has no health benefits. As a health care provider, use this opportunity to discuss with client about gender equality.  Point out clearly that there nothing like female circumcision but rather a Female Genital Mutilation (FGM).   It  doesn’t provide protection against HIV infections and accelerates HIV transmission when done in unsterile envronment.  FGM has a number of complications to women including excessive bleeding, infection and loss of significant amount of blood during delivery. Women should be empowered to make informed decisions on their health choices.",
        "impact": "0"
      }, {
        "choiceText": "You inform the client that FGM is a practice to be discouraged and there is no research which informs on protection against getting HIV. ",
        "comment": "Excellent response. As a health care provider, use this opportunity to discuss with client about gender equality and discourage FGM. Point out clearly that there nothing like female circumcision but rather a Female Genital Mutilation (FGM).  FGM is a harmful practice and has no health benefits. It doesn’t provide protection against HIV infections and accelerates HIV transmission when done in unsterile envronment.  FGM has a number of complications including excessive bleeding, infection and loss of significant amount of blood during delivery. Women should be empowered to make informed decisions on their health choices.",
        "impact": "+1"
      }],
      "nextMove": "clientC",
      "prevMove": 6
    },
  },
  "clientC": {
    "0": {
      "situationText": "A day school teacher from the local primary school comes with 15 students who are at standard six and seven, aged between 14-16 years old for VMMC services. He says he will sign a consent form for them. As the counselor what will you do?",
      "choices": [{
        "choiceText": "You agree for him to sign consent and you thank him for coming with so many clients and you request him to come with more clients as they are important for the program to reach targets.",
        "comment": "This is not appropriate or allowed. As a health provider, inform the teacher that all clients below 18yrs need have their parents / guardians consent on their behalf. The provider should make sure that the guardian / parent understsands the benefits and potential risks associated with MC and what their responsibility regarding post MC wound care and follow-up.<br><br>The teacher should be appreciated for the efforts s/he has made, but s/he should be told that only guardians / parents are eligible to provide consent.",
        "impact": "-1"
      }, {
        "choiceText": "You inform the teacher that there is no problem and each student will sign his own consent form.",
        "comment": "This is not allowed.  As a health provider, inform the teacher that all clients below 18yrs need have their parents / guardians consent on their behalf. The provider should make sure that the guardian / parent understands the benefits and potential risks associated with MC and what their responsibility is regarding post MC wound care and follow-up.<br><br>The teacher should be appreciated for the efforts s/he has made, but s/he should be told that only guardians / parents are eligible to provide consent.",
        "impact": "-1"
      }, {
        "choiceText": "You thank the teacher for bringing the children for VMMC services and inform him that its only parents or guardians who are staying with children can sign for consent. Also, it’s important for children not to be subjected to procedure without their assent – since some may have come due to fear of the teacher.",
        "comment": "This is excellent. All clients below 18yrs need have their parents / guardians consent on their behalf.  The provider should make sure that the guardian / parent understsands the benefits and potential risks associated with MC and their responsibility regarding post MC wound care and follow-up.<br><br>The teacher should be appreciated for the efforts s/he has made, but s/he should be told that only guardians / parents are eligible to provide consent.",
        "impact": "+1"
      }],
      "nextMove": 1,
      "prevMove": "clientB"
    },
    "1": {
      "situationText": "After the teacher learns that the school children are not able to receive circumcision services without the consent of their parents or guardians, he becomes upset that he has wasted time and money transporting the children.  As a counselor, what will you do? ",
      "choices": [{
        "choiceText": "Ignore his frustration and refuse to waste more time—there are many other clients in line for services!",
        "comment": "This is not appropriate.  As a provider, instead of ignoring the teacher's frustration, acknowledge it. Appreciate the fact the teacher took initiative to bring in students for MC.  Elaborate on benefits and risks for MC. Explain the importance of bringing in the parents/guardian for consent and the need proper health education, wound care and post-op follow-up.  Help him understand that by law if he were to take responsibility that would include taking care of students during their recovery and ensuring that they come back for follow up, and he'd be answerable in case anything should happen related to MC.",
        "impact": "-1"
      }, {
        "choiceText": "Calmly discuss the matter with the teacher and allow the other staff members to manage the long lines of clients.",
        "comment": "It is good to respond with patience. Acknowledge his frustration and work quickly to come up with a solution. As a provider a,ppreciate the fact the teacher took initiative to bring in students for MC. Elaborate on benefits and risks for MC.   Explain the importance of bringing in the parents/guardian for consent and the need proper health education, wound care and post-op follow-up.  Help him understand that by law if he were to take responsibility that would include taking care of students during their recovery and ensuring that they come back for follow up, and he'd be answerable in case anything should happen related to MC.",
        "impact": "0"
      }, {
        "choiceText": "Acknowledge the teacher frustration. Calmly discuss the matter and come up with a quick solution to the problem. Explain the importance of bringing in the parents/guardian for consent, proper health education, wound care and post-op follow-up",
        "comment": "This is excellent. Acknowledge his frustration and work quickly to come up with a solution. As a provider a,ppreciate the fact the teacher took initiative to bring in students for MC. Elaborate on benefits and risks for MC.   Explain the importance of bringing in the parents/guardian for consent and the need proper health education, wound care and post-op follow-up.  Help him understand that by law if he were to take responsibility that would include taking care of students during their recovery and ensuring that they come back for follow up, and he'd be answerable in case anything should happen related to MC.",
        "impact": "+1"
      }],
      "nextMove": 2,
      "prevMove": 0
    },
    "2": {
      "situationText": "Before the teacher leaves with the group of school children you notice that there is an unexpected free time in between counseling clients. As a counselor, what do you do?",
      "choices": [{
        "choiceText": "Provide circumcisions to all the children as there is now free time! ",
        "comment": "Providing circumcision to the children is not permitted.  MC should only be provided after obtaining consent from parents or guardian.  Take the opportunity to provide health education and counseling to the school children. Talk to them about HIV and STI prevention and explain the circumcision procedure and its benefits so that they are more informed to discuss with their parents. <br><br>Provide them with printed EIC materials to read when they are back home",
        "impact": "-1"
      }, {
        "choiceText": "Take the opportunity to provide sexual education and counseling to the school children. Talk to them about HIV and STI prevention and explain the circumcision procedure so they are more informed to discuss with their parents. ",
        "comment": "That is excellent to provide health education and counseling.  Provide them with printed EIC materials to read when they are back home after educating then on HIV and STI prevention and the circumcision procedure.",
        "impact": "+1"
      }, {
        "choiceText": "Wave goodbye to the client and the group of school children; tend to some paperwork.",
        "comment": "This is a missed opportunity to provide more health education and counseling on HIV and STI preventive measures.  Talk to them about HIV and STI prevention and explain the circumcision procedure and its benefits so that they are more informed to discuss with their parents. <br><br>Provide them with printed EIC materials to read when they are back home.",
        "impact": "0"
      }],
      "nextMove": 3,
      "prevMove": 1
    },
    "3": {
      "situationText": "One of the students pulls you aside and says he is sexually active and experiencing pain during sexual intercourse. As a counselor, what do you do?",
      "choices": [{
        "choiceText": "Ask the school teacher to wait until you can have a brief discussion with the boy. Provide counseling and refer the boy for HIV and STI counseling. ",
        "comment": "This is appropriate and respectful care for adolscents. As per National VMMC and HTS Guidelines, all under 18 who are sexually active or otherwise believed to be at risk for HIV infection are considered mature minor and can consent for themselves. Since this boy has decleared to be sexually active, he should be offered adolescent sexual reproductive education and counseling and then subjected to STI screening and HIV testing.",
        "impact": "+1"
      }, {
        "choiceText": "Ask the boy to wait in the waiting room and explain the situation to the boy’s teacher. ",
        "comment": "This is not appropriate care.  The boy should be assured and given privacy and confidentiality. Breaching confidentiality will hinder him from accessing HIV and STI services. National VMMC and HTS Guidelines describe all under 18 who are sexually active or otherwise believed to be at risk for HIV infection are considered mature minor and can consent for themselves. Since this boy has decleared to be sexually active, he should be offered adolescent sexual reproductive education and counseling and then subjected to STI screening and HIV testing",
        "impact": "-1"
      }, {
        "choiceText": "Tell the boy to stop engaging in sexual activities. ",
        "comment": "This is not appropriate care.  As a provider, give quality care to clients of all ages.  The boy should be assured and given privacy and confidentiality. Being judgemental will make the boy less willing to share important information which can later be used to guide your counseling. National VMMC and HTS Guidelines describe all under 18 who are sexually active or otherwise believed to be at risk for HIV infection are considered mature minor and can consent for themselves. Since this boy has decleared to be sexually active, he should be offered adolescent sexual reproductive education and counseling and then subjected to STI screening and HIV testing",
        "impact": "0"
      }],
      "nextMove": 4,
      "prevMove": 2
    },
    "4": {
      "situationText": "One of the students (above 17 years) during group education asks if he can get MC services without being tested for HIV. As a counselor, what will you do?",
      "choices": [{
        "choiceText": "Tell him that MC services will not be given. HIV testing is a must. ",
        "comment": "This is incorrect.  HIV testing is an opt-out approach in MC services. As a health care provider, explain to the young man that HTS is an important component in VMMC program. Men are encouraged to know their HIV status so that they can make informed health choices. Although HTS is an opt-out services, inform the young man that the government has HIV screening tool for all boys 19yrs and below. Only those considered eligible (at risk of HIV) will be offered HTS services.",
        "impact": "-1"
      }, {
        "choiceText": "You tell him not to waste your time from those who are ready to test.",
        "comment": "This is incorrect. As a health care provider use this opportunity to explain that HTS is an important component in VMMC program. Men are encouraged to know their HIV status so that they can make informed health choices  with respect to their HIV status. Although HTS is an opt-out services, inform the young man the government has HIV screening tool for all boys 19yrs and below. Only those considered eligible (at risk of HIV) will be offered HTS services.",
        "impact": "0"
      }, {
        "choiceText": "You tell the young man that he should make an informed decision whether to undergo HIV testing or not. In this large group of school children, however, you also insist on the importance of HIV testing to clients and use counseling skills to help the client make an informed decision.",
        "comment": "Excellent. HTS is an important component in VMMC program. Men are encouraged to know their HIV status so that they can make informed health choices  with respect to their HIV status. Although HTS is an opt-out services, the young man should be told that the government has HIV screening tool for all boys 19yrs and below. Only those considered eligible (at risk of HIV) will be offered HTS services.",
        "impact": "0"
      }],
      "nextMove": 5,
      "prevMove": 3
    },
    "5": {
      "situationText": "The school teacher is worried that MC services will compromise students’ attendance after having the MC procedure, as they will require one week for resting at home. As a provider how will you respond?",
      "choices": [{
        "choiceText": "They should wait until the leave period when they will be free to access the service. ",
        "comment": "Reassure the teacher that students undergoing MC will only need to be exempted from heavy duties for first seven days otherwise they can resume to classsrooms as early as three days post MC. Proper schedule can be made to ensure students are not taking advantage of MC to abscond classes.",
        "impact": "-1"
      }, {
        "choiceText": "School should be closed so that students can attend MC services and they will resume with classes after they have been circumcised.",
        "comment": "Reassure the teacher that students undergoing MC will only need to be exempted from heavy duties for first seven days otherwise they can resume to classsrooms as early as three days post MC. Proper schedule can be made to ensure students are not taking advantage of MC to abscond classes.",
        "impact": "-1"
      }, {
        "choiceText": "After MC procedure, students are advised to rest for two or three days and they can resume classes. ",
        "comment": "Reassure the teacher that students undergoing MC will only need to be exempted from heavy duties for the first seven days otherwise they can resume to classsrooms as early as three days post MC. Proper schedule can be made to ensure students are not taking advantage of MC to abscond classes.",
        "impact": "0"
      }],
      "nextMove": null,
      "prevMove": 4
    }
  }
}

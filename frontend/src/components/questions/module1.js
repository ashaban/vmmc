module.exports = {
  "clientA": {
    "0": {
      "situationText": "A 20-year-old male (Client A) from a neighboring village comes to the VMMC campaign.  He’s been waiting all day for his turn for individual counseling.  You greet the client respectively and with kindness.  You introduce yourself and ask for the name of the client.  What is your next step?",
      "choices": [{
        "choiceText": "A. Ask the client if his caretaker/parent would like to participate",
        "comment": "Client might be slightly offended",
        "impact": "-1"
      }, {
        "choiceText": "B. Begin talking about circumcision procedure.",
        "comment": "Did not ask client if they had questions before jumping to the procedure, may miss gaps in knowledge or bypass vital information",
        "impact": "-1"
      }, {
        "choiceText": "C. Ask the client to tell you what he already knows about male circumcision.",
        "comment": "This gives a provider an opportunity to learn about the client’s level of understanding and any information gaps",
        "impact": "+1"
      }],
      "nextMove": 1,
      "prevMove": null
    },
    "1": {
      "situationText": "Client A interrupts your explanation of the circumcision procedure to ask you some questions.  He tells you he’s worried that MC will cause infertility.  You:",
      "choices": [{
        "choiceText": "A. Laugh a little and tell the client not to ask such silly questions before explaining the facts about MC.",
        "comment": "Provider is not being respectful.",
        "impact": "-1"
      }, {
        "choiceText": "B. Ask the client more about why they think this way.",
        "comment": "By asking questions you understand more about the client’s thinking and popular myths in the area that may need to be addressed in group education.",
        "impact": "+1"
      }, {
        "choiceText": "C. Respond that MC does not cause infertility before moving on.",
        "comment": "While you corrected misinformation, missed opportunity to talk about sexual and reproductive health with your client.",
        "impact": "0"
      }],
      "nextMove": 2,
      "prevMove": 0
    },
    "2": {
      "situationText": "Client A tells you he is HIV positive.  How do you respond?",
      "choices": [{
        "choiceText": "A. Tell him sorry but you cannot risk you and the other health workers’ safety by performing surgery on an HIV+ client.",
        "comment": "Any increased risk in performing MC on an HIV+ client can be mitigated through correct safety protocols.",
        "impact": "-1"
      }, {
        "choiceText": "B. Try to find out more about his understanding of MC and why he is seeking services.",
        "comment": "This is a great opportunity to reduce stigma and gather more information before taking the next step in service provision.",
        "impact": "+1"
      }, {
        "choiceText": "C. Tell him he’s not eligible since he’s already HIV positive.",
        "comment": "Although he already has HIV, MC can still protect against other STDs and is still beneficial for his reproductive health.",
        "impact": "-1"
      }],
      "nextMove": 3,
      "prevMove": 1
    },
    "3": {
      "situationText": "You explain that MC does not protect partners from contracting HIV and then you ask if he is receiving treatment at the Care and Treatment Centre (CTC). What next?",
      "choices": [{
        "choiceText": "A. The client tells you he is receiving CTC services so you tell him you can perform the circumcision.",
        "comment": "Missed opportunity to discuss ART adherence and information on VMMC’s impact on STI protection and hygiene promotion, additionally CD4 counts are necessary before performing surgical procedures.",
        "impact": "-1"
      }, {
        "choiceText": "B. The client tells you he is not receiving CTC services so you tell him you cannot perform the circumcision.",
        "comment": "Missed opportunity to refer client to CTC services. Additionally, missed opportunity to explain that MC will not provide benefit to HIV status but can protect against STIs. Additionally, you must explain that if he would like the surgery he can bring his CD4 count.",
        "impact": "-1"
      }, {
        "choiceText": "C. The client tells you he is receiving CTC and you ask him to bring documentation of his last CD4 count before the surgical procedure.",
        "comment": "Although the CD4 count is necessary before a surgical procedure, the client has already waited all day for the surgery. It is best to provide assistance in gathering CD4 count and make arrangements for the client to return for his surgery. Additionally, do not forget to provide ART adherence reminders and explain that MC will not impact his HIV status but it can help protect against STIs.",
        "impact": "0"
      }],
      "nextMove": 4,
      "prevMove": 2
    },
    "4": {
      "situationText": "Client A is now on ARV; though he has been cleared for VMMC procedure, he is worried about delayed wound healing time due to his HIV status.",
      "choices": [{
        "choiceText": "You tell client that he will heal normally as other HIV negative clients; it will take up seven days for superficial wound healing and six weeks for complete wound healing.",
        "comment": "Providers should use this opportunity to insist on adherence to ARV drugs, post op wound care to facilitate healing and return visits.",
        "impact": "+1"
      }, {
        "choiceText": "You tell the client that there will be delays in wound healing due his HIV status.",
        "comment": "As long as he is on ARV and CD4 count is high - more than 250 - and he is taking care of the wound, there will be no difference in healing due to HIV status.",
        "impact": "-1"
      }, {
        "choiceText": "You assure the client that there will be no delayed healing since ALL HIV positive clients are given prophylactic antibiotics.",
        "comment": "This is not recommended practice; antibiotic is given only when there wound infection.",
        "impact": "-2"
      }],
      "nextMove": "clientB",
      "prevMove": 3
    }
  },
  "clientB": {
    "0": {
      "situationText": "Client B, aged 27 years old, HIV negative, married with two children, tells you that he needs MC services and he has got work permission for ten days only; he is afraid of losing a job as he might require two weeks for complete healing. You:",
      "choices": [{
        "choiceText": "Tell him that it’s true that he need two weeks and hence he might lose his job.",
        "comment": "This information is not correct and will dissuade client from pursuing the procedure",
        "impact": "-1"
      }, {
        "choiceText": "You inform him that he only need 5-7 days for superficial healing process. So, ten days are enough, and he can have MC procedure.",
        "comment": "Providing clients with a realistic timeframe is best.",
        "impact": "+1"
      }, {
        "choiceText": "Tell him to return to work and ask for two weeks permission.",
        "comment": "This may dissuade the client from considering the procedure.  The healing will be well advanced after 7 days and one can return to normal activities.",
        "impact": "0"
      }],
      "nextMove": 1,
      "prevMove": "clientA"
    },
    "1": {
      "situationText": "Many clients use bicycles/ motorcycles as the means of transport and source of income. Client B is worried of his family income as he is doing business of bicycle taxi (bodaboda). As the counselor you advise him that he will return shortly to his business. You will tell your clients after circumcision that:",
      "choices": [{
        "choiceText": "He should not ride a bicycle for the first three days after operation",
        "comment": "This is the advice providers should give.",
        "impact": "+1"
      }, {
        "choiceText": "He can ride his bicycle after 24 hours after circumcision.",
        "comment": "Not advisable as it increases pelvic pressure and leads to untying of sutures hence bleeding.",
        "impact": "0"
      }, {
        "choiceText": "He can ride his bicycle after ten days.",
        "comment": "His advice will deter clients of VMMC services especially those who use bicycle frequently.",
        "impact": "-1"
      }],
      "nextMove": 2,
      "prevMove": 0
    },
    "2": {
      "situationText": "Client B is also worried about the risks of the procedure. He has never had surgery before and is concerned about complications. You will tell your client: ",
      "choices": [{
        "choiceText": "There are no risks associated with circumcision.",
        "comment": "While the adverse event rates are low, there are risks associated with the procedure and it’s important to educate the client honestly without increasing fear.",
        "impact": "-1"
      }, {
        "choiceText": "There are risks associated with circumcision, but the chances of these occurring are very rare.",
        "comment": "While the explanation is accurate, it’s best to include specifics about the risks including pain, infection, swelling, and delayed healing, so the client is well informed.",
        "impact": "0"
      }, {
        "choiceText": "In addition to the many benefits of circumcision there are a few risks. These are unlikely but may include pain, infection or hematoma which is a blood clot under the skin.",
        "comment": "his answer incorporates mentioning the benefits of circumcision while accurately reflecting the possible risks.",
        "impact": "+1"
      }],
      "nextMove": 3,
      "prevMove": 1
    },
    "3": {
      "situationText": "Client B says he has 2 sons (a 4-year-old and a 12-year-old) and he wants to know if he should bring them in for VMMC. You will tell your client: ",
      "choices": [{
        "choiceText": "The 12-year-old child should be brought in for circumcision.",
        "comment": "The 12-year-old child could be brought to the clinic for circumcision because is within the eligible age category for VMMC. The recommended age for circumcision in the VMMC program boys 10 years old and older. ",
        "impact": "+1"
      }, {
        "choiceText": "A 4-year-old child can be brought in for VMMC services.",
        "comment": "child under 10 cannot be circumcised under this program, VMMC services are for those who are at higher risk of acquiring HIV through heterosexual transmission. ",
        "impact": "0"
      }, {
        "choiceText": "All children are sexually active; therefore, they need to be offered VMMC",
        "comment": "This is untrue. The VMMC services are offered to boys 10 years old and older, and who are considered to be sexually active.",
        "impact": "-1"
      }],
      "nextMove": "clientC",
      "prevMove": 2
    }
  },
  "clientC": {
    "0": {
      "situationText": "A day school teacher from the local primary school comes with 15 students who are at standard six and seven, aged between 14-16 years old for VMMC services. He says he will sign a consent form for them. As the counselor what will you do?",
      "choices": [{
        "choiceText": "You agree for him to sign consent and you thank him for coming with so many clients and you request him to come with more clients as they are important for the program to reach targets.",
        "comment": "This is not right; a parent or guardian should sign consent and get instructions on how to take care of the children.",
        "impact": "-1"
      }, {
        "choiceText": "You inform the teacher that there is no problem and each student will sign his own consent form.",
        "comment": "This information is not correct; consent is required from the guardians of clients under 18.",
        "impact": "-1"
      }, {
        "choiceText": "You thank the teacher for bringing the children for VMMC services and inform him that its only parents or guardians who are staying with children can sign for consent. Also, it’s important for children not to be subjected to procedure without their assent – since some may have come due to fear of the teacher.",
        "comment": "This is the correct response.",
        "impact": "+1"
      }],
      "nextMove": 1,
      "prevMove": "clientB"
    },
    "1": {
      "situationText": "After the teacher learns that the school children are not able to receive circumcision services without the consent of their parents or guardians, he becomes upset that he has wasted time and money transporting the children.  As a counselor, what will you do? ",
      "choices": [{
        "choiceText": "Ignore his frustration and refuse to waste more time—there are many other clients in line for services!",
        "comment": "Explain the importance of bringing in the parents/guardian for consent, proper health education, wound care and post-op follow-up.",
        "impact": "-1"
      }, {
        "choiceText": "Calmly discuss the matter with the teacher and allow the other staff members to manage the long lines of clients.",
        "comment": "While it is good to respond with patience, it is also not advisable to neglect the other clients waiting in line. Acknowledge his frustration and work quickly with the client to come up with a solution.",
        "impact": "0"
      }, {
        "choiceText": "Acknowledge the teacher frustration. Calmly discuss the matter and come up with a quick solution to the problem. Explain the importance of bringing in the parents/guardian for consent, proper health education, wound care and post-op follow-up",
        "comment": "This option is both efficient and provides an opportunity for the group to return for services.",
        "impact": "+1"
      }],
      "nextMove": 2,
      "prevMove": 0
    },
    "2": {
      "situationText": "One of the students (above 17 years) during group education asks if he can get MC services without being tested for HIV. As a counselor, what will you do?",
      "choices": [{
        "choiceText": "Tell him that MC services will not be given. HIV testing is a must.",
        "comment": "HTS in MC services follows an opt-out approach.",
        "impact": "-1"
      }, {
        "choiceText": "You tell him not to waste your time from those who are ready to test.",
        "comment": "Missed opportunity to explain (individually and to the large group of school children) the importance of HIV testing and linking prevention benefits MC offers against HIV.",
        "impact": "0"
      }, {
        "choiceText": "You tell the young man that he should make an informed decision whether to undergo HIV testing or not. In this large group of school children, however, you also insist on the importance of HIV testing to clients and use counseling skills to help the client make an informed decision.",
        "comment": "The purpose of this VMMC program is to provide MC for HIV prevention, thus, HTS is an important component for all clients.",
        "impact": "+1"
      }],
      "nextMove": 3,
      "prevMove": 1
    },
    "3": {
      "situationText": "The school teacher is worried that MC services will compromise students’ attendance after having the MC procedure, as they will require one week for resting at home. As a provider how will you respond?",
      "choices": [{
        "choiceText": "They should wait until the leave period when they will be free to access the service.",
        "comment": "The provider should assure the teacher that after MC procedure, clients are advised to rest for two or three days and not to do heavy work.",
        "impact": "-1"
      }, {
        "choiceText": "School should be closed so that students can attend MC services and they will resume with classes after they have been circumcised.",
        "comment": "No need to close schools as both programs can operate at the same time without compromising each other.",
        "impact": "-1"
      }, {
        "choiceText": "After MC procedure, students are advised to rest for two or three days and they can resume classes.",
        "comment": "You should assure the teacher that after MC procedure clients are advised to rest for few days and not to do heavy work; teacher can help excusing those students from heavy duties if any.",
        "impact": "+1"
      }],
      "nextMove": null,
      "prevMove": 2
    }
  }
}

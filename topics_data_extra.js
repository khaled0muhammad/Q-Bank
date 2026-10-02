// topics_data_extra.js
// Additional topics to append to the existing topicsData array.
// Load this AFTER questions_data.js and BEFORE build_questions.js.
//
// ⚠️ Rule: always APPEND new questions to the END of a topic's questions array.
// Never insert in the middle or reorder, because ids are positional.

const extraTopics = [
  {
    id: "formative_40_mid",       // ⚠️ DO NOT CHANGE — progress in Firebase is keyed by this
    title: "GIT shehab",          // display name shown to users
    source: "GIT shehab",
    questions: [
      // Q1
      {
        q: "Which of the following metabolic disorders doesn't cause constipation?",
        opts: ["Hypercalcemia", "Hyperkalemia", "Hypothyroidism", "Diabetes insipidus"],
        correct: 1,
        reason: "Hyperkalemia does not cause constipation. Hypercalcemia, hypothyroidism, and diabetes insipidus are recognized metabolic causes of constipation.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q2
      {
        q: "Which of the following isn't a common cause of gastrointestinal bleeding in infancy?",
        opts: ["Bacterial enteritis", "Intussusception", "Meckel's diverticulum", "Lymphonodular hyperplasia"],
        correct: 2,
        reason: "Meckel's diverticulum typically presents after infancy (usually in toddlers and older children), unlike the other options which are common in infancy.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q3
      {
        q: "Meckel's diverticulum has been conveniently referred to by the 'rule of 2s,' which explains the classic presentation of this congenital anomaly. Which one of the following is FALSE in this rule?",
        opts: ["Found in approximately 2% of the general population", "Usually located 2 feet proximal to the ileocecal valve", "Approximately 2 inches in length", "Found twice as commonly in females"],
        correct: 3,
        reason: "Meckel's diverticulum is actually more common in MALES (male-to-female ratio ~2:1), not females.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q4
      {
        q: "Confirmation of a Meckel's diverticulum can be difficult. Of the following, what is the MOST sensitive study?",
        opts: ["Plain abdominal radiographs", "Technetium-99m pertechnetate scintigraphy (Meckel scan)", "Barium enema", "Abdominal ultrasound"],
        correct: 1,
        reason: "Technetium-99m pertechnetate scintigraphy (Meckel scan) is the most sensitive and specific study for ectopic gastric mucosa in Meckel's diverticulum.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q5
      {
        q: "Hirschsprung disease hasn't been seen in association with which of the following?",
        opts: ["Microcephaly", "Mental retardation", "Autism", "Cleft lip"],
        correct: 3,
        reason: "Hirschsprung disease is associated with Down syndrome, microcephaly, and mental retardation, but NOT with cleft lip.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q6
      {
        q: "In healthy full-term infants, meconium is passed within 48 hr of birth in:",
        opts: ["99%", "90%", "80%", "70%"],
        correct: 0,
        reason: "99% of healthy full-term infants pass meconium within 48 hours of birth.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q7
      {
        q: "What is the incidence of the presence of the classic triad of intussusception (pain, a palpable sausage-shaped abdominal mass and bloody or currant jelly stool)?",
        opts: ["≤ 20% of patients", "≤ 30% of patients", "≤ 40% of patients", "≤ 50% of patients"],
        correct: 1,
        reason: "The classic triad of intussusception is present in only about 30% of patients.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q8
      {
        q: "A healthy full-term boy found to have cleft palate. Your advice about the preferred time of surgical closure is before the age of which?",
        opts: ["6 months", "12 months", "18 months", "24 months"],
        correct: 1,
        reason: "Cleft palate repair is typically performed before 12 months of age (usually 6-12 months) to optimize speech development.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q9
      {
        q: "A 3-year-old child presents with history of fever, malaise, and difficult oral intake. Examination shows cervical lymphadenopathy with clusters of erythematous small vesicles involving oral mucosa and perioral skin. Of the following, what is the MOST beneficial therapy?",
        opts: ["Topical steroid", "Oral acyclovir", "Oral nystatin", "Oral amox-clav"],
        correct: 1,
        reason: "The presentation is herpetic gingivostomatitis. Oral acyclovir is the most beneficial therapy when started early.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q10
      {
        q: "An 18-month-old female presents with recurrent attacks of painless rectal bleeding; she had previous history of intussusception at age of 9 months treated by pneumatic reduction; clotting profile and blood film are normal apart from mild anemia. Of the following, what is the MOST likely diagnosis?",
        opts: ["Meckel's diverticulum", "Intussusception", "Amoebic dysentery", "Fissure in ano"],
        correct: 0,
        reason: "Recurrent painless rectal bleeding in a toddler with a previous intussusception and normal clotting suggests Meckel's diverticulum.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q11
      {
        q: "What is the most common type of tracheo-esophageal fistula?",
        opts: ["Atresia with distal fistula", "Atresia with double fistula", "Atresia with proximal fistula", "Atresia with H-shaped fistula"],
        correct: 0,
        reason: "Esophageal atresia with distal tracheoesophageal fistula is the most common type (~85%).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q12
      {
        q: "What is the most common organism causing diarrhea in children who consume eggs and milk?",
        opts: ["E. coli", "Salmonella", "Campylobacter", "Shigella"],
        correct: 1,
        reason: "Salmonella is classically associated with consumption of raw eggs and unpasteurized milk.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q13
      {
        q: "What is the recommended treatment for herpetic stomatitis in children?",
        opts: ["Acyclovir for 7 days", "Acyclovir for 14 days", "Topical steroid", "Oral nystatin"],
        correct: 0,
        reason: "Herpetic stomatitis is treated with acyclovir for 7 days.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q14
      {
        q: "Red currant Jelly stool in infants is characteristic of:",
        opts: ["Gastroenterology", "Anal fissure", "Intussusception", "Rectal piles"],
        correct: 2,
        reason: "Red currant jelly stool is a classic feature of intussusception.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q15
      {
        q: "What percentage of constipation cases in children are functional (without organic cause)?",
        opts: ["75%", "85%", "95%", "100%"],
        correct: 2,
        reason: "Approximately 95% of pediatric constipation is functional.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q16
      {
        q: "When is the definitive surgical repair for Hirschsprung disease usually performed in children?",
        opts: ["Within the first month of life", "Between 6 and 12 months of age", "Between 2 and 4 years of age", "After 5 years of age"],
        correct: 1,
        reason: "Definitive repair (e.g., pull-through) is usually performed between 6 and 12 months of age after a temporary colostomy.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q17
      {
        q: "A female child 4 years old came to emergency department with a history of vomiting and diarrhea, she was irritable and drinks eagerly, with normal skin elasticity and eyes. What is your diagnosis?",
        opts: ["Gastroenterology with no dehydration", "Gastroenterology with some dehydration", "Gastroenterology with severe dehydration", "Gastroenterology with disturbed consciousness"],
        correct: 1,
        reason: "Irritable + eager drinking + normal skin/eyes = Some dehydration (Plan B).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q18
      {
        q: "How long should a child have diarrhea to be defined as having persistent diarrhea?",
        opts: ["2 weeks", "4 weeks", "6 weeks", "8 weeks"],
        correct: 0,
        reason: "Persistent diarrhea is defined as diarrhea lasting ≥ 14 days (2 weeks).",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q19
      {
        q: "What is the most appropriate investigation to diagnose GERD?",
        opts: ["Upper endoscopy", "Esophagogram", "PH study of the esophagus", "History of recurrent aspiration"],
        correct: 2,
        reason: "24-hour esophageal pH monitoring is the best test to confirm and quantify GERD.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q20
      {
        q: "The commonest cause of non-infectious diarrhea is:",
        opts: ["Heavy metals", "Oral antibiotics", "Over feeding", "None of the above"],
        correct: 2,
        reason: "Overfeeding is the commonest cause of non-infectious diarrhea in infants.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q21
      {
        q: "Which of the following is a definitive diagnosis for Hirschsprung disease?",
        opts: ["Barium enema", "Anorectal manometry", "Rectal biopsy", "Abdominal ultrasound"],
        correct: 2,
        reason: "Rectal biopsy demonstrating absence of ganglion cells is the definitive diagnosis.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q22
      {
        q: "Which of the following is the most appropriate initial investigation for a case suspected to be Hirschsprung disease?",
        opts: ["Barium enema", "Anorectal manometry", "Rectal biopsy", "Abdominal ultrasound"],
        correct: 0,
        reason: "Barium enema is often the initial investigation showing the transition zone and delayed evacuation.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q23
      {
        q: "Which of the following grains is NOT avoided in a gluten-free diet for celiac disease?",
        opts: ["Wheat", "Barley", "Rye", "Corn"],
        correct: 3,
        reason: "Corn is gluten-free and allowed. Wheat, barley, and rye must be avoided.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q24
      {
        q: "What is the least common cause of chronic diarrhea in a 1-year-old child?",
        opts: ["Celiac disease", "Cow milk allergy", "Toddler's diarrhea", "Cystic fibrosis"],
        correct: 3,
        reason: "Cystic fibrosis is the least common cause of chronic diarrhea among these options in a 1-year-old.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q25
      {
        q: "What is the name of the congenital anomaly that results from the persistence of a remnant of the vitelline duct?",
        opts: ["Meckel's diverticulum", "Hirschsprung's disease", "Omphalocele", "Gastroschisis"],
        correct: 0,
        reason: "Meckel's diverticulum results from persistence of the vitelline (omphalomesenteric) duct remnant.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q26
      {
        q: "What is the term for the condition in which a segment of the intestine invaginates into another segment, causing intestinal obstruction and ischemia?",
        opts: ["Intussusception", "Volvulus", "Herniation", "Adhesion"],
        correct: 0,
        reason: "Intussusception is the invagination of a segment of intestine into an adjacent segment.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q27
      {
        q: "What is the characteristic feature of toddler's diarrhea?",
        opts: ["Painless, watery stools with undigested food particles", "Bloody, mucoid stools with abdominal pain and fever", "Greasy, foul-smelling stools with weight loss and anemia", "Explosive, watery stools with dehydration and electrolyte imbalance"],
        correct: 0,
        reason: "Toddler's diarrhea features painless, watery stools with undigested food particles in a well-grown child.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q28
      {
        q: "What is the most common cause of gastrointestinal bleeding in children younger than 2 years old?",
        opts: ["Intussusception", "Meckel's diverticulum", "Peptic ulcer disease", "Anal fissure"],
        correct: 0,
        reason: "Intussusception is the most common cause of GI bleeding in children younger than 2 years.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q29
      {
        q: "Causes of metabolic acidosis in childhood include all of the following EXCEPT:",
        opts: ["Diarrhea", "Diabetes mellitus", "Excessive vomiting", "Renal failure"],
        correct: 2,
        reason: "Excessive vomiting causes metabolic ALKALOSIS, not acidosis.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q30
      {
        q: "Which of the following is considered a cause of constipation in young infants?",
        opts: ["Cystic fibrosis", "Hyperthyroidism", "Hyperkalemia", "Hypocalcemia"],
        correct: 0,
        reason: "Cystic fibrosis (meconium ileus) is a recognized organic cause of constipation in young infants.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q31
      {
        q: "What dose of IV fluid would you prescribe for a child with acute gastroenteritis and severe dehydration?",
        opts: ["50 ml/kg", "75 ml/kg", "100 ml/kg", "100 ml/kg after each motion"],
        correct: 2,
        reason: "Plan C for severe dehydration is 100 ml/kg IV Ringer Lactate.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q32
      {
        q: "Cow's milk protein allergy cannot:",
        opts: ["Cause vomiting.", "Present with blood streaks in stool.", "Results in failure to thrive.", "Be treated with lactose free formula."],
        correct: 3,
        reason: "CMPA requires extensively hydrolyzed or amino acid formula, not just lactose-free formula.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q33
      {
        q: "Which two symptoms are sufficient to diagnose constipation in children?",
        opts: ["Two or fewer defecations per week and large fecal mass in rectum", "Painful, hard bowel movement and abdominal tenderness", "Large diameter stool may obstruct toilet and defecation every other day", "One fecal incontinence per week in a toilet trained child and abdominal pain"],
        correct: 0,
        reason: "Rome IV criteria include ≤2 defecations/week and a large fecal mass in the rectum.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q34
      {
        q: "Which of the following is FALSE regarding celiac disease?",
        opts: ["Immune mediated disease", "Diagnosed by high IgA", "Diagnosed by high anti-tissue transglutaminase IgA", "Lifelong treatment with gluten free diet", "Manifested by generalized malabsorption"],
        correct: 1,
        reason: "Celiac disease is diagnosed by elevated anti-tTG IgA, not by high total IgA. Total IgA is checked to rule out IgA deficiency.",
        ref: "GIT shehab",
        diff: "H"
      },
      // Q35
      {
        q: "Which of the following drugs is used in treatment of intestinal amoebiasis?",
        opts: ["Oral metronidazole for 10 days", "Oral praziquantel", "Oral mebendazole", "Oral co-trimoxazole"],
        correct: 0,
        reason: "Metronidazole for 10 days is the treatment of choice for intestinal amoebiasis.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q36
      {
        q: "For a child with diarrhea who is irritable with sunken eyes the treatment should be:",
        opts: ["Plan A", "Plan B", "Plan C", "Conservative"],
        correct: 1,
        reason: "Irritable + sunken eyes = Some dehydration → Plan B.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q37
      {
        q: "The most common cause of constipation in children is:",
        opts: ["Intussusception", "Functional constipation", "Crohn's disease", "Cow's milk allergy", "Celiac disease"],
        correct: 1,
        reason: "Functional constipation accounts for >95% of cases.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q38
      {
        q: "In toddlers' diarrhea all are true EXCEPT:",
        opts: ["3-6 stool per day", "Failure to thrive", "Between 2-4 years of age", "Self-limited"],
        correct: 1,
        reason: "Toddler's diarrhea is NOT associated with failure to thrive; growth is normal.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q39
      {
        q: "Acrodermatitis enteropathica is caused by:",
        opts: ["Copper deficiency", "Zinc deficiency", "Cobalt deficiency", "Magnesium deficiency"],
        correct: 1,
        reason: "Acrodermatitis enteropathica is caused by zinc deficiency/malabsorption.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q40
      {
        q: "A common cause of recurrent abdominal pain in children is:",
        opts: ["Duodenal ulcer", "Pneumonia", "Functional abdominal pain", "Obstructive uropathy", "Congenital intestinal malformation"],
        correct: 2,
        reason: "Functional abdominal pain is the most common cause of recurrent abdominal pain in children.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q41
      {
        q: "A 3-year-old boy presented with chronic diarrhea associated with abdominal distension and weight loss. His stool is bulky, offensive, greasy, floats on the surface and difficult to flush away. Which of the following is the most likely cause of this child's diarrhea?",
        opts: ["Yersinia enterocolitica", "Clostridium difficile", "Entamoeba histolytica", "Salmonella", "Giardia lamblia"],
        correct: 4,
        reason: "Giardia lamblia causes chronic diarrhea with steatorrhea (greasy, floating, foul-smelling stools) and malabsorption.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q42
      {
        q: "An 18-month-old child presented with chronic diarrhea for the last 5 months with anorexia and abdominal distension. On examination, his weight is 6.5 Kg and his height is 67 cm. His older brother had similar symptoms. A blood sample is positive for anti-tissue transglutaminase. Which of the following is the most appropriate line of treatment?",
        opts: ["Gluten-free diet for life", "Lactose-free diet", "Antibiotics", "Corticosteroids", "Metronidazole"],
        correct: 0,
        reason: "Anti-tTG positivity with chronic diarrhea, FTT, and family history indicates celiac disease; lifelong gluten-free diet is the treatment.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q43
      {
        q: "A 6-week-old male infant has projectile emesis after feeding. He has an olive-shaped abdominal mass on abdominal examination. Which of the following statements is accurate regarding his condition?",
        opts: ["This condition is more common in female infants", "He likely will develop diarrhea", "He likely has metabolic acidosis", "He likely has hypochloremic metabolic alkalosis", "He should be restarted on feeds when the vomiting resolves"],
        correct: 3,
        reason: "Hypertrophic pyloric stenosis causes hypochloremic, hypokalemic metabolic alkalosis due to loss of gastric HCl.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q44
      {
        q: "A 4-month-old infant is brought to the clinic by his mother because of 3 days of diarrhea and mild fever. The stools are non-bloody, watery, and voluminous and continue even when the infant is fasting. The infant's only significant history is premature birth at 34 weeks gestation. He is in the 60th percentile in weight and length for his age, and he has met his developmental milestones. A stool examination is negative for leukocytes, ova, and parasites. Which of the following is the most likely cause of this infant's diarrhea?",
        opts: ["Giardia lamblia", "Enteroinvasive Escherichia coli", "Lactose intolerance", "Campylobacter jejuni", "Rotavirus"],
        correct: 4,
        reason: "Rotavirus causes watery, non-bloody, voluminous diarrhea in an infant with recent onset and mild fever.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q45
      {
        q: "A newborn presents with bilious vomiting with every feed. Abdominal film reveals a double bubble sign. Which of the following is the most probable diagnosis?",
        opts: ["GERD", "Pyloric stenosis", "Tracheoesophageal fistula", "Esophageal atresia", "Duodenal atresia"],
        correct: 4,
        reason: "Bilious vomiting + double bubble sign on X-ray is classic for duodenal atresia.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q46
      {
        q: "A 7-month-old girl has been spitting up her meals since birth. Her growth is at the 5th percentile, and she is otherwise asymptomatic and without findings on physical examination. Which of the following is the most likely diagnosis?",
        opts: ["Tracheoesophageal fistula", "Gastroesophageal reflux", "Pyloric stenosis", "Hypothyroidism", "Partial duodenal atresia"],
        correct: 1,
        reason: "Regurgitation since birth with poor growth is most consistent with gastroesophageal reflux.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q47
      {
        q: "A 5-week-old boy presents with a 2-week-history of post prandial projectile vomiting and weight loss of 300 g. Vomiting consists of formula, being forceful, non-bilious, no bloody. The baby has an excellent appetite and always seems hungry. On examination, the patient is alert. The abdomen is soft, not tender, not distended. Which of the following is the best next step in management of this patient?",
        opts: ["Abdominal ultrasound", "Abdominal radiograph", "CT scan of the head", "Stool examination", "Serum 17-hydroxyprogesterone level"],
        correct: 0,
        reason: "Abdominal ultrasound is the diagnostic test of choice for pyloric stenosis, showing a target-like image.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q48
      {
        q: "A term 3700-g male infant is born vaginally to a 27-year-old gravida 2 mother following an uncomplicated pregnancy. Shortly after birth, he begins to cough, followed by a choking episode, difficulty handling secretions, and cyanosis. During the resuscitation, placement of an orogastric tube meets resistance at 10 cm. He is transferred to the level II nursery for evaluation and management of respiratory distress. Which of the following is the most likely diagnosis?",
        opts: ["Viral gastroenteritis", "Duodenal atresia", "GERD", "Pyloric stenosis", "Esophageal atresia with TEF"],
        correct: 4,
        reason: "Choking, cyanosis, difficulty handling secretions, and resistance to orogastric tube at 10 cm indicate esophageal atresia with TEF.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q49
      {
        q: "An 8-month-old breast fed infant was brought to the pediatric clinic with the complaint of fever and frequent loose motions since 2 days. He vomited twice in the last 4 hours. No abnormal data could be detected on examination. The plan of treatment will include which of the following?",
        opts: ["Stop breast feeding and give low lactose formula until diarrhea improves", "Admit to the hospital and start IV fluids on maintenance therapy", "Admit to rehydration center, start ORS for 4 hours then allow breast feeding", "Prescribe antiemetic drug and send home", "Continue on breast feeding plus ORS at home"],
        correct: 4,
        reason: "No dehydration → Plan A: continue breastfeeding plus ORS at home after each loose stool.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q50
      {
        q: "Asmaa, 1-year-old girl presented with 2 months history of diarrhea. She looks well and healthy. Her weight is 10.5 Kg and height is 75 Cm. Her history is significant for excessive consumption of peach juice. Stool examination is negative for ova, parasites, pus cells, RBCS and contains no fat. Occult blood in stool is negative. Which of the following is the most likely diagnosis for her condition?",
        opts: ["Very early onset IBD", "Cystic fibrosis", "Celiac disease", "Chronic nonspecific diarrhea of infancy", "Cows milk protein allergy"],
        correct: 3,
        reason: "Well-grown child with chronic diarrhea and excessive juice intake = chronic nonspecific diarrhea (toddler's diarrhea).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q51
      {
        q: "A 2-year-old boy presents with a 1-week history of painless rectal bleeding. Physical examination is unremarkable. The abdomen is soft and nontender. Rectal examination is unremarkable. Which of the following is the most probable diagnosis?",
        opts: ["Intussusception", "Meckel's Diverticulum", "Anal fissure", "Esophageal varices", "Peptic Ulcer"],
        correct: 1,
        reason: "Painless massive rectal bleeding in a 2-year-old with unremarkable exam is classic for Meckel's diverticulum.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q52
      {
        q: "An 11-month-old boy was brought to the emergency department with an acute onset of vomiting and diarrhea. On examination he was dehydrated. The patient received deficit fluid and maintenance. On the 2nd day the diarrhea stopped suddenly and abdominal pain developed with currant jelly stools. Which of the following is the most likely diagnosis?",
        opts: ["Functional intestinal obstruction", "Intussusception", "Volvulus", "Hirschsprung disease", "Meckel's diverticulum"],
        correct: 1,
        reason: "Sudden cessation of diarrhea followed by colicky pain and currant jelly stools suggests intussusception.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q53
      {
        q: "A newborn infant is noted to have white plaques on his buccal mucosa that are difficult to scrape off with a tongue depressor. When removed, a small amount of bleeding is noted by the nurse. The infant just received a course of empiric antibiotics for suspected Group B hemolytic Streptococcus infection. Which of the following is the most probable etiologic agent of this mouth lesion?",
        opts: ["Epstein-Barr virus", "Cryptococcus fungus", "Herpes simplex virus", "Candida albicans", "Group B Beta hemolytic Streptococcus"],
        correct: 3,
        reason: "White plaques that bleed when scraped after antibiotics = oral thrush (Candida albicans).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q54
      {
        q: "A 10-day preterm neonate admitted to neonatal care unit and he is currently on IV antibiotic treatment for neonatal infection. Today, the nurse noticed white plaques over the tongue and inner lips as well as palate. When you tried to scrap them with tongue depressor, you find punctate bleeding. Which of the following is the most appropriate initial treatment?",
        opts: ["IV acyclovir", "Topical antibiotic", "IV Amphotericin B", "Oral nystatin", "Single dose fluconazole"],
        correct: 3,
        reason: "Oral nystatin is the first-line treatment for oral candidiasis (thrush).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q55
      {
        q: "Which of the following causes of gastroenteritis have been associated with seizures?",
        opts: ["E. Coli", "Campylobacter", "Salmonella", "Rotavirus", "Shigella"],
        correct: 4,
        reason: "Shigella is classically associated with seizures (due to Shiga toxin neurotoxicity).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q56
      {
        q: "A 3-year-old girl presents with acute onset of lethargy and pallor. She had bloody diarrhea for 5 days that cleared one day prior to presentation. She passed cola-colored urine. On examination, the patient is pale and lethargic. Blood pressure is 120/80 mm Hg. Which of the following is the most appropriate next step in diagnosis?",
        opts: ["X-ray examination of the abdomen", "Prothrombin time", "Urine culture", "Urinalysis", "Complete blood cell count"],
        correct: 4,
        reason: "Suspected HUS after bloody diarrhea → CBC is the next step to evaluate anemia and thrombocytopenia.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q57
      {
        q: "The following should be given during diarrhea EXCEPT:",
        opts: ["Breast feeding.", "Milk or milk formula.", "Soft weaning food.", "Hyperosmolar food."],
        correct: 3,
        reason: "Hyperosmolar food worsens osmotic diarrhea and should be avoided.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q58
      {
        q: "Diagnosed by x-ray, ultrasound, air or barium contrast enema, which sometimes reduces the obstruction without need for surgery:",
        opts: ["Intussusception", "Volvulus", "Dehydration."],
        correct: 0,
        reason: "Intussusception is diagnosed by ultrasound and can be reduced with air or barium contrast enema.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q59
      {
        q: "Causes of metabolic acidosis in childhood include all of the following EXCEPT:",
        opts: ["Diarrhea", "Excessive vomiting", "Diabetes mellitus", "Renal failure"],
        correct: 1,
        reason: "Excessive vomiting causes metabolic ALKALOSIS, not acidosis.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q60
      {
        q: "Clinical manifestations of Ascariasis:",
        opts: ["Pulmonary", "Intestinal", "Biliary obstruction", "All of the above"],
        correct: 3,
        reason: "Ascariasis can cause pulmonary (Löffler syndrome), intestinal, and biliary obstruction.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q61
      {
        q: "Skin turgor in hypernatremic dehydration is:",
        opts: ["Markedly lost", "Lost", "Normal skin"],
        correct: 2,
        reason: "In hypernatremic dehydration, skin turgor is relatively preserved (normal) because water shifts from intracellular to extracellular space.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q62
      {
        q: "The commonest cause of non-infectious diarrhea is:",
        opts: ["Heavy metals", "Oral antibiotics", "Over feeding"],
        correct: 2,
        reason: "Overfeeding is the most common cause of non-infectious diarrhea in infants.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q63
      {
        q: "Children suffering from constipation with overflow have:",
        opts: ["Long term of psychological disorders", "Daytime soiling only", "An acquired megacolon", "Painful defecation"],
        correct: 2,
        reason: "Chronic constipation with overflow leads to acquired megacolon.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q64
      {
        q: "Infantile hypertrophic pyloric stenosis:",
        opts: ["Is common in girls than boys", "Commonly presented with poor feeding", "Should be treated as surgical emergency", "Can be diagnosed reliably by ultrasound scanning"],
        correct: 3,
        reason: "Ultrasound is the reliable diagnostic modality for pyloric stenosis (target-like image).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q65
      {
        q: "The commonest organism causing acute diarrhea is:",
        opts: ["CMV", "Norwalk virus", "Rotavirus", "Adenovirus", "Astrovirus"],
        correct: 2,
        reason: "Rotavirus is the most common cause of acute diarrhea in infants and young children.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q66
      {
        q: "Causes of bleeding in acute gastroenteritis all of these except:",
        opts: ["Hypophosphorabinemia", "DIC", "Intestinal Hige", "Stress-ulcer"],
        correct: 2,
        reason: "Hypophosphatemia, DIC, and stress ulcers can cause bleeding; 'intestinal Hige' is not a recognized entity.",
        ref: "GIT shehab",
        diff: "H"
      },
      // Q67
      {
        q: "Most common causative organism of acute GE:",
        opts: ["Rotavirus", "Salmonella", "Shigella", "Yersinia"],
        correct: 0,
        reason: "Rotavirus is the most common causative organism of acute gastroenteritis in children.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q68
      {
        q: "The following are possible features of infants over-feeding except:",
        opts: ["Repeated colic and vomiting", "Hyperglycemia and glucosuria", "Diarrhea with bulky stools", "Polyuria and sore buttocks", "Dyspnea with excessive sweating"],
        correct: 1,
        reason: "Overfeeding does not cause hyperglycemia and glucosuria; it causes GI symptoms.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q69
      {
        q: "Management of severe dehydration involves all of the following except:",
        opts: ["IV Fluids", "Oral rehydration solution", "Continue breast feeding", "Anti-motility drugs"],
        correct: 3,
        reason: "Anti-motility drugs are contraindicated in acute diarrhea at any age.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q70
      {
        q: "The most important line of treatment in rota virus diarrhea without dehydration is:",
        opts: ["Oral antibiotics", "Antidiarrheal oral mixtures", "Oral rehydration solution", "Antiemetics", "IV fluids"],
        correct: 2,
        reason: "ORS is the mainstay of treatment for rotavirus diarrhea without dehydration.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q71
      {
        q: "The most common cause of viral gastroenteritis in infants is:",
        opts: ["Echo virus", "Rota virus", "Coxackie virus", "Adenovirus", "Parvovirus B-19"],
        correct: 1,
        reason: "Rotavirus is the most common cause of viral gastroenteritis in infants.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q72
      {
        q: "Gastroesophageal reflux is usually not associated with:",
        opts: ["Regurgitation following feeding", "Self-limited course in some cases", "Bile stained vomitus", "Possible wheezy chest", "Repeated aspiration"],
        correct: 2,
        reason: "GERD causes non-bilious regurgitation; bilious vomiting indicates obstruction.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q73
      {
        q: "All of the following are consistent with Hirschsprung's disease EXCEPT:",
        opts: ["Delayed passage of meconium.", "Abdominal distension.", "Repeated vomiting in neonatal period.", "Barium enema reveal a hugely distended colon."],
        correct: 3,
        reason: "In Hirschsprung's, barium enema shows a narrow aganglionic segment (transition zone), not a hugely distended colon.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q74
      {
        q: "Which of the following pathogens is the MOST common cause of chronic infectious diarrhea in developing countries?",
        opts: ["Shigella", "Rotavirus", "Enteroadherent E. coli", "Campylobacter", "Salmonella"],
        correct: 2,
        reason: "Enteroadherent E. coli is the most common cause of chronic infectious diarrhea in developing countries.",
        ref: "GIT shehab",
        diff: "H"
      },
      // Q75
      {
        q: "Which of the following is ONE of diagnostic criteria for abdominal migraine?",
        opts: ["Usually less than 1 hr in duration", "Mainly epigastric", "May be associated with photophobia", "Episodes are separated by days", "Pain does not interfere with normal activities"],
        correct: 2,
        reason: "Abdominal migraine is associated with photophobia and/or phonophobia, per Rome criteria.",
        ref: "GIT shehab",
        diff: "H"
      },
      // Q76
      {
        q: "A 24-hour-term newborn presents with respiratory distress, cyanosis, and frothy secretion from the mouth, O2 saturation 83% at room air, plain abdomen radiograph show airless abdomen; you are suspecting esophageal atresia (EA). Of the following, the MOST likely type is:",
        opts: ["H type", "EA with fistula connected to the distal and proximal ends", "Pure EA", "Blind proximal end and fistula connected to the distal end", "Blind distal end and fistula connected to the proximal end"],
        correct: 3,
        reason: "Airless abdomen suggests pure EA (no distal fistula) or proximal fistula; the classic type is blind proximal end with distal fistula.",
        ref: "GIT shehab",
        diff: "H"
      },
      // Q77
      {
        q: "What is the BEST position of plain radiograph for a newborn with suspected tracheoesophageal fistula?",
        opts: ["Prone", "Supine", "Left lateral", "Right lateral", "Semi-sitting"],
        correct: 0,
        reason: "Prone position is used for the plain radiograph in suspected TEF to show the coiled nasogastric tube.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q78
      {
        q: "A 4-year-old child presents to out-patient clinic with recurrent painful oral lesions. Examination shows a well-circumscribed ulcerative lesion in buccal mucosa with a white base surrounded by a red halo. Of the following, the BEST palliative therapy is topical application of:",
        opts: ["Nystatin", "Steroid", "Acyclovir", "Tetracycline", "Gentian violet"],
        correct: 1,
        reason: "Aphthous ulcers (well-circumscribed, white base, red halo) are treated palliatively with topical steroids.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q79
      {
        q: "A 3-year-old boy presents with low grade fever and large volume bloody diarrhea, he ate a sandwich of hamburger before 4 days. Of the following, the MOST causative pathogen is:",
        opts: ["Salmonella", "Shigella", "Campylobacter", "Entamoeba histolytica", "Enterohemorrhagic E. coli"],
        correct: 4,
        reason: "Undercooked hamburger + bloody diarrhea = EHEC (O157:H7).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q80
      {
        q: "A 5-year-old boy presents with sudden onset of severe nausea, vomiting, and abdominal cramps within 3 hours of ingestion of unrefrigerated meats and potato, followed by watery diarrhea. Of the following, the MOST likely causative pathogen is:",
        opts: ["Salmonella", "Shigella", "Staphylococcus aureus", "Campylobacter", "Shiga toxin-producing E. coli"],
        correct: 2,
        reason: "Rapid onset (within hours) after ingestion of unrefrigerated food = Staphylococcus aureus preformed toxin.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q81
      {
        q: "A 9-month-old infant evaluated for failure to thrive; history reveals frequent vomiting and arching his back during feeding with recurrent hospital visits for wheezing and shortness of breath. Of the following, the MOST likely diagnosis is:",
        opts: ["Intussusception", "Gastroesophageal reflux disease", "Asthma", "H-type esophageal fistula", "Achalasia"],
        correct: 1,
        reason: "FTT, vomiting, arching, and recurrent wheezing suggest GERD with aspiration.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q82
      {
        q: "Which of the following has the highest risk of pyloric stenosis if given in neonatal period?",
        opts: ["Cefixime", "Erythromycin", "Ampicillin", "Co-trimoxazole", "Co-amoxiclav"],
        correct: 1,
        reason: "Erythromycin given in the neonatal period is associated with an increased risk of pyloric stenosis.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q83
      {
        q: "Which of the following is the MOST common extraintestinal manifestation of celiac disease?",
        opts: ["Iron-deficiency anemia", "Short stature", "Enamel hypoplasia", "Aphthous stomatitis", "Peripheral neuropathies"],
        correct: 0,
        reason: "Iron-deficiency anemia is the most common extraintestinal manifestation of celiac disease.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q84
      {
        q: "Which of the following diets should be avoided in child with celiac disease?",
        opts: ["Soybean", "Rye", "Corn", "Buckwheat", "Maize"],
        correct: 1,
        reason: "Rye contains gluten and must be avoided in celiac disease.",
        ref: "GIT shehab",
        diff: "E"
      },
      // Q85
      {
        q: "Which of the following is used as a conservative management in pyloric stenosis in patients who are not good surgical candidates?",
        opts: ["Ondansetron", "Atropine sulfate", "Hyoscine bromide", "Domperidone", "Omeprazole"],
        correct: 1,
        reason: "Atropine sulfate is used as conservative management for pyloric stenosis in non-surgical candidates.",
        ref: "GIT shehab",
        diff: "H"
      },
      // Q86
      {
        q: "The hallmark of duodenal atresia is bilious vomiting and:",
        opts: ["History of polyhydramnios", "Jaundice", "No abdominal distention", "Visible peristalsis", "Bile stained amniotic fluid"],
        correct: 2,
        reason: "Duodenal atresia presents with bilious vomiting and NO abdominal distention (scaphoid abdomen).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q87
      {
        q: "Malrotation is incomplete rotation of the intestine during fetal development, which of the following is the MOST commonly affected part?",
        opts: ["Duodenum", "Jejunum", "Ileum", "Colon", "Cecum"],
        correct: 4,
        reason: "Malrotation most commonly affects the cecum (failure to rotate to the right lower quadrant).",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q88
      {
        q: "An 18-month-old female presents with recurrent attacks of painless rectal bleeding; she had previous history of intussusception at age of 9 month treated by pneumatic reduction; clotting profile and blood film are normal apart from mild anemia. Of the following, the MOST likely diagnosis is:",
        opts: ["Meckel diverticulum", "Intussusception", "Amoebic dysentery", "Fissure in ano", "Rectal polyp"],
        correct: 0,
        reason: "Recurrent painless rectal bleeding in a toddler with normal clotting = Meckel's diverticulum.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q89
      {
        q: "A 14-year-old child under evaluation for melena; gave history of 2 months of intermittent epigastric dull pain, sometimes awaking him at night. Of the following, the MOST appropriate test for diagnosis is:",
        opts: ["Urea breath test", "Stool antigen test for H. pylori", "Upper endoscopy", "Serology for H. pylori", "Abdominal ultrasound"],
        correct: 2,
        reason: "Upper endoscopy is the most appropriate test for diagnosing peptic ulcer disease presenting with melena.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q90
      {
        q: "What is the BEST time to repeat stool test for H. pylori antigen after complete eradication therapy?",
        opts: ["Immediately after stopping the therapy", "1 wk after stopping therapy", "2 wk after stopping therapy", "4 wk after stopping therapy"],
        correct: 3,
        reason: "Stool antigen test should be repeated at least 4 weeks after completing eradication therapy.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q91
      {
        q: "A 15-year-old boy under evaluation for growth failure and delayed sexual development. Past history reveals recurrent attacks of abdominal pain, diarrhea, mouth ulcer, malaise, and weight loss; examination shows pallor, height and weight below 3rd centile, small testicular size, digital clubbing, and purulent drainage from anus. Of the following, the MOST likely diagnostic tool is:",
        opts: ["Sweat test", "Growth hormone assay", "Colonoscopy with biopsy", "Sex hormone study", "TTG Abs"],
        correct: 2,
        reason: "Chronic GI symptoms + FTT + delayed puberty + perianal fistula suggest Crohn's disease; colonoscopy with biopsy is diagnostic.",
        ref: "GIT shehab",
        diff: "H"
      },
      // Q92
      {
        q: "Which of the following is the MOST sensitive and specific marker for diagnosis of inflammatory bowel disease?",
        opts: ["a1-Antitripsin", "Calprotectin", "Steatocrit", "Elastase", "Chymotrypsin"],
        correct: 1,
        reason: "Fecal calprotectin is the most sensitive and specific marker for intestinal inflammation in IBD.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q93
      {
        q: "Constipation is defined as a delay or difficulty in defecation that causes distress to the patient with duration for more than:",
        opts: ["2 weeks", "4 weeks", "6 weeks", "8 weeks", "12 weeks"],
        correct: 1,
        reason: "Constipation is defined as symptoms lasting more than 4 weeks.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q94
      {
        q: "A mother of a 10-month-old infant, who recently underwent hydrostatic reduction of intussusception, asks you if there is a risk of recurrence. You informed them that the recurrence rate is approximately 10% and mostly within:",
        opts: ["3 days of reduction", "7 days of reduction", "30 days of reduction", "6 months of reduction"],
        correct: 0,
        reason: "Most recurrences of intussusception occur within 3 days of reduction.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q95
      {
        q: "A 16-month-old child presents with lethargy, repeated vomiting, and recurrent inconsolable screaming attacks with leg drawing to the abdomen. Of the following, the MOST appropriate initial diagnostic tool is:",
        opts: ["Plain abdominal radiograph", "Upper endoscope", "CT of abdomen", "Ultrasound of abdomen", "Barium enema"],
        correct: 3,
        reason: "Abdominal ultrasound is the initial diagnostic tool of choice for suspected intussusception.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q96
      {
        q: "Which of the following antiemetic medications is more suitable to be used in children?",
        opts: ["Prochlorperazine", "Cyclizine", "Metoclopramide", "Domperidone", "Ondansetron"],
        correct: 4,
        reason: "Ondansetron is the antiemetic of choice in children due to a better safety profile.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q97
      {
        q: "A 4-year-old child presents to emergency unit with seizure, high grade fever, and bloody diarrhea. What is the FIRST line antibiotics therapy?",
        opts: ["Ciprofloxacin", "Cefixime", "Trimethoprim-sulfamethoxazole", "Metronidazole", "Ampicillin"],
        correct: 0,
        reason: "Ciprofloxacin is first-line for suspected Shigella dysentery with seizures.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q98
      {
        q: "A 6-year-old boy presents with sudden onset of severe nausea and vomiting within 2 hours of ingestion of improperly refrigerated cooked rice, followed by watery diarrhea. Of the following, the MOST causative pathogen is:",
        opts: ["Salmonella", "Staphylococcus aureus", "Bacillus cereus", "Campylobacter", "Shigella"],
        correct: 2,
        reason: "Bacillus cereus is classically associated with reheated/improperly stored cooked rice causing rapid-onset vomiting.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q99
      {
        q: "A 6-year-old boy is under evaluation of recurrent attacks of painless rectal bleeding mainly after defecation with mild abdominal pain. Examination shows dark brown macular lesions around the lips and oral mucosa; endoscopy reveals multiple polyps primarily found in jejunum and ileum. Of the following, the MOST likely diagnosis is:",
        opts: ["Juvenile polyposis syndrome", "Peutz-Jeghers syndrome", "Familial adenomatous polyposis", "Gardner syndrome", "Cowden syndrome"],
        correct: 1,
        reason: "Mucocutaneous pigmentation + hamartomatous polyps = Peutz-Jeghers syndrome.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q100
      {
        q: "Which of the following is the MOST common cause of under-5 mortality in developing countries?",
        opts: ["Diarrheal disease", "Pneumonia", "Malaria", "AIDS", "Measles"],
        correct: 0,
        reason: "Diarrheal disease is the leading cause of under-5 mortality in developing countries.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q101
      {
        q: "A 9-year-old girl develops high fever, bloody diarrhea, and colicky abdominal pain. You suspect shigellosis. Of the following, the empirical drug of choice is:",
        opts: ["Ampicillin", "Ciprofloxacin", "TMP-SMX", "Cephalexin", "Cefuroxime"],
        correct: 1,
        reason: "Ciprofloxacin is the empirical drug of choice for suspected shigellosis.",
        ref: "GIT shehab",
        diff: "M"
      },
      // Q102
      {
        q: "A 2-year-old boy develops acute renal shutdown, thrombocytopenia, and microangiopathic hemolytic anemia after a period of acute diarrheal illness. Of the following, the infectious pathogen that leads to this complication is:",
        opts: ["Enterotoxigenic E. coli (ETEC)", "Enteroinvasive E. coli (EIEC)", "Enteropathogenic E. coli (EPEC)", "Shiga toxin-producing E. coli (STEC)", "Enteroaggregative E. coli (EAEC)"],
        correct: 3,
        reason: "STEC (O157:H7) causes HUS characterized by renal failure, thrombocytopenia, and MAHA.",
        ref: "GIT shehab",
        diff: "M"
      }
    ]
  }
];

// questions_data.js
// Q-bank data categorized by topic (each exam paper / lecture is a topic).
// Each topic: { id, title, source, questions: [ { q, opts, correct, reason, ref, diff } ] }
// correct = index of correct option (0-based)
// diff = E (easy) | M (medium) | H (hard)

const topicsData = [
  // ============================================================
  // TOPIC 1 — GROWTH & DEVELOPMENT
  // ============================================================
  {
    id: "growth_development",
    title: "Growth & Development",
    source: "Growth & Development.pdf",
    questions: [
      {
        q: "At what age does the anterior fontanel normally complete closure in a healthy infant?",
        opts: ["18 months", "6 months", "12 months", "2 months"],
        correct: 0,
        reason: "Anterior fontanel normally completes closure between 9 and 18 months of age.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "An 11-month-old infant is brought for a routine developmental assessment. On physical examination, the child cannot sit without support. This finding is classified as a developmental 'red flag' in which domain?",
        opts: ["Fine motor domain", "Social domain", "Gross motor domain", "Language domain"],
        correct: 2,
        reason: "Sitting without support is a gross motor milestone (red flag if absent by 9–10 months).",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "At 6 months of age, what is the normal expected size of the anterior fontanel in transverse diameter?",
        opts: ["4–5 cm (3 finger breadths)", "0.5 cm", "1.5 cm (1 finger breadth)", "3 cm (2 finger breadths)"],
        correct: 3,
        reason: "Normal transverse size of anterior fontanel at 6 months is ~3 cm (2 finger breadths).",
        ref: "Growth & Development.pdf",
        diff: "M"
      },
      {
        q: "Which of the following is a recognized cause of EARLY closure of the anterior fontanel?",
        opts: ["Hypothyroidism", "Hydrocephalus", "Rickets", "Craniosynostosis"],
        correct: 3,
        reason: "Craniosynostosis and microcephaly cause premature suture fusion and early AF closure.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old child is evaluated in the clinic. According to the CDC growth charts, a Body Mass Index (BMI) between 25 and 29.9 kg/m² categorizes the child as:",
        opts: ["Underweight", "Normal weight", "Obesity", "Overweight"],
        correct: 3,
        reason: "BMI between 25 and 29.9 kg/m² (or 85th–95th percentile) defines childhood overweight.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "All of the following are recognized common symptoms accompanying primary teething in infants EXCEPT:",
        opts: ["Drooling and biting", "High-grade fever (>39°C) and watery diarrhea", "Refusal to feed", "Irritability and night waking"],
        correct: 1,
        reason: "High fever (>39°C) and profuse watery diarrhea are NOT caused by teething.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "Which of the following conditions is listed as a major cause of DELAYED eruption of primary teeth?",
        opts: ["Hypervitaminosis A", "Iron overload", "Preterm birth without complications", "Cretinism / Hypothyroidism"],
        correct: 3,
        reason: "Hypothyroidism (cretinism) significantly delays primary and permanent tooth eruption.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "A wrist radiograph of a 4-year-old child shows 4 carpal bones. This radiological finding indicates that bone age is:",
        opts: ["Delayed by 2 years", "Advanced by 3 years", "Normal for age", "Indicative of osteopetrosis"],
        correct: 2,
        reason: "Number of carpal centers visible on wrist X-ray corresponds to age in years (4 years = 4 bones).",
        ref: "Growth & Development.pdf",
        diff: "M"
      },
      {
        q: "Which deciduous teeth typically erupt FIRST in infants between 5 and 7 months of age?",
        opts: ["Top central incisors", "First molars", "Bottom lateral incisors", "Bottom central incisors"],
        correct: 3,
        reason: "Lower central incisors are the first deciduous teeth to erupt (5–7 months).",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "The 'First 1,000 Days' critical window for physical growth and brain development spans which exact timeframe?",
        opts: ["From birth to 1,000 days of life", "From conception to 12 months of age", "From 6 months of age to 3 years of age", "From conception to a child's second birthday"],
        correct: 3,
        reason: "The 1,000 days window spans conception (270 days) through age 2 years (365+365 days).",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "At what age should head circumference routine plotting be performed according to growth monitoring guidelines?",
        opts: ["Only at birth", "From 5 to 10 years of age", "In children under 2 years of age", "During adolescence only"],
        correct: 2,
        reason: "Head circumference should be routinely measured and plotted in all children under 2 years.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "When calculating corrected age for plotting growth charts in premature infants, corrected age is used up to what chronological age?",
        opts: ["2 years of age", "12 months", "6 months", "5 years of age"],
        correct: 0,
        reason: "Growth parameters in premature infants are adjusted for gestational age up to 2 years.",
        ref: "Growth & Development.pdf",
        diff: "M"
      },
      {
        q: "Which primitive reflex typically disappears first around 2 to 3 months of age in a healthy infant?",
        opts: ["Moro reflex", "Asymmetric Tonic Neck Reflex (ATNR)", "Palmar grasp reflex", "Rooting reflex"],
        correct: 3,
        reason: "Rooting reflex typically disappears first around 2 to 3 months of age (Moro & ATNR last 4–6 months).",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "An infant is able to transfer an object from one hand to another, sit with a slight support, and babble single consonants. What is the estimated developmental age?",
        opts: ["3 months", "6 months", "9 months", "12 months"],
        correct: 1,
        reason: "Transferring objects across midline and sitting with support are hallmark 6-month motor milestones.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "By what age does an infant normally double their birth weight?",
        opts: ["2 months", "12 months", "5 months", "24 months"],
        correct: 2,
        reason: "An infant normally doubles birth weight by 4 to 5 months of age.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "By what age does a child's birth length normally DOUBLE?",
        opts: ["1 year", "2 years", "6 years", "4 years"],
        correct: 3,
        reason: "Birth length doubles by 4 years of age (from ~50 cm at birth to ~100 cm).",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "Which of the following is considered a developmental RED FLAG requiring immediate evaluation if absent at 12 months?",
        opts: ["Responding to name and single words like 'no'", "Pincer grasp", "Walking unsupported", "Speaking 10 clear words"],
        correct: 0,
        reason: "Lack of response to name or simple verbal commands by 12 months is a major developmental red flag.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old child's height measurement should be performed in which position?",
        opts: ["Supine recumbent length", "Standing height (stadiometer)", "Sitting height", "Prone length"],
        correct: 1,
        reason: "Recumbent supine length is measured in children under 2 years; standing stadiometer is used after age 2.",
        ref: "Growth & Development.pdf",
        diff: "M"
      },
      {
        q: "Which parameter is the best indicator of acute nutritional status in a child?",
        opts: ["Height-for-age", "Head circumference", "Weight-for-height", "Bone age"],
        correct: 2,
        reason: "Weight-for-Height (wasting) reflects acute nutritional changes, whereas Height-for-Age reflects chronic stunting.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "What is the expected average head circumference at birth in a full-term healthy neonate?",
        opts: ["28 cm", "45 cm", "40 cm", "35 cm"],
        correct: 3,
        reason: "Average full-term head circumference at birth is 35 cm (range 33–37 cm).",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "Delayed closure of the posterior fontanel is suspected if it remains open beyond what age?",
        opts: ["2 to 3 months", "6 months", "12 months", "18 months"],
        correct: 0,
        reason: "Posterior fontanel normally closes by 6–8 weeks (2 months); persistent openness beyond 2–3 months is abnormal.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "An infant is brought for a routine check-up. Physical examination shows that the posterior fontanel is completely closed, but the anterior fontanel is wide open. At what age does the posterior fontanel normally complete closure?",
        opts: ["2 to 3 months (6-8 weeks)", "6 to 9 months", "12 to 15 months", "18 to 24 months"],
        correct: 0,
        reason: "Posterior fontanel normally closes by 6–8 weeks (2–3 months).",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "A mother brings her 9-month-old infant concerned about growth. On assessment, the infant can sit unsupported, pull to stand, and uses a crude pincer grasp. What is the expected gross motor milestone at 9 months?",
        opts: ["Walking unsupported", "Sitting unsupported and pulling to stand", "Running smoothly", "Hopping on one foot"],
        correct: 1,
        reason: "Sitting unsupported and pulling to stand are expected gross motor milestones at 9 months.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "At what age is an infant expected to TRIPLE their birth weight under normal physiological growth conditions?",
        opts: ["5 months", "12 months (1 year)", "2 years", "3 years"],
        correct: 1,
        reason: "Infants triple their birth weight by 12 months (1 year).",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old child's height is measured at 86 cm. What is the expected birth length of a full-term neonate?",
        opts: ["35 cm", "50 cm", "65 cm", "75 cm"],
        correct: 1,
        reason: "Average birth length of a full-term neonate is 50 cm.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "Which of the following is considered a major cause of DELAYED motor development in young children?",
        opts: ["Congenital hypothyroidism (Cretinism)", "Hypervitaminosis C", "Mild transient physiological jaundice", "Physiological anemia of infancy"],
        correct: 0,
        reason: "Congenital hypothyroidism (cretinism) significantly delays motor development.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "In assessing head circumference in a term infant, what is the average monthly increase during the first 3 months of life?",
        opts: ["0.5 cm/month", "2.0 cm/month", "4.0 cm/month", "6.0 cm/month"],
        correct: 1,
        reason: "Average head circumference increase is 2 cm/month during the first 3 months.",
        ref: "Growth & Development.pdf",
        diff: "M"
      },
      {
        q: "All of the following are recognized RED FLAGS in infant social and language development EXCEPT:",
        opts: ["No social smile by 2 months", "No babbling by 9 months", "Inability to speak 50 words by 6 months", "No response to name by 12 months"],
        correct: 2,
        reason: "Speaking 50 words by 6 months is not a recognized milestone; 50 words is expected by 2 years.",
        ref: "Growth & Development.pdf",
        diff: "M"
      },
      {
        q: "In calculating adjusted (corrected) age for a premature infant born at 32 weeks gestation, how many weeks are subtracted from chronological age?",
        opts: ["2 weeks", "4 weeks", "8 weeks", "12 weeks"],
        correct: 2,
        reason: "For a 32-week infant, 8 weeks are subtracted (40 - 32 = 8 weeks).",
        ref: "Growth & Development.pdf",
        diff: "M"
      },
      {
        q: "What is the normal average number of primary (deciduous) teeth present in a fully erupted childhood set?",
        opts: ["16", "20", "24", "32"],
        correct: 1,
        reason: "The full primary dentition consists of 20 teeth.",
        ref: "Growth & Development.pdf",
        diff: "E"
      },
      {
        q: "At what age does a child typically achieve complete daytime bladder control?",
        opts: ["12 months", "18 months", "2 to 3 years", "6 to 7 years"],
        correct: 2,
        reason: "Complete daytime bladder control is typically achieved by 2 to 3 years of age.",
        ref: "Growth & Development.pdf",
        diff: "E"
      }
    ]
  },

  // ============================================================
  // TOPIC 2 — INFANT FEEDING & BREASTFEEDING
  // ============================================================
  {
    id: "infant_feeding",
    title: "Infant Feeding & Breastfeeding",
    source: "Infant_feeding.pdf + infant feeding undergraduate.pdf",
    questions: [
      {
        q: "Up to what percentage of human brain development is completed by 2 years of age?",
        opts: ["40%", "80%", "60%", "95%"],
        correct: 1,
        reason: "80% of total human brain growth and development is completed by age 2 years.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "A mother of a 2-day-old newborn asks about the small volume of thick, yellowish fluid produced by her breasts. What is the primary compositional feature of colostrum compared to mature milk?",
        opts: ["Lower protein and lower immunoglobulin content", "High water content (90%) and low lactose", "High concentration of fat-soluble vitamins, protein, and immunoglobulin", "Higher calorie content than transitional milk"],
        correct: 2,
        reason: "Colostrum is concentrated with protein, IgA, fat-soluble vitamins (A, E, K), and minerals.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which hormone released during infant suckling acts on the anterior pituitary to stimulate milk synthesis by cuboidal acinar cells?",
        opts: ["Oxytocin", "Estrogen", "Prolactin", "Progesterone"],
        correct: 2,
        reason: "Prolactin from the anterior pituitary stimulates acinar cell milk synthesis.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which hormone released during suckling acts on myoepithelial cells surrounding mammary alveoli to induce the 'let-down' reflex and promote uterine involution?",
        opts: ["Prolactin", "Oxytocin", "Cortisol", "Human Placental Lactogen"],
        correct: 1,
        reason: "Oxytocin from the posterior pituitary causes myoepithelial contraction and milk let-down.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which of the following is classified as a LATE feeding cue indicating that an infant is overly hungry?",
        opts: ["Fussiness and crying", "Stretching", "Bringing hand to mouth", "Rooting and mouth opening"],
        correct: 0,
        reason: "Crying and intense fussiness are late cues indicating an infant is overly hungry.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "All of the following are maternal medical contraindications to breastfeeding EXCEPT:",
        opts: ["Maternal HIV infection", "Active untreated Tuberculosis", "Maternal Type 1 Diabetes Mellitus", "Chemotherapy or cytotoxic drug treatment"],
        correct: 2,
        reason: "Maternal diabetes is NOT a contraindication to breastfeeding (HIV and active TB are).",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which infant metabolic disorder is an absolute contraindication to breastfeeding, requiring a specialized lactose-free formula?",
        opts: ["Hereditary Spherocytosis", "G6PD deficiency", "Galactosemia", "Congenital hypothyroidism"],
        correct: 2,
        reason: "Classical Galactosemia is an absolute infant metabolic contraindication to breastfeeding.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which formula type is indicated for an infant presenting with severe cow's milk protein allergy (CMPA) or severe malabsorption syndrome?",
        opts: ["Anti-Regurgitation (AR) formula", "Lactose-Free (LF) formula", "Soy-based starter formula", "Extensively hydrolyzed or amino acid-based formula"],
        correct: 3,
        reason: "Severe cow's milk protein allergy requires extensively hydrolyzed or amino acid formulas.",
        ref: "infant feeding undergraduate.pdf",
        diff: "M"
      },
      {
        q: "All of the following are developmental readiness signs for introducing complementary feeding (~6 months) EXCEPT:",
        opts: ["Good head support and sitting with support", "Appearance of all 20 primary teeth", "Loss of the tongue-thrust reflex", "Ability to pick up objects and bring them to mouth"],
        correct: 1,
        reason: "Full primary dentition is NOT required for introducing complementary solid feeding.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which immune component present in high concentration in human colostrum coats the infant's gut mucosal barrier to prevent pathogen invasion?",
        opts: ["IgG", "Secretory IgA", "IgM", "IgE"],
        correct: 1,
        reason: "Secretory IgA in colostrum coats infant intestinal mucosa to block bacterial and viral adhesion.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Compared to cow's milk, human milk has a whey-to-casein protein ratio in mature milk of approximately:",
        opts: ["20:80", "40:60", "60:40", "80:20"],
        correct: 2,
        reason: "Mature human milk has a whey-to-casein ratio of 60:40 (compared to 20:80 in cow's milk).",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "What is the principal carbohydrate found in human breast milk that enhances calcium absorption and promotes Lactobacillus bifidus growth?",
        opts: ["Sucrose", "Maltose", "Glucose", "Lactose"],
        correct: 3,
        reason: "Lactose is the predominant carbohydrate in human milk, enhancing mineral absorption and gut flora.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "A mother who is strictly vegan fully breastfeeds her 7-month-old infant without supplementation. The infant is at highest risk of developing which micronutrient deficiency?",
        opts: ["Vitamin B12 deficiency", "Vitamin C deficiency", "Folate deficiency", "Vitamin E deficiency"],
        correct: 0,
        reason: "Maternal strict veganism without supplementation leads to Vitamin B12 deficiency in breastfed infants.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which essential fat-soluble vitamin must be administered intramuscularly (1 mg) to ALL newborns at birth to prevent hemorrhagic disease of the newborn?",
        opts: ["Vitamin A", "Vitamin K", "Vitamin E", "Vitamin D"],
        correct: 1,
        reason: "IM Vitamin K1 (1 mg) is administered at birth to prevent Vitamin K Deficiency Bleeding (VKDB).",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Hindmilk differs from foremilk primarily in having a significantly higher concentration of:",
        opts: ["Water and lactose", "Protein and immunoglobulin", "Fat and caloric content", "Sodium and potassium"],
        correct: 2,
        reason: "Hindmilk released toward the end of a feed contains 2–3 times more fat and higher energy density than foremilk.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which milk formula is indicated for a 4-month-old infant with documented secondary lactose intolerance following severe viral gastroenteritis?",
        opts: ["Soy-based formula", "Amino acid formula", "Anti-regurgitation (AR) formula", "Lactose-Free (LF) formula"],
        correct: 3,
        reason: "Post-enteritis transient disaccharidase deficiency requires a Lactose-Free (LF) formula.",
        ref: "infant feeding undergraduate.pdf",
        diff: "M"
      },
      {
        q: "At what age should single-grain iron-fortified cereals ideally be introduced as the first complementary food?",
        opts: ["6 months", "4 months", "2 months", "12 months"],
        correct: 0,
        reason: "Complementary feeding with iron-fortified single-grain cereal should be initiated at 6 months.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Whole unmodified cow's milk should NOT be introduced into an infant's diet before what age?",
        opts: ["6 months", "12 months", "9 months", "24 months"],
        correct: 1,
        reason: "Whole cow's milk is contraindicated under 12 months due to high renal solute load and risk of microenteric blood loss.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "All of the following are recognized immunological advantages of human milk EXCEPT:",
        opts: ["High concentration of Secretory IgA", "Lactoferrin which inhibits E. coli growth", "High casein content that precipitates quickly in the stomach", "Presence of lysozyme and bifidus factor"],
        correct: 2,
        reason: "Human milk has low casein content forming soft curds; high casein content is a property of cow's milk.",
        ref: "infant feeding undergraduate.pdf",
        diff: "M"
      },
      {
        q: "Under the Baby-Friendly Hospital Initiative (BFHI), rooming-in allows mothers and infants to stay together 24 hours a day. Breastfeeding should be initiated within what timeframe after birth?",
        opts: ["Within 24 hours", "Within 6 hours", "Within 12 hours", "Within 1 hour"],
        correct: 3,
        reason: "WHO/BFHI guidelines recommend initiating breastfeeding within 1 hour of birth.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which specialized infant formula contains medium-chain triglycerides (MCTs) to facilitate absorption in infants with severe cholestasis or intestinal lymphangiectasia?",
        opts: ["High-MCT specialized formula", "Anti-regurgitation formula", "Standard starter infant formula", "Lactose-free formula"],
        correct: 0,
        reason: "High-MCT formulas bypass bile salt micelle requirement for direct portal venous absorption in cholestasis.",
        ref: "infant feeding undergraduate.pdf",
        diff: "M"
      },
      {
        q: "What is the recommended energy density of standard infant starter formula per 100 mL when reconstituted properly?",
        opts: ["50 kcal / 100 mL", "67 kcal / 100 mL (20 kcal/oz)", "100 kcal / 100 mL", "120 kcal / 100 mL"],
        correct: 1,
        reason: "Standard infant starter formula supplies 67 kcal / 100 mL (20 kcal/oz).",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "What is the primary immunoglobulin found in highest concentration in human milk, protecting the infant gastrointestinal mucosal lining?",
        opts: ["Secretory IgA", "Serum IgG", "Pentameric IgM", "Monomeric IgE"],
        correct: 0,
        reason: "Secretory IgA is the primary immunoglobulin in human milk protecting the GI mucosa.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "The WHO/UNICEF 'Ten Steps to Successful Breastfeeding' under the Baby-Friendly Hospital Initiative (BFHI) explicitly prohibits:",
        opts: ["Rooming-in 24 hours a day", "Giving artificial teats or pacifiers to breastfeeding infants", "On-demand feeding", "Antenatal breastfeeding education"],
        correct: 1,
        reason: "BFHI prohibits giving artificial teats or pacifiers to breastfeeding infants.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Breast milk jaundice (late-onset non-conjugated hyperbilirubinemia) typically peaks at what age in a healthy breastfed infant?",
        opts: ["First 24 hours of life", "3 to 5 days of life", "2 to 3 weeks of life", "3 months of life"],
        correct: 2,
        reason: "Breast milk jaundice peaks at 2 to 3 weeks of life.",
        ref: "infant feeding undergraduate.pdf",
        diff: "M"
      },
      {
        q: "In comparing mature human milk to cow's milk, human milk has a lower concentration of which major mineral, protecting immature infant kidneys?",
        opts: ["Lactose", "Whey protein", "Sodium and protein (lower renal solute load)", "Polyunsaturated fatty acids"],
        correct: 2,
        reason: "Human milk has lower sodium and protein, resulting in a lower renal solute load.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "An infant with severe cow's milk protein allergy (CMPA) who fails to improve on extensively hydrolyzed formula should be switched to:",
        opts: ["Unmodified goat's milk", "Amino acid-based (elemental) formula", "Standard soy formula", "Anti-regurgitation starch formula"],
        correct: 1,
        reason: "Amino acid-based formula is indicated when extensively hydrolyzed formula fails in severe CMPA.",
        ref: "infant feeding undergraduate.pdf",
        diff: "M"
      },
      {
        q: "Which carbohydrate is added to Anti-Regurgitation (AR) infant formulas to thicken the liquid in the infant's stomach?",
        opts: ["Sucrose", "Pre-gelatinized rice or corn starch", "Fructose", "Maltodextrin alone"],
        correct: 1,
        reason: "AR formulas contain pre-gelatinized rice or corn starch to thicken gastric contents.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Maternal active infection with which of the following pathogens is an absolute contraindication to breastfeeding in developed guidelines?",
        opts: ["Hepatitis C Virus without nipple cracking", "Human Immunodeficiency Virus (HIV)", "Cytomegalovirus (CMV) in term infant", "Treated Mastitis"],
        correct: 1,
        reason: "Maternal HIV infection is an absolute contraindication to breastfeeding.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Foremilk is released at the beginning of a nursing session. Its main compositional feature is high:",
        opts: ["Fat content", "Water and lactose content", "Caloric density (>100 kcal/oz)", "Casein precipitate"],
        correct: 1,
        reason: "Foremilk is high in water and lactose, while hindmilk is high in fat.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "At what age should iron supplementation (1 mg/kg/day) be routinely initiated for an exclusively breastfed TERM infant to prevent iron depletion?",
        opts: ["At birth", "At 4 to 6 months of age", "At 12 months of age", "At 24 months of age"],
        correct: 1,
        reason: "Iron supplementation for exclusively breastfed term infants starts at 4 to 6 months.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which hormone is directly responsible for contraction of myoepithelial cells in mammary alveoli, producing the milk ejection ('let-down') reflex?",
        opts: ["Prolactin", "Oxytocin", "Progesterone", "Estrogen"],
        correct: 1,
        reason: "Oxytocin causes myoepithelial contraction and the milk let-down reflex.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which formula is specifically designed for premature infants requiring higher protein and mineral density during early infancy?",
        opts: ["Premature / Post-Discharge Formula (PDF)", "Anti-Regurgitation formula", "Lactose-free formula", "Amino acid-based formula"],
        correct: 0,
        reason: "Preterm / Post-Discharge Formula (PDF) provides extra protein, energy (22–24 kcal/oz), and minerals.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      },
      {
        q: "Which formula type is indicated for infants presenting with gastroesophageal reflux disease (GERD) refractory to positional management?",
        opts: ["Anti-Regurgitation (AR) formula containing rice/corn starch", "Lactose-free formula", "Extensively hydrolyzed formula", "Unmodified cow's milk"],
        correct: 0,
        reason: "Anti-Regurgitation (AR) formula contains rice starch to thicken gastric contents in GERD.",
        ref: "infant feeding undergraduate.pdf",
        diff: "E"
      }
    ]
  },

  // ============================================================
  // TOPIC 3 — ACUTE MALNUTRITION (SAM/MAM)
  // ============================================================
  {
    id: "acute_malnutrition",
    title: "Acute Malnutrition (SAM & MAM)",
    source: "Acute Malnutrition in Children.pdf + malnutrition-mcq-exam.pdf",
    questions: [
      {
        q: "According to the WHO definition, severe acute malnutrition (SAM) is diagnosed when mid-upper-arm circumference (MUAC) is:",
        opts: ["Less than 135 mm", "Between 115 mm and 125 mm", "Less than 115 mm", "Between 125 mm and 135 mm"],
        correct: 2,
        reason: "WHO defines SAM in children aged 6–59 months as MUAC < 115 mm (< 11.5 cm).",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "In Waterlow's classification of malnutrition, acute malnutrition (wasting) is measured using which parameter?",
        opts: ["Weight-for-Height", "Height-for-Age", "Head circumference", "Mid-upper-arm circumference"],
        correct: 0,
        reason: "Waterlow's classification uses Weight-for-Height to grade acute malnutrition (wasting).",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "According to the Wellcome classification, a child with Weight-for-Age between 60% and 80% who presents WITH generalized edema is classified as having:",
        opts: ["Underweight", "Marasmus", "Kwashiorkor", "Marasmic Kwashiorkor"],
        correct: 2,
        reason: "Wellcome classification: Weight-for-Age 60–80% + bilateral edema = Kwashiorkor.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "A 14-month-old child presents with severe energy deprivation, emaciation, bradycardia, hypothermia, and loss of subcutaneous fat. In Marasmus, muscle wasting starts in which body region (Grade I)?",
        opts: ["Thighs and buttocks", "Facial muscles", "Chest and abdomen", "Axilla and groin"],
        correct: 3,
        reason: "Grade I Marasmus wasting starts in the axilla and groin before spreading to limbs and face.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "The term Kwashiorkor derives from the Kwa language of Ghana meaning 'the sickness of the weaning'. Its distinguishing clinical hallmark that is absent in pure Marasmus is:",
        opts: ["Subcutaneous fat loss", "Severe hypothermia", "Bradycardia", "Bilateral pitting edema"],
        correct: 3,
        reason: "Bilateral pitting edema due to hypoalbuminemia is the hallmark of Kwashiorkor.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "A child with SAM without complications is managed in the community using:",
        opts: ["Ready-to-Use Therapeutic Food (RUTF)", "Starter milk F-75", "Intravenous 10% dextrose", "Full-strength cow's milk"],
        correct: 0,
        reason: "Uncomplicated SAM is managed in the community using Ready-to-Use Therapeutic Food (RUTF).",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "In the stabilization phase of SAM, rehydration for dehydration is preferably achieved using ReSoMal at an initial oral rate of:",
        opts: ["5 mL/kg body weight every 30 minutes for 2 hours", "20 mL/kg IV bolus over 10 minutes", "50 mL/kg every hour", "100 mL/kg over 24 hours"],
        correct: 0,
        reason: "Oral ReSoMal is administered at 5 mL/kg every 30 minutes for the first 2 hours.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "H"
      },
      {
        q: "If a child admitted with SAM has no focal complications, oral antibiotic coverage is recommended with:",
        opts: ["Ceftriaxone IV for 10 days", "Gentamicin once daily for 14 days", "Amoxicillin 15 mg/kg eight-hourly for 5 days", "Ciprofloxacin for 7 days"],
        correct: 2,
        reason: "Routine empiric oral Amoxicillin (15 mg/kg 8-hourly) is given for uncomplicated SAM.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "Which milk-based formula containing 75 kcal/100 mL and 0.9 g protein/100 mL is used during the initial stabilization phase of SAM?",
        opts: ["F-50", "F-100", "F-75", "ReSoMal"],
        correct: 2,
        reason: "F-75 (75 kcal/100 mL) is the formula used during the initial stabilization phase of SAM.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "Nutritional rehabilitation and catch-up growth in SAM are initiated using F-100 formula when energy intake exceeds:",
        opts: ["150 kcal/kg/day", "100 kcal/kg/day", "75 kcal/kg/day", "250 kcal/kg/day"],
        correct: 2,
        reason: "Transition to F-100 occurs during rehabilitation when energy intake exceeds 150 kcal/kg/day.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "H"
      },
      {
        q: "A severely malnourished 2-year-old child is started on aggressive nutritional refeeding. 48 hours later, the child develops cardiac arrhythmias and muscle weakness. Refeeding Syndrome is characterized primarily by which severe electrolyte imbalance?",
        opts: ["Hyperkalemia", "Hypercalcemia", "Hypophosphatemia", "Hypernatremia"],
        correct: 2,
        reason: "Refeeding syndrome triggers rapid intracellular phosphate shift causing severe hypophosphatemia.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "A 10-month-old child presents with generalized edema involving lower extremities, face, and hands, skin lesions described as 'flaky paint' dermatosis, and sparse reddish hair. What is the diagnosis?",
        opts: ["Marasmus", "Nutritional Rickets", "Kwashiorkor", "Nephrotic syndrome"],
        correct: 2,
        reason: "Generalized edema, flaky paint dermatosis, and hair hypopigmentation define Kwashiorkor.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "Which clinical feature is characteristic of Kwashiorkor but is ABSENT in uncomplicated Marasmus?",
        opts: ["Severe muscle wasting", "Loss of subcutaneous fat", "Low body weight", "Fatty liver change (hepatomegaly)"],
        correct: 3,
        reason: "Hepatic steatosis (fatty liver) due to impaired apolipoprotein synthesis occurs in Kwashiorkor, not Marasmus.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "According to Waterlow's classification, a child with Height-for-Age < 90% of expected standard is classified as having:",
        opts: ["Stunting (Chronic malnutrition)", "Wasting (Acute malnutrition)", "Underweight", "Kwashiorkor"],
        correct: 0,
        reason: "Height-for-Age < 90% indicates chronic linear growth deficit (stunting) under Waterlow's criteria.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "In a child with severe acute malnutrition (SAM), why must high-protein high-calorie meals be avoided during the initial 48 hours of stabilization?",
        opts: ["Risk of acute renal stones", "Risk of Refeeding Syndrome and heart failure", "Risk of rapid bone density loss", "Risk of severe allergic anaphylaxis"],
        correct: 1,
        reason: "Rapid refeeding in SAM triggers intracellular electrolyte shifts (Refeeding Syndrome) leading to acute heart failure.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "During the stabilization phase of SAM management, what is the goal energy intake provided by F-75 formula?",
        opts: ["50 kcal/kg/day", "150-200 kcal/kg/day", "100 kcal/kg/day", "300 kcal/kg/day"],
        correct: 2,
        reason: "Stabilization feeds (F-75) aim to supply 80–100 kcal/kg/day without promoting rapid weight gain.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "Which vitamin deficiency in severe malnutrition presents with Bitot's spots, conjunctival xerosis, and keratomalacia?",
        opts: ["Vitamin D deficiency", "Vitamin B1 deficiency", "Vitamin C deficiency", "Vitamin A deficiency"],
        correct: 3,
        reason: "Xerophthalmia, Bitot's spots, and keratomalacia are classic hallmarks of Vitamin A deficiency.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "What single high-dose oral Vitamin A schedule is administered on Day 1, Day 2, and Day 14 for a 14-month-old child with SAM and active corneal ulceration?",
        opts: ["200,000 IU", "100,000 IU", "50,000 IU", "500,000 IU"],
        correct: 0,
        reason: "Children > 12 months receive 200,000 IU oral Vitamin A on Days 1, 2, and 14 for ocular lesions.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "H"
      },
      {
        q: "In SAM stabilization, routine electrolyte supplementation added to feed includes potassium and magnesium. High sodium feeds are strictly avoided because SAM children have:",
        opts: ["Severe hyponatremia due to renal sodium wasting", "Elevated total body sodium with reduced intracellular potassium", "Hyperkalemic periodic paralysis", "Normal electrolyte balance"],
        correct: 1,
        reason: "SAM causes cellular Na+/K+ pump failure, leading to high intracellular Na+; extra sodium causes fatal fluid overload.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "H"
      },
      {
        q: "Which clinical parameter signals that a child with SAM is ready to transition from stabilization (F-75) to the rehabilitation phase (F-100)?",
        opts: ["Complete disappearance of skin dermatosis", "Normal weight-for-height achieved", "Return of appetite and loss of edema", "Doubling of baseline weight"],
        correct: 2,
        reason: "Regained appetite and resolving edema signal readiness to transition to catch-up growth (F-100).",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old child with marasmus presents with rectal prolapse. This complication is primarily due to:",
        opts: ["Hypertrophy of anal sphincter", "Severe chronic intestinal ischemia", "Congenital megacolon", "Weakness of pelvic floor muscles and loss of ischiorectal fat pads"],
        correct: 3,
        reason: "Loss of perineal fat pads and pelvic muscle atrophy in marasmus cause rectal prolapse.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "Scurvy is caused by Vitamin C (ascorbic acid) deficiency. Its characteristic skeletal manifestation on plain X-rays includes:",
        opts: ["Subperiosteal hematoma, Frankel line, and Pelkan spur", "Metaphyseal cupping and fraying", "Generalized osteopetrosis", "Erlenmeyer flask deformity"],
        correct: 0,
        reason: "Scurvy causes subperiosteal hematomas, Frankel's dense line, and Pelkan spurs at metaphyses.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "H"
      },
      {
        q: "What is the recommended elemental Iron administration protocol during the management of SAM?",
        opts: ["Given immediately on Day 1 of admission", "Withheld during stabilization phase; started during rehabilitation phase (F-100)", "Administered as IV iron sucrose bolus", "Given in high doses (15 mg/kg/day) from admission"],
        correct: 1,
        reason: "Oral iron is withheld during stabilization because free iron fuels bacterial proliferation; it is started in rehabilitation.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "M"
      },
      {
        q: "All of the following are characteristic clinical findings in Marasmus EXCEPT:",
        opts: ["Old man / monkey face appearance", "Severe loss of subcutaneous fat and muscle", "Preservation of buoyant mood and cheerful activity", "Temperature instability (hypothermia risk)"],
        correct: 2,
        reason: "Marasmic infants are severely irritable and apathetic, not cheerful or buoyant.",
        ref: "Acute Malnutrition in Children.pdf",
        diff: "E"
      },
      {
        q: "According to the ASPEN definition, pediatric malnutrition is defined as an imbalance between nutrient requirement and intake resulting in cumulative deficits of energy, protein, or:",
        opts: ["Trace minerals and electrolytes", "Essential fatty acids and water", "Micronutrients", "Carbohydrates and fat"],
        correct: 2,
        reason: "ASPEN defines pediatric malnutrition as an imbalance resulting in cumulative deficits of energy, protein, or micronutrients.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following is classified as a non-illness related cause of pediatric acute malnutrition?",
        opts: ["Inadequate complementary feeding", "Cystic fibrosis", "Congenital heart disease", "Chronic renal failure"],
        correct: 0,
        reason: "Poor nutrition in pregnant women, IUGR, LBW, poor breastfeeding, and inadequate complementary feeding are non-illness factors.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "A child with a Mid-Upper-Arm Circumference (MUAC) of 118 mm and no bilateral pitting edema is classified under WHO criteria as having:",
        opts: ["Normal nutritional status", "Moderate Acute Malnutrition (MAM)", "Severe Acute Malnutrition (SAM)", "Severe Stunting"],
        correct: 1,
        reason: "WHO MAM is defined as MUAC >= 115 mm and < 125 mm (and W/H Z-score -2 to -3).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "In the Waterlow classification, acute malnutrition (wasting) is measured using weight-for-height. What percentage of expected weight-for-height defines moderate wasting?",
        opts: [">90%", "80% - 90%", "70% - 80%", "< 70%"],
        correct: 2,
        reason: "Waterlow wasting grades: Normal >90%, Mild 80-90%, Moderate 70-80%, Severe <70%.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "Under the Wellcome classification, a child with a Weight-for-Age of 72% of standard median who presents with bilateral pedal edema is categorized as:",
        opts: ["Underweight", "Marasmus", "Kwashiorkor", "Marasmic Kwashiorkor"],
        correct: 2,
        reason: "Weight-for-Age 60%-80% WITH edema is classified as Kwashiorkor in the Wellcome system.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "Global Acute Malnutrition (GAM) at a population level is defined as:",
        opts: ["Sum of severe acute malnutrition and moderate acute malnutrition prevalence", "Prevalence of severe acute malnutrition only", "Prevalence of moderate acute malnutrition only", "Percentage of underweight children with weight-for-age Z-score < -2"],
        correct: 0,
        reason: "GAM is the sum of SAM plus MAM prevalence at a population level.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following hormonal changes is characteristically raised during the body's physiologic adaptation to starvation in acute malnutrition?",
        opts: ["Tri-iodothyronine (T3)", "Insulin", "Cortisol", "Insulin-like growth factor-1 (IGF-1)"],
        correct: 2,
        reason: "Starvation adaptation leads to reduced T3, insulin, and IGF-1, but RAISED levels of Growth Hormone (GH) and Cortisol.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "During the early phase of inadequate energy intake, the main mechanism maintaining glucose levels before the protein conservation phase begins is:",
        opts: ["Rapid gluconeogenesis using amino acids, pyruvate, and lactate", "Lipolysis and ketogenesis", "Glycogen synthesis in muscle", "Direct conversion of adipose tissue to glucose"],
        correct: 0,
        reason: "Early phase shows glycogen depletion and rapid gluconeogenesis with resultant skeletal muscle loss using amino acids, pyruvate, and lactate.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "What characteristic immunological abnormality occurs in severe pediatric malnutrition?",
        opts: ["Atrophy of the thymus with reduced CD4 and normal CD8 T-lymphocytes", "Enlargement of tonsils with reduced CD8 T-lymphocytes", "Increased secretory immunoglobulin A (sIgA)", "Hyperplasia of lymph nodes with elevated delayed hypersensitivity"],
        correct: 0,
        reason: "Cellular immunity shows thymus/lymph node/tonsil atrophy, reduced CD4 with normal CD8, loss of delayed hypersensitivity, and reduced sIgA.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "Malabsorption in children with acute malnutrition is primarily caused by which histological mucosal change?",
        opts: ["Villous hypertrophy and crypt hypoplasia", "Villous atrophy with loss of disaccharidases", "Gastric parietal cell hyperplasia", "Increased intestinal villi length"],
        correct: 1,
        reason: "Malabsorption is caused by villous atrophy with loss of disaccharidases, crypt hypoplasia, and altered intestinal permeability.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "The Greek term 'marasmus' translates to:",
        opts: ["Sickness of the weaning", "Wasting or withering", "Fatty liver disease", "Swelling of the limbs"],
        correct: 1,
        reason: "Marasmus derives from Greek 'marasmus', correlating to wasting or withering.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "Muscle wasting in a child with Marasmus classically begins in which anatomical region first (Grade I)?",
        opts: ["Thighs and buttocks", "Chest and abdomen", "Axilla and groin", "Facial muscles"],
        correct: 2,
        reason: "Muscle wasting starts in axilla/groin (Grade I) > thighs/buttocks (Grade II) > chest/abdomen (Grade III) > facial muscles (Grade IV).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "The distinguishing clinical characteristic that differentiates Kwashiorkor from Marasmus is the presence of:",
        opts: ["Severe muscle wasting", "Bilateral pitting edema", "Bradycardia", "Loss of subcutaneous fat"],
        correct: 1,
        reason: "Edema is the distinguishing characteristic of kwashiorkor, which does not exist in marasmus.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "Edema in Kwashiorkor typically progresses in severity. Which anatomical pattern represents Grade I edema?",
        opts: ["Facial edema", "Paraspinal and chest edema", "Pedal edema", "Generalized ascites"],
        correct: 2,
        reason: "Edema starts as pedal edema (Grade I) > facial edema (Grade II) > paraspinal/chest edema (Grade III) > ascites (Grade IV).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "Which of the following cutaneous manifestations is the MOST common skin change observed in children with Kwashiorkor?",
        opts: ["Xerotic crazy paving skin (28%)", "Dark erythematous pigmented macules (48%)", "Shiny, varnished-looking skin (64%)", "Residual hypopigmentation (18%)"],
        correct: 2,
        reason: "Shiny, varnished-looking skin is the most common cutaneous sign (64%), followed by dark erythematous macules (48%).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "When plotting growth parameters for a premature infant on standard growth charts, corrected age should be used by deducting weeks born early until what chronological age?",
        opts: ["6 months", "1 year", "2 years", "5 years"],
        correct: 2,
        reason: "Deduct weeks born early from chronological age to obtain corrected age up to two years of age.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "For primary Moderate Acute Malnutrition (MAM) managed at home, how much extra energy intake above healthy peers is recommended per day?",
        opts: ["10 kcal/kg", "25 kcal/kg", "50 kcal/kg", "100 kcal/kg"],
        correct: 1,
        reason: "Children with MAM should receive 25 kcal/kg per day of energy in excess of what their healthy peers receive.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "ReSoMal (Rehydration Solution for Malnutrition) administration protocol during the stabilization phase of SAM includes:",
        opts: ["10 mL/kg every 15 min for 4 hours", "5 mL/kg orally or by NG tube every 30 min for the first 2 hours", "20 mL/kg IV bolus over 10 minutes", "50 mL/kg over 1 hour"],
        correct: 1,
        reason: "ReSoMal protocol is 5 mL/kg orally or by NG tube every 30 min for first 2h, then 5-10 mL/kg/h in alternate hours for up to 10h.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "Which laboratory finding differentiates Vitamin D-Dependent Rickets Type 2 (VDDR II) from Vitamin D-Dependent Rickets Type 1 (VDDR I)?",
        opts: ["Serum calcium level", "Serum alkaline phosphatase level", "Serum 25-hydroxyvitamin D level", "Serum calcitriol (1,25-dihydroxyvitamin D) level"],
        correct: 3,
        reason: "VDDR I has low calcitriol (low 1-alpha-hydroxylase), whereas VDDR II has HIGH calcitriol levels (receptor defect).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "The main circulating marker used in clinical laboratory testing to evaluate overall Vitamin D status in the body is:",
        opts: ["7-dehydrocholesterol", "Cholecalciferol (Vitamin D3)", "25-hydroxyvitamin D (Calcidiol)", "1,25-dihydroxyvitamin D (Calcitriol)"],
        correct: 2,
        reason: "25(OH)D (calcidiol) is the main circulating marker of vitamin D status.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "Which enzyme located in the proximal renal tubule catalyzes the final activation step of Vitamin D into 1,25-dihydroxyvitamin D?",
        opts: ["25-hydroxylase", "1 alpha-hydroxylase", "24-hydroxylase", "Alkaline phosphatase"],
        correct: 1,
        reason: "1 alpha-hydroxylase in proximal tubule converts calcidiol to calcitriol.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "An 18-month-old child diagnosed with clinical Vitamin A deficiency requires therapeutic oral dosing. What is the recommended single dose for a child over 1 year of age?",
        opts: ["50,000 IU", "100,000 IU", "200,000 IU", "300,000 IU"],
        correct: 2,
        reason: "Vitamin A therapeutic dose for children > 1 year is 200,000 IU on Days 1, 2, and 8 (or 15).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the normal fasting serum retinol level range, and what threshold confirms Vitamin A toxicity?",
        opts: ["Normal 10-20 mcg/dL; Toxicity >50 mcg/dL", "Normal 28-86 mcg/dL; Toxicity >100 mcg/dL", "Normal 100-150 mcg/dL; Toxicity >200 mcg/dL", "Normal 5-15 mcg/dL; Toxicity >30 mcg/dL"],
        correct: 1,
        reason: "Normal fasting serum retinol is 28-86 mcg/dL; toxicity is confirmed when levels exceed > 100 mcg/dL.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "What is the earliest clinical ocular manifestation of Vitamin A deficiency in children?",
        opts: ["Bitot's spots", "Keratomalacia", "Night blindness (nyctalopia)", "Xerophthalmia"],
        correct: 2,
        reason: "Night blindness (nyctalopia) is the earliest sign of Vitamin A deficiency.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "Refeeding syndrome in severely malnourished children is primarily driven by rapid intracellular shifts causing severe depletion of which key electrolyte?",
        opts: ["Sodium", "Calcium", "Phosphate", "Chloride"],
        correct: 2,
        reason: "Typical features of Refeeding Syndrome are hypophosphatemia, hypokalemia, hypomagnesemia, and thiamine deficiency.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "A 14-month-old girl is brought to the clinic due to poor weight gain. Anthropometric assessment reveals a Mid-Upper-Arm Circumference (MUAC) of 108 mm, Weight-for-Height Z-score of -3.2, and bilateral pitting pedal edema. What is the most appropriate diagnostic categorization?",
        opts: ["Moderate Acute Malnutrition", "Severe Acute Malnutrition", "Marasmus only", "Failure to thrive without malnutrition"],
        correct: 1,
        reason: "MUAC < 115 mm, W/H Z-score < -3, and bilateral pitting edema meet criteria for Severe Acute Malnutrition (SAM).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "An 8-month-old infant presents with severe diarrhea and poor feeding. On examination, weight-for-height is 65% of expected standard, but there is no evidence of peripheral or facial edema. According to the Waterlow classification, how is this child's wasting graded?",
        opts: ["Normal", "Mild wasting", "Moderate wasting", "Severe wasting"],
        correct: 3,
        reason: "Weight-for-height < 70% of expected standard represents Severe Wasting in Waterlow's classification.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "An 18-month-old boy who was recently weaned onto a pure starch porridge diet presents with generalized swelling. On examination, his weight-for-age is 68% of standard median, and he has bilateral pedal and leg edema. According to the Wellcome classification, what is his diagnosis?",
        opts: ["Underweight", "Marasmus", "Kwashiorkor", "Marasmus Kwashiorkor"],
        correct: 2,
        reason: "Wellcome classification: Weight-for-Age 60-80% WITH edema is Kwashiorkor.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old child with severe acute malnutrition is admitted to the inpatient stabilization unit. Laboratory evaluation reveals blood glucose of 35 mg/dL, hypothermia (35.1°C), and systemic infection. Which milk-based starter formula should be initiated immediately during this stabilization phase?",
        opts: ["F-100 formula", "F-75 formula", "Standard whole cow milk", "Soy-based lactose-free formula"],
        correct: 1,
        reason: "Starter formula F-75 (75 kcal/100 mL, 0.9 g protein/100 mL) is used during the stabilization phase. F-100 is for catch-up growth later.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "A 3-year-old boy with uncomplicated severe acute malnutrition (no lethargy, good appetite, no systemic medical complications) is brought to an outpatient primary health center. What is the recommended management plan?",
        opts: ["Immediate admission to ICU", "Community management with Ready-to-Use Therapeutic Food (RUTF)", "Intravenous fluid bolus of 0.9% saline", "High-dose IV steroids"],
        correct: 1,
        reason: "Children with SAM without any complications can be managed in the community with ready-to-use therapeutic food (RUTF).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "A 10-month-old malnourished child admitted for severe pneumonia and SAM is started on antibiotic cover. He has no history of penicillin allergy. What is the standard empirical first-line parenteral antibiotic regimen for SAM with complications?",
        opts: ["Oral Amoxicillin 15 mg/kg 8-hourly alone", "Ampicillin 50 mg/kg IV 6-hourly for 2 days + Gentamicin 7.5 mg/kg IV once daily for 7 days (followed by oral amoxicillin)", "Vancomycin 15 mg/kg IV 8-hourly", "Oral Ciprofloxacin for 10 days"],
        correct: 1,
        reason: "For SAM with complications: Ampicillin 50 mg/kg i.m./i.v. 6-hourly for 2 days, then oral amoxicillin for 5 days, plus Gentamicin 7.5 mg/kg once daily for 7 days.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "A 15-month-old child with complicated SAM was started on Ampicillin and Gentamicin upon admission. After 48 hours, the child fails to show clinical improvement and remains febrile with deteriorating respiratory effort. What modification to the antibiotic regimen is indicated according to WHO guidelines?",
        opts: ["Discontinue all antibiotics and monitor", "Add oral Azithromycin", "Switch to or add Ceftriaxone (50-75 mg/kg IV/IM once daily)", "Double the dose of Ampicillin with Gentamicin"],
        correct: 2,
        reason: "If the child fails to improve clinically by 48 h or deteriorates after 24 h, ceftriaxone (50-75 mg/kg IV/IM once daily) may be started with gentamicin.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "A severely malnourished 2-year-old child has completed 7 days of stabilization on F-75 formula and is now complication-free with a vigorous appetite. To achieve catch-up growth, he is transitioned to F-100 formula. What energy intake threshold defines the start of catch-up growth?",
        opts: [">75 kcal/kg/day", ">100 kcal/kg/day", ">150 kcal/kg/day", ">300 kcal/kg/day"],
        correct: 2,
        reason: "Catch-up growth starts when energy intake is >150 kcal/kg/day using F-100 formula (100 kcal and 2.9g protein/100 mL).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "Physical examination of a 20-month-old marasmic child demonstrates loss of subcutaneous fat and muscle wasting involving the axilla, groin, thighs, buttocks, chest, and abdominal wall, while facial temporal fat pads remain relatively preserved. What grade of muscle wasting is present?",
        opts: ["Grade I", "Grade II", "Grade III", "Grade IV"],
        correct: 2,
        reason: "Wasting sequence: Grade I (axilla/groin), Grade II (thighs/buttocks), Grade III (chest/abdomen), Grade IV (facial muscles).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "A 10-month-old breastfed infant with minimal sun exposure presents with swollen wrists, frontal bossing, and a rachitic rosary along the costochondral junctions. Serum 25-hydroxyvitamin D level is 18 ng/mL (low). What is the recommended initial intensive treatment phase for this child using cholecalciferol?",
        opts: ["400 IU/day for 12 months", "2000 IU/day for 6 weeks", "50,000 IU single IM injection only", "10,000 IU/day for 6 months"],
        correct: 1,
        reason: "Endocrine Society recommendation for nutritional rickets intensive phase: 2000 IU/day cholecalciferol for 6 weeks, followed by 400-1000 IU/day maintenance.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "A 1-year-old boy presents with classic skeletal features of severe rickets and growth failure despite receiving 5000 IU daily of Vitamin D supplementation. Laboratory tests show hypocalcemia, hypophosphatemia, elevated PTH, elevated ALP, NORMAL 25-hydroxyvitamin D, but LOW 1,25-dihydroxyvitamin D (calcitriol). What genetic condition is most likely?",
        opts: ["Nutritional Vitamin D deficiency", "Vitamin D-Dependent Rickets Type 1 (CYP27B1 mutation)", "Vitamin D-Dependent Rickets Type 2", "X-linked hypophosphatemic rickets"],
        correct: 1,
        reason: "VDDR Type 1 is an autosomal recessive mutation in CYP27B1 gene (1-alpha-hydroxylase defect) causing normal/high 25(OH)D and low calcitriol.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "An 8-month-old infant accidentally ingests a massive single overdose of adult concentrated Vitamin A liquid (estimated total dose >350,000 IU). Twelve hours later, the infant develops extreme irritability, projectile vomiting, bulging anterior fontanelle, and widespread skin peeling on the palms and soles. What acute neurological complication is occurring?",
        opts: ["Bacterial meningitis", "Acute Hydrocephalus", "Pseudotumor cerebri (increased intracranial pressure)", "Intracranial hemorrhage"],
        correct: 2,
        reason: "Acute Vitamin A toxicity causes pseudotumor cerebri (increased intracranial pressure), bulging fontanelle, vomiting, and skin desquamation.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "A 5-month-old infant receives routine nutritional counseling at a pediatric clinic. The mother asks about routine Vitamin D supplementation for her breastfed baby from birth to 12 months. What is the standard recommended daily preventive dose?",
        opts: ["100 IU/day", "400 IU/day", "800 IU/day", "2000 IU/day"],
        correct: 1,
        reason: "Regular vitamin D supplementation is recommended for infants from birth until 12 months of age at 400 IU/day.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following disease conditions are recognized illness-related secondary causes of pediatric acute malnutrition EXCEPT:",
        opts: ["Cystic fibrosis", "Congenital heart disease", "Neuromuscular diseases", "Exclusively breastfed healthy infant with adequate latch"],
        correct: 3,
        reason: "Healthy exclusively breastfed infants are normal; poor breastfeeding or non-illness factors cause primary malnutrition, while CF, CHD, CRF, and neuromuscular diseases cause secondary acute malnutrition.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following is NOT a feature of the body's physiological adaptive response during prolonged starvation in Marasmus?",
        opts: ["Reduced basal metabolic rate (BMR)", "Loss of subcutaneous fat and skeletal muscle mass", "Massive fluid retention and generalized bilateral edema", "Reduced total energy expenditure"],
        correct: 2,
        reason: "Marasmus represents physiological adaptation with wasting and NO edema. Generalized bilateral edema is a feature of Kwashiorkor (maladaptive response).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following clinical or laboratory features is NOT characteristic of Vitamin D-Dependent Rickets Type 1 (VDDR I)?",
        opts: ["Low serum calcium and low serum phosphate", "Elevated alkaline phosphatase and PTH", "Marked alopecia in 2/3 of affected cases", "Normal or elevated 25-hydroxyvitamin D with low calcitriol"],
        correct: 2,
        reason: "Alopecia occurs in two-thirds of cases of VDDR Type 2 (receptor defect), NOT VDDR Type 1.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "Regarding Vitamin A toxicity in children, all of the following are recognized clinical features of CHRONIC pediatric toxicity EXCEPT:",
        opts: ["Craniotabes and cortical bone thickening", "Cheilitis (dry, cracked lips) and alopecia", "Hepatosplenomegaly and permanent liver fibrosis", "Acute bulging fontanelle within hours of a single ingestion"],
        correct: 3,
        reason: "Bulging fontanelle within hours of single ingestion is a hallmark of ACUTE toxicity, not chronic toxicity.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following metabolic or organ system abnormalities is NOT expected in a severely malnourished child during the acute phase?",
        opts: ["Impaired cardiac contractility and bradycardia", "Fatty infiltration of the liver", "Increased hepatic clearance and elevated binding of drugs", "Decreased minute ventilation and impaired response to hypoxia"],
        correct: 2,
        reason: "Drug metabolism is DECREASED due to decreased plasma albumin and decreased binding glycoprotein fractions, NOT increased.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "In the WHO treatment protocol for the stabilization phase of Severe Acute Malnutrition, all of the following interventions are recommended EXCEPT:",
        opts: ["Immediate aggressive IV fluid boluses of 0.9% Normal Saline", "Treatment and prevention of hypoglycemia with glucose for all children without shock", "Treatment and prevention of hypothermia", "Administration of milk-based starter formula F-75"],
        correct: 0,
        reason: "Standard IV saline boluses are dangerous in SAM due to sodium retention and cardiac fragility; dehydration is treated preferably with ReSoMal orally/NG, reserving IV fluids strictly for shock.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "A 3-year-old child presents with active clinical measles complicated by Bitot's spots on the bulbar conjunctiva. According to the WHO Vitamin A treatment protocol, what is the complete dosing schedule?",
        opts: ["Single dose of 50,000 IU on Day 1", "200,000 IU daily for 30 consecutive days", "200,000 IU administered on Day 1, Day 2, and Day 8 (or Day 15)", "100,000 IU given once every month for 6 months"],
        correct: 2,
        reason: "For visible ocular signs or severe measles in a child >1 year, 3 distinct doses of 200,000 IU are given: Dose 1 on D1, Dose 2 on D2, Dose 3 on D8 (or D15).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "A severely malnourished infant on Day 2 of inpatient stabilization receives F-75 formula. According to the WHO feeding protocol, what is the correct feeding frequency and volume per feed during Days 1-2?",
        opts: ["1-hourly feeding, 5 mL/kg per feed", "2-hourly feeding, 11 mL/kg per feed (total 130 mL/kg/day)", "4-hourly feeding, 22 mL/kg per feed", "6-hourly feeding, 50 mL/kg per feed"],
        correct: 1,
        reason: "Days 1-2 F-75 schedule: 2-hourly feeding frequency, 11 mL/kg per feed, total daily volume 130 mL/kg/day.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old girl with severe chronic malabsorption develops Refeeding Syndrome 48 hours after rapid re-introduction of high-calorie feeds. Which management step is essential for preventing further life-threatening cardiac and neurological deterioration?",
        opts: ["Rapid infusion of high-dose insulin without electrolytes", "Gradual increase in calorie intake with daily electrolyte monitoring and thiamine supplementation", "Total restriction of fluid and immediate blood transfusion", "Administration of high-dose sodium bicarbonate"],
        correct: 1,
        reason: "Refeeding syndrome prevention/management requires gradual calorie increases, close daily monitoring of electrolytes (P, K, Mg), and thiamine supplementation.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "H"
      },
      {
        q: "What is the primary initial step in the management of a child presenting with hypercalcemia, high serum retinol (>120 mcg/dL), and periosteal bone proliferation due to Vitamin A toxicity?",
        opts: ["Immediate total withdrawal of all Vitamin A supplements and retinoids", "Administration of high-dose Vitamin A boosters", "Immediate orthopedic surgery", "High-dose oral iron supplementation"],
        correct: 0,
        reason: "The absolute first step in Vitamin A toxicity protocol is immediate total withdrawal of all Vitamin A supplements, fortified formulas, or retinoid medications.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      },
      {
        q: "In Vitamin D metabolism, what wavelength spectrum of ultraviolet B (UVB) sunlight is required for natural conversion of 7-dehydrocholesterol to cholecalciferol in human skin?",
        opts: ["100-200 nm", "290-315 nm", "400-500 nm", "700-800 nm"],
        correct: 1,
        reason: "Synthesis of vitamin D3 occurs in the skin by sunlight (ultraviolet B in the 290-315 nm range).",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "E"
      },
      {
        q: "A 10-month-old infant with severe nutritional rickets due to primary calcium deficiency should receive which treatment regimen in addition to Vitamin D?",
        opts: ["Elemental calcium supplementation = 1000 mg/day", "High-dose oral zinc supplements", "Intravenous potassium chloride boluses", "High-dose vitamin K injections"],
        correct: 0,
        reason: "In children where calcium deficiency is the primary cause of nutritional rickets, calcium supplements (>1000 mg/d) are recommended.",
        ref: "malnutrition-mcq-exam.pdf",
        diff: "M"
      }
    ]
  },

  // ============================================================
  // TOPIC 4 — ACUTE DIARRHEA & VOMITING
  // ============================================================
  {
    id: "acute_diarrhea",
    title: "Acute Diarrhea & Vomiting",
    source: "Acute diarrhea.pdf + diarrhea_vomiting_exam.pdf",
    questions: [
      {
        q: "Acute diarrhea is defined as the passage of loose or watery stools occurring at what minimum frequency?",
        opts: ["3 or more loose stools in 24 hours", "1 stool in 24 hours", "5 loose stools in 48 hours", "10 loose stools in 1 week"],
        correct: 0,
        reason: "Acute diarrhea is defined as ≥ 3 loose/watery stools in 24 hours lasting < 14 days.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "Secretory diarrhea caused by ETEC or Vibrio cholerae is characterized by sodium pump failure due to bacterial toxins. How do stools typically appear?",
        opts: ["Frothy, explosive, and acidic", "Profuse watery loss without blood", "Bloody with mucus and tenesmus", "Greasy with pale undigested fat"],
        correct: 1,
        reason: "Secretory toxins (ETEC/Vibrio) cause profuse isotonic watery stools without blood.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "Osmotic diarrhea results from enterocyte brush border damage and disaccharidase deficiency. Children with osmotic diarrhea carry a high risk of developing:",
        opts: ["Metabolic alkalosis", "Hypernatremia", "Severe hypocalcemia", "Polycythemia vera"],
        correct: 1,
        reason: "Osmotic diarrhea causes water loss in excess of solute, predisposing to hypernatremia.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "A 10-month-old infant is brought with acute watery diarrhea. On exam: restless and irritable, eyes sunken, drinks ORS eagerly, skin pinch goes back slowly. According to WHO assessment, what is the hydration classification and plan?",
        opts: ["No dehydration-Plan A at home", "Some dehydration-Plan B with ORS 50-100 mL/kg over 4 hours", "Severe dehydration-Plan C with IV Ringer lactate 100 mL/kg over 6 hours", "Severe dehydration-Plan C with IV Ringer lactate over 3 hours"],
        correct: 1,
        reason: "Irritable + sunken eyes + eager drinking = Some Dehydration (Plan B: 50–100 mL/kg ORS over 4h).",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "Under WHO Plan A for home management of acute diarrhea with NO dehydration, what fluid volume should be given after each loose stool to an infant under 6 months?",
        opts: ["10 mL", "200 mL", "50 mL", "500 mL"],
        correct: 2,
        reason: "Plan A home rehydration for <6 months prescribes 50 mL ORS after each loose stool.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old child (>1 year) presents with severe dehydration (Plan C). What is the IV fluid regimen for 100 mL/kg Ringer Lactate?",
        opts: ["30 mL/kg in 1 hour, then 70 mL/kg over 5 hours", "30 mL/kg in 1/2 hour, then 70 mL/kg over 2 and 1/2 hours", "50 mL/kg over 4 hours", "100 mL/kg over 12 hours"],
        correct: 1,
        reason: "Plan C (>1 yr): 100 mL/kg IV Ringer Lactate as 30 mL/kg in 30 min, then 70 mL/kg in 2.5 hours.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "What is the daily Zinc supplementation dose and duration for a 9-month-old infant with acute diarrhea?",
        opts: ["5 mg/day for 5 days", "10 mg/day for 1 week", "20 mg/day for 2 weeks", "40 mg/day for 1 month"],
        correct: 2,
        reason: "Zinc dose for infants ≥6 months is 20 mg/day orally for 10–14 days.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "Which live attenuated oral vaccine is administered in 2 doses at 2 and 4 months of age to prevent severe infant diarrheal disease?",
        opts: ["Oral Polio Vaccine", "Rotavirus Vaccine", "Measles Vaccine", "Hepatitis A Vaccine"],
        correct: 1,
        reason: "Live attenuated oral Rotavirus vaccine is administered at 2 and 4 months of age.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "A 4-year-old child presents with bloody dysenteric diarrhea caused by Shigella. Which antibiotic is recommended in lecture guidelines?",
        opts: ["Amphotericin B", "Oral Vancomycin", "Azithromycin or Ciprofloxacin", "Penicillin G"],
        correct: 2,
        reason: "Azithromycin or Ciprofloxacin is recommended first-line therapy for Shigella dysentery.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "In a child with hemorrhagic colitis caused by Enterohemorrhagic E. coli (E. coli O157:H7), why are antibiotics CONTRAINDICATED?",
        opts: ["They cause immediate bowel necrosis", "They increase the risk of Hemolytic Uremic Syndrome (HUS)", "They induce anaphylaxis", "They cause metabolic alkalosis"],
        correct: 1,
        reason: "Antibiotics in EHEC (O157:H7) induce Shiga-toxin release, increasing the risk of HUS.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "All of the following are recognized complications of acute diarrhea EXCEPT:",
        opts: ["Metabolic acidosis", "Hypertrophic pyloric stenosis", "Acute renal failure", "Hypokalemia"],
        correct: 1,
        reason: "Pyloric stenosis is an anatomical hypertrophic disorder, not a diarrheal complication.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "In acute diarrhea caused by Giardia lamblia, which antimicrobial agent is recommended in lecture guidelines?",
        opts: ["Ceftriaxone", "Penicillin V", "Acyclovir", "Metronidazole or Furazolidone"],
        correct: 3,
        reason: "Oral Metronidazole or Furazolidone is the drug of choice for Giardia lamblia infection.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "Which pathogen is the leading cause of severe dehydrating gastroenteritis in infants and young children under 2 years worldwide?",
        opts: ["Enterotoxigenic E. coli", "Giardia lamblia", "Shigella sonnei", "Rotavirus"],
        correct: 3,
        reason: "Rotavirus is the leading cause of severe dehydrating diarrhea in infants under 2 years globally.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "The WHO Reduced Osmolarity Oral Rehydration Solution (ORS) has a total osmolarity of approximately:",
        opts: ["245 mOsm/L", "150 mOsm/L", "310 mOsm/L", "400 mOsm/L"],
        correct: 0,
        reason: "WHO reduced osmolarity ORS has a total osmolarity of 245 mOsm/L.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "A 9-month-old infant with acute diarrhea presents lethargic, with sunken eyes, unable to drink, and skin pinch retracts VERY SLOWLY (>2 seconds). According to WHO classification, this infant has:",
        opts: ["No dehydration", "Severe dehydration", "Some dehydration", "Septic shock without dehydration"],
        correct: 1,
        reason: "Lethargy/unconsciousness + inability to drink + very slow skin pinch (>2s) = Severe Dehydration.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "For an 8-month-old infant classified as having 'Some Dehydration' under WHO Plan B, what volume of ORS should be administered orally over a 4-hour period?",
        opts: ["10-20 mL/kg", "150-200 mL/kg", "50-100 mL/kg", "250 mL/kg"],
        correct: 2,
        reason: "WHO Plan B prescribes 50–100 mL/kg ORS administered over 4 hours for some dehydration.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "In WHO Plan C IV rehydration for severe dehydration in an infant UNDER 12 months of age, how is the 100 mL/kg Ringer Lactate total volume timed?",
        opts: ["100 mL/kg as rapid bolus in 15 minutes", "30 mL/kg in 30 minutes, then 70 mL/kg over 2.5 hours", "50 mL/kg in 2 hours, then 50 mL/kg over 4 hours", "30 mL/kg in 1 hour, then 70 mL/kg over 5 hours"],
        correct: 3,
        reason: "In infants < 12 months, Plan C IV fluid (100 mL/kg) is given as 30 mL/kg in 1 hour, then 70 mL/kg over 5 hours.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "Zinc supplementation during acute diarrhea reduces duration and stool volume. What is the recommended daily dose for an infant UNDER 6 months of age?",
        opts: ["10 mg/day", "5 mg/day", "20 mg/day", "40 mg/day"],
        correct: 0,
        reason: "WHO Zinc dosage for infants under 6 months is 10 mg/day for 10–14 days (vs 20 mg/day for ≥6 months).",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "Which class of medications is STRICTLY CONTRAINDICATED in young children with acute diarrhea due to risks of toxic megacolon and respiratory depression?",
        opts: ["Oral rehydration salts", "Anti-motility agents (e.g., Loperamide)", "Zinc sulfate syrup", "Probiotic preparations"],
        correct: 1,
        reason: "Loperamide and anti-motility agents are contraindicated in children due to lethargy and paralytic ileus risk.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old child presents with bloody diarrhea, high fever, tenesmus, and generalized seizures. Stool culture grows Shigella flexneri. What is the mechanism of Shigella neurotoxicity?",
        opts: ["Severe hypercalcemia", "Direct invasion of brain tissue", "Production of Shiga toxin causing central neuro-excitation", "Hypoglycemia alone"],
        correct: 2,
        reason: "Shiga toxin causes central nervous system neurotoxicity leading to encephalopathy and seizures.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "Persistent diarrhea is defined as an episode of diarrhea of presumed infectious etiology that lasts for at least how many days?",
        opts: ["7 days", "30 days", "21 days", "14 days"],
        correct: 3,
        reason: "Persistent diarrhea is defined as an acute infectious diarrheal episode lasting ≥ 14 days.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "In a child with hypernatremic dehydration (Serum Na > 150 mEq/L) due to acute diarrhea, rapid correction must be avoided to prevent which catastrophic complication?",
        opts: ["Cerebral edema and brain herniation", "Central pontine myelinolysis", "Acute pulmonary edema", "Severe hypokalemic paralysis"],
        correct: 0,
        reason: "Rapid rehydration in hypernatremia causes rapid intracellular water influx, leading to cerebral edema.",
        ref: "Acute diarrhea.pdf",
        diff: "H"
      },
      {
        q: "Which antimicrobial agent is recommended for treating acute invasive cholera with severe dehydration in children?",
        opts: ["Oral Vancomycin", "Azithromycin or Erythromycin", "Ceftriaxone IV only", "Acyclovir"],
        correct: 1,
        reason: "Azithromycin or Erythromycin is the antibiotic of choice for severe cholera in young children.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "All of the following are key components of WHO Plan A home management of acute diarrhea EXCEPT:",
        opts: ["Giving extra fluids like ORS and soup", "Continuing regular age-appropriate feeding", "Administering prophylactic oral Metronidazole to all infants", "Educating mother on danger signs to return immediately"],
        correct: 2,
        reason: "Empiric antibiotics like Metronidazole are not recommended for all Plan A diarrheal cases.",
        ref: "Acute diarrhea.pdf",
        diff: "E"
      },
      {
        q: "Which metabolic acid-base disturbance is most commonly caused by severe acute diarrhea due to bicarbonate loss in stool?",
        opts: ["Respiratory alkalosis", "Metabolic alkalosis", "Respiratory acidosis", "Metabolic acidosis with normal anion gap"],
        correct: 3,
        reason: "Direct GI loss of bicarbonate in stool causes normal anion gap (hyperchloremic) metabolic acidosis.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "A child with acute diarrhea, anemia, thrombocytopenia, and elevated BUN/creatinine following a dysenteric illness presents the classic clinical triad of:",
        opts: ["Henoch-Schönlein Purpura", "Disseminated Intravascular Coagulation", "Refeeding Syndrome", "Hemolytic Uremic Syndrome (HUS)"],
        correct: 3,
        reason: "Anemia, thrombocytopenia, and renal failure after dysentery indicate HUS.",
        ref: "Acute diarrhea.pdf",
        diff: "M"
      },
      {
        q: "According to clinical practice guidelines, what is the standard definition of acute diarrhea?",
        opts: ["Passage of 3 or more loose or watery stools in 24 hours, or a recent change in stool consistency", "Passage of any unformed stool lasting for more than 14 consecutive days", "Presence of visible blood and mucus in stool regardless of daily frequency", "Increased stool frequency exceeding 5 bowel movements per day for at least 1 week"],
        correct: 0,
        reason: "Passage of 3+ loose/watery stools in 24h or recent change in character/consistency.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "Diarrheal diseases represent a major global health burden. Approximately what percentage of under-five child mortality is attributed to diarrhea?",
        opts: ["4%", "7%", "11%", "18%"],
        correct: 2,
        reason: "Diarrhea causes ~11% of under-5 mortality globally.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 2-dose live attenuated oral vaccine administered at 2 and 4 months of age is specifically designed to prevent severe acute watery diarrhea caused by which viral pathogen?",
        opts: ["Enteric Adenovirus", "Rotavirus", "Norovirus", "Astrovirus"],
        correct: 1,
        reason: "Rotavirus live attenuated oral vaccine is given at 2 and 4 months of age.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "A 10-month-old infant presents with a 2-day history of loose, frothy, explosive, and acidic stools accompanied by perianal skin excoriation following a viral illness. What is the primary underlying pathogenic mechanism?",
        opts: ["Profound sodium pump failure due to bacterial enterotoxins", "Direct invasion of intestinal mucosal cells leading to mucosal sloughing", "Translocation of colonic flora into the small intestine causing bacterial overgrowth", "Brush border enterocyte injury resulting in secondary disaccharidase deficiency"],
        correct: 3,
        reason: "Enterocyte injury damages brush border > disaccharidase deficiency > osmotic diarrhea.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "What is the recommended daily dose and duration of elemental zinc supplementation for a 14-month-old child presenting with acute diarrhea?",
        opts: ["10 mg/day for 7 days", "20 mg/day for 2 weeks", "5 mg/day for 10 days", "30 mg/day for 3 weeks"],
        correct: 1,
        reason: "Zinc supplementation for children >6 months with diarrhea is 20 mg/day for 2 weeks.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "Low socioeconomic status, bottle feeding, measles, malnutrition, and immunodeficiency are recognized risk factors for acute diarrhea. Which of the following is NOT a recognized risk factor?",
        opts: ["Bottle feeding", "Measles infection", "Malnutrition", "Exclusive breastfeeding"],
        correct: 3,
        reason: "Exclusive breastfeeding is protective; bottle feeding is the recognized risk factor.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "Secretory diarrhea involves profound loss of water and electrolytes due to intestinal sodium pump failure. Which pair of organisms classic cause this form via toxin production?",
        opts: ["Enterotoxigenic E. coli (ETEC) and Vibrio cholerae", "Shigella dysenteriae and Campylobacter jejuni", "Giardia lamblia and Entamoeba histolytica", "Clostridium difficile and Yersinia enterocolitica"],
        correct: 0,
        reason: "ETEC & V. cholerae cause secretory diarrhea via enterotoxins causing sodium pump failure.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "An 8-month-old infant presents with loose stools for 3 days. On examination, the infant is irritable and restless, eyes are sunken, skin pinch goes back slowly, and he drinks eagerly when offered fluids. How should this infant's dehydration status be categorized and treated?",
        opts: ["No dehydration; manage at home with Plan A fluid guidelines", "Some dehydration; manage with IV Ringer's Lactate at 100 ml/kg over 6 hours", "Some dehydration; manage in clinic with Plan B ORS deficit therapy (50-100 ml/kg over 4 hours)", "Severe dehydration; manage in hospital with immediate Plan C intravenous fluid resuscitation"],
        correct: 2,
        reason: "Irritable, sunken eyes, drinks eagerly, slow skin pinch = Some dehydration > Plan B ORS.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "A 10-month-old infant weighing 8 kg presents with severe dehydration and lethargy. Under Plan C, IV Ringer's Lactate (100 ml/kg total) is prescribed over a 6-hour period. How should this fluid volume be scheduled?",
        opts: ["30 ml/kg in the 1st hour, followed by 70 ml/kg over the next 5 hours", "50 ml/kg in the 1st hour, followed by 50 ml/kg over the next 5 hours", "30 ml/kg over the 1st half hour, followed by 70 ml/kg over the next 2.5 hours", "70 ml/kg in the 1st hour, followed by 30 ml/kg over the next 5 hours"],
        correct: 0,
        reason: "Plan C (<1 yr): 100 ml/kg total > 30 ml/kg in 1st hour, 70 ml/kg in next 5 hours.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following parasitic organisms is cited in the lecture guidelines as the MOST common parasite causing acute diarrhea in children?",
        opts: ["Entamoeba histolytica", "Cryptosporidium parvum", "Giardia lamblia", "Strongyloides stercoralis"],
        correct: 2,
        reason: "Giardia lamblia is listed as the most common parasitic cause of acute diarrhea.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old child presents with high fever, abdominal cramps, tenesmus, and frequent small-volume stools containing gross blood and mucus. Stool microscopy shows abundant RBCs and leukocytes. Which bacterial pathogen is most likely, and what is a recommended antibiotic?",
        opts: ["Rotavirus; supportive care only", "Shigella species; Azithromycin or Ciprofloxacin", "Clostridium difficile; Oral Vancomycin", "Enterohemorrhagic E. coli (EHEC); Ceftriaxone"],
        correct: 1,
        reason: "Dysentery with blood/mucus/tenesmus = Shigella; treated with Azithromycin/Ciprofloxacin.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "A 4-week-old firstborn male infant presents with nonbilious, projectile vomiting after every feed. He remains ravenously hungry. Examination reveals a palpable 2-cm olive-shaped mass in the midepigastrium. Which metabolic disturbance is characteristically present in this child?",
        opts: ["Hyperchloremic, hyperkalemic metabolic acidosis", "Normal anion gap metabolic acidosis with hypernatremia", "Hypochloremic, hyperkalemic metabolic alkalosis", "Hypochloremic, hypokalemic metabolic alkalosis"],
        correct: 3,
        reason: "Frequent vomiting of gastric acid causes hypochloremic, hypokalemic metabolic alkalosis.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "According to the WHO 4-sign assessment grid for pediatric dehydration, which of the following clinical parameters is NOT one of the four specific criteria used to decide the degree of dehydration?",
        opts: ["General condition (alert vs. irritable vs. lethargic)", "Appearance of the eyes (normal vs. sunken)", "Thirst / drinking response (normal vs. eager vs. poor)", "Capillary refill time (>2 seconds vs. <2 seconds)"],
        correct: 3,
        reason: "WHO 4 signs are: General condition, Eyes, Thirst, Skin pinch (not capillary refill).",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A mother brings her 5-month-old infant with mild acute watery diarrhea and no signs of dehydration (Plan A). Following each loose stool, how much additional fluid/ORS should be administered at home?",
        opts: ["50 ml", "100 to 200 ml", "10 to 20 ml/kg", "250 ml"],
        correct: 0,
        reason: "Plan A (<6 months): Give 50 ml ORS/fluid after each loose stool.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "When rehydrating a severely malnourished child presenting with acute diarrhea and dehydration, which specialized principle must be respected?",
        opts: ["Intravenous rehydration is mandatory at double the standard fluid delivery rate", "Oral rehydration route and slower rehydration rates are preferred to avoid volume overload and heart failure", "High-sodium ORS formulation (90 mmol/L Na) must be administered rapidly", "Fasting for 48 hours is enforced to allow bowel rest prior to starting ORS"],
        correct: 1,
        reason: "Malnourished children: Oral route and slow rehydration preferred to prevent CHF/overhydration.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "A 6-month-old infant treated with broad-spectrum ampicillin for otitis media develops severe colitis. Stool testing detects Clostridium difficile toxin. What is the targeted antimicrobial therapy?",
        opts: ["Oral Ciprofloxacin", "IV Ceftriaxone", "Oral Metronidazole or Vancomycin", "Oral Azithromycin"],
        correct: 2,
        reason: "C. difficile toxin positive colitis is treated with Metronidazole or Vancomycin.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "Which of the following statements regarding pharmacological management of acute gastroenteritis in children is FALSE according to the lecture guidelines?",
        opts: ["Antimicrobial therapy is avoided in suspected EHEC O157:H7 infection due to increased risk of HUS", "Antidiarrheal compounds (anti-motility agents) can be safely administered to children over 2 years of age", "Antibiotic therapy for Salmonella gastroenteritis is indicated in infants aged 3 months or younger", "Rotavirus gastroenteritis management relies strictly on supportive rehydration therapy"],
        correct: 1,
        reason: "Antidiarrheal compounds should NEVER be used at any age in children.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "A 1-day-old full-term newborn presents with bilious vomiting with every feed. On examination, the abdomen is completely scaphoid with NO abdominal distention. Maternal history was notable for polyhydramnios. What classic radiographic finding is expected on plain abdominal X-ray?",
        opts: ["Double bubble sign with complete absence of distal bowel gas", "Multiple air-fluid levels throughout distended small intestine loops", "Pneumoperitoneum with free air under the diaphragm", "Target-like soft tissue mass in the right upper quadrant"],
        correct: 0,
        reason: "Duodenal atresia presents on day 1 with bilious emesis, NO distention & double bubble on X-ray.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "Persistent diarrhea in pediatric clinical practice is defined as an episode of diarrhea that begins acutely and continues for more than:",
        opts: ["7 days", "10 days", "14 days", "30 days"],
        correct: 2,
        reason: "Persistent diarrhea is defined as diarrhea lasting > 14 days.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old boy presents with a 2-month history of 4 to 5 loose stools daily containing undigested vegetable particles. He has normal height, weight, and nutritional status, no stool fat or blood, and no abdominal pain or vomiting. What is the most likely diagnosis?",
        opts: ["Celiac disease (Gluten enteropathy)", "Toddler's diarrhea (Chronic nonspecific diarrhea)", "Chronic Giardiasis", "Cow's milk protein allergy"],
        correct: 1,
        reason: "Normal growth, undigested food in stool, no blood/fat, age 2-4y = Toddler's diarrhea.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "An infant presenting with severe perianal eczematous skin rash, alopecia, and chronic diarrhea is diagnosed with Acrodermatitis enteropathica. What is the underlying etiology and specific treatment dose?",
        opts: ["Copper malabsorption; treated with oral penicillamine", "Vitamin B12 deficiency; treated with intramuscular hydroxocobalamin", "Magnesium malabsorption; treated with magnesium sulfate", "Zinc malabsorption; treated with elemental zinc supplementation at 2 mg/kg/day"],
        correct: 3,
        reason: "Acrodermatitis enteropathica is due to zinc malabsorption; treated with zinc 2 mg/kg/day.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "According to the lecture notes on chronic diarrhea, what is the ONLY common primary infection causing chronic intestinal malabsorption in pediatric patients?",
        opts: ["Chronic Giardiasis", "Intestinal Amebiasis", "Cryptosporidiosis", "Rotavirus enteritis"],
        correct: 0,
        reason: "Chronic Giardiasis is the ONLY common primary infection causing chronic malabsorption.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "A 15-month-old child presents with chronic bulky foul-smelling stools, abdominal distention, and growth faltering after wheat introduction at 7 months. Duodenal biopsy reveals subtotal villous atrophy. Which screening laboratory test is most specific?",
        opts: ["Serum IgA level", "Stool reducing substances", "Anti-tissue transglutaminase (tTG) IgA antibodies", "Fecal alpha-1 antitrypsin"],
        correct: 2,
        reason: "Celiac disease screening is done via Anti-TTG IgA / Anti-endomysial antibodies.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "Which of the following conditions is classified as a COMMON cause of chronic diarrhea both below 1 year and over 1 year of age, rather than an uncommon cause?",
        opts: ["Cow's milk allergy", "Congenital enzyme defects", "Acrodermatitis enteropathica", "VIPoma"],
        correct: 0,
        reason: "Cow's milk allergy is common below and over 1 year; others are uncommon at all ages.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "Shwachman-Diamond syndrome is a rare cause of exocrine pancreatic insufficiency and chronic diarrhea in children. Which extra-intestinal manifestation characteristically completes its clinical triad?",
        opts: ["Thrombocytopenia", "Neutropenia", "Eosinophilia", "Lymphocytosis"],
        correct: 1,
        reason: "Shwachman-Diamond triad: Pancreatic insufficiency, diarrhea, and neutropenia.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "An infant presenting with fat malabsorption since birth is found to have absent serum cholesterol and triglycerides. A peripheral blood smear demonstrates acanthocytes. What is the diagnosis?",
        opts: ["Intestinal lymphangiectasia", "Celiac disease", "Cystic fibrosis", "Abetalipoproteinemia"],
        correct: 3,
        reason: "Abetalipoproteinemia shows absent cholesterol/triglycerides and acanthocytes.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "An artificially fed 1-year-old child recovering from acute gastroenteritis is starting oral refeeding after 4 hours of Plan B ORS therapy. How many times per day should easily digestible, energy-rich food be offered?",
        opts: ["2 times per day", "3 times per day", "5 times per day", "8 times per day"],
        correct: 2,
        reason: "Non-breastfed children should be offered food 5 times/day during diarrhea recovery.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "What is the correct daily dose of elemental zinc supplementation recommended for a 4-month-old infant suffering from acute diarrhea?",
        opts: ["10 mg/day for 2 weeks", "20 mg/day for 2 weeks", "5 mg/day for 1 week", "15 mg/day for 10 days"],
        correct: 0,
        reason: "Zinc dose for infants 2-6 months with acute diarrhea is 10 mg/day for 2 weeks.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 7-month-old infant presents with postprandial regurgitation, irritability during feeds, and recurrent wheezing. Barium esophagus rules out anatomical defects. Which investigation is recognized as the BEST test to confirm and quantitate gastroesophageal reflux?",
        opts: ["Upper gastrointestinal endoscopy with biopsy", "24-hour esophageal pH monitoring study", "Abdominal ultrasound", "Technetium milk scan"],
        correct: 1,
        reason: "24-hour esophageal pH study is the best test to confirm and quantitate reflux.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "What is the recommended first-line medical drug class for conservative pharmacological management of pediatric Gastroesophageal Reflux Disease (GERD)?",
        opts: ["Proton pump inhibitors (PPIs)", "Prokinetic agents (Metoclopramide)", "Systemic corticosteroids", "H2 receptor antagonists"],
        correct: 3,
        reason: "H2 receptor antagonists are first-line conservative medical therapy for GERD.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "What clinical phenomenon is defined as the forceful oral expulsion of gastric contents associated with contraction of the abdominal and chest wall musculature?",
        opts: ["Vomiting", "Regurgitation", "Rumination", "Dysphagia"],
        correct: 0,
        reason: "Vomiting is defined as forceful oral expulsion of gastric contents with muscle contraction.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "Differential diagnosis of vomiting in children includes obstructive and inflammatory gastrointestinal causes. Which of the following is categorized as an INFLAMMATORY cause rather than an obstructive cause?",
        opts: ["Hypertrophic pyloric stenosis", "Intussusception", "Volvulus", "Acute pancreatitis"],
        correct: 3,
        reason: "Pancreatitis is an inflammatory cause of vomiting, whereas HPS/intussusception/volvulus are obstructive.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "At what typical age range does Idiopathic Hypertrophic Pyloric Stenosis (IHPS) usually present with projectile vomiting?",
        opts: ["First 24 to 48 hours of life", "Age = 3 weeks (typically 3 weeks to 5 months)", "Age 6 to 12 months", "Age 2 to 4 years"],
        correct: 1,
        reason: "Pyloric stenosis typically presents at age >= 3 weeks (3 weeks to 5 months).",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "What is the diagnostic imaging modality OF CHOICE for confirming Hypertrophic Pyloric Stenosis, characteristically demonstrating a 'target-like' image in cross-section?",
        opts: ["Plain abdominal radiograph", "Barium swallow study", "Abdominal Ultrasound", "Computed Tomography (CT) of abdomen"],
        correct: 2,
        reason: "Ultrasound is the best test for HPS, showing a target-like image in cross-section.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 4-week-old infant with hypertrophic pyloric stenosis presents with lethargy and severe dehydration. Serum electrolytes show Na+ 128 mEq/L, K+ 2.9 mEq/L, and Cl- 84 mEq/L. What is the MANDATORY initial management step before surgical pyloromyotomy?",
        opts: ["Intravenous rehydration and correction of electrolyte deficits (NaCl and KCl)", "Immediate emergency surgical pyloromyotomy within 1 hour", "Administration of IV atropine to relax pyloric smooth muscle", "High-pressure barium enema reduction"],
        correct: 0,
        reason: "Rehydration and correction of NaCl/KCl electrolyte deficits MUST precede surgery.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "What is the definitive surgical procedure performed for the definitive correction of Duodenal Atresia in a newborn?",
        opts: ["Fredet-Ramstedt Pyloromyotomy", "Kasai Portoenterostomy", "Nissen Fundoplication", "Duodenoduodenostomy"],
        correct: 3,
        reason: "Duodenoduodenostomy is the definitive surgical repair for Duodenal Atresia.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "A 1-day-old newborn presents with bile-stained emesis and significant abdominal distention. Abdominal X-ray shows multiple dilated bowel loops. This presentation distinguishes Jejunal/Ileal Atresia from Duodenal Atresia primarily by the presence of:",
        opts: ["Projectile nonbilious vomiting", "Marked abdominal distention (absent in duodenal atresia)", "Hypochloremic metabolic alkalosis", "Palpable epigastric olive mass"],
        correct: 1,
        reason: "Jejunal/ileal atresia presents WITH abdominal distention, unlike duodenal atresia.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "A 10-year-old child returns from a school trip with watery diarrhea, nausea, and abdominal cramps (Traveler's diarrhea). Which microbial agent is most commonly responsible, and which antibiotic is suggested in lecture guidelines?",
        opts: ["Rotavirus; supportive therapy", "Entamoeba histolytica; Metronidazole", "ETEC / EPEC; Azithromycin or Ciprofloxacin", "Yersinia enterocolitica; Aminoglycoside"],
        correct: 2,
        reason: "Traveler's diarrhea (ETEC/EPEC) is treated with Azithromycin or Ciprofloxacin.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old child weighing 15 kg arrives lethargic with sunken eyes and very slow skin pinch (Severe Dehydration). IV Ringer's Lactate is initiated under Plan C (100 ml/kg over 3 hours total). How should the IV fluid administration rate be divided?",
        opts: ["30 ml/kg (450 ml) within the 1st half hour, followed by 70 ml/kg (1050 ml) over the next 2.5 hours", "30 ml/kg in the 1st hour, followed by 70 ml/kg over the next 5 hours", "50 ml/kg in the 1st hour, followed by 50 ml/kg over 2 hours", "100 ml/kg administered as a rapid bolus over 15 minutes"],
        correct: 0,
        reason: "Plan C (>1 yr): 100 ml/kg total -> 30 ml/kg in 1/2 hour, 70 ml/kg in next 2.5 hours.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "Short bowel syndrome in pediatric gastroenterology is defined as congenital or postnatal surgical loss of greater than what proportion of the small intestine?",
        opts: ["10%", "25%", "33%", "50%"],
        correct: 3,
        reason: "Short bowel syndrome is defined as loss of > 50% of small intestine.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "Osmotic diarrhea is characterized by injury to enterocytes and brush border destruction. Which of the following features is NOT characteristic of Osmotic Diarrhea?",
        opts: ["Passage of large, frothy, acidic stools", "High risk of hypernatremic dehydration", "Secondary disaccharidase deficiency", "Presence of gross blood, pus, and mucus in stool"],
        correct: 3,
        reason: "Osmotic diarrhea features frothy/acidic stool; gross blood/mucus defines invasive dysentery.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "A newborn exhibits bilious emesis on day 1 of life. Antenatal ultrasound demonstrated polyhydramnios. Plain abdominal radiograph demonstrates a classic 'double bubble' appearance with a gasless distal abdomen. What is the diagnosis?",
        opts: ["Hypertrophic Pyloric Stenosis", "Duodenal Atresia", "Intussusception", "Gastroesophageal Reflux"],
        correct: 1,
        reason: "Bilious vomiting on day 1 + polyhydramnios + double bubble X-ray = Duodenal Atresia.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "Under Plan B treatment guidelines for a child with 'Some Dehydration', what total volume of ORS deficit therapy should be administered over 4 hours at the health facility?",
        opts: ["20 to 30 ml/kg", "30 to 50 ml/kg", "50 to 100 ml/kg", "120 to 150 ml/kg"],
        correct: 2,
        reason: "Plan B deficit therapy delivers 50-100 ml/kg ORS over 4 hours.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old child presents with watery diarrhea, anorexia, nausea, abdominal distension, and weight loss after camping. Stool microscopy confirms Giardia lamblia cysts. What is the recommended oral antimicrobial treatment?",
        opts: ["Metronidazole or Furazolidone", "Ciprofloxacin", "Ceftriaxone", "Oral Vancomycin"],
        correct: 0,
        reason: "Giardia infection causing diarrhea/anorexia/weight loss is treated with Metronidazole/Furazolidone.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "Rotavirus live attenuated oral vaccine is administered to infants to prevent severe acute gastroenteritis. What is the standard 2-dose schedule recommended in guidelines?",
        opts: ["At birth and 1 month", "At 1 and 2 months", "At 2 and 4 months", "At 6 and 9 months"],
        correct: 2,
        reason: "Rotavirus vaccine is given in 2 oral doses at 2 and 4 months of age.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 4-year-old child presents with high fever, dysenteric diarrhea, and elevated inflammatory markers suspected of Shigella infection. Which parenteral antibiotic is suggested in the lecture treatment table?",
        opts: ["Oral Metronidazole", "IV Ceftriaxone", "Oral Erythromycin", "IV Vancomycin"],
        correct: 1,
        reason: "Shigella with fever and high inflammatory markers is treated with IV Ceftriaxone or Azithromycin.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      },
      {
        q: "All of the following are recognized systemic complications directly resulting from acute severe gastroenteritis and dehydration EXCEPT:",
        opts: ["Acid-base imbalance (metabolic acidosis)", "Electrolyte disturbances (hypo/hypernatremia, hypokalemia)", "Acute renal failure", "Hypochloremic metabolic alkalosis"],
        correct: 3,
        reason: "Acute diarrhea causes metabolic acidosis; metabolic alkalosis occurs in vomiting (HPS).",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "In pediatric patients with Gastroesophageal Reflux Disease (GERD), surgical fundoplication (Nissen fundoplication) is specifically indicated for:",
        opts: ["All infants presenting with simple postprandial regurgitation", "First-line therapy prior to initiating dietary thickeners", "Refractory disease failing conservative and medical treatment", "Asymptomatic infants with positive pH studies"],
        correct: 2,
        reason: "Fundoplication surgery in GERD is reserved for refractory disease failing medical therapy.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "M"
      },
      {
        q: "A 5-year-old child presents with acute dysentery characterized by bloody stools and tenesmus. Stool examination demonstrates Entamoeba histolytica trophozoites containing ingested RBCs. What is the treatment of choice?",
        opts: ["Metronidazole", "Azithromycin", "Ciprofloxacin", "Co-trimoxazole"],
        correct: 0,
        reason: "Entamoeba histolytica dysentery is treated with Metronidazole.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "E"
      },
      {
        q: "A 1-day-old newborn boy presents with acute high bowel obstruction, bilious emesis, and abdominal distention. Doppler ultrasound confirms twisting of the small intestine around the superior mesenteric artery. What is the diagnosis and definitive management?",
        opts: ["Pyloric stenosis; pyloromyotomy", "Volvulus secondary to malrotation; emergency surgery", "Intussusception; air enema reduction", "GERD; positioning and thickened feeds"],
        correct: 1,
        reason: "High obstruction + intestine twisted around SMA = Volvulus; treated with emergency surgery.",
        ref: "diarrhea_vomiting_exam.pdf",
        diff: "H"
      }
    ]
  },

  // ============================================================
  // TOPIC 5 — ANEMIA (IRON DEFICIENCY, LEAD, APLASTIC)
  // ============================================================
  {
    id: "anemia",
    title: "Anemia (Iron Deficiency, Lead, Aplastic)",
    source: "Anemia Integrated.pdf + anemia_midterm_exam.pdf",
    questions: [
      {
        q: "In the progression of Iron Deficiency Anemia, what is the absolute FIRST lab abnormality to occur?",
        opts: ["Decreased serum ferritin", "Decrease in bone marrow hemosiderin (iron tissue stores)", "Decreased serum iron and transferrin saturation", "Microcytosis and hypochromia on blood film"],
        correct: 1,
        reason: "Depletion of bone marrow hemosiderin tissue stores is the earliest lab stage of iron deficiency.",
        ref: "Anemia Integrated.pdf",
        diff: "H"
      },
      {
        q: "Which lab parameter is elevated in Iron Deficiency Anemia but NORMAL or decreased in Anemia of Chronic Disease?",
        opts: ["Serum Ferritin", "Mean Corpuscular Volume (MCV)", "Total Iron Binding Capacity (TIBC)", "Serum Hemoglobin"],
        correct: 2,
        reason: "TIBC is elevated in IDA but normal or decreased in Anemia of Chronic Disease.",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "A 14-month-old infant fed excessive whole cow's milk presents with pallor, glossitis, pica, and Hb 6.5 g/dL. What is the recommended oral therapeutic dose of elemental iron?",
        opts: ["3-6 mg/kg/day in 3 divided doses", "1 mg/kg/day single dose", "10-15 mg/kg/day single dose", "20 mg/kg/day in 2 divided doses"],
        correct: 0,
        reason: "Therapeutic elemental iron dosage for IDA is 3–6 mg/kg/day in 3 divided doses.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "Following initiation of oral Ferrous Sulfate for iron deficiency anemia, peripheral reticulocytosis characteristically peaks within:",
        opts: ["12 to 24 hours", "3 weeks", "72 to 96 hours", "2 months"],
        correct: 2,
        reason: "Reticulocyte response peaks 72 to 96 hours (3–7 days) after starting oral iron therapy.",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "After hemoglobin levels normalize under iron therapy for iron deficiency anemia, how long should oral iron be continued to replete body iron stores?",
        opts: ["1 week", "2 weeks", "8 weeks (1-3 months total)", "1 year"],
        correct: 2,
        reason: "Oral iron must be continued for 2–3 months (8 weeks) after Hb normalizes to replete stores.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "What is the acceptable normal threshold for Blood Lead Level (BLL) in young children?",
        opts: ["Up to 5 µg/dL", "Up to 20 µg/dL", "Up to 45 µg/dL", "Up to 70 µg/dL"],
        correct: 0,
        reason: "Normal Blood Lead Level (BLL) reference threshold in children is < 5 µg/dL.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old child with pica presents with microcytic anemia unresponsive to iron, hyperactivity, and constipation. Blood Lead Level (BLL) is measured at 55 µg/dL. What is the indicated treatment?",
        opts: ["Source evaluation and repeat BLL in 3 months", "Oral chelation with Dimercaptosuccinic acid (Succimer)", "Immediate hospitalization with 2-drug IV EDTA + Dimercaprol", "High-dose oral Vitamin C"],
        correct: 1,
        reason: "BLL between 45 and 69 µg/dL is treated with oral Succimer (DMSA) chelation therapy.",
        ref: "Anemia Integrated.pdf",
        diff: "H"
      },
      {
        q: "Which characteristic red cell feature on peripheral blood film points toward lead poisoning?",
        opts: ["Spherocytes", "Heinz bodies", "Hypersegmented neutrophils", "Basophilic stippling"],
        correct: 3,
        reason: "Lead inhibits pyrimidine 5'-nucleotidase, producing coarse basophilic stippling on blood film.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "In Diamond-Blackfan Anemia (Congenital Pure Red-Cell Aplasia), what is the definitive curative treatment?",
        opts: ["Oral Ferrous sulfate", "Splenectomy at birth", "High-dose Folic acid", "Stem cell transplant from a related histocompatible donor"],
        correct: 3,
        reason: "Hematopoietic stem cell transplantation is the only curative treatment for Diamond-Blackfan Anemia.",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "A 15-month-old infant strictly fed goat's milk presents with failure to thrive, glossitis, and macrocytic anemia (elevated MCV). What is the underlying cause?",
        opts: ["Folate deficiency", "Iron deficiency", "Vitamin B12 deficiency", "G6PD deficiency"],
        correct: 0,
        reason: "Unfortified goat's milk is notoriously deficient in folate, leading to macrocytic anemia.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "According to WHO criteria, anemia in a child aged 6 months to 5 years is defined as a Hemoglobin level less than:",
        opts: ["11.0 g/dL", "10.0 g/dL", "12.0 g/dL", "13.5 g/dL"],
        correct: 0,
        reason: "WHO defines childhood anemia (6–59 months) as Hb < 11.0 g/dL.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "Physiological anemia of the infant normally reaches its nadir hemoglobin level (9.5-11.0 g/dL) at what age in a term infant?",
        opts: ["2 to 3 weeks", "8 to 12 weeks (2-3 months)", "6 months", "12 months"],
        correct: 1,
        reason: "Physiological anemia reaches its lowest point (nadir) at 8–12 weeks of life in term infants.",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old child presents with extreme pallor, microcytic hypochromic anemia (MCV 58 fL), and elevated Red Cell Distribution Width (RDW > 15%). Serum ferritin is 6 ng/mL. What is the diagnosis?",
        opts: ["Beta-Thalassemia trait", "Sideroblastic anemia", "Iron Deficiency Anemia", "Anemia of chronic disease"],
        correct: 2,
        reason: "Low MCV + elevated RDW (>15%) + low serum ferritin (<12 ng/mL) confirms Iron Deficiency Anemia.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "Which diagnostic finding differentiates Beta-Thalassemia Trait from Iron Deficiency Anemia?",
        opts: ["Low MCV", "Elevated Total Iron Binding Capacity", "High Serum Ferritin", "Normal or low RDW with elevated RBC count and Hb A2 > 3.5%"],
        correct: 3,
        reason: "Beta-thalassemia trait presents with high RBC count, normal RDW, and characteristically elevated Hb A2 > 3.5%.",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "The maximum recommended daily limit of elemental iron for treating iron deficiency anemia in children should not exceed:",
        opts: ["150-200 mg/day", "50 mg/day", "15 mg/day", "500 mg/day"],
        correct: 2,
        reason: "Maximum therapeutic oral elemental iron dose should not exceed 150–200 mg/day total to prevent toxicity.",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "A 3-year-old child with severe lead poisoning (Blood Lead Level 75 µg/dL) and encephalopathy should be treated immediately with which parenteral chelation regimen?",
        opts: ["Oral Succimer alone", "Intravenous BAL (Dimercaprol) combined with Calcium Disodium EDTA", "Deferoxamine subcutaneous infusion", "High-dose oral Vitamin C"],
        correct: 1,
        reason: "Severe lead toxicity (≥70 µg/dL) with encephalopathy requires immediate dual IV BAL + Ca-EDTA.",
        ref: "Anemia Integrated.pdf",
        diff: "H"
      },
      {
        q: "Fanconi Anemia is an autosomal recessive constitutional aplastic anemia characterized by progressive bone marrow failure and physical anomalies including:",
        opts: ["Tibial bowing and chest keloids", "Polydactyly and macrocephaly", "Absent or hypoplastic thumbs and radial ray defects", "Absent fibula and blue sclera"],
        correct: 2,
        reason: "Fanconi anemia features thumb/radial ray hypoplasia, hyperpigmentation, and progressive pancytopenia.",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "Diamond-Blackfan Anemia differs from Fanconi Anemia in presenting during early infancy (first year) with:",
        opts: ["Severe neutrophilia", "Severe pancytopenia with hypercellular marrow", "Massive isolated thrombocytopenia", "Isolated pure red cell aplasia (reticulocytopenia) with normal platelets and WBC"],
        correct: 3,
        reason: "Diamond-Blackfan anemia causes selective erythroid aplasia (reticulocytopenia) with normal WBC and platelets.",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "Which neurological symptom is characteristic of Vitamin B12 deficiency but is ABSENT in isolated Folic Acid deficiency?",
        opts: ["Subacute combined degeneration of the spinal cord (paresthesias, ataxia)", "Severe irritability alone", "Angular stomatitis", "Glossitis"],
        correct: 0,
        reason: "Subacute combined degeneration of the spinal cord is unique to B12 deficiency (absent in folate deficiency).",
        ref: "Anemia Integrated.pdf",
        diff: "M"
      },
      {
        q: "On peripheral blood film examination, megaloblastic anemia due to B12 or folate deficiency shows:",
        opts: ["Microcytic target cells", "Oval macrocytes and hypersegmented neutrophils (≥5 lobes)", "Spherocytes and polychromasia", "Hypochromic pencil cells"],
        correct: 1,
        reason: "Megaloblastic anemia blood film shows macro-ovalocytes and hypersegmented neutrophils (≥5 lobes).",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "Which gastrointestinal finding is strongly associated with chronic iron deficiency in children?",
        opts: ["Duodenal duplication cyst", "Hypertrophic rugae of stomach", "Atrophic glossitis and koilonychia (spoon-shaped nails)", "Gallstones"],
        correct: 2,
        reason: "Chronic tissue iron depletion causes epithelial changes including glossitis, angular stomatitis, and koilonychia.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "All of the following inhibit non-heme iron absorption in the gut EXCEPT:",
        opts: ["Phytates in whole grains", "Tannins in tea", "Calcium in dairy products", "Ascorbic acid (Vitamin C)"],
        correct: 3,
        reason: "Ascorbic acid (Vitamin C) maintains iron in the ferrous (Fe2+) soluble state, enhancing absorption.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "All of the following are clinical manifestations of lead poisoning starting at blood lead levels ≥ 20 µg/dL EXCEPT:",
        opts: ["Massive hepatosplenomegaly with ascites", "Vomiting and constipation", "Behavioral changes and hyperactivity", "Anorexia and abdominal pain"],
        correct: 0,
        reason: "Lead poisoning causes CNS, GI, and renal toxicity, but does NOT cause hepatosplenomegaly/ascites.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "In a child presenting with acute pancytopenia (anemia, leukopenia, thrombocytopenia) and persistent fever resistant to antibiotics, bone marrow examination is essential to rule out:",
        opts: ["G6PD deficiency", "Iron deficiency anemia", "Aplastic anemia or Leukemia", "Nutritional rickets"],
        correct: 2,
        reason: "Unexplained pancytopenia with persistent fever mandates bone marrow biopsy to rule out Leukemia.",
        ref: "Anemia Integrated.pdf",
        diff: "E"
      },
      {
        q: "According to World Health Organization (WHO) standards, anemia in pediatric populations is defined as:",
        opts: ["Reduction of hematocrit below 45% regardless of age", "Reduction of hemoglobin concentration below the normal range for age and race", "Absolute red blood cell count less than 4.0×10^12/L", "Mean corpuscular volume (MCV) less than 80 fL in all age groups"],
        correct: 1,
        reason: "WHO defines anemia as reduction of hemoglobin concentration below the normal range for age and race.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following describes the normal polypeptide chain composition of Major Adult Hemoglobin (Hb A)?",
        opts: ["Two alpha and two gamma chains (α2/γ2)", "Two alpha and two delta chains (α2δ2)", "Two alpha and two beta chains (α2β2)", "Four beta chains (β4)"],
        correct: 2,
        reason: "HbA consists of two alpha and two beta chains (α2β2).",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "What is the expected normal mean hemoglobin level and mean corpuscular volume (MCV) in a healthy newborn?",
        opts: ["Hb 12 g/dL, MCV 70-74 fL", "Hb 13 g/dL, MCV 76-80 fL", "Hb 16 g/dL, MCV 100-110 fL", "Hb 10 g/dL, MCV 82-88 fL"],
        correct: 2,
        reason: "Normal newborn Hb is ~16 g/dL with MCV 100-110 fL.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 10-week-old healthy term infant is brought for a routine checkup. Complete blood count shows Hb 10 g/dL with normal RBC indices. The infant is asymptomatic and growing well. What is the most appropriate management?",
        opts: ["Start oral ferrous sulfate at 3 mg/kg/day", "Reassurance and regular follow-up with no treatment required", "Immediate packed RBC transfusion", "Initiate daily oral folic acid supplementation"],
        correct: 1,
        reason: "Physiological anemia of infancy is asymptomatic; reassurance and follow-up are appropriate.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "In premature infants, physiologic anemia of infancy differs from term infants by which of the following characteristics?",
        opts: ["Reaches a lower nadir of 7-9 g/dL earlier at 3-6 weeks of age", "Reaches a higher nadir of 11-13 g/dL later at 12-16 weeks of age", "Is characterized by elevated erythropoietin levels at birth", "Never requires blood transfusion regardless of clinical status"],
        correct: 0,
        reason: "Premature infants reach a lower nadir (7-9 g/dL) earlier (3-6 weeks) than term infants.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following is recognized as the most common cause of anemia during infancy?",
        opts: ["Glucose-6-phosphate dehydrogenase (G6PD) deficiency", "Beta-thalassemia major", "Iron deficiency anemia", "Congenital aplastic anemia"],
        correct: 2,
        reason: "Iron deficiency anemia is the most common cause of anemia during infancy.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Regarding daily iron metabolism in pediatric physiology, how much elemental iron is absorbed daily from a typical dietary intake of 10 mg?",
        opts: ["0.1 mg", "1 mg", "3 mg", "5 mg"],
        correct: 1,
        reason: "About 1 mg of elemental iron is absorbed daily from a typical 10 mg dietary intake.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "In the luminal border of the duodenal mucosa, iron is absorbed in which chemical form before being oxidized?",
        opts: ["Ferric form Fe3+", "Ferrous form Fe2+", "Bound to transferrin", "Combined with ferritin"],
        correct: 1,
        reason: "Iron is absorbed in the ferrous (Fe2+) form in the duodenum.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 14-month-old toddler presents with marked pallor and poor appetite. History reveals he consumes 1.5 liters of whole cow's milk daily and refuses solid foods. CBC shows Hb 6.5 g/dL, MCV 62 fL, RDW 19%. What is the primary mechanism of anemia in this child?",
        opts: ["Intravascular hemolysis secondary to cow's milk proteins", "Inadequate dietary iron intake combined with occult intestinal blood loss", "Impaired vitamin B12 absorption due to lack of intrinsic factor", "Bone marrow suppression by bovine serum albumin"],
        correct: 1,
        reason: "Excessive cow's milk causes inadequate dietary iron and occult intestinal blood loss.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "In the sequential progression of iron deficiency, which laboratory parameter decreases FIRST before anemia develops?",
        opts: ["Serum iron concentration", "Hemoglobin level", "Bone marrow hemosiderin (tissue iron stores)", "Mean corpuscular volume (MCV)"],
        correct: 2,
        reason: "Bone marrow hemosiderin (tissue iron stores) decreases first in iron deficiency.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "An 18-month-old girl with confirmed iron deficiency anemia is prescribed oral ferrous sulfate. What is the recommended dosage of elemental iron and frequency?",
        opts: ["1-2 mg/kg/day in a single daily dose", "3-6 mg/kg/day in 3 divided doses", "8-10 mg/kg/day in 2 divided doses", "12-15 mg/kg/day in 4 divided doses"],
        correct: 1,
        reason: "Therapeutic elemental iron for IDA is 3-6 mg/kg/day in 3 divided doses.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Following initiation of oral iron therapy in a child with iron deficiency anemia, how long should iron administration be continued after hemoglobin values return to normal?",
        opts: ["Stopped immediately once Hb normalizes", "Continued for 2 weeks", "Continued for 8 weeks", "Continued for 12 months"],
        correct: 2,
        reason: "Oral iron should be continued for 8 weeks after Hb normalizes to replete stores.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following are recognized clinical or laboratory features of Iron Deficiency Anemia EXCEPT:",
        opts: ["Atrophic glossitis and koilonychia (spooning of nails)", "Elevated Total Iron Binding Capacity (TIBC)", "Increased Free Erythrocyte Protoporphyrin (FEP)", "Markedly elevated reticulocyte count prior to treatment"],
        correct: 3,
        reason: "Reticulocyte count is low prior to treatment in iron deficiency anemia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "In pediatric toxicological screening, what is defined as the acceptable upper limit for Blood Lead Level (BLL)?",
        opts: ["Up to 5 µg/dL", "Up to 15 µg/dL", "Up to 25 µg/dL", "Up to 45 µg/dL"],
        correct: 0,
        reason: "Acceptable upper limit for BLL in children is < 5 µg/dL.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following blood smear findings is classically associated with lead poisoning?",
        opts: ["Heinz bodies", "Basophilic stippling of red blood cells", "Hypersegmented neutrophils with >5 lobes", "Howell-Jolly bodies"],
        correct: 1,
        reason: "Basophilic stippling is classically associated with lead poisoning.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old boy living in an old renovated house presents with hyperactivity, abdominal pain, constipation, and microcytic anemia unresponsive to oral iron. What is the gold standard confirmatory diagnostic test?",
        opts: ["Capillary fingerstick blood test", "Radiograph of long bones showing lead lines", "Confirmatory venous blood lead sample", "24-hour urinary coproporphyrin excretion"],
        correct: 2,
        reason: "Confirmatory venous blood lead sample is the gold standard for lead poisoning diagnosis.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old girl is found to have a venous Blood Lead Level (BLL) of 50 µg/dL during targeted screening. She is clinically stable. What is the recommended medical management?",
        opts: ["Repeat blood lead level in 3 months with environmental education only", "Outpatient oral chelation therapy with single-drug succimer (dimercaptosuccinic acid)", "Immediate hospitalization and dual chelation with IV EDTA plus dimercaprol", "Whole bowel irrigation and surgical consultation"],
        correct: 1,
        reason: "BLL 45-69 µg/dL is treated with outpatient oral succimer chelation.",
        ref: "anemia_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "Immediate hospitalization and combination parenteral chelation with IV EDTA plus dimercaprol is indicated for children with a Blood Lead Level (BLL) of:",
        opts: ["15-19 µg/dL", "20-44 µg/dL", "45-70 µg/dL", "≥70 µg/dL"],
        correct: 3,
        reason: "BLL ≥70 µg/dL requires immediate hospitalization and dual parenteral chelation.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Diamond-Blackfan anemia (Congenital Pure Red-Cell Aplasia) is characterized by which of the following pathognomonic mechanisms?",
        opts: ["Immune-mediated destruction of circulating mature erythrocyte membranes", "Deficiency or absence of red cell precursors in an otherwise normally cellular bone marrow", "Global stem cell failure leading to profound trilineage aplasia", "Defective hemoglobin chain synthesis with intracellular precipitation"],
        correct: 1,
        reason: "Diamond-Blackfan anemia shows deficiency/absence of red cell precursors in otherwise normal marrow.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 3-month-old infant presents with severe pallor and lethargy. Physical exam shows short stature, microcephaly, and triphalangeal thumbs. Bone marrow aspiration demonstrates marked erythroid hypoplasia with normal granulopoiesis and megakaryopoiesis. What is the most likely diagnosis?",
        opts: ["Fanconi anemia", "Diamond-Blackfan anemia", "Transient erythroblastopenia of childhood (TEC)", "Dyskeratosis congenita"],
        correct: 1,
        reason: "Triphalangeal thumbs + erythroid hypoplasia = Diamond-Blackfan anemia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which set of laboratory abnormalities is characteristically seen in Diamond-Blackfan anemia?",
        opts: ["Microcytosis, low serum iron, decreased HbF", "Macrocytosis, elevated HbF, elevated RBC adenosine deaminase (ADA)", "Normocytosis, elevated reticulocyte count, low serum iron", "Pancytopenia, low serum ferritin, decreased RBC ADA"],
        correct: 1,
        reason: "Diamond-Blackfan anemia shows macrocytosis, elevated HbF, and elevated RBC ADA.",
        ref: "anemia_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "When comparing physical anomalies between Diamond-Blackfan anemia and Fanconi anemia, which specific thumb malformation distinguishes Diamond-Blackfan anemia?",
        opts: ["Completely absent thumb", "Hypoplastic thumb with absent radius", "Triphalangeal thumb", "Broad, bifid thumb"],
        correct: 2,
        reason: "Triphalangeal thumb is characteristic of Diamond-Blackfan anemia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old previously healthy child develops pallor 3 weeks following a mild upper respiratory viral illness. CBC reveals Hb 5.2 g/dL, reticulocyte count 0.1%, normal WBC and platelet counts, normal MCV, and normal HbF. Bone marrow shows selective red cell hypoplasia. What is the expected prognosis?",
        opts: ["High risk of progression to acute myeloid leukemia within 5 years", "Spontaneous recovery generally within 1 to 2 months", "Lifelong dependency on packed red blood cell transfusions and iron chelation", "Requirement for urgent allogeneic stem cell transplantation"],
        correct: 1,
        reason: "Transient erythroblastopenia of childhood (TEC) spontaneously recovers within 1-2 months.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Transient Erythroblastopenia of Childhood (TEC) is differentiated from Diamond-Blackfan anemia by which of the following features?",
        opts: ["Onset typically between 6 months and 3 years with normal MCV and normal HbF", "Onset in early infancy (<6 months) with macrocytosis and elevated HbF", "Presence of congenital thumb anomalies and short stature", "Autosomal recessive inheritance pattern and chromosome fragility"],
        correct: 0,
        reason: "TEC onset is 6 months-3 years with normal MCV and HbF.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Pancytopenia is defined as a reduction of all three bone marrow cell lines. Which clinical sign typically appears FIRST in a child developing pancytopenia?",
        opts: ["Persistent high-grade fever", "Anemia and purpura", "Splenomegaly", "Jaundice and dark urine"],
        correct: 1,
        reason: "Anemia and purpura are the earliest signs of pancytopenia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "What is the most common cause of congenital (inherited) pancytopenia in children?",
        opts: ["Dyskeratosis congenita", "Fanconi anemia", "Diamond-Blackfan anemia", "Severe combined immunodeficiency"],
        correct: 1,
        reason: "Fanconi anemia is the most common congenital pancytopenia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "What is the most common cause of acquired pancytopenia in pediatric clinical practice?",
        opts: ["Secondary to Chloramphenicol therapy", "Post-hepatitis viral aplasia", "Idiopathic acquired aplastic anemia (accounting for 70% of cases)", "Radiation exposure"],
        correct: 2,
        reason: "Idiopathic acquired aplastic anemia accounts for 70% of acquired pancytopenia cases.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A newborn infant born at 39 weeks gestation has a venous blood sample drawn at 12 hours of life. Which hemoglobin level represents the normal mean value for a newborn?",
        opts: ["11 g/dL", "12 g/dL", "13 g/dL", "16 g/dL"],
        correct: 3,
        reason: "Normal mean newborn hemoglobin is ~16 g/dL.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 6-year-old child with skin hyperpigmentation, cafe-au-lait spots, short stature, and absent thumbs is found to have progressive pancytopenia. What is the definitive diagnostic test to confirm Fanconi anemia?",
        opts: ["Hemoglobin electrophoresis", "Cytogenetic studies on bone marrow/blood showing chromosome breaks", "Serum adenosine deaminase level", "Osmotic fragility test"],
        correct: 1,
        reason: "Fanconi anemia is confirmed by cytogenetic studies showing chromosome breaks.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following physical malformations are characteristic features of Fanconi anemia EXCEPT:",
        opts: ["Hyperpigmentation and cafe-au-lait spots", "Absent or hypoplastic thumbs and absent radius", "Microcephaly and renal malformations", "Triphalangeal thumbs with hyperconvex nails"],
        correct: 3,
        reason: "Triphalangeal thumbs with hyperconvex nails are features of Diamond-Blackfan anemia, not Fanconi.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "In children with Anemia of Chronic Disease or Renal Disease, what are the typical laboratory findings regarding hemoglobin and iron parameters?",
        opts: ["Hb 6-9 g/dL, low serum iron WITHOUT an increase in TIBC, ferritin normal or slightly increased", "Hb 3-5 g/dL, low serum iron with markedly increased TIBC, ferritin severely reduced", "Hb 10-12 g/dL, high serum iron with saturated TIBC, ferritin zero", "Hb 6-9 g/dL, elevated serum iron with high TIBC, ferritin decreased"],
        correct: 0,
        reason: "Anemia of chronic disease: low serum iron without increased TIBC, normal/high ferritin.",
        ref: "anemia_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "Megaloblastic anemias in children are fundamentally caused by impaired synthesis of which cellular component?",
        opts: ["Heme moiety", "DNA synthesis", "Erythrocyte membrane spectrin", "Ribosomal RNA"],
        correct: 1,
        reason: "Megaloblastic anemias are caused by impaired DNA synthesis.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Which peripheral blood smear finding is pathognomonic for megaloblastic anemia caused by folate or vitamin B12 deficiency?",
        opts: ["Target cells and basophilic stippling", "Hypersegmented neutrophils (>5 lobes)", "Spherocytes without central pallor", "Schistocytes and helmet cells"],
        correct: 1,
        reason: "Hypersegmented neutrophils (>5 lobes) are pathognomonic for megaloblastic anemia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 5-month-old infant exclusively fed boiled goat's milk presents with irritability, failure to thrive, chronic diarrhea, and severe pallor. CBC reveals MCV 108 fL, low serum folate, and hypersegmented neutrophils. What is the primary diagnosis?",
        opts: ["Iron deficiency anemia", "Folic acid deficiency anemia", "Vitamin B12 deficiency anemia", "Hereditary spherocytosis"],
        correct: 1,
        reason: "Goat's milk is folate-deficient, causing folic acid deficiency anemia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "At what age does dietary folic acid deficiency anemia typically reach its peak clinical presentation in infants?",
        opts: ["At birth (0-1 month)", "4-7 months of age", "12-18 months of age", "4-6 years of age"],
        correct: 1,
        reason: "Folic acid deficiency anemia peaks at 4-7 months of age.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A strict vegan mother who excludes all animal products from her diet exclusively breastfeeds her 5-month-old infant. The infant presents with lethargy, glossitis, developmental regression, hypotonia, and macrocytic anemia. What is the underlying etiology?",
        opts: ["Inadequate dietary folic acid intake", "Vitamin B12 (cobalamin) deficiency due to absence of animal sources in maternal diet", "Congenital intrinsic factor deficiency", "Zinc deficiency malabsorption"],
        correct: 1,
        reason: "Maternal vegan diet causes Vitamin B12 deficiency in exclusively breastfed infants.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 10-month-old boy with iron deficiency anemia achieves a normal hemoglobin level of 12.5 g/dL after 4 weeks of oral ferrous sulfate treatment. How many additional weeks should oral iron be continued to replete marrow iron stores?",
        opts: ["Stop immediately", "Continue for 2 weeks", "Continue for 8 weeks", "Continue for 24 weeks"],
        correct: 2,
        reason: "Continue iron for 8 weeks after Hb normalizes to replete stores.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following clinical features is uniquely seen in Vitamin B12 deficiency anemia but NOT in pure Folic Acid deficiency anemia?",
        opts: ["Severe pallor and tachycardia", "Atrophic glossitis", "Neurologic symptoms (sensory deficits, hypotonia, seizures)", "Elevated serum lactate dehydrogenase (LDH)"],
        correct: 2,
        reason: "Neurologic symptoms are unique to B12 deficiency.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What is the primary site of dietary iron absorption in the pediatric gastrointestinal tract?",
        opts: ["Stomach body and antrum", "Duodenal mucosa", "Terminal ileum", "Ascending colon"],
        correct: 1,
        reason: "Iron is absorbed in the duodenal mucosa.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Which morphological category of anemia includes Sickle Cell Anemia, Hereditary Spherocytosis, and G6PD deficiency according to the lecture classification?",
        opts: ["Microcytic Hypochromic", "Normocytic Normochromic with High Reticulocyte Count", "Normocytic Normochromic with Low Reticulocyte Count", "Macrocytic Normochromic"],
        correct: 1,
        reason: "Hemolytic anemias are normocytic normochromic with high reticulocyte count.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following parasitic infestations is a well-known chronic cause of microcytic hypochromic anemia secondary to intestinal blood loss?",
        opts: ["Ascaris lumbricoides", "Ankylostoma duodenale (Hookworm)", "Enterobius vermicularis", "Giardia lamblia"],
        correct: 1,
        reason: "Hookworm causes chronic intestinal blood loss leading to microcytic anemia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 4-year-old child presents with lethargy, severe abdominal colic, and convulsions. Emergency blood work reveals a venous lead level of 78 µg/dL. What is the mandatory immediate management protocol?",
        opts: ["Outpatient administration of oral succimer and repeat BLL in 1 month", "Immediate hospitalization plus combination chelation with IV EDTA and dimercaprol", "Oral iron supplementation and follow-up in 2 weeks", "Environmental education and re-testing BLL after 3 months"],
        correct: 1,
        reason: "BLL ≥70 µg/dL requires immediate hospitalization with dual chelation.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 15-month-old poorly weaning infant who drinks only whole cow's milk presents with pallor, tachycardia (HR 140 bpm), atrophic glossitis, and a palpable spleen tip. CBC shows Hb 7 g/dL, MCV 60 fL. What is the single best initial diagnostic panel to order?",
        opts: ["Hemoglobin electrophoresis", "G6PD enzyme level assay", "Serum iron, transferrin saturation, and ferritin level", "Bone marrow aspiration and biopsy"],
        correct: 2,
        reason: "This is classic IDA; first investigation is serum iron, transferrin saturation, and ferritin.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following are recognized causes of macrocytic normochromic anemia EXCEPT:",
        opts: ["Vitamin B12 deficiency", "Folic acid deficiency", "Thiamine deficiency", "Lead poisoning"],
        correct: 3,
        reason: "Lead poisoning causes microcytic hypochromic anemia, not macrocytic.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 4-month-old infant presents with severe progressive anemia, pale skin, and triphalangeal thumbs. CBC demonstrates macrocytic anemia and reticulocytopenia with normal WBC and platelet counts. Bone marrow shows isolated erythroid hypoplasia. Which condition matches this presentation?",
        opts: ["Fanconi anemia", "Diamond-Blackfan anemia", "Transient erythroblastopenia of childhood", "Dyskeratosis congenita"],
        correct: 1,
        reason: "Triphalangeal thumbs + macrocytic anemia + erythroid hypoplasia = Diamond-Blackfan anemia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Regarding human milk versus cow's milk iron bio-availability, iron is absorbed from human milk at what fold increased rate compared to cow's milk?",
        opts: ["Equal absorption rate", "2 to 3 times more absorbed from human milk", "5 to 10 times more absorbed from cow's milk", "Human milk iron is not absorbed at all"],
        correct: 1,
        reason: "Iron is absorbed 2-3 times more from human milk than from cow's milk.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 5-year-old child undergoing evaluation for severe anemia has a bone marrow biopsy showing normal overall cellularity but significant erythroid hyperplasia. Serum ferritin is severely low. Which condition is consistent with bone marrow erythroid hyperplasia?",
        opts: ["Diamond-Blackfan anemia", "Iron deficiency anemia", "Aplastic anemia", "Transient erythroblastopenia of childhood"],
        correct: 1,
        reason: "Iron deficiency anemia shows erythroid hyperplasia with low ferritin.",
        ref: "anemia_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "Which virus is specifically cited as an acquired cause of Pure Red Cell Aplasia (PRCA)?",
        opts: ["Parvovirus B-19", "Hepatitis C virus", "Human Immunodeficiency Virus", "Rotavirus"],
        correct: 0,
        reason: "Parvovirus B-19 causes acquired pure red cell aplasia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "In patients with lead poisoning, at what minimum blood lead level (BLL) do gastrointestinal symptoms (anorexia, abdominal pain, vomiting, constipation) typically begin to manifest?",
        opts: ["5 µg/dL", "10 µg/dL", "20 µg/dL", "70 µg/dL"],
        correct: 2,
        reason: "GI symptoms begin at BLL ≥20 µg/dL.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which definitive curative treatment option offers a permanent cure for severe Fanconi anemia or Diamond-Blackfan anemia?",
        opts: ["Long-term oral corticosteroid administration", "Splenectomy", "Allogeneic stem cell transplantation (bone marrow transplant)", "High-dose IV immunoglobulin (IVIG)"],
        correct: 2,
        reason: "Allogeneic stem cell transplantation is curative for Fanconi and Diamond-Blackfan anemia.",
        ref: "anemia_midterm_exam.pdf",
        diff: "M"
      }
    ]
  },

  // ============================================================
  // TOPIC 6 — HEMOLYTIC ANEMIA
  // ============================================================
  {
    id: "hemolytic_anemia",
    title: "Hemolytic Anemia",
    source: "Hemolytic Anemia 4th year (2).pdf + hemolytic-anemia-pediatrics-exam.pdf",
    questions: [
      {
        q: "What is the normal lifespan of human red blood cells in circulation?",
        opts: ["100 to 120 days", "30 to 45 days", "10 to 20 days", "200 to 240 days"],
        correct: 0,
        reason: "Normal lifespan of mature circulating human erythrocytes is 120 days.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "E"
      },
      {
        q: "Hereditary Spherocytosis is an autosomal dominant intrinsic red cell membrane defect caused primarily by a deficiency in which membrane protein?",
        opts: ["Pyruvate kinase", "Spectrin", "G6PD enzyme", "Beta-globin chain"],
        correct: 1,
        reason: "Deficiency in membrane skeletal proteins (Spectrin/Ankyrin) causes Hereditary Spherocytosis.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "E"
      },
      {
        q: "A 6-year-old child with Hereditary Spherocytosis presents with sudden profound anemia, pallor, fatigue, and reticulocytopenia (0.1%). What infection is the classic cause of this acute aplastic crisis?",
        opts: ["Epstein-Barr Virus", "Hepatitis A Virus", "Rotavirus", "Parvovirus B19"],
        correct: 3,
        reason: "Parvovirus B19 infects erythroid precursors, triggering acute aplastic crisis in HS.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "Which confirmatory laboratory evaluation combines the eosin-5-maleimide (EMA) binding test and acidified glycerol lysis test (AGLT) to identify Hereditary Spherocytosis?",
        opts: ["Osmotic fragility test", "Direct Coomb's test", "Hemoglobin electrophoresis", "G6PD enzyme assay"],
        correct: 0,
        reason: "Increased osmotic fragility (and EMA binding) confirms Hereditary Spherocytosis.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "Which glycolytic enzyme deficiency causes hereditary non-spherocytic hemolytic anemia, reticulocytosis, and severe neonatal jaundice requiring exchange transfusion?",
        opts: ["G6PD deficiency", "Pyruvate Kinase (PK) deficiency", "1-Alpha Hydroxylase deficiency", "Lactate Dehydrogenase deficiency"],
        correct: 1,
        reason: "Pyruvate Kinase (PK) deficiency is the primary glycolytic defect causing non-spherocytic hemolysis.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "A 4-year-old Mediterranean boy presents with hemoglobinuria and dark urine 36 hours after eating fava beans. Which finding on blood film is diagnostic during this acute hemolytic episode?",
        opts: ["Spherocytes", "Basophilic stippling", "Howell-Jolly bodies", "Heinz bodies"],
        correct: 3,
        reason: "Oxidized denatured hemoglobin precipitates as Heinz bodies during acute G6PD hemolysis.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "E"
      },
      {
        q: "In a patient with suspected G6PD deficiency, direct measurement of G6PD enzyme activity should be performed at what timeframe relative to an acute hemolytic attack?",
        opts: ["During the first 24 hours", "About 3 weeks after the acute attack", "Immediately after blood transfusion", "During maximum hemoglobinuria"],
        correct: 1,
        reason: "G6PD enzyme levels must be measured 2–3 weeks post-crisis to avoid false negatives in young RBCs.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "H"
      },
      {
        q: "Sickle Cell Anemia is caused by a point mutation in the beta-globin gene substituting valine for glutamic acid. In Sickle Cell Disease, what is the peak age of incidence for acute splenic sequestration crisis?",
        opts: ["Under 2 years of age", "6 to 9 years of age", "12 to 15 years of age", "Over 18 years of age"],
        correct: 0,
        reason: "Acute splenic sequestration occurs before splenic autoinfarction, peaking under 2 years of age.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "H"
      },
      {
        q: "What is the peak age range for ischemic stroke involving the middle cerebral artery in children with Sickle Cell Disease?",
        opts: ["Under 1 year", "2 to 3 years", "15 to 18 years", "6 to 9 years"],
        correct: 3,
        reason: "Overt stroke in Sickle Cell Disease peaks between 6 and 9 years of age.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "H"
      },
      {
        q: "In Beta-Thalassemia Major, hemoglobin electrophoresis in the affected child shows markedly elevated HbF (10%-90%). Parents of the affected child characteristically show:",
        opts: ["Hb A2 < 1%", "Absence of Hb A2", "Increased Hb A2 > 3.5% (Normal ~3%)", "Hb A2 > 50%"],
        correct: 2,
        reason: "Beta-thalassemia trait in parents is characterized by elevated Hb A2 (> 3.5%).",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "To manage secondary iron overload in Beta-Thalassemia Major, iron chelation therapy is administered using Deferoxamine via:",
        opts: ["Oral tablets with meals", "Intramuscular single bolus", "Subcutaneous infusion by pump or IV", "Inhaled nebulizer"],
        correct: 2,
        reason: "Deferoxamine is administered as a continuous subcutaneous or IV infusion by pump.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "In a child with extravascular hemolysis (e.g., Hereditary Spherocytosis), red blood cell destruction occurs predominantly in which organ?",
        opts: ["Spleen cord macrophages", "Liver sinusoids", "Bone marrow trabeculae", "Peripheral capillary bed"],
        correct: 0,
        reason: "Extravascular hemolysis in spherocytosis occurs as abnormal red cells pass through splenic cords.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "E"
      },
      {
        q: "Which peripheral blood film finding is pathognomonic for Hereditary Spherocytosis?",
        opts: ["Sickle-shaped erythrocytes", "Small round hyperchromic erythrocytes lacking central pallor", "Target cells with basophilic stippling", "Fragmented schistocytes"],
        correct: 1,
        reason: "Spherocytes are small, spherical, dense RBCs without central pallor.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "E"
      },
      {
        q: "Splenectomy in patients with severe Hereditary Spherocytosis effectively corrects anemia and jaundice. At what minimum age should splenectomy be delayed if possible?",
        opts: ["1 year", "3 years", "5 years", "12 years"],
        correct: 2,
        reason: "Splenectomy is postponed until at least 5 years of age to minimize post-splenectomy sepsis risk.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency is inherited in what pattern?",
        opts: ["Autosomal dominant", "Autosomal recessive", "Mitochondrial inheritance", "X-linked recessive"],
        correct: 3,
        reason: "G6PD deficiency is an X-linked recessive enzymatic disorder affecting males predominantly.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "E"
      },
      {
        q: "All of the following oxidative triggers can precipitate acute intravascular hemolysis in a G6PD-deficient patient EXCEPT:",
        opts: ["Administration of Vitamin K1 or Acetaminophen in therapeutic doses", "Ingestion of Primaquine or Sulfa drugs", "Infection (e.g., viral hepatitis or Salmonella)", "Ingestion of fava beans"],
        correct: 0,
        reason: "Therapeutic doses of Vitamin K1 or Acetaminophen do not trigger hemolysis in G6PD deficiency.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "A 3-year-old child with Sickle Cell Anemia presents with severe bone pain in the hands and feet with dorsal swelling. What is this initial vaso-occlusive manifestation called?",
        opts: ["Acute Chest Syndrome", "Dactylitis (Hand-foot syndrome)", "Aplastic crisis", "Osteomyelitis"],
        correct: 1,
        reason: "Dactylitis (painful swelling of digits) is the hallmark initial vaso-occlusive manifestation in Sickle Cell infants.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "E"
      },
      {
        q: "Which pharmaceutical agent is approved to increase Hemoglobin F (HbF) production and reduce vaso-occlusive pain crises in Sickle Cell Disease?",
        opts: ["Deferasirox", "Cyclophosphamide", "Hydroxyurea", "Penicillin V"],
        correct: 2,
        reason: "Hydroxyurea induces HbF synthesis, reducing red cell sickling and frequency of pain crises.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "E"
      },
      {
        q: "In Beta-Thalassemia Major, uncoupled alpha-globin chains precipitate inside erythroid precursors causing:",
        opts: ["Acute anaphylaxis", "Intravascular clotting", "Renal tubular necrosis", "Ineffective erythropoiesis and intramedullary destruction"],
        correct: 3,
        reason: "Unpaired excess alpha chains precipitate inside erythroblasts, causing ineffective erythropoiesis.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "A 9-month-old infant with untreated Beta-Thalassemia Major presents with frontal bossing, prominent maxilla, cheekbone enlargement, and 'hair-on-end' skull X-ray appearance. These skeletal deformities result from:",
        opts: ["Massive compensatory extramedullary and intramedullary bone marrow hyperplasia", "Subperiosteal bleeding", "Deposition of iron in facial bones", "Rickets secondary to vitamin D malabsorption"],
        correct: 0,
        reason: "Massive erythroid hyperplasia expands bone marrow space, causing facial deformities and 'hair-on-end' skull.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "What is the primary cause of mortality in young adults with Beta-Thalassemia Major undergoing chronic blood transfusion therapy without adequate chelation?",
        opts: ["Hepatic cirrhosis alone", "Transfusional iron overload cardiomyopathy (heart failure / arrhythmias)", "Overwhelming pneumococcal sepsis", "Renal failure"],
        correct: 1,
        reason: "Cardiac failure and dysrhythmias secondary to myocardial iron deposition are the leading causes of death.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "Autoimmune Hemolytic Anemia (AIHA) of the 'warm' antibody type is primarily mediated by which immunoglobulin class?",
        opts: ["IgA", "IgM (reacting at 4°C)", "IgG (reacting at 37°C)", "IgE"],
        correct: 2,
        reason: "Warm AIHA is caused by autoantibodies (chiefly IgG) binding to RBCs at body temperature (37°C).",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      },
      {
        q: "A 7-month-old infant is brought to the pediatric clinic with symmetric, painful swelling of both hands and feet. The mother reports that the child has been irritable for two days. Blood tests show mild normocytic anemia and reticulocytosis. What is the most likely initial presentation in this child?",
        opts: ["Hand-foot syndrome (acute distal dactylitis)", "Acute chest syndrome", "Acute splenic sequestration", "Ischemic stroke"],
        correct: 0,
        reason: "Acute distal dactylitis (hand-foot syndrome) is usually the first clinical presentation of sickle cell anemia, beginning around 5-7 months of age.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Under normal physiological conditions, what percentage of red blood cells (RBCs) is removed from the circulation each day and replaced by new cells from the bone marrow?",
        opts: ["0.1%", "1%", "5%", "10%"],
        correct: 1,
        reason: "Normally, about 1% of RBCs are removed from the circulation each day and replaced from the bone marrow.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following are known precipitating factors for acute hemolytic attacks in patients with Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency EXCEPT:",
        opts: ["Ingestion of fava beans", "Sulfonamide administration", "Parvovirus B19 infection", "Severe systemic illness"],
        correct: 2,
        reason: "Parvovirus B19 triggers aplastic crisis in hereditary spherocytosis and sickle cell disease, whereas G6PD acute hemolysis is precipitated by oxidants and severe illness.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Hereditary spherocytosis is primarily caused by an inherited structural deficiency of which red blood cell membrane protein?",
        opts: ["Ankyrin", "Band 3 protein", "Glycophorin A", "Spectrin"],
        correct: 3,
        reason: "Hereditary spherocytosis is caused by spectrin deficiency in the red cell membrane.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "Sickle cell anemia results from a single base-pair point mutation in the β-globin gene that causes substitution of which amino acid?",
        opts: ["Valine for glutamic acid at codon 6", "Glutamic acid for valine at codon 6", "Lysine for glutamic acid at codon 6", "Alanine for glycine at codon 6"],
        correct: 0,
        reason: "Sickle cell anemia is caused by substitution of valine for glutamic acid at the 6th codon of the β-globin chain.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "A 4-year-old boy presents with sudden onset of dark, cola-colored urine, pallor, and mild jaundice 36 hours after receiving a sulfa antibiotic for a urinary tract infection. A peripheral blood film reveals Heinz bodies. What is the most likely diagnosis?",
        opts: ["Hereditary spherocytosis", "Glucose-6-phosphate dehydrogenase (G6PD) deficiency", "Pyruvate kinase deficiency", "Beta thalassemia major"],
        correct: 1,
        reason: "G6PD deficiency manifests within 24-48 hours of oxidant ingestion with acute intravascular hemolysis, hemoglobinuria, jaundice, and Heinz bodies.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "An 8-year-old child with known sickle cell disease (HbSS) presents with sudden right-sided hemiparesis and facial drooping. Brain imaging confirms an ischemic cerebral infarction of the middle cerebral artery. What is the most immediate therapeutic step to reduce HbS percentage?",
        opts: ["High-dose oral hydroxyurea therapy", "Intravenous immunoglobulin (IVIG) administration", "RBC transfusion or partial automated exchange transfusion", "Urgent laparoscopic splenectomy"],
        correct: 2,
        reason: "Immediate treatment for acute ischemic stroke in sickle cell disease is rapid reduction of percent HbS using RBC transfusion or partial automated exchange transfusion.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "H"
      },
      {
        q: "In a healthy child over 1 year of age, what is the normal physiological proportion of adult hemoglobin (HbA)?",
        opts: ["≤3.5%", "≥50%", "≥75%", "≥95%"],
        correct: 3,
        reason: "The normal hemoglobin pattern after infancy consists of HbA ≥95%, HbA2 ≤3.5%, and HbF <2.5%.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "Hemoglobin electrophoresis of an infant with Beta Thalassemia Major (B0 genotype) characteristically demonstrates:",
        opts: ["Complete absence of HbA with markedly elevated HbF (10-90%)", "Predominantly HbA with low HbF", "Presence of HbS and HbC", "Hb Barts >25%"],
        correct: 0,
        reason: "In B0 beta thalassemia major, there is no beta chain synthesis, so no HbA is produced; Hb electrophoresis shows only HbF (10-90%) and HbA2.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A stillborn infant is delivered at 34 weeks of gestation with severe generalized edema (hydrops fetalis) and profound fetal anemia. Hemoglobin electrophoresis reveals predominantly Hb Barts. Molecular testing confirms deletion of all 4 alpha-globin genes. What is this condition?",
        opts: ["Alpha thalassemia trait", "Alpha-thalassemia major", "Hb H disease", "Beta thalassemia major"],
        correct: 1,
        reason: "Alpha-thalassemia major involves deletion of all 4 alpha-globin genes, causing severe fetal anemia, hydrops fetalis, and predominantly Hb Barts.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "H"
      },
      {
        q: "Which red blood cell index is characteristically elevated in patients with Hereditary Spherocytosis despite a normal Mean Cell Volume (MCV)?",
        opts: ["Mean cell volume (MCV)", "Red cell distribution width (RDW)", "Mean cell hemoglobin concentration (MCHC)", "Total iron binding capacity (TIBC)"],
        correct: 2,
        reason: "In hereditary spherocytosis, laboratory findings show normal MCV with increased mean cell Hb concentration (MCHC).",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "At what age should routine prophylactic oral penicillin be initiated for an infant diagnosed with sickle cell disease to prevent invasive pneumococcal infections?",
        opts: ["At birth", "At 6 months of age", "At 2 years of age", "At 2 months of age"],
        correct: 3,
        reason: "Penicillin prophylaxis is recommended starting at 2 months of age until age 5 years.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following statements is FALSE regarding Sickle Cell Trait (Hb AS)?",
        opts: ["Splenic auto-infarction occurs routinely in early childhood", "Red blood cell lifespan and CBC are completely normal", "Patients have no limitation of daily physical activities", "Known complications include hematuria and renal papillary necrosis"],
        correct: 0,
        reason: "Splenic auto-infarction occurs in Sickle Cell Disease (Hb SS), whereas trait patients experience splenic infarction only under extreme hypoxia.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A 3-week-old neonate presents with persistent indirect hyperbilirubinemia, mild pallor, and splenomegaly. Osmotic fragility and G6PD screening tests are normal. Direct enzyme assay reveals reduced glycolytic pathway activity. What enzyme is deficient?",
        opts: ["Glucose-6-phosphate dehydrogenase", "Pyruvate kinase", "Spectrin", "Glutathione reductase"],
        correct: 1,
        reason: "Pyruvate kinase deficiency is a glycolytic enzyme defect presenting with pallor, jaundice, splenomegaly, and confirmed by reduced pyruvate kinase (PK) activity assay.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Which combination of diagnostic laboratory tests enables the identification of virtually all patients with hereditary spherocytosis?",
        opts: ["Direct Coombs test and hemoglobin electrophoresis", "Sickling test and Heinz body stain", "Eosin-5-maleimide (EMA) binding test and acidified glycerol lysis test (AGLT)", "Serum ferritin and total iron binding capacity"],
        correct: 2,
        reason: "The combination of EMA binding test and AGLT enables identification of all patients with hereditary spherocytosis.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following clinical features are characteristic of Beta Thalassemia Major EXCEPT:",
        opts: ["Expansion of facial and skull medullary space leading to hair-on-end' X-ray appearance", "Hepatosplenomegaly from extramedullary hematopoiesis", "Iron overload with increased serum ferritin and transferrin saturation", "Symptomatic presentation usually beginning in the first 2 weeks of life"],
        correct: 3,
        reason: "Children with Beta Thalassemia Major usually become symptomatic during the SECOND 6 months of life (as HbF wanes), not in the first 2 weeks.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "H"
      },
      {
        q: "What is the recommended age for performing elective splenectomy in a child with severe Hereditary Spherocytosis?",
        opts: ["After 5-6 years of age", "Before 1 year of age", "At 2-3 years of age", "During adolescence (after 15 years)"],
        correct: 0,
        reason: "Splenectomy for hereditary spherocytosis is indicated after 5-6 years of age to minimize the risk of post-splenectomy sepsis.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "An 18-month-old child with known sickle cell disease is brought to the emergency department with sudden lethargy and extreme pallor. On physical examination, the spleen is massively enlarged and firm, measuring 6 cm below the costal margin. CBC shows Hb 3.5 g/dL and severe thrombocytopenia. What crisis is occurring?",
        opts: ["Vaso-occlusive painful crisis", "Acute splenic sequestration crisis", "Aplastic crisis", "Hyperhemolytic crisis"],
        correct: 1,
        reason: "Acute splenic sequestration is characterized by rapid splenic enlargement, sudden drop in Hb, and thrombocytopenia.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "To obtain an accurate direct measurement of G6PD enzyme activity following an acute hemolytic attack, when should the assay ideally be performed?",
        opts: ["Immediately during the acute attack", "24 to 48 hours after the onset of dark urine", "About 3 weeks after the acute attack", "6 months after the attack"],
        correct: 2,
        reason: "Direct measurement of G6PD activity is better done about 3 weeks after an acute attack.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A 3-year-old child presents with mild microcytic hypochromic anemia during a routine checkup. A 3-month trial of oral iron supplementation fails to improve the hemoglobin level. What is the most appropriate next diagnostic step?",
        opts: ["Bone marrow aspiration", "Osmotic fragility test", "Direct Coombs test", "Hemoglobin electrophoresis to check HbA2 level"],
        correct: 3,
        reason: "Thalassemia minor is suspected when a child with microcytic hypochromic anemia fails to respond to iron therapy; hemoglobin electrophoresis confirms it by demonstrating increased HbA2 (>3.5%).",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the principal mechanism of action of Hydroxyurea, the FDA-approved medication for Sickle Cell Disease?",
        opts: ["Increasing the expression of fetal hemoglobin (HbF)", "Chelating excess iron in the liver", "Replacing defective spectrin in the RBC membrane", "Inhibiting Parvovirus B19 replication"],
        correct: 0,
        reason: "Hydroxyurea increases expression of fetal hemoglobin (HbF).",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "By what age do ALL children with Sickle Cell Anemia (HbSS) develop functional asplenia?",
        opts: ["6 months", "5 years", "2 years", "10 years"],
        correct: 2,
        reason: "All children with Sickle Cell Anemia develop functional asplenia by 2 years of age.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A 6-year-old girl with sickle cell disease is admitted with fever, tachypnea, chest pain, and a new pulmonary infiltrate on chest X-ray. According to recent pediatric statistics, what are the most common infectious pathogens responsible for acute chest syndrome in children?",
        opts: ["Streptococcus pneumoniae and Haemophilus influenzae", "Staphylococcus aureus and Pseudomonas aeruginosa", "Chlamydia pneumoniae and Mycoplasma pneumoniae", "Salmonella enteritidis and Escherichia coli"],
        correct: 2,
        reason: "Chlamydia pneumoniae and Mycoplasma pneumoniae are the most common infectious pathogens in acute chest syndrome.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "H"
      },
      {
        q: "Which of the following hemolytic anemias is classified as an INTRACORPUSCULAR (intrinsic) enzymatic defect?",
        opts: ["Hereditary spherocytosis", "Sickle cell anemia", "Autoimmune hemolytic anemia", "Pyruvate kinase deficiency"],
        correct: 3,
        reason: "Pyruvate kinase deficiency is an intracorpuscular (intrinsic) enzymatic defect.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following is FALSE regarding Hb H disease (alpha-thalassemia with 3 gene deletions)?",
        opts: ["Patients typically require lifelong monthly blood transfusions and splenectomy", "Hb Barts is >25% in the newborn period", "Beta-tetramers (Hb H) interact with the RBC membrane to produce Heinz bodies", "Blood film shows microcytosis, hypochromia, target cells, and mild splenomegaly"],
        correct: 0,
        reason: "Hb H disease patients typically do NOT require lifelong monthly blood transfusions and splenectomy; it is a milder form.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "H"
      },
      {
        q: "Infection with Parvovirus B19 in a patient with Sickle Cell Disease or Hereditary Spherocytosis characteristically triggers which type of acute crisis?",
        opts: ["Vaso-occlusive painful crisis", "Aplastic crisis with reticulocytopenia", "Hyperhemolytic crisis with marked reticulocytosis", "Acute chest syndrome"],
        correct: 1,
        reason: "Parvovirus B19 triggers aplastic crisis with reticulocytopenia.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A male newborn develops significant hyperbilirubinemia on his second day of life requiring phototherapy. Blood typing shows no ABO or Rh incompatibility. Family history reveals a maternal uncle who experienced severe dark urine after eating fava beans. What is the most likely diagnosis?",
        opts: ["Biliary atresia", "Alpha thalassemia major", "Glucose-6-phosphate dehydrogenase (G6PD) deficiency", "Sickle cell trait"],
        correct: 2,
        reason: "Family history of favism in a maternal uncle suggests G6PD deficiency.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "The genetic point mutation underlying sickle cell hemoglobin (HbS) involves a single base pair change of thymine for adenine at which codon of the beta-globin gene?",
        opts: ["3rd codon", "12th codon", "26th codon", "6th codon"],
        correct: 3,
        reason: "The point mutation in sickle cell disease is at the 6th codon of the beta-globin gene.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "A 7-year-old child with Beta Thalassemia Major on chronic blood transfusion therapy exhibits serum ferritin levels exceeding 2,000 ng/mL. Which iron-chelating agent is routinely administered subcutaneously via pump or intravenously?",
        opts: ["Deferoxamine", "Hydroxyurea", "Penicillin V", "Folic acid"],
        correct: 0,
        reason: "Deferoxamine is routinely administered subcutaneously via pump or intravenously.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "The presence of Howell-Jolly bodies on a peripheral blood film of a child with sickle cell anemia indicates:",
        opts: ["Active G6PD hemolysis", "Lack of splenic function (functional asplenia)", "Pyruvate kinase deficiency", "Alpha thalassemia trait"],
        correct: 1,
        reason: "Howell-Jolly bodies indicate lack of splenic function (functional asplenia).",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Laboratory evaluation of the parents of a 1-year-old child diagnosed with Cooley's anemia (Beta Thalassemia Major) is performed for genetic counseling. What characteristic finding is expected on hemoglobin electrophoresis of both parents?",
        opts: ["Presence of HbS (>50%)", "Hb Barts >25%", "Elevated HbA2 (>3.5%)", "Elevated HbF (>50%)"],
        correct: 2,
        reason: "Parents of a child with Beta Thalassemia Major are carriers with elevated HbA2 (>3.5%).",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following are recognized environmental or physiological triggers for acute vaso-occlusive painful crises in sickle cell disease EXCEPT:",
        opts: ["Cold weather and exposure to wind", "High altitude exposure", "Dehydration and systemic infections", "High fluid intake and alkaline pH"],
        correct: 3,
        reason: "High fluid intake and alkaline pH are protective, not triggers, for vaso-occlusive crises.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "Alpha-thalassemia trait is caused by the deletion of how many alpha-globin genes?",
        opts: ["2 gene deletions", "1 gene deletion", "3 gene deletions", "4 gene deletions"],
        correct: 1,
        reason: "Alpha-thalassemia trait is caused by deletion of 1 alpha-globin gene.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A 10-year-old boy with sickle cell anemia presents with high fever and localized pain and swelling over his left femur. X-ray confirms acute osteomyelitis secondary to bone marrow infarction. What is the most common causative organism of osteomyelitis in sickle cell disease?",
        opts: ["Staphylococcus aureus", "Salmonella species", "Pseudomonas aeruginosa", "Streptococcus pyogenes"],
        correct: 1,
        reason: "Salmonella species is the most common causative organism of osteomyelitis in sickle cell disease.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Along with overwhelming bacterial sepsis, what is the most common cause of mortality in pediatric patients with sickle cell disease?",
        opts: ["Gallstone ileus", "Renal papillary necrosis", "Acute chest syndrome", "Priapism"],
        correct: 2,
        reason: "Acute chest syndrome is a leading cause of mortality in sickle cell disease.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A newborn infant tests positive for sickle cell disease on state newborn screening via high-performance liquid chromatography (HPLC). What prophylactic medication must be initiated before 4 months of age?",
        opts: ["Oral hydroxyurea", "Daily deferoxamine", "Oral folic acid only", "Oral penicillin"],
        correct: 3,
        reason: "Oral penicillin prophylaxis must be initiated before 4 months of age in sickle cell disease.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the mode of inheritance for Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency?",
        opts: ["X-linked disorder", "Autosomal dominant", "Autosomal recessive", "Mitochondrial inheritance"],
        correct: 0,
        reason: "G6PD deficiency is an X-linked disorder.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "A 6-year-old child presents with mild fatigue, scleral icterus, and splenomegaly. CBC reveals Hb 8.5 g/dL, normal MCV, and MCHC 37 g/dL (elevated). Peripheral blood film shows round, dense RBCs lacking central pallor. What is the most likely diagnosis?",
        opts: ["Sickle cell anemia", "Hereditary spherocytosis", "Beta thalassemia major", "G6PD deficiency"],
        correct: 1,
        reason: "Round dense RBCs lacking central pallor with elevated MCHC indicate hereditary spherocytosis.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Oral penicillin prophylaxis administered twice daily to young children with sickle cell disease reduces pneumococcal infection rates by 84%. What is the recommended age range for this regimen?",
        opts: ["Birth to 1 year", "1 year to 10 years", "2 months to 5 years", "5 years to 18 years"],
        correct: 2,
        reason: "Penicillin prophylaxis is recommended from 2 months to 5 years of age.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the peak age range for the occurrence of ischemic stroke in children with Sickle Cell Disease?",
        opts: ["6-9 months", "2-4 years", "14-18 years", "6-9 years"],
        correct: 3,
        reason: "Peak age for ischemic stroke in sickle cell disease is 6-9 years.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following lab findings or clinical features is NOT typically associated with Pyruvate Kinase deficiency?",
        opts: ["Presence of Heinz bodies on peripheral blood smear", "Increased reticulocyte count and polychromatophilia", "Mild macrocytosis", "Decreased activity on pyruvate kinase assay"],
        correct: 0,
        reason: "Heinz bodies are associated with G6PD deficiency, not typically with pyruvate kinase deficiency.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "H"
      },
      {
        q: "What is currently the ONLY curative treatment option for patients with severe Sickle Cell Disease or Beta Thalassemia Major?",
        opts: ["Chronic hypertransfusion therapy", "Bone marrow / stem cell transplantation", "Daily subcutaneous deferoxamine", "Splenectomy combined with hydroxyurea"],
        correct: 1,
        reason: "Bone marrow / stem cell transplantation is the only curative treatment for severe sickle cell disease or beta thalassemia major.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A 16-year-old athlete with known Sickle Cell Trait (Hb AS) travels to a mountain sports camp at an elevation of 3,200 meters (>3000 m). During strenuous exertion, he develops acute left upper quadrant abdominal pain. Imaging reveals splenic infarction. What explains this event?",
        opts: ["Sickle cell trait causes severe continuous intravascular hemolysis", "Splenic auto-infarction is a universal feature of sickle cell trait by age 5", "High altitude hypoxia triggers sickling and splenic infarction even in trait carriers", "The patient has developed co-existing Parvovirus B19 aplastic crisis"],
        correct: 2,
        reason: "High altitude hypoxia can trigger sickling and splenic infarction even in sickle cell trait carriers.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Children with functional asplenia due to sickle cell disease are at particularly high risk for severe, life-threatening infection with which encapsulated bacterium?",
        opts: ["Escherichia coli", "Listeria monocytogenes", "Mycoplasma pneumoniae", "Streptococcus pneumoniae"],
        correct: 3,
        reason: "Functional asplenia predisposes to infection with encapsulated organisms, predominantly Streptococcus pneumoniae.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "What routine annual screening test is recommended for children with sickle cell disease to detect abnormal cerebral blood flow velocity and evaluate stroke risk?",
        opts: ["Transcranial Doppler (TCD) ultrasound study", "Electroencephalogram (EEG)", "Brain CT scan without contrast", "Carotid angiography"],
        correct: 0,
        reason: "Annual transcranial Doppler (TCD) study is recommended to detect abnormal cerebral blood flow velocity and evaluate stroke risk.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old child of Mediterranean descent is found to have mild hypochromic microcytic anemia with a completely normal Red Cell Distribution Width (RDW). Serum ferritin and serum iron levels are normal. What is the most likely diagnosis?",
        opts: ["Iron deficiency anemia", "Alpha thalassemia trait", "Beta thalassemia major", "Hereditary spherocytosis"],
        correct: 1,
        reason: "Alpha thalassemia trait (2 gene deletion) presents with mild hypochromic microcytic anemia with normal RDW.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "H"
      },
      {
        q: "According to pediatric lecture definitions, anemia is defined as a condition in which:",
        opts: ["Hemoglobin concentration alone is reduced below 12 g/dL", "RBC count alone is reduced below 4×10^12/L", "Hb concentration and/or number of RBCs are reduced below the normal level for age", "Reticulocyte count is less than 0.5%"],
        correct: 2,
        reason: "Anemia is defined as Hb concentration and/or number of RBCs reduced below the normal level for age.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "E"
      },
      {
        q: "Normal fetal hemoglobin (HbF) consists of which globin chain composition?",
        opts: ["2 alpha and 2 beta chains", "2 alpha and 2 delta chains", "4 gamma chains", "2 alpha and 2 gamma chains"],
        correct: 3,
        reason: "Normal fetal Hb (HbF) consists of 2 alpha and 2 gamma chains (alpha2 gamma2).",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Skeletal changes in Beta Thalassemia Major result from marked expansion of the erythroid marrow space. Which radiologic feature on skull X-ray is classic for this condition?",
        opts: ["Hair-on-end' appearance", "Punch-out' lytic lesions", "Ground-glass' osteopenia", "'Codfish' vertebral bodies"],
        correct: 0,
        reason: "Expanded medullary space produces the classic hair-on-end appearance on skull X-ray in Beta Thalassemia Major.",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "Normal minor adult hemoglobin (HbA2) consists of which globin chain structure?",
        opts: ["2 alpha and 2 beta chains", "2 alpha and 2 delta chains", "2 alpha and 2 gamma chains", "4 beta chains"],
        correct: 1,
        reason: "HbA2 (minor adult Hb) consists of 2 alpha and 2 delta chains (alpha2 delta2).",
        ref: "hemolytic-anemia-pediatrics-exam.pdf",
        diff: "M"
      },
      {
        q: "In Beta-Thalassemia Trait (minor), Hb A2 levels on hemoglobin electrophoresis are characteristically:",
        opts: ["Normal or < 1%", "Completely absent", "100%", "Elevated >3.5%"],
        correct: 3,
        reason: "Beta-Thalassemia trait shows elevated Hb A2 > 3.5%.",
        ref: "Hemolytic Anemia 4th year (2).pdf",
        diff: "M"
      }
    ]
  },

  // ============================================================
  // TOPIC 7 — HEMORRHAGIC DISORDERS & COAGULATION
  // ============================================================
  {
    id: "hemorrhagic_disorders",
    title: "Hemorrhagic Disorders & Coagulation",
    source: "Hemorrhagic disorders integ. 2026.pdf + hemorrhagic_disorders_midterm_exam.pdf",
    questions: [
      {
        q: "Which of the following is classified as a SECONDARY hemostatic disorder?",
        opts: ["Vascular wall defect", "Platelet function defect", "Immune Thrombocytopenia Purpura", "Coagulation factor disorder (e.g., Hemophilia)"],
        correct: 3,
        reason: "Hemophilia is a coagulation factor defect, classified as a secondary hemostatic disorder.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "Activated partial thromboplastin time (aPTT) assesses the intrinsic coagulation pathway. Normal aPTT range is:",
        opts: ["2 to 6 seconds", "10 to 14 seconds", "60 to 90 seconds", "25 to 40 seconds"],
        correct: 3,
        reason: "Normal intrinsic pathway aPTT ranges between 25 and 40 seconds.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "A prolonged aPTT that CORRECTS upon a 1:1 mixing study with normal plasma indicates:",
        opts: ["Coagulation factor deficiency (e.g., Factor VIII or IX)", "Presence of a coagulation factor inhibitor", "Lupus anticoagulant", "Severe thrombocytopenia"],
        correct: 0,
        reason: "Correction of aPTT upon 1:1 mixing with normal plasma confirms a factor deficiency.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "M"
      },
      {
        q: "Severe Hemophilia A or B is classified when specific clotting factor activity (Factor VIII or IX) is less than:",
        opts: ["10% of normal", "5% of normal", "1% of normal", "25% of normal"],
        correct: 2,
        reason: "Severe Hemophilia is defined by clotting factor activity < 1% of normal.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old boy presents with hemarthrosis of the right ankle after minor trauma. Lab tests show prolonged aPTT, normal PT, and normal platelet count. What is the inheritance pattern of Hemophilia A?",
        opts: ["Autosomal dominant", "X-linked recessive", "Autosomal recessive", "Mitochondrial"],
        correct: 1,
        reason: "Hemophilia A (Factor VIII) and B (Factor IX) follow an X-linked recessive inheritance.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "A 5-year-old boy with severe Hemophilia A presents with inability to extend his left hip due to severe retroperitoneal pain. Which muscle group is the classic site for this hemorrhage?",
        opts: ["Gastrocnemius muscle", "Quadriceps femoris muscle", "Rectus abdominis muscle", "Iliopsoas muscle"],
        correct: 3,
        reason: "Iliopsoas muscle hemorrhage causes hip flexion contracture and femoral nerve palsy.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "M"
      },
      {
        q: "An isolated prolonged Prothrombin Time (PT) with a normal aPTT is characteristically found in a deficiency of which clotting factor?",
        opts: ["Factor VII", "Factor II", "Factor VIII", "Factor IX"],
        correct: 0,
        reason: "Factor VII is the unique factor of the extrinsic pathway evaluated by Prothrombin Time.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "M"
      },
      {
        q: "Which coagulation test measures the extrinsic and common pathways of the coagulation cascade?",
        opts: ["Bleeding Time (BT)", "Prothrombin Time (PT / INR)", "Activated Partial Thromboplastin Time (aPTT)", "Thrombin Time (TT)"],
        correct: 1,
        reason: "Prothrombin Time (PT / INR) evaluates Factor VII (extrinsic) and the common cascade.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "Primary hemostasis involves vascular constriction and formation of an unstable platelet plug. Clinical manifestations of primary hemostatic defects include:",
        opts: ["Deep muscle hematomas and hemarthrosis (joint bleeding)", "Delayed retroperitoneal bleeding", "Petechiae, purpura, and mucosal bleeding (epistaxis, gum bleeding)", "Isolated hemoperitoneum"],
        correct: 2,
        reason: "Primary hemostatic defects cause petechiae, purpura, and mucosal bleeding.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "M"
      },
      {
        q: "Secondary hemostasis involves activation of the coagulation cascade to form a stable fibrin clot. Defects in secondary hemostasis (such as Hemophilia) typically present with:",
        opts: ["Immediate petechiae and superficial purpura", "Prolonged bleeding time with normal aPTT", "Isolated splenomegaly", "Deep tissue hematomas and hemarthroses"],
        correct: 3,
        reason: "Secondary hemostatic defects present with deep tissue hematomas and hemarthroses.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "M"
      },
      {
        q: "Activated Partial Thromboplastin Time (aPTT) evaluates which pathways of the coagulation cascade?",
        opts: ["Extrinsic pathway only (Factor VII)", "Platelet aggregation", "Intrinsic pathway (Factors VIII, IX, XI, XII) and Common pathway", "Fibrinolysis only"],
        correct: 2,
        reason: "aPTT evaluates the intrinsic and common pathways.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "Prothrombin Time (PT / INR) specifically evaluates which unique factor in the extrinsic coagulation pathway?",
        opts: ["Factor VIII", "Factor IX", "Factor XIII", "Factor VII"],
        correct: 3,
        reason: "PT specifically evaluates Factor VII (extrinsic pathway).",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old boy presents with hemarthrosis of the right knee after minor trauma. Laboratory evaluation shows: PT normal, aPTT 75 seconds (prolonged). A 1:1 mixing study with normal control plasma CORRECTS the aPTT to normal. What does this mixing study result indicate?",
        opts: ["Presence of a specific factor inhibitor (antibody)", "Lupus anticoagulant", "Coagulation factor deficiency (e.g., Factor VIII or IX deficiency)", "Severe thrombocytopenia"],
        correct: 2,
        reason: "Correction of aPTT on mixing study indicates a coagulation factor deficiency.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "M"
      },
      {
        q: "Severe Hemophilia A or B is defined by a specific clotting factor level (Factor VIII or IX) of:",
        opts: ["1% to 5%", "5% to 40%", "50% to 100%", "Less than 1% (< 0.01 IU/mL)"],
        correct: 3,
        reason: "Severe hemophilia is defined as factor activity < 1%.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "What is the inheritance pattern of Hemophilia A (Factor VIII deficiency) and Hemophilia B (Factor IX deficiency)?",
        opts: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Mitochondrial"],
        correct: 2,
        reason: "Hemophilia A and B are X-linked recessive disorders.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "To raise plasma Factor VIII level by 100% in a hemophilic child with life-threatening intracranial hemorrhage, how many units/kg of recombinant Factor VIII concentrate should be infused?",
        opts: ["10 IU/kg", "25 IU/kg", "50 IU/kg", "100 IU/kg"],
        correct: 2,
        reason: "50 IU/kg raises Factor VIII level by 100% (each 1 IU/kg raises by 2%).",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "H"
      },
      {
        q: "Desmopressin (DDAVP) is effective in controlling mild bleeding episodes in patients with Mild Hemophilia A because it releases endogenous Factor VIII and von Willebrand factor from:",
        opts: ["Splenic macrophages", "Bone marrow megakaryocytes", "Vascular endothelial storage sites (Weibel-Palade bodies)", "Hepato-biliary sinusoids"],
        correct: 2,
        reason: "DDAVP releases Factor VIII and vWF from vascular endothelial Weibel-Palade bodies.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "M"
      },
      {
        q: "Von Willebrand Disease (vWD) is the most common inherited bleeding disorder. Von Willebrand Factor functions in hemostasis by promoting:",
        opts: ["Direct activation of Prothrombin to Thrombin", "Fibrinolysis of old clots", "Inhibition of Protein C", "Platelet adhesion to subendothelial collagen and carrying/stabilizing Factor VIII in plasma"],
        correct: 3,
        reason: "vWF promotes platelet adhesion and stabilizes Factor VIII in plasma.",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "M"
      },
      {
        q: "All of the following clotting factors require Vitamin K for post-translational gamma-carboxylation in the liver EXCEPT:",
        opts: ["Factor VIII", "Factor VII", "Factor II (Prothrombin)", "Factor X"],
        correct: 0,
        reason: "Factor VIII is NOT Vitamin K dependent (Vitamin K dependent factors are II, VII, IX, and X).",
        ref: "Hemorrhagic disorders integ. 2026.pdf",
        diff: "E"
      },
      {
        q: "What percentage of pediatric patients referred for evaluation of specific bleeding symptoms (such as epistaxis or menorrhagia) are ultimately confirmed to have an underlying inherited or acquired bleeding disorder?",
        opts: ["1%-5%", "10%-30%", "40%-50%", "60%-75%"],
        correct: 1,
        reason: "Only a minority (10–30%) of referred children have confirmed bleeding disorders.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Hemostasis is strictly defined in pediatric hematology as:",
        opts: ["The systemic dissolution of intravascular fibrin clots", "The physiologic mechanism leading to cessation of bleeding from a damaged blood vessel", "The congenital tendency to bruise easily following minimal trauma", "The activation of tissue factor following intravascular hemolysis"],
        correct: 1,
        reason: "Hemostasis is the mechanism that leads to cessation of bleeding from a blood vessel.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Primary hemostasis encompasses all of the following physiological components EXCEPT:",
        opts: ["Vascular phase vasoconstriction", "Primary platelet plug formation (adhesion and aggregation)", "Interaction of platelets with von Willebrand factor", "Coagulation cascade activation yielding cross-linked fibrin"],
        correct: 3,
        reason: "Coagulation cascade forming fibrin is part of Secondary Hemostasis.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Secondary hemostasis serves which primary physiological role in the hemostatic process?",
        opts: ["Immediate transient arterial vasoconstriction", "Generation of thromboxane A2 for initial platelet contact", "Activation of the coagulation cascade to form fibrin that strengthens the platelet plug", "Inhibition of plasminogen activator to prevent early clot dissolution"],
        correct: 2,
        reason: "Secondary hemostasis uses the coagulation cascade to form fibrin, strengthening the platelet plug.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "In a child presenting with nosebleeds, epistaxis warrants a formal laboratory evaluation for a bleeding disorder if it persists longer than:",
        opts: ["5 minutes despite direct pressure", "10 minutes despite direct pressure", "15 minutes despite appropriate application of pressure", "30 minutes despite cold compresses"],
        correct: 2,
        reason: "Epistaxis lasting >15 mins despite appropriate nasal pressure warrants evaluation.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Menorrhagia in an adolescent female warrants evaluation for an underlying bleeding disorder if heavy menstrual bleeding lasts longer than:",
        opts: ["3 days or blood loss >30 ml per cycle", "5 days or requiring >2 pads per day", "7 days or blood loss >80 ml per cycle (soaking pads every hour)", "10 days without dysmenorrhea"],
        correct: 2,
        reason: "Menorrhagia criteria: >7 days or blood loss >80 ml/cycle (pads every hour).",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "When evaluating a pediatric patient presenting with acute hemorrhage, which two critical questions must be answered quickly and simultaneously?",
        opts: ["'Is there a family history?' and 'What is the platelet count?'", "'Is the patient continuing to bleed?' and 'Is the patient hemodynamically stable?'", "'Is the defect inherited?' and 'Is the aPTT prolonged?'", "'Was there trauma?' and 'Should factor VIII be administered?'"],
        correct: 1,
        reason: "The 1st two critical questions: 'Is the patient continuing to bleed?' and 'Is the patient hemodynamically stable?'",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 5-year-old child undergoes tooth extraction and develops post-procedural bleeding. To meet the threshold for a bleeding disorder workup, dental bleeding must last longer than:",
        opts: ["4 hours", "12 hours", "24 hours (or require blood transfusion)", "48 hours"],
        correct: 2,
        reason: "Significant blood loss following dental procedure lasting >24 hours or requiring transfusion warrants evaluation.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Henoch-Schonlein Purpura (HSP) is categorized under which classification of bleeding disorders?",
        opts: ["Congenital vascular cause", "Acquired vascular cause", "Quantitative platelet disorder", "Congenital coagulation factor deficiency"],
        correct: 1,
        reason: "Henoch-Schönlein Purpura is classified as an acquired vascular cause.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following conditions is classified as a congenital vascular cause of bleeding diathesis?",
        opts: ["Ehlers-Danlos syndrome", "Henoch-Schonlein Purpura", "Glanzmann thrombasthenia", "von Willebrand disease"],
        correct: 0,
        reason: "Ehlers-Danlos syndrome is a congenital vascular cause of bleeding.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "What is the most common acquired cause of bleeding disorders in children?",
        opts: ["Hemophilia A", "Vitamin K deficiency", "Thrombocytopenia (platelet count < 150,000/μL)", "Severe liver dysfunction"],
        correct: 2,
        reason: "Thrombocytopenia is the most common acquired cause of bleeding disorders in children.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old girl presents with superficial petechiae, gingival bleeding, and small ecchymoses. Lab tests reveal a normal platelet count, normal PT, normal aPTT, but a prolonged Bleeding Time (BT). This pattern of mucous membrane bleeding is most characteristic of:",
        opts: ["Severe Hemophilia A", "Factor VII deficiency", "von Willebrand disease (vWD) or platelet dysfunction", "Factor XIII deficiency"],
        correct: 2,
        reason: "Mucous membrane bleeding, petechiae, and prolonged BT indicate vWD or platelet dysfunction.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 6-year-old boy presents with extensive deep hematomas and hemarthrosis following minor sports contact. Deep tissue bleeding of this nature indicates:",
        opts: ["Vascular wall fragility", "Qualitative platelet defect", "Lack of clotting factors (coagulopathy)", "Isolated vitamin K deficiency"],
        correct: 2,
        reason: "Deep bleeding with extensive ecchymoses and hematomas indicates a lack of clotting factors.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Spontaneous or post-traumatic bleeding from which anatomical site is described as very rare in children and specifically points toward Factor XIII deficiency?",
        opts: ["Gingiva", "Ears", "Subconjunctiva", "Nasal mucosa"],
        correct: 1,
        reason: "Bleeding from the ears is very rare and points to Factor XIII deficiency.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "All of the following subcutaneous manifestations are typical of primary vascular or platelet-type bleeding EXCEPT:",
        opts: ["Petechiae", "Elevated or non-elevated purpuric eruptions", "Deep muscle hematomas", "Small ecchymoses"],
        correct: 2,
        reason: "Deep muscle hematomas signify secondary hemostatic/coagulation factor defects, not primary platelet/vascular.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 4-year-old boy with a known severe bleeding disorder presents with left groin pain and flexed posture of the hip. Examination confirms an iliopsoas muscle hematoma. The classic clinical sign of iliopsoas muscle bleeding is:",
        opts: ["Inability to flex the knee", "Inability to extend the hip", "Fixed adduction of the thigh", "Absent ankle jerk reflex"],
        correct: 1,
        reason: "Bleeding in the iliopsoas muscle presents as inability to extend hip.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "Which of the following antimicrobial medications is specifically highlighted as a cause of acquired thrombocytopenia in children?",
        opts: ["Ampicillin", "Vancomycin", "Erythromycin", "Ceftriaxone"],
        correct: 1,
        reason: "Vancomycin can be associated with thrombocytopenia.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Prolonged administration of penicillin antibiotics can induce bleeding manifestations through which mechanism?",
        opts: ["Direct destruction of bone marrow megakaryocytes", "Affecting platelet function or inducing specific clotting inhibitors (Vitamin K deficiency)", "Directly cleaving Factor VIII molecules", "Inhibiting hepatic synthesis of fibrinogen"],
        correct: 1,
        reason: "Prolonged antibiotics (penicillins) can affect platelet function or be associated with Vit K deficiency.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "When evaluating excessive bruising in a toddler, non-accidental trauma (child abuse) must be ruled out. Bruising in which anatomical area is MORE indicative of normal falls/accidental trauma rather than abuse?",
        opts: ["Scalp and back", "Chest and abdomen", "Shins and bony prominences", "Upper arms with belt marks"],
        correct: 2,
        reason: "Excessive bruising caused by bleeding disorders occurs on areas commonly involved in falls (shins, bony prominences); scalp, back, chest suggest abuse.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A pedigree analysis of a child with severe hemarthrosis reveals that bleeding symptoms occur exclusively in male siblings and maternal uncles. This inheritance pattern is:",
        opts: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Mitochondrial"],
        correct: 2,
        reason: "Bleeding manifestations only in male siblings and maternal uncles indicate X-linked recessive inheritance.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "An 8-year-old girl is brought to the clinic due to recurrent epistaxis. Which clinical history parameter strictly fulfills the criteria for initiating a formal bleeding disorder workup?",
        opts: ["Epistaxis twice weekly lasting 4 minutes each", "Epistaxis lasting 18 minutes despite appropriate application of direct nasal pressure", "Epistaxis following a direct facial strike during play lasting 6 minutes", "Epistaxis occurring only during acute viral rhinitis"],
        correct: 1,
        reason: "Epistaxis >15 mins despite pressure warrants evaluation.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What proportion of patients diagnosed with hemophilia have NO prior family history of the disease due to a new spontaneous mutation?",
        opts: ["Up to 5%", "Up to 15%", "Up to 33% (one-third)", "Up to 60%"],
        correct: 2,
        reason: "Up to one-third (33%) of hemophilia patients have no prior family history due to new spontaneous mutation.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "An 8-year-old boy with a known bleeding diathesis experiences a mild head impact. Hours later, he develops lethargy, altered consciousness, lateralizing neurological signs, and subconjunctival hemorrhage. Emergency evaluation should focus on ruling out:",
        opts: ["Acute labyrinthitis", "Central nervous system (extradural/intracranial) bleeding", "Retinal detachment", "Acute sinus thrombosis"],
        correct: 1,
        reason: "These signs suggest central nervous system (extradural/intracranial) bleeding.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "In standard pediatric laboratory diagnostics, what is the normal reference range for platelet count?",
        opts: ["50,000-100,000/μL", "100,000-150,000/μL", "150,000-450,000/μL", "500,000-800,000/μL"],
        correct: 2,
        reason: "Normal platelet count ranges from 150,000 to 450,000/μL.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "What is the normal reference range for Bleeding Time (BT) in pediatric coagulation assessment?",
        opts: ["30-60 seconds", "2-6 minutes", "8-12 minutes", "15-20 minutes"],
        correct: 1,
        reason: "Normal Bleeding Time is 2-6 minutes.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "What is the normal reference range for Clotting Time (CT)?",
        opts: ["10-14 seconds", "25-40 seconds", "2-8 minutes", "10-15 minutes"],
        correct: 2,
        reason: "Normal Clotting Time is 2-8 minutes.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A full newborn evaluation shows persistent bleeding from the umbilical stump following delivery. Routine screening reveals normal platelet count, normal BT, normal PT, and normal aPTT. Which factor deficiency must be specifically investigated?",
        opts: ["Factor V deficiency", "Factor VII deficiency", "Factor XI deficiency", "Factor XIII deficiency"],
        correct: 3,
        reason: "Persistent umbilical stump bleeding with normal screening tests suggests Factor XIII deficiency.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What is the normal reference range for Activated Partial Thromboplastin Time (aPTT)?",
        opts: ["10-14 seconds", "11-15 seconds", "25-40 seconds", "50-70 seconds"],
        correct: 2,
        reason: "Normal aPTT is 25-40 seconds.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Prothrombin Time (PT) assesses which specific limb of the coagulation system, and what is its normal reference range?",
        opts: ["Intrinsic pathway; 25-40 seconds", "Extrinsic pathway; 10-14 seconds", "Common pathway; 2-6 minutes", "Fibrinolytic pathway; 11-15 seconds"],
        correct: 1,
        reason: "PT assesses the extrinsic pathway; normal range is 10-14 seconds.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Thrombin Time (TT) measures the final conversion step of Fibrinogen to Fibrin. What is its normal reference range?",
        opts: ["2-6 seconds", "11-15 seconds", "25-40 seconds", "1-2 minutes"],
        correct: 1,
        reason: "Normal Thrombin Time is 11-15 seconds.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A mixing study is conducted on a patient with a prolonged aPTT by adding 1:1 normal plasma. Complete correction of the aPTT prolongation indicates:",
        opts: ["Presence of a specific factor inhibitor (antibody)", "Pure deficiency of a clotting factor", "Presence of lupus anticoagulant", "Severe qualitative platelet defect"],
        correct: 1,
        reason: "Complete correction indicates a pure deficiency of a clotting factor.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "An isolated prolongation of Prothrombin Time (PT) with a completely normal aPTT points specifically to a deficiency in which factor?",
        opts: ["Factor V", "Factor VII", "Factor VIII", "Factor IX"],
        correct: 1,
        reason: "Isolated PT prolongation points to Factor VII deficiency.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Combined prolongation of BOTH Prothrombin Time (PT) and Activated Partial Thromboplastin Time (aPTT) is seen in all of the following conditions EXCEPT:",
        opts: ["Disseminated Intravascular Coagulation (DIC)", "Advanced liver disease", "Vitamin K deficiency", "Hemophilia A"],
        correct: 3,
        reason: "Hemophilia A causes isolated aPTT prolongation, not combined PT/aPTT prolongation.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "If a qualitative platelet dysfunction is clinically suspected in a child with prolonged Bleeding Time, which laboratory diagnostic study is specifically recommended?",
        opts: ["Thrombin time assay", "Platelet aggregation studies using Ristocetin", "Euglobulin clot lysis time", "Factor XIII quantitative assay"],
        correct: 1,
        reason: "Platelet aggregation studies using Ristocetin are recommended for suspected qualitative platelet dysfunction.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 10-year-old boy with recurrent deep bleeding has a markedly prolonged aPTT. A 1:1 mixing study with normal plasma fails to correct the aPTT. This failure to correct indicates:",
        opts: ["Factor IX deficiency (Hemophilia B)", "Presence of a circulating clotting factor inhibitor (antibody against Factor VIII, IX, or XI)", "von Willebrand disease Type 1", "Vitamin K malabsorption"],
        correct: 1,
        reason: "Failure to correct indicates the presence of a circulating clotting factor inhibitor.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "The Intrinsic coagulation pathway includes all of the following factors EXCEPT:",
        opts: ["Factor XII and Prekallikrein", "High Molecular Weight Kininogen (HMWK)", "Factor VII", "Factor XI, Factor IX, and Factor VIII"],
        correct: 2,
        reason: "Factor VII is part of the extrinsic pathway, not the intrinsic pathway.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which coagulation factor initiates the Common pathway of the coagulation cascade?",
        opts: ["Factor VII", "Factor VIII", "Factor X", "Factor XII"],
        correct: 2,
        reason: "Factor X initiates the common pathway.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What is the traditional descriptive synonym for Factor VIII?",
        opts: ["Christmas factor", "Antihomophilic globulin", "Plasma thromboplastin antecedent", "Hageman factor"],
        correct: 1,
        reason: "Factor VIII is synonymously known as antihomophilic globulin.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Factor IX deficiency is synonymously known as Hemophilia B or:",
        opts: ["Hageman disease", "Christmas factor deficiency (Christmas disease)", "Owren disease", "Rosenthal syndrome"],
        correct: 1,
        reason: "Factor IX deficiency is known as Christmas factor deficiency (Christmas disease).",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Hemophilia C is characterized by a congenital deficiency of which clotting factor?",
        opts: ["Factor VII", "Factor VIII", "Factor IX", "Factor XI"],
        correct: 3,
        reason: "Hemophilia C is characterized by congenital deficiency of Factor XI.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Among congenital coagulation factor deficiencies, what is the relative proportion of Hemophilia A versus Hemophilia B?",
        opts: ["50% Hemophilia A and 50% Hemophilia B", "70% Hemophilia A and 30% Hemophilia B", "85% Hemophilia A and 15% Hemophilia B", "95% Hemophilia A and 5% Hemophilia B"],
        correct: 2,
        reason: "Hemophilia A accounts for ~85% and Hemophilia B for ~15% of congenital coagulation factor deficiencies.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 1-year-old boy presents with easy bruising upon crawling and spontaneous ankle swelling. Laboratory assay reveals a plasma Factor VIII activity level of < 1% of normal. How is his Hemophilia A classified?",
        opts: ["Subclinical", "Mild", "Moderate", "Severe"],
        correct: 3,
        reason: "Factor VIII activity <1% is classified as severe Hemophilia A.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Moderate Hemophilia is defined by a plasma factor VIII or IX level of:",
        opts: ["< 1% of normal", "1%-5% of normal", "6%-15% of normal", "15%-30% of normal"],
        correct: 1,
        reason: "Moderate Hemophilia is defined as factor level 1%-5% of normal.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Hemarthrosis is a hallmark clinical feature of severe hemophilia. In young children beginning to mobilize, joint bleeding appears FIRST in which joint?",
        opts: ["Knees", "Ankles", "Elbows", "Wrists"],
        correct: 1,
        reason: "Joint bleeding appears first in the ankles in young children beginning to mobilize.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following are recognized complications of severe hemophilia and its repeated treatment EXCEPT:",
        opts: ["Joint deformities secondary to recurrent hemarthrosis", "Development of antibodies (inhibitors) to Factor VIII causing poor clinical response", "Transmission of Hepatitis and HIV/AIDS from repeated blood product transfusions", "Glomerular immune-complex deposition leading to Nephrotic syndrome"],
        correct: 3,
        reason: "Glomerular immune-complex deposition leading to Nephrotic syndrome is NOT a recognized complication of severe hemophilia.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "A 5-year-old child with severe Hemophilia A is placed on routine primary prophylaxis. What is the recommended prophylactic dose and administration schedule of Factor VIII concentrate?",
        opts: ["10–15 IU/kg every 12 hours", "20–40 IU/kg every 3 days", "50–100 IU/kg once weekly", "100 IU/kg every month"],
        correct: 1,
        reason: "Prophylactic Factor VIII is dosed at 20–40 IU/kg every 3 days.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "A 6-year-old boy with severe Hemophilia A presents with acute hemarthrosis of the right knee. What is the standard therapeutic dose of Factor VIII concentrate required for replacement therapy?",
        opts: ["5–10 units/kg single dose", "20–50 units/kg repeated every 8–12 hours until bleeding is controlled", "100 units/kg single bolus", "15–20 ml/kg every 24 hours"],
        correct: 1,
        reason: "Acute hemarthrosis in severe Hemophilia A is treated with 20–50 units/kg repeated every 8–12 hours until bleeding is controlled.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 3-year-old boy with Hemophilia A presents with right knee swelling. His mother notes he had left ankle swelling 6 months ago when he started walking. The characteristic chronological sequence of joint involvement in pediatric hemarthrosis is:",
        opts: ["Knees first, followed by ankles and elbows", "Ankles first, followed by knees and elbows", "Elbows first, followed by knees and shoulders", "Wrists first, followed by ankles and knees"],
        correct: 1,
        reason: "Ankles are involved first, followed by knees and elbows, in pediatric hemarthrosis.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "In an emergency setting where Factor VIII concentrates are unavailable, Cryoprecipitate or Fresh Frozen Plasma (FFP) can be administered to a hemophilic patient in what dosage?",
        opts: ["2–5 ml/kg every 24 hours", "10–15 ml/kg every 12 hours", "25–30 ml/kg single dose", "50 ml/kg every 6 hours"],
        correct: 1,
        reason: "Cryoprecipitate or FFP is dosed at 10–15 ml/kg every 12 hours.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 7-year-old boy with mild Hemophilia A requires a minor dental procedure. Which therapeutic agent can be administered to transiently raise endogenous Factor VIII levels without transfusion of blood products?",
        opts: ["Aspirin", "Desmopressin (DDAVP)", "Warfarin", "Vitamin K1"],
        correct: 1,
        reason: "DDAVP increases endogenous Factor VIII levels in mild disease.",
        ref: "hemorrhagic_disorders_midterm_exam.pdf",
        diff: "M"
      }
    ]
  },

  // ============================================================
  // TOPIC 8 — PLATELET DISORDERS (ITP, HSP, etc.)
  // ============================================================
  {
    id: "platelet_disorders",
    title: "Platelet Disorders (ITP, HSP & More)",
    source: "Platelet Disorders.pdf + platelet-disorders-midterm-exam.pdf",
    questions: [
      {
        q: "Normal human platelet count ranges between:",
        opts: ["150,000 and 450,000/mm³", "50,000 and 100,000/mm³", "500,000 and 800,000/mm³", "1,000,000 and 2,000,000/mm³"],
        correct: 0,
        reason: "Normal circulating platelet count ranges between 150,000 and 450,000 /mm³.",
        ref: "Platelet Disorders.pdf",
        diff: "E"
      },
      {
        q: "A previously healthy 3-year-old child presents with sudden onset generalized petechiae 2 weeks after a viral upper respiratory infection. CBC reveals isolated thrombocytopenia (platelets 15,000/mm³) with normal WBC and Hb. What is the diagnosis?",
        opts: ["Acute Lymphoblastic Leukemia", "Aplastic anemia", "Henoch-Schonlein Purpura", "Immune Thrombocytopenia Purpura (ITP)"],
        correct: 3,
        reason: "Acute ITP presents 1–4 weeks post-viral with petechiae and isolated severe thrombocytopenia.",
        ref: "Platelet Disorders.pdf",
        diff: "E"
      },
      {
        q: "In pediatric ITP, antibody-coated platelets are cleared from circulation primarily in which organ by macrophage Fc receptors?",
        opts: ["Liver", "Thymus", "Bone marrow", "Spleen"],
        correct: 3,
        reason: "Antibody-coated platelets are sequestered and destroyed by macrophages in the spleen.",
        ref: "Platelet Disorders.pdf",
        diff: "E"
      },
      {
        q: "Spontaneous resolution occurs within 6 months in approximately what percentage of children with acute ITP?",
        opts: ["20%", "80%", "50%", "99%"],
        correct: 1,
        reason: "Approximately 80% of children with acute ITP achieve spontaneous complete recovery within 6 months.",
        ref: "Platelet Disorders.pdf",
        diff: "E"
      },
      {
        q: "Which of the following is standard first-line medical therapy for pediatric ITP requiring intervention?",
        opts: ["Recombinant Factor VIIa", "Rituximab", "Emergency splenectomy", "Oral Prednisone (or IVIG)"],
        correct: 3,
        reason: "First-line medical treatment for symptomatic pediatric ITP includes Prednisone or IVIG.",
        ref: "Platelet Disorders.pdf",
        diff: "E"
      },
      {
        q: "A 4-year-old child presents with palpable purpura over the buttocks and lower extremities, colicky abdominal pain, and microscopic hematuria. Platelet count and coagulation profile are completely normal. What is the diagnosis?",
        opts: ["Immune Thrombocytopenia Purpura", "Henoch-Schonlein Purpura (HSP)", "Von Willebrand disease", "Aplastic anemia"],
        correct: 1,
        reason: "Henoch-Schönlein Purpura (HSP) presents with non-thrombocytopenic palpable purpura and arthritis.",
        ref: "Platelet Disorders.pdf",
        diff: "M"
      },
      {
        q: "Which clinical triad classically characterizes Wiskott-Aldrich syndrome?",
        opts: ["Purpura, arthritis, and abdominal pain", "Thrombocytopenia, absent radii, and cardiac defects", "Microcytic anemia, splenomegaly, and cholelithiasis", "Thrombocytopenia, infantile eczema, and immunodeficiency"],
        correct: 3,
        reason: "Triad of Wiskott-Aldrich: microthrombocytopenia, infantile eczema, and immunodeficiency.",
        ref: "Platelet Disorders.pdf",
        diff: "M"
      },
      {
        q: "A 4-year-old child presents with sudden severe epistaxis, mucosal bleeding, and petechiae. Platelet count is 8,000/mm³. Diagnosis of acute ITP is made. Which first-line therapy rapidly blocks macrophage Fc receptors to protect platelets?",
        opts: ["Intravenous Immunoglobulin (IVIG)", "Rituximab", "Cyclophosphamide", "Oral Aspirin"],
        correct: 0,
        reason: "High-dose IVIG rapidly blocks macrophage Fc receptors to halt splenic platelet destruction.",
        ref: "Platelet Disorders.pdf",
        diff: "M"
      },
      {
        q: "An infant with acute ITP develops severe, life-threatening intracranial hemorrhage. In addition to emergency resuscitation and platelet transfusion, which emergency medical therapy should be given?",
        opts: ["Oral Aspirin and Heparin", "High-dose IV Methylprednisolone (30 mg/kg/day) and IVIG (1 g/kg/day)", "Oral Ferrous sulfate", "Low-dose oral Prednisone only"],
        correct: 1,
        reason: "Intracranial hemorrhage in ITP requires pulse IV Methylprednisolone + IVIG + platelet transfusion.",
        ref: "Platelet Disorders.pdf",
        diff: "H"
      },
      {
        q: "Which of the following is defined as the physiological mechanism that leads to the cessation of bleeding from an injured blood vessel?",
        opts: ["Fibrinolysis", "Bleeding diathesis", "Hemostasis", "Primary thrombocytopenia"],
        correct: 2,
        reason: "Hemostasis is the physiological mechanism that leads to cessation of bleeding.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "According to pediatric hematology guidelines, what is the normal lifespan of a circulating blood platelet?",
        opts: ["2 days", "4 days", "7 days", "10 days"],
        correct: 3,
        reason: "Normal platelet lifespan is 10 days.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "What is the normal physiological range for blood platelet count in children?",
        opts: ["50,000-100,000/mm³", "100,000-200,000/mm³", "150,000-450,000/mm³", "500,000-800,000/mm³"],
        correct: 2,
        reason: "Normal platelet count is 150,000-450,000/mm³.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following are acquired causes of vascular wall weakness or inflammation EXCEPT:",
        opts: ["Henoch-Schonlein purpura", "Meningococcal sepsis", "Ehlers-Danlos syndrome", "Scurvy"],
        correct: 2,
        reason: "Ehlers-Danlos syndrome is a congenital, not acquired, cause of vascular wall weakness.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following congenital platelet functional disorders is specifically characterized as a platelet adhesion defect?",
        opts: ["Glanzmann disease", "Bernard-Soulier disease", "Fanconi anemia", "Wiskott-Aldrich syndrome"],
        correct: 1,
        reason: "Bernard-Soulier disease is a platelet adhesion defect.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Wiskott-Aldrich syndrome is an X-linked primary immunodeficiency characterized by a classic clinical triad consisting of thrombocytopenia, immunodeficiency, and which of the following?",
        opts: ["Radial aplasia", "Infantile eczema", "Giant cavernous hemangioma", "Autoimmune hemolytic anemia"],
        correct: 1,
        reason: "Wiskott-Aldrich triad: thrombocytopenia, immunodeficiency, and infantile eczema.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 3-month-old infant presents with a rapidly expanding, large cavernous hemangioma on the left thigh. Laboratory investigation reveals a platelet count of 18,000/mm³. What is the most likely diagnosis?",
        opts: ["Wiskott-Aldrich syndrome", "Henoch-Schonlein purpura", "Kasabach-Merritt syndrome", "Fanconi anemia"],
        correct: 2,
        reason: "Rapidly expanding hemangioma with severe thrombocytopenia indicates Kasabach-Merritt syndrome.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Primary Immune Thrombocytopenia (ITP) is defined as isolated thrombocytopenia with a platelet count strictly below:",
        opts: ["150,000/mm³", "100,000/mm³", "50,000/mm³", "20,000/mm³"],
        correct: 1,
        reason: "Primary ITP is defined as isolated thrombocytopenia with platelet count <100,000/mm³.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "In pediatric Primary ITP, the spleen serves as the primary anatomical site for which two major pathophysiological processes?",
        opts: ["Megakaryocyte budding and thrombopoietin synthesis", "Fibrinogen degradation and vascular constriction", "Antibody production and platelet destruction", "Complement activation and stem cell differentiation"],
        correct: 2,
        reason: "The spleen is the primary site for antibody production and platelet destruction in ITP.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 3-year-old previously healthy boy is brought to the clinic due to the sudden appearance of generalized petechiae and purpuric spots all over his body. His mother reports he had a mild upper respiratory viral infection 2 weeks ago. Physical examination reveals no splenomegaly or lymphadenopathy. CBC shows isolated platelets of 15,000/mm³. What is the most likely diagnosis?",
        opts: ["Acute lymphoblastic leukemia", "Primary Immune Thrombocytopenia (ITP)", "Henoch-Schönlein purpura", "Aplastic anemia"],
        correct: 1,
        reason: "Post-viral isolated severe thrombocytopenia with petechiae and no organomegaly indicates primary ITP.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "According to the clinical classification of ITP duration, a patient whose thrombocytopenia persists 6 months after initial diagnosis is classified as having:",
        opts: ["Newly diagnosed ITP", "Persistent ITP", "Chronic ITP", "Refractory ITP"],
        correct: 2,
        reason: "Persistent thrombocytopenia >6 months after diagnosis is classified as chronic ITP.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Bone marrow examination is NOT routinely indicated in classic pediatric ITP. Which of the following findings would BE a clear indication for performing a bone marrow aspiration?",
        opts: ["Isolated thrombocytopenia of 12,000/mm³ with normal WBC and RBC", "History of a viral infection 3 weeks prior", "Presence of generalized petechiae and ecchymoses", "Unexplained anemia and leukopenia on initial CBC (pancytopenia)"],
        correct: 3,
        reason: "Unexplained pancytopenia is a clear indication for bone marrow aspiration to rule out leukemia/aplastic anemia.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 4-year-old girl with newly diagnosed ITP presents with mild cutaneous petechiae, no active mucosal bleeding, and a platelet count of 45,000/mm³. Which of the following is the best initial management strategy?",
        opts: ["Immediate oral prednisone at 2 mg/kg/day", "Intravenous Immunoglobulin (IVIG) at 1 g/kg", "Observation and family counseling regarding trauma avoidance", "Emergency splenectomy"],
        correct: 2,
        reason: "Mild cutaneous ITP without mucosal bleeding is managed with observation and counseling.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the primary mechanism of action of Intravenous Immunoglobulin (IVIG) in the treatment of pediatric ITP?",
        opts: ["Inhibition of splenic thrombopoietin synthesis", "Blockade of macrophage Fc receptors in the reticuloendothelial system", "Direct lysis of circulating autoreactive B lymphocytes", "Stimulation of megakaryocytic endometriosis in the bone marrow"],
        correct: 1,
        reason: "IVIG blocks macrophage Fc receptors in the reticuloendothelial system.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Before administering IV Anti-D to a child with ITP, which set of clinical conditions must be verified?",
        opts: ["Rh-negative status, presence of spleen, Coombs positive, Hb < 8 g/dL", "Rh-positive status, presence of spleen, Coombs negative, Hb >9 g/dL", "Post-splenectomy status, Rh-positive, Coombs negative, Hb >9 g/dL", "Rh-positive status, absent spleen, Coombs positive, Hb >9 g/dL"],
        correct: 1,
        reason: "IV Anti-D requires Rh-positive status, presence of spleen, Coombs negative, and Hb >9 g/dL.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "Eltrombopag and Romiplostim belong to which class of therapeutic agents used as second-line treatment in chronic ITP?",
        opts: ["Anti-CD20 monoclonal antibodies", "Corticosteroid receptor antagonists", "Thrombopoietin receptor agonists (TPO-RA)", "Calcineurin inhibitors"],
        correct: 2,
        reason: "Eltrombopag and Romiplostim are thrombopoietin receptor agonists (TPO-RA).",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 5-year-old child with severe ITP and a platelet count of 8,000/mm³ presents to the ER with sudden lethargy, vomiting, and anisocoria due to a confirmed intracranial hemorrhage. Which combination of urgent therapies is indicated?",
        opts: ["Observation and oral prednisone only", "Platelet transfusion, IV methylprednisolone, and IVIG", "Oral Eltrombopag and observation", "Subcutaneous Romiplostim and topical tranexamic acid"],
        correct: 1,
        reason: "Intracranial hemorrhage in ITP requires platelet transfusion, IV methylprednisolone, and IVIG.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "Platelets are produced in the bone marrow by budding from which progenitor cell type?",
        opts: ["Lymphoblasts", "Monoblasts", "Megakaryocytes", "Reticulocytes"],
        correct: 2,
        reason: "Platelets are produced by budding from megakaryocytes.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following is considered a secondary hemostatic disorder rather than a primary hemostatic disorder?",
        opts: ["Glanzmann thrombasthenia", "Henoch-Schonlein purpura", "Hemophilia A (Factor VIII deficiency)", "Bernard-Soulier disease"],
        correct: 2,
        reason: "Hemophilia A is a secondary hemostatic disorder (coagulation factor deficiency).",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old child presents with bloody diarrhea followed by oliguria, pallor, and petechiae. Peripheral smear shows schistocytes, and lab tests reveal microangiopathic hemolytic anemia, renal failure, and thrombocytopenia with increased bone marrow megakaryocytes. What is the cause of thrombocytopenia in this non-immunologic condition?",
        opts: ["Decreased bone marrow production", "Increased peripheral destruction via microangiopathy", "Platelet aggregation defect due to aspirin intake", "Vascular wall weakness due to vitamin C deficiency"],
        correct: 1,
        reason: "Thrombocytopenia in HUS is due to increased peripheral destruction via microangiopathy.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the peak age incidence of Primary Immune Thrombocytopenia (ITP) in children?",
        opts: ["1-4 years", "6-10 years", "12-15 years", "Neonatal period (first 28 days)"],
        correct: 0,
        reason: "Peak age incidence of primary ITP is 1-4 years.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Rituximab, a second-line agent used primarily for chronic refractory ITP, targets which specific cell-surface antigen?",
        opts: ["CD19 B-cell receptor", "CD20 monoclonal epitope on B cells", "CD3 T-cell receptor", "Fc-gamma receptor III on macrophages"],
        correct: 1,
        reason: "Rituximab targets CD20 on B cells.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "In a child presenting with acute petechial rash, which of the following physical examination findings is LEAST consistent with uncomplicated primary ITP and requires urgent evaluation for an alternative diagnosis?",
        opts: ["Scattered purpura on upper and lower limbs", "Minor petechiae on hard palate", "Massive hepatosplenomegaly and generalized lymphadenopathy", "Small ecchymoses over tibial shins"],
        correct: 2,
        reason: "Massive hepatosplenomegaly and lymphadenopathy are not consistent with ITP and suggest leukemia.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "For a child with acute ITP requiring rapid medical treatment where short-course high-dose oral corticosteroid therapy is chosen to minimize steroid side effects, what is the recommended dosage schedule?",
        opts: ["1 mg/kg/day for 14 days", "2 mg/kg/day for 21 days", "4 mg/kg/day for 4 days", "10 mg/kg/day for 1 day"],
        correct: 2,
        reason: "Short-course high-dose oral corticosteroids for ITP: 4 mg/kg/day for 4 days.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "What percentage of children with acute Primary ITP experience spontaneous resolution of their condition within 6 months of diagnosis?",
        opts: ["20%", "50%", "80%", "99%"],
        correct: 2,
        reason: "80% of children with acute ITP experience spontaneous resolution within 6 months.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "The medical term 'bleeding diathesis' refers to which of the following clinical features?",
        opts: ["An inherited deficiency of fibrinogen", "A generalized tendency to bleed or bruise easily", "Isolated swelling of major weight-bearing joints", "Hypercoagulable state predisposing to venous thrombosis"],
        correct: 1,
        reason: "Bleeding diathesis refers to a generalized tendency to bleed or bruise easily.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 15-year-old girl presents with persistent thrombocytopenia (platelet count 35,000/mm³), malar rash, and joint pains. Which diagnostic blood test is specifically recommended in adolescent females presenting with secondary ITP to evaluate for an underlying autoimmune disorder?",
        opts: ["Serum anti-thrombin III level", "Antinuclear antibody (ANA) and anti-dsDNA", "Bone marrow biopsy for reticulin fibrosis", "Platelet-associated IgG antibody quantification"],
        correct: 1,
        reason: "ANA and anti-dsDNA are recommended in adolescent females with secondary ITP to evaluate for SLE.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following medications is known to cause an acquired defect in platelet FUNCTION (thrombocytopathy)?",
        opts: ["Prednisone", "Aspirin", "Amoxicillin", "Folic acid"],
        correct: 1,
        reason: "Aspirin is known to cause an acquired platelet function defect.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Primary hemostasis consists of which two physiological phases?",
        opts: ["Coagulation cascade and fibrinolysis", "Vascular phase and platelet plug formation", "Thrombin generation and clot retraction", "Megakaryocyte endomitosis and splenic filtration"],
        correct: 1,
        reason: "Primary hemostasis consists of the vascular phase and platelet plug formation.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 6-year-old child diagnosed with ITP presents with severe pallor and jaundice. Lab results show platelets of 14,000/mm³, Hb of 5.2 g/dL, reticulocytosis, and a positive direct Coombs test. What is the most appropriate name for this combination of autoimmune destruction?",
        opts: ["Kasabach-Merritt syndrome", "Wiskott-Aldrich syndrome", "Evans syndrome", "Bernard-Soulier syndrome"],
        correct: 2,
        reason: "Combined autoimmune thrombocytopenia and hemolytic anemia with positive Coombs is Evans syndrome.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Which hormone/growth factor is the primary regulator that stimulates megakaryocytes in the bone marrow to produce platelets?",
        opts: ["Erythropoietin", "Thrombopoietin", "Granulocyte colony-stimulating factor", "Interleukin-2"],
        correct: 1,
        reason: "Thrombopoietin is the primary regulator that stimulates megakaryocytes to produce platelets.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Glanzmann disease (thrombasthenia) is an inherited primary hemostatic disorder classified under which specific functional defect category?",
        opts: ["Platelet adhesion defect", "Platelet aggregation defect", "Vascular wall inflammation", "Megakaryocyte hypoplasia"],
        correct: 1,
        reason: "Glanzmann disease is a platelet aggregation defect.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "In the diagnostic workup of a typical child presenting with classic isolated ITP, which of the following investigations is considered NOT useful according to lecture recommendations?",
        opts: ["Complete blood count (CBC)", "Peripheral blood smear examination", "Platelet antibody testing", "Direct Coombs test if unexplained anemia exists"],
        correct: 2,
        reason: "Platelet antibody testing is NOT useful in the diagnostic workup of classic isolated ITP.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A newborn infant is found to have severe thrombocytopenia at birth. Physical examination reveals bilateral absence of the radii with bilateral presence of thumbs. Bone marrow evaluation demonstrates reduced megakaryocytes. What is the diagnosis?",
        opts: ["Fanconi anemia", "Thrombocytopenia Absent Radii (TAR) syndrome", "Wiskott-Aldrich syndrome", "Ehlers-Danlos syndrome"],
        correct: 1,
        reason: "Bilateral absent radii with present thumbs and thrombocytopenia indicates TAR syndrome.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "In pediatric hematology, ITP is formally classified as 'chronic ITP' when thrombocytopenia persists beyond what time duration from diagnosis?",
        opts: ["1 month", "3 months", "6 months", "1 year (12 months)"],
        correct: 2,
        reason: "Chronic ITP is defined as thrombocytopenia persisting beyond 6 months from diagnosis.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "In a pediatric patient with acute ITP and a platelet count of 12,000/mm³ with mild cutaneous petechiae only, why is prophylactic platelet transfusion NOT indicated?",
        opts: ["Platelets cannot be safely transfused to Rh-positive children", "Transfused platelets are rapidly destroyed by circulating anti-platelet antibodies without lasting benefit", "Transfusion carries an immediate risk of inducing Wiskott-Aldrich syndrome", "Platelet transfusions are reserved exclusively for patients post-splenectomy"],
        correct: 1,
        reason: "Transfused platelets are rapidly destroyed by anti-platelet antibodies without lasting benefit in ITP.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following conditions causes thrombocytopenia primarily through DECREASED bone marrow production of platelets (reduced megakaryocytes)?",
        opts: ["Primary ITP", "Aplastic anemia", "Kasabach-Merritt syndrome", "Disseminated intravascular coagulation (DIC)"],
        correct: 1,
        reason: "Aplastic anemia causes thrombocytopenia through decreased bone marrow production.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 7-year-old girl with ITP presents with profuse menorrhagia, repeated heavy epistaxis, and melena requiring hospitalization and blood transfusion. According to clinical classification of bleeding severity, how are her symptoms categorized?",
        opts: ["Mild symptoms", "Moderate symptoms", "Severe symptoms", "Life-threatening symptoms"],
        correct: 2,
        reason: "Menorrhagia, epistaxis, and melena requiring hospitalization and transfusion are severe symptoms.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following viral infections or systemic diseases are recognized causes of SECONDARY immune thrombocytopenia EXCEPT:",
        opts: ["Systemic Lupus Erythematosus (SLE)", "Hepatitis C virus (HCV)", "Human Immunodeficiency Virus (HIV)", "Vitamin C deficiency (Scurvy)"],
        correct: 3,
        reason: "Vitamin C deficiency (Scurvy) is not a recognized cause of secondary immune thrombocytopenia.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the incidence rate of life-threatening intracranial hemorrhage among children diagnosed with ITP?",
        opts: ["Less than 1%", "Approximately 5%", "Exactly 10%", "Between 15% and 20%"],
        correct: 0,
        reason: "Intracranial hemorrhage occurs in less than 1% of children with ITP.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 5-year-old boy presents with petechiae. CBC reveals a platelet count of 15,000/mm³, Hemoglobin of 6.0 g/dL (unexplained normocytic anemia), and WBC of 2,100/mm³ with neutropenia. Which investigation is mandatory prior to establishing a diagnosis?",
        opts: ["Direct Coombs test only", "Bone marrow examination", "Serum ferritin level", "Coagulation profile (PT/PTT)"],
        correct: 1,
        reason: "Pancytopenia with petechiae mandates bone marrow examination to rule out leukemia/aplastic anemia.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the standard recommended daily dose of oral Prednisone for initial medical management of pediatric ITP?",
        opts: ["0.5 mg/kg/day", "2 mg/kg/day", "10 mg/kg/day", "30 mg/kg/day"],
        correct: 1,
        reason: "Standard oral Prednisone dose for pediatric ITP is 2 mg/kg/day.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Intravenous Immunoglobulin (IVIG) administration induces a rapid rise in platelet count above 20,000/mm³ within 2 days in what percentage of pediatric ITP patients?",
        opts: ["50%", "70%", "85%", "95%"],
        correct: 2,
        reason: "IVIG induces a rapid rise in platelet count above 20,000/mm³ within 2 days in 85% of patients.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "An 8-year-old boy with end-stage renal disease on hemodialysis presents with prolonged oozing from venipuncture sites. Blood test shows a normal platelet count (280,000/mm³) and normal PT/PTT, but prolonged bleeding time due to uremia. What is the underlying mechanism of bleeding?",
        opts: ["Acquired platelet function defect (thrombocytopathy)", "Splenic sequestration of platelets", "Vascular wall inflammation", "Autoimmune antibody-mediated platelet destruction"],
        correct: 0,
        reason: "Uremia causes an acquired platelet function defect (thrombocytopathy).",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Bone marrow examination in a patient with Primary Immune Thrombocytopenia typically reveals which megakaryocytic pattern?",
        opts: ["Absence or severe hypoplasia of megakaryocytes", "Increased numbers of megakaryocytes, many appearing immature", "Replacement of megakaryocytes by malignant lymphoblasts", "Normal count with dysplastic ringed sideroblasts"],
        correct: 1,
        reason: "Bone marrow in ITP shows increased numbers of megakaryocytes, many appearing immature.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following are recognized FIRST-LINE pharmacological agents for the treatment of pediatric Primary ITP EXCEPT:",
        opts: ["Corticosteroids (e.g. Prednisone)", "Intravenous Immunoglobulin (IVIG)", "Intravenous Anti-D", "Rituximab (Anti-CD20)"],
        correct: 3,
        reason: "Rituximab is a second-line agent, not a first-line treatment for pediatric ITP.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Which statement best describes the role of splenectomy in pediatric Primary ITP?",
        opts: ["It is the first-line treatment for all newly diagnosed cases", "It is generally not preferred in pediatric ITP and reserved for severe medical failure or life-threatening bleeding", "It is routinely performed in children under 1 year of age", "It completely eliminates the risk of future viral infections"],
        correct: 1,
        reason: "Splenectomy is generally not preferred in pediatric ITP and reserved for severe medical failure or life-threatening bleeding.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 10-year-old child with chronic ITP failed steroid therapy and IVIG. The pediatric hematologist decides to start daily oral Eltrombopag. How does this medication increase the platelet count?",
        opts: ["By binding to CD20 antigens on autoreactive B cells", "By coating Rh-positive red blood cells", "By binding the thrombopoietin (TPO) receptor to drive megakaryocyte platelet production", "By blocking macrophage Fc receptors in the spleen"],
        correct: 2,
        reason: "Eltrombopag binds the thrombopoietin (TPO) receptor to drive megakaryocyte platelet production.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "In pediatric Primary ITP, a history of a preceding viral infection is typically reported how long prior to the onset of purpura?",
        opts: ["1 to 4 days", "1 to 4 weeks", "3 to 6 months", "1 year"],
        correct: 1,
        reason: "A preceding viral infection is typically reported 1 to 4 weeks prior to onset of purpura in ITP.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "When counseling parents of a child with newly diagnosed acute ITP regarding medical treatment, which evidence-based fact from clinical studies should be emphasized?",
        opts: ["Medical therapy permanently alters the natural history of the disease and guarantees zero relapse", "Pharmacological therapy raises platelet counts short-term but does not alter the natural history or prevent serious bleeding", "Splenectomy is mandatory within 30 days to prevent chronic disease", "Platelet transfusions should be given daily until the count reaches 150,000/mm³"],
        correct: 1,
        reason: "Pharmacological therapy raises platelet counts short-term but does not alter the natural history or prevent serious bleeding.",
        ref: "platelet-disorders-midterm-exam.pdf",
        diff: "M"
      }
    ]
  },

  // ============================================================
  // TOPIC 9 — PEDIATRIC ONCOLOGY
  // ============================================================
  {
    id: "oncology",
    title: "Pediatric Oncology",
    source: "oncology - final.pdf + oncology-midterm-exam.pdf",
    questions: [
      {
        q: "Leukemia is the most common childhood cancer, accounting for approximately 31% of all pediatric malignancies. Acute Lymphoblastic Leukemia (ALL) accounts for what percentage of childhood leukemias?",
        opts: ["11%", "31%", "77%", "90%"],
        correct: 2,
        reason: "ALL accounts for ~77% (three-fourths) of all pediatric leukemias.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "What is the peak age incidence for Acute Lymphoblastic Leukemia (ALL) in children?",
        opts: ["Under 6 months", "8 to 10 years of age", "2 to 3 years of age", "14 to 16 years of age"],
        correct: 2,
        reason: "ALL incidence peaks between 2 and 3 years of age.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "Which genetic condition is strongly predisposing to Acute Lymphoblastic Leukemia (ALL)?",
        opts: ["Achondroplasia", "Turner syndrome", "Marfan syndrome", "Down syndrome (Trisomy 21)"],
        correct: 3,
        reason: "Down syndrome (Trisomy 21) confers a 10- to 20-fold increased risk of developing ALL.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "Definitive diagnosis of ALL requires bone marrow examination demonstrating what minimum threshold of homogeneous lymphoblasts?",
        opts: [">25%", ">10%", ">5%", ">50%"],
        correct: 0,
        reason: "Bone marrow aspirate showing ≥ 25% lymphoblasts establishes the diagnosis of ALL.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "A 4-year-old child diagnosed with ALL starts induction chemotherapy. 48 hours later, lab results show hyperuricemia, hyperkalemia, hyperphosphatemia, and secondary hypocalcemia. What is this life-threatening metabolic emergency called?",
        opts: ["Refeeding syndrome", "Disseminated intravascular coagulation", "Tumor lysis syndrome", "Aplastic crisis"],
        correct: 2,
        reason: "Massive cell lysis during induction chemo causes Tumor Lysis Syndrome.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "In the treatment of ALL, multiagent induction chemotherapy given for 4 weeks consists of which drug regimen?",
        opts: ["Bleomycin, Etoposide, and Cisplatin", "Cisplatin, Doxorubicin, and Cyclophosphamide", "Methotrexate and Fluorouracil", "Vincristine, Corticosteroid (Prednisone/Dexamethasone), and Asparaginase"],
        correct: 3,
        reason: "4-week ALL induction regimen: Vincristine, Corticosteroid, and L-Asparaginase.",
        ref: "oncology - final.pdf",
        diff: "M"
      },
      {
        q: "Which pediatric tumor originates from neural crest cells and is characterized by elevated urinary catecholamines and N-myc oncogene amplification?",
        opts: ["Wilms Tumor", "Hodgkin Lymphoma", "Neuroblastoma", "Retinoblastoma"],
        correct: 2,
        reason: "Neuroblastoma originates from neural crest cells and secretes urinary catecholamines.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old child presents with periorbital ecchymosis ('raccoon eyes'), proptosis, and a hard abdominal mass crossing the midline. What is the diagnosis?",
        opts: ["Wilms tumor", "Acute Lymphoblastic Leukemia", "Metastatic Neuroblastoma", "Non-Hodgkin Lymphoma"],
        correct: 2,
        reason: "Orbital metastases of Neuroblastoma cause periorbital ecchymosis ('raccoon eyes') and proptosis.",
        ref: "oncology - final.pdf",
        diff: "M"
      },
      {
        q: "What is the overall 5-year survival rate for children treated for ALL under modern protocols?",
        opts: [">85%", "50%", "20%", "100%"],
        correct: 0,
        reason: "Modern risk-adapted ALL protocols achieve > 85% 5-year overall survival.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "Reed-Sternberg cells (multinucleated giant cells with 'owl-eye' inclusion-like nucleoli) are diagnostic for:",
        opts: ["Hodgkin Lymphoma", "Non-Hodgkin Lymphoma", "Burkitt Lymphoma", "Neuroblastoma"],
        correct: 0,
        reason: "Reed-Sternberg cells (multinucleated giant cells with owl-eye nucleoli) pathognomonically define Hodgkin Lymphoma.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "Burkitt Lymphoma is an aggressive B-cell Non-Hodgkin Lymphoma strongly associated with Epstein-Barr Virus (EBV) infection. Histologically, biopsy exhibits which classic appearance?",
        opts: ["'Hair-on-end' pattern", "'Starry-sky' pattern (macrophages ingesting apoptotic debris amidst lymphoblasts)", "Homer-Wright rosettes", "Orphan Annie eye nuclei"],
        correct: 1,
        reason: "Burkitt lymphoma displays a characteristic 'starry-sky' histological appearance on tissue section.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old child is found by his parents to have a firm, smooth, painless abdominal mass on one side while bathing. Urinalysis shows microscopic hematuria. Blood pressure is 135/85 mmHg. The mass does NOT cross the midline. What is the diagnosis?",
        opts: ["Neuroblastoma", "Hepatoblastoma", "Wilms Tumor (Nephroblastoma)", "Splenic hematoma"],
        correct: 2,
        reason: "A smooth, firm, flank mass that does not cross the midline in a toddler is classic for Wilms Tumor.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "Abdominal palpation during physical examination of a suspected Wilms Tumor must be performed with extreme gentleness to avoid:",
        opts: ["Severe intestinal obstruction", "Sudden hypertensive crisis", "Acute splenic infarction", "Tumor capsule rupture and peritoneal seeding"],
        correct: 3,
        reason: "Vigorous palpation of Wilms tumor can rupture the tumor capsule, spilling tumor cells into the peritoneum.",
        ref: "oncology - final.pdf",
        diff: "M"
      },
      {
        q: "Which syndrome encompasses Aniridia, Genitourinary anomalies, and Range of mental retardation associated with Wilms Tumor?",
        opts: ["WAGR syndrome", "Beckwith-Wiedemann syndrome", "Denys-Drash syndrome", "Li-Fraumeni syndrome"],
        correct: 0,
        reason: "WAGR syndrome combines Wilms tumor, Aniridia, Genitourinary malformations, and Retardation.",
        ref: "oncology - final.pdf",
        diff: "M"
      },
      {
        q: "In children under 2 years of age, the most common type of brain tumor arises in which intracranial anatomical location?",
        opts: ["Supratentorial cerebral cortex", "Infratentorial (posterior fossa)", "Sella turcica", "Spinal cord"],
        correct: 1,
        reason: "Infratentorial (posterior fossa) brain tumors predominate in pediatric age groups.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "Urinary excretion of catecholamine metabolites (Vanillylmandelic acid [VMA] and Homovanilic acid [HVA]) is elevated in over 90% of children with:",
        opts: ["Wilms tumor", "Retinoblastoma", "Neuroblastoma", "Rhabdomyosarcoma"],
        correct: 2,
        reason: "Elevated urinary VMA and HVA occur in over 90% of neuroblastoma cases due to catecholamine metabolism.",
        ref: "oncology - final.pdf",
        diff: "E"
      },
      {
        q: "All of the following are recognized laboratory abnormalities in Acute Tumor Lysis Syndrome EXCEPT:",
        opts: ["Hyperuricemia", "Hyperkalemia", "Hyperphosphatemia", "Hypercalcemia"],
        correct: 3,
        reason: "Tumor Lysis Syndrome causes HYPOCALCEMIA secondary to severe hyperphosphatemia.",
        ref: "oncology - final.pdf",
        diff: "M"
      },
      {
        q: "What percentage of all childhood malignancies is accounted for by leukemia?",
        opts: ["15%", "22%", "31%", "45%"],
        correct: 2,
        reason: "Leukemia accounts for approximately 31% of all childhood cancers.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old boy presents with a 2-week history of fatigue, generalized bone pain, fever, and diffuse petechiae. Complete blood count shows Hb 7.2 g/dL, WBC 8,500/mm³, and platelets 35,000/mm³. Peripheral blood film reveals circulating blasts. Which of the following is essential to confirm the diagnosis?",
        opts: ["Lumbar puncture", "Bone marrow examination showing >25% lymphoblasts", "Lymph node excisional biopsy", "Serum uric acid and LDH level"],
        correct: 1,
        reason: "Bone marrow exam with >25% homogeneous lymphoblasts is essential for confirmation.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the best initial diagnostic imaging test for a suspected Wilms tumor (nephroblastoma)?",
        opts: ["Abdominal CT scan", "Abdominal Ultrasound", "Plain abdominal radiograph", "MRI abdomen"],
        correct: 1,
        reason: "Ultrasound is the best initial test; CT scan is confirmatory.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Which subtype of leukemia represents approximately 77% of all childhood leukemias?",
        opts: ["Acute myelogenous leukemia (AML)", "Acute lymphoblastic leukemia (ALL)", "Chronic myelogenous leukemia (CML)", "Juvenile myelomonocytic leukemia (JMML)"],
        correct: 1,
        reason: "ALL constitutes 77% of childhood leukemias.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 16-year-old adolescent boy presents with a 1-month history of weight loss, low-grade fever, and night sweats. Physical examination reveals a 4.5 cm non-tender, firm cervical lymph node. Histological examination of the node is pathognomonic for Hodgkin lymphoma. Which characteristic cell type is observed?",
        opts: ["Auer rod-containing myeloblast", "Reed-Sternberg cell with multilobulated nuclei", "Homogeneous lymphoblasts >25%", "Small noncleaved B-cell"],
        correct: 1,
        reason: "Reed-Sternberg (RS) cell is pathognomonic for Hodgkin lymphoma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following genetic conditions or predisposing factors are associated with Acute Lymphoblastic Leukemia (ALL) EXCEPT:",
        opts: ["Down syndrome", "Fanconi anemia", "Neurofibromatosis type 1", "Tuberous sclerosis"],
        correct: 3,
        reason: "Tuberous sclerosis is associated with pheochromocytoma, not ALL.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "In pediatric oncology, brain tumors rank as the:",
        opts: ["Most common malignancy", "Second most frequent malignancy", "Third most frequent malignancy", "Fourth most frequent malignancy"],
        correct: 1,
        reason: "Brain tumors are the second most frequent malignancy in children after leukemia.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Tumor lysis syndrome following initial chemotherapy in Acute Lymphoblastic Leukemia typically results in which set of metabolic disturbances?",
        opts: ["Hypouricemia, hypokalemia, and hypercalcemia", "Hyperuricemia, hyperkalemia, hyperphosphatemia, and hypocalcemia", "Hyperuricemia, hyponatremia, and hypercalcemia", "Hypouricemia, hyperkalemia, and hypophosphatemia"],
        correct: 1,
        reason: "TLS triad: hyperuricemia, hyperkalemia, hyperphosphatemia leading to secondary hypocalcemia.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old child is brought to the clinic due to periorbital ecchymosis, proptosis, and bluish skin nodules. On abdominal examination, a hard, smooth mass is palpated in the flank. Urine analysis demonstrates elevated levels of homovanillic acid (HVA) and vanillylmandelic acid (VMA). What is the most likely diagnosis?",
        opts: ["Wilms tumor", "Neuroblastoma", "Pheochromocytoma", "Rhabdomyosarcoma"],
        correct: 1,
        reason: "Proptosis, periorbital ecchymosis, blueberry skin, flank mass, and high HVA/VMA indicate neuroblastoma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 4-year-old girl is diagnosed with precursor B-cell Acute Lymphoblastic Leukemia. Which combination of drugs constitutes the standard 4-week multiagent chemotherapy regimen for remission induction?",
        opts: ["Mercaptopurine, methotrexate, and cyclophosphamide", "Vincristine, corticosteroid (prednisone/dexamethasone), and asparaginase", "Doxorubicin, cisplatin, and etoposide", "Cytarabine, daunorubicin, and thioguanine"],
        correct: 1,
        reason: "Remission induction includes vincristine, corticosteroid, and asparaginase.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the peak age of incidence for Acute Lymphoblastic Leukemia (ALL) in children?",
        opts: ["Less than 1 year", "2-3 years", "6-8 years", "12-15 years"],
        correct: 1,
        reason: "Peak incidence of ALL is 2-3 years.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 14-year-old girl presents with short stature and progressive visual disturbances. Examination reveals bitemporal visual field defects. Head CT scan shows calcification in the sella turcica. What is the most likely diagnosis?",
        opts: ["Medulloblastoma", "Juvenile pilocytic astrocytoma", "Craniopharyngioma", "Optic nerve glioma"],
        correct: 2,
        reason: "Supratentorial sellar mass with calcification, short stature, and bitemporal defects is craniopharyngioma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Lymphoma is classified as the:",
        opts: ["Most common cancer among children", "Second most common cancer among children", "Third most common cancer among children", "Fourth most common cancer among children"],
        correct: 2,
        reason: "Lymphoma is the 3rd most common cancer in children.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "What is the best initial diagnostic test for all pediatric brain tumors?",
        opts: ["Brain MRI", "Head CT scan", "Skull X-ray", "Positron emission tomography (PET) scan"],
        correct: 1,
        reason: "Head CT scan is the best initial test for all brain tumors.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A mother brings her 3-year-old daughter to the clinic after noticing soft, grape-like tissue structures protruding from the child's vagina. Biopsy confirms a malignant mesenchymal tumor. Which histological subtype of rhabdomyosarcoma is this?",
        opts: ["Embryonal", "Botryoid", "Alveolar", "Pleomorphic"],
        correct: 1,
        reason: "Botryoid subtype forms grape-like projections in genitourinary tracts.",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "Wilms tumor (nephroblastoma) is classically associated with all of the following congenital abnormalities EXCEPT:",
        opts: ["Aniridia", "Hemihypertrophy", "Genitourinary anomalies", "Opsomyoclonus"],
        correct: 3,
        reason: "Opsomyoclonus is associated with neuroblastoma, not Wilms tumor.",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "What is the classic anatomical site for juvenile pilocytic astrocytoma in children?",
        opts: ["Cerebral cortex", "Cerebellum", "Sella turcica", "Brainstem"],
        correct: 1,
        reason: "Classic site for juvenile pilocytic astrocytoma is the cerebellum.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 4-year-old boy with neurofibromatosis type 1 presents with decreased visual acuity, unilateral proptosis, and papilledema. Examination reveals optic atrophy and strabismus. What is the most likely diagnosis?",
        opts: ["Craniopharyngioma", "Optic nerve glioma", "Medulloblastoma", "Retinoblastoma"],
        correct: 1,
        reason: "Optic nerve glioma is associated with NF1 and presents with visual loss, proptosis, and optic atrophy.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Pheochromocytoma is a catecholamine-secreting tumor originating from which cell type?",
        opts: ["Neural crest neuroblasts", "Chromaffin cells", "Glial cells", "Lymphoblasts"],
        correct: 1,
        reason: "Pheochromocytoma originates from chromaffin cells.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Regarding the treatment of craniopharyngioma, which modality has NO role in management?",
        opts: ["Surgical resection", "Radiation therapy", "Chemotherapy", "Endocrine replacement therapy"],
        correct: 2,
        reason: "The slides explicitly state there is 'no role for chemotherapy' in craniopharyngioma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 10-year-old boy presents with episodic severe headaches, palpitations, sweating, and abdominal pain. On physical examination, his blood pressure is 160/100 mmHg. Laboratory investigation confirms elevated urinary catecholamines and metabolites. CT scan shows a mass in the right adrenal medulla. Which preoperative management step is essential prior to surgical removal?",
        opts: ["Hydration and allopurinol administration", "Alpha and beta adrenergic blockade and fluid administration", "Intrathecal chemotherapy", "Low-dose cranial radiation"],
        correct: 1,
        reason: "Preoperative alpha/beta blockade and fluids are essential prior to surgical removal of pheochromocytoma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "The peak age of incidence for Hodgkin Lymphoma in the pediatric population is:",
        opts: ["2-3 years", "5-8 years", "10-12 years", "15-19 years"],
        correct: 3,
        reason: "Peak incidence of Hodgkin lymphoma is 15-19 years.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following are recognized histological subtypes of Hodgkin Lymphoma EXCEPT:",
        opts: ["Lymphocytic predominant", "Nodular sclerosing", "Mixed cellularity", "Small noncleaved cell"],
        correct: 3,
        reason: "Small noncleaved cell is a subtype of Non-Hodgkin Lymphoma (Burkitt).",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 7-year-old boy with a history of Epstein-Barr virus infection presents with a rapidly expanding abdominal mass and bowel obstruction. Biopsy shows small noncleaved cells. Which histological category of Non-Hodgkin Lymphoma does this represent?",
        opts: ["T-cell lymphoblastic lymphoma", "B-cell small noncleaved cell lymphoma", "Large cell lymphoma", "Nodular sclerosing lymphoma"],
        correct: 1,
        reason: "Small noncleaved cell lymphoma is of B-cell lineage and associated with EBV.",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "In Acute Lymphoblastic Leukemia (ALL), initial white blood cell count indicates a poor prognosis when it exceeds:",
        opts: ["5,000/mm³", "10,000/mm³", "50,000/mm³", "100,000/mm³"],
        correct: 3,
        reason: "Initial WBC >100,000/mm³ indicates a poor prognosis.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "The maintenance phase of ALL chemotherapy lasts for 2-3 years and typically consists of which primary agents?",
        opts: ["Vincristine, dexamethasone, and asparaginase", "Mercaptopurine and methotrexate (with intermittent vincristine and corticosteroid)", "Cyclophosphamide and doxorubicin", "Intrathecal cytarabine alone"],
        correct: 1,
        reason: "Maintenance consists of mercaptopurine and methotrexate with intermittent vincristine/corticosteroid.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 6-year-old boy presents with progressive dyspnea, nonproductive cough, and dilated congested neck vessels. Chest X-ray reveals a large anterior mediastinal mass. Biopsy of the mass demonstrates T-cell lineage lymphoblastic malignancy. What clinical syndrome does this anterior mediastinal mass produce?",
        opts: ["Horner syndrome", "Mediastinal syndrome", "Tumor lysis syndrome", "WAGR syndrome"],
        correct: 1,
        reason: "Anterior mediastinal mass causes mediastinal syndrome (cough, dyspnea, congested neck vessels).",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "Neuroblastoma arises from neural crest cells due to amplification or mutation of which oncogene?",
        opts: ["Philadelphia chromosome (BCR-ABL)", "N-myc", "RET proto-oncogene", "WT1 gene"],
        correct: 1,
        reason: "Neuroblastoma arises from neural crest cells due to N-myc oncogene.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following is NOT a typical clinical presentation or B symptom of Hodgkin Lymphoma?",
        opts: ["Painless, firm cervical lymphadenopathy", "Night sweats and weight loss", "Pruritus and fever", "Precocious puberty and short stature"],
        correct: 3,
        reason: "Precocious puberty and short stature are endocrine signs of brain tumors.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "What is the most reliable method for definitive diagnosis and histological staging of Hodgkin Lymphoma?",
        opts: ["Fine needle aspiration of lymph node", "Excisional biopsy of lymph node", "Bone marrow aspiration", "Serum erythrocyte sedimentation rate (ESR)"],
        correct: 1,
        reason: "Excisional biopsy of the node is the most reliable diagnostic method.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "While abdominal ultrasound is the best initial test for Wilms tumor, which imaging modality serves as the confirmatory diagnostic test?",
        opts: ["Plain abdominal X-ray", "Abdominal CT scan", "MIBG scan", "Renal arteriography"],
        correct: 1,
        reason: "Abdominal CT scan is the confirmatory test for Wilms tumor.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 22-month-old infant presents with sudden onset of gait ataxia and jerky, erratic eye movements (opsoclonus). Abdominal examination reveals a firm midline mass. Urine catecholamine metabolites are markedly elevated. Which paraneoplastic presentation is demonstrated here?",
        opts: ["Horner syndrome", "Opsomyoclonus syndrome", "Mediastinal syndrome", "Cushing triad"],
        correct: 1,
        reason: "Ataxia and opsoclonus define the opsomyoclonus syndrome in neuroblastoma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "What is the most frequent anatomical site of origin for rhabdomyosarcoma in children (accounting for ~40% of cases)?",
        opts: ["Genitourinary tract", "Head and neck", "Extremities", "Trunk"],
        correct: 1,
        reason: "Head and neck is the most common site (40%) for rhabdomyosarcoma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Initial presentation of neuroblastoma frequently occurs as metastatic disease. Common sites of metastasis specified in the lecture include all of the following EXCEPT:",
        opts: ["Orbit (proptosis, periorbital ecchymosis)", "Long bones and skull", "Skin (bluish nodules)", "Sella turcica"],
        correct: 3,
        reason: "Metastatic sites include bones, orbit, bone marrow, LNs, liver, and skin; sella turcica is not a site.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "The consolidation phase of Acute Lymphoblastic Leukemia treatment primarily focuses on:",
        opts: ["Oral mercaptopurine for 3 years", "Intensive central nervous system therapy by intrathecal chemotherapy", "Surgical excision of bulky lymph nodes", "Immediate stem cell transplantation"],
        correct: 1,
        reason: "Consolidation focuses on intensive CNS therapy via intrathecal chemo.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 7-year-old girl with cutaneous hypopigmented macules and facial angiofibromas presents with an abdominal mass. Imaging with MIBG shows uptake in the adrenal medulla, and urine catecholamines are elevated. Which systemic disease association is described in the slides for this adrenal tumor?",
        opts: ["MEN 1", "Tuberous sclerosis", "WAGR syndrome", "Fanconi anemia"],
        correct: 1,
        reason: "Pheochromocytoma is associated with Tuberous sclerosis.",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "Which medication is administered during initial chemotherapy to prevent uric acid formation in Tumor Lysis Syndrome?",
        opts: ["Asparaginase", "Allopurinol", "Dexamethasone", "Vincristine"],
        correct: 1,
        reason: "Allopurinol is given to prevent uric acid formation.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "The overall cure rate for early-stage Hodgkin Lymphoma in children is:",
        opts: [">50%", ">60%", ">70%", ">90%"],
        correct: 3,
        reason: "Overall cure rate is >90% in early stages of Hodgkin lymphoma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A mother brings her 3-year-old child for a routine checkup after finding a smooth abdominal mass while bathing the child. The child appears otherwise well, but vital signs reveal a blood pressure of 135/88 mmHg. What is the cause of hypertension in Wilms tumor?",
        opts: ["Direct secretion of catecholamines by chromaffin cells", "Renal ischemia secondary to tumor compression", "Intracranial hypertension", "Excessive aldosterone production"],
        correct: 1,
        reason: "Hypertension in Wilms tumor is due to renal ischemia.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Comparing the growth rates of common infratentorial brain tumors, medulloblastoma and astrocytoma are characterized as:",
        opts: ["Medulloblastoma is slowly growing, whereas astrocytoma is rapidly growing", "Medulloblastoma is rapidly growing, whereas astrocytoma is slowly growing", "Both are rapidly growing invasive malignancies", "Both are benign, non-growing lesions"],
        correct: 1,
        reason: "Medulloblastoma grows rapidly; astrocytoma grows slowly.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following statements regarding testicular involvement or relapse in ALL is FALSE?",
        opts: ["Testicular swelling or pain can occur as part of organ infiltration", "Testicular relapse occurs in 1-2% of boys with ALL at initial presentation", "Testicular relapse is the most common cause of ALL relapse, occurring in 80% of patients", "Relapse of ALL in general occurs in 15-20% of cases"],
        correct: 2,
        reason: "Testicular relapse occurs in only 1-2% of boys; CNS relapse is more frequent.",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "While head CT is the best initial test for brain tumors, which modality is the best imaging test overall?",
        opts: ["Positron emission tomography (PET)", "Magnetic Resonance Imaging (MRI)", "Cerebral angiography", "Functional CT"],
        correct: 1,
        reason: "MRI is the best imaging test overall for brain tumors.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "A 1-year-old infant presents with ptosis, miosis, enophthalmos, and anhidrosis on the left side of the face. Chest radiograph demonstrates a posterior mediastinal mass along the sympathetic chain. Which clinical syndrome is present?",
        opts: ["Horner syndrome", "Superior vena cava syndrome", "Cushing syndrome", "Guillain-Barré syndrome"],
        correct: 0,
        reason: "Ptosis, miosis, enophthalmos, and anhidrosis define Horner syndrome.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "In addition to CT and MRI, which specific nuclear medicine scan is taken up by chromaffin tissue anywhere in the body to localize pheochromocytoma?",
        opts: ["Technetium-99m bone scan", "I131 metaiodobenzylguanidine (MIBG) scan", "Gallium-67 scan", "Iodine-131 thyroid scan"],
        correct: 1,
        reason: "I131 MIBG scan is taken up by chromaffin tissue.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "The overall 5-year survival rate for pediatric Acute Lymphoblastic Leukemia (ALL) is:",
        opts: [">50%", ">65%", ">75%", ">85%"],
        correct: 3,
        reason: "Prognosis for ALL is >85% 5-year survival.",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following are recognized histological types of rhabdomyosarcoma EXCEPT:",
        opts: ["Embryonal (60%, intermediate prognosis)", "Botryoid (grape-like projection)", "Alveolar (15%, very poor prognosis)", "Reed-Sternberg subtype"],
        correct: 3,
        reason: "Reed-Sternberg cell is characteristic of Hodgkin lymphoma, not rhabdomyosarcoma.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "A 5-year-old boy in complete remission from ALL presents to the clinic with severe morning headaches, vomiting, and isolated VI cranial nerve palsy (diplopia). Lumbar puncture reveals lymphoblasts in the CSF. What complication has occurred?",
        opts: ["Acute bacterial meningitis", "CNS relapse of ALL", "Vincristine neurotoxicity", "Tumor lysis syndrome"],
        correct: 1,
        reason: "CNS relapse presents with increased ICP signs or isolated cranial nerve palsies.",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      },
      {
        q: "The primary management of craniopharyngioma consists of:",
        opts: ["Multiagent systemic chemotherapy alone", "Surgery and radiation therapy", "Intrathecal methotrexate and vincristine", "High-dose steroid therapy only"],
        correct: 1,
        reason: "Craniopharyngioma treatment is surgery and radiation (no role for chemotherapy).",
        ref: "oncology-midterm-exam.pdf",
        diff: "E"
      },
      {
        q: "Bilateral kidney involvement occurs in what percentage of Wilms tumor cases?",
        opts: ["1%", "7%", "15%", "25%"],
        correct: 1,
        reason: "Wilms tumor is bilateral in 7% of cases.",
        ref: "oncology-midterm-exam.pdf",
        diff: "M"
      },
      {
        q: "In a newly diagnosed child with Acute Lymphoblastic Leukemia, a lumbar puncture is routinely performed at diagnostic workup for which specific reason?",
        opts: ["To confirm the diagnosis of bone marrow failure", "To detect central nervous system (CNS) involvement", "To relieve increased intracranial pressure", "To inject allopurinol into the subarachnoid space"],
        correct: 1,
        reason: "Lumbar puncture is performed to detect CNS involvement.",
        ref: "oncology-midterm-exam.pdf",
        diff: "H"
      }
    ]
  },

  // ============================================================
  // TOPIC 10 — GIT BLEEDING
  // ============================================================
  {
    id: "git_bleeding",
    title: "GIT Bleeding",
    source: "GIT bleeding.pdf + GIT_Bleeding_Midterm_Exam.pdf",
    questions: [
      {
        q: "Upper gastrointestinal bleeding (UGIB) is defined as bleeding derived from a source proximal to:",
        opts: ["Gastroesophageal junction", "Ligament of Treitz", "Pyloric sphincter", "Ileocecal valve"],
        correct: 1,
        reason: "Upper GI bleeding originates proximal to the Ligament of Treitz (duodenojejunal junction).",
        ref: "GIT bleeding.pdf",
        diff: "E"
      },
      {
        q: "In a 2-day-old neonate presenting with bloody emesis, which test differentiates swallowed maternal blood from active neonatal upper GI bleeding?",
        opts: ["Direct Coomb's test", "Apt-Downey alkali denaturation test", "Upper GI endoscopy", "Stool guaiac card test"],
        correct: 1,
        reason: "Apt-Downey test uses alkali to distinguish fetal Hb (pink/resistant) from maternal adult Hb.",
        ref: "GIT bleeding.pdf",
        diff: "M"
      },
      {
        q: "In the Sheffield Score for Pediatric GI Bleeding, a total score exceeding what threshold indicates a need for urgent endoscopy?",
        opts: ["3", "8", "5", "12"],
        correct: 1,
        reason: "Sheffield GI Bleeding Score > 8 indicates severe hemorrhage requiring urgent endoscopy.",
        ref: "GIT bleeding.pdf",
        diff: "H"
      },
      {
        q: "A 3-year-old child presents with severe hematemesis from esophageal varices due to portal hypertension. Which class of intravenous vasoactive drugs should be administered immediately?",
        opts: ["Terlipressin, Somatostatin, or Octreotide", "Furosemide or Spironolactone", "Dopamine or Dobutamine", "Epinephrine or Atropine"],
        correct: 0,
        reason: "Terlipressin, Somatostatin, or Octreotide reduce splanchnic blood flow in variceal bleeding.",
        ref: "GIT bleeding.pdf",
        diff: "M"
      },
      {
        q: "What is the recommended IV dose of Proton Pump Inhibitor (PPI) in pediatric patients with active upper GI bleeding to maintain 24-hour gastric pH > 6?",
        opts: ["0.1 mg/kg", "10 mg/kg bolus", "1-3 mg/kg as a 1-hour infusion", "50 mg/kg continuous drip"],
        correct: 2,
        reason: "IV Omeprazole/Esomeprazole 1–3 mg/kg infusion maintains gastric pH > 6 to stabilize clots.",
        ref: "GIT bleeding.pdf",
        diff: "M"
      },
      {
        q: "In a child with upper GI bleeding and prolonged INR > 1.5, coagulation factor deficits should be corrected immediately by administering:",
        opts: ["Fresh Frozen Plasma (10 mL/kg)", "Packed Red Blood Cells", "Platelet concentrate", "Oral Ferrous sulfate"],
        correct: 0,
        reason: "Fresh Frozen Plasma (10 mL/kg) replaces clotting factors in coagulopathy with INR > 1.5.",
        ref: "GIT bleeding.pdf",
        diff: "E"
      },
      {
        q: "Which of the following is the leading cause of upper GI bleeding in children aged 2 to 5 years presenting with portal hypertension?",
        opts: ["Mallory-Weiss tears", "Esophageal varices", "Meckel's diverticulum", "Corrosive ingestion"],
        correct: 1,
        reason: "Esophageal varices secondary to portal vein thrombosis are the leading cause of UGIB in this age.",
        ref: "GIT bleeding.pdf",
        diff: "M"
      },
      {
        q: "Sudden onset of melena combined with bilious emesis in a previously healthy nondistended infant raises strong suspicion of:",
        opts: ["Intestinal malrotation with volvulus", "Gastroesophageal reflux", "Hypertrophic pyloric stenosis", "Anal fissure"],
        correct: 0,
        reason: "Bilious emesis and GI bleeding in an infant indicate surgical volvulus until proven otherwise.",
        ref: "GIT bleeding.pdf",
        diff: "M"
      },
      {
        q: "A 10-month-old infant presents with sudden onset of severe colicky abdominal pain every 15-20 minutes, drawing up knees, vomiting, and passage of 'currant jelly' red bloody stool. A sausage-shaped mass is palpated in the right upper quadrant. What is the diagnosis?",
        opts: ["Intussusception", "Volvulus neonatorum", "Hypertrophic pyloric stenosis", "Hirschsprung disease"],
        correct: 0,
        reason: "Triad of intussusception: severe colicky pain, currant jelly stool, and sausage-shaped mass.",
        ref: "GIT bleeding.pdf",
        diff: "M"
      },
      {
        q: "Which of the following is the most common presentation of Meckel's Diverticulum in a child under 2 years of age?",
        opts: ["Jaundice and ascites", "Profuse rice-water watery diarrhea", "Severe dysphagia and heartburn", "Painless massive maroon or dark red rectal bleeding"],
        correct: 3,
        reason: "Meckel's diverticulum presents classically in toddlers with painless massive dark red blood per rectum.",
        ref: "GIT bleeding.pdf",
        diff: "E"
      },
      {
        q: "In a child presenting with lower GI bleeding, painless massive dark red blood per rectum without signs of obstruction is the classic presentation of:",
        opts: ["Meckel's Diverticulum", "Anal fissure", "Internal hemorrhoids", "Colonic polyps"],
        correct: 0,
        reason: "Painless, episodic, massive dark red lower GI bleeding is the classic presentation of Meckel's.",
        ref: "GIT bleeding.pdf",
        diff: "E"
      },
      {
        q: "In a child presenting with upper GI bleeding due to portal hypertension, which intravenous vasoactive drugs can be administered to reduce portal pressure?",
        opts: ["Terlipressin, Somatostatin, or Octreotide", "Dopamine or Dobutamine", "Furosemide or Hydrochlorothiazide", "Epinephrine or Atropine"],
        correct: 0,
        reason: "Terlipressin, Somatostatin, or Octreotide infusion lowers portal pressure in variceal bleeding.",
        ref: "GIT bleeding.pdf",
        diff: "M"
      },
      {
        q: "Upper gastrointestinal bleeding (UGIB) in pediatric practice is anatomically defined as bleeding originating proximal to the:",
        opts: ["Ligament of Treitz", "Ileocecal valve", "Sphincter of Oddi", "Pyloric sphincter"],
        correct: 0,
        reason: "UGIB is defined as bleeding derived from a source proximal to the ligament of Treitz.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "Lower gastrointestinal bleeding (LGIB) accounts for approximately what proportion of all acute pediatric GI bleeding cases?",
        opts: ["One-half (50%)", "One-third (33%)", "One-fifth (20%)", "One-tenth (10%)"],
        correct: 2,
        reason: "LGIB accounts for approximately one-fifth (20%) of acute pediatric GI bleeding cases.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "A 2-day-old full-term neonate in the nursery presents with dark bloody emesis. The mother was noted to have severely cracked nipples. Which test is indicated to differentiate swallowed maternal blood from active neonatal GI bleeding?",
        opts: ["Kleihauer-Betke test", "Apt-Downey test", "Direct Coombs test", "Stool guaiac test"],
        correct: 1,
        reason: "Apt-Downey test differentiates swallowed maternal blood from active neonatal GI bleeding.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "The passage of black, tarry stools (melena) most commonly indicates a bleeding source located:",
        opts: ["Distal to the splenic flexure", "Within the sigmoid colon", "At the anal canal", "Proximal to the ligament of Treitz"],
        correct: 3,
        reason: "Melena indicates a bleeding source proximal to the ligament of Treitz.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "A newborn presenting with hematemesis undergoes an Apt-Downey test. After mixing the emesis fluid with 0.25M NaOH, the solution retains a pink color. What is the correct interpretation of this test result?",
        opts: ["True neonatal upper GI bleeding", "Ingested maternal blood", "Hemolyzed maternal red cells", "Non-blood organic pigment"],
        correct: 0,
        reason: "Pink color after NaOH indicates fetal hemoglobin, confirming true neonatal upper GI bleeding.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following are recognized causes of upper GI bleeding in an infant EXCEPT:",
        opts: ["Stress gastritis", "Vitamin K deficiency", "Cow's milk protein allergy", "Peutz-Jeghers polyposis"],
        correct: 3,
        reason: "Peutz-Jeghers polyposis causes lower GI bleeding, not upper GI bleeding in infants.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "In a 3-year-old child presenting with hematemesis from an esophageal source, which etiology should be prominently considered?",
        opts: ["Dieulafoy lesion", "Esophageal varices", "Aortoenteric fistula", "Hemobilia"],
        correct: 1,
        reason: "Esophageal varices should be prominently considered in a 3-year-old with hematemesis from an esophageal source.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "Which rare gastric vascular abnormality causing massive upper GI bleeding in older children consists of a dilated submucosal artery?",
        opts: ["Peutz-Jeghers hamartoma", "Meckel's diverticulum", "Dieulafoy lesion", "Portal Hypertensive Gastropathy"],
        correct: 2,
        reason: "Dieulafoy lesion is a dilated submucosal artery causing massive upper GI bleeding.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "A 3-week-old previously healthy infant presents with the sudden onset of melena accompanied by bilious vomiting. On exam, the abdomen is non-distended. Which emergency condition must be suspected immediately?",
        opts: ["Intestinal malrotation with volvulus", "Intussusception", "Peptic ulcer disease", "Mallory-Weiss tear"],
        correct: 0,
        reason: "Bilious emesis and melena in an infant indicate intestinal malrotation with volvulus until proven otherwise.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "A 6-year-old boy presents with hematemesis following multiple episodes of forceful, violent non-bloody vomiting due to gastroenteritis. What is the most likely diagnosis?",
        opts: ["Gastric varices", "Mallory-Weiss tear", "Duodenal ulcer", "Esophageal stricture"],
        correct: 1,
        reason: "Forceful vomiting followed by hematemesis indicates Mallory-Weiss tear.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old child ingested a button battery 30 minutes ago. While awaiting endoscopic removal, what is the recommended pre-hospital administration regimen of honey to mitigate tissue injury?",
        opts: ["5 mL every 30 minutes up to 3 doses", "10 mL every 10 minutes up to 6 doses", "20 mL single bolus only", "15 mL every 1 hour up to 4 doses"],
        correct: 1,
        reason: "Honey 10 mL every 10 minutes up to 6 doses is recommended for button battery ingestion.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "H"
      },
      {
        q: "According to the Sheffield Score for Pediatric GI Bleeding, a total cumulative score greater than which value indicates the need for endoscopic intervention?",
        opts: ["4", "6", "8", "10"],
        correct: 2,
        reason: "Sheffield Score >8 indicates need for endoscopic intervention.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "What is considered the best clinical indicator of acute blood loss and intravascular volume depletion in a child with GI bleeding?",
        opts: ["Hemoglobin level on admission", "Orthostatic changes in heart rate and blood pressure", "Serum blood urea nitrogen (BUN)", "Presence of melena"],
        correct: 1,
        reason: "Orthostatic changes in heart rate and blood pressure are the best clinical indicator of acute blood loss.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "Orthostatic vital sign changes indicating significant hemodynamic blood loss are defined as a postural pulse rate increase of at least:",
        opts: ["10 beats/min", "20 beats/min", "30 beats/min", "40 beats/min"],
        correct: 1,
        reason: "A postural pulse rate increase of at least 20 beats/min indicates significant hemodynamic blood loss.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "A 7-year-old child presents with massive hematemesis. Physical exam reveals splenomegaly, palmar erythema, and caput medusae. What is the primary underlying cause of this bleeding?",
        opts: ["Caustic esophageal ingestion", "Henoch-Schonlein purpura", "Portal hypertension with esophageal varices", "Meckel's diverticulum"],
        correct: 2,
        reason: "Splenomegaly, palmar erythema, and caput medusae indicate portal hypertension with esophageal varices.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "When preparing a patient for a Hemoccult (fecal occult blood) test, which of the following substances does NOT need to be restricted prior to testing?",
        opts: ["Red meat (beef, lamb, pork)", "Nonsteroidal anti-inflammatory drugs (NSAIDs)", "Supplemental Vitamin C (>250 mg/day)", "Paracetamol (Acetaminophen)"],
        correct: 3,
        reason: "Paracetamol does not need to be restricted prior to Hemoccult testing.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "The passage of classic melena (black tarry stool) typically requires an acute blood loss of at least:",
        opts: ["60-100 mL", "10-20 mL", "150-200 mL", "250-300 mL"],
        correct: 0,
        reason: "Melena typically requires acute blood loss of at least 60-100 mL.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "In a child at high risk of rebleeding from esophageal varices, continuous Octreotide infusion should be maintained for at least how many days?",
        opts: ["2 days", "5 days", "7 days", "10 days"],
        correct: 1,
        reason: "Continuous Octreotide infusion should be maintained for at least 5 days.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following pharmacologic agents reduces portal pressure by causing splanchnic vasoconstriction during active variceal bleeding?",
        opts: ["Omeprazole", "Tranexamic acid", "Octreotide", "Pantoprazole"],
        correct: 2,
        reason: "Octreotide reduces portal pressure by causing splanchnic vasoconstriction.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "The recommended continuous intravenous infusion dose for Octreotide in pediatric variceal bleeding is:",
        opts: ["2-5 mcg/kg per hour", "10-15 mcg/kg per hour", "0.1-0.5 mcg/kg per hour", "20-25 mcg/kg per hour"],
        correct: 0,
        reason: "Octreotide infusion dose is 2-5 mcg/kg per hour.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "H"
      },
      {
        q: "A 2-year-old boy presents with painless, profuse maroon rectal bleeding. Technetium-99m pertechnetate scintigraphy is performed. What is the diagnostic accuracy of this scan for detecting Meckel's diverticulum?",
        opts: ["50%", "70%", "80%", "90%"],
        correct: 3,
        reason: "Technetium-99m pertechnetate scanning identifies Meckel diverticulum with 90% accuracy.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "H"
      },
      {
        q: "Anatomically, lower gastrointestinal bleeding (LGIB) refers to bleeding derived from a site distal to the duodenojejunal junction, which is demarcated by the:",
        opts: ["Sphincter of Oddi", "Ligament of Treitz", "Ileocecal junction", "Pyloric valve"],
        correct: 1,
        reason: "LGIB refers to bleeding distal to the ligament of Treitz at the duodenojejunal junction.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "An 18-month-old infant presents with sudden onset of severe colicky abdominal pain every 15 minutes, knees drawn up, vomiting, and passage of dark red 'currant jelly' stool. What is the most likely diagnosis?",
        opts: ["Intussusception", "Anal fissure", "Duodenal ulcer", "Peutz-Jeghers polyp"],
        correct: 0,
        reason: "Classic presentation of intussusception with bloody stool and colicky pain.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "A 4-year-old child presents with bright red blood coating the outside of hard stool and crying during defecation. Digital rectal exam is otherwise unremarkable. Most likely diagnosis?",
        opts: ["Meckel's diverticulum", "Juvenile polyp", "Anal fissure", "Henoch-Schönlein purpura"],
        correct: 2,
        reason: "Blood on surface of stool is usually of anorectal origin, with anal fissure being most common.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "Which statement regarding Hemoccult stool testing is FALSE?",
        opts: ["It relies on peroxidase activity of hemoglobin", "Red meat consumption within 3 days prior can cause false-positive results", "High intake of Vitamin C (>250 mg/day) leads to false-positive results", "NSAIDs should be discontinued 7 days prior to testing"],
        correct: 2,
        reason: "Vitamin C causes false-NEGATIVE results (inhibits peroxidase reaction), not false-positive.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "H"
      },
      {
        q: "In a hemodynamically unstable child with severe acute GI bleeding and clinical signs of shock, what is the initial fluid resuscitation bolus requirement?",
        opts: ["5 mL/kg of 5% Dextrose", "20 mL/kg of Normal Saline", "50 mL/kg of Lactated Ringer's", "10 mL/kg of 20% Albumin"],
        correct: 1,
        reason: "Management of hemodynamically significant bleeds includes rapid IV volume replacement with NS 20 mL/kg.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "During active upper GI bleeding, continuous intravenous PPI infusion (1-3 mg/kg) is aimed at maintaining 24-hour gastric pH above what threshold?",
        opts: ["pH > 3", "pH > 4", "pH > 5", "pH > 6"],
        correct: 3,
        reason: "IV PPI infusion at 1-3 mg/kg aims to maintain 24-h gastric pH > 6 in active bleeding.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "A neonate vomits dark brown material. Apt-Downey testing is performed by adding NaOH to the emetic supernatant, resulting in a color change to yellow-brown. This result confirms:",
        opts: ["Presence of fetal hemoglobin", "Presence of swallowed maternal blood", "Congenital bleeding diathesis", "Gastric mucosal ulceration"],
        correct: 1,
        reason: "Maternal Hb (HbA) is alkali-labile and denatures to yellow-brown upon adding NaOH.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "What is the primary hemodynamic mechanism by which non-selective beta-blockers (e.g., propranolol) lower portal pressure in pediatric portal hypertension?",
        opts: ["Decreasing cardiac output and causing splanchnic vasoconstriction", "Direct dilation of the hepatic sinusoids", "Increasing renal sodium excretion", "Direct venodilation of esophageal varices"],
        correct: 0,
        reason: "NSBBs decrease cardiac output and vasoconstrict splanchnic vessels via beta-1 and beta-2 blockade.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "A 5-year-old child presents with colicky abdominal pain, knee pain, microscopic hematuria, and bloody diarrhea. Physical exam reveals non-thrombocytopenic palpable purpura over the buttocks and lower limbs. Most likely cause of LGIB?",
        opts: ["Peutz-Jeghers syndrome", "Hemolytic-Uremic Syndrome", "Henoch-Schönlein purpura", "Ulcerative colitis"],
        correct: 2,
        reason: "HSP presents with palpable purpura on lower limbs/buttocks, abdominal pain, joint pain, and LGIB.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "Which endoscopic therapeutic modality is currently preferred as the mechanical treatment of choice for non-variceal upper GI bleeding?",
        opts: ["Sclerotherapy", "Argon plasma coagulation", "Epinephrine injection", "Endoclips"],
        correct: 3,
        reason: "Endoclips are currently the preferred mechanical therapy for non-variceal GIB.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "Endoscopic epinephrine injection successfully arrests active non-variceal upper GI bleeding in approximately what percentage of cases?",
        opts: ["80%", "50%", "30%", "95%"],
        correct: 0,
        reason: "Epinephrine injection arrests about 80% of non-variceal bleeding.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "A 6-year-old child with portal hypertension experiences massive, life-threatening variceal hemorrhage refractory to medical therapy while awaiting emergency endoscopy. Which balloon tamponade device can be used in extremis?",
        opts: ["Sengstaken tube", "Foley catheter", "Cantor tube", "Miller-Abbott tube"],
        correct: 0,
        reason: "A Sengstaken tube is a useful tool in extremis in a child with known varices.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "H"
      },
      {
        q: "Nasogastric (NG) aspiration and saline lavage are indicated in acute GI bleeding for all of the following purposes EXCEPT:",
        opts: ["Confirming intragastric blood and checking rate of bleeding", "Clearing the gastric field for subsequent endoscopy", "Preventing hepatic encephalopathy in cirrhotic patients", "Routine diagnostic evaluation in patients with KNOWN esophageal varices"],
        correct: 3,
        reason: "NG tube may lead to trauma/bleeding in cases of known varices (except on free drainage if necessary).",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "The standard therapeutic oral dose range for non-selective beta-blockers (propranolol) in pediatric portal hypertension is:",
        opts: ["0.1 to 0.5 mg/kg/day", "0.5 to 1.5 mg/kg/day", "2 to 8 mg/kg/day", "10 to 15 mg/kg/day"],
        correct: 2,
        reason: "Propranolol dose ranges from 2 mg/kg per day to 8 mg/kg per day.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "A 2-month-old infant recently switched from breast milk to cow's milk formula presents with vomiting, irritability, and streaks of blood mixed in loose stools. Most likely diagnosis?",
        opts: ["Cow's milk protein allergy / enterocolitis", "Hirschsprung's disease", "Intussusception", "Duodenal ulcer"],
        correct: 0,
        reason: "Milk or soy enterocolitis/allergic colitis causes vomiting with blood staining after introducing these foods.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "Which total Sheffield GI Bleeding Score threshold indicates a high risk requiring prompt upper GI endoscopy?",
        opts: ["Score > 3", "Score > 8", "Score > 12", "Score > 15"],
        correct: 1,
        reason: "Total score > 8 indicates need for endoscopy.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "An infant presenting with upper GI bleeding is found to have an INR of 1.8 and prolonged PTT. What is the recommended management to correct this coagulopathy?",
        opts: ["Packed Red Blood Cells 20 mL/kg", "Platelet concentrate 5 mL/kg", "Fresh Frozen Plasma (FFP) 10 mL/kg", "Cryoprecipitate 1 unit/kg"],
        correct: 2,
        reason: "INR >1.5 or abnormal PTT should be corrected by administration of FFP (10 mL/kg).",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "Empiric parenteral Vitamin K administration in infants presenting with acute GI bleeding should be given at what dose?",
        opts: ["1-2 mg/dose IV", "10-15 mg/dose IV", "0.1-0.2 mg/dose IV", "20 mg/dose IV"],
        correct: 0,
        reason: "Parenteral vitamin K (1-2 mg/dose) should be administered empirically to infants.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "A 10-year-old boy presents with severe ongoing melena. Esophagogastroduodenoscopy (EGDS), colonoscopy, and Technetium-99m Meckel scan are all negative. What is the next recommended diagnostic step in the LGIB management algorithm if active bleeding persists?",
        opts: ["Repeat barium swallow", "Stool culture for Clostridium difficile", "Exploratory laparotomy", "Arteriography or CT-angiography"],
        correct: 3,
        reason: "If EGDS/Colonoscopy negative and still active bleeding, next step is arteriography or CT-angiography.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "H"
      },
      {
        q: "Under which clinical circumstance can a brisk upper gastrointestinal bleed present with bright red blood per rectum (hematochezia) rather than melena?",
        opts: ["When gastric acid secretion is markedly elevated", "When GI transit time is extremely rapid", "When the patient is concurrently taking oral iron", "When bleeding originates from a duodenal diverticulum"],
        correct: 1,
        reason: "Massive upper GI bleeding can produce bright red blood per rectum if GI transit time is rapid.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "When initiating Octreotide therapy for acute variceal hemorrhage in a child, what is the recommended bolus administration protocol prior to starting continuous infusion?",
        opts: ["5 mcg/kg IV over 15 minutes", "20 mcg/kg IV rapid push", "1 mcg/kg IV over 1 hour", "50 mcg/kg IV over 30 minutes"],
        correct: 0,
        reason: "Initiation with a 1-h bolus may be needed (5 mcg/kg over 15 minutes).",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following parameters are scored as part of the Sheffield Score for Pediatric GI Bleeding EXCEPT:",
        opts: ["Prolonged capillary refill time (4 points)", "Need for blood transfusion (6 points)", "Serum bilirubin level >5 mg/dL", "Hb drop of more than 20 g/L (3 points)"],
        correct: 2,
        reason: "Sheffield score parameters do not include serum bilirubin.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "The anatomical junction demarcating Upper GI Bleeding from Lower GI Bleeding is the duodenojejunal junction, anchored by the:",
        opts: ["Ligament of Treitz", "Pyloric sphincter", "Ileocecal valve", "Sphincter of Oddi"],
        correct: 0,
        reason: "Ligament of Treitz at duodenojejunal junction is the anatomical boundary.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "A 7-year-old child presenting with recurrent rectal bleeding is found on physical exam to have dark hyperpigmented spots on the lips and buccal mucosa. Which GI lesion is characteristically present?",
        opts: ["Peutz-Jeghers hamartomatous polyps", "Esophageal varices", "Meckel's diverticulum", "Crohn's disease fistulas"],
        correct: 0,
        reason: "Mucocutaneous pigmentation (lips/mouth) is characteristic of Peutz-Jeghers polyposis.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "In a hemodynamically stabilized pediatric patient presenting with lower GI bleeding, therapeutic colonoscopy should ideally be performed within what timeframe?",
        opts: ["Within 6 hours", "Within 24 hours", "Within 48 hours", "Within 7 days"],
        correct: 1,
        reason: "Endoscopy/colonoscopy should be performed when stabilized, preferably within 24 h of presentation.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "H"
      },
      {
        q: "In children suspected of having a Meckel's diverticulum, what is the reported diagnostic accuracy of Technetium-99m (99mTc) pertechnetate scintigraphy?",
        opts: ["50%", "75%", "90%", "99%"],
        correct: 2,
        reason: "Technetium-99m pertechnetate scanning has 90% accuracy for Meckel diverticulum.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following definitions correctly describes Upper Gastrointestinal Bleeding (UGIB)?",
        opts: ["Bleeding derived proximal to the ligament of Treitz", "Bleeding derived distal to the ileocecal valve", "Bleeding derived between ligament of Treitz and rectum", "Bleeding originating exclusively from the esophageal lumen"],
        correct: 0,
        reason: "UGIB is defined as bleeding derived from a source proximal to the ligament of Treitz.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following are common causes of lower GI bleeding listed for infants (under 2 years of age) EXCEPT:",
        opts: ["Necrotizing enterocolitis", "Volvulus", "Dieulafoy lesion", "Hirschsprung's disease"],
        correct: 2,
        reason: "Dieulafoy lesion is a gastric cause of UGIB in older children, not an infant LGIB cause.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "M"
      },
      {
        q: "A 6-year-old child with cirrhosis and portal hypertension presents with severe hematemesis. Following initial IV fluid resuscitation, which medication should be started AS SOON AS POSSIBLE to reduce portal blood flow?",
        opts: ["High-dose IV Omeprazole", "Intravenous Vitamin K", "Oral Propranolol", "Intravenous Octreotide"],
        correct: 3,
        reason: "Vasoactive drugs (Octreotide/Terlipressin) should be administered as soon as possible when portal hypertension is suspected.",
        ref: "GIT_Bleeding_Midterm_Exam.pdf",
        diff: "H"
      }
    ]
  },

  // ============================================================
  // TOPIC 11 — RICKETS
  // ============================================================
  {
    id: "rickets",
    title: "Rickets",
    source: "Rickets (undergraduates).pdf + rickets.pdf",
    questions: [
      {
        q: "Which of the following is the most sensitive biochemical marker for detecting active nutritional rickets in children?",
        opts: ["Serum total calcium", "Markedly elevated Alkaline Phosphatase (ALP)", "Serum inorganic phosphate", "1,25-dihydroxyvitamin D"],
        correct: 1,
        reason: "Markedly elevated serum Alkaline Phosphatase (ALP) is the most sensitive marker of active rickets.",
        ref: "Rickets (undergraduates).pdf",
        diff: "E"
      },
      {
        q: "What is the earliest clinical cranial sign of active rickets in an infant under 6 months of age?",
        opts: ["Frontal bossing", "Craniotabes (ping-pong ball feel on skull palpation)", "Delayed dentition", "Harrison's sulcus"],
        correct: 1,
        reason: "Craniotabes (ping-pong feel of skull) is the earliest cranial sign in infants under 6 months.",
        ref: "Rickets (undergraduates).pdf",
        diff: "E"
      },
      {
        q: "Harrison's sulcus in active rickets is caused by:",
        opts: ["Softening of parietal skull bones", "Horizontal groove along the lower chest corresponding to diaphragm insertion on softened ribs", "Beading at costochondral junctions", "Widening of distal radial epiphysis"],
        correct: 1,
        reason: "Harrison's sulcus is a horizontal groove caused by diaphragm pull on soft rachitic ribs.",
        ref: "Rickets (undergraduates).pdf",
        diff: "E"
      },
      {
        q: "Which plain radiograph site is the imaging modality of choice to evaluate classic metaphyseal cupping, fraying, and splaying in rickets?",
        opts: ["Wrist and knee plain radiographs", "Skull anteroposterior view", "Chest radiograph", "Pelvic X-ray"],
        correct: 0,
        reason: "Plain radiographs of wrist and knee best demonstrate metaphyseal cupping and fraying.",
        ref: "Rickets (undergraduates).pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old child with nutritional rickets is treated with Stoss therapy. What is the single high-dose oral Cholecalciferol regimen?",
        opts: ["10,000-20,000 IU", "300,000-600,000 IU", "50,000-100,000 IU", "1,000,000-2,000,000 IU"],
        correct: 1,
        reason: "Stoss therapy is a single high-dose administration of 300,000–600,000 IU Vitamin D.",
        ref: "Rickets (undergraduates).pdf",
        diff: "M"
      },
      {
        q: "What is the primary genetic defect in Vitamin D-Dependent Type 1 Rickets (VDRR-1)?",
        opts: ["Defect in calcitriol Vitamin D receptor (VDR)", "Intestinal calcium malabsorption", "Renal tubular phosphate wasting", "Homozygous inactivating mutation in CYP27B1 gene causing 1-alpha-hydroxylase deficiency"],
        correct: 3,
        reason: "VDDR-1 is caused by inactivating CYP27B1 mutations impairing 1-alpha-hydroxylase.",
        ref: "Rickets (undergraduates).pdf",
        diff: "H"
      },
      {
        q: "What is the recommended daily oral Vitamin D prophylactic dose for infants from birth until 12 months of age?",
        opts: ["100 IU/day", "5,000 IU/day", "1,000 IU/day", "400 IU/day"],
        correct: 3,
        reason: "Daily Vitamin D prophylaxis for infants up to 12 months is 400 IU/day.",
        ref: "Rickets (undergraduates).pdf",
        diff: "E"
      },
      {
        q: "A 14-month-old infant presents with delayed walking, genu varum (bow-legs), and widening of wrists. Wrist X-ray shows fraying, cupping, and widening of the radial metaphysis. What is the diagnosis?",
        opts: ["Active Nutritional Rickets", "Osteogenesis Imperfecta", "Scurvy", "Achondroplasia"],
        correct: 0,
        reason: "Metaphyseal cupping, fraying, and splaying on wrist X-ray confirm active nutritional rickets.",
        ref: "Rickets (undergraduates).pdf",
        diff: "E"
      },
      {
        q: "Vitamin D-Resistant (X-linked Hypophosphatemic) Rickets is caused by mutations in the PHEX gene, leading to excessive circulating levels of which hormone?",
        opts: ["Parathyroid Hormone (PTH)", "Fibroblast Growth Factor 23 (FGF-23)", "Calcitonin", "Growth Hormone"],
        correct: 1,
        reason: "X-linked hypophosphatemic rickets is driven by elevated FGF-23 causing renal phosphate wasting.",
        ref: "Rickets (undergraduates).pdf",
        diff: "H"
      },
      {
        q: "In Vitamin D-Dependent Rickets Type II (VDDR-II), failure to respond to high doses of Vitamin D is due to:",
        opts: ["Renal tubular agenesis", "Absence of 25-hydroxylase in liver", "End-organ resistance caused by mutations in the Vitamin D Receptor (VDR) gene", "Defective skin synthesis"],
        correct: 2,
        reason: "VDDR-II involves end-organ resistance due to mutations in the Vitamin D Receptor (VDR).",
        ref: "Rickets (undergraduates).pdf",
        diff: "H"
      },
      {
        q: "In addition to Vitamin D administration, daily oral elemental Calcium supplementation provided during rickets therapy should be:",
        opts: ["10-20 mg/kg/day", "500 mg/kg/day", "100 mg/kg/day", "30-50 mg/kg/day"],
        correct: 2,
        reason: "Elemental Calcium supplementation during active rickets treatment is ~100 mg/kg/day (500–1000 mg total).",
        ref: "Rickets (undergraduates).pdf",
        diff: "M"
      },
      {
        q: "Radiological healing of rickets following Vitamin D Stoss therapy is evidenced on plain X-rays within 2 to 4 weeks by the appearance of:",
        opts: ["A dense line of provisional calcification at the metaphyseal-epiphyseal junction", "Complete erosion of cortical bone", "Epiphyseal slippage", "Periosteal elevation without calcification"],
        correct: 0,
        reason: "Re-calcification appears as a dense transverse line of provisional calcification across the metaphysis.",
        ref: "Rickets (undergraduates).pdf",
        diff: "M"
      },
      {
        q: "Rickets is defined as a disorder of impaired mineralisation affecting growing bone and cartilage prior to which anatomical event?",
        opts: ["Closure of cranial sutures", "Epiphyseal fusion", "Eruption of primary dentition", "Formation of primary ossification centers"],
        correct: 1,
        reason: "Rickets affects cartilage & bone before epiphyseal fusion.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A 16-month-old toddler who started walking 2 months ago is brought to the clinic due to progressive outward curving of both legs. Physical examination confirms genu varum and wrist widening. Which mechanism best explains the lower extremity deformity in this toddler?",
        opts: ["Epiphyseal avulsion due to ligamentous laxity", "Accumulation of unmineralised osteoid deforming under weight-bearing stress", "Early closure of the medial femoral growth plate", "Subperiosteal bone resorption caused by calcitonin excess"],
        correct: 1,
        reason: "Unmineralised osteoid soft bone bends under weight-bearing stress in toddlers.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "Which form of rickets accounts for more than 90% of all cases worldwide?",
        opts: ["X-linked hypophosphataemic rickets", "Vitamin D-dependent rickets type 1", "Nutritional rickets", "Vitamin D-dependent rickets type 2"],
        correct: 2,
        reason: "Nutritional rickets accounts for >90% of cases worldwide.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "Rickets is experiencing a resurgence in developed nations. All of the following are recognized contributing factors EXCEPT:",
        opts: ["Increased use of sunscreen", "Reduced outdoor physical activity", "High dietary calcium intake", "Shifts toward indoor sedentary lifestyles"],
        correct: 2,
        reason: "High calcium intake is protective; sunscreen & indoor habits drive resurgence.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "In the vitamin D metabolic pathway, cholecalciferol (D3) synthesized in the skin undergoes its first hydroxylation step in the liver to form:",
        opts: ["25-hydroxyvitamin D [25-OH-D]", "1,25-dihydroxyvitamin D", "7-dehydrocholesterol", "Calcitroic acid"],
        correct: 0,
        reason: "Hepatic 25-hydroxylation produces 25-hydroxyvitamin D (25-OH-D).",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old boy presents with severe lower limb bowing and short stature. Laboratory tests show low serum phosphate, normal serum 25-OH vitamin D, and normal calcium. Elevated levels of FGF23 are detected. What is the primary renal effect of FGF23 in this patient?",
        opts: ["Increases calcium reabsorption in the distal tubule", "Stimulates 25-hydroxylation in the renal cortex", "Enhances parathyroid hormone secretion directly", "Promotes renal phosphate wasting and suppresses 1α-hydroxylase"],
        correct: 3,
        reason: "FGF23 promotes renal phosphate wasting and inhibits 1α-hydroxylase.",
        ref: "rickets.pdf",
        diff: "H"
      },
      {
        q: "In active nutritional rickets caused by vitamin D deficiency, the classic biochemical profile includes all of the following EXCEPT:",
        opts: ["Elevated alkaline phosphatase (ALP)", "Elevated parathyroid hormone (PTH)", "Low serum 25-OH vitamin D (<20 ng/mL)", "Markedly elevated serum inorganic phosphate"],
        correct: 3,
        reason: "Nutritional rickets causes hypophosphataemia due to secondary PTH elevation.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "Softening of the skull bones that yields a 'ping-pong ball' sensation upon palpation in an infant with rickets is termed:",
        opts: ["Craniotabes", "Frontal bossing", "Caput succedaneum", "Harrison's sulcus"],
        correct: 0,
        reason: "Craniotabes is softening of skull bones yielding ping-pong ball sensation.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "What is the recommended duration of daily oral cholecalciferol therapy (2,000-5,000 IU/day) for treating nutritional rickets in children?",
        opts: ["1 to 2 weeks", "3 to 4 weeks", "8 to 12 weeks", "6 to 12 months"],
        correct: 2,
        reason: "Daily oral cholecalciferol (2,000–5,000 IU/day) is given for 8–12 weeks.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "An 18-month-old child with delayed walking and wrist swelling undergoes plain radiography of the wrist. The radiograph demonstrates metaphyseal cupping, fraying, and splaying with widening of the growth plate. What is the primary pathological process responsible for these radiological signs?",
        opts: ["Subperiosteal cortical hemorrhage", "Premature calcification of cartilage", "Aseptic necrosis of distal radial epiphysis", "Disorganized growth plate with chondrocytes failing to undergo normal hypertrophy and apoptosis"],
        correct: 3,
        reason: "Chondrocytes fail hypertrophy/apoptosis leading to widened, frayed physis.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "End-organ resistance to active vitamin D due to a defect in the Vitamin D Receptor (VDR) is characteristic of:",
        opts: ["Vitamin D-dependent rickets type 2", "Vitamin D-dependent rickets type 1", "Nutritional rickets", "X-linked hypophosphataemic rickets"],
        correct: 0,
        reason: "VDDR Type 2 involves VDR defect causing end-organ resistance.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "In the diagnostic evaluation of nutritional rickets, a serum 25-OH vitamin D level is considered low when it falls below:",
        opts: ["10 ng/mL", "20 ng/mL", "35 ng/mL", "50 ng/mL"],
        correct: 1,
        reason: "Low 25-OH-D is defined as <20 ng/mL in nutritional rickets.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A 10-month-old infant presents with severe rickets. Blood investigations reveal low serum calcium, low serum phosphate, elevated PTH, and markedly decreased 1,25-dihydroxyvitamin D despite normal 25-OH vitamin D levels. Genetic testing reveals a mutation in the CYP27B1 gene encoding 1α-hydroxylase. What is the correct diagnosis?",
        opts: ["Vitamin D-dependent rickets type 1", "Vitamin D-dependent rickets type 2", "Nutritional rickets", "X-linked hypophosphataemic rickets"],
        correct: 0,
        reason: "VDDR Type 1 is caused by 1α-hydroxylase (CYP27B1) defect.",
        ref: "rickets.pdf",
        diff: "H"
      },
      {
        q: "Plain radiographs of the wrist and knee are the imaging modality of choice in rickets. Which of the following is NOT a classic radiological feature of active rickets?",
        opts: ["Metaphyseal cupping and fraying", "Splaying of the metaphysis", "Cortical thickening and sclerosis", "Widening of the physis (growth plate)"],
        correct: 2,
        reason: "Rickets shows osteopenia and cortical thinning, not cortical sclerosis.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A horizontal groove formed along the lower border of the thorax corresponding to the costal insertion of the diaphragm in a rickety child is known as:",
        opts: ["Rachitic rosary", "Harrison's sulcus", "Pigeon chest", "Funnel chest"],
        correct: 1,
        reason: "Harrison's sulcus is horizontal groove at diaphragm insertion site.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "According to pediatric guidelines for rickets prevention, daily oral vitamin D supplementation should be initiated from birth for:",
        opts: ["Only preterm infants born before 32 weeks", "Only infants raised in high-altitude regions", "Infants consuming more than 1.5 liters of formula daily", "All breastfed infants"],
        correct: 3,
        reason: "Daily oral vitamin D is recommended for all breastfed infants from birth.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "A 5-year-old child is referred for orthopedic evaluation due to 'knock-knees' (genu valgum) that developed over the past year. Blood work confirms active rickets. Why did this child present with genu valgum rather than genu varum?",
        opts: ["Genu valgum occurs exclusively in hypophosphataemic rickets", "Deformity patterns shift from genu varum in toddlers to genu valgum in older children due to altered mechanical alignment", "Genu valgum is caused by calcitonin deficiency", "Genu varum only occurs before 6 months of age"],
        correct: 1,
        reason: "Mechanical forces shift deformities from genu varum (toddlers) to genu valgum (older).",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "High-dose stoss therapy for nutritional rickets involves an oral cholecalciferol dose of:",
        opts: ["10,000-20,000 IU", "50,000-100,000 IU", "300,000-600,000 IU", "1,000,000-2,000,000 IU"],
        correct: 2,
        reason: "Stoss therapy dose is 300,000–600,000 IU cholecalciferol.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "Which of the following statements regarding hormonal regulation of bone mineral metabolism is FALSE?",
        opts: ["Parathyroid hormone (PTH) raises serum calcium by stimulating bone resorption", "Calcitonin lowers serum calcium by inhibiting osteoclasts", "FGF23 suppresses 1α-hydroxylase enzyme activity in the kidney", "Parathyroid hormone (PTH) increases renal phosphate reabsorption, causing hyperphosphataemia"],
        correct: 3,
        reason: "PTH causes phosphaturia (decreased reabsorption), lowering serum phosphate.",
        ref: "rickets.pdf",
        diff: "H"
      },
      {
        q: "All of the following statements regarding nutritional rickets are true EXCEPT:",
        opts: ["It accounts for more than 90% of global rickets cases", "It is caused by inadequate vitamin D intake, limited sunlight, or low dietary calcium", "Serum 1,25-dihydroxyvitamin D levels are always severely depressed", "Secondary hyperparathyroidism leads to phosphorus wasting"],
        correct: 2,
        reason: "1,25-OH-D may be normal or elevated due to PTH stimulation in nutritional rickets.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "Which bone cell type is primarily responsible for bone resorption during remodelling?",
        opts: ["Osteoclast", "Osteoblast", "Osteocyte", "Chondrocyte"],
        correct: 0,
        reason: "Osteoclasts mediate bone resorption; osteoblasts form bone.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A 3-month-old exclusively breastfed infant with no vitamin D supplementation presents to the emergency room with carpopedal spasm and irritability. Serum total calcium is 6.2 mg/dL, serum phosphate is low-normal, and ALP is 1,200 U/L. What is the most immediate underlying cause of these neuromuscular symptoms?",
        opts: ["Direct osteoclast inhibition", "Hypercalcaemia causing muscle rigidity", "Direct toxicity of ALP on motor endplates", "Hypocalcaemia resulting from acute vitamin D deficiency before secondary hyperparathyroidism fully restores calcium"],
        correct: 3,
        reason: "Early vit D deficiency causes hypocalcaemia before PTH fully compensates.",
        ref: "rickets.pdf",
        diff: "H"
      },
      {
        q: "Following the initiation of treatment for nutritional rickets, what is the recommended initial follow-up interval to assess biochemical healing?",
        opts: ["Every 2 to 4 weeks", "Every 2 to 3 months", "Every 6 months", "Annually"],
        correct: 0,
        reason: "Initial follow-up is every 2–4 weeks until biochemical healing.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "The 'rachitic rosary' sign in rickets is caused by palpable enlargement at which anatomical site?",
        opts: ["Distal radial and ulnar epiphyses", "Costochondral junctions of the ribs", "Anterior fontanelle margins", "Proximal tibial metaphyses"],
        correct: 1,
        reason: "Rachitic rosary is costochondral junction enlargement.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "An 8-year-old girl with untreated chronic rickets presents with deep bone pain in her femora. Plain radiograph demonstrates narrow transverse radiolucent lines perpendicular to the cortical bone margin. These lesions represent:",
        opts: ["Greenstick fractures", "Osteosarcoma osteolytic lesions", "Looser's zones (pseudofractures)", "Osteomyelitis cortical erosions"],
        correct: 2,
        reason: "Looser's zones (pseudofractures) are transverse radiolucent lines in older kids.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "Populations at increased risk for developing nutritional rickets include all of the following EXCEPT:",
        opts: ["Breastfed infants who do not receive vitamin D supplementation", "Children with dark skin living in high-latitude regions", "Children on exclusively vegetarian or vegan diets without adequate calcium", "Formula-fed infants consuming more than 1 liter per day of vitamin D-fortified formula"],
        correct: 3,
        reason: "Formula-fed infants consuming vitamin D-fortified formula are protected, not at increased risk.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "A 14-month-old infant presents with delayed walking, widened wrists, and genu varum. The pediatrician suspects active nutritional rickets. Which laboratory test should be ordered first as the most sensitive biochemical indicator of disease activity?",
        opts: ["Serum alkaline phosphatase (ALP)", "Serum total calcium", "Serum 1,25-dihydroxyvitamin D", "24-hour urinary calcium excretion"],
        correct: 0,
        reason: "Serum alkaline phosphatase (ALP) is the most sensitive biochemical indicator of active rickets.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "Which imaging modality is considered the modality of choice for diagnosing and evaluating rickets in pediatric practice?",
        opts: ["Computed tomography (CT) of the spine", "Plain radiographs of the wrist and knee", "Magnetic resonance imaging (MRI) of the femur", "Radionuclide bone scan"],
        correct: 1,
        reason: "Plain radiographs of the wrist and knee are the modality of choice for rickets.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "What is the most common hereditary form of rickets?",
        opts: ["Autosomal recessive vitamin D-dependent rickets type 1", "Autosomal dominant osteopetrosis", "Hypophosphatasia", "X-linked hypophosphataemic rickets (XLH)"],
        correct: 3,
        reason: "X-linked hypophosphataemic rickets (XLH) is the most common hereditary form of rickets.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "A 5-month-old infant is examined during a routine well-child visit. On palpation of the parietal and occipital bones, the examiner feels focal areas of soft bone that yield under light pressure like a ping-pong ball. This physical finding is known as:",
        opts: ["Frontal bossing", "Macween sign", "Craniotabes", "Setting-sun sign"],
        correct: 2,
        reason: "Craniotabes is the ping-pong ball feel of the skull in rickets.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A 4-year-old child diagnosed with X-linked hypophosphataemic rickets (XLH) requires targeted medical therapy. What is the standard medical management regimen for this condition?",
        opts: ["High-dose oral vitamin D3 alone", "Oral phosphate in divided doses combined with active vitamin D analogues", "Intravenous calcium gluconate infusions", "High-dose calcitonin nasal spray"],
        correct: 1,
        reason: "XLH is treated with oral phosphate in divided doses combined with active vitamin D analogues.",
        ref: "rickets.pdf",
        diff: "H"
      },
      {
        q: "UV-B solar radiation converts which chemical precursor in human skin into cholecalciferol (Vitamin D3)?",
        opts: ["7-dehydrocholesterol", "Ergosterol", "25-hydroxycholesterol", "Squalene"],
        correct: 0,
        reason: "UV-B converts 7-dehydrocholesterol to cholecalciferol in skin.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A 14-month-old child presents with severe skeletal deformities of rickets and total alopecia (loss of scalp hair and eyebrows). Laboratory evaluation reveals marked hypocalcaemia and extremely elevated serum 1,25-dihydroxyvitamin D levels. High-dose vitamin D therapy fails to improve the condition. What is the diagnosis?",
        opts: ["Nutritional vitamin D deficiency", "Vitamin D-dependent rickets type 1", "Vitamin D-dependent rickets type 2", "Renal osteodystrophy"],
        correct: 2,
        reason: "VDDR Type 2 presents with severe resistance to 1,25(OH)2D3 and alopecia.",
        ref: "rickets.pdf",
        diff: "H"
      },
      {
        q: "The conversion of 25-hydroxyvitamin D to active 1,25-dihydroxyvitamin D in the kidney is catalyzed by which enzyme?",
        opts: ["25-hydroxylase", "1α-hydroxylase", "24-hydroxylase", "Alkaline phosphatase"],
        correct: 1,
        reason: "1α-hydroxylase catalyzes conversion of 25-OH-D to 1,25-(OH)2-D in the kidney.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A 2-year-old child with a history of unmanaged nutritional rickets is evaluated by a pediatric dentist. Examination reveals delayed eruption of primary teeth and defectively mineralized enamel. Which term correctly describes this dental manifestation?",
        opts: ["Amelogenesis imperfecta", "Dentinogenesis imperfecta", "Fluorosis", "Enamel hypoplasia"],
        correct: 3,
        reason: "Enamel hypoplasia is the dental manifestation of rickets.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "Rickets causes a variety of systemic and neuromuscular signs. Which of the following is NOT a typical systemic feature of rickets?",
        opts: ["Hypotonia and proximal muscle weakness", "Hyperreflexia and muscular spasticity", "Irritability and restlessness", "Short stature and growth failure"],
        correct: 1,
        reason: "Rickets causes hypotonia, not hyperreflexia or spasticity.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "Parathyroid hormone (PTH) raises serum calcium levels through which combined actions?",
        opts: ["Stimulating bone resorption and increasing renal calcium reabsorption", "Inhibiting osteoclasts and increasing renal calcium excretion", "Suppressing 1α-hydroxylase and inhibiting intestinal absorption", "Decreasing bone resorption and increasing renal phosphate reabsorption"],
        correct: 0,
        reason: "PTH stimulates bone resorption and increases renal calcium reabsorption.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "A 2-year-old child with nutritional rickets has been on oral cholecalciferol and calcium for 8 weeks. A follow-up wrist radiograph is performed to assess response. Which radiological change indicates healing of rickets?",
        opts: ["Further widening of the physis", "Appearance of new metaphyseal fraying", "Narrowing of the growth plate and a dense line of calcification at the zone of provisional calcification", "Progressive cortical thinning of the radius"],
        correct: 2,
        reason: "Healing is indicated by narrowing of the growth plate and a dense line of calcification at the zone of provisional calcification.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "When treating nutritional rickets with oral vitamin D, why is concurrent calcium supplementation necessary?",
        opts: ["To prevent rapid urinary excretion of vitamin D", "To support bone remineralization and prevent hungry bone hypocalcaemia", "To inhibit hepatic 25-hydroxylation", "To prevent hypervitaminosis D toxicity"],
        correct: 1,
        reason: "Calcium supplementation supports bone remineralization and prevents hungry bone hypocalcaemia.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "Which bone cell type synthesizes and deposits osteoid (unmineralised bone matrix)?",
        opts: ["Osteoclast", "Chondrocyte", "Monocyte", "Osteoblast"],
        correct: 3,
        reason: "Osteoblasts synthesize and deposit osteoid.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "A 3-year-old boy has severe leg bowing. Blood tests show normal serum calcium (9.6 mg/dL), low serum phosphate (2.1 mg/dL), elevated ALP, normal 25-OH vitamin D, and elevated renal phosphate clearance. What is the primary underlying pathogenetic mechanism?",
        opts: ["Renal phosphate wasting leading to impaired hydroxyapatite crystal formation", "Failure of 1α-hydroxylation in the liver", "Complete resistance of osteoblasts to calcitonin", "Dietary calcium malabsorption in the ileum"],
        correct: 0,
        reason: "Renal phosphate wasting leads to impaired hydroxyapatite crystal formation.",
        ref: "rickets.pdf",
        diff: "H"
      },
      {
        q: "What is the primary physiological action of calcitonin on bone metabolism?",
        opts: ["Raises serum calcium by stimulating osteoblasts", "Increases renal phosphate wasting", "Lowers serum calcium by inhibiting osteoclasts", "Activates 1α-hydroxylase in the kidney"],
        correct: 2,
        reason: "Calcitonin lowers serum calcium by inhibiting osteoclasts.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "A mother of an 18-month-old child with nutritional rickets struggles with daily medication compliance. The pediatrician decides to administer stoss therapy. How is high-dose stoss therapy (300,000-600,000 IU cholecalciferol) properly prescribed?",
        opts: ["As a single dose or divided over several days", "As a daily dose for 6 consecutive months", "As a weekly injection for 2 years", "As a single intravenous bolus over 24 hours"],
        correct: 0,
        reason: "Stoss therapy is given as a single dose or divided over several days.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "A 15-month-old boy with nutritional rickets presents with delayed motor milestones. He is unable to sit unassisted and exhibits generalized floppy muscle tone ('pot belly' appearance and proximal muscle weakness). This muscular manifestation is primarily due to:",
        opts: ["Primary muscular dystrophy", "Hypotonia associated with hypophosphataemia and altered calcium homeostasis", "Cerebral palsy", "Spinal muscular atrophy type 1"],
        correct: 1,
        reason: "Hypotonia is associated with hypophosphataemia and altered calcium homeostasis in rickets.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "In pediatric bone anatomy, the physis refers to the:",
        opts: ["Diaphyseal shaft", "Growth plate", "Periosteal membrane", "Articular cartilage"],
        correct: 1,
        reason: "Physis refers to the growth plate.",
        ref: "rickets.pdf",
        diff: "E"
      },
      {
        q: "When distinguishing Nutritional Vitamin D Deficiency Rickets from X-Linked Hypophosphataemic Rickets (XLH), which feature is characteristic of XLH but NOT nutritional rickets?",
        opts: ["Metaphyseal cupping and fraying on wrist X-ray", "Elevated serum alkaline phosphatase", "Skeletal deformities such as genu varum", "Normal serum 25-OH vitamin D levels with isolated renal phosphate wasting"],
        correct: 3,
        reason: "XLH is characterized by normal 25-OH vitamin D levels with isolated renal phosphate wasting.",
        ref: "rickets.pdf",
        diff: "H"
      },
      {
        q: "After initial biochemical healing is achieved in a child treated for rickets, long-term follow-up visits should be scheduled every:",
        opts: ["1 to 2 weeks", "1 month", "3 to 6 months", "2 years"],
        correct: 2,
        reason: "Long-term follow-up after rickets healing is every 3 to 6 months.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "A 6-year-old child was diagnosed with severe nutritional rickets at age 4 and completed full vitamin D/calcium therapy with complete biochemical and radiological healing. However, severe residual genu varum persists and impairs walking gait. What is the appropriate next management step?",
        opts: ["Repeat high-dose stoss therapy", "Initiate long-term calcitonin therapy", "Refer for orthopedic surgical evaluation", "Place the child on strict bed rest for 6 months"],
        correct: 2,
        reason: "Residual skeletal deformities after healing require orthopedic surgical evaluation.",
        ref: "rickets.pdf",
        diff: "M"
      },
      {
        q: "To prevent neonatal rickets and ensure adequate fetal vitamin D stores, preventative measures focus on optimizing vitamin D status in:",
        opts: ["The infant starting at 6 months of age", "Pregnant and lactating mothers", "Adolescent siblings", "Formula manufacturers only"],
        correct: 1,
        reason: "Prevention focuses on optimizing vitamin D status in pregnant and lactating mothers.",
        ref: "rickets.pdf",
        diff: "M"
      }
    ]
  },

  // ============================================================
  // TOPIC 12 — CONSTIPATION & HIRSCHSPRUNG
  // ============================================================
  {
    id: "constipation",
    title: "Constipation & Hirschsprung Disease",
    source: "GIT integrated lecture - Copy.pdf + constipation_midterm_exam.pdf",
    questions: [
      {
        q: "Pediatric functional constipation is clinically defined under Rome IV criteria as bowel movements occurring less than how many times per week?",
        opts: ["2 or fewer times per week", "4 times per week", "6 times per week", "Once every two weeks"],
        correct: 0,
        reason: "Functional constipation under Rome IV criteria requires 2 or fewer bowel movements per week.",
        ref: "GIT integrated lecture - Copy.pdf",
        diff: "E"
      },
      {
        q: "A term neonate fails to pass meconium within the first 48 hours of life. Abdominal distension and bilious vomiting develop. Digital rectal examination reveals a tight anal sphincter with explosive release of liquid stool and gas upon finger withdrawal. What is the diagnosis?",
        opts: ["Functional constipation", "Hirschsprung Disease (Congenital aganglionic megacolon)", "Meconium plug syndrome", "Imperforate anus"],
        correct: 1,
        reason: "Delayed meconium (>48h), abdominal distension, and explosive stool release on DRE indicate Hirschsprung disease.",
        ref: "GIT integrated lecture - Copy.pdf",
        diff: "E"
      },
      {
        q: "Definitive diagnosis of Hirschsprung Disease is established by suction rectal biopsy demonstrating:",
        opts: ["Hypertrophied circular muscle layer", "Mucosal atrophy with villous blunting", "Absence of ganglion cells in the submucosal (Meissner) and myenteric (Auerbach) plexuses", "Non-caseating granulomas"],
        correct: 2,
        reason: "Absence of ganglion cells in submucosal (Meissner) and myenteric (Auerbach) plexuses establishes Hirschsprung diagnosis.",
        ref: "GIT integrated lecture - Copy.pdf",
        diff: "E"
      },
      {
        q: "First-line maintenance medical therapy for functional constipation in infants and children includes which osmotic laxative?",
        opts: ["Liquid paraffin in neonates", "Senna and Castor oil", "High-dose Bisacodyl suppositories daily", "Polyethylene Glycol (PEG 3350) or Lactulose"],
        correct: 3,
        reason: "Osmotic laxatives like Polyethylene Glycol (PEG 3350) or Lactulose are first-line maintenance for constipation.",
        ref: "GIT integrated lecture - Copy.pdf",
        diff: "E"
      },
      {
        q: "What is the minimum duration of symptoms required to fulfill the diagnostic criteria for pediatric constipation?",
        opts: ["2 weeks", "1 month", "2 months", "6 months"],
        correct: 2,
        reason: "Definition requires at least 2 listed symptoms present for the past 2 months.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "In a full-term newborn, failure to pass meconium within what timeframe should raise high suspicion for Hirschsprung's disease?",
        opts: ["12 hours", "24 hours", "48 hours", "72 hours"],
        correct: 1,
        reason: "Hirschsprung disease is suspected in any full-term infant with delay in meconium passage >24 hours.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "What percentage of constipation cases in children older than 1 year is attributed to functional constipation?",
        opts: ["More than 50%", "More than 75%", "More than 85%", "More than 95%"],
        correct: 3,
        reason: "Functional constipation accounts for >95% of cases in children older than 1 year.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 3-week-old full-term male infant presents with abdominal distention and bilious vomiting. Digital rectal examination reveals an empty rectum. Upon finger withdrawal, there is an explosive discharge of foul-smelling feces and gas. What is the most likely diagnosis?",
        opts: ["Hirschsprung's disease", "Functional constipation", "Infant dyschezia", "Celiac disease"],
        correct: 0,
        reason: "Empty rectum on DRE with explosive discharge of gas/feces is classic for Hirschsprung's disease.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following is considered the MOST RELIABLE diagnostic test for confirming Hirschsprung's disease?",
        opts: ["Barium enema", "Anorectal manometry", "Plain abdominal radiograph", "Rectal suction biopsy"],
        correct: 3,
        reason: "Rectal suction biopsy is explicitly stated as the most reliable investigation, revealing aganglionosis.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "According to diagnostic criteria, pediatric constipation requires at least 2 of the following symptoms for 2 months EXCEPT:",
        opts: ["Two or fewer defecations per week", "At least 1 fecal incontinence per week in a toilet-trained child", "Palpable mass in the lower abdomen", "Painful, hard bowel movements"],
        correct: 2,
        reason: "Palpable abdominal mass is a clinical examination finding, not one of the 5 criteria symptoms.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 2.5-year-old toddler presents with hard stools and blood on the stool from anal fissures. What is the most appropriate initial management recommendation regarding toilet training?",
        opts: ["Avoid focus on toilet training", "Enforce strict scheduled toilet sitting after meals", "Initiate immediate rectal enema disinfection", "Switch to high-protein casein formula"],
        correct: 0,
        reason: "For toddlers with functional constipation, guidelines explicitly state: 'Avoid focus on toilet training'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "In an infant under 2 years of age requiring immediate evaluation for acute constipation, which intervention is STRICTLY AVOIDED?",
        opts: ["Prune juice", "Glycerin suppositories", "Administration of enemas", "Malt soup extract"],
        correct: 2,
        reason: "Lecture explicitly warns: 'Avoid use of enemas in children under 2 years'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What is the underlying histopathological defect in Hirschsprung's disease?",
        opts: ["Hypertrophy of the internal anal sphincter", "Absence of ganglion cells beginning at internal anal sphincter and extending proximally", "Mucosal ulceration throughout the colon", "Fibrotic stenosis of the distal rectum"],
        correct: 1,
        reason: "Defined as absence of ganglion cells in bowel wall starting at internal sphincter extending proximally.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following are recognized organic metabolic causes of constipation in infants EXCEPT:",
        opts: ["Hypothyroidism", "Hypercalcemia", "Hypokalemia", "Hyperkalemia"],
        correct: 3,
        reason: "Metabolic causes listed in lecture are Hypothyroidism, Hypercalcemia, Hypokalemia, and DI (not hyperkalemia).",
        ref: "constipation_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "What is identified as the MOST COMMON trigger initiating functional constipation in pediatric patients?",
        opts: ["Painful or frightening defecation", "High dietary fiber intake", "Cow's milk protein allergy", "Excessive physical activity"],
        correct: 0,
        reason: "Most common trigger listed is painful or frightening defecation leading to retention.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 5-year-old child with chronic constipation undergoes anorectal manometry. Progressive distension of a rectal balloon causes a paradoxical rise in internal anal sphincter pressure. This finding indicates:",
        opts: ["Normal rectoanal inhibitory reflex", "Functional fecal retention", "Celiac disease", "Hirschsprung's disease"],
        correct: 3,
        reason: "Paradoxical rise in internal sphincter pressure on balloon distension is diagnostic of Hirschsprung's.",
        ref: "constipation_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "Where is a large fecal mass typically palpated on abdominal examination in a patient with Hirschsprung's disease?",
        opts: ["Right upper quadrant", "Left lower abdomen", "Epigastrium", "Right iliac fossa"],
        correct: 1,
        reason: "Lecture specifies: 'Large fecal mass is felt in the left lower abdomen'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "In older children with functional fecal retention, Phase I treatment focuses on immediate disimpaction. What is the recommended duration of Phase I?",
        opts: ["3 to 5 days", "2 to 3 weeks", "2 to 6 months", "4 to 6 months"],
        correct: 0,
        reason: "Phase I: Immediate disimpaction duration is explicitly given as 3-5 days.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What oral lactulose dosage is specified for immediate disimpaction (Phase I) in older children?",
        opts: ["0.1 to 0.5 ml/kg", "0.5 to 1 ml/kg", "1 to 3 ml/kg", "5 to 10 ml/kg"],
        correct: 2,
        reason: "Oral laxative like lactulose is dosed at 1-3 ml/kg for Phase I disimpaction.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following organic causes of constipation is listed specifically for children older than 1 year, but NOT under infant causes?",
        opts: ["Hypothyroidism", "Diabetes Mellitus", "Cystic fibrosis", "Heavy-metal poisoning"],
        correct: 1,
        reason: "Diabetes mellitus is listed under causes in children >1 year, whereas Hypothyroidism, CF, and Heavy metal are in both.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 4-month-old infant strains, turns red in the face, and cries for 15 minutes before passing soft stool. Physical exam and growth are normal. What is the primary management?",
        opts: ["Reassurance", "Immediate surgical colostomy", "Rectal suction biopsy", "High-dose stimulant laxatives"],
        correct: 0,
        reason: "Infant dyschezia presents with straining before soft stool and requires mostly reassurance.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What pathognomonic radiologic feature on Barium Enema supports a diagnosis of Hirschsprung's disease?",
        opts: ["Apple-core lesion", "Lead-pipe colon", "String sign", "Presence of a transition zone"],
        correct: 3,
        reason: "Barium enema shows presence of a transition zone with delayed evacuation in Hirschsprung's.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What is the typical age of onset for Functional Constipation compared to Hirschsprung's Disease?",
        opts: ["FC at birth; HD after 2 years", "FC at 6 months; HD at 5 years", "FC after 2 years of age; HD at birth", "Both present at birth"],
        correct: 2,
        reason: "Comparison table lists onset of FC as 'After 2 years of age' and HD as 'At birth'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "All of the following clinical features favor a diagnosis of Hirschsprung's Disease over Functional Constipation EXCEPT:",
        opts: ["Marked abdominal distention", "Failure to thrive / poor weight gain", "Risk of enterocolitis", "Stool in the rectal ampulla on digital rectal examination"],
        correct: 3,
        reason: "Rectal exam in Hirschsprung's shows 'No stool' (empty ampulla), whereas FC has stool in ampulla.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A full-term male neonate fails to pass meconium within 48 hours and develops abdominal distention. Which major complication of this condition carries high mortality and requires urgent recognition?",
        opts: ["Enterocolitis", "Intussusception", "Hypertrophic pyloric stenosis", "Meckel's diverticulitis"],
        correct: 0,
        reason: "Enterocolitis is listed as the major complication of Hirschsprung's disease.",
        ref: "constipation_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "In older children undergoing treatment for functional fecal retention, what is the primary objective and duration of Phase III?",
        opts: ["Immediate disimpaction over 3-5 days", "Sphincter tone restoration using high-dose enemas over 1 week", "Restoring regular bowel movements and preventing relapses by cutting laxatives and increasing fiber/fluids over 4-6 months", "Surgical repair of aganglionic segment at 6-12 months"],
        correct: 2,
        reason: "Phase III (4-6 months) aims to restore regular bowel movements/avoid relapse by cutting laxatives & increasing fiber/fluid.",
        ref: "constipation_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "What is the most common cause of intestinal bowel obstruction in neonates?",
        opts: ["Intussusception", "Hirschsprung's disease", "Malrotation with volvulus", "Duodenal atresia"],
        correct: 1,
        reason: "Hirschsprung's is explicitly stated as 'the most common reason for bowel obstruction in neonates'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "In toddlers, dietary transition to which milk product is highlighted as a trigger for dry hard stools, anal fissures, and pain?",
        opts: ["Soy formula", "Goat's milk", "Rice milk", "Cow's milk"],
        correct: 3,
        reason: "Lecture notes: 'Toddlers: Dietary changes (Cow's milk) lead to dry hard stools with fissures and pain'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following is NOT listed among the spinal cord abnormalities causing infant constipation?",
        opts: ["Myelomeningocele", "Spina bifida", "Tethered cord", "Duchenne muscular dystrophy"],
        correct: 3,
        reason: "Spinal cord abnormalities listed are Myelomeningocele, Spina bifida, and Tethered cord.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 7-year-old boy presents with abdominal pain and stool soilage. History reveals he avoids defecating at school due to dirty toilet facilities. Rectal exam reveals normal anal tone and stool in the ampulla. What is the diagnosis?",
        opts: ["Functional constipation", "Hirschsprung's disease", "Neurofibromatosis", "Congenital anorectal malformation"],
        correct: 0,
        reason: "Unpleasant toilet facilities away from home is a classic trigger for functional constipation in older children.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "According to survey statistics in the lecture slides, physicians perform digital rectal examinations in what percentage of constipation cases?",
        opts: ["Less than 25%", "Less than 50%", "Less than 75%", "100%"],
        correct: 2,
        reason: "Lecture slides state: 'Physicians do rectal exams <75% of the time and order radiographs 70% of the time'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "For an infant with dyschezia, which dietary carbohydrate source can be used as an osmotic agent to soften stools?",
        opts: ["Prune juice, malt soup extract, or corn syrup", "High-protein whey concentrate", "Castor oil solution", "Concentrated cow's milk"],
        correct: 0,
        reason: "Osmotic agents for infants listed: Prune juice, malt soup extract, or corn syrup.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What is the duration of Phase II maintenance therapy (using oral PEG or mineral oil) in older children with functional fecal retention?",
        opts: ["3 to 5 days", "2 to 6 months", "1 to 2 years", "5 to 10 years"],
        correct: 1,
        reason: "Maintenance (Phase II) duration is specified as '2-6 months'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "All of the following laboratory investigations are listed in the lecture for evaluating organic causes of constipation EXCEPT:",
        opts: ["Serum Calcium and Phosphorus", "Thyroid function tests (TSH, FT3, FT4)", "Celiac panel and Sweat chloride test", "Serum amylase and lipase"],
        correct: 3,
        reason: "Amylase and lipase are not listed among constipation diagnostic lab tests.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "An 8-year-old girl is evaluated for chronic constipation. Abdominal palpation reveals a firm mass. In which abdominal region is a fecal mass typically felt in constipated children?",
        opts: ["Right upper quadrant", "Epigastric region", "Lower abdomen", "Right lumbar region"],
        correct: 2,
        reason: "Slide 3 notes: 'Palpable mass in the lower abdomen'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Which diagnostic modality provides definitive proof of Hirschsprung's disease by demonstrating aganglionosis?",
        opts: ["Rectal suction biopsy", "Abdominal ultrasound", "Plain abdominal film", "Barium enema"],
        correct: 0,
        reason: "Rectal suction biopsy is explicitly designated as 'most reliable & reveals aganglionosis'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What surgical management approach is recommended for a neonate diagnosed with Hirschsprung's disease?",
        opts: ["Immediate total colectomy at birth", "Temporary colostomy with definitive repair delayed until 6-12 months of age", "Manual anal dilation under general anesthesia at 2 years", "Permanent ileostomy without reconstruction"],
        correct: 1,
        reason: "Surgical treatment: 'Temporary colostomy and wait till the age of 6-12 months for definitive repair'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 3-year-old child presents with chronic constipation. Exam reveals normal anal tone and stool in the rectal ampulla. Barium enema shows a large amount of stool without a transition zone. What is the diagnosis?",
        opts: ["Hirschsprung's disease", "Functional constipation", "Cystic fibrosis", "Hypothyroidism"],
        correct: 1,
        reason: "Barium enema in FC shows 'Large amount of stool; no transition zone' and stool in ampulla.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following conditions is NOT listed as an organic cause of constipation in pediatric patients?",
        opts: ["Gluten enteropathy", "Neurofibromatosis", "Sexual abuse", "Hyperthyroidism"],
        correct: 3,
        reason: "Hypothyroidism (not hyperthyroidism) is the metabolic cause listed for constipation.",
        ref: "constipation_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "What is the characteristic clinical presentation pattern of constipation in infants (under 1 year of age)?",
        opts: ["Straining pattern", "Fissures and hematochezia", "Unawareness of constipation", "Recurrent encopresis"],
        correct: 0,
        reason: "Slide 3 explicitly lists: 'Infants: Straining pattern'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "What anal tone finding is characteristically expected on clinical examination in a patient with Hirschsprung's disease?",
        opts: ["Absent anal tone", "Hypertonic spastic sphincter", "Normal anal tone", "Flaccid patulous anus"],
        correct: 2,
        reason: "Digital rectal exam in Hirschsprung's shows 'empty rectum with normal anal tone'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 2-month-old infant with acute constipation requires immediate stool evacuation. Which agent is appropriate to use?",
        opts: ["High-volume phosphate enema", "Glycerin suppository", "Paraffin oil enema", "Stimulant oral bisacodyl"],
        correct: 1,
        reason: "Glycerin suppositories are recommended for immediate evacuation in infants (enemas avoided <2 years).",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "How frequently do physicians order abdominal radiographs in the evaluation of pediatric constipation according to lecture data?",
        opts: ["30% of the time", "50% of the time", "70% of the time", "90% of the time"],
        correct: 2,
        reason: "Lecture states physicians order radiographs 70% of the time.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "In Phase II treatment of functional fecal retention, which dual-combination oral therapy is explicitly mentioned to restore sphincter muscle tone?",
        opts: ["Lactulose and paraffin", "Polyethylene glycol and senna", "Bisacodyl and castor oil", "Mineral oil and phosphate"],
        correct: 0,
        reason: "Phase II combinations explicitly listed in lecture: '(lactulose, paraffin)'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "On anorectal manometry in a child with Functional Constipation, rectal balloon distension normally produces:",
        opts: ["Paradoxical contraction of the internal sphincter", "Relaxation of the internal anal sphincter", "Absent rectal sensation", "Persistent external sphincter spasm"],
        correct: 1,
        reason: "In FC, manometry shows 'Distension of rectum > relaxation of internal sphincter'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "Which of the following is NOT one of the 5 criteria symptoms listed in the definition of pediatric constipation?",
        opts: ["Two or fewer defecations per week", "Fecal incontinence = 1 per week in a toilet-trained child", "Bilious vomiting", "Retentive posture or excessive stool retention"],
        correct: 2,
        reason: "Bilious vomiting is a sign of obstruction/organic disease, not a diagnostic criterion symptom.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "A 5-month-old infant develops constipation following a formula brand change, passing hard stools twice weekly without organic signs. What dietary therapy is recommended?",
        opts: ["Fruit juices and medications with high sugar content", "Strict fluid restriction", "High-protein casein diet", "Phosphate enemas"],
        correct: 0,
        reason: "Slide 7 states treatment for infant FC: 'Use of fruit juices and medications with high sugar content softens stools'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "In Hirschsprung's disease with a short aganglionic segment, how may the infant present during the neonatal period?",
        opts: ["Immediate profuse watery diarrhea", "Massive gastrointestinal hemorrhage", "Complete absence of symptoms throughout life", "Normal meconium passage initially, followed by subsequent chronic constipation"],
        correct: 3,
        reason: "Short aganglionic segment 'May have normal meconium passage but with subsequent history of chronic constipation'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A 1-year-old infant with severe chronic constipation undergoes a Barium Enema. Contrast reveals a narrow distal rectum that widens into a dilated proximal colon. This radiologic feature is termed:",
        opts: ["Transition zone", "Double bubble sign", "Target sign", "Lead pipe colon"],
        correct: 0,
        reason: "The hallmark barium enema finding in Hirschsprung's is the transition zone.",
        ref: "constipation_midterm_exam.pdf",
        diff: "H"
      },
      {
        q: "Poor weight gain and failure to thrive are characteristically features of which condition in the lecture comparison table?",
        opts: ["Functional constipation", "Infant dyschezia", "Hirschsprung's disease", "Retentive fecal posture"],
        correct: 2,
        reason: "Comparison table lists Poor weight gain as 'Common' and Failure to thrive as 'Possible' in Hirschsprung's.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Which of the following exposures or toxicities is explicitly listed in the lecture as an organic cause of pediatric constipation?",
        opts: ["Heavy-metal poisoning", "Medication side effects", "Hypervitaminosis A", "Both A and B"],
        correct: 3,
        reason: "Both Heavy-metal poisoning and Medication side effects are explicitly listed organic causes.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "What are the primary components of Phase III management (4-6 months duration) in older children with functional fecal retention?",
        opts: ["Immediate high-dose lactulose and phosphate enemas", "Daily anal dilations and colostomy irrigation", "Cutting down laxative use and increasing daily fiber and fluid intake", "Rigid toilet training schedule and protein restriction"],
        correct: 2,
        reason: "Phase III aims to restore bowel habits and avoid relapse by cutting down laxatives and increasing fiber/fluid.",
        ref: "constipation_midterm_exam.pdf",
        diff: "M"
      },
      {
        q: "A pediatrician performs a physical exam on a constipated child. Which specific neurological examination findings are highlighted in the lecture to evaluate neurological causes?",
        opts: ["Moro reflex and grasp reflex", "Anal tone and cremasteric reflex", "Kernig and Brudzinski signs", "Chvostek and Trousseau signs"],
        correct: 1,
        reason: "Slide 3 specifies: 'Neurologic evaluation with anal tone, cremasteric reflex'.",
        ref: "constipation_midterm_exam.pdf",
        diff: "E"
      },
      {
        q: "Which neurocutaneous disorder is explicitly listed as an organic cause of constipation in children older than 1 year?",
        opts: ["Neurofibromatosis", "Tuberous sclerosis", "Sturge-Weber syndrome", "Ataxia telangiectasia"],
        correct: 0,
        reason: "Neurofibromatosis is explicitly listed under Organic Causes in children > 1 year.",
        ref: "constipation_midterm_exam.pdf",
        diff: "H"
      }
    ]
  }
];

// Export for use in the q-bank website.
// Each topic contains its own questions array.
// Usage example:
//   topicsData.forEach(topic => { console.log(topic.title, topic.questions.length) });
//
// For ES modules: export default topicsData;
// For CommonJS: module.exports = topicsData;
// For direct browser script inclusion, the variable is globally available.

// ============================================================
// ADAPTER FOR THE Q-BANK WEBSITE (index.html)
// The site reads a flat list called ALL_QUESTIONS, built here from topicsData above.
// Edit questions in topicsData only; do not edit this part.
//
// IMPORTANT (progress tracking): a question's id is "<topic id>_<position in that topic>".
// Users' saved answers, notes and wrong-bank are keyed by this id, so ADD NEW QUESTIONS AT
// THE END of a topic's array (never insert in the middle or reorder), or saved progress
// will point at the wrong questions.
// ============================================================
const EXAM_MODEL_REFS = new Set([
  "malnutrition-mcq-exam.pdf", "diarrhea_vomiting_exam.pdf", "anemia_midterm_exam.pdf",
  "hemolytic-anemia-pediatrics-exam.pdf", "hemorrhagic_disorders_midterm_exam.pdf",
  "platelet-disorders-midterm-exam.pdf", "oncology-midterm-exam.pdf",
  "GIT_Bleeding_Midterm_Exam.pdf", "rickets.pdf", "constipation_midterm_exam.pdf"
]);
function isExamModelRef(ref) {
  return EXAM_MODEL_REFS.has(ref) || /exam|midterm/i.test(String(ref || ""));
}

const ALL_QUESTIONS = [];
topicsData.forEach(topic => {
  topic.questions.forEach((x, i) => {
    ALL_QUESTIONS.push({
      id: `${topic.id}_${String(i + 1).padStart(3, "0")}`,
      num: `Q${i + 1}`,
      lecture: topic.title,
      source: isExamModelRef(x.ref) ? "Exam Model" : "Lecture",
      q: x.q,
      choices: x.opts,
      ans: "ABCDEF"[x.correct],
      reason: x.reason,
      ref: x.ref,
      diff: x.diff
    });
  });
});

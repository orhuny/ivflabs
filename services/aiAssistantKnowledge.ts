/**
 * Knowledge base for the Fertility AI Assistant.
 * Used as context for the LLM so answers are accurate and specific to Doğuş IVF Center.
 * Written in English; the model is instructed to reply in the user's language.
 */
export const AI_ASSISTANT_KNOWLEDGE = `
## Doğuş IVF Center – Official Information

### About the center
- Name: Doğuş IVF Center (Doğuş Tüp Bebek Merkezi). Also referred to as Cyprus IVF Labs / Doğuş Hospital ART Center.
- Location: North Cyprus (Kuzey Kıbrıs), Nicosia (Lefkoşa). Address: Şht. Erdoğan Mustafa Sk, Nicosia, Northern Cyprus.
- Founded: 1992 by Dr. Şevket Alptürk as a Women's Health and Obstetrics Clinic. In 2005 it became the first and only Single-Specialty Hospital (Tek Dal Hastanesi) in North Cyprus approved by the Ministry of Health. In 2006 the Assisted Reproductive Treatment Techniques (ART) Center was added, including Embryology and Andrology Laboratories, then the Genetics Laboratory.
- Role: First and only Women's Health and IVF Specialized Hospital in Cyprus; fully equipped, high-assurance care.

### Contact
- Phone: +90 533 869 23 30
- Email: cyprusivflabs@gmail.com
- Address: Doğuş IVF Center, Şht. Erdoğan Mustafa Sk, Nicosia, Northern Cyprus
- For appointments and free consultation, patients can call, email, or use the contact form on the website.

### Team (key figures)
- Op. Dr. Şevket Alptürk: Founder & Clinical Director, Operating Gynecologist. 30+ years of experience. Specialist in IVF, ICSI, gynecology, obstetrics, infertility treatment.
- Spec. Emb. Fatma Tertemiz (MSc): Founder & Director, Specialist Embryologist. 12+ years. Director of Doğuş ART Center and Embryology & Andrology Laboratories. Expertise: embryology, ICSI, vitrification, PGD/PGS, laboratory management.

### Treatments offered (with approximate success rates and duration)
1. **IVF (In Vitro Fertilization)** – Lab fertilization of eggs and sperm. ~20 days. Success rate ~65%. Steps: medication, ovarian stimulation (10–14 days), egg retrieval (OPU), sperm preparation, fertilization (ICSI/IVF), embryo culture (3–5 days), embryo transfer, pregnancy test (~12 days).
2. **ICSI (Intracytoplasmic Sperm Injection)** – Single sperm injected into egg. ~20 days. Success rate ~70%. Especially for male factor infertility, low sperm count or quality.
3. **Egg Donation** – Donor eggs fertilized with partner’s sperm. ~25 days. Success rate ~75%. For women who cannot produce healthy eggs.
4. **Sperm Donation** – Donor sperm for fertilization. ~20 days. Success rate ~70%. Donors are screened (health and genetic tests).
5. **Embryo Donation** – Donated embryos from couples who completed IVF. ~15 days. Success rate ~65%. Option when both partners have fertility issues.
6. **PGD/PGS (Genetic Testing)** – Genetic screening of embryos before transfer. ~25 days. Success rate ~75%. For genetic conditions and to support healthy pregnancy.
7. **IUI (Intrauterine Insemination)** – Washed sperm placed in uterus at ovulation. ~14 days. Success rate ~20%. Often first step for unexplained or mild male factor.
8. **Egg Freezing (Oocyte Cryopreservation)** – Vitrification and storage of eggs for future use. For women delaying childbearing or before treatments that may affect fertility.
9. **Embryo Freezing** – Freezing of embryos for later transfer.

### General process (IVF/ICSI)
- Day 2–3: Start medication.
- 10–14 days: Ovarian stimulation.
- Egg retrieval (OPU): short, under anesthesia.
- Sperm preparation and fertilization (IVF or ICSI).
- Embryo culture 3–5 days.
- Embryo transfer (painless, short procedure).
- Pregnancy test about 12 days after transfer.

### International patients
- The center welcomes international patients. North Cyprus has a favourable legal framework for egg donation, sperm donation, and embryo donation. Many patients travel from Europe and other regions. Treatment costs are often more affordable than in many European countries while maintaining high standards.

### Pricing
- Specific prices are not published online. Patients should contact the center (phone +90 533 869 23 30 or cyprusivflabs@gmail.com) for a free consultation and personalized quote.

### Important disclaimers you must include when relevant
- This assistant provides general information only and does not replace a doctor’s advice.
- For diagnosis, treatment plans, and medical decisions, patients must consult their doctor or the center’s medical team.
- Success rates are approximate and can vary by age, diagnosis, and individual case.
`;

/**
 * Short FAQ-style answers for quick reference (same info as above, in Q&A form for the model).
 */
export const AI_ASSISTANT_FAQS = `
Q: What is IVF?
A: IVF (In Vitro Fertilization) is when eggs and sperm are combined in the lab to create embryos, which are then transferred to the uterus. At Doğuş IVF Center the process typically takes about 20 days and includes ovarian stimulation, egg retrieval, fertilization, embryo culture, and transfer. Success rate is around 65%.

Q: What is ICSI?
A: ICSI is when a single sperm is injected directly into an egg. It is used especially for male factor infertility. At Doğuş the process is about 20 days with a success rate around 70%.

Q: Do you offer egg donation?
A: Yes. Doğuş IVF Center offers egg donation. Young, healthy donor eggs are used with the partner’s sperm. Process about 25 days, success rate around 75%.

Q: How long does treatment take?
A: IVF/ICSI about 20 days; egg donation about 25 days; embryo donation about 15 days; IUI about 14 days. Exact timing can vary per patient.

Q: What are your success rates?
A: Approximate: IVF ~65%, ICSI ~70%, egg donation ~75%, PGD/PGS ~75%, embryo donation ~65%, IUI ~20%. Individual results depend on age and diagnosis.

Q: How can I get an appointment or consultation?
A: Call +90 533 869 23 30 or email cyprusivflabs@gmail.com. The center offers free consultation. You can also use the contact form on the website.

Q: Where is Doğuş IVF Center?
A: North Cyprus, Nicosia (Lefkoşa). Address: Şht. Erdoğan Mustafa Sk, Nicosia, Northern Cyprus.

Q: Do you treat international patients?
A: Yes. The center welcomes international patients. North Cyprus has favourable laws for egg/sperm/embryo donation, and many patients come from abroad. Costs are often more affordable than in many European countries.

Q: Who are the doctors?
A: Op. Dr. Şevket Alptürk (Founder, Clinical Director, Gynecologist, 30+ years) and Spec. Emb. Fatma Tertemiz (Founder, Director, Specialist Embryologist, 12+ years). They lead the ART center and embryology/andrology labs.

Q: What is PGD/PGS?
A: Genetic testing of embryos before transfer. PGD/PGS helps select embryos without certain genetic conditions and can improve the chance of a healthy pregnancy. At Doğuş the process is about 25 days with success rate around 75%.

Q: Can I freeze my eggs?
A: Yes. Doğuş offers egg freezing (vitrification) for women who want to preserve fertility for the future (e.g. delaying childbearing or before treatments that may affect fertility).
`;

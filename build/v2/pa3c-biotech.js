// Part III, section 3: Biotechnology.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h2: "3. Biotechnology" },
  { p: "Biotechnology is the use of living systems, or their components, to make products and solve problems. What makes it a frontier field now is that biology has become an *information technology*: it can be read, written and edited with increasing speed and precision, and designed with the help of AI. The Forum frames much of its work in this area around the **bioeconomy**: the share of economic activity based on biological resources and processes." },

  /* 3.1 */
  { h3: "3.1 The biology you need" },
  { p: "**DNA** stores genetic information as a sequence of four chemical ‘letters’ (A, C, G and T). A **gene** is a stretch of DNA that encodes a product, usually a protein; the complete DNA of an organism is its **genome**. Cells copy (transcribe) a gene into **RNA**, and then translate the RNA into a **protein**, reading the letters three at a time, each triplet specifying one amino acid. Proteins fold into three-dimensional shapes, and their shape determines what they do: enzymes, antibodies, hormones, structural materials. This flow of information (DNA to RNA to protein) is known as the central dogma of molecular biology." },
  { p: "Two further distinctions come up constantly in governance debates. **Genotype** is the genetic code; **phenotype** is the observable trait it produces. **Somatic** cells make up the body and changes to them are not inherited; **germline** cells (eggs, sperm, embryos) pass changes to future generations." },

  /* 3.2 */
  { h3: "3.2 Reading, writing and editing DNA" },
  { table: { head: ["Capability", "What it is", "Where it stands"], widths: [1700, 3900, 3760], rows: [
    ["Reading (sequencing)", "Determining the order of letters in DNA.", "The first human genome (completed 2003) cost around $3 billion; a genome now costs a few hundred dollars on the latest machines. Cheap sequencing underpins diagnostics, pathogen surveillance and research."],
    ["Writing (synthesis)", "Manufacturing DNA to a designed sequence, from short fragments to whole genes.", "Ordered online from commercial providers; benchtop synthesisers now allow labs to make DNA in-house, which complicates biosecurity screening."],
    ["Editing", "Changing a specific sequence inside a living cell.", "CRISPR tools (below) have made editing cheap, precise and widely accessible."],
  ]}},
  { p: "**How CRISPR works.** CRISPR-Cas9, adapted from a bacterial immune system (Doudna and Charpentier, Nobel Prize in Chemistry 2020), has two parts: a short **guide RNA** matching the target sequence, and the **Cas9** enzyme, which cuts DNA where the guide binds. The cell then repairs the cut, either imprecisely (disabling the gene) or, if a template is supplied, by writing in a chosen sequence. Two newer tools refine this. **Base editing** chemically converts one letter into another without cutting both strands of DNA. **Prime editing** works as a ‘search and replace’ for short sequences. Both reduce unintended changes. Getting editors into the right cells (‘delivery’) relies mainly on engineered viruses or lipid nanoparticles, the same technology used in mRNA vaccines." },

  /* 3.3 */
  { h3: "3.3 The main application platforms" },
  { table: { head: ["Platform", "What it does", "Milestones and examples"], widths: [2000, 3500, 3860], rows: [
    ["mRNA medicines", "Deliver instructions for the body’s cells to make a protein (for example a viral antigen).", "COVID-19 vaccines (2020) proved the platform; now extending to cancer vaccines and other diseases."],
    ["Gene and cell therapies", "Correct or replace faulty genes, or engineer immune cells to attack disease.", "Casgevy, the first approved CRISPR therapy (UK and US, 2023), for sickle cell disease and beta thalassaemia; CAR-T cell therapies for blood cancers; in 2025 a custom base-editing therapy was developed for a single infant with a rare metabolic disorder, raising the question of how to regulate bespoke ‘N-of-1’ treatments."],
    ["Agriculture and food", "Gene-edited crops and livestock; precision fermentation of food ingredients; cultivated meat.", "Gene-edited crops approved in several countries; cultivated meat approved in Singapore (2020) and the US (2023)."],
    ["Industrial biomanufacturing", "Engineered microbes and cells producing chemicals, materials, fuels and ingredients.", "Frequently cited estimate: up to 60% of the physical inputs to the economy could in principle be made biologically. The bottleneck is scale-up and cost."],
    ["Environmental applications", "Bioremediation; engineered organisms released into the environment.", "Gene drives (edits designed to spread through wild populations, for example to suppress malaria-carrying mosquitoes) remain in contained trials and are highly contested."],
  ]}},

  /* 3.4 */
  { h3: "3.4 AI and biology: the convergence" },
  { p: "AI has transformed biology’s design cycle. **AlphaFold** (Google DeepMind) predicts a protein’s 3D structure from its sequence; together with protein-design work at the University of Washington, it earned the 2024 Nobel Prize in Chemistry (Hassabis, Jumper and Baker). Generative models now *design* new proteins with specified functions, and **biological foundation models** trained on vast genomic datasets (such as ESM3 and Evo 2) can propose novel sequences. Combined with automated ‘cloud labs’, this compresses discovery from years to months." },
  { p: "The same capability lowers barriers to misuse. The governance concern is twofold: AI models may provide meaningful help to someone attempting to create a dangerous agent, and AI-designed sequences may evade DNA-synthesis screening that works by comparing orders against databases of known threats. Frontier AI developers now run biosecurity evaluations on their models, and screening providers are moving towards function-based rather than sequence-matching approaches. This convergence sits between AI and biotechnology regulators, and between Forum teams, which makes it a natural cross-cutting issue." },

  /* 3.5 */
  { h3: "3.5 Scale and strategic context" },
  { b: [
    "The bioeconomy is estimated at $4–5 trillion today, with potential to reach around $30 trillion by 2050 (Forum estimates).",
    "At least 50 countries have a national bioeconomy strategy or policy; China adopted one in 2022, and the EU published a Strategy for a Competitive and Sustainable Bioeconomy in November 2025.",
    "The synthetic-biology market was around $25–27 billion in 2025, growing at roughly 20% a year.",
    "Biotechnology is now framed as a matter of national security and strategic autonomy. The US National Security Commission on Emerging Biotechnology (final report, April 2025) concluded that China is rapidly gaining ground after two decades of strategic prioritisation, and recommended major federal investment and the use of national-security tools to protect the US biotech base.",
  ]},

  /* 3.6 */
  { h3: "3.6 The regulatory landscape" },
  { p: "**The fundamental split: product versus process.** The US regulates biotechnology by the characteristics of the *product*, under the Coordinated Framework for the Regulation of Biotechnology (1986), which divides responsibility between the FDA, USDA and EPA. The EU has regulated by the *process* used: organisms produced by genetic modification fall under its GMO rules, and in 2018 the EU Court of Justice ruled that gene-edited organisms are GMOs too. This single difference explains much of the transatlantic divergence in agriculture and food." },
  { table: { head: ["Area", "Key developments"], widths: [2200, 7160], rows: [
    ["EU: plants and food", "Provisional agreement (December 2025) on a regulation for plants produced by new genomic techniques (NGTs): category 1 plants, comparable to conventionally bred ones, would be treated like conventional plants; category 2 plants remain under GMO rules, including labelling. An expert group will examine the effect of patents on NGT plants."],
    ["EU: industrial strategy", "Proposal for a European Biotech Act (December 2025) to strengthen biotechnology and biomanufacturing and speed the path from research to market; Bioeconomy Strategy (November 2025)."],
    ["Medicines", "Advanced therapies are regulated by the FDA in the US and as advanced therapy medicinal products by the EMA in the EU. Bespoke and platform therapies strain approval models designed for mass-produced drugs, and regulators are developing new pathways."],
    ["US security posture", "The NSCEB report (April 2025); a May 2025 executive order tightening oversight of dangerous gain-of-function research; federal expectations that DNA-synthesis providers screen orders; legislative efforts to restrict certain Chinese biotech suppliers."],
    ["Biosecurity, international", "The Biological Weapons Convention (in force since 1975, over 180 states parties) prohibits biological weapons but has no verification mechanism; a working group has been exploring how to strengthen it. Screening norms are set largely by industry (the International Gene Synthesis Consortium) and by initiatives such as IBBIS (the International Biosecurity and Biosafety Initiative for Science, launched 2024)."],
    ["Biosafety and benefit sharing", "The Cartagena Protocol governs cross-border movement of living modified organisms; the Nagoya Protocol governs access to genetic resources and benefit sharing. In 2024 the Convention on Biological Diversity created the ‘Cali Fund’ for sharing benefits from the use of digital sequence information."],
    ["Human genome editing", "Germline editing is broadly prohibited after the 2018 He Jiankui case; the WHO issued a governance framework in 2021. China adopted a Biosecurity Law (2021) and tighter ethics rules."],
  ]}},
  { p: "**Biosafety versus biosecurity.** Biosafety protects people and the environment from accidental exposure or release (laboratories are graded from biosafety level 1 to 4 according to containment). Biosecurity prevents deliberate misuse. Dual-use research of concern (DURC) and gain-of-function research (enhancing a pathogen’s properties) are where the two overlap." },

  /* 3.7 */
  { h3: "3.7 The governance issue map for biotechnology" },
  { table: { head: ["Issue", "What is at stake", "Where the gap is"], widths: [2100, 3500, 3760], rows: [
    ["AI-enabled biosecurity", "AI lowers barriers to designing harmful agents; screening built for known sequences is outpaced.", "Shared standards linking AI model safeguards, synthesis screening and customer verification across countries."],
    ["Divergent classification", "The same gene-edited product is ‘conventional’ in one market and a GMO in another.", "Mutual understanding of classification approaches; trade and investment impacts."],
    ["Regulating novel therapies", "Bespoke, platform and in-body editing therapies do not fit approval models built for mass-produced drugs.", "Shared learning among medicines regulators on new pathways."],
    ["Scaling biomanufacturing", "Permitting, facility standards and capacity limit industrial scale-up.", "Regulatory clarity for new products and facilities; cross-border recognition."],
    ["Access and benefit sharing", "Gene therapies can cost millions per patient; benefits from genetic data flow mostly to rich countries.", "Mechanisms such as the Cali Fund need implementation; pricing and access models."],
    ["Genomic data", "Privacy, consent and data sovereignty for genetic information.", "Interoperable rules for sharing genomic data for research while protecting individuals."],
    ["Public trust", "Europe’s GMO history shows public rejection can shape regulation for decades.", "Early, inclusive public engagement before products reach the market."],
  ]}},
  { h3: "3.8 The live debates" },
  { b: [
    "**Open science versus biosecurity.** Whether to publish methods that could be misused, and whether biological AI models should be released openly or with access controls.",
    "**Product versus process.** Whether gene-edited products that could have arisen through conventional breeding should face GMO rules; the EU’s NGT reform is a partial shift towards the product view.",
    "**Speed versus assurance for new therapies.** How far regulators should accept smaller trials, platform approvals and bespoke treatments for rare diseases.",
    "**Environmental release.** Whether gene drives should ever be released, who decides for shared ecosystems, and how to obtain consent from affected communities.",
    "**Access and fairness.** The price of gene therapies, and whether benefit-sharing for genetic data (the Cali Fund) will deliver meaningful resources.",
    "**Security framing.** Whether treating biotechnology as a national-security contest undermines the international cooperation that biosafety and biosecurity require.",
  ]},
  { pageBreak: true },
);

module.exports = { blocks };

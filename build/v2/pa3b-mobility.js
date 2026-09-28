// Part III, section 2: Autonomous mobility and robotics.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h2: "2. Autonomous mobility and robotics" },
  { p: "This domain covers machines that perceive their surroundings and act in the physical world with limited or no human control: automated and autonomous vehicles (cars, robotaxis, trucks, delivery robots), drones and air mobility, and robots (industrial, collaborative, mobile and humanoid). The unifying governance feature is that software decisions have immediate physical consequences in spaces shared with people. The unifying technology trend is **physical AI**: applying modern AI to machines that act in the physical world." },

  /* 2.1 */
  { h3: "2.1 How autonomy works" },
  { p: "Every autonomous system runs a continuous loop: **sense, plan, act**. For a self-driving vehicle, that loop is usually broken into five functions." },
  { table: { head: ["Function", "What it does", "Key technologies"], widths: [1800, 3700, 3860], rows: [
    ["Perception", "Detects and classifies everything around the vehicle: lanes, vehicles, pedestrians, signs, obstacles.", "Cameras, radar, lidar and ultrasonic sensors, combined by sensor fusion and interpreted by machine-learning models."],
    ["Localisation", "Establishes precisely where the vehicle is.", "High-definition maps, satellite positioning, inertial measurement units, matching sensor data against maps."],
    ["Prediction", "Forecasts what other road users will do next.", "Machine-learning models trained on large volumes of driving data."],
    ["Planning", "Chooses a safe, legal and comfortable path and behaviour.", "Planning algorithms, increasingly learned rather than hand-coded."],
    ["Control", "Turns the plan into steering, acceleration and braking.", "Actuators and drive-by-wire systems with redundant safety layers."],
  ]}},
  { p: "**Sensors and their trade-offs.** Cameras are cheap and rich in information but struggle in glare and darkness. Radar measures distance and speed reliably in bad weather but with low resolution. Lidar produces precise 3D maps with lasers but has historically been expensive. Most driverless operators combine all three for redundancy; Tesla is the notable exception, relying on cameras alone." },
  { p: "**Two architectures.** The traditional ‘modular’ stack builds each function separately, which makes testing and explanation easier. The newer ‘end-to-end’ approach trains one large neural network to map sensor inputs directly to driving actions, sometimes using ‘world models’ that predict how a scene will evolve. End-to-end systems can handle messy situations better but are harder to validate and explain, which matters to regulators." },
  { p: "**Testing and support.** Developers rely heavily on simulation and scenario-based testing to rehearse rare events safely. Driverless fleets are also supported by **remote assistance**: human staff who can advise a stuck vehicle (for example, confirm it may pass a blocked lane), usually without driving it directly. Where those staff sit, how many vehicles each supervises, and under which jurisdiction’s rules they operate are emerging governance questions." },

  /* 2.2 */
  { h3: "2.2 Levels of automation and the ‘long tail’" },
  { p: "The universal shorthand is the SAE J3016 scale. What matters for governance is who is responsible for the driving task at each level." },
  { table: { head: ["Level", "Name", "Who is responsible", "Example"], widths: [900, 2300, 3460, 2700], rows: [
    ["0–1", "No automation / driver assistance", "The human drives; the system helps with steering or speed.", "Adaptive cruise control."],
    ["2", "Partial automation", "The system steers and controls speed, but the human must supervise constantly and remains responsible.", "Most ‘autopilot’-style features on sale today."],
    ["3", "Conditional automation", "The system drives in defined conditions; the human must take over when asked.", "Mercedes-Benz Drive Pilot, approved in Germany and parts of the US."],
    ["4", "High automation", "No human needed within a defined operational design domain (ODD): specific areas, roads, speeds and weather.", "Robotaxis in designated cities."],
    ["5", "Full automation", "No human needed anywhere, in any conditions.", "Does not exist."],
  ]}},
  { p: "**The operational design domain (ODD)** is the key regulatory concept: a system is certified or permitted for a specified set of conditions, not for ‘driving’ in general. **The long tail** is the key technical challenge: routine driving is largely solved; the difficulty lies in rare events (an unusual road layout, a police officer’s hand signals, debris, extreme weather). How to demonstrate safety against events that are, by definition, rare is the central validation problem. Operators publish performance data (miles between disengagements, injury-crash rates compared with human benchmarks); Waymo has released peer-reviewed and insurer-backed analyses reporting substantially fewer injury crashes than human drivers in its operating areas, although comparison methods are still debated." },

  /* 2.3 */
  { h3: "2.3 Deployment reality in 2026" },
  { table: { head: ["Segment", "State of play"], widths: [2200, 7160], rows: [
    ["Robotaxis, US", "Waymo reached roughly 500,000 paid rides a week across about ten US cities by early 2026, a tenfold increase in under two years. Zoox operates purpose-built vehicles without manual controls. Tesla runs a small unsupervised service in several Texas and Florida cities."],
    ["Robotaxis, China", "Baidu’s Apollo Go passed 250,000 fully driverless rides a week in late 2025, operates in over twenty cities, and passed 20 million cumulative rides by early 2026. Pony.ai and WeRide operate at scale domestically."],
    ["Robotaxis, Gulf and Europe", "WeRide launched fully driverless paid service in Dubai with Uber in 2026 and operates in Abu Dhabi and Riyadh; Baidu (with Lyft) and Waymo target European launches, enabled by new UK and German legislation."],
    ["Trucks", "Driverless hub-to-hub freight on highways has begun in Texas. The Forum’s 2025 timeline projects hub-to-hub autonomous trucks could reach roughly 30% of new mid-distance truck sales in the US by 2035."],
    ["Personal vehicles", "Driver assistance (Level 2) dominates. The Forum’s 2025 timeline expects assisted rather than autonomous features to dominate new personal vehicles through 2035."],
  ]}},

  /* 2.4 */
  { h3: "2.4 Robotics and physical AI" },
  { b: [
    "**Industrial robots:** over four million are in operation worldwide (International Federation of Robotics), with China accounting for more than half of new installations. Mature, well-regulated through machinery-safety law and ISO 10218 (revised 2025).",
    "**Collaborative robots (cobots):** designed to work alongside people without fences, using force and speed limits defined in ISO/TS 15066.",
    "**Autonomous mobile robots (AMRs):** navigate warehouses, hospitals and pavements dynamically, unlike automated guided vehicles (AGVs), which follow fixed routes.",
    "**Humanoid and general-purpose robots:** the new frontier. China describes 2025 as its first year of humanoid mass production, with more than 140 domestic manufacturers releasing over 330 models; US firms (including Figure, Agility Robotics, Tesla and Boston Dynamics) are running pilots in factories and logistics.",
    "**Robot foundation models:** ‘vision-language-action’ models that let one AI system control many robot bodies and follow natural-language instructions. Their main bottleneck is training data, which firms gather through simulation and human teleoperation.",
  ]},
  { p: "**Why humanoids matter for governance:** they are designed to operate in human environments (homes, shops, care settings), not behind factory fences, yet existing robot-safety standards were written for industrial settings. No jurisdiction yet has a dedicated regime for general-purpose robots in public or domestic spaces. China published a national **Humanoid Robots and Embodied Intelligence Standard System (2026 edition)** in February 2026, the first attempt at a comprehensive standards architecture." },

  /* 2.5 */
  { h3: "2.5 Drones and advanced air mobility" },
  { p: "Drone regulation turns on **beyond-visual-line-of-sight (BVLOS)** operations, which unlock delivery, inspection and emergency uses. The US Federal Aviation Administration proposed a dedicated BVLOS rule (Part 108) in 2025; the EU is building ‘U-space’ airspace services. Rwanda is the reference case of early integration: working with the Forum’s Centre for the Fourth Industrial Revolution, it adopted performance-based drone regulations in 2018, enabling Zipline’s national medical-delivery network. It illustrates the Forum model precisely: a co-designed framework that a government chose to adopt. Electric vertical take-off and landing (eVTOL) air taxis are moving through certification in the US and EU, with early commercial services targeted in the Gulf." },

  /* 2.6 */
  { h3: "2.6 The regulatory landscape" },
  { table: { head: ["Jurisdiction", "Approach"], widths: [2000, 7360], rows: [
    ["International (UNECE)", "Vehicle rules are harmonised through the UN World Forum for Harmonization of Vehicle Regulations (WP.29) and its automated-vehicle working party (GRVA). UN Regulation 157 (2021) covers Level 3 lane-keeping systems. A UN regulation on Automated Driving Systems adopted in January 2026 anchors approval in a safety-case approach. UN Regulations 155 and 156 require cybersecurity and software-update management systems for new vehicles in the EU, Japan and other contracting parties. The 1968 Vienna Convention on Road Traffic was amended in 2016 to accommodate automated systems."],
    ["United States", "No federal AV statute; federal vehicle safety standards were written for human drivers, so driverless designs rely on exemptions. NHTSA requires crash reporting under a Standing General Order (2021), set out an AV framework in 2025, and in July 2026 granted the first commercial exemption for robotaxis (Zoox, up to 2,500 vehicles a year for two years) while launching work on a national AV performance standard with SAE. States license operations: California through its DMV and Public Utilities Commission; Texas and Arizona more permissively."],
    ["European Union", "Vehicle type approval (including a 2022 regulation for fully automated vehicles in small series); the AI Act, which treats AI safety components in vehicles and machinery as high-risk; the revised Product Liability Directive (2024), which extends strict liability to software; and the Machinery Regulation (applying from January 2027), which adds requirements for autonomous and AI-enabled machines. Germany legislated for Level 4 in 2021."],
    ["United Kingdom", "The Automated Vehicles Act 2024 creates ‘authorised self-driving entities’ legally responsible for the vehicle’s driving when it is self-driving, ‘no-user-in-charge’ operators, and immunity for the human occupant. Secondary legislation followed in 2026, and pilots of driverless passenger services began in spring 2026 under a Self-Driving Vehicle Pilot Scheme."],
    ["China", "City-led permits for testing and commercial operation (Beijing’s autonomous vehicle regulations took effect in 2025; Shenzhen set an early liability framework in 2022; Wuhan hosts the largest fleets), with national pilot programmes for Level 3 and 4 access and national standards for humanoid robots."],
    ["Japan", "Level 4 operations permitted in designated areas since April 2023."],
    ["Gulf", "Dubai has a strategy to make a large share of trips autonomous by 2030; Abu Dhabi and Riyadh host commercial robotaxi services."],
  ]}},
  { p: "**Key standards to recognise:** ISO 26262 (functional safety of vehicle electronics); ISO 21448, known as SOTIF (safety of the intended functionality, covering hazards from performance limits rather than faults); UL 4600 (safety cases for autonomous products); ISO 34502 (scenario-based safety evaluation); ISO 10218 (industrial robots, revised 2025); ISO/TS 15066 (collaborative robots); ISO 13482 (personal care robots)." },

  /* 2.7 */
  { h3: "2.7 The governance issue map for autonomous mobility and robotics" },
  { table: { head: ["Issue", "What is at stake", "Where the gap is"], widths: [2100, 3500, 3760], rows: [
    ["Safety assurance", "How to demonstrate that a learning system is safe enough before and during deployment; no agreed answer to ‘how safe is safe enough’.", "Shared validation approaches (safety cases, scenarios, performance metrics) that regulators in different jurisdictions can recognise."],
    ["Liability and insurance", "Who pays when a driverless vehicle or robot causes harm: manufacturer, operator, software provider, owner.", "The UK has a clear model; the EU relies on product liability after withdrawing its AI Liability Directive; the US is a state patchwork."],
    ["Incident data and shared learning", "Regulators learn slowly if crash and near-miss data stays within one jurisdiction or company.", "Cross-jurisdiction learning mechanisms: the subject of the Forum’s 2026 paper on regulatory diversity."],
    ["Remote operations", "Remote-assistance staff may sit in another jurisdiction; ratios and responsibilities are unregulated in most places.", "Norms for remote supervision and cross-border operation."],
    ["Cybersecurity and software updates", "Over-the-air updates change the vehicle after approval.", "Extending update and cyber governance to robots and to non-vehicle autonomous systems."],
    ["Robots in shared spaces", "Humanoids and mobile robots in homes, shops and care settings fall outside industrial safety rules.", "Early frameworks for general-purpose robots before mass deployment: a textbook early-integration case."],
    ["Work and skills", "Displacement of drivers and warehouse workers; occupational safety alongside robots.", "Transition planning involving employers, unions and governments."],
    ["Public trust and accessibility", "Incidents trigger backlash; the benefits for elderly and disabled users are rarely designed in.", "Inclusive design and transparent performance reporting."],
  ]}},
  { h3: "2.8 The live debates" },
  { b: [
    "**How safe is safe enough?** Should automated vehicles merely match a careful and competent human driver (the benchmark in the UK’s approach) or be demonstrably safer before scaling? Germany’s ethics commission (2017) argued for a ‘positive risk balance’. The measurement question (which human baseline, which crash types) is as contested as the threshold.",
    "**Sensor redundancy.** Most operators combine cameras, radar and lidar; Tesla argues cameras alone are sufficient. Regulators must decide whether to be technology-neutral or require redundancy.",
    "**Explainability versus performance.** End-to-end neural systems may drive better but are harder to explain and validate than modular stacks.",
    "**Who regulates, in the US?** Whether federal performance standards should pre-empt the patchwork of state rules.",
    "**Humanoid timelines.** Supporters expect rapid deployment in logistics and manufacturing; sceptics point to cost, dexterity, reliability and safety, and expect narrower uses for years.",
    "**Work and public space.** How fast to accept displacement of drivers and warehouse workers, and how much public space (pavements, kerbs, airspace) to allocate to machines.",
  ]},
  { pageBreak: true },
);

module.exports = { blocks };

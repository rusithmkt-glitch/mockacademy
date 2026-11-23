import { createBank } from "./build";

/**
 * IELTS Academic Reading mock: three original passages, 28 items worth 40
 * marks in 60 minutes. Question types mirror the real paper where the engine
 * can carry them — multiple choice, True/False/Not Given, Yes/No/Not Given,
 * matching headings, matching information and matching features; summary
 * completion is modelled as a matching set against a word list. Topic
 * breakdowns name the skill, not a course module: there is no lesson to
 * deep-link to yet, so every topic maps to the empty module id.
 */
export const ieltsReadingTopicModules = {
  "Multiple choice": "",
  "True, false, not given": "",
  "Writer's claims": "",
  "Matching features": "",
  "Matching headings": "",
  "Matching information": "",
  "Summary completion": "",
} as const;

type IeltsTopic = keyof typeof ieltsReadingTopicModules;

const bank = createBank<IeltsTopic>("ieltsr", ieltsReadingTopicModules);

const { mc, choice, match } = bank;

// ---------------------------------------------------------------------------
// Passage 1 — The penny universities (13 marks)
// ---------------------------------------------------------------------------

mc(
  "Multiple choice",
  "According to paragraph A, what is true of coffee's arrival in England?",
  "The first English coffeehouse opened in Oxford before any in London",
  [
    "Coffee was first brewed in London by merchants returning from the Middle East",
    "Jacob, the first supplier, invented the method of preparing coffee",
    "By 1700 London had around two hundred coffeehouses in operation",
  ],
  "Paragraph A dates the first English coffeehouse to Oxford in 1650, supplied by Jacob, a returning servant; London's two hundred came within the following decade and the two thousand by 1700. The preparation was learned abroad, not invented, and the 1700 figure is nearly two thousand, not two hundred.",
);

mc(
  "Multiple choice",
  "In paragraph B, the penny paid at the door bought which of the following?",
  "Coffee, tobacco and a place in the room's conversation",
  [
    "A membership ticket valid at any London coffeehouse",
    "A meal and a pipe of tobacco",
    "Priority seating reserved for traders and merchants",
  ],
  "The text is explicit: the coin bought a bowl of coffee, a pipe of tobacco and a seat in a room full of talk, with no membership or rank required. Meals and priority seating are never mentioned, and membership is ruled out by the passage itself.",
);

mc(
  "Multiple choice",
  "What does paragraph C say about Edward Lloyd's?",
  "The trading information discussed there grew into a marine insurance market",
  [
    "It was founded to serve poets and their critics",
    "It replaced Jonathan's as the centre of cargo trade",
    "It was nationalised by the Crown after 1688",
  ],
  "Lloyd's, founded in 1688, gathered underwriters, captains and brokers whose talk about lost vessels hardened into the insurance market that still carries the name. Poets belonged to Will's, and nothing in the passage connects Lloyd's to Jonathan's succession or to the Crown.",
);

mc(
  "Multiple choice",
  "What happened when Charles II tried to suppress the coffeehouses?",
  "Protests from Londoners and the City led to the proclamation's withdrawal within months",
  [
    "It took effect for a year before the king lifted it",
    "It banned the sale of coffee across the whole of England",
    "It succeeded because the Royal Society refused to intervene",
  ],
  "Paragraph D records that the 1675 proclamation collapsed almost at once: petitions, street protest and City objections brought withdrawal within months. It never took effect, it targeted the houses rather than the drink, and the Society's habitues are not said to have lobbied either way.",
);

mc(
  "Multiple choice",
  "According to paragraph E, what chiefly drove the coffeehouse's long decline?",
  "Cheaper tea moved conversation from public rooms into the home",
  [
    "The Crown's renewed suppression campaigns",
    "The guilds reclaiming their halls after the Great Fire",
    "A succession of scandals in the specialised clubs",
  ],
  "The writer attributes decline to 'leaves' rather than politics: tea fell in price through the eighteenth century and conversation went domestic, while the public function passed to the daily press. The guild halls were lost in the Fire, not reclaimed, and no scandals are mentioned.",
);

choice(
  "True, false, not given",
  "Admission to a coffeehouse required the visitor to hold a formal membership.",
  "False",
  ["True", "Not given"],
  "Paragraph B states there was 'no membership, no rank and no ticket of entry beyond the coin itself'. The statement contradicts the passage, so False.",
);

choice(
  "True, false, not given",
  "Businessmen preferred coffeehouses to taverns because the environment kept them sober.",
  "True",
  ["False", "Not given"],
  "Paragraph B says the coffeehouse 'promised sobriety' and that traders shut out of the guild halls found there a substitute exchange 'without the fog of ale'. The preference and the reason are both stated, so True.",
);

choice(
  "True, false, not given",
  "The Royal Society held its founding meeting in a London coffeehouse.",
  "Not given",
  ["True", "False"],
  "Paragraph C says the Society 'owed something to the coffeehouse' and that several early members were habitues, but it never says where any Society meeting was held. The claim is plausible from the text yet unstated, so Not given.",
);

choice(
  "True, false, not given",
  "The pamphlet styled as a petition of city wives supported the king's suppression plan.",
  "False",
  ["True", "Not given"],
  "Paragraph D describes the pamphlet as joining 'the general mockery' — it complained that coffee made husbands too sober to quarrel. Far from backing suppression, it satirised the scene, so False.",
);

match(
  "Matching features",
  "Which London coffeehouse is each description about? Choose the correct letter for each statement.",
  [
    "The house associated with poets and their critics",
    "The house that inherited the literary trade when Will's declined",
    "The Change Alley house where merchants dealt in ships and cargoes",
    "The house whose tables gathered underwriters, captains and brokers",
  ],
  [
    "Will's",
    "Button's",
    "Jonathan's",
    "Edward Lloyd's",
    "The Great Exchange",
    "The Royal Society",
  ],
  [0, 1, 2, 3],
  "Paragraph C assigns each specialisation: Will's filled with poets, Button's took the literary business after it, Jonathan's served the ship-and-cargo merchants, and Lloyd's drew the underwriters. The Great Exchange and the Royal Society appear in the passage's story but are not coffeehouses at all.",
);

// ---------------------------------------------------------------------------
// Passage 2 — The night shift (13 marks)
// ---------------------------------------------------------------------------

mc(
  "Multiple choice",
  "During slow-wave sleep, what does the hippocampus do, according to paragraph A?",
  "It replays the day's firing patterns and passes them to the cortex",
  [
    "It stores long-term memories directly and permanently",
    "It suspends all activity until the cortex finishes cleaning",
    "It generates the slow brain waves that start the sleep cycle",
  ],
  "Paragraph A describes short-term storage in the hippocampus being replayed at speed and transferred outward to the cortex for long-term keeping. Direct permanent storage belongs to the cortex, and the waves belong to the whole brain's slow-wave state, not to the hippocampus as a generator.",
);

mc(
  "Multiple choice",
  "What did the 2013 team report about the sleeping brain?",
  "It clears metabolic waste far more efficiently than the waking brain",
  [
    "It produces more cerebrospinal fluid than previously measured",
    "It repairs neurodegenerative damage completely overnight",
    "It slows its own metabolism to conserve energy",
  ],
  "Paragraph B reports the finding: pulses of cerebrospinal fluid flush between-cell spaces during sleep, removing among other things proteins implicated in neurodegenerative disease. Complete repair and fluid production rates are claims the passage never makes.",
);

mc(
  "Multiple choice",
  "On the account described in paragraph C, what happens to emotional memories during REM sleep?",
  "They are reprocessed while the brain's anxiety chemistry is at its daily minimum",
  [
    "They are erased along with the day's trivial facts",
    "They are replayed with their original stress levels intact",
    "They are transferred to the hippocampus for short-term storage",
  ],
  "Paragraph C's model is overnight therapy: stress neurotransmitters fall to a daily minimum while emotional memories are reworked, dialling the charge down. Erasure, intact stress and reversed transfer all contradict the described mechanism.",
);

mc(
  "Multiple choice",
  "Which limitation of the field does paragraph D emphasise?",
  "Much of the central evidence is correlational, leaving causation unsettled",
  [
    "The imaging studies have been repeated so often they have lost value",
    "Animal work has been wrongly applied to human language",
    "Few researchers still believe sleep affects memory at all",
  ],
  "Paragraph D's caution is about direction of causation and evidence quality: poor sleepers perform poorly, and imaging shows patterns consistent with consolidation. The passage never questions repetition, language, or the field's overall belief.",
);

mc(
  "Multiple choice",
  "How do sleep researchers, as a group, react to popular claims about sleep?",
  "They see the claims as having run ahead of the laboratory findings",
  [
    "They endorse the claims as accurate summaries",
    "They deny any link between sleep and learning",
    "They argue the public underestimates the problem",
  ],
  "Paragraph D says researchers 'have watched a decade of popular claims outrun the laboratory findings' and phrase conclusions carefully. The other positions are attributed to no one in the passage.",
);

choice(
  "Writer's claims",
  "The writer states that twentieth-century psychology treated sleep as a period in which learning stopped.",
  "Yes",
  ["No", "Not given"],
  "Paragraph A opens with exactly that framing — 'the day's pause button… a state in which learning simply stopped' — before describing its inversion. The claim matches the writer's statement, so Yes.",
);

choice(
  "Writer's claims",
  "The writer states that the brain's waste clearance follows the rhythm of slow brain waves.",
  "Yes",
  ["No", "Not given"],
  "Paragraph B describes cerebrospinal fluid moving 'in pulses that follow the slow brain waves'. This is stated by the writer, so Yes.",
);

choice(
  "Writer's claims",
  "The writer estimates the economic cost of poor sleep to the health service.",
  "Not given",
  ["Yes", "No"],
  "Nothing in the passage puts a monetary or economic figure on sleep loss; the writer's quantified claims are about mechanism and evidence quality. An estimate may exist somewhere in the field, but the passage gives none, so Not given.",
);

choice(
  "Writer's claims",
  "The writer concludes that the evidence linking sleep and memory is now conclusive.",
  "No",
  ["Yes", "Not given"],
  "Paragraph D says the opposite: causation 'is not always settled', the conclusion is 'narrower than what is usually printed'. The writer explicitly withholds the conclusive verdict, so No.",
);

match(
  "Matching headings",
  "Choose the correct heading for paragraphs A–D from the list below.",
  [
    "Paragraph A",
    "Paragraph B",
    "Paragraph C",
    "Paragraph D",
  ],
  [
    "The brain at work after dark",
    "A cleansing system revealed",
    "Feelings edited overnight",
    "Claims that outrun the evidence",
    "Why dreams predict waking mood",
    "The price of insomnia",
    "Two hemispheres, one transfer",
  ],
  [0, 1, 2, 3],
  "A is the memory-rehearsal picture (the brain working after dark); B is the janitorial discovery; C is REM as overnight therapy for feelings; D is the caution about evidence. 'Dreams predict mood', 'the price of insomnia' and 'two hemispheres' name things the passage never discusses.",
);

// ---------------------------------------------------------------------------
// Passage 3 — River builders (14 marks)
// ---------------------------------------------------------------------------

mc(
  "Multiple choice",
  "What is true of the beaver's return to Britain, according to paragraph A?",
  "A self-established Scottish population was recognised officially after the Knapdale trial",
  [
    "The Knapdale release of 2009 made all later legislation unnecessary",
    "Beavers reappeared in England forty years before any Scottish sighting",
    "The species was reintroduced from breeding stock imported from Europe",
  ],
  "Paragraph A's sequence is: animals turning up unofficially from 2005, a trial release in Knapdale in 2009, then official recognition of the self-established Scottish population in 2016. Nothing was imported, the English gap was four centuries, and the trial did not replace the legislation.",
);

mc(
  "Multiple choice",
  "According to paragraph B, what do beaver ponds do to water movement?",
  "They hold water overnight and slow its onward passage, flattening flood peaks",
  [
    "They increase the speed of streams leaving the hillside",
    "They evaporate enough water to matter in drought years",
    "They divert rivers into underground channels",
  ],
  "The paragraph's chain is straight channels to pond chains, water sitting overnight, moving on slower, with the crest of downstream flood peaks flattened. Speed-up, evaporation and underground diversion appear nowhere.",
);

mc(
  "Multiple choice",
  "What have monitoring studies in Welsh and English catchments established?",
  "Dam complexity increases as the catchment the colony works grows",
  [
    "Colonies in steep streams build shallower ponds than flat-land ones",
    "Beaver engineering works only on small headwater streams",
    "Pond volume is proportional to the number of animals in the colony",
  ],
  "Paragraph C's measured finding is scaling with the landscape: complexity rises as the catchment grows, letting a colony on a hillside stream hold water out of proportion to its size. The other readings either invert or invent the relationship.",
);

mc(
  "Multiple choice",
  "Why do anglers' organisations object to beaver dams?",
  "The dams block migrating fish and the ponds can be poor nurseries for juvenile fish",
  [
    "The ponds attract too many birds that disturb the banks",
    "The dams raise water levels over official fishing boundaries",
    "Sediment behind dams destroys spawning gravel entirely",
  ],
  "Paragraph D gives the anglers' two worries: obstruction of adult salmon and sea trout, and warming, silting ponds as unsuitable juvenile nurseries. Birds, boundaries and total gravel destruction are not among them — silting is stated, its completion is not.",
);

mc(
  "Multiple choice",
  "What does paragraph E concede about the licensing scheme?",
  "Both of its criticisms contain part of the truth",
  [
    "It has fully resolved the conflict between farmers and ecologists",
    "It lets landowners kill beavers without any evidence of damage",
    "It was modelled on systems that failed in continental Europe",
  ],
  "The paragraph closes by saying the 'unenforceable bureaucracy' and 'population control dressed as conservation' descriptions each contain part of the truth, with the machinery young. Resolution, no-evidence killing and continental models are all contradicted or absent.",
);

mc(
  "Multiple choice",
  "What does paragraph F suggest about earlier British conservation efforts?",
  "They relied on human control — fences, schedules and wardens — rather than negotiated outcomes",
  [
    "They achieved their goals before the beaver's arrival undid them",
    "They were written without any public consultation",
    "They treated species as more important than landscapes",
  ],
  "F's contrast is that every earlier story 'ended with a fence, a schedule and a warden', while the beaver story ends with a species acting and a society negotiating after the fact. Failure, consultation and species-versus-landscape rankings are not claimed.",
);

match(
  "Summary completion",
  "Choose the correct word from the list for each gap in the summary of paragraphs B and C.",
  [
    "Gap 1: Water that once rushed off the hillside in an afternoon now sits ___ in the pond network overnight.",
    "Gap 2: The slower release flattens the ___ of flood peaks reaching downstream towns.",
    "Gap 3: Sediment and the nutrients it carries drop out ___ the dams instead of scarring the river below.",
    "Gap 4: A colony on a steep hillside stream can hold back water out of proportion to its own ___.",
  ],
  ["stored", "crest", "behind", "size", "colour", "year"],
  [0, 1, 2, 3],
  "The summary tracks B and C almost word for word: water is stored overnight, the crest (height) of flood peaks is flattened, sediment drops out behind the dams, and the held volume is out of proportion to the colony's size. 'Colour' and 'year' fit no gap in the passage's account.",
);

match(
  "Matching information",
  "In which paragraph does the writer mention each of the following?",
  [
    "A protected status granted to animals that had arrived without anyone's plan",
    "The volume of water a colony can hold relative to the land it works on",
    "Crops lost to browsing and drains left unable to clear",
    "Rules governing what may be done with the bodies of removed animals",
  ],
  ["A", "B", "C", "D", "E", "F"],
  [0, 2, 3, 4],
  "The unplanned-but-legislated population is A; the scaling measurement is C; maize, wheat and backlogged culverts are D; the carcass-disposal rule is E. B covers the hydraulic effects and F the philosophical argument, neither of which the statements touch.",
);

export const ieltsReadingMockQuestions = bank.questions;

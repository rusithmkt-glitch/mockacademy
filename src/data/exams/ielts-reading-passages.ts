import type { ReferenceMaterial } from "@/lib/exam/types";

/**
 * The IELTS Academic Reading mock is open book in the way the real paper is:
 * the three passages stay available for the whole hour. Each passage carries
 * its own question set, labelled by paragraph so matching items can be
 * answered without scrolling.
 */
export const ieltsReadingPassages: ReferenceMaterial[] = [
  {
    title: "Passage 1 — The penny universities",
    body: `A
Coffee reached England in the middle of the seventeenth century, and it did not arrive gently. Within a decade of the first English coffeehouse opening in Oxford in 1650, supplied by a returning servant named Jacob who had learned the preparation abroad, London had more than two hundred establishments where the dark brew was sold. By 1700 the capital counted nearly two thousand coffeehouses, roughly one for every hundred inhabitants, and the drink had become what the newspaper would later become: the ordinary machinery of public information.

B
The economics were simple. Admission cost a penny, and the penny bought a bowl of coffee, a pipe of tobacco and — the part that mattered — a seat in a room full of talk. There was no membership, no rank and no ticket of entry beyond the coin itself, which is why the coffeehouse was repeatedly called, half in jest and half in earnest, a "penny university". A clerk with a penny could sit beside a merchant, an officer or a natural philosopher and hear the same news, argued over at the same tables. Unlike the tavern, the coffeehouse promised sobriety. Business could be transacted there without the fog of ale, and London's traders, shut out of the old guild halls after the Great Fire, found in the coffeehouse a substitute exchange.

C
Different houses specialised, and their specialisations hardened into institutions. Will's in Covent Garden filled with poets and their critics; Button's took over the literary business after Will's declined. Jonathan's on Change Alley became the meeting place of merchants dealing in ships and cargoes, and Edward Lloyd's, founded in 1688, gathered underwriters, captains and brokers around its tables until the information traded there — who had lost what vessel, on what passage — hardened into the marine insurance market that still bears Lloyd's name. The Royal Society, formally founded in 1660, owed something to the coffeehouse as well: several of its early members were habitues who carried experimental reports back in their pockets, and the rooms where coffee was served doubled as the era's informal lecture theatres.

D
This power to assemble strangers around arguments made the coffeehouse politically dangerous, at least in the eyes of the Crown. Charles II issued a proclamation in December 1675 intended to suppress the houses, on the familiar grounds that seditious libel circulated faster over coffee than over beer. The plan collapsed almost at once. Londoners protested in petitions and in the streets, the City's own representatives objected, and within months the king withdrew the proclamation and contented himself, like everyone else, with drinking his coffee. An anonymous pamphlet of the period, styled as a petition of the city's wives against the new drink because it made their husbands too sober to quarrel, joined the general mockery.

E
The coffeehouse's long decline, when it came, had less to do with politics than with leaves. Tea, once a luxury sold by the ounce, fell in price through the eighteenth century and moved from the coffeehouse counter into the drawing room, where conversation took on a more domestic and less public character. The great houses fragmented: some became specialised clubs, open only to members; some became auction rooms; one became an insurance market. What survived of the penny university was its function rather than its form. The habit of buying a little news and a lot of talk, in public, for a small coin, passed straight from the coffeehouse to the daily press.`,
  },
  {
    title: "Passage 2 — The night shift",
    body: `A
For most of the twentieth century, sleep was treated by psychology as the day's pause button — a state in which learning simply stopped. That view has inverted. The current picture, assembled from electrophysiology and functional imaging, is of a brain that works through the night on the day's material. During slow-wave sleep, the deep stage that dominates the first half of the night, the hippocampus — the structure that holds new experiences in short-term storage — replays the day's firing patterns at speed, passing them outward to the cortex for long-term keeping. The memory is not preserved by resting; it is, in a literal sense, rehearsed while the sleeper is unconscious.

B
A second discovery gave the night shift a janitorial dimension. In 2013 a team reported that the brain clears metabolic waste far more efficiently during sleep than during wakefulness, flushing the spaces between cells with cerebrospinal fluid in pulses that follow the slow brain waves. The clearance appears to remove among other things the proteins whose accumulation is implicated in neurodegenerative disease. If the first finding made sleep the librarian of memory, this one made it the building's maintenance crew — and it is harder to dismiss a function on which the building's structural integrity depends.

C
The other half of the night belongs to rapid-eye-movement sleep, and its business seems to be not facts but feelings. REM periods lengthen toward morning, and during them the brain's stress chemistry changes: concentrations of the neurotransmitters that accompany anxiety fall to their daily minimum while emotional memories are reprocessed in that low-arousal environment. The account that has emerged from this work is of sleep as overnight therapy — the memory of a distressing day retained, but its emotional charge dialled down. On this model, a night's sleep does not merely protect what was learned yesterday; it edits how yesterday feels.

D
None of this should be oversold. Much of the field's central evidence remains correlational: people who sleep poorly perform poorly on memory tasks, and the direction of causation is not always settled. The replay experiments are largely animal work, and the human imaging studies show patterns consistent with consolidation rather than consolidation itself. Sleep researchers, who have watched a decade of popular claims outrun the laboratory findings, tend to phrase the conclusion carefully. What can be said with confidence is narrower than what is usually printed: that sleep before learning improves what gets encoded, that sleep after learning improves what is retained, and that treating either as optional is a strategy no other branch of health practice would be allowed to run on.`,
  },
  {
    title: "Passage 3 — River builders",
    body: `A
For four centuries the beaver was England's largest missing animal, hunted for fur and meat until the last of its kind vanished, probably in the eighteenth century. Its return began unofficially: pairs turned up in Scottish rivers from 2005 onward, the descendants of escaped or released animals, and their presence prompted a decade of argument before policy caught up with ecology. A trial reintroduction into Knapdale in 2009 was followed, in 2016, by official recognition of the self-established Scottish population as a native protected species — one of the few places in Europe where a large mammal has re-arrived on its own and then been legislated into existence.

B
The animal's significance is not sentimental but hydraulic. Beavers are ecosystem engineers: by felling trees and banking streams with brushwood and mud, they convert straight, fast channels into chains of ponds. The consequences cascade downstream. Water that once rushed off a hillside in an afternoon now sits in the pond network overnight and moves on slower, flattening the crest of flood peaks; sediment and the nutrients it carries drop out behind the dams instead of scarring the river below; and the flooded margins, the dead timber and the open water together host a richer community of insects, birds and bats than the channel that used to run there.

C
The hydrology has now moved from anecdote toward measurement. Monitoring in Welsh and English catchments has found that the engineering scales with the landscape: dam complexity — how many structures, and how deep the impoundment — increases as the catchment grows, so that a beaver colony working a steep hillside stream can hold back a volume of water out of proportion to its size. Modelling and field records both suggest that restored beaver ponds reduce the speed and height of flood waves reaching downstream towns, and that the effect is strongest for exactly the mid-sized storms that cause the most property damage. It is not flood defence as engineers would design it, but it is flood defence as a watershed would grow it.

D
Predictably, not everyone downstream shares the ecologists' enthusiasm. Farmers lose grazing fields to flooding, and maize and winter wheat to browsing; some have found culverts blocked and drains backlogged. Anglers' organisations worry that dams obstruct adult salmon and sea trout migrating to spawn, and that warming, silting ponds are poor nurseries for the juvenile fish that coarse and game fisheries depend on. Riparian owners object, with some justification, to a protected animal rewriting the water table beneath their land without their consent — a legal asymmetry that the licensing system has been built to manage rather than to solve.

E
Management now attempts the compromise. A licensing regime allows landowners and authorities to remove, exclude or kill beavers where specific damage can be demonstrated, with mitigation — pipes through dams, fencing around crops, structures that let fish pass — tried first. Where animals are destroyed, the carcasses may not be disposed of as waste; where they are relocated, they must go where they will not simply repeat the problem. The scheme's critics on one side call it unenforceable bureaucracy and on the other a licence for population control dressed as conservation. Both descriptions contain part of the truth, which is that the machinery is young and the animal is not going back into the river's history.

F
The beaver's return is, finally, an argument about how much agency a landscape is owed. Every earlier conservation story in Britain ended with a fence, a schedule and a warden; this one ended, so far, with a species doing what its instincts dictate and a society negotiating the consequences after the fact. Whether that is ecological humility or policy failure depends on the witness — but the negotiation itself marks a shift. The question the beaver puts is not whether humans can manage rivers. It is whether management can make room for a river's own ambitions, and the ponds spreading across the hill streams are the animal's answer, written in water, before the debate has finished.`,
  },
];

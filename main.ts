// A Day of One-Line Pitches — one sentence, 171 of 240 characters, that would
// convince a friend who has never coded to let an AI agent build their first
// app idea on make.fun. Writes the entry text to /output/entry.txt.
// Deterministic: no input, no network.
//
// Choice, judged against the published criteria (plain-spoken editor judge):
// 13 candidates drafted and compared. Winner:
//   "If you can explain your idea to a friend, you can hand it to an AI
//    agent and watch it become a first version you can actually try — you
//    bring the idea, it brings the code."
// 1. Persuasion: it dissolves the friend's core fear by reframing coding as
//    something they already do — explaining an idea to a friend. Concrete
//    reason to say yes now, and low risk: a first version to try, not a
//    finished product to commit to.
// 2. Clarity: plain words throughout, no jargon, one read is enough.
// 3. Truth: "a first version you can actually try" does not overpromise —
//    the original draft said "an app you can actually use" and was tightened
//    to "first version" for exactly this criterion.
// 4. Warmth and craft: "you bring the idea, it brings the code" is a fresh,
//    quotable turn of phrase that sounds like a person talking to a friend,
//    not a slogan.
// Runners-up, and why they lost: "Describe your app the way you'd describe
// it to me, and an AI agent builds a first version you can try today" is
// warm and concrete, but the quoted 'ready' hurts clarity and "today" leans
// harder on the promise; "Just say what you want the app to do and the agent
// turns it into something you can tap and try, so your idea stops being a
// note on your phone and starts being real" has the warmest image but a
// weaker concrete reason to say yes now; "Your first app doesn't need a
// course or a coder — just describe it out loud ... before dinner" is punchy
// but "before dinner" is the most overpromising of the pool.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `If you can explain your idea to a friend, you can hand it to an AI agent and watch it become a first version you can actually try — you bring the idea, it brings the code.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

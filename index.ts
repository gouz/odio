import { MuseScoreParser } from "./src/MuseScoreParser/MuseScoreParser";

const file = `${process.cwd()}/tmp/lune.mscz`;
const p = await MuseScoreParser.load(file);

//await Bun.write("tmp/lune.json", JSON.stringify(p.json, null, 2));
await p.convert();
console.log("Conversion complete!");

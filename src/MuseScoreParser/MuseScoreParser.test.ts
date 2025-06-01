import { describe, it, expect } from "bun:test";
import { MuseScoreParser } from "./MuseScoreParser";

describe("Test MuseScore file", () => {
  it("should load a mscz file", async () => {
    const file = `${process.cwd()}/tmp/lune.mscz`;
    const p = await MuseScoreParser.load(file);
    expect(p.file).toEqual(file);
  });

  it("should fetch the content of a mscx", async () => {
    const file = `${process.cwd()}/tmp/lune.mscz`;
    const p = await MuseScoreParser.load(file);
    expect(p.mscx.length > 0).toBe(true);
  });
});

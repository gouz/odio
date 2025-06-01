import { Open } from "unzipper";
import { XMLParser } from "fast-xml-parser";
import type { MuseScoreJSON } from "./MuseScoreParser.types";

export class MuseScoreParser {
  private _json: MuseScoreJSON;
  constructor(
    private _file: string,
    private _mscx: string,
  ) {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      allowBooleanAttributes: true,
    });
    this._json = parser.parse(this._mscx);
  }

  get file() {
    return this._file;
  }

  get mscx() {
    return this._mscx;
  }

  get json() {
    return this._json;
  }

  async convert() {
    const mscore = "/Applications/MuseScore 4.app/Contents/MacOS/mscore";
    const args = [mscore, "-P", "-o", "lune.mp3", this._file];
    const proc = Bun.spawn(args);
    console.log(args.join(" "));
    await proc.exited;
  }

  static async load(file: string) {
    const directory = await Open.file(file);
    const mscx = [...directory.files].find((f) => f.path.endsWith(".mscx"));
    const content = (await mscx?.buffer()) ?? "";
    return new MuseScoreParser(file, content.toString());
  }
}

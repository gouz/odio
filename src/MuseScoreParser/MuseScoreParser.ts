import { Open, type File } from "unzipper";

export class MuseScoreParser {
	constructor(
		private _file: string,
		private _mscx: string,
	) {}

	get file() {
		return this._file;
	}

	get mscx() {
		return this._mscx;
	}

	static async extract(file: string) {
		const directory = await Open.file(file);
		const mscx = [...directory.files].find((f) => f.path.endsWith(".mscx"));
		const content = (await mscx?.buffer()) ?? "";
		return new MuseScoreParser(file, content.toString());
	}
}

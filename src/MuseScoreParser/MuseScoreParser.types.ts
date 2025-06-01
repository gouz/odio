export type MuseScoreJSONPart = {
  trackName: string;
  Instrument: {
    longName: string;
    shortName: string;
    instrumentId: string;
    Channel: {
      program: string;
      synti: string;
      midiPort: number;
      midiChannel: number;
    };
  };
};

export type MuseScoreJSONMeasure = {
  voice: {
    TimeSig: {
      sigN: number;
      sigD: number;
    };
    Tempo: {
      tempo: number;
    };
    Rest: {
      durationType: string;
      duration: string;
    };
  };
};

export type MuseScoreJSONStaff = {
  Measure: MuseScoreJSONMeasure[];
};

export type MuseScoreJSON = {
  museScore: {
    Score: {
      Part: MuseScoreJSONPart[];
      Staff: MuseScoreJSONStaff[];
    };
  };
};

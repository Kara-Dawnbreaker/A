export type StationId =
  | 'flow-studio'
  | 'beat-machine'
  | 'reflex-arcade'
  | 'blink'
  | 'life-organ'
  | 'ledger'
  | 'machine-anomalies'
  | 'research-cases';

export interface StationDefinition {
  id: StationId;
  number: string;
  name: string;
  shortDescription: string;
  description: string;
  symbol: string;
  category: string;
}

export type AppRoute =
  | { type: 'home' }
  | { type: 'station'; stationId: StationId };

import type { StationDefinition } from '../types/station';

export const stations: StationDefinition[] = [
  {
    id: 'flow-studio',
    number: '01',
    name: 'Flow Studio',
    shortDescription: 'Make patterns move.',
    description: 'A generative particle canvas for experimenting with motion, turbulence and colour.',
    symbol: '◌',
    category: 'VISUAL',
  },
  {
    id: 'beat-machine',
    number: '02',
    name: 'Beat Machine',
    shortDescription: 'Build a rhythm.',
    description: 'A five-track, sixteen-step sequencer for creating small electronic patterns.',
    symbol: '♫',
    category: 'AUDIO',
  },
  {
    id: 'reflex-arcade',
    number: '03',
    name: 'Reflex Arcade',
    shortDescription: 'Trust your reactions.',
    description: 'A timed reaction-grid challenge with targets, combos and score records.',
    symbol: '▦',
    category: 'ARCADE',
  },
  {
    id: 'blink',
    number: '04',
    name: 'Blink',
    shortDescription: 'Catch the moment.',
    description: 'A focused reaction challenge that gradually tightens its timing window.',
    symbol: '◉',
    category: 'ARCADE',
  },
  {
    id: 'life-organ',
    number: '05',
    name: 'Life Organ',
    shortDescription: 'Grow a living pattern.',
    description: 'A cellular automaton whose evolving patterns can generate musical notes.',
    symbol: '✳',
    category: 'EXPERIMENT',
  },
  {
    id: 'ledger',
    number: '06',
    name: 'The Ledger',
    shortDescription: 'Keep the machine’s record.',
    description: 'A central archive for activity, assignments, achievements and progression.',
    symbol: '▤',
    category: 'ARCHIVE',
  },
  {
    id: 'machine-anomalies',
    number: '07',
    name: 'Machine Anomalies',
    shortDescription: 'Something is behaving strangely.',
    description: 'Temporary system-wide anomalies that alter the experience across stations.',
    symbol: '⌁',
    category: 'SYSTEM',
  },
  {
    id: 'research-cases',
    number: '08',
    name: 'Research Cases',
    shortDescription: 'Investigate the unexplained.',
    description: 'Five unusual case files with notes and a distinction between evidence and claims.',
    symbol: '⌕',
    category: 'ARCHIVE',
  },
];

export const getStationById = (id: string) =>
  stations.find((station) => station.id === id);

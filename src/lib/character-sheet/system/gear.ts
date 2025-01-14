import type { Attack, Armor, Ammunition } from '../../types';

// TODO gear will later be fetched

export const WEAPONS: Attack[] = [
  {
    name: 'Quarterstaff',
    key: 'quarterstaff-m',
    bonus: 0,
    damage: '1d6/1d6',
    damageDice: 6,
    critical: 2,
    range: null,
    type: 'bludgeoning',
    notes: '',
    weight: 4,
    ammunition: null
  },
  {
    name: 'Dagger',
    key: 'dagger-m',
    bonus: 0,
    damage: '1d4',
    damageDice: 4,
    critical: 2, // 19-20/ x2
    range: 10,
    type: 'piercing', // or slashing
    notes: '',
    weight: 1,
    ammunition: null
  },
  {
    name: 'Nunchaku',
    key: 'nunchaku-m',
    bonus: 0,
    damage: '1d6',
    damageDice: 6,
    critical: 2,
    range: null,
    type: 'bludgeoning',
    notes:
      '+2 bonus on opposed attack rolls made to disarm an enemy (including the roll to avoid being disarmed if such an attempt fails).',
    weight: 2,
    ammunition: null
  },
  {
    name: 'Longbow',
    key: 'longbow-m',
    bonus: 0,
    damage: '1d8',
    damageDice: 8,
    critical: 3,
    range: 100,
    type: 'piercing',
    notes: '',
    weight: 3,
    ammunition: null
  },
  {
    name: 'Battleaxe',
    key: 'battleaxe-m',
    bonus: 0,
    damage: '1d8',
    damageDice: 8,
    critical: 3, // 19-20/ x2
    range: null,
    type: 'slashing',
    notes: '',
    weight: 6,
    ammunition: null
  },
  {
    name: 'Rapier',
    key: 'rapier-m',
    bonus: 0,
    damage: '1d6',
    damageDice: 6,
    critical: 3, // 18-20/ x2
    range: null,
    type: 'piercing',
    notes: '',
    weight: 2,
    ammunition: null
  }
];

export const ARMOR: Armor[] = [
  {
    name: 'Padded Armor',
    key: 'padded-m',
    type: 'light',
    bonus: 1,
    maxDexterity: 8,
    checkPenalty: 0,
    spellFailure: 5,
    speed: 30,
    weight: 10,
    specialProperties: ''
  },
  {
    name: 'Leather Armor',
    key: 'leather-m',
    type: 'light',
    bonus: 2,
    maxDexterity: 6,
    checkPenalty: 0,
    spellFailure: 10,
    speed: 30,
    weight: 15,
    specialProperties: ''
  }
];

export const AMMUNITION: Ammunition[] = [
  {
    name: 'Arrows',
    weight: 3,
    count: 20
  }
];

// light, medium, and heavy upper bounds (index = strength - 1)
export const ENCUMBERANCE = [
  [3, 6, 10],
  [6, 13, 20],
  [10, 20, 30],
  [13, 26, 40],
  [16, 33, 50],
  [20, 40, 60],
  [23, 46, 70],
  [26, 53, 80],
  [30, 60, 90],
  [33, 66, 100],
  [38, 76, 115],
  [43, 86, 130],
  [50, 100, 150],
  [58, 116, 175],
  [66, 133, 200],
  [76, 153, 230],
  [86, 173, 260],
  [100, 200, 300],
  [116, 233, 350],
  [133, 266, 400],
  [153, 306, 460],
  [173, 346, 520],
  [200, 400, 600],
  [233, 466, 700],
  [266, 533, 800],
  [306, 613, 920],
  [346, 693, 1040],
  [400, 800, 1200],
  [466, 933, 1400]
] as const;

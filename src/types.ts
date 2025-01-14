export type Class = 'Ranger' | 'Bard' | 'Monk' | 'Druid' | 'Sorcerer';

export type Size = 'S' | 'M';

export type Level =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export interface FixedLengthArray<L extends number, T> extends Array<T> {
  length: L;
}

export type LengthTwentyArray = FixedLengthArray<20, number>;

export type CharacterMetadata = {
  name: string;
  player: string;
  class: Class;
  level: Level;
  size: Size;
  age: number;
  race: string;
  gender: string;
  alignment: string;
  height: string;
  weight: string;
  eyes: string;
  deity: string;
  skin: string;
  hair: string;
};

export type AbilityName = keyof Abilities;

export type Abilities = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  // TODO temporary ability modifiers
};

export type Stats = {
  hp: number;
  currentHp: number;
  nonleathalDamage: number;
  initiative: number;
  speed: number;
  naturalAc: number;
  deflectAc: number;
  miscAc: number;
  spellResistance: number;
  damageReduction: number;
};

export type Save = {
  magic: number;
  misc: number;
  temporary: number;
};

export type Saves = {
  fortitude: Save;
  reflex: Save;
  will: Save;
};

export type Ammunition = {
  name: string;
  weight: number;
  count: number;
};

export type Attack = {
  name: string;
  key: string;
  bonus: number;
  damage: string;
  damageDice: number;
  critical: number;
  range: number | null;
  type: 'piercing' | 'slashing' | 'bludgeoning';
  notes: string;
  weight: number;
  ammunition: Ammunition | null;
};

export type Attacks = [string | null, string | null, string | null, string | null, string | null];

export type Armor = {
  name: string;
  key: string;
  type: 'light' | 'heavy';
  bonus: number;
  // TODO check max dexterity
  maxDexterity: number;
  // TODO check penalty on skills
  checkPenalty: number;
  spellFailure: number;
  speed: number;
  weight: number;
  specialProperties: string;
};

export type Shield = {
  // TODO shields
  name: string;
  key: string;
  bonus: number;
  weight: number;
};

export type ProtectiveItem = {
  // TODO protective items
  name: string;
  key: string;
  bonus: number;
  weight: number;
};

export type Skill = {
  // TODO skills max ranks
  // TODO class skills
  // TODO speak langages?
  ranks: number;
  miscModifier: number;
};

export type Skills = {
  appraise: Skill;
  balance: Skill;
  bluff: Skill;
  climb: Skill;
  concentration: Skill;
  craft: Skill;
  decipherScript: Skill;
  diplomacy: Skill;
  disableDevice: Skill;
  disguise: Skill;
  escapeArtist: Skill;
  forgery: Skill;
  gatherInformation: Skill;
  handleAnimal: Skill;
  heal: Skill;
  hide: Skill;
  intimidate: Skill;
  jump: Skill;
  knowledge: Skill;
  listen: Skill;
  moveSilently: Skill;
  openLock: Skill;
  perform: Skill;
  profession: Skill;
  ride: Skill;
  search: Skill;
  senseMotive: Skill;
  sleightOfHand: Skill;
  spellcraft: Skill;
  spot: Skill;
  survival: Skill;
  swim: Skill;
  tumble: Skill;
  useMagicDevice: Skill;
  usePsionicDevice: Skill;
  useRope: Skill;
};

export type InventoryItem = {
  name: string;
  page: string;
  weight: number | null;
};

export type Inventory = FixedLengthArray<33, InventoryItem>;

export type Money = {
  copper: number;
  silver: number;
  gold: number;
  platinum: number;
};

export type Gear = {
  attacks: Attacks;
  armor: string | null;
  shield: string | null;
  protectiveItemOne: string | null;
  protectiveItemTwo: string | null;
  inventory: Inventory;
  money: Money;
  // TODO highlight which encumberance we are on?
  // TODO ammunition
};

// TODO conditional modifiers (spells / saves)

// TODO most spell fields can be class derived
// spellSave: number;
// arcaneSpellFailure: number;
// spellsKnown: SpellsKnown | null;
// spellsPerDay: SpellsPerDay | null;

export type Character = {
  campaign: string;
  xp: number;
  metadata: CharacterMetadata;
  abilities: Abilities;
  stats: Stats;
  saves: Saves;
  skills: Skills;
  gear: Gear;
  feats: FixedLengthArray<12, string>;
  specialAbilities: FixedLengthArray<23, string>;
  languages: FixedLengthArray<6, string>;
  spells: {
    zeroth: FixedLengthArray<6, string>;
    first: FixedLengthArray<6, string>;
    second: FixedLengthArray<6, string>;
    third: FixedLengthArray<6, string>;
    fourth: FixedLengthArray<6, string>;
    fifth: FixedLengthArray<6, string>;
    sixth: FixedLengthArray<3, string>;
    seventh: FixedLengthArray<3, string>;
    eighth: FixedLengthArray<3, string>;
    ninth: FixedLengthArray<3, string>;
  };
};

type SkillData = {
  id: number;
  name: string;
  mseaVideoUrl: string;
  kmsVideoUrl: string;
  remarks?: string;
};

const skillData: SkillData[] = [
  {
    id: 0,
    name: "Misc - when under poison status effect",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146086523331154031/MapleStory_u1de6o3axZ.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Poison+Damage.mp4",
  },
  {
    id: 22111012,
    name: "Dragon Swift",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047457910849616/swiftofwind.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Dragon+Swift.mp4",
  },
  {
    id: 22110014,
    name: "Swift of Wind",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047360112279622/swift_of_wind.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Swift+of+Wind.mp4",
  },
  {
    id: 22141012,
    name: "Dragon Dive",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047461580873798/dragon_dive.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Dragon+Dive.mp4",
  },
  {
    id: 22140015,
    name: "Dive of Thunder",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047462759465031/dive_of_thunder.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Dive+of+Thunder.mp4",
  },
  {
    id: 22171063,
    name: "Dragon Breath",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047462142918776/dragon_breath.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Dragon+Breath.mp4",
  },
  {
    id: 22141017,
    name: "Magical Residue / Reinforced Magical Residue",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047358291951646/magic_residue.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Magic+Residue.mp4",
  },
  {
    id: 22170064,
    name: "Breath - Come Back!",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146048054412197978/breath_-_come_back.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Dragon+Breath+-+Come+Back.mp4",
  },
  {
    id: 400021046,
    name: "Dragon Break",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047358866575360/dragon_break.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Dragon+Break.mp4",
  },
  {
    id: 400020051,
    name: "Break - Come Back!",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047359504101446/break_-_return.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Dragon+Break+-+Come+Back.mp4",
  },
  {
    id: 400020046,
    name: "Imperial Breath",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047355955728476/imp_breath.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Imperial+Breath.mp4",
  },
  {
    id: 22170067,
    name: "Dive of Earth",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047356769419264/dive_of_earth.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Dive+of+Earth.mp4",
  },
  {
    id: 22140014,
    name: "Swift of Thunder",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047357482455122/swift_of_thunder.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Swift+of+Thunder.mp4",
  },
  {
    id: 22170065,
    name: "Breath of Earth",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146085860580806878/breath_of_earth.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Breath+of+Earth.mp4",
  },
  {
    id: 22170066,
    name: "Breath of Wind",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146085859985211402/breath_of_wind.mp4",
    kmsVideoUrl:
      "https://equipment-swapping.s3.ap-southeast-1.amazonaws.com/KMS+-+Breath+of+Wind.mp4",
  },
  {
    id: 25101009,
    name: "Fox Spirits / Fire Fox Spirit Mastery",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/248315264104529920/1146121550794326026/fox_spirit.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400051010,
    name: "Spirit Concentration (when activating Spirit Incarnation)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146123624651161691/spirit_concentration.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400001018,
    name: "Cygnus Phalanx",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146256651482046465/phalanx.mp4",
    kmsVideoUrl: "",
    remarks:
      "Note: Guided Arrow is attacking here, but it has previously been fixed and no longer causes the issue.",
  },
  {
    id: 400031022,
    name: "Frenzied Winds",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146257401222266960/frenzied.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400031058,
    name: "Vortex Sphere",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146258403216339024/vortex.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400031003,
    name: "Howling Gale",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146259058177888286/howling.mp4",
    kmsVideoUrl: "",
  },
];

skillData.sort((a: SkillData, b: SkillData) => a.id - b.id);

export default skillData;

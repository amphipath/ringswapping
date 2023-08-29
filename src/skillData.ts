type SkillData = {
  id: number;
  name: string;
  mseaVideoUrl: string;
  kmsVideoUrl: string;
};

const skillData: SkillData[] = [
  {
    id: 22111012,
    name: "Dragon Swift",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047457910849616/swiftofwind.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22110014,
    name: "Swift of Wind",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047360112279622/swift_of_wind.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22141012,
    name: "Dragon Dive",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047461580873798/dragon_dive.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22140015,
    name: "Dive of Thunder",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047462759465031/dive_of_thunder.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22171063,
    name: "Dragon Breath",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047462142918776/dragon_breath.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22141017,
    name: "Magical Residue / Reinforced Magical Residue",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047358291951646/magic_residue.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22170064,
    name: "Breath - Come Back!",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146048054412197978/breath_-_come_back.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400021046,
    name: "Dragon Break",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047358866575360/dragon_break.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400020051,
    name: "Break - Come Back!",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047359504101446/break_-_return.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400020046,
    name: "Imperial Breath",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047355955728476/imp_breath.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22170067,
    name: "Dive of Earth",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047356769419264/dive_of_earth.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22140014,
    name: "Swift of Thunder",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/250923759307849728/1146047357482455122/swift_of_thunder.mp4",
    kmsVideoUrl: "",
  },
];

skillData.sort((a: SkillData, b: SkillData) => a.id - b.id);

export default skillData;

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
    mseaVideoUrl: "https://i.imgur.com/9p8HSgK.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22110014,
    name: "Swift of Wind",
    mseaVideoUrl: "https://i.imgur.com/nYoKxRa.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22141012,
    name: "Dragon Dive",
    mseaVideoUrl: "https://i.imgur.com/RoRRAC4.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22140015,
    name: "Dive of Thunder",
    mseaVideoUrl: "https://i.imgur.com/waHq89y.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22171063,
    name: "Dragon Breath",
    mseaVideoUrl: "https://i.imgur.com/AsstFNc.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22141017,
    name: "Magical Residue / Reinforced Magical Residue",
    mseaVideoUrl: "https://i.imgur.com/O2x0MK1.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22170064,
    name: "Breath - Come Back!",
    mseaVideoUrl: "https://i.imgur.com/wdRXkpY.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400021046,
    name: "Dragon Break",
    mseaVideoUrl: "https://i.imgur.com/nnY8h1q.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400020051,
    name: "Break - Come Back!",
    mseaVideoUrl: "https://i.imgur.com/NdBRMp5.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400020046,
    name: "Imperial Breath",
    mseaVideoUrl: "https://i.imgur.com/9iDwUf7.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22170067,
    name: "Dive of Earth",
    mseaVideoUrl: "https://i.imgur.com/mm6508u.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 22140014,
    name: "Swift of Thunder",
    mseaVideoUrl: "https://i.imgur.com/CsSEKgY.mp4",
    kmsVideoUrl: "",
  },
];

skillData.sort((a: SkillData, b: SkillData) => a.id - b.id);

export default skillData;

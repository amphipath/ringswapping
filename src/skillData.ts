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
  {
    id: 3101009,
    name: "Quiver Cartridge (Magic Arrow)",
    remarks:
      "Guided Arrow is attacking here, but it does not cause the issue, so Magic Arrow is the only other cause.",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146756434617442324/magicarrow.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 3111013,
    name: "Arrow Platter (Install)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146757211176063077/arrowplatter.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 3111015,
    name: "Flash Mirage",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146243552054099998/flash_mirage.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400031053,
    name: "Silhouette Mirage",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146757701431468093/silhouette.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400031020,
    name: "Illusionary Shot",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146758280463532142/illusionary.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400031002,
    name: "Arrow Rain",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146758636484427887/arrowrain.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 4211006,
    name: "Meso Explosion",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146243553639538688/mexp.mp4",
    kmsVideoUrl:
      "https://cdn.discordapp.com/attachments/687364480337969177/1148600490100269116/KMS-meso-explosion.mp4",
  },
  {
    id: 4221019,
    name: "Meso Explosion (Enhanced)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146243552918110238/enhanced_mexp.mp4",
    kmsVideoUrl:
      "https://cdn.discordapp.com/attachments/687364480337969177/1148600490880417842/KMS-enh-meso-explosion.mp4",
  },
  {
    id: 162100002,
    name: "Eruption: Rippling River",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146815874204958750/Erupt_Water.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 162100005,
    name: "Eruption: Whirlwind",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146773620073431160/Erupt_Wind.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 162100008,
    name: "Eruption: Sunrise Pond",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146816287318753350/Erupt_Sun.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 162111005,
    name: "Waking Up",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146890545176780941/Waking_Up.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 162120005,
    name: "Absorption: Sound of Wind",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146816916296568902/Absorb_Wind.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 162120008,
    name: "Absorption: Sunlight Bud",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146817685829714000/Absorb_Sun.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400021122,
    name: "Elemental Explosion",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146890953169317898/Stretch.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400021129,
    name: "Soaring Spirit",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1146891451192578188/SSpirit.mp4",
    kmsVideoUrl: "",
  },

  {
    id: 13121055,
    name: "Storm Winds",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179163766247524/stormwinds.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 65121052,
    name: "Supreme Supernova",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179164521218058/supernova.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400031062,
    name: "Thanatos's Descent (Arrows of Death)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179165934686308/thanatosarrows.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 13101022,
    name: "Trifling Winds",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179166693871737/triflingwind.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400051072,
    name: "Trinity Fusion",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179167478202561/trinityfusion.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400041089,
    name: "Resonate: Ultimatum",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179168203804692/ultimatum.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 63100104,
    name: "[Revelation] Scattering Shot",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179220771016714/pscatter.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 63110103,
    name: "[Revelation] Shaft Break",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179222067052544/pshaft.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 154110001,
    name: "Resonate",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179222897537125/resonate.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 63111003,
    name: "Shaft Break",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179223895769160/shaft_break.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 65111007,
    name: "Soul Seeker",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179224600424518/soulseeker.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400051018,
    name: "Spotlight",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179225527357560/spotlight.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 63101005,
    name: "Dragon Fang",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179305252688014/dragonfang.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400031066,
    name: "Grip of Agony",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179306183835678/grip.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400041082,
    name: "Hex: Pandemonium",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147179307454693396/pandemonium.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 65121011,
    name: "Soul Seeker Expert",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147191582622240858/soulseekerexpert.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 154121001,
    name: "Hex: Chakram Sweep",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147191583184257164/chakramsweep.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 61121105,
    name: "Inferno Breath (Trail of Fire)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147902691679416361/2023-09-03_22-25-18.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400011118,
    name: "Dragon Inferno (Fireball)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147902692925128834/2023-09-03_22-27-13.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 61111100,
    name: "Wingbeat",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147902694179229746/2023-09-03_22-27-38.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400011058,
    name: "Tempest Blades: Devastate",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147902695840165968/2023-09-03_22-29-48.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 61101009,
    name: "Tempest Blades: Charge",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147902696813248542/2023-09-03_22-33-30.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400011134,
    name: "Ego Weapon (Alpha)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147905320996306944/2023-09-03_22-38-43.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400011135,
    name: "Ego Weapon (Beta)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147905321784856656/2023-09-03_22-39-06.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 101120104,
    name: "Advanced Earth Break (Static Field)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147905322602737694/2023-09-03_22-40-29.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 101120204,
    name: "Advanced Storm Break (Static Field)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147905324079120584/2023-09-03_22-41-13.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400051015,
    name: "Serpent Screw",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147918246264185033/serpent_screw.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400011124,
    name: "Sword Illusion",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1147918823102631946/test.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400041048,
    name: "Mystic Energy: Extreme Immolation",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1148599892604883035/clonerampage.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400041052,
    name: "Mystic Energy: Advent of Rebellious Power (Advent of the Gods)",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1148599891979948053/advent.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400041063,
    name: "Mystic Energy: Illusion of Heaven, Earth and Human",
    mseaVideoUrl:
      "https://cdn.discordapp.com/attachments/1146108616076693655/1148599893334708274/heavenhumanearth.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 164101003,
    name: "Phantasmal Clone Talisman",
    mseaVideoUrl:
      "hhttps://cdn.discordapp.com/attachments/1146108616076693655/1148599894219690126/talismanclone.mp4",
    kmsVideoUrl: "",
  },
];

skillData.sort((a: SkillData, b: SkillData) => a.id - b.id);

export default skillData;

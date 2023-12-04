const skillData: SkillData[] = [
  {
    id: 0,
    name: "Misc - when under poison status effect",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/MapleStory_u1de6o3axZ.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/KMS+-+Poison+Damage.mp4",
  },
  {
    id: 22111012,
    name: "Dragon Swift",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/swiftofwind.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/dragonswift.mp4",
  },
  {
    id: 22110014,
    name: "Swift of Wind",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/swift_of_wind.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/swiftofwind.mp4",
  },
  {
    id: 22141012,
    name: "Dragon Dive",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/dragon_dive.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/dragondive.mp4",
  },
  {
    id: 22140015,
    name: "Dive of Thunder",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/dive_of_thunder.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/diveofthunder.mp4",
  },
  {
    id: 22171063,
    name: "Dragon Breath",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/dragon_breath.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/dragonbreath.mp4",
  },
  {
    id: 22141017,
    name: "Magical Residue / Reinforced Magical Residue",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/magic_residue.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/magicresidue.mp4",
  },
  {
    id: 22170064,
    name: "Breath - Come Back!",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/breath_-_come_back.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/dragonbreathcomeback.mp4",
  },
  {
    id: 400021046,
    name: "Dragon Break",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/dragon_break.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/dragonbreak.mp4",
  },
  {
    id: 400020051,
    name: "Break - Come Back!",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/break_-_return.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/dragonbreakcomeback.mp4",
  },
  {
    id: 400020046,
    name: "Imperial Breath",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/imp_breath.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/KMS_-_Imperial_Breath.mp4",
  },
  {
    id: 22170067,
    name: "Dive of Earth",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/dive_of_earth.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/diveofearth.mp4",
  },
  {
    id: 22140014,
    name: "Swift of Thunder",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/swift_of_thunder.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/swiftofthunder.mp4",
  },
  {
    id: 22170065,
    name: "Breath of Earth",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/breath_of_earth.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/breathofearth.mp4",
  },
  {
    id: 22170066,
    name: "Breath of Wind",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/breath_of_wind.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/breathofwind.mp4",
  },
  {
    id: 25101009,
    name: "Fox Spirits / Fire Fox Spirit Mastery",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/fox_spirit.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/foxspirit.mp4",
  },
  {
    id: 400051010,
    name: "Spirit Concentration (when activating Spirit Incarnation)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/spirit_concentration.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/spiritconc.mp4",
  },
  {
    id: 400001018,
    name: "Cygnus Phalanx",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/phalanx.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/k_cygphalanx.mp4",
    remarks:
      "Note: Guided Arrow is attacking in the MSEA clip, but it has previously been fixed and no longer causes the issue.",
  },
  {
    id: 400031022,
    name: "Frenzied Winds",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/frenzied.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kwb_frenziedwinds.mp4",
  },
  {
    id: 400031058,
    name: "Vortex Sphere",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/vortex.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kwb_vortexsphere.mp4",
  },
  {
    id: 400031003,
    name: "Howling Gale",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/howling.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kwb_howlinggale.mp4",
  },
  {
    id: 3101009,
    name: "Quiver Cartridge (Magic Arrow)",
    remarks:
      "Guided Arrow is attacking in the MSEA clip, but it does not cause the issue, so Magic Arrow is the only other cause.",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/magicarrow.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/flashmiragemagicarrow.mp4",
  },
  {
    id: 3111013,
    name: "Arrow Platter (Install)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/arrow_platter.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/arrowplatter.mp4",
  },
  {
    id: 3111015,
    name: "Flash Mirage",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/flash_mirage.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/flashmiragemagicarrow.mp4",
  },
  {
    id: 400031053,
    name: "Silhouette Mirage",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/silhouette.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/abm_illusionaryshotsilhouettemirage.mp4",
  },
  {
    id: 400031020,
    name: "Illusionary Shot",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/illusionary.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/abm_illusionaryshotsilhouettemirage.mp4",
  },
  {
    id: 400031002,
    name: "Arrow Rain",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/arrowrain.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/abm_arrowrain.mp4",
  },
  {
    id: 4211006,
    name: "Meso Explosion",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/mexp.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/KMS-meso-explosion.mp4",
  },
  {
    id: 4221019,
    name: "Meso Explosion (Enhanced)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/enhanced_mexp.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/KMS-enh-meso-explosion.mp4",
  },
  {
    id: 162100002,
    name: "Eruption: Rippling River",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/Erupt_Water.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/rivererupt.mp4",
  },
  {
    id: 162100005,
    name: "Eruption: Whirlwind",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/Erupt_Wind.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/eruptwind.mp4",
  },
  {
    id: 162100008,
    name: "Eruption: Sunrise Pond",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/Erupt_Sun.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/eruptsun.mp4",
  },
  {
    id: 162111005,
    name: "Waking Up",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/Waking_Up.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/wakingup.mp4",
  },
  {
    id: 162120005,
    name: "Absorption: Sound of Wind",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/Absorb_Wind.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/absorbwind.mp4",
  },
  {
    id: 162120008,
    name: "Absorption: Sunlight Bud",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/Absorb_Sun.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/absorbsun.mp4",
  },
  {
    id: 400021122,
    name: "Elemental Explosion",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/Stretch.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/bigstretch.mp4",
  },
  {
    id: 400021129,
    name: "Soaring Spirit",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/SSpirit.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/soaringspirit.mp4",
  },

  {
    id: 13121055,
    name: "Storm Winds",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/stormwinds.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kwb_stormwinds.mp4",
  },
  {
    id: 65121052,
    name: "Supreme Supernova",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/msea_supernova.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/supernova.mp4",
  },
  {
    id: 400031062,
    name: "Thanatos's Descent (Arrows of Death)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/thanatosarrows.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/thanatosdescentarrows.mp4",
  },
  {
    id: 13101022,
    name: "Trifling Winds",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/triflingwind.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/kwb_trifling.mp4",
  },
  {
    id: 400051072,
    name: "Trinity Fusion",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/trinityfusion.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kms_trinityfusion.mp4",
  },
  {
    id: 400041089,
    name: "Resonate: Ultimatum",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/ultimatum.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 63100104,
    name: "[Revelation] Scattering Shot",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/pscatter.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nkain_revescatteringshot.mp4",
  },
  {
    id: 63110103,
    name: "[Revelation] Shaft Break",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/pshaft.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nkain_reveshaftbreak.mp4",
  },
  {
    id: 154110001,
    name: "Resonate",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/resonate.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 63111003,
    name: "Shaft Break",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/shaft_break.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nkain_shaftbreak.mp4",
  },
  {
    id: 65111007,
    name: "Soul Seeker",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/soulseeker.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/soulseeker_kms.mp4",
  },
  {
    id: 400051018,
    name: "Spotlight",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/spotlight_msea.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/spotlight.mp4",
  },
  {
    id: 63101005,
    name: "Dragon Fang",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/dragonfang.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nkain_dragonfang.mp4",
  },
  {
    id: 400031066,
    name: "Grip of Agony",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/grip.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/t_gripofagony.mp4",
  },
  {
    id: 400041082,
    name: "Hex: Pandemonium",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/pandemonium.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 65121011,
    name: "Soul Seeker Expert",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/soulseekerexpert.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/soulseekerexpert_kms.mp4",
  },
  {
    id: 154121001,
    name: "Hex: Chakram Sweep",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/chakramsweep.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 61121105,
    name: "Inferno Breath (Trail of Fire)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-25-18.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nks_infernobreath.mp4",
  },
  {
    id: 400011118,
    name: "Dragon Inferno (Fireball)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-27-13.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nks_tempestbladesdevastatedragoninferno.mp4",
  },
  {
    id: 61111100,
    name: "Wingbeat",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-27-38.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/nks_wingbeat.mp4",
  },
  {
    id: 400011058,
    name: "Tempest Blades: Devastate",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-29-48.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nks_tempestbladesdevastatedragoninferno.mp4",
  },
  {
    id: 61101009,
    name: "Tempest Blades: Charge",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-33-30.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nks_tempestbladescharge.mp4",
  },
  {
    id: 400011134,
    name: "Ego Weapon (Alpha)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-38-43.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/egoa.mp4",
  },
  {
    id: 400011135,
    name: "Ego Weapon (Beta)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-39-06.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/egob.mp4",
  },
  {
    id: 101120104,
    name: "Advanced Earth Break (Static Field)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-40-29.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/earthbreak.mp4",
  },
  {
    id: 101120204,
    name: "Advanced Storm Break (Static Field)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/2023-09-03_22-41-13.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/stormbreak.mp4",
  },
  {
    id: 400051015,
    name: "Serpent Screw",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/serpent_screw.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400011124,
    name: "Sword Illusion",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/test.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/ahero_swordillusion.mp4",
  },
  {
    id: 400041048,
    name: "Mystic Energy: Extreme Immolation",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/clonerampage.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/clone.mp4",
  },
  {
    id: 400041052,
    name: "Mystic Energy: Advent of Rebellious Power (Advent of the Gods)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/advent.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/mhy_advent.mp4",
  },
  {
    id: 400041063,
    name: "Mystic Energy: Illusion of Heaven, Earth and Human",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/heavenhumanearth.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/mhy_mysticenergyillusions.mp4",
  },
  {
    id: 164101003,
    name: "Phantasmal Clone Talisman",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/talismanclone.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/mhy_phantasmalclonetalisman.mp4",
  },
  {
    id: 14001027,
    name: "Shadow Bat",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/nw.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/knw_shadowbat.mp4",
  },

  {
    id: 14110033,
    name: "Enhanced Shadow Bat",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/shadowbatenhance.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/enhancedshadowbat.mp4",
  },
  {
    id: 14121016,
    name: "Ravenous Bat",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/ravenous.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/knw_ravenousbat.mp4",
  },
  {
    id: 400011010,
    name: "Demon Frenzy",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/MapleStory_USB49PE0Mg.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rda_demonfrenzy.mp4",
  },
  {
    id: 400011065,
    name: "Elysion (Crack)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/elysionrift.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/ksm_elysion.mp4",
  },
  {
    id: 11121018,
    name: "Cosmic Burst",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/cosmicburst.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/ksm_cosmicburst.mp4",
    remarks: "Also applies to the auto-cast",
  },
  {
    id: 15100027,
    name: "Sea Wave",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/seawave.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/ksk_seawave.mp4",
  },
  {
    id: 0,
    name: "Getting hit by self-destructing summons",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/hitbyantiafk.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/xexploding.mp4",
  },
  {
    id: 5201012,
    name: "Summon Crew",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/summoncrew.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/acpt_summoncrew.mp4",
  },
  {
    id: 400051040,
    name: "Nautilus Assault",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/nautilusassault.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400051073,
    name: "Death Trigger",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/deathtrigger.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/acpt_deathtrigger.mp4",
  },
  {
    id: 400041069,
    name: "72 Transformations (Leader)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/72t_msea.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/72t.mp4",
  },
  {
    id: 4121017,
    name: "Showdown Challenge (Shurikens)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/showdown.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/anl_showdownchallengeshurikens.mp4",
  },
  {
    id: 2311015,
    name: "Triumph Feather",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/triumphfeather.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/absp_triumpfeather.mp4",
  },
  {
    id: 400021030,
    name: "Thunder Break",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/thunderbreak.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/ail_thunderbreak.mp4",
  },
  {
    id: 400041038,
    name: "Dark Lord's Secret Scroll (Shurikens)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/secretscroll.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/anl_darklordsecretscroll.mp4",
  },
  {
    id: 400031036,
    name: "Raven Tempest",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/raventempest.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/apf_raventempest.mp4",
  },
  {
    id: 400051074,
    name: "Crater Maker",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/poolmaker.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400021101,
    name: "Poison Pandemic",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/poisonpandemic.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/afp_poisonchain.mp4",
  },
  {
    id: 400021028,
    name: "Poison Nova",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/poisonnova.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400051038,
    name: "Special Monkey Escort (Monkey Bomb)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/specialmonkeyescort.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 5311010,
    name: "Monkey's Fury",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/monkeyfury.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400011131,
    name: "Mighty Mjolnir",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/mightymjolnir.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/apala_mightymjolnir.mp4",
  },
  {
    id: 4120018,
    name: "Mark of Night Lord",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/markofnl.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/anl_markofnightlord.mp4",
  },
  {
    id: 400021094,
    name: "Jupiter Thunder",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/jupiterthunder.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/ail_jupiterthunder.mp4",
  },
  {
    id: 2101010,
    name: "Ignite",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/ignite.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/afp_ignite.mp4",
  },
  {
    id: 400021002,
    name: "Ice Age",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/iceage.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/ail_iceage.mp4",
  },
  {
    id: 400041020,
    name: "Fuma Shuriken",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/fuuma.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/anl_fumashuriken.mp4",
  },
  {
    id: 2221012,
    name: "Frozen Orb",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/frozenorb.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/ail_frozenorb.mp4",
  },
  {
    id: 2121054,
    name: "Fire Aura",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/fireaura.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/afp_fireAura.mp4",
  },
  {
    id: 400031039,
    name: "Obsidian Barrier (Blast)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/blastbarrier.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/apf_obsidianbarrierblast.mp4",
  },
  {
    id: 400051008,
    name: "Big Fuse Gigantic Cannonball",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/bfg.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 3301008,
    name: "Split Mistel (Magic Arrows)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/splitmistel.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/apf_splitmistel.mp4",
  },
  {
    id: 2201009,
    name: "Chilling Step",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/chillingstep.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/ail_chillingstep.mp4",
  },
  {
    id: 400021001,
    name: "DoT Punisher",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/dotpunisher.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/afp_dotpunisher.mp4",
  },
  {
    id: 2121052,
    name: "Megido Flame",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/megiddo.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/afp_megido.mp4",
  },
  {
    id: 2111013,
    name: "Poison Zone (Explosion)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/poisonregion.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/afp_poisonzone.mp4",
  },
  {
    id: 400051024,
    name: "ICBM (Contaminated Zone)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/icbm.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400041029,
    name: "Surplus Overload",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/surplusoverload.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rxn_surplusoverload.mp4",
  },
  {
    id: 400021092,
    name: "Salamander Mischief",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/salamandermischief.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 400031044,
    name: "Royal Rumble",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/royalknights.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 24121052,
    name: "Rose Carte Finale",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/rosecartefinale.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/hphan_rosecartefinale.mp4",
  },
  {
    id: 400021041,
    name: "Punishing Resonator",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/punishingresonator.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/hlumi_punishingresonator.mp4",
    remarks:
      "The Dark version is demonstrated, but all versions have the same issue in SEA.",
  },
  {
    id: 36001005,
    name: "Pinpoint Rocket",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/pinpointrocket.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rxn_pinpointmark.mp4",
  },
  {
    id: 400041057,
    name: "Photon Ray",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/photonray.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rxn_photonray.mp4",
  },
  {
    id: 27121201,
    name: "Morning Star",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/morningstar.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/hlumi_morningstar.mp4",
  },
  {
    id: 21121057,
    name: "Maha's Domain",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/mahadomain.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/haran_mahasdomain.mp4",
  },
  {
    id: 37111000,
    name: "Charging Arm: Smash (Shockwave)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/hammersmash.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rblaster_chargingarmsmash.mp4",
  },
  {
    id: 400021042,
    name: "Incarnate's Anger (Fox)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/flamedischargefox.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kfw_incarnatesangerfox.mp4",
  },
  {
    id: 33121016,
    name: "Drill Container Unit",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/drillcontainer.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rwh_drillcontainerunit.mp4",
  },
  {
    id: 400011090,
    name: "Dimension Sword (Rapid Spin)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/dimensionalsword.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rda_dimensionsword.mp4",
    remarks:
      "The slow attacking version of Dimension Sword does not cause the issue.",
  },
  {
    id: 24120002,
    name: "Carte Noire",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/cartenoire.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/hphan_cartenoir.mp4",
  },
  {
    id: 12121001,
    name: "Blazing Extinction",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/blazingextinction.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kfw_blazingextinction.mp4",
  },
  {
    id: 400041022,
    name: "Black Jack",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/blackjack.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/hphan_blackjack.mp4",
    remarks:
      "The final attacks of the cards as they disappear put the caster into combat state which does not count as an issue; the issue is primarily from the bouncing.",
  },
  {
    id: 31201001,
    name: "Bat Swarm",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/batswarm.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/rda_batswarm.mp4",
  },
  {
    id: 33111013,
    name: "Assistant Hunting Unit",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/assistanthuntingunit.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rwh_assistanthuntingunit.mp4",
  },
  {
    id: 36111004,
    name: "Aegis System",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/aegissystem.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rxn_aegissystem.mp4",
  },
  {
    id: 400021047,
    name: "Black Magic Altar",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/blackmagicaltar.mp4",
    kmsVideoUrl: "",
  },
  {
    id: 20031210,
    name: "Judgment Draw",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/judgmentdraw.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/hphan_judgementdraw.mp4",
    remarks: "Also applies to the auto-cast version of the skill.",
  },
  {
    id: 31221001,
    name: "Shield Chasing",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/shieldchasing.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/rda_shieldchasing.mp4",
  },
  {
    id: 400041069,
    name: "72 Transformations (Allies)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/72tally.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/72t.mp4",
  },
  {
    id: 400031062,
    name: "Thanatos Descent (Realm of Death)",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/thanatos2.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/thanatosdescentkms.mp4",
  },
  {
    id: 142110011,
    name: "Tele Kinesis",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/telekinesis.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_telekinesis.mp4",
  },
  {
    id: 64121001,
    name: "Chain Arts: Takedown",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/takedown.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/t_takedown.mp4",
  },
  {
    id: 64101002,
    name: "Weapon Arts: Shuriken Bomb",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/shuriken.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/ncdn_shurikenbomb.mp4",
  },
  {
    id: 400021008,
    name: "Psychic Tornado (Continuous attack)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/psychictornado.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_psychictornado.mp4",
    remarks:
      "The finishing attack puts the user in a combat state and does not qualify as causing this issue.",
  },
  {
    id: 142101009,
    name: "Psychic Drain",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/psychicdrain.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_psychicdrain.mp4",
  },
  {
    id: 400021074,
    name: "Ultimate - Psychic Bullet (Micro Black Hole)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/psychicbullet.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_ultimatepsychicbulletblackhole.mp4",
  },
  {
    id: 400041074,
    name: "Chain Nirvana",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/chainnirvana.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/nirvana.mp4",
  },
  {
    id: 142121030,
    name: "Mental Tempest (continuous attack)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/mentaltempestcont.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_mentaltempestboth.mp4",
  },
  {
    id: 142121030,
    name: "Mental Tempest (Final attack)",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/mentaltempestfinal.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_mentaltempestboth.mp4",
  },
  {
    id: 400041041,
    name: "Chain Arts: Maelstrom",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/maelstrom.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/t_maelstrom.mp4",
  },
  {
    id: 400041035,
    name: "Chain Arts: Fury",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/fury.mp4",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/t_adordnance.mp4",
    remarks:
      "In the MSEA clip, A.D. Ordnance is also dealing damage, but as shown above, the continuous charging attack does not block equipment swapping so Chain Arts: Fury is the only other possible cause.",
  },
  {
    id: 142121005,
    name: "Ultimate - B.P.M.",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/bpm.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_ultimatebpm.mp4",
  },
  {
    id: 400041033,
    name: "A.D. Ordnance",
    mseaVideoUrl: "https://storage.googleapis.com/ringswapping/adordnance.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/ncdn_adordnance.mp4",
  },
  {
    id: 400021048,
    name: "Ultimate - Moving Matter",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/ultimatemovingmatter.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/nks_ultimatemovingmatter.mp4",
  },
  {
    id: 142111007,
    name: "Ultimate - Train",
    mseaVideoUrl:
      "https://storage.googleapis.com/ringswapping/ultimatetrainpre.mp4",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_ultimatetrain.mp4",
  },
  {
    id: 64120006,
    name: "Weapon Variation III",
    mseaVideoUrl: "",
    kmsVideoUrl: "https://storage.googleapis.com/ringswapping/nirvana.mp4",
  },
  {
    id: 400021096,
    name: "Law of Gravity",
    mseaVideoUrl: "",
    kmsVideoUrl:
      "https://storage.googleapis.com/ringswapping/kin_lawofgravity.mp4",
  },
];

skillData.sort((a: SkillData, b: SkillData) => a.id - b.id);

export default skillData;

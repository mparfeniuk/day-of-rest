export type Language = "ua" | "en" | "la";

export interface BlockContent {
  id: string;
  title?: string;
  content?: string;
  reference?: string;
  overlayText?: string;
  facebookLink?: string;
  monobankLink?: string;
}

export interface QuantumTexts {
  buttonText: string;
  calculating: string;
  answerText: string;
  answerLabel: string;
}

export interface Translations {
  langName: string;
  langLabel: string;
  scrollDown: string;
  navigation: string;
  blocks: BlockContent[];
  quantum: QuantumTexts;
}

export const translations: Record<Language, Translations> = {
  ua: {
    langName: "Українська",
    langLabel: "UA",
    scrollDown: "Прокрутити вниз",
    navigation: "Навігація по сторінці",
    blocks: [
      {
        id: "bible",
        title: "День відпочинку",
        content: `І скінчив Бог дня сьомого працю Свою, яку був чинив;
і спочив дня сьомого від усієї праці Своєї, яку був чинив.
І благословив Бог день сьомий, і освятив Його,
бо в нім спочив від усієї праці Своєї, яку був Бог, творячи, учинив.

І сказав Бог Максіму: «Відпочинь і ти, друже, бо боляче на тебе дивитись, як ти фігачиш свій марафон».
І відпочили вони, роздумуючи разом про бренність буття.`,
        reference: "Книга Буття, 2:2–3",
      },
      {
        id: "reflection",
        title: "Роздуми",
        overlayText:
          "Дівчинка спостерігає, як війна нищить те, що люди будували поколіннями. Для якихось країв це — всього-на-всього картини в музеях, а для мого — це жорстока правда сьогодення.",
      },
      {
        id: "fourth",
        title: "",
        content: "",
      },
      {
        id: "other",
        title: "Щось інше",
        content:
          "Так як пуйло, схоже, не збирається припиняти війну, а чинуші в Києві і не тільки в Києві займаються своєю звичною справою — пиздять гроші, задонатьте доброму пану на ремонт корча.",
        facebookLink:
          "https://www.facebook.com/burlakavv/posts/pfbid02E8eybjF96Y4SrvyJGVTRa8Vog1pWF7WwQRjC5BRR7XxPY4HH1cSQqwKzscaUFG9nl",
        monobankLink: "https://send.monobank.ua/jar/2MrHE1byLE",
      },
      {
        id: "fifth",
        title: "",
        content:
          "Марнота марнот, сказав Когелет; марнота марнот — усе марнота. Що було — те буде, і що робилося — те зробиться, і немає нічого нового під сонцем.\n\nЧистіть кеш і рухайтесь далі, сказав Когелет",
      },
      {
        id: "sixth",
        title: "",
        content: "",
      },
      {
        id: "seventh",
        title: "",
        content:
          "Щось боженька ти навайбкодив дивний світ. Я розумію у тебе було тільки 6 днів. Але може це такий задум? 🤔 Броукен бай дізайн так би мовити",
      },
    ],
    quantum: {
      buttonText: "Дізнатися коли цей пиздець закінчиться",
      calculating: "Система обчислює... Генерує відповідь...",
      answerText:
        "Наш сучасний квантовий комп'ютер відкорегував відповідь і зробив її точнішою.",
      answerLabel: "Відповідь",
    },
  },
  en: {
    langName: "English",
    langLabel: "EN",
    scrollDown: "Scroll down",
    navigation: "Page navigation",
    blocks: [
      {
        id: "bible",
        title: "Day of Rest",
        content: `And on the seventh day God ended his work which he had made;
and he rested on the seventh day from all his work which he had made.
And God blessed the seventh day, and sanctified it:
because that in it he had rested from all his work which God created and made.

And God said unto Maxim: "Rest thou also, my friend, for it is painful to watch thee toil through thy marathon."
And they rested together, contemplating the transience of existence.`,
        reference: "Genesis 2:2–3 (KJV)",
      },
      {
        id: "reflection",
        title: "Reflection",
        overlayText:
          "The girl observes how war and ruin destroy what people built for generations. For some countries, these are just paintings in museums, but for mine, this is the harsh truth of today.",
      },
      {
        id: "fourth",
        title: "",
        content: "",
      },
      {
        id: "other",
        title: "Something else",
        content:
          "Since putler doesn't seem to be stopping the war and officials in Kyiv (and not only in Kyiv) are doing their usual thing - stealing money - please donate to a good man for truck repair",
        facebookLink:
          "https://www.facebook.com/burlakavv/posts/pfbid02E8eybjF96Y4SrvyJGVTRa8Vog1pWF7WwQRjC5BRR7XxPY4HH1cSQqwKzscaUFG9nl",
        monobankLink: "https://send.monobank.ua/jar/2MrHE1byLE",
      },
      {
        id: "fifth",
        title: "",
        content:
          "Vanity of vanities, says the Preacher; vanity of vanities — all is vanity. What has been is what will be, and what has been done is what will be done, and there is nothing new under the sun.\n\nClear the cache and move on, said the Preacher",
      },
      {
        id: "sixth",
        title: "",
        content: "",
      },
      {
        id: "seventh",
        title: "",
        content:
          "God, you've created a strange world. I understand you only had 6 days. But maybe that's the point? 🤔 Broken by design, so to speak",
      },
    ],
    quantum: {
      buttonText: "Find out when this clusterfuck ends",
      calculating: "System computing... Generating response...",
      answerText:
        "Our modern quantum computer has corrected the answer and made it more precise.",
      answerLabel: "Answer",
    },
  },
  la: {
    langName: "Latina",
    langLabel: "LA",
    scrollDown: "Deorsum volve",
    navigation: "Navigatio paginae",
    blocks: [
      {
        id: "bible",
        title: "Dies Requiei",
        content: `Complevitque Deus die septimo opus suum quod fecerat;
et requievit die septimo ab universo opere quod patrarat.
Et benedixit diei septimo, et sanctificavit illum:
quia in ipso cessaverat ab omni opere suo quod creavit Deus ut faceret.

Et dixit Deus ad Maximum: "Requiesce et tu, amice, nam dolet te videre dum marathon tuum perficis."
Et requieverunt simul, meditantes de vanitate vitae.`,
        reference: "Liber Genesis 2:2–3 (Vulgata)",
      },
      {
        id: "reflection",
        title: "Meditatio",
        overlayText:
          "Puella observat quomodo bellum et ruina destruunt quod homines per generationes aedificaverunt. Quibusdam terris haec tantum picturae in museis sunt, sed meae terrae haec est cruda veritas hodierna.",
      },
      {
        id: "fourth",
        title: "",
        content: "",
      },
      {
        id: "other",
        title: "Aliud quiddam",
        content:
          "Cum Putlerus bellum finire non videatur et officiales Kioviae (et non solum Kioviae) solitum faciunt - pecuniam furantur - rogo donate bono viro ad currum reficiendum",
        facebookLink:
          "https://www.facebook.com/burlakavv/posts/pfbid02E8eybjF96Y4SrvyJGVTRa8Vog1pWF7WwQRjC5BRR7XxPY4HH1cSQqwKzscaUFG9nl",
        monobankLink: "https://send.monobank.ua/jar/2MrHE1byLE",
      },
      {
        id: "fifth",
        title: "",
        content:
          "Vanitas vanitatum, dixit Ecclesiastes; vanitas vanitatum — omnia vanitas. Quod fuit, ipsum est quod futurum est, et quod factum est, ipsum est quod faciendum est, et nihil sub sole novum.\n\nPurga memoriam et procede, dixit Ecclesiastes",
      },
      {
        id: "sixth",
        title: "",
        content: "",
      },
      {
        id: "seventh",
        title: "",
        content:
          "Deus, mundum mirum creavisti. Intelligo tibi tantum sex dies fuerunt. Sed fortasse hoc est propositum? 🤔 Fractus per consilium, ut ita dicam",
      },
    ],
    quantum: {
      buttonText: "Scire quando haec calamitas finietur",
      calculating: "Systema computat... Responsum generat...",
      answerText:
        "Computatrum nostrum quanticum modernum responsum correxit et accuratius fecit.",
      answerLabel: "Responsum",
    },
  },
};

export const BLOCK_COLORS = [
  { bg: "#F9E4D4", text: "#470D21", name: "cream" }, // Block 0 (bible)
  { bg: "#5A9CB5", text: "#F9E4D4", name: "blue" }, // Block 1 (reflection)
  { bg: "#FAAC68", text: "#F9E4D4", name: "orange" }, // Block 2 (fourth/piano)
  { bg: "#FACE68", text: "#470D21", name: "yellow" }, // Block 3 (other/корч)
  { bg: "#2D5016", text: "#F9E4D4", name: "green" }, // Block 4 (fifth/мандала)
  { bg: "#1a1a2e", text: "#F9E4D4", name: "dark" }, // Block 5 (sixth/Аліса)
  { bg: "#1a1a2e", text: "#39ff14", name: "dark-green" }, // Block 6 (seventh/Beatles) - темний фон для synth стилю
] as const;

export function getBlockColor(index: number) {
  return BLOCK_COLORS[index] || BLOCK_COLORS[index % BLOCK_COLORS.length];
}

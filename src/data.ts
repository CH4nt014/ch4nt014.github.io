import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Antonio Rinaldi",
  role: "Game-Dev",
    introduction: `
Game Developer focused on gameplay programming and interactive design.
Passionate about turning ideas into engaging game experiences.
`,
    description: `
I am a Game Developer with experience in Unity and Unreal Engine, where I worked on projects ranging from gameplay programming to game design.
My goal is to create fun and immersive worlds, combining technical skills with creativity.
I enjoy experimenting with new technologies, collaborating in teams, and constantly learning to improve my craft.
Beyond development, I am motivated by the challenge of transforming ideas into meaningful interactive experiences.
`,
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/CH4nt014",
    itchIO: "https://ch4nt0.itch.io/",
    linkedIn: "https://www.linkedin.com/in/antonio-rinaldi-871252216/",
  }
};

export const games: Game[] = [
  {
    name: "Super Mario: Coins Quest",
    description: "Super mario needs to search and collect all coins to receive a star from princess Peach",
        genres: ["Platform 3D", "Puzzle"],
    platforms: [Platform.Windows],
    engine: GameEngine.OpenGL,
    links: [
        { source: LinkImageSource.Github, url: "https://github.com/CH4nt014/Super-Mario_Game" },
        { source: LinkImageSource.ItchIo, url: "https://ch4nt0.itch.io/super-mario-coin-quest" },
    ],
    media: [
        { source: "/images/games/Super_Mario_Coins_Quest/Screenshot_1.png", type: MediaType.Image },
        { source: "/images/games/Super_Mario_Coins_Quest/Screenshot_2.png", type: MediaType.Image },
        { source: "/images/games/Super_Mario_Coins_Quest/Screenshot_3.png", type: MediaType.Image },
        { source: "/images/games/Super_Mario_Coins_Quest/Screenshot_4.png", type: MediaType.Image },
        { source: "/images/games/Super_Mario_Coins_Quest/Screenshot_5.png", type: MediaType.Image },
        { source: "/images/games/Super_Mario_Coins_Quest/Screenshot_6.png", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAM",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];
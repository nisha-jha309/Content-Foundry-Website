
import naJaneKyu from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu.webp";
import campusDiary from "../assets/micro-drama-thumbnails/campus-diary/campus-diaries.webp";

import NaJaneKyuEpisode1 from "../assets/na-jane-kyu episodes/Episode 1.mp4";
import NaJaneKyuEpisode2 from "../assets/na-jane-kyu episodes/Episode 2.mp4";
import NaJaneKyuEpisode3 from "../assets/na-jane-kyu episodes/Episode 3.mp4";
import NaJaneKyuEpisode4 from "../assets/na-jane-kyu episodes/Episode 4.mp4";
import NaJaneKyuEpisode5 from "../assets/na-jane-kyu episodes/Episode 5.mp4";
import NaJaneKyuEpisode6 from "../assets/na-jane-kyu episodes/Episode 6.mp4";
import NaJaneKyuEpisode7 from "../assets/na-jane-kyu episodes/Episode 7.mp4";
import NaJaneKyuEpisode8 from "../assets/na-jane-kyu episodes/Episode 8.mp4";
import NaJaneKyuEpisode9 from "../assets/na-jane-kyu episodes/Episode 9.mp4";
import NaJaneKyuEpisode10 from "../assets/na-jane-kyu episodes/Episode 10.mp4";

import NaJaneKyuThumb1 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep1-thumbnail.webp";
import NaJaneKyuThumb2 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep2-thumbnail.webp";
import NaJaneKyuThumb3 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep3-thumbnail.webp";
import NaJaneKyuThumb4 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep4-thumbnail.webp";
import NaJaneKyuThumb5 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep5-thumbnail.webp";
import NaJaneKyuThumb6 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep6-thumbnail.webp";
import NaJaneKyuThumb7 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep7-thumbnail.webp";
import NaJaneKyuThumb8 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep8-thumbnail.webp";
import NaJaneKyuThumb9 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep9-thumbnail.webp";
import NaJaneKyuThumb10 from "../assets/micro-drama-thumbnails/na-jane-kyu/na-jane-kyu-ep10-thumbnail.webp";

const dramas = [
  {
    slug: "na-jane-kyu",
    number: "01",
    type: "Micro-drama",
    title: "Na Jane Kyu",
    link: "Watch episodes ↗",
    thumbnail: naJaneKyu,
    badge: "Live Shoot",
    category: "10 episodes",
    href: "/micro-drama/na-jane-kyu",

    description:
      "A short-form story created to make audiences watch the next one.",

    about:
      "A shoot-based micro-drama from Content Foundry. Explore the episodes and the format behind the series.",

    episodes: [
      {
        id: 1,
        title: "Episode 01",
        description: "The story begins.",
        duration: "02:15",
        videoUrl: NaJaneKyuEpisode1,
        thumbnail: NaJaneKyuThumb1,
      },
      {
        id: 2,
        title: "Episode 02",
        description: "Things take an unexpected turn.",
        duration: "01:30",
        videoUrl: NaJaneKyuEpisode2,
        thumbnail: NaJaneKyuThumb2,
      },
      {
        id: 3,
        title: "Episode 03",
        description: "The story continues.",
        duration: "01:45",
        videoUrl: NaJaneKyuEpisode3,
        thumbnail: NaJaneKyuThumb3,
      },
      {
        id: 4,
        title: "Episode 04",
        description: "The story continues.",
        duration: "02:13",
        videoUrl: NaJaneKyuEpisode4,
        thumbnail: NaJaneKyuThumb4,
      },
      {
        id: 5,
        title: "Episode 05",
        description: "Things take an unexpected turn.",
        duration: "02:09",
        videoUrl: NaJaneKyuEpisode5,
        thumbnail: NaJaneKyuThumb5,
      },
      {
        id: 6,
        title: "Episode 06",
        description: "The story continues.",
        duration: "01:45",
        videoUrl: NaJaneKyuEpisode6,
        thumbnail: NaJaneKyuThumb6,
      },
      {
        id: 7,
        title: "Episode 07",
        description: "The story continues.",
        duration: "01:03",
        videoUrl: NaJaneKyuEpisode7,
        thumbnail: NaJaneKyuThumb7,
      },
      {
        id: 8,
        title: "Episode 08",
        description: "Things take an unexpected turn.",
        duration: "0:57",
        videoUrl: NaJaneKyuEpisode8,
        thumbnail: NaJaneKyuThumb8,
      },
      {
        id: 9,
        title: "Episode 09",
        description: "The story continues.",
        duration: "01:02",
        videoUrl: NaJaneKyuEpisode9,
        thumbnail: NaJaneKyuThumb9,
      },
      {
        id: 10,
        title: "Episode 10",
        description: "The story continues.",
        duration: "01:48",
        videoUrl: NaJaneKyuEpisode10,
        thumbnail: NaJaneKyuThumb10,
      },
    ],

    credits: {
      production: "Content Foundry",
      creative: "Content Foundry",
      brand: "Content Foundry",
    },
  },

  {
    slug: "campus-diary",
    number: "02",
    type: "Micro-drama",
    title: "Campus Diary",
    link: "Coming soon",
    thumbnail: campusDiary,
    badge: "AI video",
    category: "Campus series",   
    href: "/micro-drama/campus-diary",

    description:
      "A campus-based story about friendships, relationships, and unexpected moments.",

    about:
      "A micro-drama from Content Foundry. More details and episodes coming soon.",

    episodes: [],

    credits: {
      production: "Content Foundry",
      creative: "Content Foundry",
      brand: "Content Foundry",
    },
  },

];

export default dramas;

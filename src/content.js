// src/content.js
const content = {
  music: "/path-to-your-music.mp3",

  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "memories", icon: "📸", label: "Captured Memories" },
      { id: "video", icon: "🎬", label: "Our Video" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    remindsText: "this song always makes me think of you",
    songTitle: "our song",
    artist: "for you 🎵",
    highlight: "every lyric feels like us 💕",
    title: "our song",
    returnButton: "RETURN"
  },

  letter: {
    title: "a letter",
    message: `Happy birthday, Hassan ❤️

I’ve been trying to write this for a while because there are so many things I want to tell you and somehow I never feel like I get to say them quite the way I mean them, but I guess I’ll start with something simple: I’m genuinely so glad you’re in my life. I’m glad I got to know you, glad we have all these memories together and glad that out of all the people I could have met I got to meet you.

I don’t think you realise how much I appreciate the little things about you. The way you think, your sense of humour, the way you can turn the most random conversation into something I’ll remember and all those little things that make you who you are. Sometimes it’s not even about something particularly special happening it’s just talking to you, hearing about your day, sharing something random with you or laughing about something that probably wouldn’t make sense to anyone else I think those are some of my favourite things about us. The ordinary moments that somehow become special just because they’re with you.

I also wish you could see yourself sometimes the way I see you not because I think you’re perfect or because I expect you to have everything figured out but because there are so many things worth appreciating about you that I don’t think you always give yourself enough credit for. I know you have so many expectations for yourself, I know there are things you’ve wanted to do, things you’ve imagined yourself achieving by now and sometimes it gets frustrating when life doesn’t turn out exactly the way you pictured it but I really want you to be a little kinder to yourself. You don’t have to turn every difficult period into a lesson or every day into an achievement, you don’t have to constantly prove to yourself that you’re doing enough and you definitely don’t have to become a completely different person overnight just because you expected more from yourself. I hope you give yourself the time and patience you deserve. I hope you get to enjoy the things you’ve been working so hard for but I also hope you find happiness in the days before you get there.

I want this year to bring you closer to everything you’ve been wishing for. I want you to experience new things, discover more about yourself, accomplish things that make you genuinely proud and have so many moments where you realise that things are actually falling into place. But more than all of that I want you to be happy — not just successful, not just productive, not just proud of what you’ve accomplished, actually happy. I want you to have days where you feel good about life, where you laugh without thinking about everything you still have to do and where you can simply enjoy being yourself. And I hope you never feel like you have to be anything other than yourself to be appreciated.

There’s also something I don’t think I say enough: I really admire you. I admire the way your mind works, the things you’re interested in, the way you look at certain things and the fact that there’s always something new to discover about you. I love that even after all this time there are still little things I get to learn about you. Thank you for all the memories, all the conversations, all the laughs and even the smallest moments that you probably don’t remember but I do. Thank you for being someone I can share the most random parts of my day with and someone whose presence has come to mean so much to me.

I know I can’t put everything I feel into one birthday letter and I don’t think I need to. I just want you to know that I’m grateful for you, that I appreciate you more than I probably manage to express and that having you in my life is something I never want to take for granted!!!!

If there’s one thing I wish for you this year it’s that you get to experience life without being so hard on yourself, that you find reasons to be excited about the future without forgetting to enjoy the present and that one day, when you look back at this particular year, you realise how much you grew, how much you experienced and how many beautiful things happened along the way. I’m so happy I get to celebrate you today Hassan and I hope you know that you deserve to be celebrated not just for what you do or what you achieve but simply for being the person you are.

I love you and I’m really really glad it’s you 🫵🏼 Happy birthday I hope you have the most beautiful year ahead of you!`,

    signoff: "With all my love,",
    signature: "Jana ❤️",
    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg", label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
      { src: "/images/placeholder-6.jpg", label: "" },
      { src: "/images/placeholder-7.jpg", label: "" },
    ],
    returnButton: "RETURN"
  },

  video: {
    title: "for you",
    videoSrc: "/videos/video.mp4",
    caption: "a little something I put together",
    returnButton: "RETURN"
  }
};

export default content;

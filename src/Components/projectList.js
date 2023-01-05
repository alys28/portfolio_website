const projectCodingList = [
  {
    name: "The Chat App",
    image: require("../img/projects/chat_app/conversation.png"),
    otherImages: [
      require("../img/projects/chat_app/main_page.png"),
      require("../img/projects/chat_app/contacts_list.png"),
      require("../img/projects/chat_app/profile_page.png"),
      require("../img/projects/chat_app/signup_page.png"),
      require("../img/projects/chat_app/realtime_page.png"),
    ],
    github: "https://github.com/Freakboy123/the-chat-app.git",
    url: null,
    video: null,
    desc: "A full stack real-time chat application built using the MERN stack (MongoDB, ExpressJS, React, NodeJS) and the SocketIO library. Create an account and get started with chatting with your friends in no time!",
  },
  {
    name: "CodeML Hackathon Challenge",
    image: require("../img/projects/codeML.png"),
    github: "",
    url: null,
    video: null,
    desc: "I participated in a University Machine learning hackathon (Polytechnique - Université de Montréal) and won first place in one of their challenges. With my teammate, we built a decision tree classifier to solve the recidivism challenge, where we had to assess the likelihood of a convicted person committing another crime in the future based on various factors, including age, gender, race, time in jail, and whether that person is a recidivist or not. The models were judged based on their F1 score, accuracy, and fairness. Of all the contestants in this category, we had the best performance with an accuracy of 98.75% and a fairness of 80.32%.",
  },
  {
    name: "Online Made Easy",
    image: require("../img/projects/online_made_easy.png"),
    github: "https://github.com/Freakboy123/online-made-easy.git",
    url: "https://freakboy123.github.io/online-made-easy/",
    video: "https://youtu.be/ozmtqL5UpN8",
    desc: "Web application built to help students struggling during the COVID pandemic. It consists of a dashboard containing useful 'widgets' (mini apps all in one place) that help increase productivity. Examples of widgets include a meditation app, a pomodoro timer and a to do list. Website made for the 2021 IBY Hacks+ Hackathon (2nd place).",
  },
  {
    name: "Our World (SOFOS)",
    image: require("../img/projects/sofos/home.png"),
    otherImages: [
      require("../img/projects/sofos/home02.png"),
      require("../img/projects/sofos/explore.png"),
      require("../img/projects/sofos/article.png"),
      require("../img/projects/sofos/user_profile.png"),
      require("../img/projects/sofos/profile.png"),
    ],
    video: "https://youtu.be/KRORr6JizJI",
    github: "https://github.com/Freakboy123/sofos.git",
    url: null,
    desc: "A mobile app frontend that I made using React Native. The main objective of this app was to help improve teenagers' general knowledge by showing them easily accessible content such as short videos and articles (similar to Instagram Reels and tik toks). It was built for the Junior Achievement Business Program for high school students.",
  },

  {
    name: "InfinityTask",
    image: require("../img/projects/infinityTask.png"),
    github: "",
    video: null,
    url: null,
    desc: "A backend for a more complex to do list application using ExpressJS. It also takes care of authentication (Passport.JS) with session cookies.",
  },
  {
    name: "Child Awareness App",
    image: require("../img/projects/child_awareness/home.png"),
    otherImages: [
      require("../img/projects/child_awareness/explore.png"),
      require("../img/projects/child_awareness/petition.png"),
    ],
    github: "https://github.com/HalogenLightBlob/projet-brebeufhx2022.git",
    url: "https://halogenlightblob.github.io/projet-brebeufhx2022/",
    video: "https://youtu.be/9jTDvvmEInA",
    desc: "A web application made in teams during the Brébeuf Hackathon in 2022 (ranked 1st place). I built the frontend using React. The website aims to raise awarness on children's living conditions around the world. It includes an interactive map where people can click on countries to view relevant statistics on topics like education and health. There also is a section where users can creat and view petitions.",
  },

  {
    name: "FocusTime",
    image: require("../img/projects/focustime/home.png"),
    otherImages: [
      require("../img/projects/focustime/timer.png"),
      require("../img/projects/focustime/home02.png"),
    ],
    github: "https://github.com/Freakboy123/focustime.git",
    url: null,
    video: null,
    desc: "A special pomodoro app for iOS and Android built using React Native.",
  },

  {
    name: "WeatherSnap",
    image: require("../img/projects/weatherSnap.png"),
    github: "",
    url: null,
    video: null,
    desc: "A simple incomplete weather app that fetches data from an API and displays it on the client, built using React.",
  },
  {
    name: "To Do List",
    image: require("../img/projects/todoapp.png"),
    github: "https://github.com/Freakboy123/todoapp.git",
    url: null,
    video: null,
    desc: "A simple web app made using the Flask module in Python that keeps track of your daily tasks. You can create / view your tasks, update and delete them.",
  },
];

export { projectCodingList };

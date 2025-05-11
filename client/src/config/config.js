const config = {
  // ==== HOME PAGE ====
  homePage: {
    // Number of sentences displayed per slide
    sentencePerSlide: 2, // Adjust this to control how many sentences are shown per slide
    slides: [
      [
        "Hello, Shortcake",
        "Happy 5th Monthversary!💖",
        // If you set `sentencePerSlide` to 2, the next text won't be visible
        "Surprise!",
      ],
      [
        "This time, I made something...",
        "different for you",
      ],
      ["Brace yourself sweetheart."],
      ["I want to know how well you know me by now. HEHE😈"],
      // You can add more slides or delete slides as needed
    ],
  },

  // ==== QUIZ PAGE ====
  quizPage: {
    // Color of the progress bar
    progressBarColor: "#cf6b87",
    // Text labels for the quiz
    text: {
      questionLabel: "Question",
      ofLabel: "out of",
      scoreLabel: "Score:",
      yourScoreLabel: "Your score:",
      nextButtonText: "Go to next page",
    },
    // Quiz questions and answers
    questions: [
      {
        id: 1, // Unique ID for the question
        title: "What age was I circumcised?",
        description: "I've told you this a thousand times",
        correctAnswer: "10-years-old", // Correct answer value (must match one of the options' `value`)
        options: [
          { value: "8-months-old", label: "8-months-old" },
          { value: "6-years-old", label: "6-years-old" },
          { value: "10-years-old", label: "10-years-old" },
          { value: "not circumcised yet", label: "not circumcised yet" },
        ],
      },
      {
        id: 2,
        title: "Who was my role model when I was 4?",
        description: "Son of Mrs. I came in like a wrecking ball",
        correctAnswer: "Manny",
        options: [
          { value: "cocp", label: "Coco Martin" },
          { value: "bob", label: "Bob Ross" },
          { value: "barney", label: "Barney" },
          { value: "Manny", label: "Manny Pacquiao" },
        ],
      },
      {
        id: 3,
        title: "Which diva was born on the same day as me?",
        description: "Super famous. At least, 115 miliion people know her name.",
        correctAnswer: "sept-14",
        options: [
          { value: "sept-12", label: "Pope Francis" },
          { value: "oct-16", label: "Miley Cyrus" },
          { value: "august-14", label: "Nick Jonas" },
          { value: "sept-14", label: "Philippines" },
        ],
      },
      {
        id: 4,
        title: "Who is my favorite person in the world",
        description: "I super duper googleplex quantillion amazon bolt wise microsoft love this person",
        correctAnswer: "GABRIELLE JOURNEY GABRIDO",
        options: [
          { value: "sept-12", label: "Manny Pacquiao" },
          { value: "oct-16", label: "Super Idol" },
          { value: "august-14", label: "Tung Tung Tung Sahur" },
          { value: "GABRIELLE JOURNEY GABRIDO", label: "GABRIELLE JOURNEY GABRIDO" },
        ],
      },
      // You can add more questions here
    ],
    // GIF ANIMATION CONFIGURATION
    gifConfig: [
      {
        check: (score) => score >= 3, // If score is 3 or above, this GIF will be shown
        heading: "Wow!!!!!!! unbelievable",
        gifName: "gif4.gif", // Name of the GIF file in `src/assets/gifs`
        style: "w-44", // Tailwind CSS class for styling the GIF
      },
      {
        check: (score) => score === 2, // If score is exactly 2, this GIF will be shown
        heading: "Ehhh, not bad! so I still love you",
        gifName: "gif3.gif",
        style: "w-44",
      },
      {
        check: (score) => score === 1, // If score is exactly 1, this GIF will be shown
        heading: "It's okay, I know you tried so hard",
        gifName: "gif2.gif",
        style: "w-44",
      },
      {
        check: () => true, // Default case (if none of the above conditions are met)
        heading: "umm... wtf???",
        gifName: "gif1.gif",
        style: "w-44",
      },
    ],
  },

  // ==== DRAWING PAGE ====
  drawingPage: {
    // Messages displayed on the drawing page
    messages: [
      "Can you draw me a flower",
      "Give me another flower",
      "Draw me one last flower",
    ],
    // Colors available for drawing
    COLORS: ["#000000", "#FF7043", "#66BB6A", "#42A5F5", "#FFEE58"],
    // Text for the submit button
    text: {
      submitText: "Submit",
      finalText: "Thank you baby ❤️",
      loading: "Sending...",
    },
  },

  // ==== LETTER PAGE ====
  letterPage: {
    // Placeholder text for the letter input
    placeholder: {
      default: `Now, I want you to write me a letter :) Once you click "Send Message" I'll be able to see it hehe`,
      emptyInput: "You have to write me something first!! ):",
      success: "Thank you for the message my love!",
      error: "Failed to send the message. try it again!",
    },
    // Button text
    buttons: {
      sendMessage: "Send Message",
      clearText: "Clear",
      loading: "Sending...",
    },
    // API configuration for sending emails
    api: {
      baseURL: `https://fiveth-monthversary.onrender.com`,
      // Configure this based on your development port (check server/app.js or .env.PORT) and update this to your live backend URL after deployment

      sendEmailEndpoint: "/send-email", // Endpoint for sending emails
    },
  },

  // ==== CLOSING PAGE ====
  closingPage: {
    // Final message displayed on the closing page
    message:
      "I love you baby! Happy 5th<3",
    // GIF displayed on the closing page
    gifName: "closing.gif", // Name of the GIF file in `src/assets/gifs`
    style: "w-44", // Tailwind CSS class for styling the GIF
  },
};

export default config;

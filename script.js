const questions = [
    { question: "What do you do when you have a conflict on social media?", answers: ["Avoid it", "Confront it", "Talk it out", "Ignore it"] },
    { question: "How often do you check your social media?", answers: ["Every hour", "A few times a day", "Once a day", "Rarely"] },
    { question: "What do you do when a friend is upset?", answers: ["Listen to them", "Give advice", "Avoid them", "Downplay it"] },
    { question: "How do you meet new people?", answers: ["Online", "Through friends", "At events", "I don't"] },
    { question: "What do you do when you're tagged in an unflattering photo?", answers: ["Laugh it off", "Ask to remove it", "Ignore it", "Get upset"] },
    { question: "How do you respond to a negative comment?", answers: ["Ignore it", "Reply calmly", "Argue back", "Delete it"] },
    { question: "How do you take care of your mental health?", answers: ["Exercise", "Meditate", "Talk to friends", "Ignore it"] },
    { question: "How do you make plans with friends?", answers: ["Organize it", "Join in", "Wait to be invited", "I don't"] },
    { question: "How do you feel about group activities?", answers: ["Love them", "Like them", "Neutral", "Dislike them"] },
    { question: "What do you do when a friend has a success?", answers: ["Celebrate with them", "Congratulate them", "Feel jealous", "Ignore it"] },
    { question: "How often do you contact your friends?", answers: ["Daily", "Weekly", "Monthly", "Rarely"] },
    { question: "What do you do when you hear gossip?", answers: ["Avoid it", "Participate", "Listen but don't engage", "Spread it"] },
    { question: "How do you deal with stress?", answers: ["Talk to someone", "Exercise", "Avoid it", "Let it build up"] },
    { question: "How do you balance online and offline life?", answers: ["Focus on offline", "Balance both", "More online", "Struggle with it"] },
    { question: "How do you help a friend in need?", answers: ["Be there for them", "Give advice", "Avoid them", "Tell them to toughen up"] }
];

let currentQuestion = 0;
let userAnswers = [];
let username = '';

function startTest() {
    username = document.getElementById('username').value;
    if (!username) {
        alert("Please enter your username");
        return;
    }
    document.querySelector('.username-input').classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const questionnaire = document.getElementById('questionnaire');
    questionnaire.innerHTML = `
        <p>${questions[currentQuestion].question}</p>
        ${questions[currentQuestion].answers.map((answer, index) => 
            `<button onclick="submitAnswer(${index})">${answer}</button>`
        ).join('')}
    `;
    questionnaire.classList.remove('hidden');
}

function submitAnswer(answerIndex) {
    userAnswers.push(answerIndex);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        calculateResult();
    }
}

function calculateResult() {
  const score =
    userAnswers.reduce((a, b) => a + b, 0) * (100 / (questions.length * 3)); // Assuming max index 3

  let result;
  let gifUrl;
  let explanation;
  if (score <= 20) {
    result = "Very Low Social IQ";
    gifUrl =
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjh5MjJndWJsZXFhbnQyZHp4bXZwdGY2M2c3enJ3bnByZDV0cnEyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RdJJGe8Hw88z4hq7bu/giphy.gif"; // Very Low IQ GIF
    explanation =
      "You find it quite challenging to navigate social interactions. It's important to start by observing and learning from those who are more socially adept.";
  } else if (score <= 40) {
    result = "Low Social IQ";
    gifUrl =
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGducGhjd3dyZnhycWFqdG5hY2RqdmFsZjFvMWc3YTBjdDQ4cG5lYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/h3e3Tch1zrXgrtHwaF/giphy.gif"; // Low IQ GIF
    explanation =
      "You may struggle with social situations. Consider working on your social skills and understanding of social dynamics through practice and self-reflection.";
  } else if (score <= 60) {
    result = "Average Social IQ";
    gifUrl =
      "https://media.giphy.com/media/gAap1hEomkx2cktXYT/giphy.gif?cid=790b7611662tl16ea9uf5z8pgl2y7aq678hb0x56c7941co9&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // Average IQ GIF
    explanation =
      "You have a decent understanding of social interactions. With a bit more effort, you can improve further. Try engaging more actively in social situations and observe the responses.";
  } else if (score <= 80) {
    result = "High Social IQ";
    gifUrl =
      "https://media.giphy.com/media/0rG4FeVfG7z6lqLFpb/giphy.gif?cid=ecf05e479eg82ifqqbtz760ay3w54118h4sh996qpg0ifx0m&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // High IQ GIF
    explanation =
      "You excel in social situations and have a great understanding of social dynamics. Continue to nurture these skills and help others who might struggle in social contexts.";
  } else {
    result = "Very High Social IQ";
    gifUrl =
      "https://media.giphy.com/media/3ohs88j0jPszpGCbYY/giphy.gif?cid=790b7611r0xz61tcyp5db3zukmanpbvak0bhcm9tdr35jclo&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // Very High IQ GIF
    explanation =
      "You are a social genius! You navigate social situations with ease and have a deep understanding of social interactions. Use this talent to foster meaningful relationships and mentor others.";
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <h2>${username}, your Social IQ is: ${result}</h2>
      <img src="${gifUrl}" alt="${result}">
      <p>${explanation}</p>
  `;
  document.getElementById('questionnaire').classList.add('hidden');
  resultDiv.classList.remove('hidden');
}
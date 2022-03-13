var quiz = [
    {
      question: "В кое съзвездие се намира Планетата на съкровищата?",
      choices: ["Стрелец", "Орион", "Рак", "Малка мечка"],
      correct: "Рак",
      explanation:
        "Планетата 55 Canri, от съзвездието Рак, има повърхност изцяло направена от графит и диамант и е наречена още Планетата на съкровищата.",
    },
    {
      question:
        "Какво тренират космонавтите излизайки от орбитата в надуваеми топки?",
      choices: [
        "уменията си за придвижване при нулева гравитация",
        "вестибуларните си апарати",
      ],
      correct: "вестибуларните си апарати",
      explanation:
        "Космонавтите тренират вестибуларните си апарати като напускат орбитата в надуваеми топки.",
    },
    {
      question:
        "Кои планети се слагат под името на гръцката богиня Персефона?",
      choices: ["Тези отвъд слънчевата система", "Измислените"],
      correct: "Измислените",
      explanation:
        "Има имислени планети, породени от хипотези или художествени средства, които биват сведени под общото име Персефона, смятайки се, че името на гръцката богиня идеално пасва хипотетичните планети създадени въз основа на математика.",
    },
    {
      question:
        "От какво е обградена планетата, на която е заключено човечеството в книгата на Брандън Сандерсон „Към небето “?",
      choices: ["Обвивка от отровен газ", "Метални платформи"],
      correct: "Метални платформи",
      explanation:
        "В книгата на Брандън Сандерсън „Към небето “се разказва за човечество затворено на планета, обградена от метални платформи, което постоянно бива атакувано от незнайни сили. Също така се издирват гъби.",
    },
    {
      question:
        "Как е името на един от най-влиятелните филми в кинофантастиката от 1968г.?",
      choices: ["„2001: Космическа одисея “", "„Космическа одисея - 2001“"],
      correct: "„2001: Космическа одисея “",
      explanation:
        "Един от най-влиятелните филми в кинофантастиката е „2001: Космическа одисея “от 1968г. и разказва за прогреса на човечеството след намиране на извънземен обект на Луната.",
    },
    {
      question:
        "Кой химичен процес в ядрото на слънцето отделя енергия равна на 100 милярда ядрени бомби за една сек?",
      choices: ["водород -> хелий", "хелий -> водород"],
      correct: "водород -> хелий",
      explanation:
        "В ядрото си Слънцето обединява водорода за да получи хелий, което освобождава енергия равна на 100 милярда ядрени бомби за една секунда.",
    },
  ];

  var currentQuestion = 0;
  var score = 0;
  var askingQuestion = true;

  function loadQuestion() {
    var radioButton;

    document.getElementById("content").innerHTML = "";

    for (var i = 0; i < quiz[currentQuestion]["choices"].length; i++) {
      radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = "quiz";
      radioButton.id = "choice" + (i + 1);
      radioButton.value = quiz[currentQuestion]["choices"][i];

      var label = document.createElement("label");
      label.setAttribute("for", "choice" + (i + 1));
      label.innerHTML = quiz[currentQuestion]["choices"][i];

      var br = document.createElement("br");

      document.getElementById("content").appendChild(br);
      document.getElementById("content").appendChild(label, br);
      document.getElementById("content").insertBefore(radioButton, label);
    }

    document.getElementById("question").innerHTML =
      quiz[currentQuestion]["question"];

    if (currentQuestion == 0) {
      document.getElementById("score").innerHTML =
        "<p>score: 0 right answers out of " + quiz.length + " possible</p>";
    }
  }

  function checkAnswer() {
    if (askingQuestion) {
      document.getElementById("check").innerHTML = "Next Question";
      askingQuestion = false;

      var userpick;
      var correctIndex;
      var radios = document.getElementsByName("quiz");
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          userpick = radios[i].value;
        }

        if (radios[i].value == quiz[currentQuestion]["correct"]) {
          correctIndex = i;
        }
      }

      if (userpick == quiz[currentQuestion]["correct"]) {
        score++;
        document.getElementsByTagName("label")[correctIndex].style.color =
          "green";
        document.getElementsByTagName("label")[
          correctIndex
        ].style.fontWeight = "bold";
        document.getElementById("explanation").innerHTML =
          "<h3>Correct!</h3>";
      } else {
        document.getElementsByTagName("label")[correctIndex].style.color =
          "red";
        document.getElementsByTagName("label")[
          correctIndex
        ].style.fontWeight = "bold";
        document.getElementById("explanation").innerHTML =
          "<h3>Incorrect</h3>";
      }

      document.getElementById("explanation").innerHTML +=
        "<p>" + quiz[currentQuestion]["explanation"] + "</p>";
      document.getElementById("score").innerHTML =
        "<p>score: " +
        score +
        " right answers out of " +
        quiz.length +
        " possible</p>";
    } else {
      askingQuestion = true;

      document.getElementById("check").innerHTML = "Submit Answer";

      document.getElementById("explanation").innerHTML = "";

      if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        loadQuestion();
      } else {
        showFinalResults();
      }
    }
  }

  function showFinalResults() {
    document.getElementById("content").innerHTML =
      "<h2>You Completed The Quiz</h2>";
    document.getElementById("content").innerHTML +=
      "<p>Below are your results:</p>";
    document.getElementById("content").innerHTML +=
      "<h2>" +
      score +
      " out of " +
      quiz.length +
      " questions, " +
      Math.round((score / quiz.length) * 100) +
      "%</h2>";

    var button = document.getElementById("check");
    button.parentNode.removeChild(button);

    document.getElementById("question").innerHTML = "";
  }

  window.onload = loadQuestion;
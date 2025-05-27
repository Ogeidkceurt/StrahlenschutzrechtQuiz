const questions = [
  {
    question: "Welche der folgenden Rechtsvorschriften bildet die zentrale gesetzliche Grundlage für den Schutz vor ionisierender Strahlung in Deutschland?",
    answers: [
      { text: "Grundgesetz (GG)", correct: false },
      { text: "Strahlenschutzgesetz (StrlSchG)", correct: true },
      { text: "Verordnung zur Regelung der Umweltverträglichkeitsprüfung (UVPG)", correct: false },
      { text: "Betriebssicherheitsverordnung (BetrSichV)", correct: false },
    ]
  },
  {
    question: "In welchen Fällen ist der Nachweis der Fachkunde im Strahlenschutz nach § 47 StrlSchV erforderlich? ",
    answers: [
      { text: "Bei der Durchführung radiologischer Befundung durch ärztliches Fachpersonal", correct: true },
      { text: "Beim Betreiben von Lasereinrichtungen die keine Ultrakurzpulslaser sind", correct: false },
      { text: "Bei der Ausübung der Arbeit als Medizinische Technolog/-innen für Radiologie (MTR)", correct: true },
      { text: "Reinigungskräfte im Bereich der Radiologie", correct: false },
    ]
  }, 
  {
    question: "Welches sind die für den Vollzug des StrlSchG und der StrlSchV zuständigen Behörden?",
    answers: [
      { text: "Gewerbeaufsichtsämter, Ämter für Arbeitsschutz und Sicherheitstechnik", correct: true },
      { text: "Landeseinwohnerämter", correct: false },
      { text: "Technische Überwachungsvereine", correct: false },
      { text: "Landesmessstellen", correct: false },
    ]
  },
  {
    question: "Welche Voraussetzung muss eine Person nach dem Strahlenschutzgesetz erfüllen, bevor sie zum Strahlenschutz-beauftragten bestellt werden kann?",
    answers: [
      { text: "Abteilungsleiterfunktion ", correct: false },
      { text: "Fachkunde im Strahlenschutz", correct: true },
      { text: "Lebensalter über 20 Jahre", correct: false },
      { text: "Zuverlässigkeit", correct: true },
    ]
  },
  {
    question: "Welche der folgenden Expositionssituationen stellen keine geplante Exposition dar?",
    answers: [
      { text: "Hilfeleistung eines KHG-Mitarbeiters im Rahmen eines Notfalls in einer kerntechnischen Anlage ohne Gefährdung von Leben und Gesundheit", correct: true },
      { text: "Röntgenuntersuchung einer Patientin im Rahmen der Brustkrebsvorsorge", correct: false },
      { text: "Tätigkeit eines Wasserwerkers in einem Bauwerk der Wasserversorgung mit erhöhter Rn-222-Konzentration in der Luft", correct: true },
      { text: "Hilfeleistung eines KHG-Mitarbeiters im Rahmen eines Notfalls in einer kerntechnischen Anlage mit Gefährdung von Leben und Gesundheit", correct: true },
    ]
  },
  {
    question: "Welche der folgenden Tätigkeiten sind nicht gerechtfertigt nach StrlSchV?",
    answers: [
      { text: "Die Nutzung einer Röntgeneinrichtung am Flughafen zur Personenkontrolle auf verbotene Gegenstände  ", correct: true },
      { text: "Durchleuchtung von Seefrachtcontainern durch den Zoll mittels hochradioaktiver Strahlenquellen", correct: true },
      { text: "Betrieb einer alten Radar-Anlage, bei der bauartbedingt Röntgenstrahlung entsteht (Störstrahler)", correct: false },
      { text: "Sterilisation getrockneter Kräuter und Gewürze mit ionisierender Strahlung", correct: false },
    ]
  },
  {
    question: "Ein SSB möchte eine wichtige Änderung im Strahlenschutzkonzept seiner Firma vornehmen. Welche innerbetrieblichen Parteien hat er laut StrlSchG darüber in Kenntnis zu setzen?",
    answers: [
      { text: "Aufsichtsrat", correct: false },
      { text: "Fachkräfte für Arbeitssicherheit", correct: true },
      { text: "Betriebsrat/Personalrat", correct: true },
      { text: "Ermächtigte Ärzte des Unternehmens", correct: true },
    ]
  },
  {
    question: "Welche Bestandteile können in einer Strahlenschutzanweisung enthalten sein? ",
    answers: [
      { text: "Festlegung von Dosisrichtwerten", correct: true },
      { text: "Anforderungen an Prüfung und Wartung der wesentlichen Strahlenschutzmesstechnik", correct: true },
      { text: "Vorbereitende Maßnahmen für Stör- und Notfälle", correct: true },
      { text: "Betriebliche Organisation des Strahlenschutzes", correct: true },
    ]
  },
  {
    question: "Welche Voraussetzung muss für die Rechtfertigung einer neuen Strahlenanwendung nach § 6 StrlSchG vorliegen?",
    answers: [
      { text: "Die Anwendung muss wirtschaftlich rentabel sein.", correct: false },
      { text: "Der Nutzen für die Gesellschaft oder die betroffenen Personen muss die Strahlenexposition überwiegen.", correct: true },
      { text: "Es muss eine Alternative ohne ionisierende Strahlung verfügbar sein.", correct: false },
      { text: "Die Anwendung darf nur in medizinischen Notfällen genutzt werden. ", correct: false },
    ]
  },
  {
    question: "Welche Dosisgrenzwerte gelten für beruflich exponierte Personen?",
    answers: [
      { text: "20 mSv/Kalendarjahr effektive Dosis.", correct: true },
      { text: "50 mSv/Kalendarjahr für die Hautdosis.", correct: false },
      { text: "1 mSv/Kalendarjahr für die Augenlinse.", correct: false },
      { text: "6 mSv/Kalendarjahr für die Hände (Extremitätendosis).", correct: false },
    ]
  },
  {
    question: "Wie wird die Effektive Dosis nach ICRP 103 berechnet? ",
    answers: [
      { text: "Summe der Organ-Äquivalentdosen", correct: false },
      { text: "Gewichtete Summe der Organ-Äquivalentdosen mit Gewebewichtungsfaktoren", correct: true },
      { text: "Nur die Ganzkörperdosis ist relevant", correct: false },
      { text: "Gemessen in Gray (Gy)", correct: false },
    ]
  },
  {
    question: "Wer trägt für den Strahlenschutz im Unternehmen grundsätzlich die Verantwortung? ",
    answers: [
      { text: "Der Strahlenschutzverantwortliche", correct: true },
      { text: "Der Strahlenschutzbeauftragte", correct: false },
      { text: "Der Strahlenschutzbevollmächtigte", correct: false },
      { text: "Jeder Mitarbeiter", correct: false },
    ]
  },
  {
    question: "Welche grundsätzliche Unterscheidung trifft das Strahlenschutzgesetz? Unterscheidung zwischen...",
    answers: [
      { text: "Radiopharmaka und radioaktiven Abfällen", correct: false },
      { text: "Kernbrennstoffen und sonstigen radioaktiven Stoffen", correct: true },
      { text: "Langlebigen und offenen radioaktiven Stoffen", correct: false },
      { text: "kurzlebigen und umschlossenen radioaktiven Stoffen", correct: false },
    ]
  },
  {
    question: "Nach welchen Vorschriften können Genehmigungen im Strahlenschutz erteilt werden?",
    answers: [
      { text: "AtG – Atomgesetz", correct: true },
      { text: "AtDeckV - Atomrechtliche Deckungsvorsorgeverordnung", correct: false },
      { text: "Atemschutzmerkblatt", correct: false },
      { text: "StrlSchV – Strahlenschutzverordnung", correct: true },
      { text: "DIN 25425 – Radionuklidlaboratorien", correct: false },
    ]
  },
  {
    question: "Welche Aussagen sind laut § 8 StrlSchG richtig?",
    answers: [
      { text: "Dosisgrenzwerte sollen ausgeschöpft werden ", correct: false },
      { text: "Unnötige Expositionen gilt es zu vermeiden", correct: true },
      { text: "die Exposition ist auch unterhalb der Grenzwerte so gering wie möglich zu halten", correct: true },
    ]
  },
  {
    question: "Wie oft ist die berufliche Exposition von Schwangeren zu ermitteln?",
    answers: [
      { text: "monatlich", correct: false },
      { text: "alle zwei Wochen", correct: false },
      { text: "arbeitswöchentlich", correct: true },
      { text: "täglich", correct: false },
    ]
  },
  {
    question: "Wie lange muss die ermittelte Körperdosis aufbewahrt werden (§ 167 StrlSchG)? ",
    answers: [
      { text: "20 Jahre nach Beendigung der Beschäftigung", correct: false },
      { text: "für immer", correct: false },
      { text: "bis die überwachte Person das 75. Lebensjahr vollendet hat oder hätte", correct: true },
      { text: "bis zur Vollendung des 70. Lebensjahres", correct: false },
      { text: "mindestens 30 Jahre nach Beendigung der Beschäftigung", correct: true },
    ]
  },
  {
    question: "Wann muss eine beruflich exponierte Person der Kategorie B strahlenschutzärtzlich untersucht werden?",
    answers: [
      { text: "vor Beginn einer Tätigkeit", correct: false },
      { text: "jährlich", correct: false },
      { text: "wenn die Behörde dies fordert", correct: true },
    ]
  },
  {
    question: "Unter welchen Umständen haftet der zuständige SSB möglicherweise mit seinem Privatvermögen? ",
    answers: [
      { text: "Ein unterwiesener Mitarbeiter betritt unter Missachtung der ordnungsgemäß angebrachten Beschilderung ohne die bereitgestellte erforderliche Schutzausrüstung anzulegen einen Raum, in dem mit offenen radioaktiven Stoffen oberhalb der Freigrenze umgegangen wird. Nach Inkorporation verklagt der Mitarbeiter den SSB auf Schmerzensgeld.", correct: false },
      { text: "Er ermöglicht vorsätzlich die Herausgabe eines Gegenstands, dessen Kontamination die Werte nach Anlage 4 Spalte 3 oder Spalte 5 überschreitet.", correct: true },
      { text: "Die Krankenhausleitung ordnet an, eine Bestrahlungseinrichtung trotz nicht bestandener Konstanzprüfung bis zum Wochenende weiterzubetreiben. Ein Patient wird dadurch geschädigt.", correct: false },
      { text: "Er gibt eine nach § 12 StrlSchG genehmigungspflichtige Strahlenquelle zur Entsorgung an ein ihm bis dato unbekanntes Unternehmen ab, ohne sich dessen Umgangsgenehmigung nachweisen zu lassen. ", correct: true },
    ]
  },
  {
    question: "Welcher Paragraf beschreibt das ALARA-Prinzip allgemein?",
    answers: [
      { text: "§ 70 StrlSchG", correct: false },
      { text: "§ 8 StrlSchV", correct: false },
      { text: "§ 8 StrlSchG", correct: true },
      { text: "§ 32 StrlSchG", correct: false },
    ]
  },
  {
    question: "Welche Gründe sprechen immer gegen eine Beschäftigung in einem Kontrollbereich, in dem nicht mit offenen radioaktiven Stoffen umgegangen wird?",
    answers: [
      { text: "Aktive Krebserkrankung", correct: false },
      { text: "Offene Hauterkrankungen", correct: false },
      { text: "Schwangerschaft", correct: false },
      { text: "Tragen nötiger Schutzausrüstung nicht möglich (z. B. schwere Abschirmwesten)", correct: true },
    ]
  },
  {
    question: "Welche Aussagen für einen Kurs im Rahmen des Fachkundeerwerbs (FK-RL Technik) sind richtig?",
    answers: [
      { text: "Reine Onlinekurse sind zulässig.", correct: false },
      { text: "Es muss eine abschließende Lernerfolgskontrolle stattfinden.", correct: true },
      { text: "Besteht die Fachkunde aus mehreren Theoriemodulen, so dürfen diese in beliebiger Reihenfolge absolviert werden.", correct: false },
      { text: "Die Beantragung der Fachkunde ist innerhalb von zehn Jahren nach erfolgreichem Kursabschluss möglich.", correct: false },
    ]
  }
  
  
  // weitere Fragen...
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const progressElement = document.getElementById('progress');
const restartBtn = document.getElementById('restart-btn');

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function updateProgress() {
  progressElement.textContent = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
}

function loadQuestion() {
  clearState();
  const question = questions[currentQuestionIndex];
  questionElement.innerText = question.question;

  const shuffledAnswers = shuffle([...question.answers]);

  shuffledAnswers.forEach((answer, index) => {
    const label = document.createElement('label');
    label.classList.add('answer');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'answer';
    input.dataset.correct = answer.correct;
    input.value = index;
    label.appendChild(input);
    label.append(" " + answer.text);
    answersContainer.appendChild(label);
  });

  updateProgress();
}

function clearState() {
  answersContainer.innerHTML = '';
  nextBtn.style.display = 'none';
  submitBtn.disabled = false;
}

submitBtn.addEventListener('click', () => {
  const checkboxes = answersContainer.querySelectorAll('input');
  let questionCorrect = true;

  checkboxes.forEach((checkbox) => {
    const label = checkbox.parentElement;
    const isCorrect = checkbox.dataset.correct === "true";
    const isChecked = checkbox.checked;

    if (isChecked && isCorrect) {
      label.classList.add('correct');
    } else if (isChecked && !isCorrect) {
      label.classList.add('incorrect');
      questionCorrect = false;
    } else if (!isChecked && isCorrect) {
      label.classList.add('incorrect');
      questionCorrect = false;
    }

    checkbox.disabled = true;
  });

  if (questionCorrect) {
    score++;
  }

  submitBtn.disabled = true;
  nextBtn.style.display = 'inline-block';
});

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

restartBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  shuffle(questions);
  restartBtn.style.display = 'none';
  submitBtn.style.display = 'inline-block';
  loadQuestion();
});

function showResults() {
  questionElement.innerText = "Quiz beendet!";
  progressElement.textContent = "";
  answersContainer.innerHTML = `
    <p>Du hast <strong>${score}</strong> von <strong>${questions.length}</strong> Fragen richtig beantwortet.</p>
    <p>Ergebnis: <strong>${Math.round((score / questions.length) * 100)}%</strong></p>
  `;
  submitBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'inline-block';
}

shuffle(questions);
loadQuestion();
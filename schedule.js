const schedule = {
  "Понеділок": [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Навчання грамоти", pl: "Nauka pisania" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Математика", pl: "Matematyka" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad klasy 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Англійська мова", pl: "Język angielski" }, time: "11:55 - 12:40" },
  ],
  "Вівторок": [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Навчання грамоти", pl: "Nauka pisania" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Математика", pl: "Matematyka" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad klasy 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Природа", pl: "Przyroda" }, time: "11:55 - 12:40" },
    { number: " ", subject: { ua: "Обід 5-6 класи", pl: "Obiad klasy 5-6" }, time: "12:40 - 13:00" },
    { number: 5, subject: { ua: "Пластика", pl: "Plastyka" }, time: "13:00 - 13:45" },
  ],
  "Середа": [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Математика", pl: "Matematyka" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Англійська мова", pl: "Język angielski" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad klasy 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Фізична культура", pl: "Wychowanie fizyczne" }, time: "11:55 - 12:40" },
  ],
  "Четвер": [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Математика", pl: "Matematyka" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Природа", pl: "Przyroda" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad klasy 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Англійська мова", pl: "Język angielski" }, time: "11:55 - 12:40" },
  ],
  "П'ятниця": [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Математика", pl: "Matematyka" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Фізична культура", pl: "Wychowanie fizyczne" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad klasy 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Пластика", pl: "Plastyka" }, time: "11:55 - 12:40" },
  ]
};

// Експортуємо schedule для використання в інших файлах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = schedule; // Для Node.js
} else {
  window.schedule = schedule; // Для браузера
}

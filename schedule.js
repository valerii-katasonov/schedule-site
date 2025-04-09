// schedule.js
const schedule = {
  "Понеділок": [
    { number: 1, subject: "Навчання грамоти", time: "9:00 - 9:45" },
    { number: " ", subject: "Перерва", time: "9:45 - 9:55" },
    { number: 2, subject: "Навчання грамоти", time: "9:55 - 10:40" },
    { number: " ", subject: "Перерва", time: "10:40 - 10:50" },
    { number: 3, subject: "Математика", time: "10:50 - 11:35" },
    { number: " ", subject: "Обід 1-4 класи", time: "11:35 - 11:55" },
    { number: 4, subject: "Англійська мова", time: "11:55 - 12:40" },
  ],
  "Вівторок": [
    { number: 1, subject: "Навчання грамоти", time: "9:00 - 9:45" },
    { number: " ", subject: "Перерва", time: "9:45 - 9:55" },
    { number: 2, subject: "Навчання грамоти", time: "9:55 - 10:40" },
    { number: " ", subject: "Перерва", time: "10:40 - 10:50" },
    { number enforce: 3, subject: "Математика", time: "10:50 - 11:35" },
    { number: " ", subject: "Обід 1-4 класи", time: "11:35 - 11:55" },
    { number: 4, subject: "Przyroda", time: "11:55 - 12:40" },
    { number: " ", subject: "Обід 5-6 класи", time: "12:40 - 13:00" },
    { number: 5, subject: "Plastyka", time: "13:00 - 13:45" },
  ],
  "Середа": [
    { number: 1, subject: "Навчання грамоти", time: "9:00 - 9:45" },
    { number: " ", subject: "Перерва", time: "9:45 - 9:55" },
    { number: 2, subject: "Математика", time: "9:55 - 10:40" },
    { number: " ", subject: "Перерва", time: "10:40 - 10:50" },
    { number: 3, subject: "Jezyk Polski", time: "10:50 - 11:35" },
    { number: " ", subject: "Обід 1-4 класи", time: "11:35 - 11:55" },
    { number: 4, subject: "Англійська мова", time: "11:55 - 12:40" },
    { number: " ", subject: "Обід 5-6 класи", time: "12:40 - 13:00" },
    { number: 5, subject: "Англійська мова", time: "13:00 - 13:45" },
  ],
  "Четвер": [
    { number: 1, subject: "Навчання грамоти", time: "9:00 - 9:45" },
    { number: " ", subject: "Перерва", time: "9:45 - 9:55" },
    { number: 2, subject: "Навчання грамоти", time: "9:55 - 10:40" },
    { number: " ", subject: "Перерва", time: "10:40 - 10:50" },
    { number: 3, subject: "Jezyk Polski", time: "10:50 - 11:35" },
    { number: " ", subject: "Обід 1-4 класи", time: "11:35 - 11:55" },
    { number: 4, subject: "Математика", time: "11:55 - 12:40" },
    { number: " ", subject: "Обід 5-6 класи", time: "12:40 - 13:00" },
    { number: 5, subject: "Plastyka", time: "13:00 - 13:45" },
    { number: " ", subject: "Перерва", time: "13:45 - 13:55" },
    { number: 6, subject: "Англійська мова", time: "13:55 - 14:40" },
  ],
  "П'ятниця": [
    { number: 1, subject: "Я досліджую світ", time: "9:00 - 9:45" },
    { number: " ", subject: "Перерва", time: "9:45 - 9:55" },
    { number: 2, subject: "Jezyk Polski", time: "9:55 - 10:40" },
    { number: " ", subject: "Перерва", time: "10:40 - 10:50" },
    { number: 3, subject: "Edukacja wczesnoszkolna", time: "10:50 - 11:35" },
    { number: " ", subject: "Обід 1-4 класи", time: "11:35 - 11:55" },
    { number: " ", subject: "Очікування автобусу", time: "11:55 - 12:20" },
    { number: " ", subject: "Шлях зі школи до басейну на автобусі", time: "12:20 - 12:45" },
    { number: 4, subject: "Wyhowanie фізичне (басейн)", time: "13:00 - 14:00" },
    { number: " ", subject: "Шлях з басейну до школи на автобусі", time: "14:30 - 14:55" },
  ],
};

// Експортуємо schedule для використання в інших файлах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = schedule; // Для Node.js
} else {
  window.schedule = schedule; // Для браузера
}

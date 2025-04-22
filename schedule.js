// schedule.js

const dayNames = {
  Monday: { ua: "Понеділок", pl: "Poniedziałek" },
  Tuesday: { ua: "Вівторок", pl: "Wtorek" },
  Wednesday: { ua: "Середа", pl: "Środa" },
  Thursday: { ua: "Четвер", pl: "Czwartek" },
  Friday: { ua: "П'ятниця", pl: "Piątek" },
  Saturday: { ua: "Субота", pl: "Sobota" },
  Sunday: { ua: "Неділя", pl: "Niedziela" }
};

const schedule = {
  Monday: [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka czytania i pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Навчання грамоти", pl: "Nauka czytania i pisania" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Математика", pl: "Matematyka" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad dla klas 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Англійська мова", pl: "Język angielski" }, time: "11:55 - 12:40" },
  ],
  Tuesday: [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka czytania i pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Навчання грамоти", pl: "Nauka czytania i pisania" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Математика", pl: "Matematyka" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad dla klas 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Przyroda", pl: "Przyroda" }, time: "11:55 - 12:40" },
    { number: " ", subject: { ua: "Обід 5-6 класи", pl: "Obiad dla klas 5-6" }, time: "12:40 - 13:00" },
    { number: 5, subject: { ua: "Plastyka", pl: "Plastyka" }, time: "13:00 - 13:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "13:45 - 13:55" },
    { number: 6, subject: { ua: "Jezyk Polski", pl: "Język Polski" }, time: "13:55 - 14:40" },
  ],
  Wednesday: [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka czytania i pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Математика", pl: "Matematyka" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Jezyk Polski", pl: "Język Polski" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad dla klas 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Англійська мова", pl: "Język angielski" }, time: "11:55 - 12:40" },
    { number: " ", subject: { ua: "Обід 5-6 класи", pl: "Obiad dla klas 5-6" }, time: "12:40 - 13:00" },
    { number: 5, subject: { ua: "Англійська мова", pl: "Język angielski" }, time: "13:00 - 13:45" },
  ],
  Thursday: [
    { number: 1, subject: { ua: "Навчання грамоти", pl: "Nauka czytania i pisania" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Навчання грамоти", pl: "Nauka czytania i pisania" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Jezyk Polski", pl: "Język Polski" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad dla klas 1-4" }, time: "11:35 - 11:55" },
    { number: 4, subject: { ua: "Математика", pl: "Matematyka" }, time: "11:55 - 12:40" },
    { number: " ", subject: { ua: "Обід 5-6 класи", pl: "Obiad dla klas 5-6" }, time: "12:40 - 13:00" },
    { number: 5, subject: { ua: "Plastyka", pl: "Plastyka" }, time: "13:00 - 13:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "13:45 - 13:55" },
    { number: 6, subject: { ua: "Англійська мова", pl: "Język angielski" }, time: "13:55 - 14:40" },
  ],
  Friday: [
    { number: 1, subject: { ua: "Я досліджую світ", pl: "Odkrywam świat" }, time: "9:00 - 9:45" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "9:45 - 9:55" },
    { number: 2, subject: { ua: "Jezyk Polski", pl: "Język Polski" }, time: "9:55 - 10:40" },
    { number: " ", subject: { ua: "Перерва", pl: "Przerwa" }, time: "10:40 - 10:50" },
    { number: 3, subject: { ua: "Edukacja wczesnoszkolna", pl: "Edukacja wczesnoszkolna" }, time: "10:50 - 11:35" },
    { number: " ", subject: { ua: "Обід 1-4 класи", pl: "Obiad dla klas 1-4" }, time: "11:35 - 11:55" },
    { number: " ", subject: { ua: "Очікування автобусу", pl: "Oczekiwanie na autobus" }, time: "11:55 - 12:20" },
    { number: " ", subject: { ua: "Шлях зі школи до басейну на автобусі", pl: "Droga ze szkoły do basenu autobusem" }, time: "12:20 - 12:45" },
    { number: 4, subject: { ua: "Wyhowanie фізичне (басейн)", pl: "Wychowanie fizyczne (basen)" }, time: "13:00 - 14:00" },
    { number: " ", subject: { ua: "Шлях з басейну до школи на автобусі", pl: "Droga z basenu do szkoły autobusem" }, time: "14:30 - 14:55" },
  ],
};

// Додаємо schedule та dayNames у глобальний об'єкт window
window.schedule = schedule;
window.dayNames = dayNames;

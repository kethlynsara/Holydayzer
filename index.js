import express from "express";

const app = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" },
  ];

app.get("/holidays", (request, response) => {
  response.send(holidays);
});

app.get("/is-today-holiday", (request, response) => {
    let todayHoliday = null;
    holidays.forEach((holiday) => {
        const hoje = new Date();
        const aux = new Date(holiday.date);
        if (aux.toLocaleDateString() === hoje.toLocaleDateString()) {
             todayHoliday = `Sim, hoje é ${holiday.name}`;
        }
    })
    const vazio = todayHoliday ? todayHoliday : "Não, hoje não é feriado";
    response.send(vazio);
});


app.listen(7000);

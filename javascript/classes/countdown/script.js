import Countdown from './countdown.js';

const diasParaNatal = new Countdown('25 December 2022 00:00:00 GMT-0300');

const resultado = document.querySelector('.resultado');

console.log(diasParaNatal.total);
setInterval(() => {
  resultado.innerText = `Faltam ${diasParaNatal.total.days} dias, ${diasParaNatal.total.hours} horas, ${diasParaNatal.total.minutes} minutos e ${diasParaNatal.total.seconds} segundos para o natal!`;
}, 1000);

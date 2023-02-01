import Partida from "./Partida.js";
import Time from "./Time.js";

const time1 = new Time('Time 1', 'T1', 5, 7, 2, 10, 20);
const time2 = new Time('Time 2', 'T2', 9, 2, 3, 20, 6);
const time3 = new Time('Time 3', 'T3', 3, 5, 6, 15, 23);

const partida1vs2 = new Partida('T2',4,'T1',2);
const partida2vs3 = new Partida('T2',2,'T3',5);
const partida1vs3 = new Partida('T3',6,'T1',2);

time1.exibirSituacao();
console.log('\n\n');
time2.exibirSituacao();
console.log('\n\n');
time3.exibirSituacao();
console.log('\n\n');

console.log(partida1vs2);
time1.computarPartida(partida1vs2);
time2.computarPartida(partida1vs2);
time3.computarPartida(partida1vs2);

time1.exibirSituacao();
console.log('\n\n');
time2.exibirSituacao();
console.log('\n\n');
time3.exibirSituacao();
console.log('\n\n');

console.log(partida2vs3);
time1.computarPartida(partida2vs3);
time2.computarPartida(partida2vs3);
time3.computarPartida(partida2vs3);

time1.exibirSituacao();
console.log('\n\n');
time2.exibirSituacao();
console.log('\n\n');
time3.exibirSituacao();
console.log('\n\n');

console.log(partida1vs3);
time1.computarPartida(partida1vs3);
time2.computarPartida(partida1vs3);
time3.computarPartida(partida1vs3);

time1.exibirSituacao();
console.log('\n\n');
time2.exibirSituacao();
console.log('\n\n');
time3.exibirSituacao();
console.log('\n\n');
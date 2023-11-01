const os = require('os');

const hostname = os.hostname();
console.log(hostname);

const cpus = os.cpus();
console.log(cpus);
console.log('----------');
console.log(cpus[0]);
console.log(cpus[0].model);

for(let i = 0; i < cpus.length; i++) {
    console.log(cpus[i].model);
}
console.log('----------');
for (const cpu of cpus) {
    console.log(cpu.model);
}

console.log('----------');
const totalMemory = os.totalmem();
console.log('전체메모리', totalMemory); // B, KB, GB
console.log('전체메모리', totalMemory / 1024 /1024 /1024, 'GB');

//소수점을 제거해보자..
console.log('전체메모리', Math.floor(totalMemory / 1024 /1024 /1024),'GB');

import fs from 'fs'
import { yarg } from './config/plugins/args.plugin';

let outputMessage = '';
const base = yarg.b;

const headerMessage = `
=========================================
          Tabla del ${base}
=========================================\n
`;

const tableMultiplication = (value: number) => {
  for (let num = 1; num <= yarg.l; num++) {
   outputMessage += `${value} x ${num} = ${value * num}\n`;
  }
}


tableMultiplication(base);


outputMessage = headerMessage + outputMessage

const outputPath = `outputs`


fs.mkdirSync(outputPath, { recursive: true });

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
if (yarg.s) {
  console.log(outputMessage)
}


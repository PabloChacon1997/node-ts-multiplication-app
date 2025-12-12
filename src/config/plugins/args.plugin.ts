import yargs from 'yargs'
import { hideBin} from 'yargs/helpers'


export const yarg = yargs(process.argv)
  .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
  })
  .options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
  })
  .options('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
  })
  .options('n', {
    alias: 'name',
    type: 'string',
    default: 'multipaction-table',
    describe: 'File name'
  })
  .options('d', {
    alias: 'detination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
  })
  .check((argv, options) => {
    if (argv.b < 1) throw 'Error: base must be a number';
    return true;
  })
  .parseSync()


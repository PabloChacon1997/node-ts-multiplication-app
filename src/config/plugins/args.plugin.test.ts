// import { yarg } from './args.plugin';

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import('./args.plugin');
  return yarg
}


describe('Test args.plugin.ts', () => {
  test('should return default values', () => {
    // runCommand(['-b', '5']);
    // console.log(process.argv);
  })
});
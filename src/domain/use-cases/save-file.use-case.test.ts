import { SaveFile } from './save-file.use-case';
import fs from 'fs';


describe('SaveFileUseCase', () => {
  const customOptions = {
    fileContent: 'custom content',
    destination: 'custom-outputs',
    fileName: 'custom-table-name',
  }
  afterAll(() => {
    const outputFolderExists = fs.existsSync('outputs');
    if(outputFolderExists) fs.rmSync('outputs', {recursive: true});
    const cumtomOutputFolderExists = fs.existsSync(`${customOptions.destination}/${customOptions.fileName}.txt`);
    if(cumtomOutputFolderExists) fs.rmSync(`${customOptions.destination}`, {recursive: true});
  });
  test('should save file with default values', () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: 'test conection'
    }

    const result = saveFile.execute(options);
    const checkFile = fs.existsSync('outputs/table.txt');
    const fileContent = fs.readFileSync('outputs/table.txt', { encoding: 'utf-8' });
    
    expect(result).toBe(true);
    expect(checkFile).toBe(true);
    expect(fileContent).toBe(options.fileContent)
  })
  
  test('should save file with custom values', () => {
    const saveFile = new SaveFile();
    const result = saveFile.execute(customOptions);
    const checkFile = fs.existsSync(customOptions.destination);
    const fileContent = fs.readFileSync(`${customOptions.destination}/${customOptions.fileName}.txt`, { encoding: 'utf-8' });
    
    expect(result).toBe(true);
    expect(checkFile).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent)
  })

  test('should return false if directory could not be created', () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs,'mkdirSync').mockImplementation(() => { throw new Error('This is acustom error message') });

    const result = saveFile.execute(customOptions);
    expect(result).toBe(false);
    mkdirSpy.mockRestore()
  });
  test('should return false if file could not be created', () => {
    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs,'writeFileSync').mockImplementation(() => { throw new Error('This is acustom writing message') });

    const result = saveFile.execute({fileContent: 'Hola'});
    expect(result).toBe(false);
    writeFileSpy.mockRestore()
  });
})
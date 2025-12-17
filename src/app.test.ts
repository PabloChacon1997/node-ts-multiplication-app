import { describe, test, expect, jest } from '@jest/globals';
import { ServerApp } from './presentation/server-app';


describe('App', () => {
  test('should call Server.run with values', () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = ['node','app.ts','-b','10','-l','5','-s','-n','test-file','-d','test-destination'];

  })
})
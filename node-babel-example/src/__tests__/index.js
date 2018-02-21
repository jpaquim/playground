import http from 'http';
import server from '..';

describe('Server', () => {
  beforeEach(() => {
    server.listen();
  });
  afterEach(() => {
    server.close();
  });
  it('should return 200', done => {
    http.get('http://localhost:1337', res => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  it('should return 404 in missing route', done => {
    http.get('http://localhost:1337/foo', res => {
      expect(res.statusCode).toBe(404);
      done();
    });
  });
});

import DataSource from '../lib/DataSource.js';
import app from '../app.js';

let server;

describe("Interests API tests", () => {
  beforeAll(async () => {
    // 1. Create a connection with the database and WAIT!
    await DataSource.initialize();

    // 2. Application, start listening for incoming requests (used during test)
    server = app.listen(process.env.PORT, () => {
      console.log(
        `Application is running on http://localhost:${process.env.PORT}/.`
      );
    });
  });

  afterAll(async () => {
    // 1. Close the connection with the database
    await DataSource.destroy();

    // 2. Close the server
    server.close();
  });

  describe("Testing HTTP methods", () => {
    test("GET - /api/interest", () => {
      expect(1).toBe(1);
    })
  })
})
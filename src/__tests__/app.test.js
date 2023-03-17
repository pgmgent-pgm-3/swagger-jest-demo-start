import DataSource from '../lib/DataSource.js';
import app from '../app.js';
import request from "supertest";
import jest from "jest";

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
    test("GET - /api/interests", async () => {
      const response = await request(app).get("/api/interests");
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
    });

    // POST een nieuwe user die voldoet aan:
    /*
      {
        firstname: "Frederick",
        lastname: "Roegiers",
        user_meta: {
          address: "Invalidenstraat 6",
          zipCode: "9041",
          city: "Oostakker",
        },
        role: {
          name: "admin",
        },
      }
    */
    // Controleer of we in de body ook een id hebben gekregen

    // weet je het niet?

    // vraag het aan ChatGPT om een richting te krijgen
    // onderzoek de documentatie van supertest:
    //  - https://www.npmjs.com/package/supertest

    // veel succes!

    test("POST - /api/user", async () => {
      // post request verzenden
      const response = await request(app)
        .post("/api/users")
        .send({
          firstname: "Frederick",
          lastname: "Roegiers",
          user_meta: {
            address: "Invalidenstraat 6",	
            zipCode: "9041",
            city: "Oostakker",
          },
          role: {
            name: "admin",
          },
        });
        // controleren op statuscode
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("id");
      
    });

  })
})


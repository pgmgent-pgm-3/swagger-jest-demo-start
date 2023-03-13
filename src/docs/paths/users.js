export default {
  "/api/users": {
    summary: "CRUD with users",
    description: "Get all users in the database",
    get: {
      tags: ["Users"],
      summary: "Get all users",
    },
    post: {
      tags: ["Users"],
      summary: "Create a new user",
      requestBody: {
        content: {
          required: true,
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
    },
    put: {
      tags: ["Users"],
    },
  },
};

export default {
  User: {
    properties: {
      id: { type: "number" },
      firstname: { type: "string" },
      lastname: { type: "string" },
      user_meta: {
        $ref: "#/components/schemas/UserMeta",
      },
      role: {
        $ref: "#/components/schemas/Role",
      },
      interests: {
        $ref: "#/components/schemas/Interest",
      },
    },
    example: {
      firstname: "John",
      lastname: "Doe",
      user_meta: {
        address: "123 Main St",
        zipCode: "12345",
        city: "New York",
      },
      role: {
        name: "admin",
      },
    },
  },
  UserMeta: {
    properties: {
      id: { type: "number" },
      address: { type: "string" },
      zipCode: { type: "string" },
      city: { type: "string" },
    },
  },
  Interest: {
    properties: {
      id: { type: "number" },
      name: { type: "string" },
    },
  },
  Role: {
    properties: {
      id: { type: "number" },
      name: {
        type: "string",
        enum: ["admin", "editor", "author"],
      },
    },
  },
  "UserInput": {
    properties: {
      firstname: { type: "string" },
      lastname: { type: "string" },
      user_meta: {
        $ref: "#/components/schemas/UserMeta",
      },
      role: {
        $ref: "#/components/schemas/Role",
      },
      interests: {
        $ref: "#/components/schemas/Interest",
      },
    },
    example: {
      firstname: "John",
      lastname: "Doe",
      user_meta: {
        address: "123 Main St",
        zipCode: "12345",
        city: "New York",
      },
      role: {
        name: "admin",
      },
    },
  }
};

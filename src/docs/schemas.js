export default {
  "User": {
    properties: {
      id: { type: "number" },
      firstname: { type: "string" },
      lastname: { type: "string" },
      user_meta: {
        $ref: "#/components/schemas/UserMeta"
      }
    }
  },
  "UserMeta": {
    properties: {
      id: { type: "number" },
      address: { type: "string" },
      zipCode: { type: "string" },
      city: { type: "string" }
    }
  }
}
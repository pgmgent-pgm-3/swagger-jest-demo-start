import typeorm from "typeorm";

const { EntitySchema } = typeorm;

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    firstname: {
      type: "varchar",
    },
    lastname: {
      type: "varchar",
    },
  },
  relations: {
    interests: {
      target: "Interest",
      type: "many-to-many",
      joinTable: {
        name: "users_interests",
      },
      cascade: true,
    },
    user_meta: {
      target: "UserMeta",
      type: "one-to-one",
      cascade: true,
      inverseSide: "user",
    },
    role: {
      target: "Role",
      type: "many-to-one",
      cascade: true,
      inverseSide: "users",
      joinColumn: {
        name: "role_id",
      },
    },
  },
});

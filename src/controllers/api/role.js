/**
 * The API controllers
 */

import DataSource from "../../lib/DataSource.js";

export const getRoles = async (req, res, next) => {
  try {
    // get the repository
    const roleRepository = DataSource.getRepository("Role");

    // get the interests and return them with status code 200
    res.status(200).json(await roleRepository.find({ relations: ["users"] }));
  } catch (e) {
    next(e.message);
  }
};

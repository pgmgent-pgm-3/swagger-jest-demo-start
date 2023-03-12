/**
 * A Home Controller
 */

import DataSource from "../lib/DataSource.js";

export const home = async (req, res) => {
  // get repositories
  const navigationItemRepository = DataSource.getRepository("NavigationItem");
  const userRepository = DataSource.getRepository("User");

  // fetch the menu items
  const menuItems = await navigationItemRepository.find();
  const userData = await userRepository.findOne({
    where: { id: 1 },
    relations: ["interests"],
  });

  res.render("home", {
    menuItems,
    userData,
  });
};

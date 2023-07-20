const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../utils");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);
router.get("/:id", isValidId, ctrl.getContactById);
router.delete("/:id", isValidId, ctrl.removeContact);
router.post("/", validateBody(schemas.addSchema), ctrl.addContact);
router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;

const { body, param, query } = require("express-validator");

module.exports = [
    body("id").optional().isInt().withMessage("child Id should be integer"),
    body("fullName")
        .optional()
        .isAlpha()
        .withMessage("fullName should be string")
        .isLength({ max: 10 })
        .withMessage("child name <10"),
    body("level")
        .optional()
        .isIn(["PREKG", "KG1", "KG2"])
        .withMessage("You should select one of existed levels"),
    body("age")
        .optional()
        .isInt()
        .withMessage("Age should be Number"),
    body("address")
        .optional()
        .isObject()
        .withMessage("Invalid address"),
        body("address.city").optional().isString().withMessage("Invalid city"),
        body("address.street").optional().isString().withMessage("Invalid street"),
        body("address.building").optional().isNumeric().withMessage("Invalid bulding")


];
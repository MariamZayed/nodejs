const { body, param, query } = require("express-validator");


module.exports = [
    body("name")
        .isAlpha()
        .withMessage("name should be string")
        .isLength({ max: 10 })
        .withMessage("name <10"),
    body("supervisor")
        .isNumeric()
        .withMessage("Enter a valid supervisor ref"),
    body("children")
        .isArray()
        .withMessage("Enter an array of children"),
    body("children.*")
        .isInt()
        .withMessage("Item Must Be Integer"),
];

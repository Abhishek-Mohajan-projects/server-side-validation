const { check } = require("express-validator");

exports.userRegistration = [
check("name")
.trim()
.notEmpty()
.withMessage("Name is Missing")
.isLength({min : 5})
.withMessage("Name must have at least 5 characters")
.isLength({max : 30})
.withMessage("Name can have maximum 30 characters"),
check("email")
.trim()
.notEmpty()
.withMessage("Email is Missing")
.isEmail()
.withMessage("Not an Valid Email"),
check("password")
.trim()
.notEmpty()
.withMessage("password is empty")
.isLength({min: 5})
.withMessage("password must have at least 5 characters"),
check("dob")
.trim()
.notEmpty()
.withMessage("Date of Birth is missing")
.isISO8601()
.toDate()
.withMessage("Not a Valid Date")
];

exports.loginUser = [
check("email")
.trim()
.notEmpty()
.withMessage("Email is Missing")
.isEmail()
.withMessage("Not an Valid Email"),
check("password")
.trim()
.notEmpty()
.withMessage("password is empty")
.isLength({min: 5})
.withMessage("password must have at least 5 characters")
];
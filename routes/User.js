const { registerUser } = require("../controllers/userController");
const { runValidation } = require("../validation");
const { userRegistration, loginUser } = require("../validation/auth");

const router = require("express").Router();


router.post("/register",
userRegistration,
runValidation,
registerUser);

router.post("/login", 
loginUser,
runValidation,
loginUser
);

module.exports = router;
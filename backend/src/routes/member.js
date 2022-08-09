const express = require("express");

const MemberController = require("../controllers/member");

const router = express.Router();

router.get("/member", MemberController.getMembers);

module.exports = router;

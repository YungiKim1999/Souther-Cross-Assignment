const memberService = require("../services/member");

/**
 * Extracts the policy number and card number out of the requiest body and utlizes it to search for a member with the same details
 * @param {*} req Request object
 * @param {*} res Response object
 */
async function getMembers(req, res) {
  const { policyNumber, memberCardNumber } = req.query;
  const { status, json } = await memberService.retrieveMembers(
    policyNumber,
    memberCardNumber
  );

  res.status(status).json(json);
}

module.exports = {
  getMembers,
};

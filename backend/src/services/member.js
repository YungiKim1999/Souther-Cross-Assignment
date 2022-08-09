const lowDb = require("../database/lowDb");

/**
 * A sleep function to imitiate delays of a database.
 * Purely utilized to demonstrate the loading screen within the application
 * @param {number} ms Number of milliseconds to delay
 * @returns Promise that is returned after the setTimeout is resolved
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retrieves a member within the MOCK_DATA.json file based on matching policy number and member card number.
 * Note that the sleep function call within this function is purely to demonstrate the loading screen within the front end application
 *
 * @param {String} policyNumber String of numbers representing the policy number of a member
 * @param {String} memberCardNumber String of numbers representing the card number of a member
 * @returns {Object} Object containing the status of the query (200 if successful, 400 if no member was found) and a json of the members found
 */
async function retrieveMembers(policyNumber, memberCardNumber) {
  //await sleep(2000);

  const member = memberCardNumber
    ? lowDb
        .get("members")
        .find({
          policyNumber: policyNumber,
          memberCardNumber: memberCardNumber,
        })
        .value()
    : lowDb.get("members").find({ policyNumber: policyNumber }).value();

  if (member) {
    return {
      status: 200,
      json: { member: [member] },
    };
  }

  return { status: 400, json: { message: "Member does not exist" } };
}

module.exports = {
  retrieveMembers,
};

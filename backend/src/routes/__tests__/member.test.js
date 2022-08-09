import express from "express";
import axios from "axios";
import memberRoutes from "../member";

const CORRECT_POLICY_NUMBER = "8333881661";
const CORRECT_MEMBER_CARD_NUMBER = "0776829629";
const INCORRECT_POLICY_NUMBER = "0";
const INCORRECT_MEMBER_CARD_NUMBER = "0";
const RETURNED_USER = {
  id: 926,
  firstName: "Lance",
  lastName: "Vautin",
  memberCardNumber: "0776829629",
  policyNumber: "8333881661",
  dataOfBirth: "27/11/2003",
};

let server;

/**
 * Before any tests start, start an express server in order to test API endpoints end-to-end
 * End-to-end API testing was considered for multiple reasons including:
 *  - Querying the server when running local has virtually no cost (compared to mongoDB or Firebase, where each query is expensive)
 *  - The response times are fast enough to do end-to-end API testing
 *  - Time limit of assignment (Mocking the database and/or having dependency injection setup for the database instance was a considered options BUT time constraints limited this)
 *  - Overall correctness of endpoint can be tested
 */
beforeAll((done) => {
  const app = express();
  app.use(express.json());
  app.use("/member", memberRoutes);
  server = app.listen(3001, () => {
    done();
  });
});

/**
 * After all tests, stop the express server
 */
afterAll((done) => {
  server.close(() => {
    done();
  });
});

it("Tries to get a member utilizing the correct policy number and correct card number", async () => {
  const params = {};
  params.policyNumber = CORRECT_POLICY_NUMBER;
  params.memberCardNumber = CORRECT_MEMBER_CARD_NUMBER;

  try {
    await axios
      .get(`http://localhost:3001/member/member`, { params })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.data.member[0].id).toBe(RETURNED_USER.id);
        expect(res.data.member[0].firstName).toBe(RETURNED_USER.firstName);
        expect(res.data.member[0].lastName).toBe(RETURNED_USER.lastName);
        expect(res.data.member[0].memberCardNumber).toBe(
          RETURNED_USER.memberCardNumber
        );
        expect(res.data.member[0].policyNumber).toBe(
          RETURNED_USER.policyNumber
        );
        expect(res.data.member[0].dataOfBirth).toBe(RETURNED_USER.dataOfBirth);
      });
  } catch (error) {
    fail("Should not have reached here");
  }
});

it("Tries to get a member utilizing the correct policy number and no card number", async () => {
  const params = {};
  params.policyNumber = CORRECT_POLICY_NUMBER;
  try {
    await axios
      .get(`http://localhost:3001/member/member`, { params })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.data.member[0].id).toBe(RETURNED_USER.id);
        expect(res.data.member[0].firstName).toBe(RETURNED_USER.firstName);
        expect(res.data.member[0].lastName).toBe(RETURNED_USER.lastName);
        expect(res.data.member[0].memberCardNumber).toBe(
          RETURNED_USER.memberCardNumber
        );
        expect(res.data.member[0].policyNumber).toBe(
          RETURNED_USER.policyNumber
        );
        expect(res.data.member[0].dataOfBirth).toBe(RETURNED_USER.dataOfBirth);
      });
  } catch (error) {
    fail("Should not have reached here");
  }
});

it("Tries to get a member utilizing the incorrect policy number and correct card number", async () => {
  const params = {};
  params.policyNumber = INCORRECT_POLICY_NUMBER;
  params.memberCardNumber = CORRECT_MEMBER_CARD_NUMBER;
  try {
    await axios
      .get(`http://localhost:3001/member/member`, { params })
      .then(() => {
        fail("Should not have reached here");
      });
  } catch (error) {
    expect(error.response.status).toBe(400);
    expect(error.response.data.message).toBe("Member does not exist");
  }
});

it("Tries to get a member utilizing the incorrect policy number and incorrect card number", async () => {
  const params = {};
  params.policyNumber = INCORRECT_POLICY_NUMBER;
  params.memberCardNumber = INCORRECT_MEMBER_CARD_NUMBER;
  try {
    await axios
      .get(`http://localhost:3001/member/member`, { params })
      .then((res) => {
        fail("Should not have reached here");
      });
  } catch (error) {
    expect(error.response.status).toBe(400);
    expect(error.response.data.message).toBe("Member does not exist");
  }
});

it("Tries to get a member utilizing no policy number", async () => {
  const params = {};
  params.memberCardNumber = CORRECT_MEMBER_CARD_NUMBER;
  try {
    await axios
      .get(`http://localhost:3001/member/member`, { params })
      .then((res) => {
        fail("Should not have reached here");
      });
  } catch (error) {
    expect(error.response.status).toBe(400);
    expect(error.response.data.message).toBe("Member does not exist");
  }
});

it("Tries to get a member utilizing the incorrect policy number and no card number", async () => {
  const params = {};
  params.policyNumber = INCORRECT_POLICY_NUMBER;
  try {
    await axios
      .get(`http://localhost:3001/member/member`, { params })
      .then((res) => {
        fail("Should not have reached here");
      });
  } catch (error) {
    expect(error.response.status).toBe(400);
    expect(error.response.data.message).toBe("Member does not exist");
  }
});

const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences
const faker = require("faker"); // faker is used for generating random fake data.
const _ = require("lodash"); // lodash is a utility lib for Javascript

const users = generateUsers(10);
let imageUrl = [
  "https://avatars.dicebear.com/v2/avataaars/a52f17df51c50066a16625c73cfca095.svg",
  "https://avatars.dicebear.com/v2/avataaars/7138c752627c76df54b8929828b70928.svg",
  "https://avatars.dicebear.com/v2/avataaars/37306e1f72e1b196be35951ed0b1df31.svg",
  "https://avatars.dicebear.com/v2/avataaars/922f7f757411dc85a3e7dd845ba01553.svg",
  "https://avatars.dicebear.com/v2/avataaars/ff5055aba90c9bc95bcf8f0ce90f3353.svg",
  "https://avatars.dicebear.com/v2/avataaars/94211a011cb070dd157fa225e75994d2.svg",
  "https://avatars.dicebear.com/v2/avataaars/577fb6480ebaadf04b3c073c54cd1e4e.svg",
  "https://avatars.dicebear.com/v2/avataaars/e5118c402f27b623ddb3708bef323d33.svg",
  "https://avatars.dicebear.com/v2/avataaars/2ac986275c605296b3ee064e0041286a.svg",
  "https://avatars.dicebear.com/v2/avataaars/990e69f393078c77c060e0dcca1f8f1c.svg",
  "https://avatars.dicebear.com/v2/avataaars/1564dc89e0a212d577ae65c0f7e20f2f.svg",
  "https://avatars.dicebear.com/v2/avataaars/ddd43287eb57ba0b133bcbfa61db6e97.svg",
  "https://avatars.dicebear.com/v2/avataaars/1827176651240f4d534fa1079bb3a40a.svg",
  "https://avatars.dicebear.com/v2/avataaars/dfcaefb715d69f2063d0e6f6f241246d.svg",
  "https://avatars.dicebear.com/v2/avataaars/43c93f4e570a6d52f9d928a7ac4db69d.svg",
  "https://avatars.dicebear.com/v2/avataaars/d902bdd3ee6fa0f5d5fb47843ab8b986.svg",
  "https://avatars.dicebear.com/v2/avataaars/32332ccbc55d688b1ea815ed1cda6ecb.svg",
];
export const contacts = _.mapKeys(users, "user_id");
export const getMessages = (messagesPerUser) => {
  let messages = {};
  _.forEach(users, (user) => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), "number"),
    };
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: "",
  contacts,
  activeUserId: null,
};

/**
 * @returns {Object} - a new user object
 */

export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: generateImage([
      "https://avatars.dicebear.com/v2/avataaars/a52f17df51c50066a16625c73cfca095.svg",
      "https://avatars.dicebear.com/v2/avataaars/7138c752627c76df54b8929828b70928.svg",
      "https://avatars.dicebear.com/v2/avataaars/37306e1f72e1b196be35951ed0b1df31.svg",
      "https://avatars.dicebear.com/v2/avataaars/922f7f757411dc85a3e7dd845ba01553.svg",
      "https://avatars.dicebear.com/v2/avataaars/ff5055aba90c9bc95bcf8f0ce90f3353.svg",
      "https://avatars.dicebear.com/v2/avataaars/94211a011cb070dd157fa225e75994d2.svg",
      "https://avatars.dicebear.com/v2/avataaars/577fb6480ebaadf04b3c073c54cd1e4e.svg",
      "https://avatars.dicebear.com/v2/avataaars/e5118c402f27b623ddb3708bef323d33.svg",
      "https://avatars.dicebear.com/v2/avataaars/2ac986275c605296b3ee064e0041286a.svg",
      "https://avatars.dicebear.com/v2/avataaars/990e69f393078c77c060e0dcca1f8f1c.svg",
      "https://avatars.dicebear.com/v2/avataaars/1564dc89e0a212d577ae65c0f7e20f2f.svg",
      "https://avatars.dicebear.com/v2/avataaars/ddd43287eb57ba0b133bcbfa61db6e97.svg",
      "https://avatars.dicebear.com/v2/avataaars/1827176651240f4d534fa1079bb3a40a.svg",
      "https://avatars.dicebear.com/v2/avataaars/dfcaefb715d69f2063d0e6f6f241246d.svg",
      "https://avatars.dicebear.com/v2/avataaars/43c93f4e570a6d52f9d928a7ac4db69d.svg",
      "https://avatars.dicebear.com/v2/avataaars/d902bdd3ee6fa0f5d5fb47843ab8b986.svg",
      "https://avatars.dicebear.com/v2/avataaars/32332ccbc55d688b1ea815ed1cda6ecb.svg",
    ]),
    status: txtgen.sentence(),
    user_id: shortid.generate(),
  };
}
/**
 * @returns {Object} - a new message object
 */
function generateImage(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function generateMsg(number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.random.boolean(),
  };
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}

const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

/**
 * __dirname is required as testing directory insantiation is different to file path
 */
const db = lowDb(new FileSync(`${__dirname}/data/MOCK_DATA.json`));

module.exports = db;

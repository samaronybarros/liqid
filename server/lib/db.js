const config = require('../config')
const { MongoClient, ObjectId } = require('mongodb')

module.exports = {
  /** @type {MongoClient} mongodb client instance. */
  client: null,
  /** @type {import('mongodb').Db} - database to store applications metadata */
  masterDb: null,

  async connect() {
    this.client = await MongoClient.connect(
      config.mongoUri,
      { useNewUrlParser: true }
    )

    this.masterDb = this.client.db(config.masterDb)
    console.log('Database connected.')
  },

  get organizations() {
    return this.masterDb.collection('organizations')
  },

  get applications() {
    return this.masterDb.collection('applications')
  },

  get accounts() {
    return this.masterDb.collection('accounts')
  },

  get users() {
    return this.masterDb.collection('users')
  },

  /**
   * returns an adapter for the application specific database, with their collections
   * and behaviours.
   * @param {String} appId - The application id
   */
  getApplicationDb(appId) {
    const appDb = this.client.db(`app_1_${appId}`)

    return {
      getCollection: schemaId => appDb.collection(`C-${schemaId}`)
    }
  },

  objectId(stringValue) {
    return ObjectId(stringValue)
  }
}

module.exports = ({ env }) => ({
  host: env('HOST', '18.233.252.97'),
  port: env.int('PORT', 1337),
  url: env('URL', 'fsstienda.1.us-1.fl0.io'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'www.gallitomotors.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'gallitom_strapiapp'),
      user: env('DATABASE_USERNAME', 'gallitom_strapi_user'),
      password: env('DATABASE_PASSWORD', 'adminStr@pi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

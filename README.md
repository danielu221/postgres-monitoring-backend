# PostrgesMonitoring - Backend
Application allows to monitor PostgreSQL database. Each 10 seconds GET request is being made and data displayed in "Activity" and "Statements" bookmark is being refreshed. Below technologies were used for implementation:
- **Frontend** [Link to repo](https://github.com/danielu221/postgres-monitoring-front):
- Angular 7
- Angular material

- **Backend** [Link to repo](https://github.com/danielu221/postgres-monitoring-backend):
- NodeJS with Express
- PostgreSQL with sample database [schema here](http://www.postgresqltutorial.com/postgresql-sample-database/)

## How to run

1. Restore PostgreSQL db data and run server from backend repo 
2. Edit queries.js with your db credentials:
```
const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_password',
  port: 5432,
})
```
3. Run `npm install` to install dependencies for frontend from frontend repo 
4. Run `npm start` on frontend side for a dev server. 
5. Navigate to `http://localhost:4200/`.

## Authors
- Mateusz Danieluk
- Arkadiusz Gotfryd

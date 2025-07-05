## 🚀 Getting Started

### Setup environment variables

Rename the file `backend/.env-example` to `.env`:

```env
DATABASE_URL="postgres://postgres:postgres@db:5432/octo-login"
SECRET_KEY="dd1e57b1c9089c5cd27da288c35b07841495337fda01e0b888775e7647982611"
```

Make sure to adjust these values if needed.

### Run the application using Docker

```bash
docker-compose up --build
```

This will start the following services:

- 🐘 PostgreSQL (database)
- ⚙️ NestJS (backend)
- 🌐 React (frontend)

### Run Prisma migrations (only once, after first setup)

```bash
docker-compose exec backend npx prisma migrate deploy
```

This will apply existing migrations to the `octo-login` database.

### Access the applications

- **Frontend:** http://localhost:5173
- **Backend (API):** http://localhost:3000

---

## 🗃️ Database Info

- Host: `localhost`
- Port: `5432`
- User: `postgres`
- Password: `postgres`
- Database: `octo-login`

---

## 🛑 Stopping the project

```bash
docker-compose down
```

If you want to remove volumes (clean database), use:

```bash
docker-compose down -v
```

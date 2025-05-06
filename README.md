<img src="client/src/assets/topcar.png" style="
        display: block; 
           margin-left: auto;
           margin-right: auto;
           margin-top: 2vh;
           margin-bottom: 5vh;
           height: 8vh;" />

<h1 style="text-align: center">🚧 Work in progress 🚧</h1>

### Full Stack car rental application with React + MUI frontend, Spring Boot backend and PostgreSQL database.

## Features

- **REST API** - Backend with structured HTTP endpoints and database integration.

- **Modern UI** _(mobile version in development)_ - Clean and responsive layout with MUI components.

- **Car browsing** _(in development)_ - Search cars stored in the database and filter them by brand, price and more.

- **Account system** _(soon)_ - Sign up to manage your rentals.

- **Admin panel** _(soon)_ - To manage cars, users and rentals.

## Sample installation on Windows

### Important: when running backend and frontend from the command line, make sure you are in the right directory. You can use `cd` command to change current directory.

### Requirements

- [Node.js](https://nodejs.org/en/download) 18.18.0. or later

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 21 or later

- [PostgreSQL](https://www.postgresql.org/download/) 13 or later

```bash
node -v
# Check node.js version

java -version
javac -version
# Check Java application launcher and Java compiler version

postgres -V
# Check PostgreSQL version
```

### 1. Database

#### Run PostgreSQL local server:

```bash
pg_ctl start

# If this doesn't work, start PostgreSQL manually (e.g. using pgAdmin or as a system service)
```

#### Create database:

```bash
psql -U postgres -c "CREATE DATABASE top_car;"

# Replace 'postgres' with your PostgreSQL username if it's different.
```

#### Import schema:

```bash
psql -U postgres -d top_car -f schema.sql

# Replace 'postgres' with your PostgreSQL username if it's different.

# Make sure you are in the directory where schema.sql is located, or provide the full path to the file.
```

#### _(Optional)_ Create a user with access to this database:

##### Open a PostgreSQL session:

```bash
psql -U postgres

# Like earlier, adjust to your username
```

##### And then run:

```sql
CREATE USER topcar_user WITH PASSWORD 'securepassword';
GRANT ALL PRIVILEGES ON DATABASE top_car TO topcar_user;
```

### 2. Backend

#### Configure the database connection in `server/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/top_car
spring.datasource.username=your_username
spring.datasource.password=your_password

# Make sure the username and password match the ones set earlier.

# Adjust the port if your PostgreSQL uses a non-default one.
```

#### From the `server` catalog, run:

```bash
mvnw spring-boot:run
```

#### Or open the project in your IDE and run the `TopCarApplication.java` class.

### 3. Frontend

#### From the `client` directory, install dependencies:

```bash
npm install
```

#### And start the development server:

```bash
npm run dev
```

### Now the frontend will be available at http://localhost:5173/.

### It requires the backend to run simultaneously at http://localhost:8080/.

## Credits

### All of the used photos were published on [Unsplash](https://unsplash.com/) by:

- [George Bannister](https://unsplash.com/photos/gray-asphalt-road-near-green-mountains-under-white-clouds-during-daytime-yHv5NFPMH1Q)

- [Ivan Cherepanov](https://unsplash.com/photos/a-view-of-the-dashboard-of-a-car-from-inside-the-vehicle-gSnH7b3PYk8)

- [Josh Berquist](https://unsplash.com/photos/gray-mercedes-benz-coupe-on-black-asphalt-road-during-daytime-_4sWbzH5fp8)

- [Martin Katler](https://unsplash.com/photos/red-ferrari-458-italia-on-road-during-daytime-WTN4tbN_tNQ)

- [Roseanna Smith](https://unsplash.com/photos/brown-and-white-trunk--qzLjuJEmsE)

- [why kei](https://unsplash.com/photos/man-driving-a-car-wearing-wrist-watch-8e2gal_GIE8)

- [Zakaria Zayane](https://unsplash.com/photos/white-land-rover-range-rover-on-brown-field-pb_1XXdKldQ)

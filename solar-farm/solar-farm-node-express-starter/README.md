
# Solar Farm Node/Express API

## Running the Application Locally

### Create a Postgres Container

```
docker run --name postgres -e POSTGRES_USER=solar_farm_app -e POSTGRES_PASSWORD=password -e POSTGRES_DB=solar_farm -p 5432:5432 -d postgres
```

_Information about the Postgres Docker image can be found [here](https://hub.docker.com/_/postgres)_

### Install Dependencies

To install the project's dependencies, run the following command from the root of the project (the folder that contains the `package.json` file):

```
npm install
```

### Seeding the Database

To create the tables in the database and seed them with data, run the following command:

```
npm run db-migrate-seed
```

### Run the Application

Now you're ready to run the application:

```
npm start
```

You'll see the following output after the application has successfully started and tested the connection to the database:

```
Database connection success! Sequelize is ready to use...
Listening on port 8080...
```

### Manually Testing the Application

Using the Visual Studio Code [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension, you can open `http/requests.http` file and send HTTP requests to the application.

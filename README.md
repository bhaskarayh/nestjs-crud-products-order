# Nestjs Products Order

This project is for make a transaction about products order

## Installation

make sure you have nestjs installed on your local machine [nest doc](https://docs.nestjs.com/first-steps) to install nestjs.

```bash
$ npm i -g @nestjs/cli
$ git clone git@github.com:bhaskarayh/nestjs-crud-products-order.git
$ cd nestjs-crud-products-order
$ touch .env
$ pnpm install
```

## Usage

edit `.env` file with following code, this project using `mysql by default` if you want changing database type the configuration in `src/shared/services/database-connection.service.ts`

```python
DATABASE_HOST = "localhost"
DATABASE_PORT = 3306
DATABASE_USER = "root"
DATABASE_PASSWORD = "your_pass"
DATABASE_DB = "your_db"

```

and you are ready to go

```bash

$ pnpm start:dev

```

open `localhost:3000/api/docs`

## Packages

- `nestjsx/crud` [documentation](https://github.com/nestjsx/crud)
- authentication with `passport and jwt strategy` [documentation](https://docs.nestjs.com/techniques/authentication)
- OpenApi `nestjs/swagger`[documentation](https://docs.nestjs.com/recipes/swagger)
- example todo CRUD operation using `nestjsx/crud`
- `TypeOrm` [documentation](https://docs.nestjs.com/recipes/sql-typeorm)

## Run test

```bash
$ pnpm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

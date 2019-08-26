# E-Commerce Documentation

Url : [http://](https://34.67.3.220/)localhost:3000

**Start apps**

    npm install
    npm start

## User REST API

### Register

- Url : /users/signup
- HTTP method : POST
- Request
    - Body :

        username : Budi
        email : budi@mail.com
        password : password

    - Headers : token
- Response

    Success (Code 201)

        {
          "_id": "5d59fc75da05f810a3062c1d",
          "username": "Budi",
          "email": "budi@mail.com",
          "password": "$2a$15$0YRtE6bE/WJ0BiTgtC/Om.60.CsPtmqreuzeFnt/hiMJjT5jQzzKu",
          "role": "user",
        	"__v": 0
        }

    - Error
        - Validation Error (Code 400)

            "User validation failed: username: Please fill a name, email: Please fill a valid email address, password: Please fill a password"

### Login

- Url : /users/signin
- HTTP method : POST
- Request
    - Body :

        email : budi@mail.com
        password : password

    - Headers : token
- Response
    - Success (Code 200)

            {
              "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",
              "role": "user"
            }

    - Error
        - Validation Error (Code 400)

            "Wrong email/password"

## Product REST API

### Create Product

- Url : /products
- HTTP method : POST
- Request
    - Body:

        name: "Gurli"
        price: 49000
        file: gurli.jpg
        stock: 99

    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",
        content-type: "multipart/form-data"

- Response
    - Success (Code 201)

            {
              "_id": "5d60cf376182601df2a26f70",
              "name": "Gurli",
              "price": 49000,
              "stock": 99,
              "image": "https://storage.googleapis.com/portfolio-hacktiv8-e-commerce-assets/1566625589710-gurli-black.jpg",
              "createdAt": "2019-08-24T05:46:31.949Z",
              "updatedAt": "2019-08-24T05:46:31.949Z",
              "__v": 0
            }

    - Error
        - Authorization Error (Code 401)

            "No Token" or "Invalid Token"

        - Validation Error (Code 400)

            "Product validation failed: name: Path `name` is required., price: Path `price` is required., stock: Path `stock` is required."

### Find All Products

- Url : /products
- HTTP method : GET
- Request
    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",
        

- Response
    - Success (Code 200)

            [
              {
                "_id": "5d60c8bc1f4d8f15ff8c54ff",
                "name": "Turill",
                "price": 39000,
                "stock": 99,
                "image": "https://storage.googleapis.com/portfolio-hacktiv8-e-commerce-assets/1566623929252-turill.jpg",
                "createdAt": "2019-08-24T05:18:52.442Z",
                "updatedAt": "2019-08-24T05:18:52.442Z",
                "__v": 0
              },
              {
                "_id": "5d60cf2b6182601df2a26f6f",
                "name": "Gurli",
                "price": 49000,
                "stock": 99,
                "image": "https://storage.googleapis.com/portfolio-hacktiv8-e-commerce-assets/1566625576475-gurli-black.jpg",
                "createdAt": "2019-08-24T05:46:19.230Z",
                "updatedAt": "2019-08-24T05:46:19.230Z",
                "__v": 0
              },
              {
                "_id": "5d60cf376182601df2a26f70",
                "name": "Gurli Black",
                "price": 49000,
                "stock": 99,
                "image": "https://storage.googleapis.com/portfolio-hacktiv8-e-commerce-assets/1566625818664-gurli-black.jpg",
                "createdAt": "2019-08-24T05:46:31.949Z",
                "updatedAt": "2019-08-24T05:50:20.983Z",
                "__v": 0
              },
              {
                "_id": "5d62563746f7ed4125da692f",
                "name": "Fjadrar",
                "price": 80000,
                "stock": 99,
                "image": "https://storage.googleapis.com/portfolio-hacktiv8-e-commerce-assets/1566725684349-fjadrar.jpg",
                "createdAt": "2019-08-25T09:34:47.860Z",
                "updatedAt": "2019-08-25T09:34:47.860Z",
                "__v": 0
              }
            ]

    - Error
        - Server Error (Code 500)

            "Internal Server Error"

### Find One Product

- Url : /products/:productId
- HTTP method : GET
- Request
    - Headers : token
    - Params : 5d60cf376182601df2a26f70
- Response
    - Success (Code 200)

            {
              "_id": "5d60cf376182601df2a26f70",
              "name": "Gurli Black",
              "price": 49000,
              "stock": 99,
              "image": "https://storage.googleapis.com/portfolio-hacktiv8-e-commerce-assets/1566625818664-gurli-black.jpg",
              "createdAt": "2019-08-24T05:46:31.949Z",
              "updatedAt": "2019-08-24T05:50:20.983Z",
              "__v": 0
            }

    - Error
        - Server Error (Code 500)

            "Internal Server Error"

### Delete Product

- Url : /products/:productId
- HTTP method : DELETE
- Request
    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",
        

    - Params : 5d6279e43a6b0e43c57ea447
- Response
    - Success (Code 200)

            {
              "_id": "5d6279e43a6b0e43c57ea447",
              "name": "Gurli",
              "price": 49000,
              "stock": 99,
              "image": "https://storage.googleapis.com/portfolio-hacktiv8-e-commerce-assets/1566734798015-gurli-black.jpg",
              "createdAt": "2019-08-25T12:07:00.550Z",
              "updatedAt": "2019-08-25T12:07:00.550Z",
              "__v": 0
            }

    - Error
        - Authorization Error (Code 401)

            "Not Authorized" or "No Token" or "Invalid Token"

### Update Data Product

- Url : /products/:productId
- HTTP method : PATCH
- Request
    - Body :

        name: "Gurli Black"
        price: 49000
        file: gurli.jpg
        stock: 99

    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",
        "Content-type": "multipart/form-data"

    - Params : 5d60cf376182601df2a26f70
- Response
    - Success (Code 200)

            {
              "_id": "5d60cf376182601df2a26f70",
              "name": "Gurli Black",
              "price": 49000,
              "stock": 99,
              "image": "https://storage.googleapis.com/portfolio-hacktiv8-e-commerce-assets/1566625818664-gurli-black.jpg",
              "createdAt": "2019-08-24T05:46:31.949Z",
              "updatedAt": "2019-08-24T05:50:20.983Z",
              "__v": 0
            }

    - Error
        - Validation Error (Code 400)

            "Cast to number failed for value \"STRING\" at path \"price\""

        - Authorization Error (Code 401)

            "Not Authorized" or "No Token" or "Invalid Token"

## Cart REST API

### Create Cart

- Url : /carts
- HTTP method : POST
- Request
    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",

- Response
    - Success (Code 201)

            {
              "products": [],
              "status": "unpaid",
              "_id": "5d60da3916022c24731f71c1",
              "invoice": "INV1566628409055SS",
              "customer": "5d60c3cccaac6f1287bbdcbb",
              "createdAt": "2019-08-24T06:33:29.099Z",
              "updatedAt": "2019-08-24T06:33:29.099Z",
              "__v": 0
            }

    - Error
        - Server Error (Code 500)

            "Internal Server Error"

### Find All Carts (Only Admin)

- Url : /carts
- HTTP method : GET
- Request
    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",

- Response
    - Success (Code 200)

            [
              {
                "products": [
                  {
                    "_id": "5d60c8bc1f4d8f15ff8c54ff",
                    "name": "Turill",
                    "quantity": "2",
                    "price": "39000"
                  }
                ],
                "status": "paid",
                "_id": "5d60da3916022c24731f71c1",
                "invoice": "INV1566628409055SS",
                "customer": {
                  "role": "user",
                  "_id": "5d60c3cccaac6f1287bbdcbb",
                  "username": "aditya",
                  "email": "aditya@mail.com",
                  "password": "$2a$15$9z3Pd0GOAqfEB9SU8rthnehgE7tKYoCfLrE6Y00aH/la75aJx3uDi",
                  "__v": 0
                },
                "createdAt": "2019-08-24T06:33:29.099Z",
                "updatedAt": "2019-08-25T10:20:26.783Z",
                "__v": 0
              }
            ]

    - Error
        - Authorization Error (Code 401)

            "Not Authorized" or "No Token" or "Invalid Token"

### Find One Cart

- Url : /carts/:cartId
- HTTP method : GET
- Request
    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",

    - Params : 5d60da3916022c24731f71c1
- Response
    - Success (Code 200)

            {
              "products": [],
              "status": "unpaid",
              "_id": "5d60da3916022c24731f71c1",
              "invoice": "INV1566628409055SS",
              "customer": {
                "role": "user",
                "_id": "5d60c3cccaac6f1287bbdcbb",
                "username": "aditya",
                "email": "aditya@mail.com",
                "password": "$2a$15$9z3Pd0GOAqfEB9SU8rthnehgE7tKYoCfLrE6Y00aH/la75aJx3uDi",
                "__v": 0
              },
              "createdAt": "2019-08-24T06:33:29.099Z",
              "updatedAt": "2019-08-24T06:33:29.099Z",
              "__v": 0
            }

    - Error
        - Validation Error (Code 401)

            "Not Authorized" or "No Token" or "Invalid Token"

### Delete Cart

- Url : /carts/:cartId
- HTTP method : DELETE
- Request
    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",

    - Params : 5d60da0731a45821d3535531
- Response
    - Success (Code 200)

            {
              "products": [],
              "status": "unpaid",
              "_id": "5d60da0731a45821d3535531",
              "invoice": "INV1566628359265SS",
              "customer": "5d60c3cccaac6f1287bbdcbb",
              "createdAt": "2019-08-24T06:32:39.298Z",
              "updatedAt": "2019-08-24T06:32:39.298Z",
              "__v": 0
            }

    - Error
        - Validation Error (Code 401)

            "Not Authorized" or "No Token" or "Invalid Token"

### Update Cart Status

- Url : /carts/:cartId
- HTTP method : PATCH
- Request
    - Body :

        status: "paid"

    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",

    - Params : 5d60da3916022c24731f71c1
- Response
    - Success (Code 200)

            {
              "products": [],
              "status": "paid",
              "_id": "5d60da3916022c24731f71c1",
              "invoice": "INV1566628409055SS",
              "customer": "5d60c3cccaac6f1287bbdcbb",
              "createdAt": "2019-08-24T06:33:29.099Z",
              "updatedAt": "2019-08-24T07:35:16.135Z",
              "__v": 0
            }

    - Error

        - Validation Error (Code 401)

            "Not Authorized" or "No Token" or "Invalid Token"

### Add To Cart

- Url : /carts/:cartId/add
- HTTP method : PUT
- Request
    - Body :

        _id: "5d60c8bc1f4d8f15ff8c54ff",
        name: "Turill",
        quantity: 2,
        price: 39000

    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",

    - Params : 5d60da3916022c24731f71c1
- Response
    - Success (Code 200)

            {
              "products": [
                {
                  "_id": "5d60c8bc1f4d8f15ff8c54ff",
                  "name": "Turill",
                  "quantity": "2",
                  "price": "39000"
                }
              ],
              "status": "paid",
              "_id": "5d60da3916022c24731f71c1",
              "invoice": "INV1566628409055SS",
              "customer": "5d60c3cccaac6f1287bbdcbb",
              "createdAt": "2019-08-24T06:33:29.099Z",
              "updatedAt": "2019-08-25T10:20:26.783Z",
              "__v": 0
            }

    - Error

        - Validation Error (Code 401)

            "Not Authorized" or "No Token" or "Invalid Token"

### Update Cart Status

- Url : /carts/:cartId/remove
- HTTP method : PUT
- Request
    - Body :

        _id: "5d60c8bc1f4d8f15ff8c54ff",
        name: "Turill",
        quantity: 2,
        price: 39000

    - Headers :

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU5ZmM3NWRhMDVmODEwYTMwNjJjMWQiLCJlbWFpbCI6ImJ1ZGlAbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJ1ZGkiLCJpYXQiOjE1NjYxNzkwMDB9.uTRoK6qdJs0uARpWxy1mqMG01CCE5ea90jgg4YkWd3k",

    - Params : 5d60da3916022c24731f71c1
- Response
    - Success (Code 200)

            {
              "products": [],
              "status": "paid",
              "_id": "5d60da3916022c24731f71c1",
              "invoice": "INV1566628409055SS",
              "customer": "5d60c3cccaac6f1287bbdcbb",
              "createdAt": "2019-08-24T06:33:29.099Z",
              "updatedAt": "2019-08-24T07:35:16.135Z",
              "__v": 0
            }

    - Error

        - Validation Error (Code 401)

            "Not Authorized" or "No Token" or "Invalid Token"
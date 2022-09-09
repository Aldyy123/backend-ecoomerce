Link deploy heroku
```
https://sunsh-app.web.app/
```


# EndPoint

```
- post /user/register
- post /user/login
- get /product read
- post /product create
- delete /product/:id delete
- get /product/:id readDetail
```
# - Post /user/login
 - Response (201 - Created)
```
{
    "message": "Admin yahwe with email yahwe@mail.com has been created"
}
```
<br>

 # - Post /user/register
 - Response 
 <br>
 
 (201 - Created)

 ```
{
    "access_token": "string"
}
 ```
(400)
```
{
    "message": "password harus diisi, tidak boleh kosong"
}
```
# 1. Get /product
 - Response (200 - OK)
```
[
    {
        "id": 1,
        "name": "DC Shoes Striker",
        "description": "Leather Shoes For Men Featuring Foam Padded Tongue And Collar, A Cupsole Construction.",
        "price": 999000,
        "stock": 100,
        "imgUrl": "https://media.dcshoes.co.id/media/catalog/product/cache/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/a/d/adys100624_dc_mens_striker_shoes_xksr_2_h.jpg",
        "CategoryId": 1,
        "AuthorId": 1,
        "createdAt": "2022-08-22T19:35:54.423Z",
        "updatedAt": "2022-08-22T19:35:54.423Z",
        "Category": {
            "id": 1,
            "name": "Pria",
            "createdAt": "2022-08-22T19:35:54.416Z",
            "updatedAt": "2022-08-22T19:35:54.416Z"
        },
        "User": {
            "id": 1,
            "username": "dono",
            "email": "dono@mail.com",
            "password": "$2a$10$pPGBjrcnAAnelXdA8FpHK.IvfAStbKUL80G4dLMNCDdCkl8GbPU0y",
            "role": "User",
            "phoneNumber": "088111222333",
            "address": "jl. Sesama",
            "createdAt": "2022-08-22T19:35:54.177Z",
            "updatedAt": "2022-08-22T19:35:54.177Z"
        }
    },{...}
]
```

# 2. Post /product
- Response (201 - Created) 
```
{
    "id": 6,
    "name": "Nike",
    "description": "made indo",
    "price": 999000,
    "stock": 20,
    "imgUrl": "striing",
    "CategoryId": 2,
    "AuthorId": 1,
    "updatedAt": "2022-08-23T08:20:08.650Z",
    "createdAt": "2022-08-23T08:20:08.650Z"
}

```

- Response 400(oke)

```
{
    "messagae": "Minimum price 50000"
}
```

- Response 500(oke)

```
{
    "message": "internal server error dari json"
}
```

# 3. delete /product/:id delete

- Response (200)

```
{
    "message": "id 7 success to delete"
}

```

- Response (400)

```
{
    "message": "id not found"
}
```

- Response (500)
  
```
{
    "message": "internal server error dari json"
}
```
# 4. Get /product/:id

description : adding data to transportation

- Response (200 - OK)

```
{
    "id": 1,
    "name": "DC Shoes Striker",
    "description": "Leather Shoes For Men Featuring Foam Padded Tongue And Collar, A Cupsole Construction.",
    "price": 999000,
    "stock": 100,
    "imgUrl": "https://media.dcshoes.co.id/media/catalog/product/cache/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/a/d/adys100624_dc_mens_striker_shoes_xksr_2_h.jpg",
    "CategoryId": 1,
    "AuthorId": 1,
    "createdAt": "2022-08-22T19:35:54.423Z",
    "updatedAt": "2022-08-22T19:35:54.423Z",
    "Category": {
        "id": 1,
        "name": "Pria",
        "createdAt": "2022-08-22T19:35:54.416Z",
        "updatedAt": "2022-08-22T19:35:54.416Z"
    },
    "User": {
        "id": 1,
        "username": "dono",
        "email": "dono@mail.com",
        "password": "$2a$10$pPGBjrcnAAnelXdA8FpHK.IvfAStbKUL80G4dLMNCDdCkl8GbPU0y",
        "role": "User",
        "phoneNumber": "088111222333",
        "address": "jl. Sesama",
        "createdAt": "2022-08-22T19:35:54.177Z",
        "updatedAt": "2022-08-22T19:35:54.177Z"
    }
}
```

- Response (404 - data not found)

```
{
    "message": "data not found"
}
```

- Response (500)

```
{
    "message": "internal server error dari json"
}
```
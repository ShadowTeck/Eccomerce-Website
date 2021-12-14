# CAPSTONE
 
## Models

### Products
 - image
 - name
 - price

### Cart
 - [ ]
    - product
    - quantity

## Routes
- /cart/:id
    - PUT (Updates Quantity)
    - GET (Single Item)
- /cart
    - GET (All Items)
    - DEL (Delete all items)
- /products
    - GET (All Products)
- /email
    - POST (Gets total and emails)



## Controllers

### cartController
- updateQuantity()
- getItem()
- getAllItems()
- deleteItems()

### productsController
- getAllProducts()
- emailRecipt()
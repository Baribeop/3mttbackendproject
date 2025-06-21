Setup Instruction - Creating and running the server

1. Install node and verify if installed by checking the verison using node -v.

2. Install npm using npm init --y to give use default name as the project name or npm init and follow prompt to provide other detils and assign project name. This automatically create package.json file which contains all project dependencies.

3. Install express using npm i express or npm install express, this creates the node_modules and package-lock.json.

4. Install nodemon using npm i nodemon or npm install nodemon, this allows auto restart of server after each udpate of code.


5. Edit the package.json file  to include "start": "node index.js", "dev" : "nodemon index.js" within the scripts as shown below. This offers the options to run the app using either:  npm run dev for nodemon or npm run start. Ensure file name containing server is the same as that used in the scripts otherwise app won't run.

```json 

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev" : "nodemon index.js"
  },




6. Run the server using npm run dev or npm run start


API Ducumentation - Endpoints and how to use the APIs

1. Get welcome message : http://localhost:8000/home
This is a testing endpoint used for testing the app and uses get request to get the message 'Hello World'

2. Get all items:   http://localhost:8000/all-items

This  uses get request and displays list all items in the datastore with success message and code (200) and corresponding , example of response

```json 
{
    "message": "succss",
    "dataStore": [
        {
            "id": "2",
            "name": "short",
            "discription": "yellow"
        },
        {
            "id": 3,
            "name": "tablet",
            "discription": "black colour "
        }
    ]
}

3. Add item:  http://localhost:8000/add-item
This endpoin uses post request and allows addition of an item to the datastore, the name and discription of the item must be provided while the item id is automatically assiigned upon submission of the request. Success message is received as well as the item added. If any required data is not provided , it raises error and displays the code 400 with error message.
example of request and response 

```json

Request : {
    
    "name": "tablet",
    "discription": "black colour "
}


Response: {
    "mesaage": "Succesfully added item",
    "newItem": {
        "id": 3,
        "name": "tablet",
        "discription": "black colour "
    }
}




4. Get an item using its id 
This uses get to send request to http://localhost:8000/item/1 , the id of the item is passed as param to the endpoint. It returns success message and code with the item with the given id but If an item id is not provided or item not in datastore, error message and code 400 is diaplayed. example of request and response is shown below;

Request 

http://localhost:8000/item/2 

```json 
Response
{
    "message": "success",
    "item": [
        {
            "id": "2",
            "name": "short",
            "discription": "yellow"
        }
    ]
}


5. Delete an item using its id 

This uses the request method delete to send request to http://localhost:8000/delete-item/1 with the id of the item which returns the item deleted and sucess message and code (200) if successful. If item is not found, an erron message and code is disaplayed. example 

Request

http://localhost:8000/delete-item/1


Response

{
    "message": "successfully deleted item",
    "deleteItem": {
        "id": 1,
        "name": "phone",
        "discription": "silver colour "
    }
}


6. Update an item

The method put is used to send request to http://localhost:8000/update-item/2, with the id of the item to be updated. This updates the item in the datastore with the provided value(s) and display success message with code 200  and returns the item updated if successfull. Otherwise, sends error message and the code 400. 



item in datastore before update

```json 

{
        "id": "2",
        "name": "book",
        "discription": "blue"
}


Request 

{

"name": "short",
"discription": "yellow"

}


Response

{
    "message": "Successfully updated an item",
    "updatedItem": {
        "id": "2",
        "name": "short",
        "discription": "yellow"
    }
}


![delete item ](https://github.com/Baribeop/3mttbackendproject/tree/main/images/delete_item.png)


![add item](https://github.com/Baribeop/3mttbackendproject/tree/main/images/add_item.png)


![all item](https://github.com/Baribeop/3mttbackendproject/tree/main/images/all_item.png)

![each item](https://github.com/Baribeop/3mttbackendproject/tree/main/images/each_item.png)

![update item](https://github.com/Baribeop/3mttbackendproject/tree/main/images/update_item.png)

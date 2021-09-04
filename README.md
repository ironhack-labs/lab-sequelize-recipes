![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Sequelize Recipes

## Introduction

We've learned how to use Sequelize to create Models and define the structure creating a Schema with data types. We then then used the Model to interact with our SQL database. In the following exercise, we will practice how to do this by creating awesome recipes.



![thai_style_chicken_noodle_soup_pieces_recipe_web](https://user-images.githubusercontent.com/23629340/38369283-ac1bda62-38e7-11e8-9c9b-d9df623f1bc3.jpg)



## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can check your work.

## Instructions

### Iteration 1 - Database Setup

Before we create the model and the schema that will connect to an database, we have to create the database. Using `psql` open the PostgreSQL interactive terminal:

```bash
$ psql postgres
```

If you haven't done so previously, first create a new `admin` user by running the following statement:

```sql
CREATE USER admin SUPERUSER PASSWORD 'admin';
```

Then create a new database called `sequelize_recipes`:

```sql
CREATE DATABASE sequelize_recipes OWNER admin;
```



### Iteration 2 - Recipe Model

Create a `Recipe` model inside of the file `/models/recipe.model.js`. The schema should have the following fields:

- **title** - Type `STRING`. It should be required and unique.
- **level** - Type `ENUM`. Can be one of the following values: `"Easy Peasy"`,  `"Amateur Chef"`,  `"UltraPro Chef"`.
- **ingredients** - Type `ARRAY` of `STRING`s .
- **cuisine** - Type `STRING`. Should be required.
- **dishType** - Type `ENUM`. Possible values: `"breakfast"`,  `"main_course"`, `"soup"`, `"snack"`, `"drink"`, `"dessert"` or `"other"`.
- **image** - Type `STRING`. Default value: *"https://images.media-allrecipes.com/images/75131.jpg"*.
- **duration** - Type `INTEGER`. The minimum value should be `0`.
- **creator** - Type `INTEGER`.
- **created** - Type `DATE`. By default, today (option `defaultValue`).



### Iteration 3 - Create a Recipe

In `index.js`, after the connection to the database has been established, you should add a new recipe document to the database by calling the [`Model.create()`](https://sequelize.org/master/manual/model-querying-basics.html#simple-insert-queries) method, passing it the recipe details as an object. After inserting the recipe, you should `console.log` the `title` of the recipe.

You can use `psql` (PostgreSQL interactive terminal) to double check that everything is working as intended.



### Iteration 4 - Create multiple recipes

We are importing an array of recipes from the `data.json` file. Using the [`Model.bulkCreate()`](https://sequelize.org/master/manual/model-querying-basics.html#creating-in-bulk) method, you should add the entire array to the database. After inserting the documents, print the title of each recipe to the console.



### Iteration 5 - Select and retrieve all recipes

To make a summary of the previous operations, retrieve all of the recipes from the table using the method [`Model.findAll()`](). After retrieving all the recipes, sum the `duration` of all recipes and `console.log` print the total duration time.



### Iteration 6 - Update a recipe

Now you should have six different recipes in the database, but there was a mistake in one of them. The **`Rigatoni alla Genovese`** does not take that long. You should update the `duration` column and set it to **`100`**. You might want to use the [`Model.update()`](https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries) method. After updating it, `console.log` the updated row.



### Iteration 7 - Remove a recipe

Oh oh! The **`Carrot Cake`** is no longer available, so we need to remove it from the database. Using the [`Model.destroy()`](https://sequelize.org/master/manual/model-querying-basics.html#simple-delete-queries) method, remove that recipe from the database and display a success message after doing it!



### Iteration 8 - Close the Database Connection

After completing every task, you need to close the database. Otherwise, the connection will stay open until the node.js process is terminated. Pay attention to the asynchronicity of the operations. You should only close the connection after everything is done! 😉



Happy coding! 💙

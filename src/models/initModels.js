const Address = require("./addresses.models");
const Users = require("./users.models");
const Tasks = require("./ tasks.models");
const Categories = require("./categories.models");
const TaskCategories = require("./taskcategories.models");

const initModels = () => {
  TaskCategories;
  // 1 - 1 uno a uno one to one
  // una dirección pertenece a un usuario
  Address.belongsTo(Users, { as: "resident", foreignKey: "user_id" });
  // users tiene una dirección
  Users.hasOne(Address, { as: "home", foreignKey: "user_id" });

  // 1 - n one to many uno a muchos
  // un usuario tiene muchas tareas
  Users.hasMany(Tasks, { as: "todo", foreignKey: "user_id" });
  // una tarea pertenece a un usuario
  Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" });

  // n - n muchos a muchos many to many
  // si no existe la tabla, pues crea una nueva tabla llamada task_categories
  // Tasks.belongsToMany(Categories, {
  //   through: "task_categories",
  //   foreignKey: "category_id",
  // });

  // Categories.belongsToMany(Tasks, {
  //   through: "task_categories",
  //   foreignKey: "task_id",
  // });
    // 1 - n de tasks a task_categories

  Tasks.hasMany(TaskCategories, {as: "categories", foreignKey: "task_id"});
  TaskCategories.belongsTo(Tasks, {as: "todo", foreignKey: "task_id"});
  // 1 - n de tasks a task_categories

  Categories.hasMany(TaskCategories, {as: 'todo', foreignKey: 'category_id'});
  TaskCategories. belongsTo(Categories, {as: 'categories', foreignKey: 'category_id'});
};

module.exports = initModels;

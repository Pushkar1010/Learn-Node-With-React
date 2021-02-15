module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("node_crud_test2", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };
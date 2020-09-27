const Colleges = (connection, Sequelize) => {
  return connection.define('collegedata', {
    ID: { type: Sequelize.INTEGER, primaryKey: true },
    zip: { type: Sequelize.STRING },
    school_url: { type: Sequelize.STRING },
    price_calculator_url: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    size: { type: Sequelize.INTEGER },
    city: { type: Sequelize.STRING }
  }, { paranoid: true })
}

module.exports = Colleges

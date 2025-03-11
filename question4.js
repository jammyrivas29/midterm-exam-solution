const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Database connection
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    status: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

const app = express();

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.listen(3000, async () => {
    await sequelize.sync();
    console.log('Server running on port 3000');
});
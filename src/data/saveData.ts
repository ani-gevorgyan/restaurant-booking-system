import { createConnection } from 'typeorm';
import fs from 'fs';
import Table from '../entities/Table';
import Meal from '../entities/Meal';

const dataForTables = fs.readFileSync(__dirname + '/tables.json').toString();
const dataForMeals = fs.readFileSync(__dirname + '/meals.json').toString();
const tablesData = JSON.parse(dataForTables).tables;
const mealsData = JSON.parse(dataForMeals).meals;

const saveData = async () => {
    await createConnection();
    const tables = generateTables(tablesData);
    const meals = generateMeals(mealsData);
    await Promise.all(tables.map(async (table: Table) => table.save()));
    await Promise.all(meals.map(async (meal: Meal) => meal.save()));
}

function generateTables(tablesData: any) {
    return tablesData.map((tableData: any) => generateTable(tableData));
}

function generateTable(tableData: any) {
    const table = new Table();
    table.capacity = tableData.capacity;
    table.isAvailable = tableData.isAvailable;
    table.name = tableData.name;
    return table;
}

function generateMeals(mealsData: any) {
    return mealsData.map((mealData: any) => generateMeal(mealData));
}

function generateMeal(mealData: any) {
    const meal = new Meal();
    meal.title = mealData.title;
    meal.category = mealData.category;
    meal.description = mealData.category;
    meal.price = mealData.price;
    return meal;
}

saveData();



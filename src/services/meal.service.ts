import { PreorderData, UpdatePreorderData } from './../interfaces/meal';
import tableService from './table.service';
import bookingService from './booking.service';
import TableMealRef from '../entities/TableMealRef';
import Table from '../entities/Table';

class MealService {

    async preorderMeals(preorderData: PreorderData): Promise<any> {
        const booking = await bookingService.getBookingById(preorderData.bookingId);
        return tableService.addTablePreorderMeal(booking.table, preorderData.meals);
    }

    async deleteTableMeals(tableId: number): Promise<void> {
        await TableMealRef.delete({ tableId });
    }

    async updateTableIdForMeals(tableId: number, tableUpdateData: Table): Promise<void> {
        const tableMealsRef = await this.getTableMealsRefByTableId(tableId);
        const mealIds = tableMealsRef.map((tableMealRed: TableMealRef) => tableMealRed.mealId);
        await this.deleteTableMeals(tableId);
        await tableService.addTablePreorderMeal(tableUpdateData, mealIds);
    }

    async getTableMealsRefByTableId(tableId: number): Promise<TableMealRef[]> {
        return TableMealRef.find({ tableId });
    }
}

const mealService = new MealService();
export default mealService;

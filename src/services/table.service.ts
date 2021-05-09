import Table from '../entities/Table';
import NotFoundError from '../errors/NotFoundError';
import { MAX_CAPACITY } from '../constants';

class TableService {

    async getAvailableTableByCapacity(capacity: number): Promise<Table> {
        const tablesAndCount = await Table.findAndCount({ isAvailable: true });
        const tablesCount = tablesAndCount[1];
        const availableTables = tablesAndCount[0];

        let table = await Table.findOne({ capacity, isAvailable: true });
        if (capacity > MAX_CAPACITY) {
            throw new NotFoundError('No tables with this quantity are available!');
        }

        if (!tablesCount) {
            throw new NotFoundError('No available table is found!');
        }

        if (!table) {
            capacity += 1;
            table = await this.getAvailableTableByCapacity(capacity);
            if (availableTables && capacity > table.capacity) {
                throw new NotFoundError('No tables with the given quantity are available!')
            }
        }

        return table;
    }

    async updateTableAvailability(tableData: Table): Promise<Table> {
        return Table.merge(tableData, { isAvailable: !tableData.isAvailable }).save();
    }

    async getTableById(id: number): Promise<Table> {
        const table = await Table.findOne({ id });
        if (!table) {
            throw new NotFoundError();
        }
        return table;
    }
}

const tableService = new TableService();
export default tableService;
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Place } from '../../Classes/Place';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Place[] = [
    { id: 1, building: 'Edificio 1', zone: 'A', floor: 1, school: 1 },
    { id: 2, building: 'Edificio 2', zone: 'B', floor: 2, school: 2 },
];

/**
 * Data source for the PlacesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PlacesTableDataSource extends DataSource<Place> {
    data: Place[] = EXAMPLE_DATA;

    constructor(private paginator: MatPaginator, private sort: MatSort) {
        super();
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<Place[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];

        // Set the paginators length
        this.paginator.length = this.data.length;

        return merge(...dataMutations).pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }

    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getPagedData(data: Place[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: Place[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'school': return compare(+a.school, +b.school, isAsc);
                case 'building': return compare(a.building, b.building, isAsc);
                case 'floor': return compare(+a.floor, +b.floor, isAsc);
                case 'zone': return compare(a.zone, b.zone, isAsc);
                default: return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TypesTableDataSource } from './types-table-datasource';

@Component({
  selector: 'types-table',
  templateUrl: './types-table.component.html',
  styleUrls: ['./types-table.component.css']
})

export class TypesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TypesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  constructor() {

  }

  ngOnInit() {
    this.dataSource = new TypesTableDataSource(this.paginator, this.sort);
  }

}

import { Component, OnInit } from '@angular/core';
import { dataservice } from '../../../../shared/services/dataservice';
import { user } from '../../../../shared/models/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-parent-all',
  templateUrl: './parent-all.component.html',
  styleUrl: './parent-all.component.css'
})
export class ParentAllComponent implements OnInit {
  dataSource: user[] = [];

  displayedColumns: string[] = ['name', 'phoneNumber', 'dateOfEntry', 'moreDetails'];

  constructor(private userService: dataservice) {}

  ngOnInit(): void {
    this.userService.getallparents().subscribe((users:user) => {
      this.dataSource.push(users);
    });
  }

  showDetails(user: any): void {
    // Implement your logic to show more details
    console.log('Show more details for:', user);
  }
}


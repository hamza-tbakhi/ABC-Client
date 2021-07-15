import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComplaintStatusesList } from 'src/app/shared/enums/enums';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BaseService } from 'src/app/shared/services/base.service';

@Component({
  selector: 'app-complains-list',
  templateUrl: './complains-list.component.html',
  styleUrls: ['./complains-list.component.scss']
})
export class ComplainsListComponent implements OnInit {

  displayedColumns: string[] = ['ComplainerName', 'ComplaintDate', 'ComplainerEmail', 'Status', 'Actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dataSource: MatTableDataSource<any>
  complaintList = []

  showAdd = false;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private baseService: BaseService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.fillComplaintList()
    this.showAdd = !this.authService.isAdmin
  }

  fillComplaintList() {
    this.spinner.show();
    this.baseService.getList('Complaint/').subscribe(response => {
      this.spinner.hide();
      this.complaintList = response
      this.dataSource = new MatTableDataSource(this.complaintList)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (item, property) => {

        switch (property) {
          case 'ComplainerName': {
            return item.complainerName
          }
          case 'ComplaintDate': {
            return item.complaintDate

          }
          case 'ComplainerEmail': {
            return item.complainerEmail

          }
          case 'status': {
            return this.getStatusName(item.status)

          }
        }
      }
    }, error => {
      this.spinner.hide();
    })

  }

  getStatusName(status) {
    return ComplaintStatusesList.find(x => x.id == status).name
  }

  onRoutingForDetails(complain){
    console.log(complain);
  }

  OnlogOut(){
    this.authService.logout();
  }

}

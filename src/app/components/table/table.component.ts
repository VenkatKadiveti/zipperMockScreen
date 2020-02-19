import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public data: any = [];
  public message = {
    emptyMessage: `<b>Still Loading...!</b> `
  }
  public ngModelNames = {
    userId: null,
    id: null,
    title: null,
    completed: null
  }
  order = true;
  key = '';
  tempRows: any = [];
  tempRows1: any = [];
  public columns: Array<any> = [
    { name: 'userid', prop: 'userId', displayName: 'User ID', placeholder: 'Filter UserID', ngModelName: 'userId' },
    { name: 'id', prop: 'id', displayName: 'ID', placeholder: 'Filter ID', ngModelName: 'id' },
    { name: 'title', prop: 'title', displayName: 'Title', placeholder: 'Filter Title', ngModelName: 'title' },
    { name: 'completed', prop: 'completed', displayName: 'Completed', placeholder: 'Filter Completed', ngModelName: 'completed' }
  ]
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().then(res => {
      if (res) {
        this.data = res
        this.tempRows = res
        this.tempRows1 = res
      }
    }).catch(err => {
      this.message = {
        emptyMessage: `<b>Something went wrong. Please Reload the page.</b>`
      }
    })
  }
  filterCall() {
    this.tempRows = this.tempRows1;
    Object.keys(this.ngModelNames).forEach(key => {
      if (this.ngModelNames[key]) {
        this.tempRows = this.tempRows.filter(x => {
          if (x[key]) {
            return x[key].toString().toLowerCase().match(this.ngModelNames[key].toString().toLowerCase())
          }
        })
      }
    })
    this.data = this.tempRows
    if (this.data.length === 0) {
      this.message = {
        emptyMessage: `<b>No Records Found.</b>`
      }
    }
  }

  sort(key) {
    this.order = !this.order;
    const sortdata = this.data.sort((a, b) => {
      if (key !== 'title') {
        if (this.order) {
          return a[key] - b[key]
        } else {
          return b[key] - a[key]
        }
      } else {
        let str_1 = a[key].toLowerCase();
        let srt_2 = b[key].toLowerCase()
        if (this.order) {
          if (str_1 < srt_2)
            return -1
          if (str_1 > srt_2)
            return 1
          return 0
        } else {
          if (str_1 < srt_2)
            return 1
          if (str_1 > srt_2)
            return -1
          return 0
        }

      }

    })
    this.data = [...sortdata]
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TestwhetherService } from 'src/app/shared/services/testwhether.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
rowData: any;
  constructor(private dialogRef: MatDialogRef<FirstComponent>,
              private dataService: TestwhetherService) { }

  ngOnInit() {
  this.getPogoda();
  }

close () {
  this.dialogRef.close();
}


getPogoda(): void {


this.dataService.getTestwhether().subscribe( res => {
  this.rowData = res;
  console.log(res);
});



  }

}



import { Component, OnInit } from '@angular/core';
import { MarklistService } from '../marklist.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})

export class Table1Component implements OnInit {

 public marks1;
 
 constructor(private _markslist: MarklistService){ }

  ngOnInit() {

	
		this._markslist.getMarks()
		.subscribe(data => this.marks1 = data);
		
		// getColor(m){
		// 	if (m<=40){
		// 	return "red";
		// 	}
		// }

	
}


public  headElements = ['Id', 'Name', 'Marks'];

}

export class Appcomponent {
	displayedColumns: string[] = ["Id", "Name", "Marks"];
	
}










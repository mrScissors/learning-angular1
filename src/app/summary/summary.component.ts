import { Component, OnInit } from '@angular/core';
import { MarklistService } from '../marklist.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
	public marks1=[];
	 public lessmarks=[];
	 public numberless;
	 public avgmarks=[];
	 public numberavg;
	 public goodmarks=[];
	 public numbergood;
	constructor(private _markslist: MarklistService){ }
  ngOnInit() {

		this._markslist.getMarks()
		.subscribe(data => {this.marks1 = data;for (var i in this.marks1){
			if (this.marks1[i].Marks <= 40){
				this.lessmarks.push(this.marks1[i].Name);
			}
			if (this.marks1[i].Marks <= 70 && this.marks1[i].Marks > 40){
				this.avgmarks.push(this.marks1[i].Name);
			}
			if (this.marks1[i].Marks > 70){
				this.goodmarks.push(this.marks1[i].Name);
			}

		}
		this.numberless = this.lessmarks.length;
		this.numberavg = this.avgmarks.length;
		this.numbergood = this.goodmarks.length;});
		
	
  }

}

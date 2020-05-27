import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment } from '../assessment';
import { MediumformService } from '../mediumform.service';

@Component({
  selector: 'app-mediumform',
  templateUrl: './mediumform.component.html',
  styleUrls: ['./mediumform.component.css']
})
export class MediumformComponent implements OnInit {

  isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number;
  questionObj = new Assessment();
 
  testMap: Map<string, string> = new Map<string, string>();

	
	selectedEntry:any[]=[];
    onSelectionChange(qid,opt) {
	//	this.selectedEntry.push(qid);
    //   this.selectedEntry.push (opt);
    this.testMap.set(qid,opt);
    
    }
  
	constructor( private mediumformservice: MediumformService) { 
    
  }

  allQuestions : Observable<any[]>;  
  ngOnInit() {
   // var obj = this.selectedEntry.reduce( (acc,i) => {
     // acc[i.qid]=i.opt;
    //  return acc;
      
//  }, {} );
 // console.log(JSON.stringify(obj));
 var result = this.selectedEntry.reduce(function(map, obj) {
  map[obj.qid] = obj.opt;
  return map;
}, {});

 console.log(result);
 
    this.mediumformservice.medium().subscribe(data => {

      this.allQuestions = data;

    })
  }
  onSubmit() {
    console.log(this.testMap);
    this.mediumformservice.saveAnswers(this.testMap).subscribe(
      value => {
        console.log('[POST] save Answers successfully', value);
      }, error => {
        console.log('FAIL to save Answers!');
      },
      () => {
        console.log('POST Answers - now completed.');
      });
  }
 
}

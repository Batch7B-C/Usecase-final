import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizformService } from '../quizform.service';
import { Assessment } from '../assessment';



@Component({
  selector: 'app-quizform',
  templateUrl: './quizform.component.html',
  styleUrls: ['./quizform.component.css']
})
export class QuizformComponent implements OnInit {

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
  
	constructor( private quizformservice: QuizformService) { 
    
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
 
    this.quizformservice.expert().subscribe(data => {

      this.allQuestions = data;

    })
  }
  onSubmit() {
    console.log(this.testMap);
    this.quizformservice.saveAnswers(this.testMap).subscribe(
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
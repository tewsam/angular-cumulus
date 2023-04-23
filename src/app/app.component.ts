import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tewstart';
  firstName="tewele"
  imgpath="assets/chiru.jpeg"
  defaultTew="adey-sami"
  passValToComp(e){
    console.log(e.target.value)
  }

  isApproved=true;
  approve(status){
    this.isApproved=status;
  }
  numbers=[
    "one",
    "two",
    "three",
    "four"
  ];
  luckyNum=0;

  highlightColor='white';
  highlight(color: string){
    this.highlightColor=color;

  }
tewStyleApplied=false;
toggleMe(){
  this.tewStyleApplied=!this.tewStyleApplied;
}

}

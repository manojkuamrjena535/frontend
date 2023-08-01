import { Component, OnInit } from '@angular/core';
// import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css']
})
export class StudentCrudComponent {
  // DataService: any;
  // constructor(private dataService:DataService, private http:HttpClient){}

  // ngOnInit(): void {
  //   this.getStdData();
  //   throw new Error('Method not implemented.');
  // }
 
  // std:any;
  
  // getStdData(){
  //   this.dataService.getData().subscribe((res: any)=>{
  //     this.std = res;
  //     console.log(this.std);
  //   });
  // }
  
stdArray: any[]=[];
isResult = false;
isupdateformactive=false;

stdName:string="";
course:string="";
fee:string="";
stdId = "";

constructor(private http:HttpClient){
  this.getAllStd();
}
getAllStd(){
  this.http.get("http://127.0.0.1:8000/api/student/get").subscribe((res:any)=>{
    this.isResult=true;
    console.log(res.data);
    this.stdArray=res.data;
  })
}


// single functiion for update and insert 
// if request comes with id then it will call update method otherwise insert the new data

save(){
  if(this.stdId ==""){
    this.register();
  }else{
    this.update();
  }
};


register(){
    let bodyData={
      "stdName":this.stdName,
      "course":this.course,
      "fee":this.fee
    };
    this.http.post("http://127.0.0.1:8000/api/student/add",bodyData).subscribe((res:any)=>{
    console.log('data added');
    this.getAllStd();
    });
}

// this is for show the data for update in the form 
editDisplay(arr:any){
  // console.log(arr);
  this.stdId = arr.id;
  this.stdName =arr.stdName;
  this.course = arr.course;
  this.fee = arr.fee;
}

update(){
  let updateData={
    "stdName":this.stdName,
    "course":this.course,
    "fee":this.fee
  };
  this.http.put("http://127.0.0.1:8000/api/student/update/"+this.stdId,updateData).subscribe((res:any)=>{
      alert('student update....');
      this.stdId ="";
      this.stdName ="";
      this.course = "";
      this.fee = "";
  });
 
  this.getAllStd();
}


delete(arr:any){
  this.http.delete("http://127.0.0.1:8000/api/student/delete/"+arr).subscribe((res)=>{
    alert('student deleted...');
  });
  this.getAllStd();

}

}
 
students=[]

function Student(name,age,marks){
  this.name=name;
  this.age=age;
  this.marks=marks;
}
Student.prototype.add_details=function(){
  students.push({ stud_name: this.name, stud_age: this.age, stud_marks:this.marks })
}
Student.prototype.search_age=function(name) {
  for (var i=0; i < students.length; i++){
    if (students[i].stud_name == name) {
      console.log("Age"+students[i].stud_age);
    }
  }
}

Student.prototype.percentage=function() {
   for(var i=0;i<students.length;i++)
  {
    var sum = 0;
    for (var j = 0; j < students[i].stud_marks.length; j++)
    {
      sum += parseInt(students[i].stud_marks[j]);
    }
       avg=sum/3;
     console.log(students[i].stud_name,avg);
  }
}
var student1=new Student('sagar',25,[52,95,85])
student1.add_details()
student1.search_age('sagar')
student1.percentage();

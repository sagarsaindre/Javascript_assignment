students = [
    {
      name: 'Anubhav',
      age: 22,
      marks: [80, 73, 60]
    },
    {
      name: 'Rohit',
      age: 18,
      marks: [78, 71, 69]
    },
    {
      name: 'Sameer',
      age: 24,
      marks: [88, 58, 77]
    }

  ]



modular={

push_element : function(sname,sage,smarks,array)
{


    array.push({ name: sname, age: sage, marks:smarks });
    console.log(array);
},

print_age : function(name, array){
  for (var i=0; i < array.length; i++)
  {
      if (array[i].name === name) {
          return array[i].age;
      }
  }
},


find_percentage :function (arr)
{

  for(var i=0;i<arr.length;i++)
  {
    var sum = 0;
    for (var j = 0; j < arr[i].marks.length; j++)
    {
      sum += parseInt(arr[i].marks[j]);
    }
      var avg=sum/arr.length;
     console.log(arr[i].name,avg);
  }
}
}





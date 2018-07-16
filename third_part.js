var s,
modular={

  setting:{
    n:5,
    add:'+',
    subtract:'-',
    multiply:'*',
    divide:'/',
    x:30,
    z:10,
    num:4589,
    array1:[10,20,30,40],
    array2:[20,2,5,7]

  },

  init:function(){
   s=this.setting;
  },


calculate_per:function(m1,m2,m3,m4)
{
  var per;
  per= (m1+m2+m3+m4)/400*100;
  return per;
},

calculate:function(op,x,z)
{

  switch (op)
  {
    case '+':
        return x+z;
        break;

    case '-':
         return x-z;
        break;

    case '*':
        return x*z;
        break;

    case '/':
       return x/z;
        break;
  }
},

mult_table: function(n)
{
  var i;
  for(i=1;i<=10;i++)
  {
    console.log(n*i);
  }
},

digit_count:function(num)
{
  num=parseInt(num)
  count=0;
  while(num%10>=1)
  {

    num=num/10;
    count++;
  }
  return count
},

average_array:function(arr)
{
  var sum = 0;

  for (var i = 0; i < arr.length; i++)
  {
    sum += parseInt(arr[i]);
  }
   var avg=sum/arr.length;
  console.log(avg);

},

max_element: function(arr)
{
  var max= 0;

  for (i=0; i<=arr.length;i++){
      if (arr[i]>max) {
           max=arr[i];
      }
  }
  return max;
},

sum_array:function(arr1,arr2)
{

        var sum = arr1.map(function (num, idx) {
          return num + arr2[idx];
        });

        return sum;
},

 array_rev:function(arr)
{
  return arr.reverse();
}

};


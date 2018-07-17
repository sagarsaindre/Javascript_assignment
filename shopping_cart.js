
  products = [
    {
      name: 'milk',
      description: 'to make bones strong',
      price: 40
    },
    {
      name: 'Pen',
      description: 'smooth writting',
      price: 15
    },
    {
      name: 'oil',
     description: 'healthy cooking',
     price: 70
    }
  ]


module= {

add_tocart : function(pname,pdesc,pprice,array) {

    array.push({ name: pname, description: pdesc, price:pprice });
    console.log(array);
},

total_price : function(array) {
  var sum=0;
  for(var i=0;i<array.length;i++)
  {
    sum+=array[i].price;
  }
  alert(sum);
},

discount : function(array,discount) {
  for(var i=0;i<array.length;i++)
  {
    disc=array[i].price/100*discount;
    discounted_price=array[i].price-disc;
    array[i].price=discounted_price;

  }
  console.log(array);
}
}
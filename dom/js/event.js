var s,
 temp=0;
jsmodule= {

settings: {
  checkbox :document.getElementById('capture'),
  switchbtn:document.getElementById('switch'),
  switchboard:document.getElementById('switchboard'),
  switchstatus:document.getElementById('switchstatus'),
    msg:document.getElementById('msg'),
  checkval:document.getElementById('checkval'),
  li:document.getElementsByTagName("li"),
  timer:5000,



},

   init: function() {
  s = this.settings;
  this.bindUIActions();
},

bindUIActions: function() {
    s.switchbtn.addEventListener("click", function() {
      jsmodule.colorchange()}),

    s.switchbtn.addEventListener("click", function() {
      jsmodule.togglecolor()}),

    s.switchbtn.addEventListener("click", function() {
      jsmodule.displaymsg()}),

    s.checkbox.addEventListener("input",function(){
      jsmodule.btncolorchange()});

  },


colorchange : function() {

      if(s.switchbtn.click && switchstatus.innerHTML=="off")
      {
      s.switchboard.style.backgroundColor="gray";
      switchstatus.innerHTML="on";

      }
      else
      {
      s.switchboard.style.backgroundColor="red"
      switchstatus.innerHTML="off";
      s.msg.innerHTML="";
      }

},


btncolorchange : function() {

      if(s.checkbox.checked)
      {
        s.switchbtn.style.backgroundColor="green";
        s.checkval.innerHTML="on";
      }
      else
      {
        s.switchbtn.style.backgroundColor="yellow";
        s.checkval.innerHTML="off";
      }

},

togglecolor : function() {
       if(temp==0)
       {
        for(var i=0;i<s.li.length;i++)
        {
          if(i%2==0)
          {
            s.li[i].style.backgroundColor="gray";
          }
          else
          {
          s.li[i].style.backgroundColor="black";
          }
        }
        temp=1;
       }
        else{
          for(var i=0;i<s.li.length;i++)
        {

          if(i%2==0)
          {

            s.li[i].style.backgroundColor="black";
          }
          else
          {

          s.li[i].style.backgroundColor="gray";
          }
        }
        temp=0;
        }

},

displaymsg : function() {
   s.msg.innerHTML="hello!!..";
   setTimeout(function() {
  s.msg.innerHTML="";
   },s.timer)

},


}
jsmodule.init();
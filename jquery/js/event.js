 var s,
  temp=0,
jsmodule= {

settings: {
  checkbox :$("#capture"),
  switchbtn:$("#switch"),
  switchboard:$("#switchboard"),
  switchstatus:$("#switchstatus"),
    msg:$("#msg"),
  checkval:$("#checkval"),
  li:(".li"),
  timer:5000,
},

   init: function() {
  s = this.settings;
  this.bindUIActions();
},

bindUIActions: function() {

        s.switchbtn.on("click", function() {
          jsmodule.colorchange();
        });

        s.switchbtn.on("click", function() {
          jsmodule.togglecolor()});

        s.switchbtn.on("click", function() {
          jsmodule.displaymsg()})

        s.checkbox.on("input",function(){
          jsmodule.btncolorchange()});

  },


colorchange : function() {

      if(s.switchbtn.click && s.switchstatus.text("off"))
      {
      s.switchboard.css("backgroundColor","gray");
      s.switchstatus.text("on");

      }
      else
      {
      s.switchboard.css("backgroundColor","red");
      s.switchstatus.text("off");
      s.msg.text("");
      }
},


btncolorchange : function() {

      if(this.checked)
      {
        s.switchbtn.css("backgroundColor","green");
        s.checkval.text("on");
      }
      else
      {
        s.switchbtn.css("backgroundColor","yellow");
        s.checkval.text("off");
      }

},


togglecolor : function() {

       if(temp==0)
       {
        for(var i=0;i<s.li.length;i++)
        {
          if(i%2==0)
          {
            s.li[i].css("backgroundColor","gray");
          }
          else
          {
          s.li[i].css("backgroundColor","black");
          }
        }
        temp=1;
       }
        else{
          for(var i=0;i<s.li.length;i++)
        {

          if(i%2==0)
          {

            s.li[i].css("backgroundColor","black");
          }
          else
          {

          s.li[i].css("backgroundColor","gray");
          }
        }
        temp=0;
        }
},

displaymsg : function() {

   s.msg.text("hello!!..");
   setTimeout(function() {
  s.msg.text("");
   },s.timer)

},


};

 $(document).ready(function () {
  jsmodule.init();
 });

 var s,
datastore= {

settings: {
  name :$("#name"),
  email:$("#email"),
  phone:$("#phone"),
  bdate:$("#bdate"),
  mark1:$("#mark1"),
  mark2:$("#mark2"),
  mark3:$("#mark3"),
},

   init: function() {
    alert('hi');
  s = this.settings;
  this.bindUIActions();
},

bindUIActions: function() {
  alert('he');

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



};

 $(document).ready(function () {
  jsmodule.init();
 });

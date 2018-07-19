
 var s,
jsvalidate= {

settings: {
  btnvalidate :$("#btnvalidate"),

},

   init: function() {
  s = this.settings;
  this.bindUIActions();
},

bindUIActions: function() {
  alert('hi');

        s.btnvalidate.on("click", function() {
          jsvalidate.validateemail();
        });



  },


validateemail : function() {
  alert('hi');

  // Setup form validation on the #register-form element
  $("#registration").validate({
      // Specify the validation rules
      rules: {
          email: {
              required: true,
              email: true
          }
      },
      // Specify the validation error messages
      messages: {
          email: "Please enter a valid email address"
      },
      submitHandler: function(form) {
          form.submit();
      }
  });


},

};

 $(document).ready(function () {
  jsmodule.init();
 });
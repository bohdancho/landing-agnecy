$(document).ready(function () {
  $('#contact-form').validate({
    rules: {
      name: {
        required: true,
      },
      mail: {
        required: true,
        email: true
      },
      msg: {
        required: true
      }
    },
    messages: {
      name: 'Please enter your name',
      mail: {
        required: 'Please enter your E-Mail',
        email: 'Please enter valid E-Mail address'
      },
      msg: 'Please write a message'
    }
  });
});
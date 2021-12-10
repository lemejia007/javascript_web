
function WriteCookie () {

  if(document.myform.customer.value  == "" || 
     document.myform.customer2.value == "" || 
     document.myform.customer3.value == "") {
     alert("Enter some value!");
    return;
  }

  var now = new Date();
  now.setMonth(now.getMonth() + 4);
  var cookieValue  = escape(document.myform.customer.value)  + ";";
  var cookieValue2 = escape(document.myform.customer2.value) + ";";
  var cookieValue3 = escape(document.myform.customer3.value) + ";";
  document.cookie = "name="    + cookieValue;
  document.cookie = "name2="   + cookieValue2;
  document.cookie = "name3="   + cookieValue3;
  document.cookie = "expires=" + now.toUTCString() + ";"
  document.write ("Setting Cookies : " + "name=" + cookieValue + "name2=" + 
                  cookieValue2 + "name3=" + cookieValue3);


}
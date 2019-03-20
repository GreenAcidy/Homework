function Form(){
var form = document.forms.my;
var n= form.elements.name;
 var s = form.elements.surname;
 var u = form.elements.number;
 /*alert( n.value);
 alert( s.value);
 alert( u.value );*/
 var n1 =n.value;
 var s1 =s.value;
 var u1 =u.value;
 var n2 = parseInt(n1.replace(/\D+/g,""));
 var s2 = parseInt(s1.replace(/\D+/g,""));
 var u2 = parseInt(u1.replace(/\D+/g,""));
/*console.log(n2);
console.log(s2);
console.log(u2);*/
 if (n2)
 {
 	//alert("Всё плохо");
 	document.getElementById('check').style.backgroundColor= 'red';
 	document.getElementById('check').disabled = true;

 }
 else if (s2) 
 {
 	//alert("Всё плохо");
 	document.getElementById('check').style.backgroundColor= 'red';
 	document.getElementById('check').disabled = true;
 }
 else if (u2) {
      alert("Всё топчек");
    }

 
}
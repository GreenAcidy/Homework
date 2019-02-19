var a= prompt("Введите имя пользователя", );
num = parseInt(a.replace(/\D+/g,""));
if ( num )
{
	var len= a.length;
	len--;
	var an=" ";
	while (len>=0)
	{
		
		var flag = a.charAt(len).toUpperCase()==a.charAt(len);
		if (flag)
		{
			an=an+a.charAt(len).toLowerCase();
			//alert(a.charAt(len).toLowerCase());

		}
		else
		{
			an=an+a.charAt(len).toUpperCase();
			//alert(a.charAt(len).toUpperCase());
		}
		//alert(flag);
		//alert(a.charAt(len));
		len--;
	}
	alert(an.split("").reverse().join(""));
	//var and=an.slice(0,len);
	//alert(an.split("").reverse().join(""));
}
else
alert( a.split("").reverse().join(""));
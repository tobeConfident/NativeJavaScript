var arr = [1,2,3,4];
var crr = arr.toString();
for(var i=0;i<crr.length;i++){
	var reg = new RegExp(',','g');
	if(crr[i]==reg){
		var a = crr[i].replace(reg,"");
	}
	console.log(a);
}


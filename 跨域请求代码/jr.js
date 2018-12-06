function createXHR(){
	if(typeof XMLHttpRequest != 'undefined'){
		return new XMLHttpRequest();
	}else if(typeof ActiveXobject != 'undefined'){
		if(typeof arguments.callee.activeXstring != 'string'){
			var versions = ['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
			var len = versions.length;
			for(var i=0;i<len;i++){
				try{
					newActiveXobject(versions[i]);
					arguments.callee.activeXstring = versions[i];
					break;
				}
				catch(ex){
					//跳过
				}
			}
		}else{
			throw new Error('no xhr object availble');
		}
	}
}
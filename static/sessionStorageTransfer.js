var sessionStorage_transfer=function(event){if(!event){event=window.event;}
if(!event.newValue)return;if(event.key=='getSessionStorage'){localStorage.setItem('sessionStorage',JSON.stringify(sessionStorage));localStorage.removeItem('sessionStorage');}else if(event.key=='sessionStorage'&&!sessionStorage.length){var data=JSON.parse(event.newValue);for(var key in data){sessionStorage.setItem(key,data[key]);}}};if(window.addEventListener){window.addEventListener('storage',sessionStorage_transfer,false);}else{window.attachEvent('onstorage',sessionStorage_transfer);}
if(!sessionStorage.length){localStorage.setItem('getSessionStorage','foobar');localStorage.removeItem('getSessionStorage','foobar');}
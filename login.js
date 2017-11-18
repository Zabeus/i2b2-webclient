
function loggedIn() {
	//Cookies.set('i2b2:sessionid', '?', { expires: 1, path: '/' });
	var cookie = Cookies.get('i2b2:sessionid');
	alert(cookie);
        return cookie !== null;
}


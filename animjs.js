						var wnd = document.getElementsByClassName("header__logo");
			console.log(typeof(wnd));
		let centerX = document.documentElement.clientWidth/2;
		let centerY = document.documentElement.clientHeight/2;
			wnd.style.left = centerX-wnd.offsetWidth/2 + "px";
	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}

				function closeNav() {
			document.getElementById("mySidenav").style.width = "0";
		}

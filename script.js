if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	document.documentElement.style.setProperty('height', '100vh');
	var syn=document.getElementById('name1')
	syn.style.fontSize = "30px";
	var syn0=document.getElementById('button')
	syn0.style.left="49%";
	syn0.style.top="65%";
  } else {
    void(0)
}

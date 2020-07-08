
	var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=b98283b2e00f192262e1cd37cf03738e";
	$.ajax({
		url: apiURI,
		dataType: "json",
		type: "GET",
		async: "false",
		success: function(resp) {
			console.log(resp);
			console.log("현재온도 : "+ (resp.main.temp- 273.15) );
			console.log("현재습도 : "+ resp.main.humidity);
			console.log("날씨 : "+ resp.weather[0].main );
			console.log("상세날씨설명 : "+ resp.weather[0].description );
			console.log("날씨 이미지 : "+ resp.weather[0].icon );
			console.log("바람   : "+ resp.wind.speed );
			console.log("나라   : "+ resp.sys.country );
			console.log("도시이름  : "+ resp.name );
			console.log("구름  : "+ (resp.clouds.all) +"%" );
			
			var imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
			$("#weather-img").attr("src", imgURL);
			var temp = Math.round(resp.main.temp- 273.15);
			$("#temperature").html(temp+ "°c");
			//var img = load_img(temp);
			var c = 0;
			while (data[c])
					c++;
			var i = 0;
			$("#clothes-img").attr("src", data[i]);
				var left = document.querySelector("#left");
				var right = document.querySelector("#right");
				left.addEventListener("click", function(){
					if (i > 0)
						i -= 1;
					$("#clothes-img").attr("src", data[i]);
				});
				right.addEventListener("click", function(){
					if (i < c - 1)
					i += 1;
					$("#clothes-img").attr("src", data[i]);
				});
			}
	})

	function load_img(temp){
		if (temp >= 27)
			var img = ["./imgs/27_1.jpeg", "./imgs/27_2.jpeg"];
		else if (temp >= 23)
			var img = ["./imgs/23_26_1.png", "./imgs/23_26_2.jpeg"];
		else if (temp >= 20)
			var img = ["./imgs/20_22_1.jpeg", "./imgs/20_22_2.jpeg"];
		else if (temp >= 17)
			var img = ["./imgs/17_19_1.jpeg", "./imgs/17_19_2.jpeg"];
		else if (temp >= 12)
			var img = ["./imgs/12_16_1.jpeg", "./imgs/12_16_2.jpeg"];
		else if (temp >= 10)
			var img = ["./imgs/10_11_1.jpeg", "./imgs/10_11_2.jpeg"];
		else
			var img = ["./imgs/6_9coat1.jpeg", "./imgs/6_9coat2.jpeg"];
		return (img);
	}

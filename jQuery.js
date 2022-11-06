
//$("h1").css("color", "limegreen");

//$("h1").addClass("big-title margin-50");

//$("button").text("SOUR");

//$("h1").text("SOUR");

//$("a").attr("href", "https://www.yahoo.com");

//$("h1").click(function() { $("h1").css("color", "purple"); } );

//or (var i = 0; i<5; i++) { document.querySelectorAll("button")[i].addEventListener("click", function()
//{document.querySelector("h1").style.color = "purple"; });}

//$("button").click(function() { $("h1").css("color", "purple");});

//$("input").keypress(function(event) { $("h1").text(event.key); });

//("h1").on("mouseover", function() {$("h1").css("color", "purple");});

//$("button").on("click", function() {$("h1").animate({});
//});

$("button").on("click", function() {$("h1").slideUp().slideDown().animate({opacity: 0.5});
});

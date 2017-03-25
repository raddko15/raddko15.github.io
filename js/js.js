
$(document).ready(function(){
    function animateScrollButton() { //	animation of items for scrolling
		 $('.pencil').animate({'margin-top':'5px'},1000).animate({'margin-top':'35px'},1000, animateScrollButton);
	 } animateScrollButton();
	$('.pencil, .projscroll, #takeMeDownH1').click(function(){
		$('html, body').animate({scrollTop: $(".projectDiv").offset().top
	},700);
		});
	$('.scrollUp').click(function(){
		$('html, body').animate({scrollTop: $("#aboutMe").offset().top
	},700);	
		
   });
  $(".nowa").slideDown('slow','swing');
	
 
	
	
	var dictionary, set_lang;
	var tabAbout = ["Strona dotycząca znaków kolejowych, wykonana na zlecenie klienta.", "Strona wykonana w celach edukacyjnych.", "Projekt, nad którym obecnie pracuję."];
	var tabTech = ["Technologie: HTML, CSS, JS, JQuery, Bootstrap, Photoshop", "Technologie: HTML, CSS, JQuery", "Technologie: HTML, CSS, JS, Bootstrap, Inkscape (Logo ptaka, oprawa wizualna)"];
	
	
	 dictionary = {
        "english": {
            "_shortDescription": "My name is Radosław Furmański, I am 23 years old and I live in Krakow. In March I finished my IT studies at University of Technology and Science. Currently I am looking for an internship or work as Junior Front-End Developer",
            "_lookAtportfolio": "Visit my portfolio!",
			   "_skills":"Skills:",
			   "_basics":"Basics: MySQL, PHP, React",
			   "_downloadCv":"Download Cv (pdf version)",
			   "_contact":"Contact:",
			   "_phone":"Phone: +48 669 801 635",
			   "_projects":"Projects",
			   
        },
		 "polish": {
			 "_shortDescription": "Nazywam się Radosław Furmański, mam 23 lata i mieszkam w Krakowie. W marcu ukończyłem studia informatyczne na AGH i obecnie poszukuję pracy na stanowisku junior front-end developera.",
           "_lookAtportfolio": "Zapraszam do przeglądania portfolio",
			  "_skills":"Umiejętności:",
			  "_basics":"Podstawy: MySQL, PHP, React",
			  "_downloadCv":"Pobierz Cv w wersji pdf",
			  "_contact":"Kontakt:",
			  "_phone":"Telefon: 669 801 635",
			  "_projects":"Projekty"
			 
		 }
	 };
	set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };
	
	$('#engFlag').click(function(){
		
		set_lang(dictionary.english);
		$('#engFlag').fadeOut('fast');
		$('#polFlag').fadeIn('fast');
		tabAbout = ["Website made for a client", "Website made for educational purposes", "Project in development"];
	   tabTech = ["Technologies: HTML, CSS, JS, JQuery, Technologies: Bootstrap, Photoshop",  "Technologie: HTML, CSS, JS, Bootstrap, Inkscape (The logo of a Bird, and simple graphics)"];
	});
	$('#polFlag').click(function(){
		
		set_lang(dictionary.polish);
		$('#polFlag').fadeOut('fast');
		$('#engFlag').fadeIn('fast');
		tabAbout = ["Strona dotycząca znaków kolejowych, wykonana na zlecenie klienta.", "Strona wykonana w celach edukacyjnych.", "Projekt, nad którym obecnie pracuję."];
		tabTech = ["Technologie: HTML, CSS, JS, JQuery, Bootstrap, Photoshop", "Technologie: HTML, CSS, JQuery", "Technologie: HTML, CSS, JS, Bootstrap, Inkscape (Logo ptaka, oprawa wizualna)"];
	});
	
	 function slider() {
//		$('')
		var currentIndex = 0;
		var items = $('#picContainer img');
		var itemAmt = items.length;
		$('#picContainer img').css('display', "none");
		$('#picContainer img:first').css('display', "block");

		function cycleItems() {
			var item = $('#picContainer img').eq(currentIndex);
		   items.fadeOut('slow');
			item.fadeIn('slow');
		
			$('#descAbout').animate({'opacity': 0},400,function(){
				$(this).text(tabAbout[currentIndex]);
			}).animate({'opacity': 1},400); 
			
			
			$('#descTech').animate({'opacity': 0},400,function(){
				$(this).text(tabTech[currentIndex]);
			}).animate({'opacity': 1},400); 
			 
		}
		var autoSlide = setInterval(function() {
			currentIndex += 1;
			if (currentIndex > itemAmt - 1) {
			    currentIndex = 0;
			}
			$('.listS').eq(currentIndex-1).removeClass('active');
			$('.listS').eq(currentIndex).addClass('active');
			cycleItems();
	   }, 5000);

		$('.next').click(function() {
			if (!items.is(':animated')) {
		    clearInterval(autoSlide);
		    currentIndex += 1;
		     if (currentIndex > itemAmt - 1) {
			    currentIndex = 0;
		     }
			 $('.listS').eq(currentIndex-1).removeClass('active');
			 $('.listS').eq(currentIndex).addClass('active');
		    cycleItems(); 
			}
		});

		$('.prev').click(function() {
			if (!items.is(':animated')) {
			 clearInterval(autoSlide);
			 $('.listS').eq(currentIndex).removeClass('active');
			 $('.listS').eq(currentIndex-1).addClass('active');
			 currentIndex -= 1;
			  if (currentIndex < 0) {
				  currentIndex = itemAmt - 1;
			  }
		   cycleItems(); 
			}
		});
		
		$('.listS').click(function(){
			if (!items.is(':animated')) {
			 clearInterval(autoSlide);
			 $('.listS').removeClass('active');
			 $(this).addClass('active');	
			 if(currentIndex != $(this).index()){
			 currentIndex = $(this).index();
				if (currentIndex < 0) {
				 currentIndex = itemAmt - 1;
			   }
			 cycleItems();} 
			}
		});
	}
	
	slider();
	    
	
	
	function buttonSlider(){
	var divHeight = $('.sliderImage').height();
	$("#picContainer").css('height',divHeight);
	
	} buttonSlider();
	
	
	
	$('#takeMeDownH1')
		.mouseenter(function(){
		$('.projectDiv').css('background-color', 'rgba(8,52,50,0.8)');
	})
	  .mouseleave(function(){
	   $('.projectDiv').css('background-color', 'rgba(8,52,50,0.9)');
	});
	
		$('.cv')
		.mouseenter(function(){
		$('.cv').addClass('cvActive');
	})
	  .mouseleave(function(){
	   $('.cv').removeClass('cvActive');
	});
	
	
});


$(window).on("load", function() {
    // weave your magic here.
	var divHeight = $('.sliderImage').height();
		var divWidth = $('.sliderImage').width();
	   
		$(".picContainer").css('height',divWidth);
	   $(".picContainer").css('height',divHeight);
	   var divHeight2 = $('#takeMeDownH1').height();
		$(".projectDiv").css('height',divHeight+divHeight2+200);
});

$(window).resize(function(){
	var divHeight = $('.sliderImage').height();
	var divHeight2 = $('#takeMeDownH1').height();
	$("#picContainer, .projectPic").css('height',divHeight);
	$(".projectDiv").css('height',divHeight+divHeight2+200);
});
$(window).scroll(function()
{
	if($(this).scrollTop()>300) $('.scrollUp').fadeIn();
	else $('.scrollUp').fadeOut();
});
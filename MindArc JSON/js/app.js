$(document).ready(function(){
	$.getJSON('data.json', function(obj) {
	$.each(obj, function(key, val) {
	   $("#tabs-nav").append('<li><a href="#'+val.Tab+'">'+val.title+'</li>');
	   $("#tabs-content").append('<div id="'+val.Tab+'" class="tab-content">'+val.content+'</div>');
	   $(".accordion-container").append('<article class="content-entry"><h4 class="article-title"><i></i>'+val.title+'</h4><div class="accordion-content">'+val.content+'</div></article>');
	});
//ACCORDION
		var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.article-title');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.accordion-container'), false);
//TABS ITO
	$('#tabs-nav li:first-child').addClass('active');
	$('.tab-content').hide();
	$('.tab-content:first').show();

	// Click function
	$('#tabs-nav li').click(function(){
	  $('#tabs-nav li').removeClass('active');
	  $(this).addClass('active');
	  $('.tab-content').hide();
	  
	  var activeTab = $(this).find('a').attr('href');
	  $(activeTab).fadeIn();
	  return false;
	});
});


});


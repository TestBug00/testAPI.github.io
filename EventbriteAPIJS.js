

$(document).ready(function() {
		
		var token = 'H53GC2U6QRW6PRVVG2HN';
		var $events = $("#events");
		
		$.get('https://www.eventbriteapi.com/v3/events/search/?token='+token+'&organizer.id=48821121243&expand=venue', function(res) {
			if(res.events.length) {
				var s = "<ul class='eventList'>";
				for(var i=0;i<res.events.length;i++) {
					var event = res.events[i];
					console.dir(event);
					s += "<li><a href='" + event.url + "'>" + event.name.text + "</a> - " + event.description.text + "</li>";
				}
				s += "</ul>";
				$events.html(s);
			} else {
				$events.html("<p>Sorry, there are no upcoming events.</p>");
			}
		});
		
		
	});
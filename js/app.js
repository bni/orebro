(function(app, undefined) {
	$(document).bind('mobileinit', function() {
		$.ajax({cache: false});
	});

	$(document).bind('pagebeforecreate', function(e, data) {
		$.getJSON('data/sections.json', function(data) {
			app.buildSelectList(data);

			var sections = app.getSections();

			app.buildContent(sections[0]);
		});
	});

	var findSelectedSection = function(url) {
		var sections = app.getSections();

		if (sections != null && /section\/.+$/.test(url.href)) {
			var id = url.href.replace(/.*section\//, '');

			for (var i = 0; i < sections.length; i++) {
				if (sections[i].id == id) {
					 return sections[i];
				}
			}
		}

		return null;
	}

	$(document).bind('pagebeforechange', function(e, data) {
		if (typeof data.toPage === 'string') {
			e.preventDefault();

			var selectedSection = findSelectedSection($.mobile.path.parseUrl(data.toPage));

			if (selectedSection !== null) {
				app.buildContent(selectedSection);
			}
		}
	});
})(window.app = window.app || {});


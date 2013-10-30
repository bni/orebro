(function(app, undefined) {
	var sections = null;

	app.buildSelectList = function(data) {
		sections = data.sections;

		var markup = '';

		for (var i = 0; i < sections.length; i++) {
			var section = sections[i];

			markup += '<li><a href="' + window.location.pathname;
			markup += 'section/' + section.id + '" data-rel="close" style="border-color: #1d1d1d;">' + section.name + '</a></li>';
		}

		var selectList = $('#selectList');

		selectList.append(markup);

		selectList.listview('refresh');
	};

	app.getSections = function() {
		return sections;
	};
})(window.app = window.app || {});


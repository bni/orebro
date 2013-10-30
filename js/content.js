(function(app, undefined) {
	app.buildContent = function(selectedSection) {
		$.get(selectedSection.content, function(documentData) {
			$('#pageContent').html(documentData);

			$('#headerText').html(selectedSection.name);

			$("#selectPanel").panel("close");
		}, 'html');
	}
})(window.app = window.app || {});


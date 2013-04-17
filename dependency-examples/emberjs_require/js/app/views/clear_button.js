define('app/views/clear_button', [
		'text',
		'ember'
	],
	/**
	 * View to clear completed tasks
	 *
	 * @param String button_html, the html for view
	 * @returns Class
	 */
	function( button_html ) {
		return Ember.View.extend({
			entriesBinding: 'controller.namespace.entriesController',
			template: Ember.Handlebars.compile( button_html ),
			classNameBindings: 'buttonClass',
			buttonClass: function () {
				if ( !this.getPath( 'entries.completed' ) )
					return 'hidden';
			}.property( 'entries.completed' )
		})
	}
);

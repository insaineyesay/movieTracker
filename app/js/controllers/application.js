MovieTracker.ApplicationController = Ember.Controller.extend();

MovieTracker.MoviesController = Ember.ArrayController.create({
	content: [],
	init: function () {
		this._super();

		var list = [
		MovieTracker.Movie.create({
			title: 'Movie 1',
			rating: 4
		}),

		MovieTracker.Movie.create({
			title: 'Movie 2',
			rating: 5
		})
		];

		this.set('content', list);
	}
});

MovieTracker.selectedMovieController = Ember.ObjectController.create({
	selectedMovie: [],

	select: function(item) {
		this.set('selectedMovie', item);
	},

	toggleWatched: function() {

		this.selectedMovie.toggleProperty('watched');
	}
});
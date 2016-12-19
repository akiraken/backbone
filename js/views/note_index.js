
"use strict";
APP.NoteIndexView = Backbone.View.extend({
	events: {'change input#key_word': 'render'},
	template: _.template($('#indexTemplate').html()),

  // populate the html to the dom
  render: function () {
  	var keyword = this.$el.find('input#key_word').val();
  	if(!keyword){
  		keyword = "";
  	}
  	var tmp_notes = this.collection.toJSON();
  	var notes = new Array();
  	for(var i = 0; i < tmp_notes.length; i++)
  		if(tmp_notes[i].name.search(keyword) >= 0)
  			notes.push(tmp_notes[i]);
    this.$el.html(
    	this.template({notes: notes,keyword})
    );
    return this;
  }
});


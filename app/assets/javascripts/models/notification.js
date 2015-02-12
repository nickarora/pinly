Pinly.Models.Notification = Backbone.Model.extend({

	urlRoot: '/api/notifications',

	boardpin: function(){
		this._boardpin = this._boardpin || new Pinly.Models.BoardPin();
  	return this._boardpin;
	},

	board: function(){
		this._board = this._board || new Pinly.Models.Board();
  	return this._board;
	},

	pin: function(){
		this._pin = this._pin || new Pinly.Models.Pin();
  	return this._pin;
	},

	user: function(){
		this._user = this._user || new Pinly.Models.User();
  	return this._user;
	},

	receiver: function(){
		this._receiver = this._receiver || new Pinly.Models.User();
  	return this._receiver;
	},

	parse: function(payload){
		
		if (payload.boardpin){
			this.boardpin().set(this.boardpin().parse(payload.boardpin));
			delete payload.boardpin;
		}

		if (payload.board){
			this.board().set(this.board().parse(payload.board));
			delete payload.board;
		}

		if (payload.pin){
			this.pin().set(this.pin().parse(payload.pin));
			delete payload.pin;
		}

		if (payload.user){
			this.user().set(this.user().parse(payload.user));
			delete payload.user;
		}

		if (payload.receiver){
			this.receiver().set(this.receiver().parse(payload.receiver));
			delete payload.receiver;
		}

		if (payload.pinner){
			this.pinner = payload.pinner;
			delete payload.pinner;
		}

		return payload;
	}

});
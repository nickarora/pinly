window.Guest = {
	initialize: function(){
		$(".guest-login").on( "click", this.guestLogin.bind(this) );	
	},

	guestLogin: function(){
		var that = this;
		$username = $('#username');
		$password = $('#password');
		$submitButton = $('.login-button');

		this.slowtype($username, 'zackmorris', function(){
			that.slowtype($password, 'password', function(){
				$submitButton.click();
			})
		});
	},

	slowtype: function($el, word, callback){	
		
		var typing = setInterval(function(){
			$el.val( $el.val() + word.slice(0,1) );
			word = word.substr(1);

			if (!word){
				clearInterval(typing);
				callback();
			}
		}, 40);
	}

}

window.ParticleBG = {

	initialize: function(){
		particlesJS('particles-js', {
	    particles: {
	      color: '#000',
	      shape: 'circle',
	      opacity: .5,
	      size: 10,
	      size_random: true,
	      nb: 100,
	      line_linked: {
	        enable_auto: false,
	        distance: 250,
	        color: '#cb2026',
	        opacity: 0.5,
	        width: 1,
	        condensed_mode: {
	          enable: false,
	          rotateX: 600,
	          rotateY: 600
	        }
	      },
	      anim: {
	        enable: true,
	        speed: 2.5
	      }
	    },
	    interactivity: {
	      enable: true,
	      mouse: {
	        distance: 250
	      },
	      detect_on: 'canvas',
	      mode: 'grab',
	      line_linked: {
	        opacity: 0.5
	      },
	      events: {
	        onclick: {
	          push_particles: {
	            enable: true,
	            nb: 4
	          }
	        }
	      }
	    },
	    retina_detect: true
		});
	}

};
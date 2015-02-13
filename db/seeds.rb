User.create!([
  {username: "zackmorris", fname: "Zack", lname: "Morris", password: "password", description: "I'm a charming schemer who with a giant phone.  My hobbies include breaking the fourth wall and addressing the audience, temporarily freezing time by yelling \"Time out!\", and using a giant phone.  My amusing schemes often backfire.", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423798170/lpniexpssdyrzb9mfein.jpg", cloudinary_id: "lpniexpssdyrzb9mfein"},
  {username: "kellykapowski", fname: "Kelly", lname: "Kapowski", password: "password", description: "I'm head cheerleader and captain of the volleyball, swim, and softball teams!  I love my boyfriend Zack even though I cheated on him once with a guy named Jeff!", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423798518/ombrmlwdbf3plg8unajh.jpg", cloudinary_id: "ombrmlwdbf3plg8unajh"}
])

Pin.create!([
  {url: "http://www.thedieline.com/blog/2012/7/27/jack-daniels-double-gold-medal-limited-edition.html", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799046/j46hsvozqlbrnyjsmp6c.jpg", cloudinary_id: "j46hsvozqlbrnyjsmp6c"},
  {url: "http://www.drinking.com", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799182/lwfy8p07ia8dhpwsroke.jpg", cloudinary_id: "lwfy8p07ia8dhpwsroke"},
  {url: "https://www.flickr.com/photos/rampx/8304308177/in/photostream/?rb=1", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799282/w3zdmgmexii6ngo5usuo.jpg", cloudinary_id: "w3zdmgmexii6ngo5usuo"},
  {url: "http://glubbs.tumblr.com/post/98372573716/bexsonn-the-glenlivet-21yo-archive-single-malt", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799363/g1zkeylkxyld56j9pfw9.jpg", cloudinary_id: "g1zkeylkxyld56j9pfw9"},
  {url: "http://cardigansandcocktails.tumblr.com/post/108988782812", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799460/qwcecevxm6xrzddd7ne8.jpg", cloudinary_id: "qwcecevxm6xrzddd7ne8"},
  {url: "http://modelevivantaquebec.com/2013/12/29/a-mediter-longuement/", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799592/rrgpapqt7km0sospu7di.jpg", cloudinary_id: "rrgpapqt7km0sospu7di"},
  {url: "http://www.drinking.com", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799747/fembbqstxib806l3dvxj.jpg", cloudinary_id: "fembbqstxib806l3dvxj"},
  {url: "http://trajectorypath.com/whiskey-family-tree/", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799928/s4kd4luzyp3dc0pcqiin.jpg", cloudinary_id: "s4kd4luzyp3dc0pcqiin"},
  {url: "http://sexysassycolor.tumblr.com/post/73594813550", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423799997/ixghgqhjusixlrdi6adn.jpg", cloudinary_id: "ixghgqhjusixlrdi6adn"},
  {url: "http://theperfectworldwelcome.tumblr.com/post/101258183206/wolverxne-autumn-love-story-by-schneepfote", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423800195/dvrpzuddjhlteqexal3e.jpg", cloudinary_id: "dvrpzuddjhlteqexal3e"},
  {url: "http://www.deabyday.tv/cuccioli/gatti/guide/6961/Come-fare-se-il-tuo-gatto---iperattivo.html", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423800253/si2yfvzwymsuebmebszh.jpg", cloudinary_id: "si2yfvzwymsuebmebszh"},
  {url: "http://www.cleanandscentsible.com/2013/12/7810.html", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423800322/rfmhtlru0qoccgbnvz9j.jpg", cloudinary_id: "rfmhtlru0qoccgbnvz9j"},
  {url: "http://www.manmadediy.com/users/chris/posts/3341-how-to-make-smoked-cocktail-garnishes-for-extra-flavorful-drinks", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423800421/l8itcw4hreq98azob2wm.jpg", cloudinary_id: "l8itcw4hreq98azob2wm"},
  {url: "http://whiskeyandmisanthropy.com/", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423800535/wbs5faenyyeuhvzz2fvk.jpg", cloudinary_id: "wbs5faenyyeuhvzz2fvk"}
])

Board.create!([
  {title: "Alcohol", description: "The only way I got through high-school!", user_id: 1},
  {title: "Cute Animals", description: "These are all so adorable! I just wish I knew what these animals were called!", user_id: 2}
])
Boardpin.create!([
  {board_id: 1, pin_id: 1, description: "Jack Daniel's Double Gold Medal Limited Edition - a specially packaged bottle sold exclusively at London's Heathrow, Gatwick and Stansted airports.  Serves me well on those long, lonely nights!"},
  {board_id: 1, pin_id: 2, description: "This was delicious until I spilled it all over my giant phone!"},
  {board_id: 2, pin_id: 3, description: "Is this a rabbit? So cute!"},
  {board_id: 1, pin_id: 4, description: "Sweet sweet nectar.  I will never leave you even if I told Kelly I would try to stop."},
  {board_id: 2, pin_id: 5, description: "Looks just like the one we stuffed in Screech's locker :)"},
  {board_id: 2, pin_id: 6, description: "It's staring deep into my soul!"},
  {board_id: 1, pin_id: 7, description: "This is my go to after spending more than an hour locked in a room with AC and Mr. Belding."},
  {board_id: 1, pin_id: 8, description: "The whiskey family tree -- the only real family I've ever known!"},
  {board_id: 2, pin_id: 9, description: "Oh my god -- It's so cute I need to die right now."},
  {board_id: 2, pin_id: 10, description: "This bunny's nose is so big!"},
  {board_id: 2, pin_id: 11, description: "That's how Zack stares at himself sometimes..."},
  {board_id: 2, pin_id: 12, description: "Such prim and proper horses! I'll have to tell daddy to buy me one!"},
  {board_id: 1, pin_id: 13, description: "Time out! I just downed six of these."},
  {board_id: 1, pin_id: 14, description: "Beautiful in a way that I always wanted Kelly to be...."}
])

Follow.create!([
  {user_id: 1, board_id: 1},
  {user_id: 2, board_id: 2},
  {user_id: 1, board_id: 2}
])


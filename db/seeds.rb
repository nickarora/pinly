User.create!([
  {session_token: "bvE7d-5OqwSf2ROn16P3KQ", username: "zackmorris", fname: "Zack", lname: "Morris", password: "password", password_digest: "$2a$10$mU7UT3DiCFvegMPFPNxOeO2BbYFBbAyQpmrY5OpftFbPWyLzEkz7i", description: "I'm a charming schemer.  My hobbies include breaking the fourth wall and addressing the audience, temporarily freezing time by yelling \"Time out!\", and using a giant phone.  My amusing schemes often backfire.", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423798170/lpniexpssdyrzb9mfein.jpg", cloudinary_id: "lpniexpssdyrzb9mfein"},
  {session_token: "MmH4WKQ31w9aeKyRi_hakw", username: "kellykapowski", fname: "Kelly", lname: "Kapowski", password: "password", password_digest: "$2a$10$W/dPP5JtIEvTgFr04iF5jeln8vscH8N602C9AweAWuLz7FgVhnaEm", description: "I'm head cheerleader and captain of the volleyball, swim, and softball teams!  I love my boyfriend Zack even though I cheated on him once with a guy named Jeff!", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423798518/ombrmlwdbf3plg8unajh.jpg", cloudinary_id: "ombrmlwdbf3plg8unajh"},
  {session_token: "Zu70ckvQ_Eo79va_0Q1r9g", username: "jessiespano", fname: "Jessie", lname: "Spano", password: "password", password_digest: "$2a$10$.y/GEGsQrAGMpC8rvVqJt.GHwMi0T/Tc2dXlEI9g84fPc2g.HuXba", description: "I'm a lifelong friend of Zack, Screech, Lisa and Kelly and, without a doubt, the smartest person in the group.", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423832584/hflsoccmrsypdeqktuiy.jpg", cloudinary_id: "hflsoccmrsypdeqktuiy"},
  {session_token: "lf2s1VaB3hOKLW4_osihcw", username: "screech", fname: "Screech", lname: "Powers", password: "password", password_digest: "$2a$10$0w3yzE8DO1V3baQU7MriK.T/QhWySlie0FLkiAxaqxRu3O/fUtk6i", description: "I'm a geeky, generally good-natured goofball that is comfortable with my own nerdiness. Everyone teases me, but I don't think they mean it. Underneath the jokes, they do care for me!  Or at least that's what I tell myself....", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423834643/ytdenszromdeaenerxi8.jpg", cloudinary_id: "ytdenszromdeaenerxi8"},
  {session_token: "0rdz9B94Fna122tgoER6pw", username: "acslater", fname: "AC", lname: "Slater", password: "password", password_digest: "$2a$10$6wBkwz7scqDWFR9RJPej8ONl2iV.fUp6J5toJIAnfeDQBiMuam4I2", description: "Army brat, star athlete, macho man, and Best friends with Zack.  Need I say more, chicas?", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423832639/m3ypavuuccb9pumlw0s7.jpg", cloudinary_id: "m3ypavuuccb9pumlw0s7"},
  {session_token: "yXICrQlCJBKaT7cdZPuucQ", username: "mrbelding", fname: "Richard", lname: "Belding", password: "password", password_digest: "$2a$10$7eiryNI52je9l01KUPf7CefXuWYEaibe.3RbNqx8vjU8U.ufBxZhG", description: "Hey, hey, hey, what is going on here?", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423542388/csnjhadzhi8d3sf8srh4.jpg", cloudinary_id: "csnjhadzhi8d3sf8srh4"}
])

Board.create!([
  {title: "Alcohol", description: "The only way I got through high-school!", user_id: 1},
  {title: "Cute Animals", description: "These are all so adorable! I just wish I knew what these animals were called!", user_id: 2},
  {title: "SPORTS", description: "Do you even lift, bro?", user_id: 5},
  {title: "Light Reading Material", description: "Just a few things I've been reading in my spare time!", user_id: 3},
  {title: "Hair Care", description: "God I love my doo!", user_id: 1},
  {title: "Cheer Leading", description: "I am so like excited about this board!", user_id: 2},
  {title: "Insects", description: "I have an ant and fly farm as well as a worm collection!  God I love insects.", user_id: 4}
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
  {url: "http://whiskeyandmisanthropy.com/", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423800535/wbs5faenyyeuhvzz2fvk.jpg", cloudinary_id: "wbs5faenyyeuhvzz2fvk"},
  {url: "http://www.cuteoverload.com", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423832808/dggdk33ax3fl30lzysub.jpg", cloudinary_id: "dggdk33ax3fl30lzysub"},
  {url: "http://www.wrestlingpod.com", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423833002/al4ebbrhv9kjpjvh5tqa.jpg", cloudinary_id: "al4ebbrhv9kjpjvh5tqa"},
  {url: "http://www.chicagonow.com", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423833136/xvf62tuz3mmljxgt7x8m.jpg", cloudinary_id: "xvf62tuz3mmljxgt7x8m"},
  {url: "http://www.esquire.com/style/a26360/groming-advice-2014/", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423833275/g5ldgbjdyuryz0oqp8ib.jpg", cloudinary_id: "g5ldgbjdyuryz0oqp8ib"},
  {url: "http://www.entrepreneur.com/slideshow/229656", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423833446/v0jc7hvk0uc7mr96mt8u.jpg", cloudinary_id: "v0jc7hvk0uc7mr96mt8u"},
  {url: "http://www.vcuathletics.com/information/Cheerleading_Squad", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423833664/fswgtnzewb3s8n7vnyld.jpg", cloudinary_id: "fswgtnzewb3s8n7vnyld"},
  {url: "http://www.buzzfeed.com/ariellecalderon/things-every-cheerleader-will-understand#.mhQPd4z21", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423834102/f7f5acgvhtfp7222cwjw.jpg", cloudinary_id: "f7f5acgvhtfp7222cwjw"},
  {url: "http://www.today.com/health/one-leg-tons-spirit-amputee-cheerleader-inspires-crowds-1C6659612?franchiseSlug=todayhealthmain", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423834309/vsjf36d5mogb1dz5xdq7.jpg", cloudinary_id: "vsjf36d5mogb1dz5xdq7"},
  {url: "http://www.brainpickings.org/index.php/2012/03/12/john-steinbeck-six-tips-on-writing/", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423834899/rq93npcjz19b4s1l2edr.jpg", cloudinary_id: "rq93npcjz19b4s1l2edr"},
  {url: "http://www.the-open-mind.com/50-loving-sentiments-we-should-all-say-more-often/", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423835089/acrr6gq7i9h6batlovct.jpg", cloudinary_id: "acrr6gq7i9h6batlovct"},
  {url: "https://www.pinterest.com/offsite/?token=208-124&url=http%3A%2F%2Fthemindunleashed.org%2F2014%2F03%2Ftrain-brain-let-go-habits-10-methods-creating-new-neural-pathways.html&pin=558235316284122453", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423835254/ucfyxttdi3nn7ix3gqny.jpg", cloudinary_id: "ucfyxttdi3nn7ix3gqny"},
  {url: "http://camillestyles.com/uncategorized/hello-goodbye/", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423835374/j4gbyjk5x4tppboxxbbh.jpg", cloudinary_id: "j4gbyjk5x4tppboxxbbh"},
  {url: "http://www.adventuresofadiymom.com/2014/02/how-to-make-pom-poms-from-yarn.html", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423835488/ben1ctylfwlisknr8nhr.jpg", cloudinary_id: "ben1ctylfwlisknr8nhr"},
  {url: "http://www.adventuresofadiymom.com/2014/02/how-to-make-pom-poms-from-yarn.html", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423835507/v1cdxztvghc1wmzopkxb.jpg", cloudinary_id: "v1cdxztvghc1wmzopkxb"},
  {url: "http://www.treehugger.com/lawn-garden/why-you-shouldnt-buy-ladybugs-natural-pest-control-your-garden.html", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423835674/cz1mriavhpuk8ukepomr.jpg", cloudinary_id: "cz1mriavhpuk8ukepomr"},
  {url: "https://www.etsy.com/listing/154066543/coco-chanel-quote-typed-on-typewriter-on?utm_campaign=Share&share_id=25484702&utm_medium=PageTools&hmac=b34998b3febf848c3789c46bebe581fbc4c5d00e&utm_source=Pinterest", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423835823/dhungdeuptenhpjc2gu9.jpg", cloudinary_id: "dhungdeuptenhpjc2gu9"},
  {url: "http://www.photographymad.com/pages/view/the-perfect-camera-settings-for-action-and-sports-photography", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423835938/otm5c5r43k0r7wxpdejm.jpg", cloudinary_id: "otm5c5r43k0r7wxpdejm"},
  {url: "http://www.buzzfeed.com/javiermoreno/best-haircut-ever#.lb2aW0xjX", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423836482/qwjkemrbq2oxx2yc5azm.jpg", cloudinary_id: "qwjkemrbq2oxx2yc5azm"},
  {url: "http://www.bloglovin.com/blogs/absolute-best-photography-posts-2958690/photo-2110744199/link=aHR0cCUzQSUyRiUyRnBob3RvZ3JhcGh5LjEwMDBub3Rlcy5jb20lMkZwb3N0JTJGNzEzMjAyNTkzNDA=", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423836653/roawpyfhfhzhqqp8x24z.jpg", cloudinary_id: "roawpyfhfhzhqqp8x24z"},
  {url: "http://www.bloglovin.com/blogs/absolute-best-photography-posts-2958690/photo-2110744199/link=aHR0cCUzQSUyRiUyRnBob3RvZ3JhcGh5LjEwMDBub3Rlcy5jb20lMkZwb3N0JTJGNzEzMjAyNTkzNDA=", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423836678/c9p5zjxlhlnk55in7yzm.jpg", cloudinary_id: "c9p5zjxlhlnk55in7yzm"},
  {url: "http://www.buzzfeed.com/theliltingbanshee/12-quotes-that-make-you-wish-fscott-fitzgerald-wo-cf23#.qhvp9gAYN", image_url: "http://res.cloudinary.com/pinly/image/upload/v1423836988/tzgrncsl9d5j3fzy1epb.jpg", cloudinary_id: "tzgrncsl9d5j3fzy1epb"}
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
  {board_id: 1, pin_id: 14, description: "Beautiful in a way that I always wanted Kelly to be...."},
  {board_id: 2, pin_id: 15, description: "Fangs and fur!  Such a winning combo!"},
  {board_id: 3, pin_id: 16, description: "Words I live by -- except for the part where I have never suffered a single defeat.  Remind me to give Zack a noogie later."},
  {board_id: 3, pin_id: 17, description: "Walter Payton aka Sweetness my alltime favorite running back. More importantly, outside of football, he was a great man."},
  {board_id: 5, pin_id: 18, description: "Hey, you want to look more handsome than you already are, don't you?  The answer would be yes for most people -- but, for me, the answer is no!  I look good.  #hair #grooming"},
  {board_id: 4, pin_id: 19, description: "15 Life changing books on entrepreneurship!  You MUST follow this link.  Too bad most of my friends are illiterate."},
  {board_id: 6, pin_id: 20, description: "YES!  These girls fly high!  #Cheer #Squad"},
  {board_id: 6, pin_id: 22, description: "This lady's story is sooo Inspirational.  Particularly because she's pulling off that zebra print so well! #cheer"},
  {board_id: 4, pin_id: 23, description: "Six Tips on Writing by John Steinbeck -- a personal hero.  I cannot wait for the day I graduate and I can speak to people who relate to articles like this!  It's like I'm surrounded by imbeciles!"},
  {board_id: 7, pin_id: 24, description: "Ah the praying mantis.  Did you know the female mantis eats the male after mating?  I'd sooo let Lisa Turtle do that to me.."},
  {board_id: 3, pin_id: 25, description: "Reminds me of the time I beat the school swim record to impress Kelly -- and then she just made out with Zack.  Remind me to punch Zack."},
  {board_id: 5, pin_id: 26, description: "Who's the person who decided men can't wear curlers?  Sometimes I just want to curl!"},
  {board_id: 6, pin_id: 28, description: "Our school needs pom poms so badly.  We spent our whole budget paying Zack Attack to perform at the school ball :("},
  {board_id: 7, pin_id: 29, description: "Lady bugs are my kindov lady!"},
  {board_id: 4, pin_id: 30, description: "You've said it all Jack Kerouac!"},
  {board_id: 3, pin_id: 31, description: "You think a preppie could pull that off?"},
  {board_id: 5, pin_id: 32, description: "For the record, I was pulling off the undercut way before it was cool."},
  {board_id: 7, pin_id: 34, description: "Just paint me blue and call me a Smurf!"},
  {board_id: 4, pin_id: 35, description: "Why can't Fitzgerald write ME a love letter?"}
])
Follow.create!([
  {user_id: 1, board_id: 1},
  {user_id: 2, board_id: 2},
  {user_id: 1, board_id: 2},
  {user_id: 1, board_id: 4},
  {user_id: 1, board_id: 3},
  {user_id: 1, board_id: 5},
  {user_id: 2, board_id: 6},
  {user_id: 1, board_id: 6},
  {user_id: 1, board_id: 7}
])


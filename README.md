# Pinly

[Heroku link][heroku]

[heroku]: https://pinly.herokuapp.com/

## Minimum Viable Product
Pinly is a clone of Pinterest built on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create boards (collections of visual bookmarks)
- [ ] Create pins (visual bookmarks)
- [ ] View boards and pins (your own and made by others)
- [ ] Subscribe/Unsubscribe to boards ("follow")
- [ ] View a feed of pins drawn from subscribed boards
- [ ] Re-pin someone else's pin to a personal board
- [ ] "Like" a pin
- [ ] Search for pins through key words

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Basic Boards and Pins (~2 days)
* Implement user authentication in Rails based on the practices learned at App Academy

* Implement Boards (full CRUD functionality) using barebones Rails views.

* Implement Pins (full CRUD functionality) using barebones Rails views.
	* Leave out the ability to load images at this stage!

* Implement Likes for Pins (Create, Destroy); test in Rails view.

* Ensure Pin created by user A can be *repinned* by user B

* Create ability to "follow" other boards. Use rails user-show-page to output list of "followed boards."

* Deploy to Heroku and ensure that everything continues to work.

* Integrate `filepicker` to allow image uploads; images will be used on individual pins and for user avatars.  Images should be uploaded to Amazon S3 server.  Test in rails view to ensure proper implementation.  Redeploy to Heroku.  This will be the most challenging aspect of the first two days.

[Details][phase-one]

### Phase 2: JSON API and Port to Backbone Views (~2 days)

* Refactor Views into JSON API using jBuilder
	* ensure data is appropriately nested!

* Build underlying Backbone infrastructure in order to accomodate composite views, swap-views, etc.

* Build models, collections, and views in Backbone

* Build root static page and navbar

* Basic styling on login and sign up Rails views

* Begin initial styling on Backbone views using CSS. Use jQuery plugin `masonry` or `freewall` in order to display pin-show views in grid like structure

* At the end of this phase, I expect to see:

	* navbar with Brand and Sign Out button

	* User profile pages which feature an avatar and links to boards
	
		* boards of other users should have a "follow" button which triggers a follow; should visually show the change

	* Board view which features the title of the Board, the creator's username

	* Hover over pins that we did not create and we should see a Like icon

		* clicking should trigger a like; should visually show the change

[Details][phase-two]

### Phase 3: Creating/Editing Boards, Uploading Pins, Repinning Pins, and Pinning from third party site (~2 days)

* Create fixed (+) icon button in bottom left of screen with popout view containing pinning options

* Create Form Views (Modals) for creating a new Board and for Uploading an image and creating a new pin

* Create hover "Pin" button which appears over other users' pins

* Create Form in which user can input a website address, images are scraped, and the user is asked which he or she would like to pin.  ** This seems tricky and I anticipate it will take some time ** 

* Ensure Forms have appropriate submit, cancel buttons -- as well as cancel through "Blur"

[Details][phase-three]

### Phase 4: User Feeds (~1 days)

* Add user "feed" route that uses current user's `followed` association to serve a list of Pins in reverse-chronological order.

* Create FeedPins collection which fetches from the new route

* Create a FeedShow view that uses the new collection

* Ensure this is the first page that Users see

[Details][phase-four]

### Phase 5: Searching for Pins (~1 days)

* navbar will need a search bar which takes text input, parses it into individual words

* I'll need a search route which accepts a query in the params

* the controller will have to query the database to find all pins who's description match the query-string words

* the user's feed should be populated with the search results

* visually the search bar should parse each word individually, color coat it, and add a cancel button -- much like the real pinterest

[Details][phase-five]

### Phase 6: More Styling and Seed Material

* CSS

* jQuery Animations

* Unique Seed Data

* This is to ensure I don't go too far without a minimum viable product

### High Priority Bonus Features
- [ ] friendships and private messages, notifications
	* create a UserFriendship model 
	* generate user_friendship controller to create new pending user_friendships
	* user can accept (change state to "accepted") or decline (destroy userfriendship)
	* users will be able to send messages directly to other users if user_friendship.state == "accepted"

- [ ] Ability to select geographic location when creating a pin; map view for boards with pins representing the locations

### Low Priority Bonus Features
- [ ] dragable boards on your own user page
- [ ] Custom urls for users and boards


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md


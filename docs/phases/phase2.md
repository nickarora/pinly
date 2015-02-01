# Phase 2: JSON API and Port to Backbone Views

## Rails
### Models

### Controllers
* Move the following controllers under api subfolder/namespace
	* BoardsController (create, new, edit, update, destroy, show)
	* PinsController (new, create, destroy)
	* BoardPinsController (create, edit, update, destroy)
	* FollowController (create, destroy)
	* HeartController (create, destroy)

### Views
* users/show.json.builder
* boards/index.json.builder
* boards/show.json.builder
* boardpins/index.json.builder
* boardpins/show.json.builder
* Static Page: root for Backbone app (add navbar)

## Backbone
### Models
* Board (parses boardpins)
* Pin
* BoardPin (parses board, owner, and pin)
* User (parses boards)
* Follow
* Heart

### Collections
* Boards
* Pins
* BoardPins
* Hearts
* Follows

### Views
* UserShow (composite view, contains BoardIconShow subview)
* BoardIconShow
* BoardShow (composite view, contains PinCardShow subview)
* PinCardShow (composite view, contains HeartIconShow)
* PinShow (large Pin view)
* HeartIconShow

## Gems/Libraries

 # Phase 1: User Authentication, Basic Blogs and Posts

## Rails
### Models
* User
* Session
* Board
* Pin
* BoardPin
* Follow
* Heart

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* BoardsController (create, new, edit, update, destroy, show)
* PinsController (new, create, destroy)
* BoardPinsController (create, edit, update, destroy)
* FollowController (create, destroy)
* HeartController (create, destroy)

### Views
#### Barebones (text only)
* users/new.html.erb
* users/show.html.erb ==> show current_user's boards
* session/new.html.erb

* boards/new.html.erb
* boards/edit.html.erb
* boards/show.html.erb ==> show associated pins, through boardpins

* pins/new.html.erb ==> create a new pin

* pins/:pin_id/boardpin/new.html.erb ==> select board, select pin, write description, save
* pins/:pin_id/boardpin/edit.html.erb
* pins/:pin_id/boardpin/show.html.erb 


## Backbone
### Models

### Collections

### Views

## Gems/Libraries
* filepicker

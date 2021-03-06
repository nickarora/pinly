json.(notification, :id, :status, :message, :created_at, :updated_at)

json.boardpin do
	json.partial! "api/boardpins/boardpin", boardpin: notification.boardpin
end

json.board do
	json.partial! "api/boards/board", board: notification.board
end

json.pin do
	json.partial! "api/pins/pin", pin: notification.pin
end

json.user do
	json.partial! "api/users/user", user: notification.user
end

json.receiver do
	json.partial! "api/users/user", user: notification.receiver
end

@pinner = notification.user.fname.capitalize + " " + notification.user.lname.capitalize
json.pinner @pinner


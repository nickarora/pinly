json.partial!("user", user: @user)

unless(@boards.empty?)
  json.boards(@boards) do |board|
    json.partial! "api/boards/board", board: board
    
    follow = Follow.find_by(board_id: board.id, user_id: current_user.id)
    unless (!follow)
			json.follow do
				json.partial! "api/follows/follow", follow: follow
			end
		end

  end
end
json.partial!("user", user: @user)

json.boardCount @board_count
json.pinCount @pin_count
json.likeCount @like_count
json.followerCount @follower_count
json.followedCount @followed_count

unless(@boards.empty?)
  json.boards(@boards) do |board|
    json.partial! "api/boards/board", board: board

    follow = Follow.find_by(board_id: board.id, user_id: current_user.id)
    unless (!follow)
			json.follow do
				json.partial! "api/follows/follow", follow: follow
			end
		end

		boardpins = board.boardpins.limit(4).order(id: :desc)
		unless (boardpins.empty?)
			json.pins(boardpins) do |boardpin|
				json.partial! "api/pins/pin", pin: boardpin.pin
			end
		end

  end
end
json.partial!("board", board: @board)

json.pinner @pinner

unless (!@follow)
	json.follow do
		json.partial! "api/follows/follow", follow: @follow
	end
end

json.user do
	json.partial! "api/users/user", user: @user
end

unless(@pins.empty?)
  json.pins(@pins) do |pin|
    json.partial! "api/pins/pin", pin: pin
  end
end

unless (@boardpins.empty?)
	json.boardpins(@boardpins) do |boardpin|
		json.partial! "api/boardpins/boardpin", boardpin: boardpin
	end
end
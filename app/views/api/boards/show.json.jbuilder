json.partial!("board", board: @board)

json.pinner @pinner

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
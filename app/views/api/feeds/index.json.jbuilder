json.page @page
json.total_pages @total_pages

unless(@boardpins.empty?)

  json.members(@boardpins) do |boardpin|

		json.partial! "api/boardpins/boardpin", boardpin: boardpin

		json.pin do
			json.partial! "api/pins/pin", pin: boardpin.pin
		end

		json.board do
			json.partial! "api/boards/board", board: boardpin.board
		end

		json.user do
			json.partial! "api/users/user", user: boardpin.board.user
		end

		@pinner = boardpin.board.user.fname.capitalize + " " + boardpin.board.user.lname.capitalize

		json.pinner @pinner

		if boardpin.comments
			json.comments(boardpin.comments) do |comment|
				json.partial! "api/comments/comment", comment: comment
			end
		end

	end
end
json.(boardpin, :id, :board_id, :pin_id, :description, :created_at, :updated_at)

liked = Like.find_by(boardpin_id: boardpin.id, user_id: current_user.id)
if liked
	json.liked do
		json.partial! "api/likes/like", like: liked
	end
end

num_liked = Like.where(boardpin_id: boardpin.id).count
json.numLiked num_liked

if boardpin.comments
	json.comments(boardpin.comments) do |comment|
		json.partial! "api/comments/comment", comment: comment
	end
end

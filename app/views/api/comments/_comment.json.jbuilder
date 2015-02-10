json.(comment, :id, :boardpin_id, :user_id, :body)

json.user do
	json.partial! "api/users/user", user: comment.user
end
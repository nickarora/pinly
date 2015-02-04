json.partial!("user", user: @user)

unless(@boards.empty?)
  json.boards(@boards) do |board|
    json.partial! "api/boards/board", board: board
  end
end

json.logged_in @logged_in
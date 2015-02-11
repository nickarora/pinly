unless (@notifications.empty?)
  json.array!(@notifications) do |notification|
  	json.partial! "api/notifications/notification", notification: notification
  end
end
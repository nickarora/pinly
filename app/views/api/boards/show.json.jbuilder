json.partial!("board", board: @board)

unless(@pins.empty?)
  json.pins(@pins) do |pin|
    json.partial! "api/pins/pin", pin: pin
  end
end
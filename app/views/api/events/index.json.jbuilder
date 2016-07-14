@events.each do |event|
  json.set! event.id do
    json.extract! event, :title,:location,:category,:description,:picture_url,
    :price,:start_date ,:end_date,:start_time,:end_time,:user_id,:id
  end
end

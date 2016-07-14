json.array! @relationships do |relationship|
    json.extract! relationship, :show_id, :purchaser_id
end

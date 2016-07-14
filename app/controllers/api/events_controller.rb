class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render "api/events/index"
  end

  def create

    @event = Event.create(event_params)
    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 404
    end
  end

  private

  def event_params
    params.require(:event).permit(
    :title,:location,:category,:description,:picture_url,:price,:start_date,:end_date,:start_time,:end_time,:user_id)
  end
end

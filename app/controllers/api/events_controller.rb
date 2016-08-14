class Api::EventsController < ApplicationController
  def index
    @events = Event.all.upcoming_shows(DateTime.now())

    if(ticketed_shows)
      @events = @events.user_shows(current_user)
    end

    if(bounds)
      @events = @events.in_bounds(bounds)
    end
    
    if(date_params && date_params != 'All Dates')
      @events = @events.sort_date(date_params)
    end

    if(category_params && category_params != 'All Category')
      @events = @events.category(category_params)
    end
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
    :title,:location,:category,:description,:picture_url,:price,:start_date,:end_date,
    :start_time,:end_time,:user_id,:lat,:lng)
  end

  def date_params
    params[:date]
  end

  def category_params
    params[:category]
  end

  def bounds
    params[:bounds]
  end

  def ticketed_shows
    params[:ticketed_shows]
  end
end

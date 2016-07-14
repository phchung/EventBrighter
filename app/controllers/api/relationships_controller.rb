class Api::RelationshipsController < ApplicationController

  def index
    @relationships = Relationship.all
    render 'api/relationships/index'
  end

  def create
    @relationship = Relationship.create(relationship_params)
    if @relationship.save
      render '/api/relationships/show'
    end
  end

  def destroy
    @relationship = Relationship.find_by_credentials(
    params[:relationship][:show_id],
    params[:relationship][:purchaser_id]
    )

    render :show if @relationship.destroy
  end

  private

  def relationship_params
    params.require(:relationship).permit(
    :show_id,:purchaser_id
    )
  end
end

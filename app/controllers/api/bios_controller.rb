class Api::BiosController < ApplicationController
  def index
    render json: current_user.bio
  end

  def create
    @bio = current_user.create_bio(bio_params)
    if @bio.save
      render json: @bio
    else
    end

  end

  private

  def bio_params
    params.require(:bio).permit(:profile_image, :description)
  end
end

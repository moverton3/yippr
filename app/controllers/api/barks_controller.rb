class Api::BarksController < ApplicationController
  def create
    # binding.pry
    # @bark = current_user.create_bark(bark_params)
    @bark = Bark.new(user_id: current_user.id, content: bark_params[:content])
    if @bark.save
      render json: @bark
    end
  end

  def destroy
  end

  private
  def bark_params
    params.require(:bark).permit(:content)
  end
end

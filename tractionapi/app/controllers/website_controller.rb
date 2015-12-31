class WebsiteController < ActionController::API
  def index
    render json: Website.all
  end

  def show
    @website = Website.find(params[:id])
    render json: @website
  end
end

class WebsiteController < ActionController::API
  def index
    render json: Website.all
  end

  def show
    @website = Website.find(params[:id])
    render json: @website
  end

  def update
    website = Website.find_by(rank: params[:rank])
    if website.update(website_params)
      render nothing: true, status: 200
    else
      render nothing: true, status: 500
    end
  end

  private

  def website_params
    params.permit(:url, :page_views_per_user, :page_views_per_million)
  end
end

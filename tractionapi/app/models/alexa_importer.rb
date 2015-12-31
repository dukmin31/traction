class AlexaImporter
  def run(quantity)
    byebug
    session.top_sites.global(quantity).each do |website|
      Website.create!(url: website.url,
                           rank: website.rank,
                           page_views_per_user: website.page_views_per_user,
                           page_views_per_million: website.page_views_per_million)
    end
  end

  private

  def session
    byebug
    # ENV['AWS_ACCESS_KEY_ID'].prese
    # ENV['AWS_SECRET_ACCESS_KEY']
		Ralexa.session(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
  end

end

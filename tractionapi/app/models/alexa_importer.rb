class AlexaImporter
  def run(quantity)
    session.top_sites.global(quantity).each do |website|
      Website.create!(url: website.url,
                      rank: website.rank,
                      reach: website.reach,
                      page_views_per_user: website.page_views_per_user,
                      page_views_per_million: website.page_views_per_million)
    end
  end

  private

  def session
    Ralexa.session(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
  end
end

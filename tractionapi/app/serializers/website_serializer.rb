class WebsiteSerializer < ActiveModel::Serializer
  attributes :id, :url, :rank, :reach , :page_views_per_user, :page_views_per_million
end

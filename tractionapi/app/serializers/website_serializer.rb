class WebsiteSerializer < ActiveModel::Serializer
  attributes :id, :rank, :url, :page_views_per_user, :page_views_per_million
end

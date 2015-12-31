FactoryGirl.define do
  factory :website do
    sequence(:url) { |_n| 'https://n.com' }
    sequence(:reach) { rand(1..100) }
    sequence(:page_views_per_million) { rand(1..100) }
    sequence(:page_views_per_user) { rand(1..100) }
    rank { rand(1..100) }
  end
end

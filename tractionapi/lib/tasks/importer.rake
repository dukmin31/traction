namespace :importer do
  task run: :environment do
    Website.delete_all
    AlexaImporter.new.run(100)
  end
end

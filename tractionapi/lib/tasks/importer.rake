namespace :importer do
	task reset: :environment do
    Website.delete_all
    AlexaImporter.new.run(100)
	end
end

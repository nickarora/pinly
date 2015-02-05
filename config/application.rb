require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Pinly
  class Application < Rails::Application
    config.assets.paths << "#{Rails}/vendor/assets/fonts"
    config.filepicker_rails.api_key = "AUN04j7hR4GFXVkpz74tdz"
  end
end

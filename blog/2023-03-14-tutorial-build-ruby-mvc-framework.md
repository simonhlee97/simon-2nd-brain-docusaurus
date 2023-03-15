---
slug: tutorial-ruby-mvc-framework
title: Build a small Ruby MVC Framework
author: Simon
author_title: web developer
author_url: https://github.com/simonhlee97
author_image_url: https://github.com/simonhlee97.png
tags: [ruby, tutorial]
---

#### Pre-requisites:
- Ruby programming basics
- Familiar with Terminal (command line intervals)
- Ruby, RubyGems, and Bundler installed on computer
- To check if these are installed, you can run:
  - `ruby --version`
  - `gem --version`
- To upgrade RubyGems: `gem update --system`

1. run this command: `bundle gem my_ruby_mvc`
2. open the project in an editor (e.g. VS Code)
3. check the .gemspec file. Make sure you edit all the TODOs.
4. In the .gemspec file, add `spec.add_dependency "rack"` before the closing end
5. Open the file `my_ruby_mvc.rb`, and begin building your application inside the module.
6. `gem build mymvc.gemspec` to build your gem
7. `gem install mymvc-0.0.1.gem` to install your gem
8. In your (e.g. Blog) project directory (which should be beside your mvc-framework directory), create a Gemfile and include the gem 'myruby'
9. run `bundle` to install your mvc-framework into your app
10. From your app's directory, try to launch the server by running `rackup`, and you should see a warning that says "config.ru file not found" (ru is the file extension for Rackup).
11. Create the `config.ru` file
12. Also create a config directory, and an `application.rb` file inside config/
13. 
---
id: 09-rails-cookbook
title: Rails Cookbook
---

## Seed database with ruby-faker

```ruby
require 'faker'

# Create some example users using the Faker gem
20.times do
  Profile.create(
    f_name: Faker::Name.unique.first_name,
    l_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.email,
    phone: Faker::PhoneNumber.cell_phone,
    company: Faker::Company.industry,
    avatar: Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg"),
    fav_movie: Faker::Movie.title,
    height: Faker::Number.between(from: 40, to: 90),
    weight: Faker::Number.between(from: 50, to: 300),
    income: Faker::Number.between(from: 10000, to: 10000000),
  )
end
puts "Seed data created successfully!"
```

[faker-ruby](https://github.com/faker-ruby/faker#generators)

## A simple helper method that uses a loop to generate some html.

```ruby
def tabs_builder(page_id)
  tabs = ['home', 'about', 'faq', 'content']
  content = ""
  tabs.each do |tab|
    content << if page_id == tab
      content_tag('li', content_tag('a', tab, :href => nil ), :class => 'current') + " "
    else
      content_tag('li', content_tag('a', tab, :href => "/#{tab}" )) + " "
    end
  end
  content
end
```

All the tabs need to be defined in your Controller.

```ruby
def faq
  @page_id = 'faq'
end

def about
  @page_id = 'about'
end
# ...
```

then in your view, you can use the tabs_builder helper:
```html
<ul>
  <%= menu_builder(@page_id) %>
</ul>
```

This example is a Ruby way of generating html (on the server), sort of like generating html with JavaScript, albeit client-side.
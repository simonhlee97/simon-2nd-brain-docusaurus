---
id: 01-rails-notes
title: Rails Notes
---
![rails logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/320px-Ruby_On_Rails_Logo.svg.png)
## Useful Rails Snippets

### A simple helper method that uses a loop to generate some html.

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
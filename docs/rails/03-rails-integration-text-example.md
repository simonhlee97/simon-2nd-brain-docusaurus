---
id: 03-rails-integration-test
title: Rails Integration Test Example
---
![rails logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/320px-Ruby_On_Rails_Logo.svg.png)
## My First Rails Integration Test!

Not surprisingly, Rails makes it quite easy to scaffold tests. For integration tests, all it takes is:

`$ rails g integration_test site_layout` from the command line.

```ruby
require "test_helper"

class SiteLayoutTest < ActionDispatch::IntegrationTest
  get root_path
  assert_template 'static_pages/home'
  assert_select "a[href=?]", root_path, count: 2
  assert_select "a[href=?]", help_path
  assert_select "a[href=?]", about_path
end
```
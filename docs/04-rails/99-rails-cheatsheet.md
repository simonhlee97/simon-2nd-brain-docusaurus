---
id: rails-cheatsheet
title: Rails cheatsheet
---
![rails logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/320px-Ruby_On_Rails_Logo.svg.png)

### Starting a Rails project with postgres from the beginning:
`rails new my_app_name --database=postgresql`

### Convert a string to a hash:
`result_new = JSON.parse(result, symbolize_names: true)`

### import an npm package (example with [local-time](https://www.npmjs.com/package/local-time)) to importmap
`./bin/importmap pin local-time` (links to local-time library via the ga.jspm.io CDN)
`./bin/importmap pin local-time --download` (to download it locally)


`rails c --sandbox`
To test models, e.g. CRUD records, but will not persist in the database (upon exiting)

### customize the Email label in ApplicationMailer
```ruby
class ApplicationMailer < ActionMailer::Base
  default from: 'Simon Store <simon@example.com>'
  layout 'mailer'
end
```
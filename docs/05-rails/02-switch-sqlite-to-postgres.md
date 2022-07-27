---
id: 02-switch-sqlite-to-postgres
title: 02-Switch-to-Postgres
---
![rails logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/320px-Ruby_On_Rails_Logo.svg.png)

### Switching from sqlite to Postgres DB in a Rails Project

(this guide is for Mac users)

* update your Gemfile
  * ~~gem 'sqlite3'~~
  * `gem 'pg'`
  * run `bundle`
* update database.yml

```
development:
  adapter: postgresql
  encoding: unicode
  database: myappname_development
  pool: 5
  username: simon
  password:
  timeout: 5000

test:
  adapter: postgresql
  encoding: unicode
  database: myappname_test
  pool: 5
  username: simon
  password:
  timeout: 5000
```

* go through migration files and replace all `t.string` with `t.text`
* run `rails db:setup`
* run `rails db:migrate`
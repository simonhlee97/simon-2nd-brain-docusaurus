---
id: 05-deploy-rails-app-to-fly
title: Deploy Rails App to Fly.io
---
![rails logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/320px-Ruby_On_Rails_Logo.svg.png)

After installing `flyctl`, here are the steps for deploying a Rails app to Fly.io

`flyctl auth login`

`flyctl launch` will do the initial deployment for you if you want it to, as long as the build configuration has been set.

Then run `fly deploy`. This will take a few seconds as it uploads your application, builds a machine image, deploys the images, and monitors to ensure it starts successfully.

If you visit your fly.io dashboard, under Apps, then select your app, you should see your Postgres server deployed, as well as your app.

After making changes, to update live site, run `fly deploy`.

#### Some useful `fly` and `flyctl` commands:

`fly open` will open your production site.

`flyctl info` reveals general info.

`flyctl status` shows when the application was last deployed, what version is deployed and the status of that deployment.

`fly logs` display logs and automatically wait for new log entries.

`fly config display -a my-app-name` view app's configuration

## Resources

- [Deploy Rails app to Fly](https://guides.railsgirls.com/deployment/fly-io)
- 
---
id: 04-rails-react-starter
title: Quick Start React with Rails-API
---
![rails logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/320px-Ruby_On_Rails_Logo.svg.png)

With the help of this [blog post](https://blog.devgenius.io/create-a-rails-api-with-react-frontend-using-hooks-and-typescript-dcb4e84c3dbf), I learned how to quickly setup a Rails API with a React Frontend.

## Setup Rails-API Backend

`rails new backend --api -T`

Add these 2 lines to Gemfile:

`gem 'rack-cors'`

`gem 'faker'`

Run `bundle` to install the gems.

Update `config/initializers/cors.rb` to allow all origins (*) to make requests:

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

As an example, scaffold a Post model and controller:

`rails g scaffold Post title:string content:text`

Migrate database:

`rails db:migrate`

##### [REST API Versioning](https://www.freecodecamp.org/news/how-to-version-a-rest-api/#:~:text=so%20let's%20recap%3A-,API%20versioning%20is%20the%20practice%20of%20transparently%20managing%20changes%20to,effective%20API%20change%20management%20principles.)

- Create new directory, `app/controllers/api/v1/`, and move `posts_controller.rb` in there.
- Change `class PostsController < ApplicationController` to `class Api::V1::PostsController < ApplicationController`.
- Under the create action, change the post location: `render json: @post, status: :created, location: api_v1_post_path(@post)`
- Update routes.rb: 
```ruby
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
end
```

Add some faker data to `seeds.rb`:

```ruby
require 'faker'

10.times do
  Post.create(
    title: Faker::Lorem.sentence,
    content: Faker::Lorem.paragraph
  )
end
```

Seed database: `rails db:seed`

Start the server: `rails s`

## Setup React Frontend

`npx create-react-app@latest frontendapp --template typescript`

#### Create a few pages

- Create directory `src/pages`
- Add a `HomePage.tsx` file in `src/pages` with some basic boilerplate:

```jsx
export const HomePage = () => {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}
```

- Create a 404 page. We'll name it `NotFoundPage.tsx`:

```jsx
export const NotFoundPage = () => (
  <>
    <h1>Not Found 404</h1>
  </>
)
```


- Add an `AboutPage.tsx` file in `src/pages` with some basic boilerplate:
```jsx
export const AboutPage = () => (
  <>
    <h1>About me</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  </>
)
```
- Install React Router: `yarn add react-router-dom`
- Update index.tsx:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```
- Update App.tsx:

```jsx
import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { NotFoundPage } from './Pages/NotFoundPage';


function App() {
  return (
    <>
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About Me</Link>
      </nav>
        
      <br />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
```

#### Create Components

Create Post interface inside `src/types/data.tsx`

```js
export interface InterfacePost {
  id?: number;
  title: string;
  content: string;
}
```

Create Post component inside `src/posts/Post.tsx`

```jsx
import { InterfacePost } from '../types/data';
export const Post = (props: InterfacePost) => (
  <>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
  </>
)
```

#### PostList Component

Create PostList component in `src/posts/PostList.tsx`

`yarn add axios` or `npm i axios`

```jsx
import { useState, useEffect } from "react"
import { Post } from "./Post"
import { PostForm } from '../Posts/PostForm'
import { InterfacePost } from "../types/data"
import axios from 'axios';

export const PostList = () => {
  const [posts, setPosts] = useState<InterfacePost[]>([])
  const [isUpdate, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    getPosts()
    setUpdate(false)
  }, [isUpdate])

  const getPosts = async () => {
    try {
      const response = await axios
        .get('http://localhost:3000/api/v1/posts')

      const data = response.data

      setPosts(data.reverse())

    } catch(error: any) {
      console.log(error)
    }
  }

  const updatePostList = (post: InterfacePost) => {
    let _posts = posts;
    _posts.unshift(post);
    setPosts(_posts);

    setUpdate(true)
  }
  
  return (
    <>
      <PostForm updatePostList={updatePostList} />
      
      <h1>Post List</h1>
      {posts.map((post: InterfacePost) => (
        <Post
          key={post.id} 
          title={post.title}
          content={post.content}
        />
      ))}
    </>
  )
}
```

#### Update HomePage.tsx
```jsx
import {PostList} from '../Posts/PostList'

export const HomePage = () => (
  <>
    <PostList />
  </>
)
```

#### PostForm Component

Use `React Hook Form` for easy form validation: 

`yarn add react-hook-form`

Create PostForm inside `src/posts/PostForm.tsx`

```jsx
import axios from "axios";
import { InterfacePost } from "../types/data"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const PostForm = (props: { updatePostList: (post: InterfacePost) => void; }) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const postData : InterfacePost = {title, content}

    try {
      const response = await axios
        .post('http://localhost:3000/api/v1/posts', {post: postData})

        props.updatePostList(response.data)
 
    } catch(error: any) {
      console.log(error)
    } 
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", {required: true})} 
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
          {errors?.title?.type === "required" && <p>This field is required</p>}
        </Form.Group> 
        
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            {...register("content", {required: true})}
            type="text"
            name="content"
            onChange={e => setContent(e.target.value)}
          />
          {errors?.content?.type === "required" && <p>This field is required</p>}
        </Form.Group><br />

        <Button variant="primary" type="submit">
          Submit
        </Button><hr />
      </Form>
    </>
  )
}
```

With the rails server running, cd into your React app and run `yarn start` and go to localhost:3001.





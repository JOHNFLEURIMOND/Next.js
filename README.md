![Next.js](pages/next.png)
![Next.js](pages/next2.png)

#🚀 My Awesome Project
Practicing Next.js and build a simple application that pulls Bitcoin pricing from an API and displays it in the app.


##📖  How It's Made:
This Application is made with Next.js and CoinDesk API for Bitcoin.

##🚨 Optimizations.
More Crypto Listed


## 💎Lessons Learned:
How to use Next.js, fetching data from the coindesk api to render Bitcoin data. Async/Await & getInitialProps.

## 💻Installation
1. Clone repo
2. run `npm install`

##📼 Usage
1. run `npm run dev`
2. Navigate to `localhost:3000`




# 📚 [Next.js](https://nextjs.org/) on Heroku

Deploy [React](https://facebook.github.io/react/)-based universal web apps on [Heroku](https://www.heroku.com/home).

**Demo deployment** from this repo:  
https://nextjs.herokuapp.com

**A custom Node/Express server** is supported. Use it to:

* combine a Node API with a Next/React UI
* implement custom URL routes

▶️ **[Next with custom Express server](https://github.com/mars/heroku-nextjs-custom-server-express)**

##🚨 Requires

* Heroku
  * [command-line tools (CLI)](https://devcenter.heroku.com/articles/heroku-command-line)
  * [a free account](https://signup.heroku.com)
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js](https://nodejs.org)
* [Next.js](https://github.com/zeit/next.js)

## Production deployment

Once you have a [Next app working locally](https://github.com/zeit/next.js#how-to-use), you may deploy it for public access.

1. Add the [`heroku-postbuild`](https://devcenter.heroku.com/articles/nodejs-support#heroku-specific-build-steps) hook to automatically build the Next app on each deployment:

   Merge this entry into **package.json**:

   ```json
   {
     "scripts": {
       "start": "next start -p $PORT",
       "heroku-postbuild": "next build"
     }
   }
   ```

   🌈 *In February 2017, [Next was fixed](https://github.com/zeit/next.js/pull/1164), so the **[Heroku build adapter](https://github.com/mars/heroku-nextjs-build/blob/master/bin/heroku-nextjs-build) is no longer required**.*
1. Ensure the app is a git repo, ignoring local-only directories:

   ```bash
   git init
   (echo node_modules/ && echo .next/) >> .gitignore
   ```
1. Create the Heroku app:

   ```bash
   heroku create $APP_NAME
   ```
1. 🚀 Deploy:

   ```bash
   git add .
   git commit -m 'Next.js app on Heroku'
   git push heroku master
   ```
1. ♻️ Deploy changes: add, commit, & push again.

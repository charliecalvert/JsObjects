# `create-react-app` with a Server

This project uses `create-react-app` and a Node Express server.

## References

There is a [detailed blog post](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/) that explains some of this project.

```
npm i

cd client
npm i

cd ..
npm start
```

The app uses [concurrently](https://github.com/kimmobrunfeldt/concurrently). Executing `npm start` instructs `concurrently` boots both the client and server.


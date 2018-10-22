import app from './App';

const port: any = process.env.PORT || 3000

app.listen(port, (err: any) => {
    if(err) {
        return console.error(err)
    }

    console.log(`listening on port ${port}`)
})


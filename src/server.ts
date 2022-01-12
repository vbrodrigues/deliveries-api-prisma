import express from 'express';


const app = express();


app.get('/', (request, response) => {
    return response.json({
        success: true,
        status: 'ok'
    })
})

app.listen(5000, () => {
    console.log('Server started!')
});
import { Hono } from 'hono'

const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/hello', (c) => {
        return c.json({
                ok: true, 
                message: "hello, hono!"
        });
});

app.get('/posts/:id', (c) => {
        // チュートリアルにあるが取得できなかった
        // const page = c.req.query('page')
        const path = c.req.path
        const id = c.req.param('id')
        c.header('X-Message', 'Hi!')
        return c.text(`You want to see ${path}. Id is ${id}`)
})

app.post('/posts', (c) => c.text('Created!', 201))
app.delete('posts/:id', (c) => 
           c.text(`${c.req.param('id')} is deleted!`)
)

// 動かすの試せてない
app.get('/raw', () => {
        return new Response('Good morning!')
})

export default app

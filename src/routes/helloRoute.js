export const helloRoute = {
    path: '/hello',
    method: 'get',
    handler: async (req,res) => {
        res.send("Hello!");
    },
}
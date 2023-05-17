import business from '../business/business.container';

const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/posts/:id', async (request, response, next) => {
        try {
            const id = request.params.id
            console.log(id);
            let result = await business.getPostManager().get(id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

};
export default postEndpoint;

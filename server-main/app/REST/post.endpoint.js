import business from '../business/business.container';

const  postEndpoint = (router) => {

    router.get('/api/posts', async (request, response, next) => {
        try {
            const result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (e) {
            console.error(e);
        }
    });

    router.post('/api/posts', async (request, response, next) => {
        try {
            console.log('request.body');
            const result = await business.getPostManager().createNewOrUpdate(request.body)
            response.status(201).send(result);
        } catch (e) {
            console.error(e);
        }
    });

}

export default postEndpoint;

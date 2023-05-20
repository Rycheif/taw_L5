import postDAO from "../DAO/postDAO";

function create(context) {

    async function query() {
        const result = await postDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        const result = await postDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        const result = await postDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    return {
        query,
        get,
        createNewOrUpdate
    }

}

export default {
    create
};

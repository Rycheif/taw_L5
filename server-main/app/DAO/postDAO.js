import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoConverter from "../service/mongoConverter";
import _ from "lodash";

const postSchema = new mongoose.Schema({
        title: {type: String},
        image: {type: String},
        text: {type: String},
    },
    {
        collection: '34267-post'
    });

postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('post', postSchema);

async function query() {
    const result = await PostModel.find({});
    if (result) {
        return mongoConverter(result);
    }
}

async function get(id) {
    return PostModel.findOne({_id: id}).then(result => {
        if (result)
            return mongoConverter(result);
    })
}

async function createNewOrUpdate(data) {
    return Promise.resolve()
        .then(() => {
            if (!data.id) {
                return new PostModel(data).save()
                    .then(result => {
                        if (result[0]) {
                            return mongoConverter(result[0]);
                        }
                    });
            } else {
                return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
            }
        });
}

export default {
    query,
    get,
    createNewOrUpdate,

    model: PostModel
};

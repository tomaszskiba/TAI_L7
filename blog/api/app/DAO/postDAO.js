const postSchema = new mongoose.Schema({
    title: {type: String},
    url: {type: Number},
    content: {type: String},
}, {
    collection: 'post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('product', postSchema );
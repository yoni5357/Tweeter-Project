class Tweeter{
    #postArray
    #postIdCounter
    #commentIdCounter

    constructor(){
        this.#postArray = []
        this.#postIdCounter = 0;
        this.#commentIdCounter = 0;
    }

    getPosts(){
    return [...this.#postArray];
    }

    addPost(text){
        const newPost = {text: text, id:"p" + ++this.#postIdCounter, comments:[]};
        this.#postArray.push(newPost);
    }

    removePost(postID){
        this.#postArray = this.#postArray.filter((post) => post.id !== postID);
    }

    addComment(postID, text){
        let post = this.#getPost(postID);
        post.comments.push({id:"c" + ++this.#commentIdCounter, text: text});
    }

    removeComment(postID, commentID){
        let post = this.#getPost(postID);
        post.comments = post.comments.filter((comment) => comment.id !== commentID);
    }

    #getPost(postID){
        return this.#postArray.find((post) => post.id === postID);
    }
}

export default Tweeter;
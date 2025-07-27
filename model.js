class Tweeter{
    #postArray
    #postIdCounter
    #commentIdCounter

    constructor(){
        this.#postArray = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't worry second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]
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
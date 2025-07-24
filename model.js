let postArray = [
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
];

let postIdCounter = 0;
let commentIdCounter = 0;

export function getPosts(){
    return [...postArray];
}

export function addPost(text){
    let newPost = {text: text, id:"p" + ++postIdCounter, comments:[]};
    postArray.push(newPost);
}

export function removePost(postID){
    postArray = postArray.filter((post) => post.id !== postID);
}

export function addComment(postID, text){
    let post = getPost(postID);
    post.comments.push({id:"c" + ++commentIdCounter, text: text});
}

export function removeComment(postID, commentID){
    let post = getPost(postID);
    post.comments = post.comments.filter((comment) => comment.id !== commentID);
}

function getPost(postID){
    return postArray.find((post) => post.id === postID);
}

import Tweeter from "./model.js";
import Renderer from "./render.js";

const tweeter = new Tweeter();
const renderer = new Renderer();

function handleAddPost(){
    let input = document.getElementById('twit-input');
    let text = input.value;
    tweeter.addPost(text);
    renderer.renderPosts(tweeter.getPosts());
}

function handleAddComment(postId, text){
    tweeter.addComment(postId, text);
    renderer.renderPosts(tweeter.getPosts());
}

function handleDeletePost(postId){
    tweeter.removePost(postId);
    renderer.renderPosts(tweeter.getPosts());
}

function handleDeleteComment(postId,commentId){
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
}

document.addEventListener('click', function(event) {
        const postId = event.target.getAttribute('data-post-id');
        const commentId = event.target.getAttribute('data-comment-id');

        if (event.target.matches('.comment-button')) {
            let inputs = document.getElementsByClassName('comment-input');
            let input = [...inputs].filter((input) => input.getAttribute('data-post-id') === postId)[0];
            handleAddComment(postId, input.value);
            input.innerHTML = '';
        }

        else if(event.target.matches('.delete-post-button')) {
            handleDeletePost(postId);
        }

        else if(event.target.matches('.delete-comment')){
            handleDeleteComment(postId, commentId);
        }

    }
)

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('twit-button').addEventListener('click', handleAddPost);
    renderer.renderPosts(tweeter.getPosts());
})
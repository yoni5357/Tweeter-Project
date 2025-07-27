class Renderer{
    renderPosts(posts){
        let postsElement = document.getElementById('posts');
        postsElement.innerHTML = "";
        for(let post of posts){
            let postDiv = document.createElement('div');
            postDiv.setAttribute("data-id", `${post.id}`);
            postDiv.className = "post";

            let postTextDiv = document.createElement('div');
            postTextDiv.textContent = post.text;
            postTextDiv.className = "post-text";
            postDiv.appendChild(postTextDiv);

            let postCommentsDiv = document.createElement('div');
            for(let comment of post.comments){
                let commentDiv = document.createElement('div');
                commentDiv.setAttribute('data-id', `${comment.id}`);
                commentDiv.className = "comment";

                let commentP = document.createElement('p');
                commentP.textContent = `${comment.text}`;

                let deleteCommentP = document.createElement('p');
                deleteCommentP.textContent = "X";
                deleteCommentP.className = "delete-comment"

                commentDiv.appendChild(deleteCommentP);
                commentDiv.appendChild(commentP);

                postCommentsDiv.appendChild(commentDiv);

                postDiv.appendChild(postCommentsDiv);
            }

            let commentInputDiv = document.createElement('div');
            commentInputDiv.className = "comment-input-container";

            let commentInput = document.createElement('input');
            commentInput.type = "text";
            commentInput.placeholder = "Got something to say?";
            commentInput.className = "comment";

            let commentButton = document.createElement('button');
            commentButton.className = "comment-button";
            commentButton.textContent = "Comment"

            commentInputDiv.appendChild(commentInput);
            commentInputDiv.appendChild(commentButton);

            let deletePostButton = document.createElement('button');
            deletePostButton.className = "delete-button";
            deletePostButton.textContent = "Delete Post";

            postDiv.appendChild(commentInputDiv);
            postDiv.appendChild(deletePostButton);

            postsElement.appendChild(postDiv);

        }
    }
}


export default Renderer;
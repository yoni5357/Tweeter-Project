class Renderer{
    renderPosts(posts){
        let postsElement = document.getElementById('posts');
        postsElement.innerHTML = "";
        for(let post of posts){
            let postDiv = document.createElement('div');
            postDiv.attributes.setNamedItem("data-id", `${post.id}`);
            postDiv.className = "post";

            let postTextDiv = document.createElement('div');
            postTextDiv.textContent = post.text;
            postTextDiv.className = "post-text";
            postDiv.appendChild(postTextDiv);

            let postCommentsDiv = document.createElement('div');
            for(let comment of post.comments){
                let commentDiv = document.createElement('div');
                commentDiv.attributes.setNamedItem('data-id', `${comment.id}`);
                commentDiv.className = "comment";

                let deleteCommentDiv = document.createElement('div');
                deleteCommentDiv.textContent = "X";
                deleteCommentDiv.className = "delete-comment"

                postCommentsDiv.appendChild(commentDiv);
                postCommentsDiv.appendChild(deleteCommentDiv);

                postDiv.appendChild(postCommentsDiv);
            }

            let commentInputDiv = document.createElement('input');
            commentInputDiv.type = "text";
            commentInputDiv.placeholder = "Got something to say?";
            commentInputDiv.className = "comment";

            let commentButton = document.createElement('button');
            commentButton.className = "comment-button";

            postDiv.appendChild(commentInputDiv);
            postDiv.appendChild(commentButton);
        }
    }
}
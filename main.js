import Tweeter from "./model.js";
import Renderer from "./render.js";

const tweeter = new Tweeter();
const renderer = new Renderer();
document.addEventListener('DOMContentLoaded', () => {
    renderer.renderPosts(tweeter.getPosts());
})
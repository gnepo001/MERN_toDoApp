import axios from "axios";

const url = BACKEND_SERVER_PORT"/posts"; // EDIT THIS LINE WITH OWN SERVER PORT, RENAME this File to "index.js"

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
//ie: =>{return axois.post(...)}

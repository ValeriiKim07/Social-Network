import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you", likeCount: 15 },
    {
      id: 2,
      message: "It`s my first post?",
      likeCount: 32,
    },
  ],
};

it("post length should be incremented", () => {
  let action = addPost("kim test");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("post message 3 should be kim test", () => {
  let action = addPost("kim test");

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("kim test");
});

it("length after deleting shouldn`t be decremented if id is incorrect", () => {
  let action = deletePost(122);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

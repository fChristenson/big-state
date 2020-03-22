export interface IFollower {
  id: string;
  userId: string;
  name: string;
}

export interface IUser {
  id: string;
  commentId: string;
  name: string;
  followers: IFollower[];
}

export interface IComment {
  id: string;
  postId: string;
  comment: string;
  user: IUser;
}

export interface IPost {
  id: string;
  name: string;
  comments: IComment[];
}

export interface IState {
  data: IPost[];
  posts: { [key: string]: IPost };
  comments: { [key: string]: IComment };
  users: { [key: string]: IUser };
  followers: { [key: string]: IFollower };
}

export enum ActionType {
  SET_DATA = "SET_DATA"
}

interface IAction {
  type: ActionType;
  payload: any;
}

export const initState: IState = {
  data: [],
  posts: {},
  comments: {},
  users: {},
  followers: {}
}

export const reducer = (state: IState = initState, action: IAction) => {
  switch (action.type) {
    case ActionType.SET_DATA:
      const newState: IState = Object.assign({}, state, { data: action.payload });

      // we should be doing this on the server
      newState.data.forEach(d => {
        const post = { ...d };
        newState.posts[post.id] = post;

        d.comments.forEach(c => {
          const comment = { ...c, postId: post.id };
          const user = { ...c.user, commentId: comment.id };

          newState.comments[comment.id] = comment;
          newState.users[user.id] = user;

          c.user.followers.forEach(f => {
            const follower = { ...f, userId: user.id }
            newState.followers[follower.id] = follower;
          });

          delete post.comments;
          delete comment.user;
          delete user.followers;
        });
      });

      return newState;

    default:
      return state;
  }
}

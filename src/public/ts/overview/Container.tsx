import React from "react";
import axios from "axios";
import { Overview as Component } from "./Overview";
import { useSelector, useDispatch } from "react-redux";
import { ActionType, IComment, IPost } from "./duck";
import { IAppState } from "../main";

const limit = 50;

export const Overview: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { posts, comments, data, followers } = useSelector((state: IAppState) => state.overview)

  const onLoadMore = () => {
    axios
      .get(`/data?offset=${data.length}&limit=${limit}`)
      .then(r => r.data)
      .then(loaded => dispatch({ type: ActionType.SET_DATA, payload: data.concat(loaded) }));
  }

  React.useEffect(() => {
    if (data.length > 0) return;

    axios
      .get(`/data?offset=0&limit=${limit}`)
      .then(r => r.data)
      .then(data => dispatch({ type: ActionType.SET_DATA, payload: data }));
  });

  // if we want to optimize this even more we can consider if direct access is more common than listing of data
  const allPosts = Object.values(posts);
  const totalPosts = allPosts.length || data.length;
  const totalFollowers = Object.values(followers).length || data.reduce((acc: number, p: IPost) => acc + p.comments.reduce((acc: number, c: IComment) => c.user.followers.length + acc, 0), 0);
  const totalComments = Object.values(comments).length || data.reduce((num: number, p: IPost) => p.comments.length + num, 0);

  return <Component
    posts={allPosts}
    onLoadMore={onLoadMore}
    totalPosts={totalPosts}
    totalFollowers={totalFollowers}
    totalComments={totalComments}
  />;
};

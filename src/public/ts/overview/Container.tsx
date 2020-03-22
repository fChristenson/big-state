import React from "react";
import axios from "axios";
import { Overview as Component } from "./Overview";
import { useSelector, useDispatch } from "react-redux";
import { ActionType } from "./duck";
import { IAppState } from "../main";

const limit = 50;

export const Overview: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: IAppState) => state.overview.data)

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

  return <Component data={data} onLoadMore={onLoadMore} />;
};

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "../components/Container";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import {
  postFetchError,
  postFetchLoading,
  postFetchReset,
  postFetchSuccess,
} from "../redux/reducers/postReducer";
import PostFetched from "../components/PostFetched";
import ClipLoader from "react-spinners/ClipLoader";
import "./HomePage.css";
import useScrollPage from "../hooks/useScrollPage";
export default function HomePage() {
  const instance = useAxios();
  const dispatch = useDispatch();
  const [page] = useScrollPage();
  const { posts, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    if (page === 1) {
      dispatch(postFetchReset());
    }
    (async () => {
      try {
        dispatch(postFetchLoading());
        const { data } = await instance.get("/photos", {
          params: { page },
        });
        dispatch(postFetchSuccess(data));
      } catch (error) {
        dispatch(postFetchError("Some error occured in API"));
      }
    })();
  }, [page]);

  return (
    <div className="home__page">
      <Container>
        <div className="posts__display">
          {posts.map((post, index) => (
            <PostFetched post={post} key={post.id + index} />
          ))}
        </div>
        <div className="loading__spinner">
          <ClipLoader
            color={"#ffffff"}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </Container>
    </div>
  );
}

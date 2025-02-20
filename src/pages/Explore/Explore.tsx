import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PostCard, PostLoader } from "../../components";
import {setLastDoc } from "../../features/postsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts, getNewPosts } from "../../services/postServices";

export const Explore = () => {
  const { id } = useAppSelector((store) => store?.auth);
  const adminId = process.env.REACT_APP_ADMIN_ID;

  const { postsLoading, posts, latestDoc, newPostsLoading } = useAppSelector(
    (store) => store?.posts
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLastDoc());
    dispatch(getPosts(latestDoc));
  }, []);

  const fetchDataHandler = () => {
    dispatch(getNewPosts(latestDoc));
  };

  useEffect(() => {
    if (
      latestDoc &&
      posts.length !== 0 &&
      !postsLoading &&
      document.body.clientHeight === window.innerHeight
    ) {
      dispatch(getNewPosts(latestDoc));
    }
  }, [latestDoc]);

  let exploreTitle = (id === adminId) ? "Explore [Admin]" : "Explore";

  return (
    <>
      <main className="main-container">
        <h4 className="title">{exploreTitle}</h4>

        {postsLoading ? (
          <PostLoader />
        ) : (
          <InfiniteScroll
            dataLength={posts.length} //This is important field to render the next data
            next={fetchDataHandler}
            hasMore={latestDoc === undefined ? false : true}
            loader={<PostLoader />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <h4>Yay! You have seen it all</h4>
              </p>
            }
          >
            {posts.map((post) => {
              return <PostCard key={post.postID} {...post} />;
            })}
          </InfiniteScroll>
        )}
        {newPostsLoading && <PostLoader />}
      </main>
    </>
  );
};

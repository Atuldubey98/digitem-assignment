import { useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";
import "./SearchPage.css";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import {
  setResultsError,
  setResultsLoading,
  setResultsReset,
  setResultsSuccess,
} from "../redux/reducers/searchReducer";
import { MdSearchOff } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import useScrollPage from "../hooks/useScrollPage";
function SearchPage() {
  const query = useQuery();
  const [page] = useScrollPage();
  const searchTerm = query.has("query") ? query.get("query") : "";
  const [prevSearch, setPreviousSearch] = useState("");
  const instance = useAxios();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.results);
  const { results } = data;
  useEffect(() => {
    if (page === 1 || !searchTerm || prevSearch !== searchTerm) {
      dispatch(setResultsReset());
    }
    (async () => {
      try {
        dispatch(setResultsLoading());
        const { data } = await instance.get("/search/photos", {
          params: {
            query: searchTerm,
            page,
          },
        });
        setPreviousSearch(searchTerm);
        dispatch(setResultsSuccess(data));
      } catch (error) {
        dispatch(setResultsError("Some error occured in API"));
      }
    })();
  }, [page, searchTerm]);
  return (
    <div className="search__page">
      {results.length === 0 ? (
        loading ? null : (
          <div className="search__resultsNone">
            <h1>No splash for you</h1>
            <MdSearchOff size={50} color="rgb(161, 159, 159)" />
          </div>
        )
      ) : null}
      <div className="search__results">
        {results.map((result, index) => (
          <img
            src={result.urls.regular}
            alt={result.id}
            key={result.id + index}
          />
        ))}
      </div>
      <div className="loading__spinner">
        <ClipLoader
          color={"black"}
          loading={loading}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default SearchPage;

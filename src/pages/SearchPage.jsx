import { useEffect } from "react";
import useQuery from "../hooks/useQuery";
import "./SearchPage.css";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import {
  setResultsError,
  setResultsLoading,
  setResultsSuccess,
} from "../redux/reducers/searchReducer";
import { ClipLoader } from "react-spinners";
import useScrollPage from "../hooks/useScrollPage";
function SearchPage() {
  const query = useQuery();
  const [page] = useScrollPage();
  const searchTerm = query.has("query") ? query.get("query") : "";
  const instance = useAxios();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.results);
  const { totalPages, total, results } = data;
  // implement the Search Page
  useEffect(() => {
    if (page ===  1) {
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
          dispatch(setResultsSuccess(data));
        } catch (error) {
          dispatch(setResultsError("Some error occured in API"));
        }
      })();
  }, []);
  return (
    <div className="search__page">
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

import { ContentRowMovies } from "./ContentRowMovies";
import { GenresInDB } from "./GenresInDB";
import { LastMovieInDB } from "./LastMovieInDB";

export const ContentRowTop = () => {
      return (
            <>
                  {/* <!-- Content Row Top --> */}
                  <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                        </div>

                        <ContentRowMovies />

                        {/* <!-- Content Row Last Movie in Data Base --> */}
                        <div className="row">
                              <LastMovieInDB />

                              <GenresInDB />
                        </div>
                  </div>
                  {/* <!--End Content Row Top--> */}
            </>
      );
};
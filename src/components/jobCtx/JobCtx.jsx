import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import Loader from "../common/Loader/Loader";

const JobCtx = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  //todo: getting data from API
  async function getJobs(page) {
    try {
      let res = await axios.get(
        `https://www.themuse.com/api/public/jobs?page=${page}&api_key=d595bf47ca0ca06d7a672a348a780469b38700e778cf80bce8ba87d4c07880fc`
      );
      setJobs(res.data.results);
      setLoading(false);
    } catch (err) {
        alert('refresh and try again');
        setLoading(false);
    }
  }

  //todo: handelling paginatoion
  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getJobs(page);
    setLoading(true);
  }, [page]);

  return (
    <div className="job_contain">
      {loading ? (
        <Loader />
      ) : (
        <div className="job_store">
          {jobs.map((item) => {
            return (
              <div className="job_card" key={item.id}>
                <p className="job_name">{item.name}</p>
                <p className="co_name">{item.company?.name}</p>
                <div className="area_boxes">
                  <p className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    {item.locations[0]?.name}
                  </p>
                  <p className="catagory">
                    <i className="fa-brands fa-readme"></i>
                    {item?.categories[0]?.name}
                  </p>
                  <p className="level">
                    <i className="fa-solid fa-briefcase"></i>
                    {item.levels[0]?.name}
                  </p>
                </div>
                <a href={item.refs.landing_page} target="_blank">
                  <button>
                    Easy Apply <i class="fa-solid fa-location-arrow"></i>
                  </button>
                </a>
              </div>
            );
          })}
          <div className="pagination">
            <button
              onClick={prevPage}
              title="Go to previous page"
              disabled={page === 0}
            >
              <i class="fa-solid fa-reply"></i>
            </button>
            <span>{page}</span>
            <button
              onClick={nextPage}
              title="Go to next page"
              disabled={page === 15469}
            >
              <i class="fa-solid fa-share"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCtx;

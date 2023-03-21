import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPaginated } from "../../../Redux/JobReducer";
import ReactPaginate from "react-paginate";
import "./pagination.css";

export default function Pagination() {
  const JobsState = useSelector((state) => state.JobReducer);
  const { filterJobs, searchStatus } = useSelector(
    (state) => state.LocationAndJobTypeReducer
  );
  const { Jobs } = JobsState;
  const dispatch = useDispatch();
  const itemsPerPage = !searchStatus ? 8 : 5;
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = !searchStatus
    ? Jobs.slice(itemOffset, endOffset)
    : searchStatus || filterJobs.length > 0
    ? filterJobs.slice(itemOffset, endOffset)
    : "";

  useEffect(() => {
    dispatch(setPaginated(currentItems));
    setPageCount(
      !searchStatus
        ? Math.ceil(Jobs.length / itemsPerPage)
        : Math.ceil(filterJobs.length / itemsPerPage)
    );
  }, [itemOffset, Jobs, filterJobs]);

  function handlePageClick(event) {
    const newOffset = !searchStatus
      ? (event.selected * itemsPerPage) % Jobs.length
      : (event.selected * itemsPerPage) % filterJobs.length;
    setItemOffset(newOffset);
  }
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >>"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<< Previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageLinkClassName="page-num"
      nextLinkClassName="page-num"
      activeClassName="active"
    />
  );
}

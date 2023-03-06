import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPaginated } from "../../../Redux/JobReducer";

import ReactPaginate from "react-paginate";

import "./pagination.css";

export default function Pagination() {
  const JobsState = useSelector((state) => state.JobReducer);
  const { Jobs } = JobsState;
  const dispatch = useDispatch();
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = Jobs.slice(itemOffset, endOffset);

  useEffect(() => {
    dispatch(setPaginated(currentItems));
    setPageCount(Math.ceil(Jobs.length / itemsPerPage));
  }, [itemOffset, Jobs]);

  function handlePageClick(event) {
    const newOffset = (event.selected * itemsPerPage) % Jobs.length;
    setItemOffset(newOffset);
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageLinkClassName="page-num"
      nextLinkClassName="page-num"
      activeClassName="active"
    />
  );
}

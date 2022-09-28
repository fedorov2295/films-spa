import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import VideosList from "./VideosList";

import classes from "./VideosListPaginated.module.css";

const VideosListPaginated = (props) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + props.itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(props.videos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(props.videos.length / props.itemsPerPage));
  }, [itemOffset, props.itemsPerPage, props.videos]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * props.itemsPerPage) % props.videos.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <VideosList videos={currentItems} />
      <ReactPaginate
        className={classes.pagination}
        pageClassName={classes.paginationDot}
        activeClassName={classes.paginationDotActive}
        previousClassName={`${classes.previousPagination} ${classes.paginationArrow}`}
        nextClassName={`${classes.nextPagination} ${classes.paginationArrow}`}
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default VideosListPaginated;

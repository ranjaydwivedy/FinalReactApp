import React from "react";
import { Link } from "react-router-dom";
import "./pagination.css";

const usersRoute = "/users?page=";
const paginationPadding = 2;

const Pagination = ({ page, totalResults, resultsPerPage }) => {
  page = parseInt(page, 0); // converting to a number;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  if (totalPages < 2) {
    return null;
  }

  const firstButton = page > 1 && <PaginationLink page={1} text={"<<"} />;
  const prevButton = page > 1 && <PaginationLink page={page - 1} text={"<"} />;
  const nextButton = page < totalPages && (
    <PaginationLink page={page + 1} text={">"} />
  );
  const lastButton = page < totalPages && (
    <PaginationLink page={totalPages} text={">>"} />
  );

  const numberLinks = renderNumberLinks(
    parseInt(page, 0),
    totalPages,
    paginationPadding
  );
  return (
    <div className="pagination">
      {firstButton}
      {prevButton}
      {numberLinks}
      {nextButton}
      {lastButton}
    </div>
  );
};

const renderNumberLinks = (currentPage, totalPages, padding = 3) => {
  const start = Math.max(currentPage - padding, 1);
  const end = Math.min(currentPage + padding, totalPages);
  const firstElipsis = currentPage - padding > 1 && <div>...</div>;
  const firstPage = currentPage - padding > 1 && (
    <PaginationLink page={1} text={1} />
  );
  const endElipsis = currentPage + padding < totalPages && <div>...</div>;
  const lastPage = currentPage + padding < totalPages && (
    <PaginationLink page={totalPages} text={totalPages} />
  );
  const pageLinksToRender = [];
  for (let i = start; i < end + 1; i++) {
    pageLinksToRender.push(i);
  }
  return (
    <>
      {firstPage}
      {firstElipsis}
      {pageLinksToRender.map(page => {
        if (page === currentPage) {
          return (
            <div key={page} className="current-page">
              {page}
            </div>
          );
        }
        return <PaginationLink key={page} page={page} text={page} />;
      })}
      {endElipsis}
      {lastPage}
    </>
  );
};

const PaginationLink = ({ page, text }) => (
  <Link to={`${usersRoute}${page}`}>{text}</Link>
);

export { Pagination };

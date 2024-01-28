import React, { useState } from "react";
import "./shop.scss";
import { allComics } from "../../app/data/dataAll";
import ProductCard from "../productCard/ProductCard";
import ReactPaginate from "react-paginate";

export default function Shop() {
  const [serial, setSerial] = useState("All");
  const [toggleList, setToggleList] = useState(false);
  const [toggleNmbrOfComics, setToggleNmbrOfComics] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);
  const [all, setAll] = useState(allComics);
  const [numberOfComics, setNumberOfComics] = useState(16);
  const [sort, setSort] = useState("Sort");
  const [pageNumber, setPageNumber] = useState(0);
  const comicsPerPage = numberOfComics;
  const pageVisited = pageNumber * comicsPerPage;

  const toggle = () => {
    setToggleList((prev) => !prev);
  };
  const toggleOff = () => {
    setToggleList(false);
  };
  const sortHL = () => {
    all.sort((a, b) => {
      return a.price - b.price;
    });
  };

  const sortLH = () => {
    all.sort((a, b) => {
      return b.price - a.price;
    });
  };

  const displayComics = all
    .slice(pageVisited, pageVisited + comicsPerPage)
    .map((comic) => (
      <ProductCard
        key={comic.id}
        id={comic.id}
        img={comic.img}
        edition={comic.edition}
        episodeNumber={comic.episodeNumber}
        price={comic.price}
        hero={comic.hero}
        episode={comic.episode}
        numberOfPages={comic.numberOfPages}
        dateOfPublication={comic.dateOfPublication}
        format={comic.format}
      />
    ));

  const pageCount = Math.ceil(all.length / comicsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const filterHandler = (serial) => {
    setAll(allComics.filter((filtered) => filtered.edition === serial));
    setPageNumber(0);
  };

  return (
    <div className="shopWrapper">
      <div className="shopHolder">
        <div className="shopBannerHolder">
          <div className="shopBanner">
            <h3>SHOP</h3>
          </div>
        </div>
        <div className="shopMainHolder">
          <aside className="aside">
            <div className="serial">
              <h5>Serial</h5>
              <div onClick={toggle} className="serialName">
                <div>{serial}</div>
                <div className={toggleList === false ? "arrowDown" : "arrowUp"}>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
              <div
                className={
                  toggleList === false ? "listHolderHide" : "listHolderActive"
                }
              >
                <ul>
                  <li
                    onClick={() => {
                      setSerial("All");
                      toggleOff();
                      setAll(allComics);
                      setPageNumber(0);
                    }}
                  >
                    All
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Regular series");
                      toggleOff();
                      filterHandler("Regular series");
                      setPageNumber(0);
                    }}
                  >
                    Regular series
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Library");
                      toggleOff();
                      filterHandler("Library");
                      setPageNumber(0);
                    }}
                  >
                    Library
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Colored program");
                      toggleOff();
                      filterHandler("Colored program");
                      setPageNumber(0);
                    }}
                  >
                    Colored program
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Gold edition");
                      toggleOff();
                      filterHandler("Gold edition");
                      setPageNumber(0);
                    }}
                  >
                    Gold edition
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Selected stories");
                      toggleOff();
                      filterHandler("Selected stories");
                      setPageNumber(0);
                    }}
                  >
                    Selected stories
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Lucky Luke");
                      toggleOff();
                      filterHandler("Lucky Luke");
                      setPageNumber(0);
                    }}
                  >
                    Lucky Luke
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Leo Palp");
                      toggleOff();
                      filterHandler("Leo Palp");
                      setPageNumber(0);
                    }}
                  >
                    Leo Palp
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Special");
                      toggleOff();
                      filterHandler("Special");
                      setPageNumber(0);
                    }}
                  >
                    Special
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Ciko");
                      toggleOff();
                      filterHandler("Ciko");
                      setPageNumber(0);
                    }}
                  >
                    Ciko
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <main className="main">
            <div className="mobileFilter">
              <h5>Serial</h5>
              <div onClick={toggle} className="serialName">
                <div>{serial}</div>
                <div className={toggleList === false ? "arrowDown" : "arrowUp"}>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
              <div
                className={
                  toggleList === false ? "listHolderHide" : "listHolderActive"
                }
              >
                <ul>
                  <li
                    onClick={() => {
                      setSerial("All");
                      toggleOff();
                      setAll(allComics);
                      setPageNumber(0);
                    }}
                  >
                    All
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Regular series");
                      toggleOff();
                      filterHandler("Regular series");
                      setPageNumber(0);
                    }}
                  >
                    Regular series
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Library");
                      toggleOff();
                      filterHandler("Library");
                      setPageNumber(0);
                    }}
                  >
                    Library
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Colored program");
                      toggleOff();
                      filterHandler("Colored program");
                      setPageNumber(0);
                    }}
                  >
                    Colored program
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Gold edition");
                      toggleOff();
                      filterHandler("Gold edition");
                      setPageNumber(0);
                    }}
                  >
                    Gold edition
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Selected stories");
                      toggleOff();
                      filterHandler("Selected stories");
                      setPageNumber(0);
                    }}
                  >
                    Selected stories
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Lucky Luke");
                      toggleOff();
                      filterHandler("Lucky Luke");
                      setPageNumber(0);
                    }}
                  >
                    Lucky Luke
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Leo Palp");
                      toggleOff();
                      filterHandler("Leo Palp");
                      setPageNumber(0);
                    }}
                  >
                    Leo Palp
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Special");
                      toggleOff();
                      filterHandler("Special");
                      setPageNumber(0);
                    }}
                  >
                    Special
                  </li>
                  <li
                    onClick={() => {
                      setSerial("Ciko");
                      toggleOff();
                      filterHandler("Ciko");
                      setPageNumber(0);
                    }}
                  >
                    Ciko
                  </li>
                </ul>
              </div>
            </div>
            <div className="sortAndPreview">
              <div className="number">
                <h5>Display</h5>
              </div>
              <div className="displayPerPage">
                <div
                  className="displayPerPageHolder"
                  onClick={() => {
                    setToggleNmbrOfComics((prev) => !prev);
                    setToggleSort(false);
                  }}
                >
                  <div className="numberOfComics">
                    <p>{numberOfComics}</p>
                  </div>{" "}
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  className={
                    toggleNmbrOfComics === false
                      ? "displayListHidden"
                      : "displayListActive"
                  }
                >
                  <ul>
                    <li
                      onClick={() => {
                        setNumberOfComics(16);
                        setToggleNmbrOfComics(false);
                        setPageNumber(0);
                      }}
                    >
                      16
                    </li>
                    <li
                      onClick={() => {
                        setNumberOfComics(24);
                        setToggleNmbrOfComics(false);
                        setPageNumber(0);
                      }}
                    >
                      24
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sort">
                <div
                  className="sortHolder"
                  onClick={() => {
                    setToggleSort((prev) => !prev);
                    setToggleNmbrOfComics(false);
                  }}
                >
                  <div className="sorted">
                    <p>{sort}</p>
                  </div>{" "}
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  className={
                    toggleSort === false ? "sortListHidden" : "sortListActive"
                  }
                >
                  <ul>
                    <li
                      onClick={() => {
                        setToggleSort(false);
                        setSort("High-Low");
                        setPageNumber(0);
                        sortLH(all);
                      }}
                    >
                      High-Low
                    </li>
                    <li
                      onClick={() => {
                        setToggleSort(false);
                        setSort("Low-High");
                        setPageNumber(0);
                        sortHL(all);
                      }}
                    >
                      Low-High
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="productHolder">
              <div className="container">
                <div className="row">{displayComics}</div>
              </div>
            </div>
            {pageCount < 2 ? null : (
              <div className="pagination-holder">
                <ReactPaginate
                  forcePage={pageNumber}
                  previousLabel={"<"}
                  nextLabel={">"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttns"}
                  nextLinkClassName={"nextBttns"}
                  disabledLinkClassName={"paginationLinkDisabled"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                  pageLinkClassName={"paginationLink"}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

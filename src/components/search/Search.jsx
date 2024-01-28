import React, { useState } from "react";
import "./search.scss";
import { Link } from "react-router-dom";
import { allComics } from "../../app/data/dataAll";
import { useDispatch } from "react-redux";
import { changeSingleComic } from "../../app/features/slices/singleProductSlice";

export default function Search() {
  ////////////////////////////////////SEARCH LOGIC START////////////////////////////////////////////
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const comicSearch = (e) => {
    setLoader(true);
    handleSearch(e);
  };

  const handleSearch = (e) => {
    setTimeout(() => {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      const newFilter = allComics.filter(
        (item) =>
          item.hero.toLowerCase().includes(searchWord.toLowerCase()) ||
          item.episode.toLowerCase().includes(searchWord.toLowerCase())
      );

      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
      setLoader(false);
    }, 3000);
  };
  ////////////////////////////////////SEARCH LOGIC END////////////////////////////////////////////

  return (
    <div className="searchDivWrapper">
      <div className="searchDivHolder">
        <div className="searchText">
          <input
            type="text"
            placeholder="Search comics..."
            autoFocus
            maxLength="20"
            onChange={comicSearch}
          />
        </div>
        <div className="searchResult">
          {wordEntered.length > 0 ? (
            <div className="searchResultHolder">
              <div className="resultQty">
                <h5>
                  results found: <b>{filteredData.length}</b>
                </h5>
              </div>
              <div className="resultAll">
                <div className="container">
                  <div className="row">
                    {filteredData.map((filCom) => (
                      <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        key={filCom.id}
                      >
                        <div
                          className="foundComicsWrapper"
                          onClick={() =>
                            dispatch(
                              changeSingleComic({
                                id: filCom.id,
                                img: filCom.img,
                                edition: filCom.edition,
                                episodeNumber: filCom.episodeNumber,
                                price: filCom.price,
                                hero: filCom.hero,
                                episode: filCom.episode,
                                numberOfPages: filCom.numberOfPages,
                                dateOfPublication: filCom.dateOfPublication,
                                format: filCom.format,
                              })
                            )
                          }
                        >
                          <Link
                            to={`/shop/singleProduct/${filCom.hero}+${filCom.edition}+${filCom.episode}+${filCom.episodeNumber}`}
                          >
                            {" "}
                            <div className="foundComicsHold">
                              <div className="foundComicsDetails">
                                <p>
                                  <b>{filCom.hero}</b>
                                </p>
                                <p>
                                  <span className="foundName">
                                    {filCom.edition} {filCom.episodeNumber}
                                  </span>
                                </p>
                                <p>{filCom.episode}</p>
                                <h5>{filCom.price}$</h5>
                              </div>
                              <div className="foundComicsPic">
                                <div>
                                  <img src={filCom.img} alt={filCom.id} />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="typeSomething">
              {loader === true ? (
                <div className="loader"></div>
              ) : (
                <i className="fa-solid fa-magnifying-glass"></i>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

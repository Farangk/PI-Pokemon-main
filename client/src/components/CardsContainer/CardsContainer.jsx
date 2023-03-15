import Card from "../Cards/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Loading } from "../Loading/Loading";

const CardsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 12;

  const pokemons = useSelector((state) => state.pokemons);
  const totalElements = pokemons.length;
  const totalPages = Math.ceil(totalElements / elementsPerPage);

  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {!pokemons.length ? (
        <Loading />
      ) : (
        <>
        <div className={style.btnContainer}>
        <button className={style.btn} onClick={handlePrevPage} disabled={currentPage === 1}>
           Prev
          </button>
          {pageNumbers.map((pageNumber) => {
            return (
              <button
              className={style.btn}
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                disabled={pageNumber === currentPage}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            className={style.btn}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
       
          <div className={style.container}>
            {pokemons.slice(startIndex, endIndex).map((pokemon) => {
              return (
                <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  hp={pokemon.hp}
                  types={pokemon.types.map(type => type.name).join(", ")}
                  img={pokemon.img}
                />
              );
            })}
          </div>
        </>
      )}
      {window.scrollTo(0, 0)}
    </>
  );
};

export default CardsContainer;

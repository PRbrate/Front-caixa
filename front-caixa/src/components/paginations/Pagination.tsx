import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

interface PaginationProps {
  page?: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  cidade?: string;
  onAutalize: (idPage: number) => void;
}

interface MyPagination {
  [chave: number]: number;
}

function Pagination({
  page,
  pageSize,
  totalItems,
  totalPages,
  cidade,
  onAutalize,
}: PaginationProps) {
  const [pag, setPag] = useState<MyPagination>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });


  const[pageCurrent, setPageCurrent] = useState(1)
  function startPage() {
    const newPagination: MyPagination = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6 };

    if (totalPages > 0) {
      for (let i = 0; i < 6; i++) {
        if ((newPagination[i] ?? 0) > totalPages) {
          newPagination[i] = 0;
        }

        setPag(newPagination);
      }
    }
  }

  function onGetPage(idpagemodify: number) {
    setPageCurrent(idpagemodify)
    onAutalize(idpagemodify);
  }

  function updadePage() {
    if (totalPages > 0) {
      const newPagination: MyPagination = {};
      for (let i = 0; i < 6; i++) {
        newPagination[i] = (pag[i] ?? 0) + 6;

        if ((newPagination[i] ?? 0) > totalPages) {
          newPagination[i] = 0;
        }
      }
      setPag(newPagination);
    }
  }

  function downPage() {
    if (totalPages > 0) {
      const newPagination: MyPagination = {};

      if (totalPages > 0) {
        for (let i = 0; i < 6; i++) {
          const current = (pag[i] ?? 0) - 6;

          newPagination[i] = current > 0 ? current : 0;
        }
      }
      const currentValue = Math.max(...Object.values(newPagination));
      let next = currentValue + 1;

      for (let i = 0; i < 6; i++) {
        if (newPagination[i] === 0 && next <= totalPages) {
          newPagination[i] = next;
          next++;
        }
      }

      setPag(newPagination);
    }
  }

  useEffect(() => {
    startPage();
  }, []);

  return (
    <div className="flex gap-5">
      {pag[0] === 1 ? (
        ""
      ) : (
        <button
          onClick={downPage}
          className="flex justify-center items-center border-2 w-12 h-12 p-2
          rounded-[8px] bg-color-secundaria-azul border-color-dominante-azul
          text-white transform transition-transform duration-300 
            hover:scale-115 shadow-md 
            hover:shadow-xl mb-8
            cursor-pointer
            overflow-hidden"
        >
          <FaArrowLeft className="text-3xl" />
        </button>
      )}

      <div className="flex gap-5">
        {[0, 1, 2, 3, 4, 5].map((index) => {
          const isActive = pageCurrent === pag[index];


          return pag[index] !== 0 ? (
            <button
              onClick={() => onGetPage(pag[index])}
              className={`text-2xl font-bold border-2 w-12 h-12  p-2 rounded-[8px]
              ${
                isActive
                  ? "border-color-secundaria-azul bg-color-dominante-azul"
                  : "bg-color-secundaria-azul border-color-dominante-azul"
              }
             text-white
            transform transition-transform duration-300 
            hover:scale-115 shadow-md 
            hover:shadow-xl mb-8
            cursor-pointer
            overflow-hidden`}
            >
              {pag[index]}
            </button>
          ) : (
            ""
          );
        })}
      </div>
      {Object.values(pag).includes(totalPages) ? (
        ""
      ) : (
        <button
          onClick={updadePage}
          className=" flex justify-center items-center border-2 w-12 h-12  p-2
          rounded-[8px] bg-color-secundaria-azul border-color-dominante-azul
          text-white
          transform transition-transform duration-300 
            hover:scale-115 shadow-md 
            hover:shadow-xl mb-8
            cursor-pointer
            overflow-hidden"
        >
          <FaArrowRight className="text-3xl" />
        </button>
      )}
    </div>
  );
}

export default Pagination;

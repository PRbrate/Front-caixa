import { useNavigate } from "react-router-dom";
import type { ImovelDataCard } from "../../types/ImovelData";
import { useEffect } from "react";

interface imovelIdProps {
  item: ImovelDataCard;
}

function CardInfo({ item }: imovelIdProps) {
  const navigate = useNavigate();

  async function goCard() {
    if (item.id.trim() !== "") {
      navigate(`/info/${item.id}`);
    }
  }

  useEffect(() => {
  }, []);

  return (
    <div
      className="bg-white relative w-[300px] h-[500px] rounded-2xl 
      px-2 flex flex-col justify-between
      transform transition-transform duration-500 
      hover:scale-105 shadow-md 
      hover:shadow-xl mb-8
      cursor-pointer
      overflow-hidden"
      style={{ boxShadow: "2px 3px 4px #1A237E" }}
    >
      <div className="flex flex-col justify-between">
        <p className="ml-1 mt-1 font-bold text-4xl text-color-dominante-azul">
          {item?.tipoImovel}
        </p>
        <hr className="border-t-2 border-color-dominante-azul w-[95%] mb-2 mx-auto" />
        <p className="ml-1 font-semibold mb-3 text-color-dominante-azul">
          Condomínio {item?.condominio}
        </p>
        <div className="flex w-full justify-center h-[200px]">
          <img
            src={item?.foto}
            className="object-contain rounded-2xl mb-3 max-h-[200px] w-[260px]"
            style={{ boxShadow: "2px 3px 4px #1f1f1f" }}
          />
        </div>
        <p className="font-bold text-black mb-2">
          <span className="font-extrabold pb-2 text-color-dominante-azul">
            Cidade:
          </span>{" "}
          {item?.cidade}
        </p>
        <p className="font-bold text-black">
          <span className="font-extrabold pb-2 text-color-dominante-azul">
            Bairro:{" "}
          </span>
          {item?.bairro}
        </p>
      </div>
      <div className="flex flex-col align-middle justify-center">
        <span className="font-extrabold text-2xl text-color-dominante-azul">
          Preço:
        </span>
      </div>

      <div className="w-full flex flex-col justify-center items-center mb-5">
        <div>
          <div className="flex flex-col align-middle items-center justify-center max-w-[100%]">
            <p className="font-extrabold text-3xl">
              <span className="text-3xl text-black">R$</span>
              {item?.preco}
            </p>
          </div>
        </div>

        <button
          onClick={goCard}
          className="bg-color-dominante-azul rounded-2xl p-2 w-[90%] font-bold
         text-white transform transition-transform duration-500 
           cursor-pointer hover:scale-105"
        >
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

export default CardInfo;

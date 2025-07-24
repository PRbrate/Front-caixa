import { useNavigate } from "react-router-dom";
import casa from "../../assets/casa-gramado.jpg";
import { useState } from "react";

function CardInfo() {

  const [numImovel, setNumImovel] = useState("123")
  const navigate = useNavigate();

  function goCard(){
    if(numImovel.trim() !== ""){
      navigate(`/info/${numImovel}`);
    }
    
  }

  return (
    <div
      className="bg-white relative w-[300px] h-[500px] rounded-2xl 
      p-2 flex flex-col flex-wrap
      transform transition-transform duration-500 
      hover:scale-105 shadow-md 
      hover:shadow-xl mb-8
      cursor-pointer"
      style={{ boxShadow: "2px 3px 4px #1A237E" }}
    >
      <p className="ml-1 mb-0 font-bold text-3xl text-color-dominante-azul">
        Apartamento
      </p>
      <p className="mb-2 text-color-dominante-azul ">
        ___________________________________________
      </p>

      <p className="ml-1 font-semibold mb-3 text-color-dominante-azul">
        Condomínio Residencial Sol Nascente
      </p>
      <img
        src={casa}
        className="rounded-2xl mb-3"
        style={{ boxShadow: "2px 3px 4px #1f1f1f" }}
      />
      <p className="font-bold text-black">
        <span className="font-extrabold pb-2 text-color-dominante-azul">
          Cidade:
        </span>{" "}
        São Paulo
      </p>
      <p className="font-bold text-black">
        <span className="font-extrabold pb-2 text-color-dominante-azul">
          Bairro:
        </span>
        tatuapé
      </p>

      <div className="flex flex-col align-middle justify-center">
        <span className="font-extrabold text-2xl text-color-dominante-azul">
          Preço:
        </span>
      </div>

      <div className="flex flex-col align-middle items-center justify-center max-w-[100%]">
        <p className="font-bold text-5xl pb-2 ">
          <span className="text-3xl text-black">R$</span>300.000
        </p>
        <button
          onClick={goCard}
          className="bg-color-dominante-azul rounded-2xl p-2 w-[90%] font-bold
          text-white
          transform transition-transform
          duration-500 
          cursor-pointer
          hover:scale-105"
        >
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

export default CardInfo;

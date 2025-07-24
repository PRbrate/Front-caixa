import { useParams, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import casa from "../../assets/casa-gramado.jpg";
import Footer from "../../components/footer/Footer";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdDoNotDisturbOff } from "react-icons/md";
import { useEffect } from "react";

function CardInfoWithData() {
  const { NumeroImovel } = useParams<{ NumeroImovel?: string }>();
  const {pathname} = useLocation();


    useEffect(() => {
      window.scrollTo({top: 0, behavior: "smooth"});
    }, [pathname]);

  return (
    <div className="flex flex-col items-center bg-color-base-clara">
      <Header />
      <div className="w-full flex pl-7 pt-32 overflow-hidden flex-wrap md:flex-row ">
        <div className="border-4 border-color-dominante-azul w-[500px] h-[400px] rounded-[10px] flex justify-center">
          <img
            src={casa}
            className="w-full h-full object-contain rounded-[10px] p-2"
          />
        </div>
        <div className="ml-3 relative w-full md:w-auto">
          <div className="flex w-full gap-28 ">
            <div className="w-full flex flex-wrap flex-col">
              {" "}
              <p className="text-5xl text-color-dominante-azul font-extralight md:mt-0">
                APARTAMENTO
              </p>
              <p className="text-5xl text-color-dominante-azul font-extrabold mb-6 md:mt-0">
                Residencial Sol Nascente
              </p>
            </div>
            <p className="font-extrabold text-black text-6xl font-secundaria mt-7">
              <span className="text-4xl">R$:</span>300.000
            </p>
          </div>

          <hr className="border-t-2 border-color-dominante-azul w-[100%] mx-auto mb-4" />
          
          <p className="text-3xl font-light w-full text-color-dominante-azul text-center mb-4 ">
            <span className="font-bold">Descrição:</span> Apartamento bem localizado, próximo ao metrô.
          </p>

          <p className="text-4xl text-black mb-6">
            <span className=" text-color-dominante-azul font-extrabold ">
              Endereço:
            </span>{" "}
            Rua das Flores, 123
          </p>
          <p className="text-4xl text-black mb-6">
            <span className=" text-color-dominante-azul font-extrabold ">
              Bairro:
            </span>{" "}
            Tatuapé, São Paulo
          </p>
          <p className="text-4xl text-black mb-6">
            <span className=" text-color-dominante-azul font-extrabold ">
              UF:
            </span>{" "}
            SP
          </p>
          <button
            className="absolute -bottom-0 mb-7 right-0 bg-color-dominante-azul text-white w-[300px] h-16 rounded-xl shadow-xl cursor-pointer transform transition-transform duration-300 
        hover:scale-105"
          >
            Acesso caixa
          </button>
        </div>
      </div>
      <p className="text-3xl font-bold mt-4">
        Situação: <span className="text-color-disponivel">DISPONÍVEL</span>
      </p>

      <div className="flex w-full mt-6 pl-7">
        <p className="text-2xl text-black mr-4">
          <span className="font-extrabold">Área Privativa: </span> "65m²"
        </p>

        <p className="text-2xl text-black mr-4 ">
          <span className="font-extrabold">Área Terreno: </span> "0m²"
        </p>

        <p className="text-2xl text-black mr-4">
          <span className="font-extrabold">Área Total: </span> "65m²"
        </p>
      </div>

      <div className="flex w-full pl-7 ">
        <p className=" text-2xl mr-4">
          <span className="font-extrabold">Valor da avaliação:</span>{" "}
          R$:315.000,
        </p>
        <p className="text-red-600 font-extrabold text-2xl mr-4">
          <span className="text-black">Desconto: </span> 5%{" "}
        </p>
      </div>

      <div className="flex w-full pl-7">
        <p className=" text-2xl mr-4">
          <span className="font-extrabold">Modalidade de venda:</span> Venda
          direta
        </p>
        <p className="text-black font-extrabold text-2xl mr-4 ">
          Aceita consórcio:
          <span className="text-red-600 inline-flex  ml-1">
            {" "}
            <MdDoNotDisturbOff />{" "}
          </span>
          <span className="text-color-disponivel inline-flex  ml-1">
            {" "}
            {/* <RiVerifiedBadgeFill /> */}
          </span>
        </p>

        <p className="text-black font-extrabold text-2xl mr-4 ">
          Aceita Financiamento:
          <span className="text-red-600 inline-flex  ml-1">
            {" "}
            <MdDoNotDisturbOff />{" "}
          </span>
          <span className="text-color-disponivel inline-flex  ml-1">
            {" "}
            {/* <RiVerifiedBadgeFill /> */}
          </span>
        </p>

        <p className="text-black font-extrabold text-2xl mr-4 ">
          Aceita Parcelamento:
          <span className="text-red-600 inline-flex  ml-1">
            {" "}
            <MdDoNotDisturbOff />{" "}
          </span>
          <span className="text-color-disponivel inline-flex  ml-1">
            {" "}
            {/* <RiVerifiedBadgeFill /> */}
          </span>
        </p>

        <p className="text-black font-extrabold text-2xl mr-4 mb-3">
          Possui Ação Judicial?:
          <span className="text-red-600 inline-flex  ml-1">
            {" "}
            <MdDoNotDisturbOff />{" "}
          </span>
          <span className="text-color-disponivel inline-flex  ml-1">
            {" "}
            {/* <RiVerifiedBadgeFill /> */}
          </span>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default CardInfoWithData;

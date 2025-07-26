import { useParams, useLocation, Link,} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdDoNotDisturbOff } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { useEffect, useState } from "react";
import api from "../../services/Api";
import type { ImovelData } from "../../types/ImovelData";

function CardInfoWithData() {
  const { NumeroImovel } = useParams<{ NumeroImovel?: string }>();
  const { pathname } = useLocation();
  const [imovel, setImovel] = useState<ImovelData>();


  async function getImovel() {
    const response = await api.get(`/api/v1/Imoveis/${NumeroImovel}`);3

    console.log(response)
    if (response) {
      setImovel(response.data);
    }
  }

  const text = imovel?.descricaoDePagamento;

  const textFormat = text?.replace(/\r\n/g, "<br />");
  useEffect(() => {
    getImovel();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col items-center bg-color-base-clara">
      <Header />
      <div className="border-4 mt-32 border-color-dominante-azul h-[300px] w-[80%]  md:h-[600px] rounded-[10px] flex justify-center">
        <img
          src={imovel?.foto}
          className="w-full h-full object-contain rounded-[10px] p-2"
        />
      </div>
      <div className="relative flex flex-col md:flex-row w-[80%] justify-between mt-7 gap-20">
        <div className="w-full flex flex-col justify-between">
          {imovel?.disponivel ? (
            <div className=" text-white font-bold bg-color-disponivel px-6 max-w-32 rounded-4xl mb-3">
              DISPONÍVEL
            </div>
          ) : (
            <div className=" text-white font-bold bg-red-600 px-6 max-w-36 rounded-4xl mb-3">
              INDISPONÍVEL
            </div>
          )}

          <div>
            <div className="w-full flex flex-wrap flex-col">
              {" "}
              <p className="text-3xl mb-3  text-color-dominante-azul font-extralight md:mt-0">
                {imovel?.tipoImovel} {imovel?.condominio}
              </p>
            </div>
          </div>

          <hr className="border-t-2 border-color-dominante-azul w-[100%] mx-auto mb-4" />

          <p className="text-2xl font-light w-full text-color-dominante-azul mb-4 ">
            <span className="font-bold">Descrição: </span> {imovel?.descricao}
          </p>

          <p className="text-3xl text-black">
            <span className=" text-color-dominante-azul font-extrabold inline-flex  ml-1">
              <GrMapLocation />
            </span>{" "}
            {imovel?.endereco}
          </p>
          <p className="text-[20px] text-black ">
            <span className=" text-color-dominante-azul font-extrabold "></span>{" "}
            Tatuapé, São Paulo, SP
            {imovel?.bairro} {imovel?.cidade} {imovel?.uf}
          </p>
        </div>

        <div className="border-2 max-w-[400px] w-[100%] flex flex-col justify-between h-[300px] border-color-dominante-azul rounded-2xl px-5">
          <div>
            <p className="font-extrabold text-black text-2xl font-secundaria mt-2">
              Compre por:
            </p>
            <p className="flex flex-wrap font-extrabold text-black text-[40px]">
              R$:{imovel?.preco}
            </p>
          </div>
          <p className=" text-[20px] flex justify-between mr-4">
            <span className="font-extrabold">Valor da avaliação:</span> R$:{" "}
            {imovel?.valorAvaliacao}
          </p>

          <p className="text-red-600 font-extrabold text-2xl mr-4">
            <span className="text-black">Desconto: </span> {imovel?.desconto}%{" "}
          </p>
          <Link to={imovel?.link || "/"}>
            <button
              className=" bottom-0 mb-7 right-0 bg-color-dominante-azul text-white w-[300px] h-16 rounded-xl shadow-xl cursor-pointer transform
            transition-transform duration-300 hover:scale-105"
            >
              Acesso caixa
            </button>
          </Link>
        </div>
      </div>

      <p
        className="mt-10 w-[80%] text-2x1 text-gray-800"
        dangerouslySetInnerHTML={{ __html: textFormat || "" }}
      ></p>

      <div className="w-[80%] flex flex-col items-center mb-4">
        <div className="mb-4 flex flex-col md:flex-row">
          <div className="w-full flex flex-wrap gap-6 justify-center flex-row mt-6">
            <p className="text-[20px] text-black mx-4 border-color-dominante-azul rounded-2xl p-2 border-4">
              <span className="font-extrabold">Área Privativa: </span> "
              {imovel?.areaPrivativa}"
            </p>

            <p className="text-[20px] text-black mx-4  rounded-2xl p-2 border-4 border-color-dominante-azul">
              <span className="font-extrabold">Área Terreno: </span> "
              {imovel?.areaTerreno}"
            </p>

            <p className="text-[20px] text-black mx-4  rounded-2xl p-2 border-4 border-color-dominante-azul">
              <span className="font-extrabold">Área Total: </span> "
              {imovel?.areaTotal}"
            </p>
            <p className="text-[20px] text-black mx-4  rounded-2xl p-2 border-4 border-color-dominante-azul">
              <span className="font-extrabold">Modalidade de venda:</span>{" "}
              {imovel?.modalidadeVenda}
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6 w-full md:flex-row">
            <p className="text-[20px] text-black mx-4  rounded-2xl p-2 border-4 border-color-dominante-azul">
              Aceita consórcio:
              {imovel?.aceitaConsorcio ? (
                <span className="text-color-disponivel inline-flex  ml-1">
                  {" "}
                  <RiVerifiedBadgeFill />
                </span>
              ) : (
                <span className="text-red-600 inline-flex  ml-1">
                  {" "}
                  <MdDoNotDisturbOff />{" "}
                </span>
              )}
            </p>

            <p className="text-[20px] text-black mx-4  rounded-2xl p-2 border-4 border-color-dominante-azul">
              Aceita Financiamento:
              {imovel?.aceitaFinanciamento ? (
                <span className="text-color-disponivel inline-flex  ml-1">
                  {" "}
                  <RiVerifiedBadgeFill />
                </span>
              ) : (
                <span className="text-red-600 inline-flex  ml-1">
                  {" "}
                  <MdDoNotDisturbOff />{" "}
                </span>
              )}
            </p>

            <p className="text-[20px] text-black mx-4  rounded-2xl p-2 border-4 border-color-dominante-azul">
              Aceita Parcelamento:
              {imovel?.aceitaParcelamento ? (
                <span className="text-color-disponivel inline-flex  ml-1">
                  {" "}
                  <RiVerifiedBadgeFill />
                </span>
              ) : (
                <span className="text-red-600 inline-flex  ml-1">
                  {" "}
                  <MdDoNotDisturbOff />{" "}
                </span>
              )}
            </p>

            <p className="text-[20px] text-black mx-4  rounded-2xl p-2 border-4 border-color-dominante-azul">
              Possui Ação Judicial?:
              {imovel?.acaoJudicial ? (
                <span className="text-color-disponivel inline-flex  ml-1">
                  {" "}
                  <RiVerifiedBadgeFill />
                </span>
              ) : (
                <span className="text-red-600 inline-flex  ml-1">
                  {" "}
                  <MdDoNotDisturbOff />{" "}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CardInfoWithData;

import casaSol from "../../assets/casa-sol.jpg";
import { FaHome } from "react-icons/fa";
import CardInfo from "../../components/cards/CardInfoWithData";
import Footer from "../../components/footer/Footer";


function Home() {
  return (
    <div className="bg-color-base-clara max-h-[100%] max-w-[100%] min-w-[300px]">
      <div className="w-full relative min-w-[300px] min-h-[600px] ">
        <img
          src={casaSol}
          alt="casa-sol"
          className="absolute inset-0 w-full h-full rounded-bl-2xl rounded-br-2xl object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/40 rounded-bl-2xl rounded-br-2xl z-10" />

        <div className="relative z-20 flex flex-col items-end justify-center h-full px-4 md:px-20 py-10">
          <p
            className="text-white text-3xl sm:text-5x1 md:text-7xl font-base font-bold text-right"
            style={{ textShadow: "2px 2px 4px #1f1f1f" }}
          >
            {" "}
            Sua Casa dos Sonhos{" "}
          </p>
          <p
            className="text-white text-sm sm:text-base md:text-lg font-secundaria max-w-[700px] md:max-w[100px] text-justify font-bold mt-4"
            style={{ textShadow: "2px 1.5px 3px #1f1f1f" }}
          >
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
          </p>

          <div className="w-full max-w-[600px] mt-6">
            <iframe
              className="aspect-video w-full rounded-2xl"
              allow=" autoplay; encrypted-media"
              src="https://www.youtube.com/embed/YkyevNiRCg4"
              title="Youtube Video"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-row mt-10 pt-4 justify-between  align-middle gap-1 flex-wrap">
        <p className="text-4xl font-bold text-color-dominante-azul l ml-5">
          Para consultar digite a cidade:
        </p>

        <input
          type="text"
          placeholder="digite a cidade"
          className="px-4 w-[62%] h-[45px] max-h-[100px] bg-white rounded-md text-black mr-10"
        />
      </div>

      <div className="relative flex flex-row mb-20 pt-4 justify-end-safe gap-8 align-middle flex-wrap mr-6">
        <label
          className="px-4 pt-1 bg-color-secundaria-azul rounded-md text-[#FFFF] 
        font-bold max-h-10 text-center flex flex-wrap cursor-pointer"
        >
          <FaHome className="text-2xl mr-2 text-[#FFFF]" /> Tipo
          <select className="text-[#FFFF] bg-color-secundaria-azul cursor-pointer">
            <option value=""></option>
            <option value="1">Apartamento</option>
            <option value="2">Casa</option>
            <option value="3">Moradia</option>
          </select>
        </label>

        <label
          className="px-4 pt-1 bg-color-secundaria-azul rounded-md text-white font-bold
        max-h-10 text-center flex flex-wrap cursor-pointer"
        >
          Situação
          <select
            name="Situacao"
            className="text-white bg-color-secundaria-azul cursor-pointer"
          >
            <option value=""></option>
            <option value="1">Disponível</option>
            <option value="2">Indisponível</option>
          </select>
        </label>

        <button className="bg-color-dominante-azul rounded-2xl pr-6 pl-6 te mr-4 text-2xl max-h-10 font-bold text-white cursor-pointer hover:bg-color-secundaria-azul">
          Buscar
        </button>
      </div>

      <div className="m-5 mb-0 flex flex-wrap gap-11 justify-center">
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
      </div>

      <Footer />
    </div>
  );
}

export default Home;

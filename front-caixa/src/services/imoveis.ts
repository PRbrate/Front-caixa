import api from "./Api";

async function getImoveis(cidade: string, idPage:number) {

  const response = await api.get(
    `/api/v1/Imoveis/obter_lista_imoveis?Cidade=${cidade}&Page=${idPage}&PageSize=16&GetAll=false&Sort=string`
  );

  return response.data
}

export default getImoveis;

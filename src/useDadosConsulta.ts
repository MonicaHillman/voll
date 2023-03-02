import IConsulta from "./types/IConsulta";
import useFetch from "./useFetch";

const useDadosConsulta = () => {
    return useFetch<IConsulta[]>({ url: 'consultas' });
}

export default useDadosConsulta;
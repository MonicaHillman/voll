import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfissional";

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null
}

interface IDados {
    nome: string,
    consultas: number
}

const useDadosGrafico = ({ profissionais, consultas }: Props) => {
    let dados: Array<IDados> = [];

    if (profissionais && consultas) {
        dados = profissionais.map((profissional) => ({
            nome: profissional.nome,
            consultas: consultas.filter((consulta) =>
                consulta.profissional.some((prof) => prof.nome === profissional.nome)
            ).length
        }))
    }

    return dados;
}

export default useDadosGrafico;
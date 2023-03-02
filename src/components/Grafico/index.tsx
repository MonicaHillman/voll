import { ResponsiveContainer } from "recharts";
import { Bar } from "recharts/types/cartesian/Bar";
import { XAxis } from "recharts/types/cartesian/XAxis";
import { YAxis } from "recharts/types/cartesian/YAxis";
import { BarChart } from "recharts/types/chart/BarChart";

function Grafico() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                layout="vertical"
                data={dados}
                margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
            >
                <XAxis type="number"></XAxis>
                <YAxis type="category" dataKey="nome"></YAxis>
                <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Grafico;
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

const EventsGenreChart = ({ events }) => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            const data = genres.map((genre) => {
                const filteredEvents = events.filter( event => event.summary.includes(genre));
                return { 
                    name: genre,
                    value: filteredEvents.length,
                };
            }).filter(({ value }) => value > 0);
            return data;
        };

        setData(getData());
    }, [events]);

    const colors = ['#DD0000', '#00DD00', '#0000DD', '#DDDD00', '#DD00DD'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
    };

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                data={data}
                dataKey="value"
                fill="#8884d8"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130}           
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
                </Pie>
                <Legend verticalAlign="top" align="center" />
            </PieChart>
        </ResponsiveContainer>
      );

    
}

export default EventsGenreChart;
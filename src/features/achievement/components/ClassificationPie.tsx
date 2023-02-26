import React, { useState, useCallback } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Submission } from "@features/submission/submission";
import {
  getACProblemSet,
  getNonACProblemSet,
} from "@features/achievement/processSubmission";

type RenderActiveShapeProps = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: PieData;
  percent: number;
  value: number;
};

const renderActiveShape = (props: RenderActiveShapeProps) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 2}
        outerRadius={outerRadius + 4}
        fill={fill}
      />
      <text x={cx} y={cy} dy={-4} textAnchor="middle" fill={fill}>
        {payload.name}: {value}
      </text>
      <text x={cx} y={cy} dy={18} textAnchor="middle" fill={fill}>
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

type Props = {
  problemsCount: number;
  submissions: Submission[];
};

type PieData = {
  readonly name: string;
  readonly value: number;
  readonly color: string;
};

export const ClassificationPie: React.FC<Props> = (props: Props) => {
  const { problemsCount, submissions } = props;

  const ACProblemCount = getACProblemSet(submissions).size;
  const nonACProblemCount = getNonACProblemSet(submissions).size;

  const pieData: PieData[] = [
    { name: "AC", value: ACProblemCount, color: "#33CD34" },
    { name: "Non-AC", value: nonACProblemCount, color: "#FFDD99" },
    {
      name: "No-Sub",
      value: 2000 - ACProblemCount - nonACProblemCount,
      color: "#59606A",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const onPieEnter = useCallback(
    (_: number, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const onPieLeave = useCallback(() => {
    setActiveIndex(0);
  }, [setActiveIndex]);

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2.5}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            dataKey="value"
            data={pieData}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            innerRadius="60%"
            outerRadius="80%"
          >
            {pieData.map((d, index) => (
              <Cell key={`cell-${index}`} fill={d.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

"use client";

import { ApexOptions } from "apexcharts";
import { memo } from "react";
import { TPokemonStats } from "../../formaters/types";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const StatsChart = ({
  hp = 0,
  attack = 0,
  defense = 0,
  specialAttack = 0,
  specialDefense = 0,
  speed = 0,
  columnColor,
}: TPokemonStats & {
  columnColor?: string;
}) => {
  const chartConfig: {
    series: ApexAxisChartSeries;
    options: ApexOptions;
  } = {
    series: [
      {
        data: [hp, attack, defense, specialAttack, specialDefense, speed],
      },
    ],
    options: {
      states: {
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
        background: "transparent",
      },
      grid: {
        show: true,
        borderColor: "transparent",
      },
      tooltip: {
        enabled: false,
      },
      colors: [`${columnColor ? columnColor : "#30a7d7"}`],
      plotOptions: {
        bar: {
          columnWidth: "55%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          "HP",
          "Attack",
          "Defense",
          ["Special", "Attack"],
          ["Special", "Defense"],
          ["Speed"],
        ],
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    },
  };

  return (
    <ReactApexChart
      options={chartConfig.options}
      series={chartConfig.series}
      type="bar"
    />
  );
};

export default memo(StatsChart);

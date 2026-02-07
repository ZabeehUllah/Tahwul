export interface RadialBarChartData {
  name: string;
  value: number;
  fill?: string;
}

export interface RadialBarChartProps {
  data: RadialBarChartData[];
  total: number;
  innerRadius: string | number;
  barSize: number;
  color: string;
}

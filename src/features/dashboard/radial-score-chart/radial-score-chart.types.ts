export interface StatItem {
  value: number | string;
  label: string;
  color: string;
}

export interface RadialScoreChartProps {
  title: string;
  score: number;
  subtext: string;
  total?: number;
  color?: string;
  innerRadius?: string | number;
  barSize?: number;
  stats?: StatItem[];
}

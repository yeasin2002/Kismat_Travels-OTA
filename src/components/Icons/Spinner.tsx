import { SVGProps } from "react";

export function LoadSpinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      ></path>
      <path
        fill="currentColor"
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
      >
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </path>
    </svg>
  );
}



export function BlockSpinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <rect width="7.33" height="7.33" x="1" y="1" fill="currentColor">
        <animate
          id="svgSpinnersBlocksWave0"
          attributeName="x"
          begin="0;svgSpinnersBlocksWave1.end+0.2s"
          dur="0.6s"
          values="1;4;1"
        ></animate>
        <animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"></animate>
        <animate
          attributeName="width"
          begin="0;svgSpinnersBlocksWave1.end+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="0;svgSpinnersBlocksWave1.end+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor">
        <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="15.66" y="1" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="8.33" y="8.33" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="1" y="15.66" fill="currentColor">
        <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="15.66" y="8.33" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="8.33" y="15.66" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="15.66" y="15.66" fill="currentColor">
        <animate
          id="svgSpinnersBlocksWave1"
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.4s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.4s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.4s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.4s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
    </svg>
  );
}
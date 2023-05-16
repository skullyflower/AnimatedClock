import Svg, { SvgProps, Path } from "react-native-svg";
export const CatTail = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox='0 0 454 1014'
    {...props}>
    <Path
      d='M213.89 11.29C101.841 239.11-90.566 601.772 68.221 828.885c48.805 69.808 131.452 147.336 215.67 164.379 87.524 17.712 156.493-18.348 156.701-121.721.263-130.161-134.191-190.73-210.022-262.88-52.716-50.157-70.706-112.906-79.776-187.838-10.454-86.358 10.031-160.684 42.244-243.992 22.428-58.005 64.663-114.166 20.852-165.543Z'
      style={{
        fill: "gray",
        stroke: "#000",
        strokeWidth: "9.56px",
        strokeLinecap: "round",
        strokeMiterlimit: 1.5,
      }}
    />
  </Svg>
);

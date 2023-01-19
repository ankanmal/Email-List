import "./shimmerUi.css";
const ShimmerUi = () => {
  return (
    <>
      {Array(8)
        .fill("")
        .map((e, index) => {
          return (
            <div className="shimbody" key={index}>
              <div className="init initshim"></div>
              <table className="shimmaster">
                <tbody className="shimtbody">
                  <td className="shimtext1"></td>
                  <td className="shimtext2"></td>
                  <td className="shimtextcont"></td>
                  <td className="shimdate"></td>
                </tbody>
              </table>
            </div>
          );
        })}
    </>
  );
};
export default ShimmerUi;

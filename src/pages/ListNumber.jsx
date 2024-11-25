import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/layout.css";
import ListNumber from "../components/ListNumber";
export const ListNumber = () => {
    return (
      <div className="layout">
        <Header />
        <div className="content">
          {/* <MainEvent /> */}
          <ListNumber />
        </div>
        <Footer />
      </div>
    );
  };
  
  export default ListNumber;
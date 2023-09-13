import "./App.css";
import { MdFastfood } from "react-icons/md";
import { LuPizza } from "react-icons/lu";
import { CiPizza } from "react-icons/ci";
import { BsFillCupHotFill } from "react-icons/bs";
import { TbCup } from "react-icons/tb";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="component-container">
        <Card
          icon={<MdFastfood size={50} color="#098048" />}
          header={"31 App Screen"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        />
        <Card
          icon={<LuPizza size={50} color="#098048" />}
          header={"100% Vector"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        />
        <Card
          icon={<CiPizza size={50} color="#098048" />}
          header={"Fully Layered"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        />
        <Card
          icon={<BsFillCupHotFill size={50} color="#098048" />}
          header={"Icon Pack"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        />
        <Card
          icon={<TbCup size={50} color="#098048" />}
          header={"Design & Style"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App mt-5">
      <LoadPhone></LoadPhone>
    </div>
  );
}

const LoadPhone = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=samsung")
      .then((res) => res.json())
      .then((data) => setPhones(data.data));
  }, []);
  return (
    <div>
      <div className="phones">
        {phones.map((phone) => (
          <Showphone
            brand={phone.brand}
            phoneName={phone.phone_name}
            image={phone.image}
          ></Showphone>
        ))}
      </div>
    </div>
  );
};

const Showphone = (props) => {
  return (
    <div className="details">
      <img src={props.image} alt="" />
      <h3>Brand: {props.brand}</h3>
      <h4>Phone Name: {props.phoneName}</h4>
    </div>
  );
};
export default App;

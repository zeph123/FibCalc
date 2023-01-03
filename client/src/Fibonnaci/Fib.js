import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "./Fib.css";
import logo from "../logo.svg";
import '../App.css';

let schema = yup.object().shape({
  index: yup
    .number()
    .typeError('Index must be a number')
    .integer("Index must be an integer.")
    .min(0, "Index must be greater than or equal to 0.")
    .max(70, "Index must be less than or equal to 70.")
    .required("Index is required.")
});

const Fib = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (requestData) => {
    // console.log(JSON.stringify(requestData));
    const url = "http://localhost:8080";
    const endpoint = "/calcFib";
    await fetch(url + endpoint, {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    })
    .then( async (response) => {
      const responseData = await response.json();
      if (responseData.code >= 400 && responseData.code < 600) {
        const responseMessage = responseData.message;
        throw new Error(`${responseMessage}.`);
      }
      setIsLoaded(true);
      setData(responseData);
    })
    .catch((error) => {
      console.log(error);
      setIsLoaded(true);
      setError(error);
    });
  }

  return (
    <div className="FlexContainer">

      <h1>Fibonnaci Calculator</h1>

      <form className="FormContainer" onSubmit={handleSubmit(onSubmit)}>
        <label className="FormLabel" htmlFor="index">Enter index:</label>
        <input className="FormInput" {...register("index")} />
        <p className="FormErrors">{errors.index?.message}</p>
        <button className="FormButton" type="submit">Calculate</button>
      </form>

      { error !== null &&
        <div>
          Error: {error.message}
        </div>
      }
      { !isLoaded &&
        <img src={logo} className="App-logo" alt="logo" style={{ width: 100, height: 100}} />
      }
      { isLoaded && data !== null &&
        <div>
          Selected index: {data.index} <br/>
          Calculated result: {data.calcFibResult} <br/>
          Additional information: <br/>
          Nazwa programu: {data.additionalInformation[0]}, <br/>
          Imię i nazwisko: {data.additionalInformation[1]}, <br/>
          Numer grupu dziekańskiej: {data.additionalInformation[2]}, <br/>
        </div>
      }

    </div>
  );
}

export default Fib;
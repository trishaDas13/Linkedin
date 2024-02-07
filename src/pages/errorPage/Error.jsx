import { useRouteError } from "react-router-dom";

const Error = () => {
  const er = useRouteError();
  console.log(er);
  // console.log(er);
  return (
    <div>
      <h1>{er.data}</h1>
      <h1> Status : {er.status} </h1>
      <h1>OOps Something Went Wrong</h1>
    </div>
  );
};

export default Error;
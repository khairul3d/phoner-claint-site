import { useLoaderData } from "react-router-dom";


const Phn = () => {
    const phn = useLoaderData();
    console.log(phn);
    return (
        <div>
            <h2>{phn.name}</h2>
            <img src={phn.image} alt="" />
        </div>
    );
};

export default Phn;
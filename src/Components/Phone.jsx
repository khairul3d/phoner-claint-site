import { Link, useLoaderData } from "react-router-dom";


const Phone = () => {
    const phone = useLoaderData()
    return (
        <div>
            <h1>All Phones: {phone.length}</h1>
            {
                phone.map(phn => <li key={phn.id}><Link key={phn.id} to={`/phn/${phn.id}`}>{phn.name}</Link></li>)
            }
        </div>
    );
};

export default Phone;
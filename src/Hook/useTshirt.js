import { useEffect, useState } from "react"

const useTshirts = () => {
    const [tshirt, setTshirts] = useState([]);
    useEffect(() => {

        fetch('tshirt.json')
            .then(res => res.json())
            .then(data => setTshirts(data));

    }, []);

    return [tshirt, setTshirts];

}
export default useTshirts;
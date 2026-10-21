import { useEffect, useState } from "react"
import Shim from './shim'
import Errr from './Err'
const RestCard = (props) => {
    console.log('first ', props)
    return (
        <div className="restCard">
            <img className="res-dish" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHfFRtFOZjJ_m2RiG3zpUcIQHi99uMHjfVOlo5IIyCg_wC5WoWL8YDXE&s=10"></img>
            <h3>{props.curr.text}</h3>
            <h3>{props.curr.type}</h3>
            <h3>{props.curr.text}</h3>
        </div>
    )
}
const BodyComponent = () => {
    const [allhotel, filterData] = useState([])
    const [searchworked, resetsearch] = useState(true)

    const [unfilterData,resetfilterData]=useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.579343&lng=73.9089168&str=taj&trackingId=undefined&includeIMItem=true');
        let res = await data.json()
        console.log('useEffect')
        console.log(res.data.suggestions)
        filterData(res.data.suggestions)
        resetfilterData(res.data.suggestions)
    }
    if (allhotel.length == 0 && searchworked == true) {
        return (
            <Shim />
        )
    }
    
    const filterfood = () => {
        let f = document.getElementById('searchFood').value
        console.log(f)
        let searchData = allhotel.filter(acc => {
            if (acc.text.toLowerCase().includes(f.toLowerCase())) {
                console.log('xx')
                console.log(acc)
                return acc
            }
        })
        if (searchData.length == 0) {
           resetsearch(false)
        }
        else {
            resetsearch(true)
            resetfilterData(searchData)
        }
        console.log('uuuuuuuuu', searchData)
        
    }
    const clearInput=()=>{
        let xxx=document.getElementById('searchFood');
        if(xxx.value==''){
              resetfilterData(allhotel)
        }
    }
    console.log('rerender')
    if (searchworked == true) {
        return (
            <div className="body">
                <div className="sortBtn">
                    <input type="text" placeholder="search food" id='searchFood' onChange={()=>{clearInput()}}></input>
                    <button onClick={() => filterfood()}>Search Food</button>
                </div>
                <div className="rest-Container">
                    
                    {unfilterData.map((curr, index) => (
                        <RestCard key={index} curr={curr} />
                    ))}

                    {console.log('unfiltered data',unfilterData)}
                </div>
            </div>
        )
    }
    else {
        return (
            <Errr />
        )
    }
}
export default BodyComponent;
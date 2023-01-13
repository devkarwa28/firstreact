import React,{ useState, useEffect }  from 'react'

function Loader(){
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
    return(
        <>
            <div className="loader" id="loader">
        <div className="cssload-loader">
            <div className="cssload-inner cssload-one"></div>
            <div className="cssload-inner cssload-two"></div>
            <div className="cssload-inner cssload-three"></div>
        </div>
    </div>
        </>
    )
}
export default Loader;
export default function DataTime(){
     const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();

    return (
        <div className="App">
            
            <h2 > {showTime}</h2>
        </div>
    );
}

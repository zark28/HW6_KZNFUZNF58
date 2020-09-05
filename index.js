

const url = "https://corona.lmao.ninja/v2/countries/gh";

function Home({covidData}){
    return (
    
    
    <div className="body">
    <img width="100px" src={covidData.countryInfo.flag}/>
    <div className="main">
    <h1>{covidData.country}</h1>
    <p>Cases:💼 {covidData.cases}</p>
    <p>Deaths:💀 {covidData.deaths}</p>
    <p>Recovered:👌🏿 {covidData.recovered}</p>
    <p>Active:☢ {covidData.active}</p>
    </div>

        <style jsx>{`
            .body{
                margin:0 auto;
                display:flex;
                width:50vw;
                height:40vh;
                background-color:#f1f1f1;
            } 
            img{
                width:50%;
            }
            .main{
                margin:0 auto;
            }   
            .main p{
                padding:10px 0;
            }
        `}</style>
    </div>
    );
    
}

export async function getStaticProps(context){
    const reply =await fetch (url);

    return{
        props:{
            covidData:await reply.json(),
        },
    };
}

export default Home;
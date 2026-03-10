export default function HelloWorld(){
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <img src="img/gambar1.png" alt="logo"/>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
           
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama="Martin"
            nim="2457301126"
            tanggal="2026/03/10"
            />
             <UserCard {...propsUserCard}/>
        
        </div>
    )
}


function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}


function GreetingBinjai(){
    return(
        <small> Salam dari  binjai</small>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}
       
     
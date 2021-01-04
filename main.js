const Discord = require("discord.js");

const client = new Discord.Client();

//const months = ["January", "February", "March", "April", "May", "June", "July"];
const mark = "'";

const People = 
[
    "miika",
    "olli",
    "leia",
    "jaska",
    "miranda",
    "anri",
    "jaakko",
    "konsta",
    "juhani",
    "aleksi",
    "luca",
    "toni",
    "fisu",
    "suola",

    "Miika",
    "Olli",
    "Leia",
    "Jaska",
    "Miranda",
    "Anri",
    "Jaakko",
    "Konsta",
    "Juhani",
    "Aleksi",
    "Luca",
    "Toni",
    "Fisu",
    "Suola"
    
];


const Miika = 
[
    '"Divine benis on puoli minuuttia" - Miika',
    '"kys voittaa aina" - Miika',
    '"Ai mä tiedän sut sä oot se Peruna-sama" - Miika',
    '"Daddy bust me" - Miika',
    '"ainoastaan minä olen itseni sisällä, ei kukaan muu" - Miika',
    '"Se on semmonen hammaskeiju, joka tulee hakeen hampaat suusta" - Miika',
    '"kyl mäki pelkäisin jos tulis vauhdilla kolosta sisään theFirstZombie" - Miika',
    '"Muna suuhun ja homma toimii" - Miika',
    'I' + mark + 'm a bit moist - Miika',
    '"We will burst your little dungeon" - Miika'
];

const Olli = 
[
    '"Mun ajatuksenjuoksu: Teen seittemän viikkosta päivää... :eye: waaaaait" - Olli',
    '"Taidan tyytyä katsomaan loleja" - Olli',
    '"Haluuks joku leikkii mun lemmikkii? :point_right: :point_left:" - Olli',
    '"Shaped glass \ng=good \nl=luck \nSooooo... without good luck you' + mark + 'll be left with shaped ass" - Olli'
];

const Leia = 
[
    '"Yksi jaettuna puolella on kaksi. miksi?" - Leia',
    '"Pakko saada!" - Leia',
    '"Olen lehmä" - Leia'
];

const Jaska = 
[
    '"Sielt tuli räjähtävä Kinder-muna perseeseen" - Jaska',
    '"babygama must be protected at all cost" - Jaska',
    '"vOI VITTU sä saatanan palava nänni mene vittuun" - Jaska',
    '"Mä pistän kohta tulpan sun perseeseen nii ei tuu ilmat enää ulos" - Jaska',
    '"Mä tartten homoja mun elämääni! Konsta tulee vast huomenna!" - Jaska',
    '"Ei juma millaset sukkahousut! Mun pippeli näkyy!" - Jaska',
    '"Diablos usko jo sä et voi paeta sun huonoo lapsuuttas sinne maan alle. Ei se auta mitää. Mun miekka auttaa ku se päättää sun elämäs" - Jaska',
    '"Voi saatanan kyrpä! Nyt mun pitää synnyttää tää puu." - Jaska',
    '"Nyt kyllä etelän pillu teet virheen jos siihen kajoat" - Jaska',
    '"_**niistää äänekkäästi**_ .. Se oli homouden torvi. :] " - Jaska',
    '"Hehee penikseni rahisee koska siellä on hiekkaa" - Jaska',
    '"Konsta kai sä ny ymmärrät et mul ei oo mitää vitun hajua" - Jaska' 
];

const Miranda = 
[
    '"Manipappa, sugardaddy" - Miranda',
    '"Hei mullaki tissit heiluu" - Miranda'
];

const Anri = 
[
    '"Mä sain nähä mun oman ruumiin!" - Anri',
    '"Jumalauta did se yritti"- Anri',
    '"Joo ei ala J:llä."- Anri',
    '"Missä se vitun nainen menee?!"- Anri',
    '"Hehee, mä voin tökkii tätä naista tisseihin"- Anri',
    '"Pieni kalja, suuri pillu." - Anri'
];

const Jaakko = 
[
    '"Mä oon iha tyytyväinen tähä mun vittuun" - Jaakko',
    '"Aleksi kato mun vittua" - Jaakko',
    '"Mä en oo mikään... näkijäsilmäolento." - Jaakko',
    '"Me ollaan kaikki niin big brain, onneks meil on Leia tääl tasapainottamas" - Jaakko',
    '"Noi tekee kunnon vittu machine gun brr brr" - Jaakko',
    '"Kuka tiilaa munkaa" - Jaakko',
    '"Korona siitti minut" - Jaakko',
    '"Eiks kaljan pointti oo se et se on vanhetunutta viljamehua?" - Jaakko'
];

const Konsta = 
[
    '"Mä oon sen alla! AAAARGH!" - Konsta',
    '"Mun pitää hakee jäätelöö et mä jaksan teitä" - Konsta',
    '"Mun saarelta saa persettä!" - Konsta',
    '"Vaihdetaan siementä" - Konsta',
    '"Asia mitä mä vihaan eniten on geometria" - Konsta'
];

const Juhani = 
[
    '":saltSad: no hurt babygama" - Juhani',
    '"Jäbä voi lähtee suola servulta, mutta suola servu ei lähde jäbästä :saltThonk:" - Juhani'
];

const Aleksi = 
[
    '"Sul on aika iso reikä sun vitussa" - Aleksi',
    '"Nää kukat ei vittu pane" - Aleksi',
    '"Siinä on hyvää rakoa"- Aleksi',
    '"Tää botti on pystyssä spagetti koodilla" - Aleksi'
];

const Luca = 
[
    '"Taas mä joudun depsuttaan" - Luca',
    '"Wisk of wain? owo" - Luca',
    '"Commando on vaan niin vaniljan makunen" - Luca',
    '"Konstalle full on tursuitti" - Luca',
    '"Haluan olla sukupuoli ruotsalainen o (Å)" - Luca',
    '"Ah, I seem to be an idiot" - Luca',
    '"Aina kun sun kanssa pelaa FF, ni susta tulee tommonen boomer" - Luca'
];

const Toni = 
[
    '"Shrödingerin Konsta" - Toni'
];

const Fisu = 
[
    '"Älä! Lyö! Mua! Mä tapan kaikki." - Fisu'
];

const Suola = 
[
    'Leia:"Öitä! :3" \nMiika: "Fuck off :Wingless:"',
    'Änri: "mitäs valitsitte?" \nKonste: "Tapetaan Jaska"',
    'Leia: "Miten lentokonetta ajetaan?" \nJuhani: "Hyvin varovasti"',
    'Miika: "Mämmmm" \nJuhani: "Mämmm" \nJaske: "Mämmm" \nMiika: "hyvä keskustelu"',
    'Anri: "Tulilintu kakaa" \nElmo: "I can take it! ... Au!"',
    'Jaska: "Mitäs meinasit syödä siellä suihkussa (Konsta)" \nLuca: "Juustoo?"',
    'Luca: "Onks sil mikä ase" \nKonsta: "Pyssy. Eiku.."',
    'Miika: Tämän valtion korkein johtaja, niinku miko. \nAnri: "Nico nico niiii" \nMiika: ":ree:  Ei kun miko" \nNo one:  \nAbsolutely no one: \nLuca: "Mikko mikko miii"',
    'Anri: "Mun ei ehkä pitäis olla näin ilone siit et pääsen tappaa itteni" \nKonsta: "Ei."',
    'Anri: "Jaska haluukko sä tänne mieluummin aidan vai köyden?" \nJaska: "...Köyden." \nAnri: "Joo mut se vaatii sit köyttä. :c"',
    'Luca: "Mikä tää tetheri on?" \nMiika, Konsta & Jaakko: "Älä"',
    'Konsta: "Taas mä meen ohi. Jos mä vaa lennän tota planeettaa päin."\nAnri: "No sitä sä pysähdyt pysyvästi"',
    'Mags: "Mistä teitä (vihuja) oikeen sikiää" \nAnri: "Saunalahdelta tietenkin"',
    'Luca: "Kuinka helppoa...?"\nKonste & Miika: "Joo ja ei" \nLuca: ._.',
    'Juhani: "Uskallatko googlata?" \nAleksi: "Uskallan" \n*few seconds later* \nAleksi: "ei ois pitäny googlata, ei ois pitäny googlata!"'
];

const quotes = 
{
    "miika": Miika,
    "olli": Olli,
    "leia": Leia,
    "jaska": Jaska,
    "miranda": Miranda,
    "anri": Anri,
    "jaakko": Jaakko,
    "konsta": Konsta,
    "juhani": Juhani,
    "aleksi": Aleksi,
    "luca": Luca,
    "toni": Toni,
    "fisu": Fisu,
    "suola": Suola,

    "Miika": Miika,
    "Olli": Olli,
    "Leia": Leia,
    "Jaska": Jaska,
    "Miranda": Miranda,
    "Anri": Anri,
    "Jaakko": Jaakko,
    "Konsta": Konsta,
    "Juhani": Juhani,
    "Aleksi": Aleksi,
    "Luca": Luca,
    "Toni": Toni,
    "Fisu": Fisu,
    "Suola": Suola
};

const prefix = "!";
client.once("ready", () =>{
    console.log("online");
});

client.on("message",message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    
    const command = args.shift();
    const name = args.slice(-1)[0];

    if( command === "ping" || command === "Ping"){

        message.channel.send("pong");
       
    } else if( command === "quote" || command === "Quote"){

        if (People.includes(name)){
            test = quotes[name];

            const random = Math.floor(Math.random() * test.length);
            message.channel.send(test[random])
        }     
    } else if(command === "help" || command === "Help"){
        message.channel.send("!quote + name to give quote \n\nSide note: quotettavat henkilöt ovat: \nMiika, Olli, Leia, Jaska, Miranda, Anri, Jaakko, Konsta, Juhani, Aleksi, Luca, Toni, Fisu, suola");

    } else{
        //message.channel.send("bork");
        
    }
});

client.login("Nzg4NzcyNDg4MjAwNDU0MjQ2.X9oXnw.mZ0Mpijj5k0UcipilGWr371I_1I");
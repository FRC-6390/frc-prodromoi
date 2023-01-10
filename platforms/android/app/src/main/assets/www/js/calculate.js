
function calculate(){
    readDirectory("matches").then(data => {
        let teams = indexTeams(data);
        for (let entry in teams) {
            if (Object.hasOwnProperty.call(teams, entry)) {
                 sort(entry, teams[entry])
            }
        }
        alert("done");
    });   
}

function indexTeams(files) {
    let array = {};
    files.forEach(entry => {
        let name = entry['name'];
        let number = name.substring((name.indexOf('| Team ') + '| Team '.length), name.length);
        if(!array[number]) {
            array[number] = [];
        }
        array[number].push(name)});
    return array;
}

function sort(team, games){
    let data = {
        Games: [],
        Team:team,    
        Auto:{
            Left_Tarmac:[],
            Quintet:[],
            Human_Scored:[],
            Upper_Hub:[],
            Lower_Hub:[]
        },
        Tele:{
            Upper_Hub:[],
            Lower_Hub:[]
        },
        End_Game: {
            Hanger_Rung:[],
            Result:[],
            Score:[]
        },
        Other: {
            Fouls:[],
            Tech_Fouls:[],
            Yellow_Card:[],
            Red_Card:[],
            Disabled:[],
            Disqualifed:[]
        },
        Averages: {
            Carry: 0,
            Points: 0,
            Climb: 0,
            Wins: 0,
            Auto: 0,
            Auto_Upper_Hub: 0,
            Auto_Lower_Hub: 0,
            Tele: 0,
            Tele_Upper_Hub: 0,
            Tele_Lower_Hub: 0
        }
    };
    let gamesNum = games.length;
    new Promise((resolve, reject) => {
        games.forEach((name, index) => {
            read('matches', name).then(function(entry){
            entry = JSON.parse(entry);
            data["Games"].push(name);
            data["Auto"]["Left_Tarmac"].push(entry["Auto"]["Left_Tarmac"]);
            data["Auto"]["Quintet"].push(entry["Auto"]["Quintet"]);
            data["Auto"]["Human_Scored"].push(entry["Auto"]["Human_Scored"])
            data["Auto"]["Upper_Hub"].push(entry["Auto"]["Upper_Hub"])
            data["Auto"]["Lower_Hub"].push(entry["Auto"]["Lower_Hub"])
            data["Tele"]["Upper_Hub"].push(entry["Tele"]["Upper_Hub"])
            data["Tele"]["Lower_Hub"].push(entry["Tele"]["Lower_Hub"])
            data["End_Game"]["Hanger_Rung"].push(entry["End_Game"]["Hanger_Rung"])
            data["End_Game"]["Result"].push(entry["End_Game"]["Result"])
            data["End_Game"]["Score"].push(entry["End_Game"]["Score"])
            data["Other"]["Fouls"].push(entry["Other"]["Fouls"])
            data["Other"]["Tech_Fouls"].push(entry["Other"]["Tech_Fouls"])
            data["Other"]["Yellow_Card"].push(entry["Other"]["Yellow_Card"])
            data["Other"]["Red_Card"].push(entry["Other"]["Red_Card"])
            data["Other"]["Disabled"].push(entry["Other"]["Disabled"])
            let result = entry["End_Game"]["Result"];
            let rung = entry["End_Game"]["Hanger_Rung"];
            let rungPoints = rung == "Traversal Rung" ? 15 : rung == "High Rung" ? 10 :  rung == "Mid Rung" ? 6 : rung == "Low Rung" ? 4 : 0;
            let carryPoints = ((entry["Auto"]["Left_Tarmac"] == "True" ? 2 : 0) + (parseInt(entry["Auto"]["Upper_Hub"])*2) + (parseInt(entry["Auto"]["Lower_Hub"])*2) + (parseInt(entry["Tele"]["Upper_Hub"])*2) + (parseInt(entry["Tele"]["Lower_Hub"])*2) + rungPoints);
            let score = parseInt(entry["End_Game"]["Score"]);
            console.log(carryPoints);
            data["Averages"]["Wins"] += result == "Win" ? 1 : 0;
            data["Averages"]["Auto_Lower_Hub"] += parseInt(entry["Auto"]["Lower_Hub"]);
            data["Averages"]["Auto_Upper_Hub"] += parseInt(entry["Auto"]["Upper_Hub"]);
            data["Averages"]["Tele_Upper_Hub"] += parseInt(entry["Tele"]["Upper_Hub"]);
            data["Averages"]["Tele_Lower_Hub"] += parseInt(entry["Tele"]["Lower_Hub"]);
            data["Averages"]["Climb"] += rung == "Traversal Rung" ? 4 : rung == "High Rung" ? 3 :  rung == "Mid Rung" ? 2 : rung == "Low Rung" ? 1 : 0;
            data["Averages"]["Carry"] += carryPoints / score <= 0 ? 0 : score;
            data["Averages"]["Points"] += carryPoints;
            if(index == gamesNum-1) resolve(data);
            })
        })
    }).then(compliedData => average(compliedData, gamesNum));
}

function average(data, gamesNum) {

    data["Averages"]["Wins"] = data["Averages"]["Wins"] / gamesNum;
    data["Averages"]["Auto_Lower_Hub"] = data["Averages"]["Auto_Lower_Hub"] / gamesNum;
    data["Averages"]["Auto_Upper_Hub"] = data["Averages"]["Auto_Upper_Hub"] / gamesNum;
    data["Averages"]["Tele_Upper_Hub"] = data["Averages"]["Tele_Upper_Hub"] / gamesNum;
    data["Averages"]["Tele_Lower_Hub"] = data["Averages"]["Tele_Lower_Hub"] / gamesNum;
    data["Averages"]["Auto"] = (data["Averages"]["Auto_Lower_Hub"]*2 + data["Averages"]["Auto_Upper_Hub"]) / gamesNum;
    data["Averages"]["Tele"] = (data["Averages"]["Tele_Upper_Hub"] + data["Averages"]["Tele_Lower_Hub"]) / gamesNum;
    data["Averages"]["Climb"] = data["Averages"]["Climb"] / gamesNum;
    data["Averages"]["Carry"] = data["Averages"]["Carry"] / gamesNum;
    data["Averages"]["Points"] = data["Averages"]["Points"] / gamesNum;
    console.log(data);
    write("stats", data["Team"], data);    
}

function calculate(){
    readDirectory("matches").then(index(files))
}

function index(files) {
    read('calculate', 'index').then(function(index){
        index = JSON.parse(index);
        index["Teams"].forEach(function(team){
            let filter = files.filter(function(item){ return JSON.parse(item["Team_Number"]) == team})
            calculate(team, filter);
        })
    })
    
}

function calculate(teamNumber, filtered){
    let data = {
        Number_Of_Games:filtered.size,
        Team:teamNumber,    
        Auto:{
            Left_Tarmac:0,
            Quintet:0,
            Human_Scored:0,
            Upper_Hub:0,
            Lower_Hub:0
        },
        Tele:{
            Upper_Hub:0,
            Lower_Hub:0
        },
        End_Game: {
            Hanger_Rung:0,
            Result:0,
            Score:0
        },
        Other: {
            Fouls:0,
            Tech_Fouls:0,
            Yellow_Card:0,
            Red_Card:0,
            Disabled:0,
            Disqualifed:0
        } 
    };

    filtered.forEach(function(file) {
        read('matches', JSON.parse(file['name'])).then(function(entry){
            entry = JSON.parse(entry);
            data["Auto"]["Left_Tarmac"] += entry["Auto"]["Left_Tarmac"] == "true" ? 1 : 0
            data["Auto"]["Quintet"] += entry["Auto"]["Quintet"] == "true" ? 1 : 0
            data["Auto"]["Human_Scored"] += entry["Auto"]["Human_Scored"] == "true" ? 1 : 0
            data["Auto"]["Upper_Hub"] += entry["Auto"]["Upper_Hub"];
            data["Auto"]["Lower_Hub"] += entry["Auto"]["Lower_Hub"];
            data["Tele"]["Upper_Hub"] += entry["Tele"]["Upper_Hub"];
            data["Tele"]["Lower_Hub"] += entry["Tele"]["Lower_Hub"];
            data["End_Game"]["Hanger_Rung"] += entry["End_Game"]["Hanger_Rung"];
            data["End_Game"]["Result"] += entry["End_Game"]["Result"]  == "Win" ? 2 : ("Tie" || Canceled) ? 1 : 0
            data["End_Game"]["Score"] += entry["End_Game"]["Score"];
            data["Other"]["Fouls"] += entry["Other"]["Fouls"]
            data["Other"]["Tech_Fouls"] += entry["Other"]["Tech_Fouls"]
            data["Other"]["Yellow_Card"] += entry["Other"]["Yellow_Card"] == "true" ? 1 : 0
            data["Other"]["Red_Card"] += entry["Other"]["Red_Card"] == "true" ? 1 : 0
            data["Other"]["Disabled"] += entry["Other"]["Disabled"] == "true" ? 1 : 0
            data["Other"]["Disqualifed"] += entry["Other"]["Disqualifed"] == "true" ? 1 : 0
        })
    })

    console.log(data);
    
}
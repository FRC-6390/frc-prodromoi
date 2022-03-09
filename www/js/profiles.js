function submit() {
    let data = {
        Team:document.getElementById('team').value,
        Climb:document.getElementById('hanger').value,
        Cycles:document.getElementById('cycles').value,
        Coding:document.getElementById('coding').value,
        Notes:document.getElementById('additional').value
    };
    write("profiles",data["Team"], JSON.parse(JSON.stringify(data))).then((switchPage('../page/profiles.html', 'profiles')))
}
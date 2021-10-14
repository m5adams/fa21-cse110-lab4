let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    blackCars: 40,
    rareCars: 2,
}

for(const x in statistics) {
    if(statistics[x] % 2 == 1 || x.startsWith('r')){
        console.log(statistics[x]);
    }
}
const obstacle = "🪨";
const grass = "🌿";
const pathIco = "🐌";

const startPos = [aleatoire(1, 10), aleatoire(1, 10)];
const endPos = [aleatoire(1, 10), aleatoire(1, 10)];

const map = [
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass]
]

const generateRandomObstacle = number => {
    for(let i = 0; i < number; i++) {
        map[aleatoire(0, 9)][aleatoire(0, 9)] = obstacle;
    }
}

const getPath = (startPos, endPos) => {
    path = [];

    // Y AXIS MOVEMENT
    if(startPos[0] > endPos[0]) {
        for(let i = startPos[0]; i >= endPos[0]; i--) {
            push(path, [i, startPos[1]])
        }
    } else {
        for(let i = startPos[0]; i <= endPos[0]; i++) {
            push(path, [i, startPos[1]])
        }
    }

    // X AXIS MOVEMENT
    if(startPos[1] > endPos[1]) {
        for(let i = startPos[1] - 1; i >= endPos[1]; i--) {
            push(path, [endPos[0], i])
        }
    } else {
        for(let i = startPos[1] + 1; i <= endPos[1]; i++) {
            push(path, [endPos[0], i])
        }
    }

    return path;
}

const displayPath = path => {
    for(let i = 0; i < taille(path); i++) {
        map[path[i][0] - 1][path[i][1] - 1] = pathIco;
        console.log(path[i][0], path[i][1])
    }
}

afficher(`Start : <b>${startPos}</b> - End : <b>${endPos}</b>`)

generateRandomObstacle(15);

displayPath(getPath(startPos, endPos));

afficher(map);
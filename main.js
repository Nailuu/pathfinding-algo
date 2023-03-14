const obstacleList = ['🪨', '🌋', '🛖', '🏠', '🌳', '🌴'];
const pathIcoList = ['🐕', '🐈', '🐅', '🐎', '🦌', '🐄', '🐪', '🦣', '🐿️', '🦫', '🦔', '🦇', '🦘', '🦃', '🦆', '🦆', '🐊', '🐢', '🦖', '🦈', '🐋', '🐛', '🐞', '🕷️', '🐌'];

const obstacle = obstacleList[aleatoire(0, taille(obstacleList) - 1)]
const pathIco = pathIcoList[aleatoire(0, taille(pathIcoList) - 1)]

const grass = "🌿";
const errorIco = "❌";
const pawPrint = "🐾";

const startPos = [aleatoire(0, 9), aleatoire(0, 9)];
const endPos = [aleatoire(0, 9), aleatoire(0, 9)];

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

const isObstacle = coords => {
    console.log(coords[0], coords[1]);
    console.log(map[coords[0]][coords[1]] === obstacle)
    return map[coords[0]][coords[1]] === obstacle;
}

const getPath = (startPos, endPos) => {
    path = [];

    // Y AXIS MOVEMENT
    if(startPos[0] > endPos[0]) {
        for(let i = startPos[0]; i >= endPos[0]; i--) {

            // if there is an obstacle then find another way
            if(isObstacle([i, startPos[1]])) {
                map[i][startPos[1]] = errorIco;
            } else {
                push(path, [i, startPos[1]])
            }
        }
    } else {
        for(let i = startPos[0]; i <= endPos[0]; i++) {

            // if there is an obstacle then find another way
            if(isObstacle([i, startPos[1]])) {
                map[i][startPos[1]] = errorIco;
            } else {
                push(path, [i, startPos[1]])
            }
        }
    }

    // X AXIS MOVEMENT
    if(startPos[1] > endPos[1]) {
        for(let i = startPos[1]; i >= endPos[1]; i--) {

            // if there is an obstacle then find another way
            if(isObstacle([endPos[0], i])) {
                map[endPos[0]][i] = errorIco;
            } else {
                push(path, [endPos[0], i])
            }
        }
    } else {
        for(let i = startPos[1]; i <= endPos[1]; i++) {

            // if there is an obstacle then find another way
            if(isObstacle([endPos[0], i])) {
                map[endPos[0]][i] = errorIco;
            } else {
                push(path, [endPos[0], i])
            }
        }
    }

    return path;
}

const displayPath = path => {
    for(let i = 0; i < taille(path); i++) {
        map[path[i][0]][path[i][1]] = pawPrint;
    }
    map[path[taille(path) - 1][0]][path[taille(path) - 1][1]] = pathIco;
}

afficher(`Start : <b>${startPos[0] + 1}:${startPos[1] + 1}</b> - End : <b>${endPos[0] + 1}:${endPos[1] + 1}</b>`)

generateRandomObstacle(20);

displayPath(getPath(startPos, endPos));

afficher(map);
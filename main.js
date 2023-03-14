const init = (mapSizeMin, mapSizeMax, obstacleRate) => {

// Pets and obstacles list
const obstacleList = ['🪨', '🌋', '🛖', '🏠', '🌳', '🌴'];
const pathIcoList = ['🐕', '🐈', '🐅', '🐎', '🦌', '🐄', '🐪', '🦣', '🐿️', '🦫', '🦔', '🦇', '🦘', '🦃', '🦆', '🦆', '🐊', '🐢', '🦖', '🦈', '🐋', '🐛', '🐞', '🕷️', '🐌'];

// Get random pet and obstacles icon
const obstacle = obstacleList[aleatoire(0, taille(obstacleList) - 1)]
const pathIco = pathIcoList[aleatoire(0, taille(pathIcoList) - 1)]

// Default icons
const grass = "🌿";
const errorIco = "❌";
const pawPrint = "🐾";

// Random map size
const mapSize = aleatoire(mapSizeMin, mapSizeMax);

// Random starting and ending coords
const startPos = [aleatoire(0, mapSize - 1), aleatoire(0, mapSize - 1)];
const endPos = [aleatoire(0, mapSize - 1), aleatoire(0, mapSize - 1)];

// Generate map (array) depending on size
const getMap = size => {
    tmp = [];

    for(let i = 0; i < size; i++) {
        push(tmp, [])
        for(let j = 0; j < size; j++) {
            push(tmp[i], grass)
        }
    }

    return tmp;
}

// Get map
const map = getMap(mapSize);

// Generate the coords of obstacle
const generateRandomObstacle = rate => {

    // Get the number of obstacles based on a pourcentage of all tiles
    size = mapSize * mapSize;
    pourcentage = (size * rate) / 100;

    // Set obstacles in the array
    for(let i = 0; i < pourcentage; i++) {
        map[aleatoire(0, mapSize - 1)][aleatoire(0, mapSize - 1)] = obstacle;
    }
}

// Verify if a tile contain an obstacle
const isObstacle = coords => map[coords[0]][coords[1]] === obstacle;

// Get path, array ouput with coords (ex: [[1, 3], [2, 3], [3, 3]])
const getPath = (startPos, endPos) => {
    path = [];

    // X AXIS MOVEMENT
    if(startPos[0] > endPos[0]) {
        for(let i = startPos[0]; i >= endPos[0]; i--) {

            // if there is an obstacle then find another way
            if(isObstacle([i, startPos[1]])) {
                map[i][startPos[1]] = errorIco;
            } 

            else {
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

    // Y AXIS MOVEMENT
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

// Set path ico depending on coords in game grid
const displayPath = path => {
    for(let i = 0; i < taille(path); i++) {
        map[path[i][0]][path[i][1]] = pawPrint;
    }
    map[path[taille(path) - 1][0]][path[taille(path) - 1][1]] = pathIco;
}

// Get main informations (mapsize, starting point, ending point and distance from A to B)
const getInfo = [
    ["Start", "End", "Map Size", "Distance"],
    [`<b>${startPos[0] + 1}:${startPos[1] + 1}</b>`, 
    `<b>${endPos[0] + 1}:${endPos[1] + 1}</b>`, 
    `<b>${mapSize}x${mapSize}</b>`, 
    `<b>${taille(getPath(startPos, endPos)) - 1}m</b>`]
];

afficher(getInfo);
generateRandomObstacle(obstacleRate);
displayPath(getPath(startPos, endPos));
afficher(map);
}

// Parameters: MapSizeMin, MapSizeMax, ObstacleRate
init(10, 20, 20);
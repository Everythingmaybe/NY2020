const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

let WIDTH = canvas.width = window.innerWidth;
let HEIGHT = canvas.height = window.innerHeight;

document.body.append(canvas);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

/** SETTINGS **/
/** COLORS **/
let BACKGROUND_COLOR = '#000000';

let TREE_COLOR = '#ffffff';
let TREE_SHADOW_COLOR = '#004CB8';

let SNOWFLAKE_COLOR = '#ffffff';
let SNOWFLAKE_SHADOW_COLOR = '#004CB8';

/** TEXT **/
let TEXT = 'С Новым 2022 Годом!';
let TEXT_INPUT_INTERVAL = 150;
let TEXT_INPUT_DELAY = 1000;
const FONT_FAMILY = 'Press Start 2P';

/** SNOW **/
let SNOWFLAKES_COUNT = 100;
let SNOW_SPEED = 1;

/** WIND **/
let WIND_POWER = 1;
let WIND_SPEED = 1;

/** TREE MAPS **/
const FIRST_TREE_MAP = {middle: {length: 10, size: 4, right: {length: 30, left: {length: 20, left: {length: 15, left: {length: 20, left: {length: 10, right: {length: 25, right: {length: 20, left: {length: 1, size: 2, left: {length: 20, right: {length: 38, right: {length: 8}}}}, middle: {length: 5, left: {length: 1, size: 2, left: {length: 19, right: {length: 30, right: {length: 8, right: {length: 8}}}}}, middle: {length: 5, left: {length: 1, size: 2, left: {length: 17, right: {length: 20, right: { length: 1 }}}}, middle: {length: 12, left: { length: 8 }}}}}}}}}, middle: {length: 12, left: {length: 10, right: {size: 2, length: 20, left: {length: 15,}}, middle: {length: 20, left: {length: 25, size: 2, right: {length: 22, left: {length: 10, right: {length: 30}}}}, middle: {length: 10, left: {length: 15, right: { length: 25 }}, middle: {length: 15, right: {length: 20, middle: {length: 30, size: 2, left: {length: 30}}, left: {length: 5, right: {length: 24, size: 2, left: {length: 24, left: {length: 10, right: {length: 8, right: {length: 1}}}}}, middle: {length: 5, right: {length: 18, size: 2, left: {length: 15, left: {length: 5, left: {length: 1, left: {length: 5}}}}}, middle: {length: 10, left: {length: 25, right: {length: 5, right: {length: 5}}}}}}}}}}}}}}}};
const SECOND_TREE_MAP = {middle: {length: 10, size: 2, left: {length: 17, middle: {length: 0}}}};
const THIRD_TREE_MAP = {middle: {length: 10, size: 5, left: {length: 18, right: {length: 50, right: {length: 20, size: 4, left: {length: 16, right: {length: 50, left: {length: 30, middle: {length: 13}, left: {length: 28, size: 2, right: {length: 1, right: {length: 24, left: {length: 20, right: {length: 1}}}, middle: {length: 5, right: {length: 18, left: {length: 30,}}, middle: {length: 5, right: {length: 12, left: {length: 18, left: {length: 10}}}, middle: {length: 14}}}}}}}}}, middle: {length: 20,/**/ left: {length: 20, right: {length: 10, middle: {length: 28, left: {length: 1}}, left: {length: 38, size: 4, right: {length: 25, left: {length: 25}, middle: {length: 20, size: 2, left: {length: 20, right: {length: 5}}}}}}}, middle: {length: 20, right: {length: 25, size: 2, left: {length: 25}}, middle: {length: 7, right: {length: 14, size: 2, left: {length: 15}}, middle: {length: 50, left: {length: 10, size: 4, right: {length: 20, size: 2}, middle: {length: 20, right: {length: 10, left: {length: 20, size: 2, right: {length: 20, right: {length: 10,}}, middle: {length: 8, right: {length: 20,}}}, middle: {length: 18}}}}, middle: {length: 5, right: {length: 20, left: {length: 25, middle: {length: 30, right: {length: 20, left: {length: 5}}}, left: {length: 15, size: 4, right: {length: 22, left: {length: 25, right: {length: 20, size: 3}}, middle: {length: 45, left: {length: 10, size: 2, right: {length: 15}}, middle: {length: 15, right: {length: 10}, middle: {length: 30, star: true}}}}}}}}}}}}}}}};
const FOURTH_TREE_MAP = {middle: {length: 10, size: 4, left: {length: 30, right: {length: 30, right: {length: 1, right: {length: 10, left: {length: 10, size: 2, right: {length: 10, left: {length: 28, right: {length: 15, left: {length: 15}, middle: {length: 10, right: {length: 6}}}}}}, middle: {length: 5, right: {length: 15, left: {length: 15, left: {length: 20, right: {length: 1, right: {length: 15, left: {length: 30}}}, middle: {length: 10, right: {length: 25, left: {length: 8, size: 3}, middle: {length: 25, size: 2, left: {length: 5}, right: {length: 8, left: {length: 10, right: {length: 10}}}}}}}}}, middle: {length: 14, size: 2, left: {length: 26, right: {length: 14}}}}}, middle: {length: 50, right: {length: 15, size: 3, left: {length: 25, right: {length: 30}}}, left: {length: 10, right: {length: 30, right: {length: 7, size: 2, left: {length: 15, right: {length: 10}}}, middle: {length: 20, right: {length: 8, size: 2, left: {length: 6, right: {length: 10}}}, middle: {length: 17, size: 2, right: {length: 20}}}, left: {length: 14, right: {length: 10, middle: {length: 20}, left: {length: 25, size: 2, right: {length: 10, left: {length: 20, left: {length: 10, left: {length: 10, right: {length: 10, right: {length: 10}}}}}}}}, middle: {length: 43}}}}}},}}}};

/** VARIABLES **/
let WIND = 0;
let TEXT_LENGTH = 0;
let SYMBOL_TIME = 0;
let SHOW_SYMBOL = true;
let TEXT_TIME = 0;
let FONT_COLOR_HLS = 0;

class TreeNode {
    left;
    right;
    middle;

    constructor(length, size, star = false) {
        this.length = length;
        this.size = size;
        this.star = star;
        this.coefficient = Math.random() * 360;
    }

    render() {
        const prevSize = ctx.lineWidth;
        const windDegreeCoefficient = Math.cos(WIND * Math.PI / 180) * WIND_POWER;
        this.size && (ctx.lineWidth = this.size);
        ctx.strokeStyle = TREE_COLOR;
        ctx.shadowColor = TREE_SHADOW_COLOR;
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -this.length);
        ctx.translate(0, -this.length)
        ctx.closePath();
        ctx.stroke();

        if (this.left) this.renderBranch(this.left, -45 + windDegreeCoefficient)
        if (this.right) this.renderBranch(this.right, 45 + windDegreeCoefficient)
        if (this.middle) this.renderBranch(this.middle, windDegreeCoefficient)

        if (!this.left && !this.right && !this.middle && this.length) {
            const radius = ctx.lineWidth + ctx.lineWidth * Math.abs(Math.cos(this.coefficient * Math.PI / 180));
            ctx.strokeStyle = ctx.shadowColor = `hsl(${this.coefficient},100%,50%)`;
            ctx.shadowBlur = 10;
            if (this.star) {
                ctx.lineWidth = radius * .8;
                strokeStar(0, 0, radius * 2, 5, 2.5);
            } else {
                ctx.beginPath();
                ctx.arc(0, -radius, radius, 0, 2 * Math.PI, false);
                ctx.stroke();
                ctx.closePath();
            }
        }

        ctx.translate(0, this.length);
        ctx.lineWidth = prevSize;
    }

    update() {
        this.coefficient -= 0.65;
        this.left?.update();
        this.right?.update();
        this.middle?.update();
    }

    renderBranch(node, degree) {
        ctx.rotate(degree * Math.PI / 180);
        node.render();
        ctx.rotate(-degree * Math.PI / 180);
    }
}

class Snowflake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.ySpeed = this.size / 6;
        this.xSpeed = (Math.round(Math.random()) ? 1 : -1) * this.ySpeed;
    }

    update() {
        const windDegreeCoefficient = Math.cos(WIND * Math.PI / 180) * WIND_POWER;
        this.y += this.ySpeed * SNOW_SPEED;
        this.x += this.xSpeed * SNOW_SPEED * windDegreeCoefficient;
        if (this.y > HEIGHT + this.size * 2) {
            this.y = 0;
            this.x = Math.random() * WIDTH;
        }
    }

    render() {
        ctx.strokeStyle = SNOWFLAKE_COLOR;
        ctx.lineWidth = this.size * 0.4;
        ctx.shadowBlur = 10;
        ctx.shadowColor = SNOWFLAKE_SHADOW_COLOR;
        strokeStar(this.x, this.y, this.size, 10, 2)
    }
}

function step(timestamp) {
    render();
    update(timestamp);
    requestAnimationFrame(step);
}

requestAnimationFrame(step);

let snowflakes = createSnow(SNOWFLAKES_COUNT);
const trees = [
    createTree(new TreeNode(30, 7), FIRST_TREE_MAP),
    createTree(new TreeNode(30, 7), SECOND_TREE_MAP),
    createTree(new TreeNode(30, 7), THIRD_TREE_MAP),
    createTree(new TreeNode(30, 7), FOURTH_TREE_MAP),
];

function update(timestamp) {
    snowflakes.forEach((item) => item.update());
    trees.forEach((item) => item.update());
    WIND += WIND_SPEED;
    updateText(timestamp)
}

function updateText(timestamp) {
    FONT_COLOR_HLS += 0.6;
    if (timestamp - SYMBOL_TIME >= 500) {
        SHOW_SYMBOL = !SHOW_SYMBOL;
        SYMBOL_TIME = timestamp;
    }

    if (timestamp - TEXT_TIME >= TEXT_INPUT_INTERVAL && TEXT_INPUT_DELAY <= timestamp) {
        TEXT_TIME = timestamp;
        if (TEXT_LENGTH < TEXT.length) {
            TEXT_LENGTH++
        }
    }
}

function render() {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    renderTree();
    snowflakes.forEach((item) => item.render());
    renderText();
}

function renderText() {
    ctx.font = `${WIDTH / 25}px "${FONT_FAMILY}"`;
    ctx.fillStyle = `hsl(${FONT_COLOR_HLS},100%,50%)`;
    ctx.shadowColor = `black`;
    let text = TEXT.substr(0, TEXT_LENGTH) + (SHOW_SYMBOL ? '|' : ' ');
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(text, (WIDTH - textWidth)/2, HEIGHT / 3)
}

function renderTree() {
    ctx.save();
    ctx.translate((WIDTH / 2) - 50, HEIGHT);
    trees.forEach((item) => {
        ctx.strokeStyle = TREE_COLOR;
        item.render();
        ctx.translate(25, 0)
    })
    ctx.restore();
}

function createTree(parentNode, map) {
    ['left', 'right', 'middle'].forEach((branch) => {
        if (map[branch]) {
            const node = new TreeNode(map[branch].length, map[branch].size, map[branch].star);
            parentNode[branch] = node;
            createTree(node, map[branch])
        }
    })

    return parentNode;
}

function createSnow(count) {
    const snowflakes = [];
    for (let i = 0; i < count; i++) {
        const x = WIDTH * Math.random();
        const y = HEIGHT * Math.random();
        const size = 10 * Math.random();
        snowflakes.push(new Snowflake(x, y, size))
    }
    return snowflakes;
}

function strokeStar(x, y, r, n, inset) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y - r);
    ctx.rotate(Math.PI / n);
    ctx.moveTo(0,0-r);
    for (let i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (r*inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - r);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}

window.addEventListener('resize', () => {
    WIDTH = canvas.width = window.innerWidth;
    HEIGHT = canvas.height = window.innerHeight;
    snowflakes = createSnow(SNOWFLAKES_COUNT);
})

const textInput = document.getElementById('textInput');
textInput.value = TEXT;
textInput.addEventListener('change', (e) => {
    TEXT = e.target.value;
    TEXT_LENGTH = 0;
})

const textIntervalInput = document.getElementById('textIntervalInput');
textIntervalInput.value = TEXT_INPUT_INTERVAL;
textIntervalInput.addEventListener('change', (e) => {
    TEXT_INPUT_INTERVAL = Number(e.target.value);
})

const windPowerInput = document.getElementById('windPowerInput');
windPowerInput.value = WIND_POWER;
windPowerInput.addEventListener('change', (e) => {
    WIND_POWER = Number(e.target.value);
})

const snowflakeCountInput = document.getElementById('snowflakeCountInput');
snowflakeCountInput.value = SNOWFLAKES_COUNT;
snowflakeCountInput.addEventListener('change', (e) => {
    SNOWFLAKES_COUNT = Number(e.target.value);
    snowflakes = createSnow(SNOWFLAKES_COUNT)
})

const backgroundColorInput = document.getElementById('backgroundColorInput');
backgroundColorInput.value = BACKGROUND_COLOR;
backgroundColorInput.addEventListener('change', (e) => {
    BACKGROUND_COLOR = e.target.value;
})

const treeColorInput = document.getElementById('treeColorInput');
treeColorInput.value = TREE_COLOR;
treeColorInput.addEventListener('change', (e) => {
    TREE_COLOR = e.target.value;
})

const snowColorInput = document.getElementById('snowColorInput');
snowColorInput.value = SNOWFLAKE_COLOR;
snowColorInput.addEventListener('change', (e) => {
    SNOWFLAKE_COLOR = e.target.value;
})

const treeShadowColorInput = document.getElementById('treeShadowColorInput');
treeShadowColorInput.value = TREE_SHADOW_COLOR;
treeShadowColorInput.addEventListener('change', (e) => {
    TREE_SHADOW_COLOR = e.target.value;
})

const snowShadowColorInput = document.getElementById('snowShadowColorInput');
snowShadowColorInput.value = SNOWFLAKE_SHADOW_COLOR;
snowShadowColorInput.addEventListener('change', (e) => {
    SNOWFLAKE_SHADOW_COLOR = e.target.value;
})

const windSpeedInput = document.getElementById('windSpeedInput');
windSpeedInput.value = WIND_SPEED;
windSpeedInput.addEventListener('change', (e) => {
    WIND_SPEED = Number(e.target.value)
})

const snowSpeedInput = document.getElementById('snowSpeedInput');
snowSpeedInput.value = SNOW_SPEED;
snowSpeedInput.addEventListener('change', (e) => {
    SNOW_SPEED = Number(e.target.value)
})

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

let WIDTH = canvas.width = window.innerWidth;
let HEIGHT = canvas.height = window.innerHeight;

document.body.append(canvas);

window.addEventListener('resize', () => {
    WIDTH = canvas.width = window.innerWidth;
    HEIGHT = canvas.height = window.innerHeight;
    FONT_SIZE = WIDTH / 25;
})

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let WIND = 0;
let WIND_POWER = 1;

const BACKGROUND_COLOR = 'black';

const TEXT = 'С Новым 2022 Годом!';

let FONT_COLOR_HLS = 0;
let FONT_SIZE = WIDTH / 25;
const FONT_FAMILY = 'Press Start 2P';

const TREE_COLOR = 'white';
const TREE_SHADOW_COLOR = 'blue';

const SNOWFLAKES_COUNT = 100;
const SNOWFLAKE_COLOR = 'white';
const SNOWFLAKE_SHADOW_COLOR = 'blue';

const FIRST_TREE_MAP = {middle: {length: 10, size: 4, right: {length: 30, left: {length: 20, left: {length: 15, left: {length: 20, left: {length: 10, right: {length: 25, right: {length: 20, left: {length: 1, size: 2, left: {length: 20, right: {length: 38, right: {length: 8}}}}, middle: {length: 5, left: {length: 1, size: 2, left: {length: 19, right: {length: 30, right: {length: 8, right: {length: 8}}}}}, middle: {length: 5, left: {length: 1, size: 2, left: {length: 17, right: {length: 20, right: { length: 1 }}}}, middle: {length: 12, left: { length: 8 }}}}}}}}}, middle: {length: 12, left: {length: 10, right: {size: 2, length: 20, left: {length: 15,}}, middle: {length: 20, left: {length: 25, size: 2, right: {length: 22, left: {length: 10, right: {length: 30}}}}, middle: {length: 10, left: {length: 15, right: { length: 25 }}, middle: {length: 15, right: {length: 20, middle: {length: 30, size: 2, left: {length: 30}}, left: {length: 5, right: {length: 24, size: 2, left: {length: 24, left: {length: 10, right: {length: 8, right: {length: 1}}}}}, middle: {length: 5, right: {length: 18, size: 2, left: {length: 15, left: {length: 5, left: {length: 1, left: {length: 5}}}}}, middle: {length: 10, left: {length: 25, right: {length: 5, right: {length: 5}}}}}}}}}}}}}}}};
const SECOND_TREE_MAP = {middle: {length: 10, size: 2, left: {length: 17, middle: {length: 0}}}};
const THIRD_TREE_MAP = {middle: {length: 10, size: 5, left: {length: 18, right: {length: 50, right: {length: 20, size: 4, left: {length: 16, right: {length: 50, left: {length: 30, middle: {length: 13}, left: {length: 28, size: 2, right: {length: 1, right: {length: 24, left: {length: 20, right: {length: 1}}}, middle: {length: 5, right: {length: 18, left: {length: 30,}}, middle: {length: 5, right: {length: 12, left: {length: 18, left: {length: 10}}}, middle: {length: 14}}}}}}}}}, middle: {length: 20,/**/ left: {length: 20, right: {length: 10, middle: {length: 28, left: {length: 1}}, left: {length: 38, size: 4, right: {length: 25, left: {length: 25}, middle: {length: 20, size: 2, left: {length: 20, right: {length: 5}}}}}}}, middle: {length: 20, right: {length: 25, size: 2, left: {length: 25}}, middle: {length: 7, right: {length: 14, size: 2, left: {length: 15}}, middle: {length: 50, left: {length: 10, size: 4, right: {length: 20, size: 2}, middle: {length: 20, right: {length: 10, left: {length: 20, size: 2, right: {length: 20, right: {length: 10,}}, middle: {length: 8, right: {length: 20,}}}, middle: {length: 18}}}}, middle: {length: 5, right: {length: 20, left: {length: 25, middle: {length: 30, right: {length: 20, left: {length: 5}}}, left: {length: 15, size: 4, right: {length: 22, left: {length: 25, right: {length: 20, size: 3}}, middle: {length: 45, left: {length: 10, size: 2, right: {length: 15}}, middle: {length: 15, right: {length: 10}, middle: {length: 30, star: true}}}}}}}}}}}}}}}};
const FOURTH_TREE_MAP = {middle: {length: 10, size: 4, left: {length: 30, right: {length: 30, right: {length: 1, right: {length: 10, left: {length: 10, size: 2, right: {length: 10, left: {length: 28, right: {length: 15, left: {length: 15}, middle: {length: 10, right: {length: 6}}}}}}, middle: {length: 5, right: {length: 15, left: {length: 15, left: {length: 20, right: {length: 1, right: {length: 15, left: {length: 30}}}, middle: {length: 10, right: {length: 25, left: {length: 8, size: 3}, middle: {length: 25, size: 2, left: {length: 5}, right: {length: 8, left: {length: 10, right: {length: 10}}}}}}}}}, middle: {length: 14, size: 2, left: {length: 26, right: {length: 14}}}}}, middle: {length: 50, right: {length: 15, size: 3, left: {length: 25, right: {length: 30}}}, left: {length: 10, right: {length: 30, right: {length: 7, size: 2, left: {length: 15, right: {length: 10}}}, middle: {length: 20, right: {length: 8, size: 2, left: {length: 6, right: {length: 10}}}, middle: {length: 17, size: 2, right: {length: 20}}}, left: {length: 14, right: {length: 10, middle: {length: 20}, left: {length: 25, size: 2, right: {length: 10, left: {length: 20, left: {length: 10, left: {length: 10, right: {length: 10, right: {length: 10}}}}}}}}, middle: {length: 43}}}}}},}}}};

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
        this.y += this.ySpeed;
        this.x += this.xSpeed * windDegreeCoefficient;
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
    update();
    requestAnimationFrame(step);
}

requestAnimationFrame(step);

const snowflakes = createSnow(SNOWFLAKES_COUNT);
const trees = [
    createTree(new TreeNode(30, 7), FIRST_TREE_MAP),
    createTree(new TreeNode(30, 7), SECOND_TREE_MAP),
    createTree(new TreeNode(30, 7), THIRD_TREE_MAP),
    createTree(new TreeNode(30, 7), FOURTH_TREE_MAP),
];

function update() {
    snowflakes.forEach((item) => item.update());
    trees.forEach((item) => item.update());
    WIND += 0.6;
    FONT_COLOR_HLS += 0.6;
}

function render() {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    renderTree();
    snowflakes.forEach((item) => item.render());
    renderText();
}

function renderText() {
    ctx.font = `${FONT_SIZE}px "${FONT_FAMILY}"`;
    ctx.fillStyle = `hsl(${FONT_COLOR_HLS},100%,50%)`;
    ctx.shadowColor = `black`;
    const textWidth = ctx.measureText(TEXT).width;
    ctx.fillText(TEXT, (WIDTH - textWidth)/2, HEIGHT / 3)
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

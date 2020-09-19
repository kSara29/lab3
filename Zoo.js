var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var Spiders = /** @class */ (function () {
    function Spiders(name) {
        this.name = name;
    }
    Spiders.prototype.breath = function () {
        console.log("Я дышу легкими");
    };
    Spiders.prototype.eat = function (food) {
        this.food = food;
        console.log("Я ем все что находиться в моей паутине");
    };
    Spiders.prototype.numOfEyes = function (eyes) {
        this.eyes = eyes;
        if (this.eyes != 8) {
            console.log("\u041E \u0431\u043E\u0436\u0435! \u042D\u0442\u043E\u0442 \u043F\u0430\u0443\u043A \u043C\u0443\u0442\u0430\u043D\u0442. \u0423 \u043D\u0435\u0433\u043E " + this.eyes + " \u0433\u043B\u0430\u0437!");
        }
        else {
            console.log("\u0412\u044B \u0437\u043D\u0430\u043B\u0438, \u0447\u0442\u043E \u0443 \u043F\u0430\u0443\u043A\u043E\u0432 8 \u0433\u043B\u0430\u0437?");
        }
    };
    Spiders.prototype.numOfLimb = function (limb) {
        this.limb = limb;
        if (this.limb < 8) {
            console.log("\u041E\u043C\u0433, \u044F \u043F\u043E\u0442\u0435\u0440\u044F\u043B " + (8 - this.limb) + " \u043D\u043E\u0436\u0435\u043A. \u041E\u0431\u044B\u0447\u043D\u043E \u0443 \u043C\u0435\u043D\u044F \u0438\u0445 8");
        }
        else if (this.limb > 8) {
            console.log("\u0412\u043E\u0443, \u0443 \u044D\u0442\u043E\u0433\u043E \u043F\u0430\u0443\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 8 \u043D\u043E\u0433. \u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u043D \u043F\u0430\u0443\u043A-\u043C\u0443\u0442\u0430\u043D\u0442 \u0441 " + this.limb + " \u043D\u043E\u0433\u0430\u043C\u0438");
        }
        else {
            console.log("\u0423 \u043C\u0435\u043D\u044F 8 \u043D\u043E\u0436\u0435\u043A");
        }
    };
    Spiders.prototype.sleep = function (sleep) {
        this.sleep_hours = sleep;
        console.log("\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u044F \u0441\u043F\u0430\u043B " + this.sleep_hours + " \u0447\u0430\u0441\u043E\u0432. \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u0444\u0430\u043A\u0442, \u044F \u0441\u043F\u043B\u044E \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C\u0438 \u0433\u043B\u0430\u0437\u0430\u043C\u0438");
    };
    Spiders.prototype.habitat = function (environment) {
        this.environment = environment;
        console.log("\u0421\u0435\u0439\u0447\u0430\u0441 \u044F \u0436\u0438\u0432\u0443 \u0432 " + this.environment);
    };
    Spiders.prototype.sound = function (voice) {
        this.voice = voice;
        console.log("\u0418\u0437\u0432\u0438\u043D\u0438, \u043D\u043E \u044F \u043D\u0435 \u043C\u043E\u0433\u0443 \u0438\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0437\u0432\u0443\u043A\u0438. \u041D\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0442\u0435\u0431\u044F \u044F \u0441\u043A\u0430\u0436\u0443 \"" + this.voice + "\"");
    };
    return Spiders;
}());
var Scorpions = /** @class */ (function () {
    function Scorpions() {
    }
    Scorpions.prototype.breath = function () {
        console.log('Как бы странно это не было, но я дышу легкими');
    };
    Scorpions.prototype.eat = function (food) {
        this.food = food;
        console.log("\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043D\u0430 \u0443\u0436\u0438\u043D \u0443 \u043C\u0435\u043D\u044F " + this.food + ". \u041C\u043D\u0435 \u044D\u0442\u043E\u0433\u043E \u0445\u0432\u0430\u0442\u0438\u0442 \u043D\u0430 \u043D\u0435\u0434\u0435\u043B\u044E \u0438\u043B\u0438 \u0434\u0432\u0435 :)");
    };
    Scorpions.prototype.numOfEyes = function (eyes) {
        this.eyes = eyes;
        if (this.eyes > 2 && this.eyes < 12) {
            console.log("\u0423 \u043C\u0435\u043D\u044F " + this.eyes + " \u0433\u043B\u0430\u0437\u043E\u043A");
        }
        else {
            console.log("\u0417\u0430\u0447\u0435\u043C \u0442\u044B \u0441\u0434\u0435\u043B\u0430\u043B \u043C\u0435\u043D\u044F \u043C\u0443\u0442\u0430\u043D\u0442\u043E\u043C \u0441 " + this.eyes + " \u0433\u043B\u0430\u0437\u0430\u043C\u0438");
        }
    };
    Scorpions.prototype.numOfLimb = function (limb) {
        this.limb = limb;
        if (this.limb < 8) {
            console.log("\u041E\u043C\u0433, \u044F \u043F\u043E\u0442\u0435\u0440\u044F\u043B " + (8 - this.limb) + " \u043D\u043E\u0436\u0435\u043A. \u041E\u0431\u044B\u0447\u043D\u043E \u0443 \u043C\u0435\u043D\u044F \u0438\u0445 8");
        }
        else if (this.limb > 8) {
            console.log("\u0412\u043E\u0443, \u0443 \u044D\u0442\u043E\u0433\u043E \u043F\u0430\u0443\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 8 \u043D\u043E\u0433. \u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u043D \u043F\u0430\u0443\u043A-\u043C\u0443\u0442\u0430\u043D\u0442 \u0441 " + this.limb + " \u043D\u043E\u0433\u0430\u043C\u0438");
        }
        else {
            console.log("\u0423 \u043C\u0435\u043D\u044F 8 \u043D\u043E\u0436\u0435\u043A");
        }
    };
    Scorpions.prototype.sleep = function (hours) {
        this.sleep_hours = hours;
        console.log("\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u044F \u043F\u043E\u0441\u043F\u0430\u043B " + this.sleep_hours);
    };
    Scorpions.prototype.habitat = function (environment) {
        this.environment = environment;
        console.log("\u042F \u0440\u043E\u0434\u043E\u043C \u0438\u0437 " + this.environment);
    };
    Scorpions.prototype.sound = function (voice) {
        this.voice = voice;
        console.log(this.voice);
    };
    return Scorpions;
}());
var Predators = /** @class */ (function () {
    function Predators() {
    }
    Predators.prototype.breath = function () {
        console.log("");
    };
    Predators.prototype.eat = function (food) {
    };
    Predators.prototype.milk_feeding = function () {
        console.log("Мои малыши пока, что пьют только молоко");
    };
    Predators.prototype.sleep = function (hours) {
        this.sleep_hours = hours;
        if (this.sleep_hours < 4) {
            console.log("\u041D\u0435 \u043C\u0435\u0448\u0430\u0439 \u043C\u043D\u0435 \u0441\u043F\u0430\u0442\u044C, \u044F \u043F\u043E\u0441\u043F\u0430\u043B \u0442\u043E\u043B\u044C\u043A\u043E " + this.sleep_hours);
        }
        else {
            console.log("\u0417\u0430 " + this.sleep_hours + " \u0447\u0430\u0441\u043E\u0432 \u0441\u043D\u0430, \u044F \u0447\u0443\u0434\u0435\u0441\u043D\u043E \u0432\u044B\u0441\u043F\u0430\u043B\u0441\u044F");
        }
    };
    Predators.prototype.habitat = function (environment) {
        this.environment = environment;
        console.log("\u041C\u043E\u0439 \u0434\u043E\u043C-\u043C\u043E\u044F \u043A\u0440\u0435\u043F\u043E\u0441\u0442\u044C. \u0421\u043F\u0430\u0441\u0438\u0431\u043E " + this.environment);
    };
    Predators.prototype.sound = function (voice) {
        this.voice = voice;
        console.log(this.voice);
    };
    Predators.prototype.hunter = function () {
        console.log("\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u0434\u0435\u043D\u044C \u043D\u0430 \u043E\u0445\u043E\u0442\u0443 \u0437\u0430 " + this.food);
    };
    return Predators;
}());
var Penguin = /** @class */ (function () {
    function Penguin() {
        this.meal = ['рыба', 'краб', 'креветка', 'кальмар', 'осьминог'];
    }
    Penguin.prototype.eat = function (food) {
        this.food = food;
        for (this.i = 0; this.i < this.meal.length; this.i++) {
            if (this.meal[this.i] == this.food) {
                console.log("\u041F\u0438\u043D\u0433\u0432\u0438\u043D\u044B \u043E\u0447\u0435\u043D\u044C \u043B\u044E\u0431\u044F\u0442 \u0435\u0441\u0442\u044C " + this.food);
                break;
            }
            else {
                console.log("\u0424\u0443, \u043D\u0435 \u0434\u0430\u0432\u0430\u0439 " + this.food + " \u043F\u0438\u043D\u0433\u0432\u0438\u043D\u0443");
                break;
            }
        }
    };
    Penguin.prototype.sleep = function (hours) {
        this.sleep_hours = hours;
        if (this.sleep_hours < 2) {
            console.log("\u042D\u0439, \u0430 \u043D\u0443 \u0434\u0430\u0439 \u043C\u043D\u0435 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043F\u0430\u0442\u044C, " + this.sleep_hours + " \u0447\u0430\u0441\u0430 \u043D\u0435 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E");
        }
        else if (this.sleep_hours > 2 && this.sleep_hours <= 4) {
            console.log(this.sleep_hours + " \u0447\u0430\u0441\u0430 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043D\u0430 \u0441\u043E\u043D ");
        }
        else {
            console.log("\u041F\u043E\u0447\u0435\u043C\u0443 \u0442\u044B \u043C\u0435\u043D\u044F \u043D\u0435 \u0440\u0430\u0437\u0431\u0443\u0434\u0438\u043B? \u042F \u043F\u0440\u043E\u0441\u0438\u043B \u0440\u0430\u0437\u0431\u0443\u0434\u0438\u0442\u044C \u043C\u0435\u043D\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0447\u0430\u0441\u0430 :(");
        }
    };
    Penguin.prototype.breath = function () {
        console.log("I breathe with my lungs");
    };
    Penguin.prototype.habitat = function () {
        console.log("I live in Antarctica. Don't confuse with Arctic");
    };
    Penguin.prototype.sound = function () {
        console.log("Улыбаемся и машем, парни");
    };
    Penguin.prototype.fly = function () {
        console.log("\u041D\u0435 \u0441\u044B\u043F\u044C \u0441\u043E\u043B\u044C \u043D\u0430 \u0440\u0430\u043D\u0443, \u044F \u043D\u0435 \u0443\u043C\u0435\u044E \u043B\u0435\u0442\u0430\u0442\u044C((");
    };
    return Penguin;
}());
var Owl = /** @class */ (function () {
    function Owl() {
    }
    Owl.prototype.breath = function () {
        console.log("Я дышу легкими");
    };
    Owl.prototype.eat = function (food) {
        this.food = food;
        console.log("\u041D\u0430 \u0443\u0436\u0438\u043D \u0443 \u043C\u0435\u043D\u044F " + this.food);
    };
    Owl.prototype.sleep = function (hours) {
        this.sleep_hours = hours;
        console.log("\u042F \u0441\u043F\u043B\u044E \u0434\u043D\u0435\u043C \u043F\u043E " + this.sleep_hours);
    };
    Owl.prototype.habitat = function (environment) {
        this.environment = environment;
        console.log("\u042F \u043E\u0431\u0438\u0442\u0430\u044E \u0432 " + this.environment);
    };
    Owl.prototype.sound = function () {
        console.log("Вот ваше письмо из Хогвартса");
    };
    Owl.prototype.fly = function () {
        console.log("I believe I can fly");
    };
    return Owl;
}());
var Shark = /** @class */ (function () {
    function Shark() {
        this.fish = ["\u0440\u044B\u0431\u0430", "\u0440\u0430\u043A", "\u043E\u043C\u0430\u0440", "\u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430", "\u0447\u0435\u043B\u043E\u0432\u0435\u043A", "\u0447\u0435\u0440\u0435\u043F\u0435\u0445\u0430", "\u0434\u0435\u043B\u044C\u0444\u0438\u043D"];
    }
    Shark.prototype.breath = function () {
        console.log("Я дышу с помощью жабр");
    };
    Shark.prototype.eat = function (food) {
        this.food = food;
        for (this.i = 0; this.i < this.fish.length; this.i++) {
            if (this.fish[this.i] == this.food) {
                console.log("\u041C\u043C\u043C\u043C\u043C, " + this.food + " - \u0441\u0430\u043C\u044B\u0439(\u0430\u044F) \u0432\u043A\u0443\u0441\u043D\u044B\u0439(\u0430\u044F) \u0438\u0437 \u0442\u0435\u0445, \u0447\u0442\u043E \u044F \u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B");
            }
            else {
                console.log(this.food + "? \u042F \u0442\u0430\u043A\u043E\u0435 \u043D\u0435 \u0435\u043C!");
            }
        }
    };
    Shark.prototype.sleep = function (hours) {
        this.sleep_hours = hours;
        console.log("I sleep for " + this.sleep_hours);
    };
    Shark.prototype.habitat = function (environment) {
        this.environment = environment;
        console.log("\u042F \u043E\u0431\u0438\u0442\u0430\u044E \u0432 " + this.environment);
    };
    Shark.prototype.sound = function () {
        console.log("Baby shark, doo, doo, doo, doo, doo, doo ");
    };
    Shark.prototype.swim = function () {
        console.log("\u042F \u043E\u0447\u0435\u043D\u044C \u043B\u044E\u0431\u043B\u044E \u043F\u043B\u0430\u0432\u0430\u0442\u044C");
    };
    return Shark;
}());
var Skate = /** @class */ (function () {
    function Skate() {
    }
    Skate.prototype.breath = function () {
        console.log("Я дышу с помощью жабр");
    };
    Skate.prototype.eat = function (food) {
        this.food = food;
        console.log("\u0421\u0435\u0433\u043E\u0434\u0433\u044F \u044F \u0441\u044A\u0435\u043B " + this.food);
    };
    Skate.prototype.sleep = function (hours) {
        this.sleep_hours = hours;
        console.log("I loove to sleep. Today I slept " + this.sleep_hours);
    };
    Skate.prototype.habitat = function (environment) {
        this.environment = environment;
        console.log("I live in " + this.environment);
    };
    Skate.prototype.sound = function (voice) {
        this.voice = voice;
        console.log(this.voice);
    };
    Skate.prototype.swim = function () {
        console.log("\u042F \u043F\u043B\u0430\u0432\u0430\u044E \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0434\u043D\u0435 (\u0441\u0432\u043E\u0435\u0439 \u0441\u0430\u043C\u043E\u043E\u0446\u0435\u043D\u043A\u0438)");
    };
    return Skate;
}());
var Crocodile = /** @class */ (function () {
    function Crocodile() {
    }
    Crocodile.prototype.breath = function () {
        console.log("\u042F \u0434\u044B\u0448\u0443 \u043B\u0435\u0433\u043A\u0438\u043C\u0438");
    };
    Crocodile.prototype.eat = function (food) {
        this.food = food;
        console.log("\u041E\u0431\u0435\u0434 \u0431\u044B\u043B \u0441\u044B\u0442\u043D\u044B\u0439. " + this.food + " \u0431\u044B\u043B \u043E\u0447\u0435\u043D\u044C \u0432\u043A\u0443\u0441\u043D\u044B\u0439 ");
    };
    Crocodile.prototype.sleep = function (hours) {
        this.sleep_hours = hours;
        console.log("Today I slept " + this.sleep_hours + ". Fact I sleep with open eyes");
    };
    Crocodile.prototype.habitat = function (env) {
        this.environment = env;
        console.log("My habitat is " + this.environment);
    };
    Crocodile.prototype.sound = function (voice) {
        this.voice = voice;
        console.log("I am GOODZIILAA");
    };
    return Crocodile;
}());
var Snake = /** @class */ (function () {
    function Snake() {
    }
    Snake.prototype.breath = function () {
        console.log("\u042F \u0434\u044B\u0448\u0443 \u043B\u0435\u0433\u043A\u0438\u043C\u0438");
    };
    Snake.prototype.eat = function (food) {
        this.food = food;
        console.log("Today I ate " + this.food);
    };
    Snake.prototype.sleep = function (hours) {
        this.sleep_hours = hours;
        console.log("After a good dinner I slept for a " + this.sleep_hours + " hours");
    };
    Snake.prototype.habitat = function (env) {
        this.environment = env;
        console.log("My home is " + this.environment);
    };
    Snake.prototype.sound = function () {
        console.log("ssPyyythooonsssss isssss myyyy Broooossss");
    };
    return Snake;
}());
var imperator_penguin = new Penguin();
imperator_penguin.breath();
imperator_penguin.eat("картошка");
imperator_penguin.sleep(4);
imperator_penguin.habitat();
imperator_penguin.sound();

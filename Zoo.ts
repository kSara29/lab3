abstract class Animals{
    name:string
    food:string
    sleep_hours:number
    environment:string
    voice:string

    abstract eat(food:string):void

    abstract sleep(hours:number):void

    abstract breath():void

    abstract sound(voice:string)

}

interface IArachnid extends Animals{
    readonly name;
    limb:number
    eyes:number
    numOfEyes(eyes:number):void
    numOfLimb(limb:number):void

}


interface IMammal extends Animals{
    milk_feeding()
    hunter()
}

interface IBird extends Animals{
    fly()
}

interface IFish extends Animals{
    swim()
}

interface IReptile extends Animals{

}

class Spiders implements IArachnid{
    eyes: number;
    food: string;
    limb: number
    readonly name: string;
    sleep_hours: number;
    environment:string
    voice:string

    constructor(name:string) {
        this.name = name
    }

    breath(): void {
        console.log("Я дышу легкими")
    }

    eat(food: string): void {
        this.food = food
        console.log("Я ем все что находиться в моей паутине")

    }

    numOfEyes(eyes: number):void {
        this.eyes = eyes
        if(this.eyes != 8 ){
            console.log(`О боже! Этот паук мутант. У него ${this.eyes} глаз!`)
        }
        else{
            console.log(`Вы знали, что у пауков 8 глаз?`)
        }
    }

    numOfLimb(limb: number) {
        this.limb = limb
            if(this.limb < 8){
                console.log(`Омг, я потерял ${8-this.limb} ножек. Обычно у меня их 8`)
            }
            else if(this.limb >8){
                console.log(`Воу, у этого паука больше 8 ног. Может быть он паук-мутант с ${this.limb} ногами`)
            }
            else{
                console.log(`У меня 8 ножек`)
            }
    }

    sleep(sleep:number){
        this.sleep_hours = sleep
        console.log(`Сегодня я спал ${this.sleep_hours} часов. Интересный факт, я сплю с открытыми глазами`)
    }

    habitat(environment:string){
        this.environment = environment
        console.log(`Сейчас я живу в ${this.environment}`)

    }

    sound(voice:string){
        this.voice = voice
        console.log(`Извини, но я не могу издавать звуки. Но специально для тебя я скажу "${this.voice}"`)
    }

}

class Scorpions implements  IArachnid{
    eyes: number;
    food: string;
    limb:number
    readonly name: string;
    sleep_hours: number;
    environment:string
    voice:string

    breath(): void {
        console.log('Как бы странно это не было, но я дышу легкими')
    }

    eat(food): void {
        this.food = food
        console.log(`Спасибо, сегодня на ужин у меня ${this.food}. Мне этого хватит на неделю или две :)`)
    }

    numOfEyes(eyes: number) {
        this.eyes = eyes
        if(this.eyes>2 && this.eyes<12){
            console.log(`У меня ${this.eyes} глазок`)
        }
        else{
            console.log(`Зачем ты сделал меня мутантом с ${this.eyes} глазами`)
        }
    }

    numOfLimb(limb: number) {
        this.limb = limb
        if(this.limb < 8){
            console.log(`Омг, я потерял ${8-this.limb} ножек. Обычно у меня их 8`)
        }
        else if(this.limb >8){
            console.log(`Воу, у этого паука больше 8 ног. Может быть он паук-мутант с ${this.limb} ногами`)
        }
        else{
            console.log(`У меня 8 ножек`)
        }
    }

    sleep(hours: number): void {
        this.sleep_hours = hours
        console.log(`Сегодня я поспал ${this.sleep_hours}`)
    }

    habitat(environment:string) {
        this.environment = environment
        console.log(`Я родом из ${this.environment}`)
    }

    sound(voice:string){
        this.voice = voice
        console.log(this.voice)
    }

}

class Predators implements IMammal{
    food: string;
    name: string;
    sleep_hours: number;
    environment:string
    voice:string

    breath(): void {
        console.log("")
    }

    eat(food): void {
    }

    milk_feeding() {
        console.log("Мои малыши пока, что пьют только молоко")
    }

    sleep(hours: number): void {
        this.sleep_hours = hours
        if(this.sleep_hours<4){
            console.log(`Не мешай мне спать, я поспал только ${this.sleep_hours}`)
        }
        else{
            console.log(`За ${this.sleep_hours} часов сна, я чудесно выспался`)
        }
    }

    habitat(environment:string){
        this.environment = environment
        console.log(`Мой дом-моя крепость. Спасибо ${this.environment}`)
    }

    sound(voice:string){
        this.voice = voice
        console.log(this.voice)
    }

    hunter(){
        console.log(`Сегодня прекрасный день на охоту за ${this.food}`)
    }
}

class Penguin implements IBird{
    food: string;
    name: string
    sleep_hours: number
    meal: Array<string> = ['рыба', 'краб','креветка','кальмар','осьминог']
    environment:string
    voice:string
    i:number

    eat(food): void {
        this.food = food
        for (this.i = 0; this.i < this.meal.length; this.i++) {
            if (this.meal[this.i] == this.food) {
                console.log(`Пингвины очень любят есть ${this.food}`)
                break
            }
            else{
                console.log(`Фу, не давай ${this.food} пингвину`);
                break
            }
        }
    }

    sleep(hours: number): void {
        this.sleep_hours = hours
        if(this.sleep_hours<2){
            console.log(`Эй, а ну дай мне нормально поспать, ${this.sleep_hours} часа не достаточно`)
        }
        else if(this.sleep_hours>2 && this.sleep_hours<=4){
            console.log(`${this.sleep_hours} часа достаточно на сон `)
        }
        else{
            console.log(`Почему ты меня не разбудил? Я просил разбудить меня через 4 часа :(`)
        }
    }

    breath(): void {
        console.log("I breathe with my lungs")
    }

    habitat() {
        console.log(`I live in Antarctica. Don't confuse with Arctic`)

    }

    sound(){
        console.log("Улыбаемся и машем, парни")
    }

    fly(){
        console.log(`Не сыпь соль на рану, я не умею летать((`)
    }

}

class Owl implements IBird{
    food: string;
    name: string;
    sleep_hours: number;
    environment:string
    voice:string

    breath(): void {
        console.log("Я дышу легкими")
    }

    eat(food): void {
        this.food = food
        console.log(`На ужин у меня ${this.food}`)
    }


    sleep(hours: number){
        this.sleep_hours = hours
        console.log(`Я сплю днем по ${this.sleep_hours}`)
    }

    habitat(environment:string) {
        this.environment = environment
        console.log(`Я обитаю в ${this.environment}`)
    }

    sound(){
        console.log("Вот ваше письмо из Хогвартса")

    }

    fly(){
        console.log(`I believe I can fly`)
    }


}

class Shark implements IFish{
    food: string;
    name: string;
    sleep_hours: number;
    environment:string
    voice:string
    fish:Array<string> = [`рыба`,`рак`,`омар`,`креветка`,`человек`,`черепеха`,`дельфин`]
    i:number

    breath(): void {
        console.log("Я дышу с помощью жабр")
    }

    eat(food:string):void {
            this.food = food
            for(this.i=0;this.i<this.fish.length;this.i++){
                if(this.fish[this.i] == this.food){
                    console.log(`Ммммм, ${this.food} - самый(ая) вкусный(ая) из тех, что я пробовал`)
                }
                else{
                    console.log(`${this.food}? Я такое не ем!`)
                }
            }
    }

    sleep(hours: number): void {
        this.sleep_hours = hours
        console.log(`I sleep for ${this.sleep_hours}`)
    }

    habitat(environment:string) {
        this.environment = environment
        console.log(`Я обитаю в ${this.environment}`)
    }

    sound(){
        console.log("Baby shark, doo, doo, doo, doo, doo, doo ")
    }

    swim(){
        console.log(`Я очень люблю плавать`)
    }


}

class Skate implements IFish{
    food: string
    name: string
    sleep_hours: number
    environment:string
    voice:string


    breath(): void {
        console.log("Я дышу с помощью жабр")
    }

    eat(food): void {
        this.food = food
        console.log(`Сегодгя я съел ${this.food}`)
    }


    sleep(hours: number): void {
        this.sleep_hours = hours
        console.log(`I loove to sleep. Today I slept ${this.sleep_hours}`)
    }

    habitat(environment:string) {
        this.environment = environment
        console.log(`I live in ${this.environment}`)
    }

    sound(voice:string){
        this.voice = voice
        console.log(this.voice)
    }

    swim(){
        console.log(`Я плаваю только на дне (своей самооценки)`)
    }


}

class Crocodile implements IReptile{
    food: string;
    name: string;
    sleep_hours: number
    environment:string
    voice:string

    breath(): void {
        console.log(`Я дышу легкими`)
    }

    eat(food): void {
        this.food = food
        console.log(`Обед был сытный. ${this.food} был очень вкусный `)
    }

    sleep(hours: number): void {
        this.sleep_hours = hours
        console.log(`Today I slept ${this.sleep_hours}. Fact I sleep with open eyes`)
    }

    habitat(env:string) {
        this.environment = env
        console.log(`My habitat is ${this.environment}`)
    }

    sound(voice:string){
        this.voice = voice
        console.log(`I am GOODZIILAA`)
    }


}

class Snake implements IReptile{
    food: string;
    name: string;
    sleep_hours: number;
    environment:string
    voice:string

    breath(): void {
        console.log(`Я дышу легкими`)
    }


    eat(food): void {
        this.food = food
        console.log(`Today I ate ${this.food}`)
    }

    sleep(hours: number): void {
        this.sleep_hours = hours
        console.log(`After a good dinner I slept for a ${this.sleep_hours} hours`)
    }

    habitat(env:string) {
        this.environment = env
        console.log(`My home is ${this.environment}`)
    }

    sound(){
        console.log(`ssPyyythooonsssss isssss myyyy Broooossss`)

    }
}

let imperator_penguin = new Penguin();
imperator_penguin.breath()
imperator_penguin.eat("картошка")
imperator_penguin.sleep(4)
imperator_penguin.habitat()
imperator_penguin.sound();





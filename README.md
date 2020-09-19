##Лабораторная работа №3

###Тема: ООП в TypeScript

В лабораторной работе я рассматривала модель животного мира. Создала интерфейсы (IArachnid, IMammal, IBird, IFish,  IReptile).
Все эти интерфейсы наследуются от базового абстрактного класса Animals. 

В abstract class Animals задействованы абстрактные методы.

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

Далее создала классы, которые имплементировала от интерфейсов. Эти классы описывают конкретные отряды животных.
Классы Spiders, Scorpions имплементируют интерфейс IArachnid; Predators - IMammal; 
Penguin, Owl - IBird; Shark, Skate - IFish; Crocodile, Snake - IReptile. 
Каждый класс реализует методы класса Animals и интерфейса.

После создания объекта в зависимости от того, какой метод мы выбрали 
и что мы туда передали, будет соответственный консольный вывод. 

К примеру мсы создали объект imperator_penguin класса Penguin. И вызываем его методы

    let imperator_penguin = new Penguin();
    imperator_penguin.breath()
    imperator_penguin.eat("картошка")
    imperator_penguin.sleep(4)
    imperator_penguin.habitat()
    imperator_penguin.sound();
    
В консоли будет следующий вывод:
    
    I breathe with my lungs
    Фу, не давай картошка пингвину
    4 часа достаточно на сон 
    I live in Antarctica. Don't confuse with Arctic
    Улыбаемся и машем, парни




    

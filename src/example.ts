// Работа с простыми типами
function concat(str1: string, str2: string):string {
    return str1 + str2;
};

concat('Hello ', 'World');
// concat(1,'fff'); // error

// Работа с интерфейсами
interface MyHomeValue{
    [n: string]: string | Array<string|number> | Array<MyHomeValue>
}

const MyHometask: MyHomeValue = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// Типизация функций, используя Generic
interface MyArray<T> {
    [n: number]: T;

    map<U>(fn: (el: T) => U): U[];
    reduce(fn: (ac: T, item: T) => T): T;
}

const tsArray: MyArray<number> = [1,2,3,4];

tsArray.map((i) => i + 1)
tsArray.reduce((a,i) => a + i);
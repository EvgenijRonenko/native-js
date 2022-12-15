let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // isStudent: true
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getNames = (arr) => {
    const result = []
    const getStName = (st) => st.name
    for (let i = 0; i < arr.length; i++) {
        result[i] = getStName(arr[i])
    }
return result;
}

const getScores = (arr) => {
    const result = []
    const getStScore = (st) => st.scores
    for (let i = 0; i < arr.length; i++) {
        result[i] = getStScore(arr[i])
    }

    return result
}

const getResult = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i])
    }

    return result
}

console.log(getResult(students, getNames))


        const selfMadeFilter = (arr, filterFn) => {
    const result = []
            for (let i = 0; i < arr.length; i++) {
                if(filterFn(arr[i]) === true) {
                    result.push(arr[i])
                }
            }
            return result
}

const func = (st) => st.score >= 100
console.log(students.filter(func))
console.log(selfMadeFilter(students,func))

const findBob = (st) => st.name === 'Bob'

/*const selfMadeFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if(filterFn(arr[i]) === true) {
            result.push(arr[i])
        }
    }
}*/

console.log(students.find(findBob))


const selfMadePop = (arr) => {
    delete arr[arr.length - 1]
    return arr;
}

сonsole.log(arr);

/*
const selfMadeIndexOf = (arr, el) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if(el === arr[i]) {
            return(  [i])
        }

    return -1
}*/

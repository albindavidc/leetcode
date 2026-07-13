/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {

    for (let i = 0; i < people.length; i++) {

        for (let j = i+1; j < people.length; j++) {

            if (people[i][0] < people[j][0] || (people[i][0] === people[j][0] && people[i][1] > people[j][1])) {
                [people[i], people[j]] = [people[j], people[i]]
            }

        }

    }

    let queue = [];

    for(let person of people){
        queue.splice(person[1], 0, person);
    }

    return queue

};
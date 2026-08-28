/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    let graph = Array.from({length: numCourses}, () => []);

    for(let [course, prerequisite] of prerequisites){
        graph[prerequisite].push(course);
    }

    let visited = new Array(numCourses).fill(0);
    let result = [];

    function dfs(course){
        if(visited[course] === 1) return false;
        if(visited[course] === 2) return true;

        visited[course] = 1;

        for(let next of graph[course]){
            if(!dfs(next)) return false;
        }

        visited[course] = 2;
        result.push(course)

        return true;
    }

    for(let i = 0; i<numCourses; i++){
        if(!dfs(i)) return []
    }

    return result.reverse()
};
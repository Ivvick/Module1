"use strict";
exports.__esModule = true;
var userInfo_1 = require("./userInfo");
var users_1 = require("./users");
function getUsersJobPositions(arr1) {
    var newUserArray = [];
    if (Array.isArray(users_1.usersArray)) {
        users_1.usersArray.forEach(function (elUser) {
            var userInfo = userInfo_1.usersInfoArray.find(function (el) { return el.userid === elUser.userid; });
            if (userInfo) {
                var newUserObj = {
                    name: userInfo.name,
                    position: userInfo.organization.position,
                    age: userInfo.age,
                    gender: 'man'
                };
                newUserArray.push(newUserObj);
            }
        });
    }
    return newUserArray;
}
var newUsersArray = getUsersJobPositions(users_1.usersArray);
console.log(newUsersArray);

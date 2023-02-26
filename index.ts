import {usersInfoArray} from "./userInfo";
import {IUsersArray, usersArray} from "./users";

interface IUsersCustom{
    name: string,
    position: string,
    age: number,
    gender?: string
}


function getUsersJobPositions(arr1: IUsersArray[]) {
    const newUserArray: IUsersCustom[] = [];
    if (Array.isArray(usersArray)) {
        usersArray.forEach((elUser) => {
            const userInfo = usersInfoArray.find(el => el.userid === elUser.userid)
            // const userGender = usersArray.find(el => el.userid === elUser.userid)
            if (userInfo) {
                const newUserObj: IUsersCustom = {
                    name: userInfo.name,
                    position: userInfo.organization.position,
                    age: userInfo.age,
                    // gender: userGender.gender, --- почему-то не работает, я не могу понять почему
                    gender: 'any'
                }
                newUserArray.push(newUserObj);
            }
        })
    }

    return newUserArray;
}

const newUsersArray = getUsersJobPositions(usersArray);
console.log(newUsersArray);
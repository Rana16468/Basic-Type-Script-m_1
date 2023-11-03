"use strict";
// object --> refrance type object
const userInfo = {
    companyName: 'Programming Hero',
    firstName: 'Ali',
    middleName: 'Mohammad',
    lastName: 'Sohel Rana'
};
userInfo.firstName = 'Joy';
console.log(userInfo);

"use strict";
{
    //spread operator
    //rest operator
    //destring 
    const brost1 = ['Ali', 'Mohammad', 'Sohel', 'Rana'];
    const brost2 = ['Daffodil', 'International', 'University'];
    brost1.push(...brost2);
    console.log(brost1);
    const mentor1 = {
        typescript: 'Sohel', next: 'Rana'
    };
    const mentor2 = {
        dbms: 'Abdullah',
        prisma: 'kasham'
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    console.log(mentorList);
    //lern operator 
    const restFriends = (...friends) => {
        friends.forEach((v) => console.log(v));
    };
    restFriends('Amir Hamza', 'Pollab', 'Joy', 'Arman', 'Akib');
}

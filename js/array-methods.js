const people = [
  {
    name: "Mykola",
    balance: 25000,
    skills: ["play basketball", "programming"],
    friends: [
      {
        name: "Maxi",
      },
      {
        name: "Noah",
      },
      {
        name: "Leni",
      },
    ],
  },
  {
    name: "Leni",
    balance: 20000,
    skills: ["gymnastics"],
    friends: [
      {
        name: "Maxi",
      },
      {
        name: "Mykola",
      },
      {
        name: "Lara",
      },
    ],
  },
  {
    name: "Lara",
    balance: 23500,
    skills: ["fitness"],
    friends: [
      {
        name: "Maxi",
      },
      {
        name: "Noah",
      },
      {
        name: "Leni",
      },
      {
        name: "Gerome",
      },
      {
        name: "Mykola",
      },
    ],
  },
];

const totalBalance = (people) =>
  people.reduce((tBalance, { balance } = person) => (tBalance += balance), 0);
console.log(totalBalance(people));

const peopleFriend = (people, friendName) =>
  people.reduce((pFriend, { friends, name } = person) => {
    friends.forEach(({ name: nameFriend } = friends) => {
      if (nameFriend === friendName) {
        pFriend.push(name);
      }
    });
    return pFriend;
  }, []);
console.log(peopleFriend(people, "Noah"));

const peopleNumberOfFriends = (people) =>
  people.sort((a, b) => b.friends.length - a.friends.length);
console.log(peopleNumberOfFriends(people));

const peopleSkills = people.reduce((pSkills = [...skills], { skills } = person) => {
  skills.forEach((skill) => {
    if (pSkills.includes(skill)) {
    } else {
      pSkills.push(skill);
    }
  });
  return pSkills;
}, []);
console.log(peopleSkills.sort());

/**
 * There is an array,
 * {firstName: 'xxx',
profession: ‘xxx’}
lastName, note can
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
**/

const users = [
  {
    firstName: "John",
    lastName: "Smith",
    customerID: "customer-2001",
    note: "",
    profession: "engineer",
  },
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "customer-1998",
    note: "",
    profession: "productOwner",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    customerID: "customer-1990",
    note: "",
    profession: "systemAnalytics",
  },
  {
    firstName: "John",
    lastName: "Smithson",
    customerID: "customer-1989",
    note: "",
    profession: "student",
  },
  {
    firstName: "Johnny",
    lastName: "Clarkson",
    customerID: "customer-2004",
    note: "",
    profession: "freelancer",
  },
  {
    firstName: "Bronny",
    lastName: "James",
    customerID: "customer-2004",
    note: "",
    profession: "student",
  },
];

/**
Q2. Please sort by ‘profession’ to follow the principle. (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/

function sortByType(users) {
  const weightByProfession = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };

  const sortedUsers = [
    ...users.sort((user1, user2) => {
      return (
        weightByProfession[user2.profession] -
        weightByProfession[user1.profession]
      );
    }),
  ];

  console.log(sortedUsers);
}

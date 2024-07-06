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
    profession: 'engineer',
  },
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "customer-1998",
    note: "",
    profession: 'productOwner',
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    customerID: "customer-1990",
    note: "",
    profession: 'systemAnalytics',
  },
  {
    firstName: "John",
    lastName: "Smithson",
    customerID: "customer-1989",
    note: "",
    profession: 'student',
  },
  {
    firstName: "Johnny",
    lastName: "Clarkson",
    customerID: "customer-2004",
    note: "",
    profession: 'freelancer',
  },
  {
    firstName: "Bronny",
    lastName: "James",
    customerID: "customer-2004",
    note: "",
    profession: 'student',
  },
];

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/

function sortByUserName(users) {


  function compareString(s1, s2) {
    let i = 0;
    while (s1[i] || s2[i]) {
      // when s1 length < s2 length, sort s1 before s2
      // e.g: ['john', 'johnny']
      if (!s1[i]) {
        return -1;
      }

      // when s1 length > s2 length, sort s2 before s1
      // e.g: ['johnny', 'john']
      if (!s2[i]) {
        return 1;
      }

      if (s1[i] < s2[i]) {
        return -1;
      }

      if (s1[i] > s2[i]) {
        return 1;
      }

      i++
    }

    return 0;
  }

  const sortedUsers = [...users.sort((user1, user2) => {
    const compareFns = [
      () => compareString(user1.firstName, user2.firstName),
      () => compareString(user1.lastName, user2.lastName),
      () => compareString(user1.customerId, user2.customerID)
    ]
    for (let fn of compareFns) {
      const sortValue = fn()
      if (sortValue !== 0) return sortValue
      
    }
    return 0
  })]

  console.log(sortedUsers.map((user) => `${user.firstName} ${user.lastName} ${user.customerID}`))
}
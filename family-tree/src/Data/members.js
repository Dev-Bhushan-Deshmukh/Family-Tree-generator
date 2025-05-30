export const familyMembers = [
  {
    id: "u1",
    fullName: "John Smith",
    gender: "male",
    dob: "1950-01-15",
    photoUrl: "",
    spouses: ["u2", "t3"],
    children: ["u3", "u4", "u13", "u14", "u15"],
    parents: ["u7", "u8"],
    relationMap: {
      "Mary Smith": "Wife",
      "t3 Smith": "Partner",
      "David Smith": "Son",
      "Anna Smith": "Daughter",
      "Lucas Smith": "Son",
      "Olivia Smith": "Daughter",
      "Noah Smith": "Son",
      "Robert Smith": "Father",
      "Elizabeth Smith": "Mother"
    }
  },
  {
    id: "u2",
    fullName: "Mary Smith",
    gender: "female",
    dob: "1952-03-20",
    photoUrl: "",
    spouses: ["u1"],
    children: ["u3", "u4", "u13", "u14", "u15"],
    parents: [],
    relationMap: {
      "John Smith": "Husband",
      "David Smith": "Son",
      "Anna Smith": "Daughter",
      "Lucas Smith": "Son",
      "Olivia Smith": "Daughter",
      "Noah Smith": "Son"
    }
  },
  {
    id: "t3",
    fullName: "t3 Smith",
    gender: "non-binary",
    dob: "1952-03-20",
    photoUrl: "",
    spouses: ["u1"],
    children: [],
    parents: [],
    relationMap: {
      "John Smith": "Partner"
    }
  },
  {
    id: "u3",
    fullName: "David Smith",
    gender: "male",
    dob: "1975-06-10",
    photoUrl: "",
    parents: ["u1", "u2"],
    spouses: ["u5"],
    children: ["u6"],
    relationMap: {
      "John Smith": "Father",
      "Mary Smith": "Mother",
      "Linda Smith": "Wife",
      "Emma Smith": "Daughter",
      "Anna Smith": "Sister"
    }
  },
  {
    id: "u4",
    fullName: "Anna Smith",
    gender: "female",
    dob: "1978-08-25",
    photoUrl: "",
    parents: ["u1", "u2"],
    spouses: ["u9"],
    children: ["u11", "u12"],
    relationMap: {
      "John Smith": "Father",
      "Mary Smith": "Mother",
      "David Smith": "Brother",
      "James Brown": "Husband",
      "Chris Brown": "Son",
      "Ella Brown": "Daughter"
    }
  },
  {
    id: "u5",
    fullName: "Linda Smith",
    gender: "female",
    dob: "1977-11-05",
    photoUrl: "",
    spouses: ["u3"],
    children: ["u6"],
    parents: [],
    relationMap: {
      "David Smith": "Husband",
      "Emma Smith": "Daughter"
    }
  },
  {
    id: "u6",
    fullName: "Emma Smith",
    gender: "female",
    dob: "2000-04-12",
    photoUrl: "",
    parents: ["u3", "u5"],
    spouses: [],
    children: [],
    relationMap: {
      "David Smith": "Father",
      "Linda Smith": "Mother"
    }
  },
  {
    id: "u7",
    fullName: "Robert Smith",
    gender: "male",
    dob: "1945-07-30",
    photoUrl: "",
    spouses: ["u8"],
    children: ["u1"],
    parents: [],
    relationMap: {
      "Elizabeth Smith": "Wife",
      "John Smith": "Son"
    }
  },
  {
    id: "u8",
    fullName: "Elizabeth Smith",
    gender: "female",
    dob: "1948-02-17",
    photoUrl: "",
    spouses: ["u7"],
    children: ["u1"],
    parents: [],
    relationMap: {
      "Robert Smith": "Husband",
      "John Smith": "Son"
    }
  },
  {
    id: "u9",
    fullName: "James Brown",
    gender: "male",
    dob: "1975-10-10",
    photoUrl: "",
    spouses: ["u4"],
    children: ["u11", "u12"],
    parents: [],
    relationMap: {
      "Anna Smith": "Wife",
      "David Smith": "Brother-in-law",
      "Chris Brown": "Son",
      "Ella Brown": "Daughter"
    }
  },
  {
    id: "u10",
    fullName: "Susan White",
    gender: "female",
    dob: "1980-09-01",
    photoUrl: "",
    spouses: [],
    children: [],
    parents: [],
    relationMap: {
      "Emma Smith": "Cousin"
    }
  },
  {
    id: "u11",
    fullName: "Chris Brown",
    gender: "male",
    dob: "2005-03-18",
    photoUrl: "",
    parents: ["u4", "u9"],
    spouses: [],
    children: [],
    relationMap: {
      "Anna Smith": "Mother",
      "James Brown": "Father",
      "Ella Brown": "Sister"
    }
  },
  {
    id: "u12",
    fullName: "Ella Brown",
    gender: "female",
    dob: "2008-07-22",
    photoUrl: "",
    parents: ["u4", "u9"],
    spouses: [],
    children: [],
    relationMap: {
      "Anna Smith": "Mother",
      "James Brown": "Father",
      "Chris Brown": "Brother"
    }
  },
  {
    id: "u13",
    fullName: "Lucas Smith",
    gender: "male",
    dob: "1982-02-11",
    photoUrl: "",
    parents: ["u1", "u2"],
    spouses: [],
    children: [],
    relationMap: {
      "John Smith": "Father",
      "Mary Smith": "Mother"
    }
  },
  {
    id: "u14",
    fullName: "Olivia Smith",
    gender: "female",
    dob: "1985-09-19",
    photoUrl: "",
    parents: ["u1", "u2"],
    spouses: [],
    children: [],
    relationMap: {
      "John Smith": "Father",
      "Mary Smith": "Mother"
    }
  },
  {
    id: "u15",
    fullName: "Noah Smith",
    gender: "male",
    dob: "1988-12-03",
    photoUrl: "",
    parents: ["u1", "u2"],
    spouses: [],
    children: [],
    relationMap: {
      "John Smith": "Father",
      "Mary Smith": "Mother"
    }
  }
];

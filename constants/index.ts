export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/vipul-agarwal.png",
    name: "Vipul Agarwal",
  },
  {
    image: "/assets/images/arpit-gupta.png",
    name: "Arpit Gupta",
  },
  {
    image: "/assets/images/arun-chauhan.png",
    name: "Arun Chauhan",
  },
  {
    image: "/assets/images/nidhi-prasad.png",
    name: "Nidhi Prasad",
  },
  {
    image: "/assets/images/parag-chandak.png",
    name: "Parag Chandak",
  },
  {
    image: "/assets/images/sanjay-wadhwani.png",
    name: "Sanjay Wadhwani",
  },
  {
    image: "/assets/images/shekhar-rao.png",
    name: "Shekhar Rao",
  },
  {
    image: "/assets/images/sourabh-malviya.png",
    name: "Sourabh Malviya",
  },
  {
    image: "/assets/images/trisha-gupta.png",
    name: "Trisha Gupta",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};

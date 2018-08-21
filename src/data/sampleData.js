export const dayTypes = ['holiday','standard','furlough','weekend']

export const shiftList = [
  {
    'id':0,
    'shiftName':'LDD'
  },
  {
    'id':1,
    'shiftName':'LDN'
  },
  {
    'id':2,
    'shiftName':'Backup'
  },
  {
    'id':3,
    'shiftName':'Clinic-1'
  },
  {
    'id':4,
    'shiftName':'Clinic-2'
  },
  {
    'id':5,
    'shiftName':'OR'
  },
  {
    'id':6,
    'shiftName':'Admin'
  },
  {
    'id':7,
    'shiftName':'Leave'
  },
  {
    'id':8,
    'shiftName':'Ward'
  },
  {
    'id':9,
    'shiftName':'G'
  },
  {
    'id':10,
    'shiftName':'CMD'
  },
  {
    'id':11,
    'shiftName':'IN/OUT'
  },
  {
    'id':12,
    'shiftName':'G/WARD'
  },
  {
    'id':13,
    'shiftName':'Clinic'
  },
  {
    'id':14,
    'shiftName':'Training'
  },
  {
    'id':15,
    'shiftName':'Day'
  },
  {
    'id':16,
    'shiftName':'Night'
  },
  {
    'id':17,
    'shiftName':'Proc'
  },
  {
    'id':18,
    'shiftName':'Well'
  },
  {
    'id':19,
    'shiftName':'G/Admin'
  },
]

export const conflictsData = [
  {
    'id': 'tup63e_',
    'eventId': 312,
    'eventDate': new Date(2018, 4, 11),
    'note':'Person4 can not have OR day following LDD shift.'
  },
  {
    'id': 'rx309ll',
    'eventId': 152,
    'eventDate': new Date(2018, 4, 14),
    'note':'Person 3 can not work LDN following LDD.'
  },
  {
    'id': 'kx00t-w',
    'eventId': 247,
    'eventDate': new Date(2018, 4, 21),
    'note':'Person 6 has clinic and LDN shift on same day'
  },
]

export const statsData = [
  {
    'id':11,
    'count':6,
    'stat':'Empty Call Shifts'
  },
  {
    'id':12,
    'count':13,
    'stat':'Unfilled Ward Assignments'
  },
  {
    'id':13,
    'count':4,
    'stat':'Assignment Conflicts'
  },
  {
    'id':14,
    'count':327,
    'stat':'Assigned Hrs (86% of need)'
  },
  {
    'id':15,
    'count':5,
    'stat':'Holidays'
  },
]

export const events = [
  {
    'id':1,
    'date': 1523059200000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 2,
    'shiftName': 'OR',
    'notes': [
      {
        'id': 1,
        'date': new Date(),
        'detail': 'I am a note...come at me bro!!!'
      },
      {
        'id': 2,
        'date': new Date(),
        'detail': 'He whom has smelt it has dealt it.'
      },
    ],
  },
  {
    'id':2,
    'date': 1523491200000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 3,
    'shiftName': 'LDD',
    'notes': [],
  },
  {
    'id':3,
    'date': 1523577600000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 3,
    'shiftName': 'Clinic 1',
    'notes': [
      {
        'id': 3,
        'date': new Date(),
        'detail': 'Clinic 3 Bro!!!'
      },
    ],
  },
  {
    'id':4,
    'date': 1523664000000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 1,
    'shiftName': 'Leave',
    'notes': [],
  },
  {
    'id':5,
    'date': 1523923200000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 1,
    'shiftName': 'Ward',
    'notes': [],
  },
  {
    'id':6,
    'date': 1524787200000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 3,
    'shiftName': 'G',
    'notes': [],
  },
  {
    'id':7,
    'date': 1524787200000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 4,
    'shiftName': 'Processing',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },


//may
  {
    'id':8,
    'date': 1525132800000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 1,
    'shiftName': 'Ward',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':9,
    'date': 1525132800000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 2,
    'shiftName': 'G',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':10,
    'date': 1525132800000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 3,
    'shiftName': 'OR',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':11,
    'date': 1525305600000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 4,
    'shiftName': 'Clinic 1',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':12,
    'date':  1525651200000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 4,
    'shiftName': 'LDD',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':13,
    'date': 1526256000000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 2,
    'shiftName': 'LDN',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':14,
    'date': 1526342400000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 1,
    'shiftName': 'Clinic 1',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':15,
    'date': 1526342400000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 3,
    'shiftName': 'OR',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':16,
    'date': 1526688000000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 1,
    'shiftName': 'Leave',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
  {
    'id':17,
    'date': 1526947200000, //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 4,
    'shiftName': 'Processing',
    'notes': [
      {
        'id': 4,
        'date': new Date(),
        'detail': 'May the 4th note be with you'
      },
    ],
  },
]

export const person = [
  {
    'id': 4,
    'name': 'Person Obi',
    'jobRole': 'Full Scope',
    'rules': [
      {
        'id': 334,
        'detail': 'no pizza after 9pm (on odd numbered days only)'
      },
      {
        'id': 335,
        'detail': 'no OR after next week'
      },
      {
        'id': 336,
        'detail': 'mandatory admin time every wednesday morning'
      },
    ],
    'isActive': true,
  },
  {
    'id': 1,
    'name': 'Mary Wan',
    'jobRole': 'Full Scope',
    'rules': [
      {
        'id': 337,
        'detail': 'day call only'
      },
      {
        'id': 338,
        'detail': 'off during entire month of Ramadan'
      },
      {
        'id': 339,
        'detail': 'must have chocolate for every shift'
      },
    ],
    'isActive': true,
  },
  {
    'id': 2,
    'name': 'Cartey Beeswax',
    'jobRole': 'MFM',
    'rules': [
      {
        'id': 340,
        'detail': 'only assigned the EASY stuff and ONLY under supervision'
      },
    ],
    'isActive': true,
  },
  {
    'id': 3,
    'name': 'Thunder Magnussen',
    'jobRole': 'GYN',
    'rules': [
      {
        'id': 341,
        'detail': 'no OR for this guy after THAT happened'
      },
    ],
    'isActive': true,
  },
]

export const meetingList = [
  {
    "id": 1,
    "data":"Surv, Prev & Control of Infection Committee: 1st Thursday every odd month at 1230 (DiazPerez)"
  },
  {
    "id": 2,
    "data":"Credentials Meeting, 1st and 3rd Thurs @1400  (Devore)"
  },
  {
    "id": 3,
    "data":"MSEC:  1st Thursday @ 1430 (Devore)"
  },
  {
    "id": 4,
    "data":"Medication Use and Evaluation/Pharmacy & therapeutics:  1st Friday @1400 (Bhavsar)"
  },
  {
    "id": 5,
    "data":"Tumor Board:  Second Thursday @ 1300 (Barron)"
  },
  {
    "id": 6,
    "data":"Medical Records Review:  Quarterly 3rd Fri @ 1500  DCCS Conference Room (Diazperez)"
  },
  {
    "id": 7,
    "data":"Ethics Committee Aug, Nov, Feb, May first Thursday at noon (Diazperez)"
  },
  {
    "id": 8,
    "data":"General Suregry Staff Meeting  SECOND thur @ 1430 (Barron)"
  },
  {
    "id": 9,
    "data":"QMC- 4th Thurs 0800  (Devore)"
  },
  {
    "id": 10,
    "data":" Education Committee 3rd Wed @ 1300"
  },
  {
    "id": 11,
    "data":" Risk Mgmt Meeting 3rd Thurs @ 0930 Dr. Smith	"
  },
  {
    "id": 12,
    "data":" Blood Utilization Committee: 4th Thurs @ 1200 (Bhavsar)"
  },
  {
    "id": 13,
    "data":" Medication Mgmt Committee:  4th Tues @ 0800 (Chiles)"
  },
  {
    "id": 14,
    "data":" Patient Flow -1st Mon Feb, May, Aug, Nov at 0900 DCCS Conf rm- (Devore)"
  },
  {
    "id": 15,
    "data":" OB quality, safety, and satisfaction group - 4th Wednesday of every month @ 1100 (Teneyuque/Devore)"
  },
  {
    "id": 16,
    "data":" DCSS meeting 2nd Thurs 1430 (Devore)"
  },
  {
    "id": 17,
    "data":" Chiefs meeting every Thurs 0800 (Devore)"
  },
  {
    "id": 18,
    "data":" WHSL commander brief odd months, 2nd fri, 0830 (Devore)"
  },
  {
    "id": 19,
    "data":" Stork - (Hendrix, Teneyuque, Devore)"
  },
  {
    "id": 20,
    "data":" Patient experience: 4th Thurs 1330 (Bhavsar)"
  }
]

export const rules = {}

export const notesSampleData = [
  {
    id: 1,
    comments: 'the cat is ugly',
    year: 2018,
    month: 'August'
  },
  {
    id: 2,
    comments: 'the dog is ugly',
    year: 2018,
    month: 'August'
  },
  {
    id: 3,
    comments: 'the horse is ugly',
    year: 2018,
    month: 'August'
  },
  {
    id: 4,
    comments: 'the cow is ugly',
    year: 2018,
    month: 'September'
  }
]
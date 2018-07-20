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
    'jobRole': 'fullscope',
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
    'jobRole': 'fullscope',
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
    'jobRole': 'mfm',
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
    'jobRole': 'gyn',
    'rules': [
      {
        'id': 341,
        'detail': 'no OR for this guy after THAT happened'
      },
    ],
    'isActive': true,
  },
]

export const rules = {}
export const notes = {}
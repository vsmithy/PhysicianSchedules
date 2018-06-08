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
]

export const people = [
  {
    'name':'janeDoe',
    'role':'GYN',
    'id':1,
  },
  {
    'name':'johnDoe',
    'role':'FULLSCOPE',
    'id':2,
  },
  {
    'name':'person3',
    'role':'FULLSCOPE',
    'id':3,
  },
  {
    'name':'person4',
    'role':'MFM',
    'id':4,
  },
  {
    'name':'person5',
    'role':'FULLSCOPE',
    'id':5,
  }
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
    'date': new Date(), //actually make this milliseconds
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
    'date': new Date(), //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 3,
    'shiftName': 'LDD',
    'notes': [],
  },
  {
    'id':3,
    'date': new Date(), //actually make this milliseconds
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
    'date': new Date(), //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 1,
    'shiftName': 'Leave',
    'notes': [],
  },
  {
    'id':5,
    'date': new Date(), //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 1,
    'shiftName': 'Ward',
    'notes': [],
  },
  {
    'id':6,
    'date': new Date(), //actually make this milliseconds
    'dayType': 2,
    'dayPortion': 'full',
    'personId': 3,
    'shiftName': 'G',
    'notes': [],
  },
  {
    'id':7,
    'date': new Date(), //actually make this milliseconds
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
    'name': 'Cartey Bee',
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
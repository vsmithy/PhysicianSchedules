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
    'date':'ttt',
    'personId':2,
    'shift':8,
  }
]

export const rules = {}
export const notes = {}
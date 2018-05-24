import React, {Component}  from 'react'

export default class Grid extends Component {
  render(){
    return (
      <section className="grid">
        <table className='classicTable'>
          <tr>
            <td></td>
            <th scope='col'>Person1</th>
            <th scope='col'>Person2</th>
            <th scope='col'>Person3</th>
            <th scope='col'>Person4</th>
            <th scope='col'>Person5</th>
            <th scope='col'>Person6</th>
            <th scope='col'>Person7</th>
            <th scope='col'>Person8</th>
            <th scope='col'>Person9</th>
          </tr>
          <tr>
            <th scope='row'>day1</th>
            <td>no</td>
            <td>yes</td>
            <td>yes</td>
            <td>no</td>
            <td>yes</td>
            <td>yes</td>
            <td>no</td>
            <td>no</td>
            <td>no</td>
          </tr>
          <tr>
            <th scope='row'>day2</th>
            <td>no</td>
            <td>no</td>
            <td>yes</td>
            <td>no</td>
            <td>yes</td>
            <td>yes</td>
            <td>no</td>
            <td>no</td>
            <td>yes</td>
          </tr>
          <tr>
            <th scope='row'>day3</th>
            <td>no</td>
            <td>yes</td>
            <td>no</td>
            <td>no</td>
            <td>no</td>
            <td>no</td>
            <td>no</td>
            <td>no</td>
            <td>no</td>
          </tr>
          <tr>
            <th scope='row'>day4</th>
            <td>yes</td>
            <td>yes</td>
            <td>yes</td>
            <td>yes</td>
            <td>no</td>
            <td>no</td>
            <td>no</td>
            <td>yes</td>
            <td>yes</td>
          </tr>
        </table>
      </section>
    )//return
  }//render
}//grid

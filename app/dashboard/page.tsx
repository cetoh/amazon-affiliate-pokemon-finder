import React from "react";

const data1 = [
  { name: "Bulbasaur", number: 1, link: <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=53ac1624cd8f27e5fc927368a07aff1c&camp=1789&creative=9325&index=toys-and-games&keywords=Bulbasaur">Link</a> },
  { name: "Ivysaur", number: 2, link: <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=5c6c2e5acc9061801d9464eb0bf0f0d0&camp=1789&creative=9325&index=toys-and-games&keywords=Ivysaur">Link</a> },
  { name: "Venasaur", number: 3, link: "Male" },
]
const columns = [
  {
    Header: 'First Name',
    accessor: 'first'
  },
  {
    Header: 'Last Name',
    accessor: 'last'
  },
  {
    Header: 'Email',
    accessor: 'email'
  }
]

const data = [
  {
    first: 'John',
    last: 'Doe',
    email: 'john@doe.com'
  },
  {
    first: 'Dorothy',
    last: 'Boe',
    email: 'dorothy@boe.com'
  },
  {
    first: 'Baby',
    last: 'Moe',
    email: 'baby@moe.com'
  }
]

export default function Page() {
    return (
      <div className="App">
        <h1>Generation 1</h1>
          <table>
              <tr>
                  <th>Pokemon</th>
                  <th>Number</th>
                  <th>Amazon Products</th>
              </tr>
              {data1.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.name}</td>
                          <td>{val.number}</td>
                          <td>{val.link}</td>
                      </tr>
                  )
              })}
          </table>
      </div>
    )
  }
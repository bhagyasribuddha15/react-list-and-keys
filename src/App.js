import UserProfile from './components/UserProfile'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.RoT4EKppbnPk4k6LAsH1lQHaHa&pid=Api&P=0&h=180',
    name: 'Surya',
    role: 'Actor',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Raashi',
    role: 'Fashion Designer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Ranjitha',
    role: 'Full Stack Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Rehman',
    role: 'Film Director',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Instagram Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App

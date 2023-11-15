import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

  const posts = [
    {
    id:1,
    title:"Адамовський Олег Олегович",
    desc:"підполковник Збройних сил України, учасник російсько-української війни, що загинув під час російського вторгнення в Україну 2022 року, Герой України з удостоєнням ордена «Золота Зірка».",
    img:"https://upload.wikimedia.org/wikipedia/uk/0/0f/%D0%90%D0%B4%D0%B0%D0%BC%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9E%D0%BB%D0%B5%D0%B3_%D0%9E%D0%BB%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D1%87.jpg"
    },

    {
      id:2,
      title:"Олекса́ндр Григо́рович Ані́щенко",
      desc:"український спецпризначенець, полковник (посмертно) Служби безпеки України, заступник начальника відділу Центру спеціальних операцій «Альфа» УСБУ в Сумській області. ",
      img:"https://upload.wikimedia.org/wikipedia/uk/2/2d/Anishchenko_oh.jpg"
      },

      {
        id:3,
        title:"Георгі́й Вагарша́кович Арутюня́н",
        desc:"активіст Євромайдану та ВО «Свобода». Убитий 20 лютого 2014 пострілом снайпера біля Монумента Незалежності у Києві. Один із героїв Небесної сотні.",
        img:"https://upload.wikimedia.org/wikipedia/uk/7/7b/%D0%90%D1%80%D1%83%D1%82%D1%8E%D0%BD%D1%8F%D0%BD%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9.jpg"
        },

        {
          id:4,
          title:"Володи́мир Миха́йлович Гарматі́й",
          desc:" український військовик, молодший лейтенант, командир мінометного взводу 51-ї окремої механізованої бригади, військова частина А2331. Герой України.",
          img:"https://upload.wikimedia.org/wikipedia/uk/2/26/%D0%93%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%96%D0%B9_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_001.jpg"
          },

  ]
   
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post =>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
              <div className="content">
                <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

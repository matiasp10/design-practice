import Nav from '../../../components/navbar/Nav';
import style from './Reto.module.css';
const items = [
  {
    name: 'El aciago demiurgo',
    author: 'Emil Cioran',
    img: 'https://imgv2-2-f.scribdassets.com/img/document/273937279/original/103725cd98/1660270067?v=1',
    count: 1,
    price: 150,
  },
  {
    name: 'En las cimas de la desesperacion',
    author: 'Emil Cioran',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71HG4iNjFuL.jpg',
    count: 1,
    price: 120,
  },
  {
    name: 'En las cimas de la desesperacion',
    author: 'Emil Cioran',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71HG4iNjFuL.jpg',
    count: 1,
    price: 120,
  },

  {
    name: 'En las cimas de la desesperacion',
    author: 'Emil Cioran',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71HG4iNjFuL.jpg',
    count: 1,
    price: 120,
  },
  {
    name: 'En las cimas de la desesperacion',
    author: 'Emil Cioran',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71HG4iNjFuL.jpg',
    count: 1,
    price: 120,
  },
  {
    name: 'En las cimas de la desesperacion',
    author: 'Emil Cioran',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71HG4iNjFuL.jpg',
    count: 1,
    price: 120,
  },
  {
    name: 'En las cimas de la desesperacion',
    author: 'Emil Cioran',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71HG4iNjFuL.jpg',
    count: 1,
    price: 120,
  },
];

function index() {
  return (
    <div>
      <Nav />
      <div className={style.retoContainer}>
        <Reto />
      </div>
    </div>
  );
}

function Reto() {
  return (
    <div className={style.container}>
      <div className={style.box1}>
        <div className={style.titles}>
          <span className={style.title}>SELECTED ARTICLES</span>
          <span className={style.titlePrice}>PRICE</span>
        </div>
        <div className={style.items}>
          {items.map((i) => {
            return (
              <div key={i.name} className={style.item}>
                <div className={style.itemInfo}>
                  <img src={i.img} width={400} />
                  <div className={style.infoContainer}>
                    <div className={style.info}>
                      <span>{i.name} </span>
                      <span>{i.author}</span>
                    </div>
                    <div className={style.count}>
                      <span style={{ cursor: 'pointer' }}>-</span>
                      <span>{i.count}</span>
                      <span style={{ cursor: 'pointer' }}>+</span>
                    </div>
                  </div>
                </div>
                <span className={style.price}>{i.price}</span>
              </div>
            );
          })}
        </div>
        <div className={style.total}>
          <span>TOTAL: $</span>
          <span>
            {items.reduce((a, b) => {
              return a + b.price;
            }, 0)}
          </span>
        </div>
      </div>
      <div className={style.box2}>
        <div className={style.titles}>
          <span className={style.title}>METODOS DE PAGO</span>
        </div>
        <div className={style.paymentMethod}>
          <Mastercard />
          <span>Cambiar</span>
        </div>
        <div className={style.inputsContainer}>
          <div className={style.inputs}>
            <span class={style.inputTitle}>NUMBERO DE TARJETA</span>
            <input
              id="ccn"
              type="tel"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
              maxlength="19"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </div>
          <div className={style.inputs}>
            <span class={style.inputTitle}>NOMBRE</span>
            <input type="text" placeholder="Nombre que aparece en tarjeta" />
          </div>

          <div className={style.inputs}>
            <span class={style.inputTitle}>FECHA DE EXPIRACION</span>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className={style.inputs}>
            <span class={style.inputTitle}>CVV</span>
            <input type="password" name="" id="" placeholder="***" />
          </div>
        </div>
        <button className={style.btn}>Send</button>
      </div>
    </div>
  );
}

function Mastercard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100px"
      height="100px"
    >
      <path
        fill="#78a1d1"
        d="M89,27v46c0,2.209-1.791,4-4,4H15c-2.209,0-4-1.791-4-4V27c0-2.209,1.791-4,4-4h70 C87.209,23,89,24.791,89,27z"
      />
      <path
        fill="#e85654"
        d="M44.5,50c0-4.605,2.153-8.7,5.5-11.356c-2.474-1.963-5.597-3.144-9-3.144 c-8.008,0-14.5,6.492-14.5,14.5S32.992,64.5,41,64.5c3.403,0,6.526-1.181,9-3.144C46.653,58.7,44.5,54.605,44.5,50z"
      />
      <path
        fill="#f9b621"
        d="M59,35.5c-3.403,0-6.526,1.181-9,3.144C53.347,41.3,55.5,45.395,55.5,50s-2.153,8.7-5.5,11.356 c2.474,1.963,5.597,3.144,9,3.144c8.008,0,14.5-6.492,14.5-14.5S67.008,35.5,59,35.5z"
      />
      <ellipse cx="50" cy="50" fill="#f5905f" rx="5.5" ry="11.356" />
      <g>
        <path
          fill="#1f212b"
          d="M85,78H15c-2.757,0-5-2.243-5-5V27c0-2.757,2.243-5,5-5h70c2.757,0,5,2.243,5,5v46 C90,75.757,87.757,78,85,78z M15,24c-1.654,0-3,1.346-3,3v46c0,1.654,1.346,3,3,3h70c1.654,0,3-1.346,3-3V27c0-1.654-1.346-3-3-3 H15z"
        />
        <path
          fill="#1f212b"
          d="M30.5,28h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S30.776,28,30.5,28z"
        />
        <path
          fill="#1f212b"
          d="M37.5,28h-4c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h4c0.276,0,0.5,0.224,0.5,0.5 S37.776,28,37.5,28z"
        />
        <path
          fill="#1f212b"
          d="M59.5,73h-40c-2.481,0-4.5-2.019-4.5-4.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15 c0,1.93,1.57,3.5,3.5,3.5h40c0.276,0,0.5,0.224,0.5,0.5S59.776,73,59.5,73z"
        />
        <path
          fill="#1f212b"
          d="M84.5,53c-0.276,0-0.5-0.224-0.5-0.5v-21c0-1.93-1.57-3.5-3.5-3.5h-40c-0.276,0-0.5-0.224-0.5-0.5 s0.224-0.5,0.5-0.5h40c2.481,0,4.5,2.019,4.5,4.5v21C85,52.776,84.776,53,84.5,53z"
        />
        <path
          fill="#1f212b"
          d="M73.5,73h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S73.776,73,73.5,73z"
        />
        <path
          fill="#1f212b"
          d="M69.5,73h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S69.776,73,69.5,73z"
        />
        <path
          fill="#1f212b"
          d="M41,65c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S49.271,65,41,65z M41,36 c-7.72,0-14,6.28-14,14s6.28,14,14,14s14-6.28,14-14S48.72,36,41,36z"
        />
        <path
          fill="#1f212b"
          d="M59,65c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S67.271,65,59,65z M59,36 c-7.72,0-14,6.28-14,14s6.28,14,14,14s14-6.28,14-14S66.72,36,59,36z"
        />
      </g>
    </svg>
  );
}

export default index;

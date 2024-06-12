import { Inter } from "next/font/google";
import {useEffect, useState} from "react";
import SingleElement from "@/components/SingleElement";
import {useBack} from "@/service";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [listAll, setListAll] = useState([])
  const [newElement, setElement] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    useBack.listTodo().then(r => setListAll(r.content));
  }, []);

  function addNew() {
    setLoading(true);
    if (newElement !== '') {
      let obj : any = {id: Math.floor(Math.random() * 10000), state: false, title: newElement};
      // @ts-ignore
      useBack.createTodo(obj).then(() => setListAll(listAll.concat([obj])))
      setElement('');
    } else {
      alert('Elemento vuoto');
    }
    setLoading(false);
  }

  return (
    <main
      className={`bg-white text-black flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <div className={`mb-3`}>
        <label className={`mr-2`}>Nuovo</label>
        <input
            value={newElement}
            className={`border-2 mr-2`}
            onChange={(e) => setElement(e.target.value)}
            id={'newElement'}
            name={'newElement'}
            type={'text'}
            autoComplete={'off'}
        />
        <button className={`border-2 bg-green-500 border-green-800 p-2`} onClick={addNew} disabled={loading}>
          Aggiungi
        </button>
      </div>
      <div>
        {
          listAll.length < 1 ? (<p>Tutto finito</p>) : (listAll.map((el : any) => <SingleElement key={el.id} todo={el} />))
        }
      </div>
    </main>
  );
}

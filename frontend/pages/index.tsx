import { Inter } from "next/font/google";
import {useEffect, useState} from "react";
import SingleElement from "@/components/SingleElement";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [listAll, setListAll] = useState([])

  const [newElement, setElement] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {

  })

  function addNew() {
    setLoading(true);
    if (newElement !== '') {
      // @ts-ignore
      setListAll([{id: 1, state: 0, title: newElement}])
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
        />
        <button className={`border-2 border-cyan-950 p-2`} onClick={addNew} disabled={loading}>
          Aggiungi
        </button>
      </div>
      <div>
        {
          listAll.length < 1 ? (<p>Tutto finito</p>) : (<SingleElement todo={listAll} />)
        }
      </div>




    </main>
  );
}

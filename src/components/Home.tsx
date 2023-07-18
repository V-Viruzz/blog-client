import { useEffect } from 'react'
import gettingLux from '../server/gettingLux'
import useLux from '../hooks/useLux'

function Home (): JSX.Element {
  const { lux, setLux } = useLux()

  useEffect(() => {
    gettingLux()
      .then((res) => {
        console.log(res)
        if (typeof res === 'undefined') { console.log('res is undefined'); return }
        setLux(res)
      })
      .catch((err) => { console.log(err) })
  }, [])

  return (
    <div>
      <div className="flex flex-col gap-3 items-center">
        {
          lux.map((item, index) => (
            <div className="border-solid border-zinc-6 border-2 rounded-3 max-w-24rem w-100% p-3" key={index}>
              <p>{item.text}</p>
              <img src="https://th.bing.com/th/id/R.007e9cebd78df482f7c9e8270f398075?rik=gAso8Mf1hFGpUg&riu=http%3a%2f%2fwouxun.com%2fpicone%2ftwitter01.jpg&ehk=MY6SO3hHMEz8lzy%2bv1SOw2LjBlNRFdvDr%2b1VuMmy274%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home

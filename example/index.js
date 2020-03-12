import { Fade } from '../src'
import { Sling } from '../src'
import { Spiral } from '../src'
import { Turn } from '../src'
import { Twirl } from '../src'
import { Squash } from '../src'
import Hamburger from '../src'
import React from 'react'
import ReactDOM from 'react-dom'

const Main = () => (
  <>
    <Card title="Tilt">
      <Hamburger size={36} color="white" direction="right" />
      <div>
        Import
        <span className="text-white"> Hamburger </span>
        from '
        <span className="text-green-400">hamburger-react</span>
        '
      </div>
      <Hamburger size={36} color="white" />
    </Card>

    <Card title="Fade">
      <Fade size={36} color="white" direction="right" />
      <div>
        Import {'{'}
        <span className="text-white"> Fade </span>
        as
        <span className="text-white"> Hamburger </span>
        {'}'} from '
        <span className="text-green-400">hamburger-react</span>
        '
      </div>
      <Fade size={36} color="white" />
    </Card>

    <Card title="Turn">
      <Turn size={36} color="white" direction="right" />
      <div>
        Import {'{'}
        <span className="text-white"> Turn </span>
        as
        <span className="text-white"> Hamburger </span>
        {'}'} from '
        <span className="text-green-400">hamburger-react</span>
        '
      </div>
      <Turn size={36} color="white" />
    </Card>

    <Card title="Sling">
      <Sling size={36} color="white" direction="right" />
      <div>
        Import {'{'}
        <span className="text-white"> Sling </span>
        as
        <span className="text-white"> Hamburger </span>
        {'}'} from '
        <span className="text-green-400">hamburger-react</span>
        '
      </div>
      <Sling size={36} color="white" />
    </Card>

    <Card title="Twirl">
      <Twirl size={36} color="white" direction="right" />
      <div>
        Import {'{'}
        <span className="text-white"> Twirl </span>
        as
        <span className="text-white"> Hamburger </span>
        {'}'} from '
        <span className="text-green-400">hamburger-react</span>
        '
      </div>
      <Twirl size={36} color="white" />
    </Card>

    <Card title="Spiral">
      <Spiral size={36} color="white" direction="right" />
      <div>
        Import {'{'}
        <span className="text-white"> Spiral </span>
        as
        <span className="text-white"> Hamburger </span>
        {'}'} from '
        <span className="text-green-400">hamburger-react</span>
        '
      </div>
      <Spiral size={36} color="white" />
    </Card>

    <div className={`
      bg-gray-800
      rounded-lg
      shadow-xl
      pt-6
      pb-8
      px-8
      lg:px-12
      flex
      mb-0
      flex-col
      relative
      items-center
    `}>
      <h2 className="mb-2 leading-snug text-center font-semibold flex items-center">
        <span className="text-l mr-2 text-gray-400">Hamburger type:</span>
        <span className="text-xl">Squash</span>
      </h2>
      <div className="flex w-full items-center">
        <div className="
          bg-teal-700
          absolute
          leading-loose
          left-0
          top-0
          h-full
          w-24
          rounded-l-lg
          flex
          items-center
          justify-center
          flex-col
        ">
          <span>✨</span>
          <span className="font-semibold text-sm">New!</span>
          <span>✨</span>
        </div>
        <div className="
          flex
          flex-col
          items-center
          md:border-r-2
          md:border-gray-700
          md:pr-8
          md:mr-8
          md:pl-20
          lg:pr-12
          lg:mr-12
          lg:pl-24
          flex-shrink-0
        ">
          <h3 className="leading-snug text-center text-gray-500 font-semibold mb-2 text-sm">
            Direction: n / a
          </h3>
          <Squash size={36} color="white" />
        </div>
        <code className="
          text-blue-300
          flex
          flex-grow
          justify-center
          text-xs
          px-6
          py-4
          rounded
          bg-indigo-800
          shadow-inner
        ">
          <div>
            Import {'{'}
            <span className="text-white"> Squash </span>
            as
            <span className="text-white"> Hamburger </span>
            {'}'} from '
            <span className="text-green-400">hamburger-react</span>
            '
          </div>
        </code>
      </div>
    </div>
  </>
)

const Card = ({ children, title }) => (
  <div className={`
    bg-gray-800
    rounded-lg
    shadow-xl
    pt-6
    pb-8
    px-8
    lg:px-12
    flex
    mb-6
    flex-col
    items-center
  `}>
    <h2 className="mb-2 leading-snug text-center font-semibold flex items-center">
      <span className="text-l mr-2 text-gray-400">Hamburger type:</span>
      <span className="text-xl">{title}</span>
    </h2>
    <div className="flex w-full items-center">
      <div className="
        flex
        flex-col
        items-center
        md:border-r-2
        md:border-gray-700
        md:pr-8
        md:mr-8
        lg:pr-12
        lg:mr-12
        flex-shrink-0
      ">
        <h3 className="leading-snug text-center text-gray-500 font-semibold mb-2 text-sm">
          Direction: right
        </h3>
        {children[0]}
      </div>
      <code className="
        text-blue-300
        flex
        flex-grow
        justify-center
        text-xs
        px-6
        py-4
        rounded
        bg-indigo-800
        shadow-inner
      ">
        {children[1]}
      </code>
      <div className="
        flex
        flex-col
        items-center
        md:border-l-2
        md:border-gray-700
        md:pl-8
        md:ml-8
        lg:pl-12
        lg:ml-12
        flex-shrink-0
      ">
        <h3 className="leading-snug text-center text-gray-500 font-semibold mb-2 text-sm">
          Direction: left
        </h3>
        {children[2]}
      </div>
    </div>
  </div>
)

ReactDOM.render(<Main />, document.querySelector('.main'))

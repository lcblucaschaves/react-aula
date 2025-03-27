import './greeting.css'

type GreetingProps = {
    name: string
}

export default function Greeting(props: GreetingProps) {
    return <h2 className='greeting'>Hello, {props.name}!</h2>
}
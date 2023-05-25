import './message.css';

function Message(){
    const name = "My First React Application";
    if(name) return <p className='greenTest'>{name}</p>;
    return <p  className='greyTest'>Hello world</p>;
}
export default Message;
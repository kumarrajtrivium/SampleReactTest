import "./message.css";

interface Props {
  text: string;
}

// function Message(prop: Props) {
//   const name = prop.text;
//   if (name)
//     return (
//       <p className="greenTest">
//         <b>{"Message passed : " + name}</b>
//       </p>
//     );
//   return (
//     <p className="greyTest">
//       <b>No message passed</b>
//     </p>
//   );
// }

function Message({ text }: Props) {
  const name = text;
  if (name)
    return (
      <p className="greenTest">
        <b>{"Message passed : " + name}</b>
      </p>
    );
  return (
    <p className="greyTest">
      <b>No message passed</b>
    </p>
  );
}

export default Message;

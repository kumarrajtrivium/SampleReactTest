// interface Props {
//   message: string;
// }

import { ReactNode } from "react";

// const Alert = (prop: Props) => {
//   return (
//     <>
//       <div className="alert alert-primary" role="alert">
//         {prop.message}
//       </div>
//     </>
//   );
// };

// // interface Props {
// //   children: ReactNode;
// // }

// // const Alert = (prop: Props) => {
// //   return (
// //     <>
// //       <div className="alert alert-primary" role="alert">
// //         {prop.children}
// //       </div>
// //     </>
// //   );
// // };

// // export default Alert;

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;

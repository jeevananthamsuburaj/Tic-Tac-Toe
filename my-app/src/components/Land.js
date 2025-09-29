
import { useState } from "react";
import Button from "./Button";

import './Land.css';
function Land() {

  const [b, setbtn] = useState(["", "", "", "", "", "", "", "", ""]);//Array of Button
  const [p, setp] = useState("x");//X or O value set
  const [status, winstatus] = useState("");// win status
  let check = (ind) => { //Onclick Function
    if (!status) { //not win
      console.log(ind);//print index 
      if (b[ind] === "") {//button value print before empty
        let copy = b.with(ind, p);//update value x or o
        setbtn(copy);// update value set Array
        setp((p === "x") ? "o" : "x");//x or o print condition ternary operator

        let msg = wincheck(copy);
        winstatus(msg);

        // if (msg) {
        //   alert(msg);
        // }

      }
    }



  }


  function wincheck(box) {



    for (let r = 0, c = 0, d = 2; r < 9, c <= 3; r += 3, c++) {

      const row = box.slice(r, r + 3).join();
      console.log(row);

      let column = box[c] + box[c + 3] + box[c + 6];
      console.log(column);

      let Leftdiagonal = (box[0] + box[d + 2] + box[d + 6]);
      let Rightdiagonal = (box[d] + box[d + 2] + box[d + 4]);


      let xwin = (row === "x,x,x" || column === "xxx" || Leftdiagonal === "xxx" || Rightdiagonal === "xxx") ? true : false;
      let owin = (row === "o,o,o" || column === "ooo" || Leftdiagonal === "ooo" || Rightdiagonal === "ooo") ? true : false;
      let draw = box.every(item => item !== "")?true:false;
      let result = (xwin && "X Won the Game!!") || (owin && "O Won the Game!!")||(draw&& "No! Game Draw !");
      if( result)
        { 
          return result

        }

      }
      
    }


  

  return (
    <>
      <div>
        <h1>Tic Tac Toe </h1>
      </div>

      <div
        className={
          status &&
          ((status.includes("X") && "xcolor") ||
            (status.includes("O") && "ocolor") || "draw")
        }
      >
        {""}
        {status && <h3>{status}</h3>}
      </div>

      <div className="main">
        <div className="box">
          {b.map((v,i)=>{
        return  (<Button key={i} arr={v} io={i} me={check} />);
          })}
          {/* <Button arr={b[1]} i="1" me={check} />
          <Button arr={b[2]} i="2" me={check} />

          <Button arr={b[3]} i="3" me={check} />
          <Button arr={b[4]} i="4" me={check} />
          <Button arr={b[5]} i="5" me={check} />

          <Button arr={b[6]} i="6" me={check} />
          <Button arr={b[7]} i="7" me={check} />
          <Button arr={b[8]} i="8" me={check} /> */}
        </div>
      </div>
  
  <div>
    <button className="reset"
    onClick={()=>{
     setbtn(b.fill(""));
     setp("x");
     winstatus("")
    }}
    >Reset</button>
  </div>

    </>
  );
}

export default Land;
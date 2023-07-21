import React,{ useState} from "react";


const Card = ({inc,dec,price,item}) => {

const [change, card] = useState(true);

 const changecard=()=>{
     if(change){
        card(false);
        inc();
     }else{
        card(true);
        dec();
     }
 }


    return (




        <div className="col mb-5">
            <div className="card h-100">

                <div className="badge bg-dark text-white position-absolute" ></div>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="fw-bolder"><b>{price}</b></h5>

                        

                        <span className="text-muted text-decoration-line-through">{item}</span>

                    </div>
                </div>
                <button type="button" class="btn btn-outline-secondary" style={{width:'100px',marginLeft:'77px',marginBottom:'15px'}} onClick={changecard}>{change ? 'Add' : 'Remove'}</button>
                

            </div>

        </div>

    );
}
export default Card;
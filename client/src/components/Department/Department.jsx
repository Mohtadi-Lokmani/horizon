import { dep } from "../../Data/data";
import "./Department.css";

function Department() {
  return (
    <>
    <h1 className="departh1">Les Departements</h1>
      <div className="cards">
        {dep.map((list, index) => (
          <div className="content" key={index} id={list.id}>
            <h3>{list.title}</h3>
            <img src={list.Image} alt={list.title} />
            
            <p>{list.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Department;

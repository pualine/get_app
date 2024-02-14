import "./index.module.css";
function AddTodo(){
    return(
        <section className="addTodo">
            <input placeholder="Start typing .." />
            <button>Create</button>
        </section>
    );
}

export default AddTodo;
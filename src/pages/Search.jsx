import { useSearchParams } from "react-router-dom";

const Search = () => {
    // Declaring the state
    const [searchParams, setSearchParams] = useSearchParams({
        name: "",
        id:""
    }); 

    const handleForm = (e) => {
        e.preventDefault();

        // How to access the URL data
        const name = searchParams.get("name");
        const id = searchParams.get("id");        
        
        console.log(name, id);

    }

    return (
        <section>
            <h1>Test Search</h1>
            <form onSubmit={handleForm}>
                <input 
                    className="border-2 border-black rounded text-black p-1" 
                    type="text" 
                    id="name" 
                    placeholder="Name" 
                    onChange={e => {
                        setSearchParams(prev => {
                            prev.set("name", e.target.value)
                            return prev;
                        }, { replace: true });
                    }}  
                />
                <input 
                    className="border-2 border-black rounded text-black p-1" 
                    type="number" 
                    id="id" 
                    placeholder="Id" 
                    onChange={e => {
                        setSearchParams(prev => {
                            prev.set("id", e.target.value);
                            return prev;
                        }, { replace: true });
                    }} 
                />
                <button 
                    type="submit" 
                    className="bg-black rounded text-white p-1"
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Search
import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import data from '../../data'

function Edit() {

    const params = useParams()

    // replace initializer function in useState with an object: {}
    // and fetch a single post (GET request) inside a useEffect instead 
    const [post, setPost] = useState({})

    const navigate = useNavigate()

    const bodyRef = useRef()
    const subjectRef = useRef()

    async function editPost() {
        const response = await fetch(`http://localhost:3001/api/posts/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                subject: subjectRef.current.value,
                body: bodyRef.current.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
     
        
        const post = await response.json()
    }


    function handleSubmit(e) {
        e.preventDefault()

        // let updatedPost = {
        //     subject: subjectRef.current.value,
        //     body: bodyRef.current.value,
        // }

editPost()

        navigate(`/posts/${post._id}`)
    }

    useEffect(() => {
        async function fetchPost() {
            const response = await fetch(`http://localhost:3001/api/posts/${params.id}`);
            const post = await response.json();
            setPost(post);
            console.log(post)
          }
          fetchPost();
    }, [])

    return ( 
        <div>
            <h1>Edit Post</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nme">Subject:</label><br />
                    <input type="text" id="nme" ref={subjectRef} defaultValue={post.subject} /><br /><br />

                    <label htmlFor="clr">Body:</label><br />
                    <textarea ref={bodyRef} id="clr" cols="30" rows="10" defaultValue={post.body} /><br /><br />

                    <button>Submit</button>
                </form>
                <Link to={`/posts/${post._id}`}>
                    <button>Back</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Edit;
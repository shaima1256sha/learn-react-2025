import axios from "axios";
import Swal from 'sweetalert2'
import React, { useEffect, useState } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const GetAllArticles = async () => {
    try {
      const response = await axios.get("http://localhost:4000/articles");
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteArticle =  (id) => {

    // if (!window.confirm("are u sure wanna delete this article?")){
    // return
    // }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {

      try {
        if (result.isConfirmed) {

        const response =await axios.delete(`http://localhost:4000/articles/${id}`);
        
        if (response.status === 200) {
          setArticles(articles.filter(article=> article.id !== id))

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
          
        }
  
        
      } catch (error) {
        console.error(error);
      }
      
    });

    
    
  
  };

  useEffect(() => {
    GetAllArticles();
  }, []);
  return (
    <div>
      <h1>List Of Articles 👀</h1>
      {/* <button className="btn btn-info" onClick={GetAllArticles}> */}
      {/* Get All Articles
      </button> */}
      {articles.map((article) => (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <button className="btn btn-warning btn-sm" onClick={() => deleteArticle(article.id)}>Delete❌</button>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;

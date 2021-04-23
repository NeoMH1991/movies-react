import React, { Component } from 'react';
import axios from 'axios';
import http from '../services/httpService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"

class Backend extends Component {
    state = { 
        posts: [],
        columns: []
     }

     async componentDidMount() {
        const {data: posts} = await http.get(apiEndpoint);
        this.setState({ posts });
     }

     handleAdd = async () => {
        const obj = {title: 'a', body: 'b'}
        const {data: post} = await http.post(apiEndpoint, obj) //args- (endpoint, data)
        this.setState({
            posts: [post, ...this.state.posts]
        })
    }

     handleUpdate = async (post) => {
         post.title = 'updated'
         const {data} = await http.put(`${apiEndpoint}/${post.id}`, post);
         const posts = [...this.state.posts];
         const index = posts.indexOf(post);
         posts[index] = {...post};

         this.setState({
             posts
         })
     }

     handleDelete = async (post) => {
        const originalPosts = this.state.posts;
        const posts = this.state.posts.filter(p => p.id !== post.id) //return all that doesnt contain deleted post_id
        this.setState({ posts })
        try {
            await http.delete(`s${apiEndpoint}/${post.id}`) 
        } catch(ex) { //Expected errors - 400, 404 - client errors
            if (ex.response && ex.response.status === 404) 
            alert('This post doesnt exist'); 
            this.setState({ posts: originalPosts })
        }
    }
     

    render() { 
        return ( 
            <div>
            <ToastContainer />
                <h1>DataBase practice</h1>
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>

<table className="table table-striped">
  <thead> 
    <tr class=''>
      <th scope="col">Title</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>

  <tbody>
    {this.state.posts.map(post => (
        <tr> 
        <td>{post.title}</td>
        <td> <button className='btn btn-danger'
        onClick={() => this.handleUpdate(post)}
        > Update </button> </td>
        <td> <button className='btn btn-danger'
        onClick={() => this.handleDelete(post)}
        > Delete </button> </td>
        </tr>
    ))}



  </tbody>
</table>
            </div>
         );
    }
}

{/* <tbody>
{data.map(item => (
    <tr key={item._id}>
{columns.map(column => (<td key={this.createKey(item, column)}>
{this.renderCell(item, column)}
</td>
))} 
 </tr>
))}
</tbody>       */}
 
export default Backend;
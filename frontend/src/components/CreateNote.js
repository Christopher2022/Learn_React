import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//RCC
export default class CreateNote extends Component {

  state={
      users:[],
      userSelected:'',
      title:'',
      content:'',
      date: new Date()
  }


  async componentDidMount() {//pedir datos al servidor
    const res =await axios.get('http://localhost:4000/api/users')
    this.setState({ users: res.data.map(user => user.username)})
    console.log(this.state.users);

    // Verificar si el parametro id esta definido
//     if (this.props && this.props.params) {
//       const id  = this.props.params.id;
//       console.log(id);

//       if (id) {
//         const res = await axios.get('http://localhost:4000/api/notes/' + id);
//         this.setState({
//           editing: true,
//           _id: this.props.params.id,
//           title: res.data.title,
//           content: res.data.content,
//           date: new Date(res.data.date),
//           userSelected: res.data.author
//         });
//       }
//     }

  }

  onSubmit = (e) =>{
    console.log(this.state.title, this.state.content,);
    e.preventDefault();

  }

  onInputChange = e =>{
      this.setState({
        [e.target.name]:e.target.value
      })
    // console.log(e.target.value);
  }

  onChangeDate = e=>{

    // console.log(e);
    this.setState({
      date: e
    })
  }

  render() {
    return (


      <div className="col-md-6 offset-md-3">
          <div className="card card-body">
              <h4>CREATE NOTE</h4>
                {/* SELECT USER */}
                <div className="form-group">

                    <select
                      className='form-select'
                      name='userSelected'
                      onChange={this.onInputChange}

                      >
                      {

                        this.state.users.map(user =>
                        <option key={user} value={user}>
                          {user}
                        </option>)

                      }
                    </select>
                </div>
                    <br />
                <div className="form-group">
                      <input
                        type="text"
                        className='form-control'
                        placeholder='Title'
                        onChange={this.onInputChange}
                        name='title'
                        required
                      />

                </div>
                    <br />
                <div className="form-group">
                      <textarea
                          name="content"
                          className='form-control'
                          placeholder="Content"
                          onChange={this.onInputChange}
                          required
                      >

                      </textarea>
                </div>

                <br />

                <div className="form-group">
                    <DatePicker
                      className="form-control"
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                </div>
                      <br />
                <form onSubmit={this.onSubmit}>
                      <button type='submit' className='btn btn-primary'>
                          Save
                      </button>
                </form>
          </div>
      </div>
    )
  }
}
